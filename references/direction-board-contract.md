# Direction Board Contract / 方向审查 HTML 契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-24 00:14 | Codex | Removed side-rail requirements and made HyperFrames default critical-frame style explicit. / 移除侧边栏要求，并显式加入 HyperFrames 默认关键帧风格。 |
| 2026-05-23 23:31 | Codex | Required asset-first evidence inside the Director Workbench and added golden-example quality gates. / 要求 Director Workbench 内包含素材优先证据，并加入 golden example 质量门槛。 |
| 2026-05-19 22:31 | Sisyphus | Upgraded the artifact contract to Director Workbench v1.5 with Overview/Frames views, Visual System Lock, Motion Timeline, and Figma-like UI. / 升级 artifact 契约为 Director Workbench v1.5，包含 Overview/Frames 视图、Visual System Lock、Motion Timeline 和 Figma-like UI。 |
| 2026-05-18 16:22 | Sisyphus | Reframed the contract around director-first previews, language switch, and design critique. |

## Purpose / 目的

`direction_board.html` is now the **Director Workbench**: a Figma-like, static, pre-generation review workbench before final HyperFrames `index.html` generation. Its UI shell must not replace the asset-first review substance.

`direction_board.html` 现在是 **Director Workbench**：一个 Figma-like、静态、生成前的导演审查 workbench，位于最终 HyperFrames `index.html` 之前。它的 UI 外壳不能替代素材优先的审查内容。

The file name remains `direction_board.html` for compatibility. The artifact meaning is upgraded from a linear board into a multi-view workbench.

为了兼容，文件名仍保留 `direction_board.html`。artifact 含义从线性 board 升级为多视图 workbench。

## Locked Product Decisions / 已锁定产品决策

- Name: **Director Workbench**. / 名称：**Director Workbench**。
- Style: Figma-like white canvas, soft grid, selection outlines, small pills, side panels, artboards, timeline. / 风格：Figma-like 白色画布、柔和网格、选择描边、小 pills、侧栏、artboards、timeline。
- Critical-frame style: HyperFrames default unless explicitly overridden. / 关键帧风格：除非明确覆盖，否则使用 HyperFrames 默认风格。
- One file: Direction Board and frame-by-frame preview are merged into one `direction_board.html`. / 单文件：Direction Board 和逐帧预览合并到一个 `direction_board.html`。
- Overview view: director cover, visual contact sheet, asset wall, rhythm/storyboard, critical-frame mockups, Visual System Lock, Motion Timeline, Review Gate Summary. / Overview 视图：导演封面、视觉总览、素材墙、节奏/分镜、关键帧 mockups、Visual System Lock、Motion Timeline、Review Gate Summary。
- Frames view: left frame list, center 9:16 artboard, right inspector, bottom timeline. / Frames 视图：左侧 frame 列表、中央 9:16 artboard、右侧 inspector、底部 timeline。
- Boundary: final HyperFrames `index.html` remains separate. / 边界：最终 HyperFrames `index.html` 保持独立。

## Required Stages / 必需 Stage

```html
<header data-stage="director-workbench"></header>
<section data-stage="overview-view"></section>
<section data-stage="director-cover"></section>
<section data-stage="visual-contact-sheet"></section>
<section data-stage="asset-wall"></section>
<section data-stage="rhythm-storyboard"></section>
<section data-stage="section-storyboard"></section>
<section data-stage="critical-frame-mockups"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="review-gate-summary"></section>
<section data-stage="frames-workbench"></section>
```

## Required Controls / 必需控件

```html
<button data-view-switch="overview"></button>
<button data-view-switch="frames"></button>
<button data-lang-switch="en"></button>
<button data-lang-switch="zh"></button>
<button data-frame-select="frame-01"></button>
```

## Golden Example Quality Gates / Golden Example 质量门槛

For a real HyperFrames video example, `direction_board.html` must include:

- one visible preview for every planned final frame;
- every locked final-video title exactly as source content;
- all must-use assets visible before abstract review summaries;
- an explicit Inspector declaration that critical frames use the HyperFrames default style;
- an explicit mapping to the final HyperFrames `index.html`, `hyperframes.json`, local assets, snapshots, and render notes.

真实 HyperFrames 视频示例中，`direction_board.html` 必须包含：

- 每个计划最终 frame 都有一个可见预览；
- 所有已锁定最终视频标题必须作为 source content 原样保留；
- 所有必用素材必须在抽象审查摘要前可见；
- Inspector 必须显式声明关键帧使用 HyperFrames 默认风格；
- 明确映射到最终 HyperFrames `index.html`、`hyperframes.json`、本地素材、snapshots 和 render notes。

## Frame Style Lock / 关键帧风格锁定

The Frames Inspector must show the active critical-frame visual route:

Frames Inspector 必须展示当前关键帧视觉路线：

```html
<dt>Frame style</dt>
<dd>HyperFrames default: white grid canvas, black linework, green status dot, sparse title card, source-card evidence.</dd>
```

## Forbidden / 禁止

- Do not use Apple/macOS chrome as the outer metaphor. / 不使用 Apple/macOS chrome 作为外层隐喻。
- Do not split frame preview into a second HTML file. / 不把逐帧预览拆成第二个 HTML 文件。
- Do not use legacy `Layout Previews`; use `Visual System Lock`. / 不使用旧 `Layout Previews`；使用 `Visual System Lock`。
- Do not use generic before/after motion cards; use `Motion Timeline` or `Motion Strip`. / 不使用泛化 before/after motion cards；使用 `Motion Timeline` 或 `Motion Strip`。
- Do not put production handoff, implementation gates, engineering checklists, or render checklists in the director-facing workbench. / 不把 production handoff、implementation gate、engineering checklist 或 render checklist 放进导演侧 workbench。
