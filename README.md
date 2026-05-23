# HTML HyperFrames Harness

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-24 03:25 | Codex | Prepared the strict public release package, clarified unofficial independent positioning, and removed legacy/comment artifacts. / 整理严格公开发布包，明确非官方独立定位，并移除旧版与评论相关 artifact。 |
| 2026-05-23 23:31 | Codex | Restored asset-first Director Workbench quality gates and rebuilt the real HyperFrames example around the full 6-frame plan. / 恢复素材优先的 Director Workbench 质量门槛，并围绕完整 6 帧计划重建真实 HyperFrames 示例。 |
| 2026-05-19 22:31 | Sisyphus | Upgraded the review artifact wording to Director Workbench v1.5 with Overview/Frames views. / 将审查 artifact 文案升级为 Director Workbench v1.5，并加入 Overview/Frames 视图。 |
| 2026-05-18 16:22 | Sisyphus | Reframed the public harness around director-first preview boards, language switching, GitHub Pages demo notes, validation, and public project docs. |
| 2026-05-17 00:06 | Sisyphus | Added public v1 positioning, canonical template sequence, Visual Review loop, and explicit non-goals. |
| 2026-05-16 21:24 | Codex | Published the portable GitHub package with reusable harness docs, templates, references, and a bundled example. |

## What This Is / 这是什么

HTML HyperFrames Harness is an unofficial independent community package for HyperFrames workflows.

HTML HyperFrames Harness 是一个面向 HyperFrames workflow 的非官方、独立社区包。

It provides a reusable, agent-facing **Director Workbench** before final HyperFrames render: `direction_board.html` locks rhythm, visual system, critical-frame style, frame-by-frame intent, asset motion, and final `index.html` mapping.

它提供一个可复用、给 Agent 使用的 **Director Workbench**：在最终 HyperFrames render 之前，用 `direction_board.html` 锁定节奏、视觉系统、关键帧风格、逐帧意图、素材运动，以及到最终 `index.html` 的映射。

This repository is not a HyperFrames fork, not an OpenDesign fork, and not affiliated with or endorsed by HyperFrames unless accepted upstream. HyperFrames is the target workflow; Figma-like/OpenDesign-style language is used only to describe the workbench UI pattern.

本仓库不是 HyperFrames fork，不是 OpenDesign fork；除非被上游接受，否则不代表 HyperFrames 官方。HyperFrames 是目标 workflow；Figma-like / OpenDesign-style 只是用来描述 workbench 的界面语言。

It is a visual decision system, not a renderer or media-production pipeline.

它是视觉决策系统，不是渲染器，也不是媒体生产流水线。

The core rule is simple:

核心规则很简单：

- Markdown files are the source of truth.
- `direction_board.html` is the Director Workbench artifact: Pattern W shell, Pattern A asset-first substance.
- Critical-frame style defaults to the HyperFrames frame style and is shown explicitly in the Frames Inspector.
- Final HyperFrames generation starts only after `04_render_plan.md` is marked ready.

- Markdown 文件是事实源。
- `direction_board.html` 是 Director Workbench artifact：Pattern W 外壳，Pattern A 素材优先内容。
- 关键帧风格默认使用 HyperFrames 画面风格，并在 Frames Inspector 中显式展示。
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
│   └── workbench-controls.js
├── references/
│   ├── aspect-ratio-modes.md
│   ├── asset-manifest-contract.md
│   ├── ai-media-brief-contract.md
│   ├── direction-board-contract.md
│   ├── motion-intent-contract.md
│   ├── review-gates.md
│   └── visual-board-patterns.md
└── examples/
    └── html-hyperframes-video-project/
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
5. Use `board/direction_board.template.html` and `references/visual-board-patterns.md` to build and review a Director Workbench that starts with real assets, contact sheet, storyboard, and frame mockups.
6. Review the Frames view and confirm the Inspector declares the critical-frame style route, motion intent, and final source mapping.
7. Sync approved review changes back to Markdown.
8. Mark `04_render_plan.md` ready, then hand off to the HyperFrames skill to generate the final `index.html`.

1. 把核心 `templates/` 文件复制到新项目的 `harness/` 目录。
2. 根据用户 brief 和真实素材填写 `01_intake.md`。
3. 在 `02_design_direction.md` 中选择并记录视觉路线。
4. 在 `03_critical_frame_plan.md` 中规划页面和关键帧。
5. 使用 `board/direction_board.template.html` 和 `references/visual-board-patterns.md` 构建并审查 Director Workbench；它必须先展示真实素材、contact sheet、storyboard 和 frame mockups。
6. 审查 Frames 视图，并确认 Inspector 显式声明关键帧风格路线、motion intent 和最终 source 映射。
7. 把批准后的审查修改同步回 Markdown。
8. 将 `04_render_plan.md` 标记 ready 后，再交给 HyperFrames skill 生成最终 `index.html`。

## Example / 示例

`examples/html-hyperframes-video-project/` is the bundled public example. It contains the real 6-frame Director Workbench, full harness Markdown, the final HyperFrames `index.html`, `hyperframes.json`, `package.json`, local assets, snapshots, a lightweight preview MP4, and render notes.

`examples/html-hyperframes-video-project/` 是唯一公开示例，包含真实 6 帧 Director Workbench、完整 harness Markdown、最终 HyperFrames `index.html`、`hyperframes.json`、`package.json`、本地素材、快照、轻量预览 MP4 和渲染说明。

## Relationship To HyperFrames / 与 HyperFrames 的关系

This package sits before final HyperFrames generation. It helps a human reviewer and the next agent agree on what should be rendered before the final `index.html` is produced.

本包位于最终 HyperFrames 生成之前。它帮助人类 reviewer 和下一个 agent 在最终 `index.html` 产出前，先对“到底要渲染什么”达成一致。

The final HyperFrames composition remains separate. This harness only provides the review layer, templates, contracts, and validation gates.

最终 HyperFrames composition 保持独立。本 harness 只提供审查层、模板、契约和验证门槛。

## Testing / 测试

Run the static validator before release:

```bash
node scripts/validate-static.js
```

发布前运行静态验证：

```bash
node scripts/validate-static.js
```

The validator checks required files, required board `data-stage` markers, golden-example locked copy, frame count, asset targets, retired example references, large files, suspicious secrets, and local-state ignore rules. More detail: `docs/testing.md`.

验证脚本会检查必需文件、必需 board `data-stage` 标记、golden example 锁定文案、frame 数量、素材目标、废弃示例引用、大文件、可疑密钥和本地状态忽略规则。更多说明见 `docs/testing.md`。

## Demo / 演示

Open `demo/index.html` locally or publish with GitHub Pages. The root `index.html` is only a GitHub Pages landing/redirect page; it is not a final HyperFrames composition. The bundled workflow `.github/workflows/pages.yml` validates the static package before deploying.

本地打开 `demo/index.html`，或用 GitHub Pages 发布。根目录 `index.html` 只是 GitHub Pages 入口/跳转页，不是最终 HyperFrames composition。内置 workflow `.github/workflows/pages.yml` 会先验证静态包，再部署。

## Local State / 本地状态

`.sisyphus/` is local agent planning state and is intentionally ignored. Do not commit it. Public planning notes should be rewritten into `docs/` with secrets and private paths removed.

`.sisyphus/` 是本地 agent 计划状态，已被有意忽略。不要提交它。需要公开的计划应改写进 `docs/`，并移除密钥和私人路径。
