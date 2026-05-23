#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const errors = [];
const warnings = [];

const requiredFiles = [
  "README.md",
  "README.zh-CN.md",
  "SKILL.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  "docs/testing.md",
  "docs/media/director-workbench-overview.png",
  "docs/media/director-workbench-frames.png",
  "board/direction_board.template.html",
  "board/direction_board.css",
  "board/workbench-controls.js",
  "templates/01_intake.md",
  "templates/02_design_direction.md",
  "templates/03_critical_frame_plan.md",
  "templates/04_render_plan.md",
  "templates/05_revision_plan.md",
  "examples/html-hyperframes-video-project/README.md",
  "examples/html-hyperframes-video-project/harness/direction_board.html",
  "examples/html-hyperframes-video-project/harness/01_intake.md",
  "examples/html-hyperframes-video-project/harness/02_design_direction.md",
  "examples/html-hyperframes-video-project/harness/03_critical_frame_plan.md",
  "examples/html-hyperframes-video-project/harness/04_render_plan.md",
  "examples/html-hyperframes-video-project/index.html",
  "examples/html-hyperframes-video-project/hyperframes.json",
  "examples/html-hyperframes-video-project/package.json",
  "examples/html-hyperframes-video-project/renders/README.md",
  "examples/html-hyperframes-video-project/renders/html_hyperframes_5frame_preview.mp4",
  "examples/html-hyperframes-video-project/assets/thariq_x_first_panel_render.mp4",
  "examples/html-hyperframes-video-project/assets/thariq_x_first_panel_first_frame.png",
  "examples/html-hyperframes-video-project/assets/karpathy_html_quote.png",
  "examples/html-hyperframes-video-project/assets/html_effectiveness_site_scroll_render.mp4",
  "examples/html-hyperframes-video-project/assets/html_effectiveness_site_scroll_first_frame.png",
  "examples/html-hyperframes-video-project/assets/tuturetom_main_video_10s_render.mp4",
  "examples/html-hyperframes-video-project/assets/tuturetom_main_video_10s_first_frame.png",
  "examples/html-hyperframes-video-project/assets/figma_direction_board_scroll_render.mp4",
  "examples/html-hyperframes-video-project/assets/figma_direction_board_scroll_first_frame.png",
  "examples/html-hyperframes-video-project/snapshots/frame-00-at-0pct.png",
  "examples/html-hyperframes-video-project/snapshots/frame-01-at-25pct.png",
  "examples/html-hyperframes-video-project/snapshots/frame-02-at-50pct.png",
  "examples/html-hyperframes-video-project/snapshots/frame-03-at-75pct.png",
  "examples/html-hyperframes-video-project/snapshots/frame-04-at-100pct.png",
  "references/direction-board-contract.md",
  "references/visual-board-patterns.md",
  "references/aspect-ratio-modes.md",
  "references/review-gates.md"
];

