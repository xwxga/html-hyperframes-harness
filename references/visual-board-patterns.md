# Visual Board Patterns / 视觉 Board 模式库

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-16 21:24 | Codex | Updated canonical and example paths for the standalone GitHub package. |
| 2026-05-15 16:36 | Sisyphus | Added layout-only boundary and mainline-lock preservation rules for Pattern A revisions. |
| 2026-05-15 13:00 | Sisyphus | Added self-path and verification wording for board-pattern routing. |
| 2026-05-15 13:00 | Sisyphus | Added the mandatory asset-first visual board pattern library for HyperFrames Direction Harness. |

## Purpose / 目的

This file binds visual board structure to the HyperFrames Direction Harness. `DESIGN.md` files decide aesthetic language; this pattern library decides how the Direction Board is composed.

本文把视觉 board 的结构绑定到 HyperFrames Direction Harness。`DESIGN.md` 决定审美语言；本模式库决定 Direction Board 怎么组织。

Canonical path: `references/visual-board-patterns.md`.

规范路径：`references/visual-board-patterns.md`。

## Mandatory Pattern / 强制模式

### Pattern A — Asset-first Visual Direction Board / 素材优先视觉方向板

Use this pattern for every `direction_board.html` unless the user explicitly asks for a different review artifact.

除非用户明确要求其他审查 artifact，否则每个 `direction_board.html` 都使用本模式。

#### Goal / 目标

Let the user decide whether the video direction works by looking at visual evidence first.

让用户先通过视觉证据判断视频方向是否成立。

#### Required Order / 必须顺序

1. **Visual Contact Sheet / 视觉总览** — first viewport, visual-dominant.
2. **Asset Wall / 素材墙** — all must-use assets visible with role/crop/risk.
3. **Section Storyboard / 章节分镜** — user-confirmed sections as visual sequence.
4. **Critical Frame Mockups / 关键帧 Mockup** — hero frames first; Entry/Transition optional where useful.
5. **Visual Route / 视觉路线** — compact design-router source and concrete rules.
6. **Motion & Continuity Strip / 动效与连续性条** — compact anchors and transition language.
7. **Compact Production Handoff / 小型生产交接** — mandatory but small.
8. **Review & Sync / 审查与同步** — pending changes and Markdown sync status.

#### Required Visual Ratio / 必须视觉比例

- First viewport: at least 60% visual material.
- Whole board before the production section: visual objects must dominate prose.
- Every major section needs at least one thumbnail, crop, storyboard card, frame mockup, or motion strip.

- 首屏至少 60% 是视觉材料。
- Production section 之前，视觉对象必须压过 prose。
- 每个主要章节至少有一个 thumbnail、crop、storyboard card、frame mockup 或 motion strip。

#### Required DOM / 必须 DOM

```html
<section data-stage="pre-board-convergence" data-confirmed="true"></section>
<section data-stage="visual-contact-sheet" data-ready-state="ready|blocked|pending-sync"></section>
<article data-asset-id="..." data-asset-role="..." data-asset-status="must-use|optional|reference-only|banned"></article>
<article data-section-id="section-01" data-page-id="page-01" data-page-state="ready|blocked"></article>
<section data-critical-frame="entry|hero|transition" data-page-id="page-01"></section>
<section data-stage="visual-route" data-primary-design="..."></section>
<section data-stage="compact-production-handoff" data-ready-state="ready|blocked|pending-sync"></section>
<section data-stage="review-sync" data-sync-state="synced|pending|waived"></section>
```

For long screenshots:

```html
<div data-long-screenshot="true" style="max-height: ...; overflow: auto;"></div>
```

#### Forbidden / 禁止

- Long planning document as the main board.
- Production/compliance checklist before visual evidence.
- Text-only critical frame descriptions.
- Generic mood adjectives without concrete visual values.
- Assets hidden after the timeline.
- Auto-scrolling long screenshots.
- A separate Production Board.
- Changing the narrative mainline during a layout-only board revision.
- Reordering sections or rewriting page meanings because the user asked for visual polish.

- 不要把 board 做成长篇计划文档。
- 不要把 production/compliance checklist 放在视觉证据前面。
- 不要只用文字描述关键帧。
- 不要只写泛泛 mood 形容词而没有具体视觉值。
- 不要把素材藏在 timeline 后面。
- 不要让长截图自动滚动。
- 不要做独立 Production Board。
- 不要在仅版式 board 修改中改变叙事主线。
- 不要因为用户要求视觉润色就重排章节或改写页面含义。

#### Layout-only Revision Boundary / 仅版式修改边界

When revising an already-reviewed Pattern A board, separate visual changes from narrative changes.

修改已审查的 Pattern A board 时，必须区分视觉修改和叙事修改。

Allowed without unlocking mainline:

- larger assets, different crops, clearer hierarchy
- reduced text density, subtitle removal, visual spacing changes
- 9:16 framing, manual scroll containers, slider comparisons
- component polish within the selected Design Router style

不解锁主线时允许：素材放大、裁切变化、更清晰层级、降低文字密度、取消字幕、版式间距调整、9:16 构图、手动 scroll 容器、slider 对比、既定 Design Router 风格内的组件润色。

Requires explicit mainline unlock:

- changing section order
- changing narrative spine, hook, or ending
- adding/removing claims
- changing what a page means

需要明确解锁主线：改变章节顺序、改变叙事主轴/hook/结尾、增删论点、改变页面含义。

## Pattern Source Example / 模式来源示例

Use the rough HTML artifact board as a structure reference, not as content to copy:

- `examples/asset-first-board/direction_board.skeleton.html`
- `examples/luqee-workflow-film-v2-harness/direction_board.html`

使用 rough HTML artifact board 作为结构参考，不复制其具体内容。

What to borrow:

- hero contact sheet
- asset wall before text-heavy planning
- visible crop/use/risk notes
- page storyboard with visual assets beside copy
- Entry / Hero / Transition frame cards
- constrained manual scroll for long webpage screenshots

What not to borrow:

- project-specific screenshots
- exact colors if a different Design Router route was selected
- exact copy or page count
- rough-project-specific timing

## Relationship To Design Router / 与 Design Router 的关系

Design Router chooses the aesthetic system. Pattern A chooses the board structure.

Design Router 选择审美系统。Pattern A 选择 board 结构。

Examples:

- `claude` + Pattern A = parchment/serif asset-first board.
- `theverge` + Pattern A = dark/mint editorial asset-first board.
- `figma` + Pattern A = canvas/component-review asset-first board.

The selected design system may change colors/type/components, but it must not change Pattern A's visual-first order.

选中的设计系统可以改变颜色、字体、组件，但不能改变 Pattern A 的视觉优先顺序。
