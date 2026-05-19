# Director Preview Direction Board Example / 导演预览 Direction Board 示例

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Reframed the example around Pattern D director preview boards and removed production-handoff guidance. |
| 2026-05-17 00:22 | Sisyphus | Added public V1 board template and local comment-layer example references. |
| 2026-05-16 21:24 | Codex | Updated example paths for the standalone GitHub package. |
| 2026-05-15 13:00 | Sisyphus | Clarified that the example preserves critical-frame mockups as a required visual section. |
| 2026-05-15 13:00 | Sisyphus | Added a reusable Pattern A skeleton HTML alongside the live rough-board reference. |
| 2026-05-15 13:00 | Sisyphus | Added a golden-reference note for the asset-first visual Direction Board pattern. |

## Purpose / 目的

This example explains the preferred director preview board structure for HyperFrames Direction Harness runs.

本示例说明 HyperFrames Direction Harness 推荐的导演预览 board 结构。

Use it as a **structure reference**, not a content reference.

把它作为**结构参考**，不是内容参考。

## Golden Reference / 黄金参考

Current live reference in this repository:

- HTML board: `examples/luqee-workflow-film-v2-harness/direction_board.html`
- Asset source-of-truth: `examples/luqee-workflow-film-v2-harness/01_intake.md`
- Reusable skeleton: `examples/asset-first-board/direction_board.skeleton.html`
- Public V1 fixed template: `board/direction_board.template.html`
- Public V1 comment layer: `board/comment-layer.js`

当前仓库内的 live reference 见上方路径。

## What This Example Demonstrates / 这个示例说明什么

- First screen establishes director intent and rhythm, not a long summary.
- Rhythm storyboard mixes sections and keyframes.
- Every layout has a visual mock, locked main copy, primary content, asset role, and motion intent.
- Motion is shown as before/after states.
- Style critique is per-layout and director-facing.
- Review comments attach to selectable targets from a weak side annotation rail and export JSON.
- The visible interface shows English or Chinese, never both side by side.
- Production/sync content stays out of the director-facing board.

- 首屏建立导演意图和节奏，不写长摘要。
- 节奏分镜混合 sections 和 keyframes。
- 每个版面都有视觉 mock、已锁定主文字、主要内容、素材角色和运动意图。
- 动效用 before/after 状态展示。
- 风格检查按版面进行，并面向导演。
- 审查评论从弱化侧边批注栏绑定到可选择目标，并导出 JSON。
- 可见界面只显示英文或中文，不中英并排。
- Production/sync 内容不进入导演侧 board。

## Use In A New Run / 新项目如何使用

1. Read the user's brief and real assets.
2. Select a Design Router aesthetic system.
3. Ask mandatory multiple-choice questions for sections, assets, and mainline.
4. Build `direction_board.html` from `board/direction_board.template.html` using Pattern D from `references/visual-board-patterns.md`.
5. Enable selectable semantic targets if the review needs comments.
6. Borrow the structure of the golden reference, but replace all content, colors, and typography according to the selected project and design route.

## Do Not Copy / 不要复制

- Do not copy the rough board's project-specific screenshots.
- Do not copy its exact colors when another Design Router style is selected.
- Do not copy its page count or narrative structure.
- Do not copy its text.

Copy the **board logic** only: director cover, rhythm storyboard, layout previews, keyframe previews, motion before/after, style critique, and side annotations.

只复制 **board logic**：导演封面、节奏分镜、版面预览、关键帧预览、运动前后状态、风格检查和侧边批注。