const requiredStages = [
  "director-workbench",
  "overview-view",
  "director-cover",
  "visual-contact-sheet",
  "asset-wall",
  "rhythm-storyboard",
  "section-storyboard",
  "critical-frame-mockups",
  "visual-system-lock",
  "motion-timeline",
  "review-gate-summary",
  "frames-workbench"
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
  "examples/html-hyperframes-video-project/harness/direction_board.html"
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
  if (!html.includes('data-lang-switch="en"') || !html.includes('data-lang-switch="zh"')) errors.push(`${file} missing global language switch`);
  if (!html.includes('data-view-switch="overview"') || !html.includes('data-view-switch="frames"')) errors.push(`${file} missing Overview/Frames view switch`);
  if (!html.includes('data-frame-select="frame-01"')) errors.push(`${file} missing frame selector controls`);
  if (!html.includes('data-lang="en"')) errors.push(`${file} must default to English with body data-lang="en"`);
  validateFrameMotionSources(file, html);
  if (!html.includes("HyperFrames default")) errors.push(`${file} missing explicit HyperFrames default frame style declaration`);
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

validateSingleGoldenExample();
validateNoForbiddenExampleReferences();
validateStrictPublicPackage();
validateGoldenExampleQuality();
validateGitignore();
validateNoTrackedLocalState();
scanFiles();

if (warnings.length) {
  console.log("Warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error("Static validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Static validation passed");

function resolve(file) {
  return path.join(root, file);
}

function read(file) {
  return fs.readFileSync(resolve(file), "utf8");
}

function countMatches(value, pattern) {
  return Array.from(value.matchAll(pattern)).length;
}

function validateFrameMotionSources(file, html) {
  const frameMatches = html.matchAll(/<div\b[^>]*\bdata-frame="([^"]+)"[^>]*>/g);
  let count = 0;
  for (const match of frameMatches) {
    count += 1;
    const tag = match[0];
    const frameId = match[1];
    if (!/\bdata-(motion|frame-motion|motion-intent)="[^"]+"/.test(tag)) {
      errors.push(`${file} ${frameId} missing frame motion source for inspector`);
    }
  }
  if (count === 0) errors.push(`${file} missing inspectable data-frame artboards`);
}

function validateSingleGoldenExample() {
  const examplesDir = resolve("examples");
  if (!fs.existsSync(examplesDir)) return;
  const dirs = fs.readdirSync(examplesDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  if (dirs.length !== 1 || dirs[0] !== "html-hyperframes-video-project") {
    errors.push(`examples must contain only html-hyperframes-video-project; found: ${dirs.join(", ") || "(none)"}`);
  }
}

function validateNoForbiddenExampleReferences() {
  const forbidden = [
    "markdown-to-html-workbench",
    "asset-first-board",
    "luqee-workflow-film-v2-harness",
    "LUQEE",
    "LuQEE",
    "luqee"
  ];
  for (const file of walk(root)) {
    const rel = path.relative(root, file);
    if (rel === "scripts/validate-static.js") continue;
    if (!isTextFile(rel)) continue;
    const content = fs.readFileSync(file, "utf8");
    for (const token of forbidden) {
      if (content.includes(token)) errors.push(`Forbidden retired example reference in ${rel}: ${token}`);
    }
  }
}

function validateStrictPublicPackage() {
  const readme = fs.existsSync(resolve("README.md")) ? read("README.md") : "";
  const chineseReadme = fs.existsSync(resolve("README.zh-CN.md")) ? read("README.zh-CN.md") : "";
  if (!readme.includes("unofficial independent community package")) {
    errors.push("README.md must clearly position this as an unofficial independent community package");
  }
  if (!readme.includes("not a HyperFrames fork") || !readme.includes("not an OpenDesign fork")) {
    errors.push("README.md must clarify that this repo is not a HyperFrames or OpenDesign fork");
  }
  if (/changelog/i.test(readme)) errors.push("README.md must not contain a changelog");
  if (!readme.includes("README.zh-CN.md")) errors.push("README.md must link to README.zh-CN.md for language switching");
  if (!chineseReadme.includes("README.md")) errors.push("README.zh-CN.md must link back to README.md");
  for (const image of ["docs/media/director-workbench-overview.png", "docs/media/director-workbench-frames.png"]) {
    if (!readme.includes(image)) errors.push(`README.md must reference ${image}`);
  }

  const retiredPaths = [
    "docs/director-workbench-upgrade-brief.md",
    "specs/2026-05-13-hyperframes-direction-harness-mvp-spec.md",
    "board/comment-layer.js",
    "references/comment-layer-contract.md"
  ];
  for (const retiredPath of retiredPaths) {
    if (fs.existsSync(resolve(retiredPath))) errors.push(`Retired public-package file still exists: ${retiredPath}`);
  }

  const oldCommentSystemTokens = [
    "comment-layer",
    "data-comment",
    "comment export",
    "side annotation rail",
    "static comment layer",
    "review_comments.example.json"
  ];
  for (const file of walk(root)) {
    const rel = path.relative(root, file);
    if (rel === "scripts/validate-static.js") continue;
    if (!isTextFile(rel)) continue;
    const content = fs.readFileSync(file, "utf8").toLowerCase();
    for (const token of oldCommentSystemTokens) {
      if (content.includes(token)) errors.push(`Old comment-system token in ${rel}: ${token}`);
    }
  }

  for (const file of walk(root)) {
    const rel = path.relative(root, file);
    if (!/\.md$/.test(rel)) continue;
    const content = fs.readFileSync(file, "utf8");
    if (/^##\s+Changelog\b/im.test(content) || /变更日志/.test(content)) {
      errors.push(`Markdown changelog must be removed from ${rel}`);
    }
    if (isChineseAllowed(rel)) continue;
    if (/[\u3400-\u9fff]/.test(content)) {
      errors.push(`English public Markdown must not contain Chinese characters: ${rel}`);
    }
  }
}

function isChineseAllowed(rel) {
  if (rel === "README.zh-CN.md") return true;
  return /^examples\/html-hyperframes-video-project\/harness\/0[1-4]_/.test(rel);
}

function validateGoldenExampleQuality() {
  const boardFile = "examples/html-hyperframes-video-project/harness/direction_board.html";
  const planFile = "examples/html-hyperframes-video-project/harness/03_critical_frame_plan.md";
  const renderPlanFile = "examples/html-hyperframes-video-project/harness/04_render_plan.md";
  const finalIndexFile = "examples/html-hyperframes-video-project/index.html";
  if (![boardFile, planFile, renderPlanFile, finalIndexFile].every((file) => fs.existsSync(resolve(file)))) return;

  const board = read(boardFile);
  const framePlan = read(planFile);
  const renderPlan = read(renderPlanFile);
  const finalIndex = read(finalIndexFile);
  const lockedCopy = [
    "OPENING SLOT",
    "网页，正在变成新的编导台",
    "人类吃信息，靠视觉和声音",
    "不是文档，是可看的例子",
    "网页输出，已经有人在做",
    "先生成编导台，再生成视频"
  ];

  for (const copy of lockedCopy) {
    if (!board.includes(copy)) errors.push(`${boardFile} missing locked copy: ${copy}`);
    if (!renderPlan.includes(copy)) errors.push(`${renderPlanFile} missing locked copy: ${copy}`);
    if (!finalIndex.includes(copy)) errors.push(`${finalIndexFile} missing locked copy: ${copy}`);
  }

  const frames = new Set(Array.from(board.matchAll(/data-frame="(frame-\d+)"/g)).map((match) => match[1]));
  if (frames.size < 6) errors.push(`${boardFile} must expose at least 6 data-frame artboards; found ${frames.size}`);

  const frameSelectors = new Set(Array.from(board.matchAll(/data-frame-select="(frame-\d+)"/g)).map((match) => match[1]));
  if (frameSelectors.size < 6) errors.push(`${boardFile} must expose at least 6 frame selector controls; found ${frameSelectors.size}`);

  const assetCards = countMatches(board, /data-asset-status="must-use"/g);
  if (assetCards < 5) errors.push(`${boardFile} must expose at least 5 must-use asset cards; found ${assetCards}`);

  if (!board.includes("HyperFrames default: white grid canvas")) {
    errors.push(`${boardFile} must explicitly lock the critical-frame style to the HyperFrames default`);
  }

  const realMedia = countMatches(board, /<(video|img)\b/g);
  if (realMedia < 5) errors.push(`${boardFile} must show at least 5 real media elements; found ${realMedia}`);

  for (const stage of ["visual-contact-sheet", "asset-wall", "section-storyboard", "critical-frame-mockups"]) {
    if (!board.includes(`data-stage="${stage}"`)) errors.push(`${boardFile} missing asset-first stage: ${stage}`);
  }

  if (framePlan.length < 12000) errors.push(`${planFile} is too short for the golden example; preserve the full critical-frame plan instead of a summary`);
  if (!framePlan.includes("Entry") || !framePlan.includes("Hero") || !framePlan.includes("Transition")) {
    errors.push(`${planFile} must preserve Entry / Hero / Transition critical-frame planning`);
  }

  for (const asset of [
    "thariq_x_first_panel_render.mp4",
    "karpathy_html_quote.png",
    "html_effectiveness_site_scroll_render.mp4",
    "tuturetom_main_video_10s_render.mp4",
    "figma_direction_board_scroll_render.mp4"
  ]) {
    if (!board.includes(asset)) errors.push(`${boardFile} missing real asset reference: ${asset}`);
    if (!renderPlan.includes(asset)) errors.push(`${renderPlanFile} missing real asset reference: ${asset}`);
  }
}

function validateGitignore() {
  const gitignore = fs.existsSync(resolve(".gitignore")) ? read(".gitignore") : "";
  for (const entry of [".DS_Store", ".env", ".worktree-id", ".sisyphus/"]) {
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
    if (path.basename(file) === ".DS_Store") errors.push(`Local system file must not be published: ${rel}`);
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
