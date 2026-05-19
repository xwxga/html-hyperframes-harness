#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const errors = [];
const warnings = [];

const requiredFiles = [
  "README.md",
  "SKILL.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  "docs/testing.md",
  "board/direction_board.template.html",
  "board/direction_board.css",
  "board/comment-layer.js",
  "templates/01_intake.md",
  "templates/02_design_direction.md",
  "templates/03_critical_frame_plan.md",
  "templates/04_render_plan.md",
  "templates/05_revision_plan.md",
  "examples/asset-first-board/direction_board.skeleton.html",
  "examples/asset-first-board/review_comments.example.json",
  "examples/luqee-workflow-film-v2-harness/direction_board.html",
  "references/direction-board-contract.md",
  "references/visual-board-patterns.md",
  "references/comment-layer-contract.md",
  "references/aspect-ratio-modes.md",
  "references/review-gates.md"
];

const requiredStages = [
  "director-workbench",
  "overview-view",
  "director-cover",
  "rhythm-storyboard",
  "visual-system-lock",
  "motion-timeline",
  "review-gate-summary",
  "frames-workbench",
  "annotation-layer"
];

const forbiddenDirectorStages = [
  "draft-check",
  "production-handoff",
  "compact-production-handoff",
  "implementation-gate",
  "engineering-checklist",
  "review-sync",
  "layout-previews",
  "motion-before-after"
];

const networkPatterns = [
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\bWebSocket\b/,
  /\bEventSource\b/,
  /<script[^>]+src=["']https?:\/\//i,
  /<link[^>]+href=["']https?:\/\//i
];

for (const file of requiredFiles) {
  if (!fs.existsSync(resolve(file))) errors.push(`Missing required file: ${file}`);
}

for (const file of [
  "board/direction_board.template.html",
  "examples/asset-first-board/direction_board.skeleton.html",
  "examples/luqee-workflow-film-v2-harness/direction_board.html"
]) {
  if (!fs.existsSync(resolve(file))) continue;
  const html = read(file);
  let lastIndex = -1;
  for (const stage of requiredStages) {
    const marker = `data-stage="${stage}"`;
    const index = html.indexOf(marker);
    if (index === -1) {
      errors.push(`${file} missing ${marker}`);
      continue;
    }
    if (index < lastIndex) errors.push(`${file} has out-of-order stage: ${stage}`);
    lastIndex = index;
  }
  if (!html.includes("data-comment-target-id")) errors.push(`${file} missing semantic comment targets`);
  if (!html.includes('data-lang-switch="en"') || !html.includes('data-lang-switch="zh"')) errors.push(`${file} missing global language switch`);
  if (!html.includes('data-view-switch="overview"') || !html.includes('data-view-switch="frames"')) errors.push(`${file} missing Overview/Frames view switch`);
  if (!html.includes('data-frame-select="frame-01"')) errors.push(`${file} missing frame selector controls`);
  if (!html.includes('data-lang="en"')) errors.push(`${file} must default to English with body data-lang="en"`);
  for (const selector of [
    'data-comment-target-type="section"',
    'data-comment-target-type="system"',
    'data-comment-target-type="keyframe"',
    'data-comment-target-type="motion"',
    'data-comment-target-type="frame"'
  ]) {
    if (!html.includes(selector)) errors.push(`${file} missing ${selector}`);
  }
  for (const stage of forbiddenDirectorStages) {
    if (html.includes(`data-stage="${stage}"`)) errors.push(`${file} contains forbidden director-stage: ${stage}`);
  }
  for (const phrase of ["Compact Production Handoff", "Production Handoff", "Implementation Gate", "Engineering Checklist", "Review & Sync"]) {
    if (html.includes(phrase)) errors.push(`${file} contains forbidden director-view phrase: ${phrase}`);
  }
  for (const phrase of ["Layout Previews", "Motion Before And After", "Motion Before/After"]) {
    if (html.includes(phrase)) errors.push(`${file} contains legacy workbench phrase: ${phrase}`);
  }
}

validateCommentJson("examples/asset-first-board/review_comments.example.json");
validateGitignore();
validateNoTrackedLocalState();
scanFiles();

if (warnings.length) {
  console.log("Warnings / 警告:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error("Static validation failed / 静态验证失败:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Static validation passed / 静态验证通过");

function resolve(file) {
  return path.join(root, file);
}

function read(file) {
  return fs.readFileSync(resolve(file), "utf8");
}

function validateCommentJson(file) {
  if (!fs.existsSync(resolve(file))) return;
  let parsed;
  try {
    parsed = JSON.parse(read(file));
  } catch (error) {
    errors.push(`${file} is invalid JSON: ${error.message}`);
    return;
  }
  if (!Array.isArray(parsed)) {
    errors.push(`${file} must be an array`);
    return;
  }
  const required = ["comment_id", "target_type", "target_id", "selector", "scope", "comment", "priority", "status"];
  parsed.forEach((comment, index) => {
    for (const key of required) {
      if (!comment || typeof comment[key] !== "string" || comment[key].trim() === "") {
        errors.push(`${file}[${index}] missing string field: ${key}`);
      }
    }
  });
}

function validateGitignore() {
  const gitignore = fs.existsSync(resolve(".gitignore")) ? read(".gitignore") : "";
  for (const entry of [".env", ".worktree-id", ".sisyphus/"]) {
    if (!gitignore.split(/\r?\n/).includes(entry)) errors.push(`.gitignore missing ${entry}`);
  }
}

function scanFiles() {
  const maxBytes = 5 * 1024 * 1024;
  const secretPatterns = [
    /-----BEGIN (RSA |DSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bghp_[A-Za-z0-9_]{30,}\b/,
    /\bgithub_pat_[A-Za-z0-9_]{30,}\b/,
    /\bsk-[A-Za-z0-9]{32,}\b/,
    /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
    /\b(api[_-]?key|secret|password|token)\s*[:=]\s*["'][^"']{16,}["']/i
  ];

  for (const file of walk(root)) {
    const rel = path.relative(root, file);
    const stat = fs.statSync(file);
    if (stat.size > maxBytes) errors.push(`Large file over 5MB: ${rel}`);
    if (!isTextFile(rel)) continue;
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of secretPatterns) {
      if (pattern.test(content)) errors.push(`Possible secret pattern in ${rel}`);
    }
    if (/\.(html|css|js)$/.test(rel)) {
      for (const pattern of networkPatterns) {
        if (pattern.test(content)) errors.push(`Forbidden network pattern in ${rel}: ${pattern}`);
      }
    }
  }
}

function validateNoTrackedLocalState() {
  const gitDir = resolve(".git");
  if (!fs.existsSync(gitDir)) return;
  const { execFileSync } = require("child_process");
  const forbidden = [".sisyphus", ".env", ".worktree-id", "credentials.json"];
  try {
    const output = execFileSync("git", ["ls-files", ...forbidden, "*.pem", "*.key"], { cwd: root, encoding: "utf8" }).trim();
    if (output) errors.push(`Forbidden local/private files are tracked: ${output.replace(/\n/g, ", ")}`);
  } catch (error) {
    warnings.push(`Unable to check tracked local state: ${error.message}`);
  }
}

function walk(dir) {
  const ignored = new Set([".git", ".sisyphus", "node_modules", "dist", "build"]);
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...walk(full));
    if (entry.isFile()) output.push(full);
  }
  return output;
}

function isTextFile(file) {
  return /\.(md|html|css|js|json|txt|ya?ml|gitignore)$/.test(file) || ["LICENSE", "README", "SECURITY", "CONTRIBUTING", "CODE_OF_CONDUCT"].includes(path.basename(file));
}
