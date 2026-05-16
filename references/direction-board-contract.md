# Direction Board Contract / 方向审查 HTML 契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-15 16:36 | Sisyphus | Added mainline-lock and drift-stop contract for post-review board edits. |
| 2026-05-15 13:00 | Sisyphus | Linked the contract to the visual board pattern library and clarified Pattern A as the default composition pattern. |
| 2026-05-15 11:12 | Sisyphus | Reframed the contract around asset-first visual Direction Board only, with mandatory pre-board convergence and compact production handoff. |
| 2026-05-14 22:37 | Sisyphus | Added DOM contract, review evidence, ready/blocked states, and browser self-review requirements. |
| 2026-05-14 17:58 | Sisyphus | Added Design Router, asset-first, manual-scroll, and HyperFrames visual-principle requirements. |
| 2026-05-13 22:23 | Sisyphus | Created the direction board contract for the HyperFrames Direction Harness draft skill. |

## Purpose / 目的

`direction_board.html` is an **asset-first visual decision board** before final HyperFrames `index.html` generation.

`direction_board.html` 是最终 HyperFrames `index.html` 生成前的 **素材优先视觉决策板**。

Its job is to let the user judge what the video will feel like by looking at assets, page storyboards, and critical-frame mockups. It is not a production/compliance report.

它的任务是让用户通过素材、页面分镜和关键帧 mockup 判断视频会是什么感觉。它不是 production/compliance report。

The required composition pattern is Pattern A in `visual-board-patterns.md`: visual contact sheet → asset wall → section storyboard → critical-frame mockups → visual route → motion strip → compact production handoff → review/sync.

强制 composition pattern 是 `visual-board-patterns.md` 里的 Pattern A：视觉总览 → 素材墙 → 章节分镜 → 关键帧 mockup → 视觉路线 → 动效条 → 小型生产交接 → 审查/同步。

## Non-goals / 不做什么

- Do not turn the board into a long planning document.
- Do not make production readiness the main content.
- Do not optimize it as a marketing landing page.
- Do not hide the real assets behind prose.

- 不要把 board 做成长篇计划文档。
- 不要让 production readiness 变成主体。
- 不要把它优化成营销落地页。
- 不要用大段文字盖过真实素材。

## Source Rule / 来源规则

Markdown remains the source of truth. HTML is the review artifact.

Markdown 仍然是 source of truth。HTML 是审查 artifact。

If HTML review changes direction, sync them back to `02_design_direction.md` or `03_critical_frame_plan.md` before final HyperFrames generation.

如果 HTML 审查改变方向，必须同步回 `02_design_direction.md` 或 `03_critical_frame_plan.md` 后再进入最终 HyperFrames 生成。

## Mainline Lock Rule / 主线锁定规则

After sections, assets, and mainline are confirmed, or after the board is reviewed, board edits must preserve the locked narrative unless the user explicitly unlocks it.

章节、素材、主线确认后，或 board 已审查后，board 修改必须保留已锁定叙事，除非用户明确解锁。

Layout-only edits include asset scale, crop, spacing, hierarchy, 9:16 framing, scroll/slider treatment, subtitle removal, and visual polish. They must not change section order, narrative spine, opening hook, ending landing point, claims, or page meaning.

仅版式修改包括素材缩放、裁切、间距、层级、9:16 构图、scroll/slider 处理、取消字幕和视觉润色。它们不得改变章节顺序、叙事主轴、开头 hook、结尾落点、论点或页面含义。

Required post-review DOM when a board is revised:

Board review 后如发生修改，必须包含以下 DOM：

```html
<section data-stage="post-review-drift-check" data-scope="layout-only|visual-route|narrative-mainline|render-debug" data-mainline-changed="no|yes-approved"></section>
```

## Mandatory Pre-Board Convergence / Board 前强制收敛

Before generating `direction_board.html`, the agent must ask the user multiple-choice questions and record the answers in Markdown.

