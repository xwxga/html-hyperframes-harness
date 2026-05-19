# Visual Board Patterns / 视觉 Board 模式库

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-19 22:31 | Sisyphus | Replaced Pattern D with Pattern W, the Figma-like Director Workbench pattern. / 用 Figma-like Director Workbench 的 Pattern W 替换 Pattern D。 |
| 2026-05-18 16:22 | Sisyphus | Replaced engineering-gate Pattern A with director-first preview board pattern, language switch, side annotations, and per-layout critique. |

## Purpose / 目的

This file defines the canonical visual pattern for `direction_board.html`. The current pattern is **Pattern W — Director Workbench**.

本文定义 `direction_board.html` 的规范视觉模式。当前模式是 **Pattern W — Director Workbench**。

## Pattern W — Director Workbench / Director Workbench 模式

### Goal / 目标

Give the director one Figma-like workbench where overall direction and every frame can be reviewed before final HyperFrames generation.

给导演一个 Figma-like workbench，在最终 HyperFrames 生成前同时审查整体方向和每一帧。

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
2. **Overview View / Overview 视图** — Director Cover, Rhythm Storyboard, Visual System Lock, Motion Timeline, Review Gate Summary.
3. **Frames View / Frames 视图** — left frame list, center 9:16 artboard, right inspector, bottom timeline.
4. **Annotation Layer / 批注层** — lightweight collapsible comment rail with JSON export.

### Required DOM / 必需 DOM

```html
<body data-lang="en" data-active-view="overview" data-active-frame="frame-01">
<header data-stage="director-workbench"></header>
<button data-view-switch="overview"></button>
<button data-view-switch="frames"></button>
<section data-stage="overview-view"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="frames-workbench"></section>
<aside data-stage="annotation-layer"></aside>
```

### Legacy Replacements / 旧结构替换

- `Layout Previews` -> `Visual System Lock`
- `Motion Before/After` -> `Motion Timeline` or `Motion Strip`
- final comment section -> lightweight side rail / collapsible drawer

### Boundary / 边界

`direction_board.html` remains a pre-generation review artifact. It must not become the final HyperFrames `index.html`.

`direction_board.html` 仍然是生成前审查 artifact，不能变成最终 HyperFrames `index.html`。
