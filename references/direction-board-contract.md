# Direction Board Contract / 方向审查 HTML 契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-19 22:31 | Sisyphus | Upgraded the artifact contract to Director Workbench v1.5 with Overview/Frames views, Visual System Lock, Motion Timeline, and Figma-like UI. / 升级 artifact 契约为 Director Workbench v1.5，包含 Overview/Frames 视图、Visual System Lock、Motion Timeline 和 Figma-like UI。 |
| 2026-05-18 16:22 | Sisyphus | Reframed the contract around director-first previews, weak side annotations, language switch, and design critique. |

## Purpose / 目的

`direction_board.html` is now the **Director Workbench**: a Figma-like, static, pre-generation review workbench before final HyperFrames `index.html` generation.

`direction_board.html` 现在是 **Director Workbench**：一个 Figma-like、静态、生成前的导演审查 workbench，位于最终 HyperFrames `index.html` 之前。

The file name remains `direction_board.html` for compatibility. The artifact meaning is upgraded from a linear board into a multi-view workbench.

为了兼容，文件名仍保留 `direction_board.html`。artifact 含义从线性 board 升级为多视图 workbench。

## Locked Product Decisions / 已锁定产品决策

- Name: **Director Workbench**. / 名称：**Director Workbench**。
- Style: Figma-like white canvas, soft grid, selection outlines, small pills, side panels, artboards, timeline. / 风格：Figma-like 白色画布、柔和网格、选择描边、小 pills、侧栏、artboards、timeline。
- One file: Direction Board and frame-by-frame preview are merged into one `direction_board.html`. / 单文件：Direction Board 和逐帧预览合并到一个 `direction_board.html`。
- Overview view: director cover, rhythm storyboard, Visual System Lock, Motion Timeline, Review Gate Summary. / Overview 视图：导演封面、节奏分镜、Visual System Lock、Motion Timeline、Review Gate Summary。
- Frames view: left frame list, center 9:16 artboard, right inspector, bottom timeline. / Frames 视图：左侧 frame 列表、中央 9:16 artboard、右侧 inspector、底部 timeline。
- Comments: lightweight Google Docs-like rail; user-authored; JSON export. / 评论：轻量 Google Docs-like 侧栏；由用户书写；JSON 导出。
- Boundary: final HyperFrames `index.html` remains separate. / 边界：最终 HyperFrames `index.html` 保持独立。

## Required Stages / 必需 Stage

```html
<header data-stage="director-workbench"></header>
<section data-stage="overview-view"></section>
<section data-stage="director-cover"></section>
<section data-stage="rhythm-storyboard"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="review-gate-summary"></section>
<section data-stage="frames-workbench"></section>
<aside data-stage="annotation-layer"></aside>
```

## Required Controls / 必需控件

```html
<button data-view-switch="overview"></button>
<button data-view-switch="frames"></button>
<button data-lang-switch="en"></button>
<button data-lang-switch="zh"></button>
<button data-frame-select="frame-01"></button>
```

## Semantic Targets / 语义目标

Every reviewable object needs a semantic target:

每个可审查对象都需要语义目标：

```html
<article data-commentable="true" data-comment-target-type="system" data-comment-target-id="system.artboard"></article>
<div data-commentable="true" data-comment-target-type="motion" data-comment-target-id="motion.hero"></div>
<div data-commentable="true" data-comment-target-type="frame" data-comment-target-id="frame-01" data-frame="frame-01"></div>
```

## Forbidden / 禁止

- Do not use Apple/macOS chrome as the outer metaphor. / 不使用 Apple/macOS chrome 作为外层隐喻。
- Do not split frame preview into a second HTML file. / 不把逐帧预览拆成第二个 HTML 文件。
- Do not use legacy `Layout Previews`; use `Visual System Lock`. / 不使用旧 `Layout Previews`；使用 `Visual System Lock`。
- Do not use generic before/after motion cards; use `Motion Timeline` or `Motion Strip`. / 不使用泛化 before/after motion cards；使用 `Motion Timeline` 或 `Motion Strip`。
- Do not put production handoff, implementation gates, engineering checklists, or render checklists in the director-facing workbench. / 不把 production handoff、implementation gate、engineering checklist 或 render checklist 放进导演侧 workbench。