生成 `direction_board.html` 前，Agent 必须用选择题询问用户，并把答案记录回 Markdown。

Required choices:

1. **Sections / 章节** — which chapters/beats to keep, merge, remove, or reorder.
2. **Assets / 素材** — must-use, optional, reference-only, and banned assets.
3. **Mainline / 主线** — narrative spine, opening hook, and ending landing point.

选择题必须覆盖：

1. **章节** — 保留、合并、删除或重排哪些章节/beat。
2. **素材** — 必用、可选、仅参考、禁止使用的素材。
3. **主线** — 叙事主轴、开头 hook、结尾落点。

Required DOM:

```html
<section data-stage="pre-board-convergence" data-confirmed="true"></section>
```

## Required Board Structure / 必须结构

This structure mirrors `visual-board-patterns.md`. If the two files appear to conflict, choose the stricter asset-first visual requirement and update both docs before using the board for production.

本结构与 `visual-board-patterns.md` 对齐。如果两个文件看似冲突，选择更严格的 asset-first visual 要求，并在进入生产前同步更新两个文档。

### 1. Visual Contact Sheet / 视觉总览

The first screen must show a visual overview, not a text-heavy summary.

首屏必须是视觉总览，不是大段文字摘要。

Show:

- project title
- one-line mainline
- selected sections as compact chips
- selected must-use assets as thumbnails
- visual route label
- ready state

Required DOM:

```html
<section data-stage="visual-contact-sheet" data-ready-state="ready|blocked|pending-sync"></section>
```

### 2. Asset Wall / 素材墙

Assets are the board's spine. Show real assets before detailed page prose.

素材是 board 的脊柱。先展示真实素材，再进入页面说明。

For each asset, show:

- local path or URL
- visual/narrative role
- crop/framing/treatment
- assigned section/page candidates
- must-use / optional / reference-only / banned status
- risk

Required DOM:

```html
<article data-asset-id="..." data-asset-role="..." data-asset-status="must-use|optional|reference-only|banned"></article>
```

For long webpage screenshots:

```html
<div data-long-screenshot="true" style="max-height: ...; overflow: auto;"></div>
```

Forbidden for long screenshots:

- CSS auto-scroll keyframe animation
- JS interval/requestAnimationFrame auto-scroll
- hidden overflow that prevents manual inspection

### 3. Section Storyboard / 章节分镜

Show the user-approved sections as a visual sequence.

以视觉序列展示用户确认过的章节。

Each section must show:

- section/chapter number
- main beat
- assigned asset(s)
- hero-frame thumbnail or mockup
- transition anchor into the next section

Required DOM:

```html
<article data-section-id="section-01" data-page-id="page-01" data-page-state="ready|blocked"></article>
```

### 4. Critical Frame Mockups / 关键帧 Mockup

Every important section needs at least one visual hero-frame mockup. More complex sections may show Entry / Hero / Transition states.

每个重要章节至少需要一个视觉 hero-frame mockup。复杂章节可以展示 Entry / Hero / Transition 状态。

For each mockup, show:

- visible elements
- text hierarchy
- asset state and framing
- layout approximation
- why the frame matters
- continuity anchor

Required DOM:

```html
<section data-critical-frame="entry|hero|transition" data-page-id="page-01"></section>
```

### 5. Visual Route / 视觉路线

Keep this concise. It supports the visuals; it must not dominate the board.

保持简洁。它服务视觉，不要压过视觉主体。

Show:

- primary Design Router source
- optional accent/reference source
- concrete color/type/layout rules
- visual anti-patterns

Required DOM:

```html
<section data-stage="visual-route" data-primary-design="..."></section>
```

### 6. Motion & Continuity Strip / 动效与连续性条

Use compact strips or cards, not long prose.

用紧凑条带或卡片，不写长篇 prose。

Show:

- page/section transition pattern
- carried visual anchors
- asset motion intent
- text motion intent

Vague claims like “smooth” or “dynamic” are not enough.

