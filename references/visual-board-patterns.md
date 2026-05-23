# Visual Board Patterns / 视觉 Board 模式库

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-24 00:14 | Codex | Removed the side review rail and defined HyperFrames default as the critical-frame style route. / 移除侧边审查栏，并将 HyperFrames 默认定义为关键帧风格路线。 |
| 2026-05-23 23:31 | Codex | Defined Pattern W as the shell and Pattern A as the required asset-first substance. / 将 Pattern W 定义为外壳，并将 Pattern A 定义为必需的素材优先内容。 |
| 2026-05-19 22:31 | Sisyphus | Promoted Pattern W as the Figma-like Director Workbench pattern. / 将 Pattern W 升级为 Figma-like Director Workbench 模式。 |
| 2026-05-18 16:22 | Sisyphus | Replaced engineering-gate Pattern A with director-first preview board pattern, language switch, and per-layout critique. |

## Purpose / 目的

This file defines the canonical visual pattern for `direction_board.html`. The current pattern is **Pattern W shell + Pattern A substance**.

本文定义 `direction_board.html` 的规范视觉模式。当前模式是 **Pattern W 外壳 + Pattern A 内容**。

## Pattern W — Director Workbench / Director Workbench 模式

### Goal / 目标

Give the director one Figma-like workbench where overall direction and every frame can be reviewed before final HyperFrames generation. Pattern W defines the workbench UI shell; Pattern A defines the asset-first evidence that must fill that shell.

给导演一个 Figma-like workbench，在最终 HyperFrames 生成前同时审查整体方向和每一帧。Pattern W 定义 workbench UI 外壳；Pattern A 定义必须填入这个外壳的素材优先证据。

### Visual Language / 视觉语言

- white canvas / 白色画布
- soft grid / 柔和网格
- selection outlines / 选择描边
- small pills / 小 pills
- side panels / 侧栏
- 9:16 artboards / 9:16 artboards
- bottom timeline / 底部 timeline
- Figma-like controls, not Apple/macOS chrome / Figma-like 控件，不用 Apple/macOS chrome

### Required Information Architecture / 必需信息架构

1. **Top Bar / 顶栏** — project name, status, Overview/Frames switch, language switch.
2. **Overview View / Overview 视图** — Director Cover, Visual Contact Sheet, Asset Wall, Section Storyboard, Critical Frame Mockups, Visual System Lock, Motion Timeline, Review Gate Summary.
3. **Frames View / Frames 视图** — left frame list, center 9:16 artboard, right inspector, bottom timeline.
4. **Frame Style Lock / 关键帧风格锁定** — Inspector declares the active critical-frame visual route.

### Required DOM / 必需 DOM

```html
<body data-lang="en" data-active-view="overview" data-active-frame="frame-01">
<header data-stage="director-workbench"></header>
<button data-view-switch="overview"></button>
<button data-view-switch="frames"></button>
<section data-stage="overview-view"></section>
<section data-stage="visual-contact-sheet"></section>
<section data-stage="asset-wall"></section>
<section data-stage="section-storyboard"></section>
<section data-stage="critical-frame-mockups"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="frames-workbench"></section>
```

## Pattern A Substance / Pattern A 内容

Pattern A is mandatory for real video examples. It prevents a board from becoming a pretty but empty UI contract.

真实视频示例必须使用 Pattern A 内容。它防止 board 变成漂亮但空洞的 UI contract。

### Required Order Inside Overview / Overview 内必需顺序

1. **Visual Contact Sheet / 视觉总览** — first viewport, visual-dominant, every planned final frame visible.
2. **Asset Wall / 素材墙** — all must-use assets visible with role, page assignment, crop, and risk.
3. **Section Storyboard / 章节分镜** — user-confirmed sections as a visual sequence.
4. **Critical Frame Mockups / 关键帧 Mockup** — one 9:16 mockup per final frame, using locked final-video copy.
5. **Visual System Lock / 视觉系统锁定** — artboard, typography, components, asset treatment.
6. **Motion Timeline / 运动时间线** — source-card motion, transition anchor, and hold intent.
7. **Review Gate Summary / 审查门槛摘要** — compact status only.

### Required Visual Ratio / 必须视觉比例

- The first viewport must be at least 60% visual material.
- Before the review summary, visual objects must dominate prose.
- Every planned final frame needs a visible mock, not only inspector text.
- Locked final-video copy must remain source content; translate UI labels only.
- The Frames Inspector must declare the critical-frame style route. Default route: HyperFrames default, meaning white grid canvas, black linework, green status dot, sparse title-card copy, and source-card evidence.

### Forbidden Empty-Board Patterns / 禁止的空泛 Board

- Replacing source titles with generic English positioning copy.
- Compressing a detailed critical-frame plan into a short summary table.
- Showing fewer frame previews than the final HyperFrames composition.
- Hiding must-use assets behind a final summary or inspector-only view.
- Treating validator stage presence as proof of visual direction quality.

### Legacy Replacements / 旧结构替换

- `Layout Previews` -> `Visual System Lock`
- `Motion Before/After` -> `Motion Timeline` or `Motion Strip`
- `Visual Contact Sheet`, `Asset Wall`, and `Critical Frame Mockups` remain required substance, not legacy content.
- side review rails -> removed from the public workbench

### Boundary / 边界

`direction_board.html` remains a pre-generation review artifact. It must not become the final HyperFrames `index.html`.

`direction_board.html` 仍然是生成前审查 artifact，不能变成最终 HyperFrames `index.html`。
