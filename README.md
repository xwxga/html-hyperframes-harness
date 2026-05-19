# HTML HyperFrames Harness

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-19 22:31 | Sisyphus | Upgraded the review artifact wording to Director Workbench v1.5 with Overview/Frames views. / 将审查 artifact 文案升级为 Director Workbench v1.5，并加入 Overview/Frames 视图。 |
| 2026-05-18 16:22 | Sisyphus | Reframed the public harness around director-first preview boards, language switching, and side annotations. |
| 2026-05-18 00:00 | Sisyphus | Added root GitHub Pages landing page note and validator hardening follow-up. |
| 2026-05-18 00:00 | Sisyphus | Added MIT license decision, public project docs, static validation, testing, and GitHub Pages demo references. |
| 2026-05-17 00:06 | Sisyphus | Added public v1 positioning, canonical template sequence, Visual Review/comment loop, and explicit non-goals. |
| 2026-05-16 21:24 | Codex | Published the portable GitHub package with reusable harness docs, templates, references, and a bundled LUQEE example. |

## What This Is / 这是什么

HTML HyperFrames Harness is a public, reusable, agent-facing pre-generation harness for HyperFrames videos.

HTML HyperFrames Harness 是一个公开、可复用、给 Agent 使用的 HyperFrames 生成前 Harness。它用于在生成最终 HyperFrames `index.html` 之前，先通过 **Director Workbench** 形态的 `direction_board.html` 锁定节奏、视觉系统、逐帧意图、素材运动和评论。

It is a visual decision system, not a renderer or media-production pipeline.

它是视觉决策系统，不是渲染器，也不是媒体生产流水线。

The core rule is simple:

核心规则很简单：

- Markdown files are the source of truth.
- `direction_board.html` is the Director Workbench artifact and uses a fixed template.
- Review comments live in a weak side annotation rail, export JSON, and sync back to Markdown.
- Final HyperFrames generation starts only after `04_render_plan.md` is marked ready.

- Markdown 文件是事实源。
- `direction_board.html` 是 Director Workbench artifact，并使用固定模板。
- 审查评论位于弱化侧边批注栏，导出 JSON，并同步回 Markdown。
- 只有 `04_render_plan.md` 标记 ready 后，才进入最终 HyperFrames 生成。

## What This Is Not / 不是什么

- Not a HyperFrames renderer. / 不是 HyperFrames 渲染器。
- Not a backend collaboration app. / 不是后端协作应用。
- Not a provider-specific Image2Image, Image2GPT, or Image-to-Video SDK wrapper. / 不是绑定供应商的 Image2Image、Image2GPT 或 Image-to-Video SDK 封装。
- Not a final `index.html` generator by itself. / 本身不直接生成最终 `index.html`。
- Not a replacement for human visual review. / 不替代人的视觉审查。

## Repository Layout / 仓库结构

```text
.
├── SKILL.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── docs/
│   └── testing.md
├── scripts/
│   └── validate-static.js
├── demo/
│   └── index.html
├── index.html
├── templates/
│   ├── 01_intake.md
│   ├── 02_design_direction.md
│   ├── 03_critical_frame_plan.md
│   ├── 04_render_plan.md
│   ├── 05_revision_plan.md
│   └── support/
│       ├── content_blueprint.md
│       ├── asset_manifest.md
│       ├── motion_intent.md
│       └── ai_media_brief.md
├── board/
│   ├── direction_board.template.html
│   ├── direction_board.css
│   └── comment-layer.js
├── references/
│   ├── aspect-ratio-modes.md
│   ├── asset-manifest-contract.md
│   ├── ai-media-brief-contract.md
│   ├── comment-layer-contract.md
│   ├── direction-board-contract.md
│   ├── motion-intent-contract.md
│   ├── review-gates.md
│   └── visual-board-patterns.md
├── specs/
│   └── 2026-05-13-hyperframes-direction-harness-mvp-spec.md
└── examples/
    ├── asset-first-board/
    └── luqee-workflow-film-v2-harness/
```

## License / 许可证

This repository uses the MIT License for code, templates, documentation, and examples.

本仓库对代码、模板、文档和示例统一使用 MIT License。

Why MIT: this package is a reusable skill/template harness, and MIT keeps public reuse simple without mixing code and documentation licenses.

选择 MIT 的原因：本项目是可复用的 skill/template harness，MIT 能让公开复用最简单，不需要混合代码许可证和文档许可证。

## How To Use / 如何使用

1. Copy the core `templates/` files into a new project folder as `harness/`.
2. Fill `01_intake.md` from the user brief and real assets.
3. Choose and record the visual route in `02_design_direction.md`.
4. Plan pages and critical frames in `03_critical_frame_plan.md`.
5. Use `board/direction_board.template.html` and `references/visual-board-patterns.md` to build and review a director-first `direction_board.html`.
6. Let reviewers comment from the side annotation rail on selectable HTML targets; export comments to JSON and sync them into `05_revision_plan.md`.
7. Sync approved review changes back to Markdown.
8. Mark `04_render_plan.md` ready, then hand off to the HyperFrames skill to generate the final `index.html`.

1. 把核心 `templates/` 文件复制到新项目的 `harness/` 目录。
2. 根据用户 brief 和真实素材填写 `01_intake.md`。
3. 在 `02_design_direction.md` 中选择并记录视觉路线。
4. 在 `03_critical_frame_plan.md` 中规划页面和关键帧。
5. 使用 `board/direction_board.template.html` 和 `references/visual-board-patterns.md` 构建并审查导演优先的 `direction_board.html`。
6. 审查者可以在侧边批注栏中对 HTML 可选目标写评论；评论导出为 JSON，并同步进 `05_revision_plan.md`。
7. 把批准后的审查修改同步回 Markdown。
8. 将 `04_render_plan.md` 标记 ready 后，再交给 HyperFrames skill 生成最终 `index.html`。

## Example / 示例

`examples/luqee-workflow-film-v2-harness/` is a bundled example with Markdown plans, a review HTML board, and local image assets so the board can be opened directly.

`examples/luqee-workflow-film-v2-harness/` 是一个带素材的完整示例，包含 Markdown 计划、审查 HTML board 和本地图片资产，可以直接打开 HTML 查看结构。

## Testing / 测试

Run the static validator before release:

```bash
node scripts/validate-static.js
```

发布前运行静态验证：

```bash
node scripts/validate-static.js
```

The validator checks required files, required board `data-stage` markers, comment JSON, large files, suspicious secrets, and local-state ignore rules. More detail: `docs/testing.md`.

验证脚本会检查必需文件、必需 board `data-stage` 标记、评论 JSON、大文件、可疑密钥和本地状态忽略规则。更多说明见 `docs/testing.md`。

## Demo / 演示

Open `demo/index.html` locally or publish with GitHub Pages. The root `index.html` is only a GitHub Pages landing/redirect page; it is not a final HyperFrames composition. The bundled workflow `.github/workflows/pages.yml` validates the static package before deploying.

本地打开 `demo/index.html`，或用 GitHub Pages 发布。根目录 `index.html` 只是 GitHub Pages 入口/跳转页，不是最终 HyperFrames composition。内置 workflow `.github/workflows/pages.yml` 会先验证静态包，再部署。

## Local State / 本地状态

`.sisyphus/` is local agent planning state and is intentionally ignored. Do not commit it. Public planning notes should be rewritten into `docs/` with secrets and private paths removed.

`.sisyphus/` 是本地 agent 计划状态，已被有意忽略。不要提交它。需要公开的计划应改写进 `docs/`，并移除密钥和私人路径。
