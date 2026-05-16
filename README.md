# HTML HyperFrames Harness

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-16 21:24 | Codex | Published the portable GitHub package with reusable harness docs, templates, references, and a bundled LUQEE example. |

## What This Is / 这是什么

HTML HyperFrames Harness is an agent-facing direction-convergence workflow for short-form HyperFrames videos.

HTML HyperFrames Harness 是一套给 Agent 使用的方向收敛工作流，用于在生成最终 HyperFrames 短视频 `index.html` 之前，先锁定视觉方向、素材角色、关键帧和渲染交接。

The core rule is simple:

核心规则很简单：

- Markdown files are the source of truth.
- `direction_board.html` is the visual review artifact.
- Final HyperFrames generation starts only after `04_render_plan.md` is marked ready.

## Repository Layout / 仓库结构

```text
.
├── SKILL.md
├── templates/
│   ├── 01_intake.md
│   ├── 02_design_direction.md
│   ├── 03_critical_frame_plan.md
│   └── 04_render_plan.md
├── references/
│   ├── direction-board-contract.md
│   └── visual-board-patterns.md
├── specs/
│   └── 2026-05-13-hyperframes-direction-harness-mvp-spec.md
└── examples/
    ├── asset-first-board/
    └── luqee-workflow-film-v2-harness/
```

## How To Use / 如何使用

1. Copy `templates/` into a new project folder as `harness/`.
2. Fill `01_intake.md` from the user brief and real assets.
3. Choose and record the visual route in `02_design_direction.md`.
4. Plan pages and critical frames in `03_critical_frame_plan.md`.
5. Build and review `direction_board.html` using `references/visual-board-patterns.md`.
6. Sync review changes back to Markdown.
7. Mark `04_render_plan.md` ready, then generate the final HyperFrames `index.html`.

## Example / 示例

`examples/luqee-workflow-film-v2-harness/` is a bundled example with Markdown plans, a review HTML board, and local image assets so the board can be opened directly.

`examples/luqee-workflow-film-v2-harness/` 是一个带素材的完整示例，包含 Markdown 计划、审查 HTML board 和本地图片资产，可以直接打开 HTML 查看结构。