只写“顺滑”或“动态”不合格。

### 7. Compact Production Handoff / 小型生产交接章节

This section is mandatory, but small. It replaces the separate Production Board.

本章节必填，但必须小。它替代独立 Production Board。

Show only:

- ready / blocked / pending-sync state
- missing assets count
- unresolved visual risks
- whether Markdown sync is complete
- whether `04_render_plan.md` can be created
- final handoff reminder: `04_render_plan.md` is the only input to HyperFrames generation

Required DOM:

```html
<section data-stage="compact-production-handoff" data-ready-state="ready|blocked|pending-sync"></section>
```

Rule: this section should be visually smaller than the Asset Wall and Critical Frame Mockups. It must not become a compliance report.

规则：该章节的视觉权重必须小于素材墙和关键帧 mockup。它不能变成 compliance report。

### 8. Review and Sync / 审查与同步

Show:

- reviewer notes
- pending changes
- sync status
- whether Markdown has been updated

Required DOM:

```html
<section data-stage="review-sync" data-sync-state="synced|pending|waived"></section>
```

## Visual Requirements / 视觉要求

- At least 60% of the board's first viewport should be visual material, not prose.
- Asset thumbnails or mockups must appear before any long table.
- Every major section should contain a visual object: thumbnail, mock frame, storyboard card, or motion strip.
- Text explains the visual decision; it must not be the main artifact.
- Chinese-first labels; English secondary labels for technical terms.
- No CDN or external runtime dependency unless local project policy allows it.
- Mobile-readable, but desktop review can be the primary target.

- 首屏至少 60% 应是视觉材料，不是 prose。
- 素材缩略图或 mockup 必须早于长表格出现。
- 每个主要区块都应包含视觉对象：缩略图、mock frame、storyboard card 或 motion strip。
- 文字用于解释视觉决策，不能成为主体。
- 中文优先标签；技术词可保留英文辅助。
- 默认不要 CDN 或外部运行时依赖。
- 移动端可读，但桌面审查优先。

## Interaction Requirements / 交互要求

Keep interactions simple.

交互保持简单。

Recommended interactions:

- Click an asset to inspect its assigned use.
- Click a storyboard section to inspect its critical frame mockups.
- Filter assets by must-use / optional / reference-only / banned.
- Manually scroll long screenshot modules.
- Copy compact production handoff summary.

Keyboard requirements:

- Every clickable asset, section, frame, tab, filter, drawer trigger, and copy button must be reachable by `Tab`.
- `Enter` or `Space` activates custom controls.
- `Esc` closes overlays or drawers.
- Focus must be visible.

## Ready Gate / 进入 HyperFrames 的门槛

The board can mark the plan ready only when:

- Pre-board convergence choices are recorded.
- Must-use assets are visible in the board.
- Every major section has a visual hero-frame mockup.
- Design Router selection is documented with local source paths.
- Visual principles are concrete enough to guide HyperFrames layout.
- Continuity names concrete visual anchors.
- Compact production handoff is present and marked ready / blocked / pending-sync.
- HTML review changes are synced back to Markdown or marked pending with a reason.
- Browser or rendered self-review evidence exists when the user has not explicitly approved.

只有满足以上条件，才能标记为 ready for HyperFrames。

## Agent Self-Review Evidence / Agent 自检证据

When the user has not explicitly approved the board, the agent must record review evidence before creating `04_render_plan.md`:

- HTML path opened / 已打开的 HTML 路径
- Required sections present / 必需区块是否存在
- First viewport visual dominance / 首屏是否视觉主导
- Missing image count / 缺失图片数量
- Long screenshot manual-scroll result / 长截图手动滚动结果
- Critical console errors / 关键 console error
- Compact production handoff ready state / 小型生产交接 ready 状态
- Markdown sync status / Markdown 同步状态

用户没有明确批准 board 时，agent 必须在创建 `04_render_plan.md` 前记录以上自检证据。
