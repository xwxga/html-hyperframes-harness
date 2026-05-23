# 03 Critical Frame Plan / 关键帧计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-23 23:31 | Codex | Restored the complete real-project critical frame plan for the public golden example and rewired asset paths. / 为公开 golden example 恢复真实项目完整关键帧计划，并改成本地素材路径。 |
| 2026-05-16 13:47 | Codex | Recorded the approved split from five frames to six frames, with Tom/html-anything and the user's workflow as separate full-frame beats. |

## Source / 来源

- Intake file / 意图文件: `01_intake.md`
- Design direction file / 设计方向文件: `02_design_direction.md`
- Current status / 当前状态: **locked**
- Last synced direction board / 最近同步的 direction board: `direction_board.html`
- Waivers / 豁免项: Frame 01 is intentionally a placeholder; no subtitles/voice by user request.

## Planning Rules / 计划规则

- Markdown is the source of truth.
- `direction_board.html` is the review artifact.
- A Frame is a meaningful visual state, not an encoded video frame.
- This run now uses 6 key frames after the user-approved split of the final workflow beat.
- Every key frame is a true 9:16 / 1080×1920 short-video composition.
- Animation notes describe intent, not GSAP code.
- Continuity must name concrete visual anchors.
- Page layouts must follow Figma route unless user note explicitly overrides.
- Layout-only edits must not change sections, hook, claims, conclusion, or page meaning.
- Mainline changes after lock require explicit user approval.

## Global Direction / 全局方向

- Core message / 核心信息: Webpage-style visual scripts are becoming the higher-density interface between humans, AI, collaboration, and HyperFrames video production.
- Page count estimate / 页面数预估: **6 frames**
- Timing estimate / 时间预估: **~3 minutes total** with long holds, not constant motion.
- Visual system notes / 视觉系统说明: Figma white canvas, true 9:16 artboards, low text density, large titles, source-asset hero cards, selection outlines.
- Motion system notes / 动效系统说明: slow holds, Figma-canvas panning, visible source MP4/crop motion inside asset cards, no subtitles.
- Primary Design Router style / 主 Design Router 风格: Figma — `docs/design-router/design-systems/core/figma/DESIGN.md`
- Design constraints inherited from `02_design_direction.md` / 继承自 `02_design_direction.md` 的设计约束: low-density title cards; no voice/subtitles; color only from assets/accent handles.
- Ready gate status / 准备状态: **ready**
- Blocking issues / 阻塞问题: none

## Pre-Board Convergence / Board 前收敛

### 1. Sections / 章节

- Question asked / 已问问题: How many frames and what frame order?
- Recommended option / 推荐选项: originally 5 frames, then split the final beat after review.
- User choice / 用户选择: **6 frames, with Tom/html-anything and workflow separated**
- Final sections / 最终章节:
  1. Frame 01 — Placeholder / user will add human content later
  2. Frame 02 — Hook / Thariq article + big title
  3. Frame 03 — Karpathy screenshot / information density authority
  4. Frame 04 — Thariq examples image/site / examples proof
  5. Frame 05 — Tom html-anything video / market signal
  6. Frame 06 — User's current workflow HTML / final proof
- Merge / remove / reorder notes / 合并、删除、重排说明: The old combined Frame 05 is split into two full frames. No separate closing frame after Frame 06.

### 2. Assets / 素材

- Question asked / 已问问题: Which assets must be used?
- Recommended option / 推荐选项: Use accepted cut videos and screenshot from intake package.
- User choice / 用户选择: Thariq article, Karpathy screenshot, Thariq examples, Tom Twitter video, current workflow HTML.
- Must-use assets / 必用素材:
  - `../assets/thariq_x_first_panel_render.mp4`
  - `../assets/karpathy_html_quote.png`
  - `../assets/html_effectiveness_site_scroll_render.mp4`
  - `../assets/tuturetom_main_video_10s_render.mp4`
  - `../assets/figma_direction_board_scroll_render.mp4`
- Optional assets / 可选素材: none for the public golden example
- Reference-only assets / 仅参考素材:
  - source-project polished voiceover transcript, not committed to the public package
- Banned assets / 禁止素材: none, but do not add new external assets.

### 3. Mainline / 主线

- Question asked / 已问问题: What is the narrative spine and landing?
- Recommended option / 推荐选项: Hook → authority → examples → user's workflow.
- User choice / 用户选择: Follow the five frame order above; no extra final frame.
- Narrative spine / 叙事主轴: placeholder → Thariq hook → Karpathy authority → Thariq examples → Tom/html-anything market signal → user's HTML workflow.
- Opening hook / 开头 hook: Frame 02, not Frame 01.
- Ending landing point / 结尾落点: Frame 06, user's workflow HTML as the final proof.

### Direction Board Lock / Direction Board 锁定

- User confirmed sections/assets/mainline / 用户已确认章节、素材、主线: **yes**
- Waiver reason if any / 如有豁免，原因: Frame 01 intentionally left minimal because user will add human content in post.
- Allowed to generate `direction_board.html` / 是否允许生成 `direction_board.html`: **yes**

## Narrative Lock / 主线锁定

- Mainline lock status / 主线锁定状态: **locked**
- Locked sections / 已锁定章节: six frames listed above.
- Locked narrative spine / 已锁定叙事主轴: placeholder → hook → authority → examples → Tom/html-anything signal → workflow proof.
- Locked opening hook / 已锁定开头 hook: Thariq article.
- Locked ending landing point / 已锁定结尾落点: user's current workflow HTML in Frame 06, with Tom/html-anything as the preceding full-size signal in Frame 05.
- Claims or facts that must not change / 不得改变的论点或事实:
  - HTML/webpage format carries higher-density reviewable information than Markdown alone.
  - Karpathy supports the visual/audio information-density direction.
  - User uses webpage-style direction boards before HyperFrames rough-video generation.
- Allowed visual-only changes / 允许的仅视觉修改: crop, scale, spacing, title wording, Figma UI details, long holds.
- Explicit user approval for mainline change / 用户明确批准主线修改: none

## Post-Review Scope Classification / Review 后范围分类

| Time / 时间 | Request / 请求 | Scope / 范围 | What changed / 具体修改 | What stayed locked / 保持锁定 | Mainline changed? / 主线是否改变 | Synced to / 同步到 |
|---|---|---|---|---|---|---|
| 2026-05-16 13:47 | User approved splitting the final beat and making source motion global | layout-only with approved frame split | Split Tom/html-anything and workflow into Frames 05/06; made visible source MP4/scroll/pan motion mandatory | hook, authority, examples, final workflow landing, Figma route, no subtitles/voice | no narrative change; frame count approved | 03/04/skill |
| 2026-05-16 00:18 | User locked five frames and Figma style | narrative-mainline | Created initial plan | 5-frame order, no subtitles/voice | yes-approved | 01/02/03 |

---

## Frame 01 / 第 1 帧 — Placeholder / 后期人为内容占位

### Scene Context / 场景上下文

- Narrative beat / 叙事段: User will add human-made material later.
- What this page should make the viewer understand / 这一页要让观众理解: This is not the formal hook; it is a neutral staging frame.

### Page Content / 页面内容

- Main text / 主文案: **OPENING SLOT**
- Secondary text / 辅助文案: `human insert later`
- Visual asset / 视觉素材: none
- Asset crop or framing / 素材裁切或构图: N/A
- Background or layout idea / 背景或布局想法: Figma blank canvas with one dashed placeholder rectangle.
- Notes / 备注: Keep intentionally minimal.

### Critical Frames / 关键帧

#### Frame A — Entry / 进入帧
- Timestamp or relative position / 时间点或相对位置: start
- Visible elements / 可见元素: blank white Figma canvas
- Text / 文案: none
- Asset state / 素材状态: N/A
- Layout / 布局: empty artboard
- Carries from previous page / 从上一页继承: N/A

#### Frame B — Hero / 主视觉帧
- Timestamp or relative position / 时间点或相对位置: hold
- Visible elements / 可见元素: dashed placeholder rectangle + small label
- Text / 文案: `OPENING SLOT`
- Asset state / 素材状态: N/A
- Layout / 布局: centered dashed frame
- Why this frame matters / 为什么这是关键帧: It reserves the first slot without committing visual direction.

#### Frame C — Transition / 转场帧
- Timestamp or relative position / 时间点或相对位置: out
- Visible elements / 可见元素: placeholder shrinks to a small artboard chip
- Text / 文案: none
- Asset state / 素材状态: N/A
- Layout / 布局: canvas pans to Frame 02
- Handoff to next page / 交给下一页的内容: Figma canvas pan reveals Thariq article.

### Simple Animation Notes / 简单动画说明
- Text motion / 文案动效: tiny label fades in only.
- Asset motion / 素材动效: N/A
- Camera / scale / emphasis / 镜头、缩放、强调: slow canvas pan.
- Transition / 转场: artboard pan to Frame 02.

### Continuity Contract / 连续性约束
- Previous visual anchor / 上一页视觉锚点: N/A
- Current visual anchor / 当前页视觉锚点: dashed artboard box
- Next visual anchor / 下一页视觉锚点: same artboard outline around Thariq article
- Motion bridge / 动效桥接: canvas pan
- Shared color / shape / layout motif / 延续色彩、形状、版式母题: dashed Figma selection outline
- What must not abruptly change / 不能突然变化的东西: white canvas

### Risk / Open Questions / 风险与问题
- Risk / 风险: Could feel too empty if used as final video content.
- Open question / 未决问题: none; user requested not to care about this frame.
- Page ready for direction board / 本页是否可进入 direction board: yes
- Waiver if any / 如有豁免: intentionally minimal.
- Hero-frame mockup required in board / Board 中是否必须有 hero-frame mockup: yes

---

## Frame 02 / 第 2 帧 — Hook / Thariq Article

### Page Content / 页面内容

- Main text / 主文案: **网页，正在变成新的编导台**
- Secondary text / 辅助文案: `Thariq / The Unreasonable Effectiveness of HTML`
- Visual asset / 视觉素材: `thariq_x_first_panel_render.mp4`
- Asset crop or framing / 素材裁切或构图: centered phone/webpage card, article title visible.
- Background or layout idea / 背景或布局想法: white Figma canvas + asset card + large title.
- Notes / 备注: This is the real hook.

### Critical Frames / 关键帧

#### Frame A — Entry
- Visible elements / 可见元素: blank canvas + small `02 HOOK` pill
- Text / 文案: none
- Asset state / 素材状态: asset card offscreen/right
- Layout / 布局: title area empty
- Carries from previous page / 从上一页继承: dashed selection outline

#### Frame B — Hero
- Visible elements / 可见元素: Thariq article card + big title
- Text / 文案: `网页，正在变成新的编导台`
- Asset state / 素材状态: article visible, paused/slow video card
- Layout / 布局: title top-left, asset large center
- Why this frame matters / 为什么这是关键帧: It connects the hot source article to the user's new framing.

#### Frame C — Transition
- Visible elements / 可见元素: article card scales down into source tray
- Text / 文案: small label remains
- Asset state / 素材状态: reduced thumbnail
- Handoff to next page / 交给下一页的内容: authority screenshot takes over.

### Simple Animation Notes
- Text motion: headline fades in, no kinetic subtitle.
- Asset motion: asset card slides in from right, then holds.
- Camera/scale/emphasis: subtle 1.0→1.02 push during hold.
- Transition: canvas pan/down to Karpathy screenshot.

### Continuity Contract
- Previous visual anchor: dashed artboard outline.
- Current visual anchor: source article card.
- Next visual anchor: source/authority card.
- Motion bridge: card tray morph.
- Shared motif: Figma selection handles.
- Must not abruptly change: low text density.

### Risk / Open Questions
- Risk: Article text itself is dense; title overlay must stay sparse.
- Page ready for direction board: yes
- Hero-frame mockup required in board: yes

---

## Frame 03 / 第 3 帧 — Authority / Karpathy

### Page Content

- Main text / 主文案: **人类吃信息，靠视觉和声音**
- Secondary text / 辅助文案: `Karpathy / information density`
- Visual asset / 视觉素材: `karpathy_html_quote.png`
- Asset crop or framing / 素材裁切或构图: crop to upper/middle quote area; avoid full-wall unreadable text.
- Background or layout idea / 背景或布局想法: screenshot as a vertical card, selected quote region highlighted by Figma handles.
- Notes / 备注: This is the authority proof, not a full reading screen.

### Critical Frames

#### Frame A — Entry
- Visible elements: small authority label + screenshot card ghost.
- Text: none
- Asset state: screenshot blurred or low opacity
- Carries from previous: source card motif

#### Frame B — Hero
- Visible elements: Karpathy screenshot crop + title
- Text: `人类吃信息，靠视觉和声音`
- Asset state: quote area clear, rest softly deemphasized
- Layout: title on left/top, crop card on right/center
- Why this matters: It makes the information-density argument feel externally supported.

#### Frame C — Transition
- Visible elements: highlighted quote becomes a small information-density chip.
- Handoff: chip moves into Frame 04 examples.

### Simple Animation Notes
- Text motion: title appears as one large block.
- Asset motion: screenshot crop gently zooms into quote area.
- Camera/scale/emphasis: selection handles pop around quote.
- Transition: chip slide to examples frame.

### Continuity Contract
- Previous visual anchor: source card.
- Current visual anchor: highlighted quote region.
- Next visual anchor: information-density chip.
- Motion bridge: selected region becomes a Figma component chip.
- Shared motif: active selection handles.
- Must not abruptly change: black/white canvas shell.

### Risk / Open Questions
- Risk: User called it Capacity; keep final label Karpathy unless user asks otherwise.
- Page ready for direction board: yes
- Hero-frame mockup required in board: yes

---

## Frame 04 / 第 4 帧 — Examples / Thariq Visual Proof

### Page Content

- Main text / 主文案: **不是文档，是可看的例子**
- Secondary text / 辅助文案: `tables / design / workflow / interaction`
- Visual asset / 视觉素材: `html_effectiveness_site_scroll_render.mp4`
- Asset crop or framing / 素材裁切或构图: show examples grid / card layout.
- Background or layout idea / 背景或布局想法: Figma canvas with example cards laid out like components.
- Notes / 备注: Use Thariq examples as visual proof; low text overlay.

### Critical Frames

#### Frame A — Entry
- Visible elements: chip from Frame 03 enters, empty component grid.
- Text: none
- Asset state: examples card not yet active.

#### Frame B — Hero
- Visible elements: examples page card + title.
- Text: `不是文档，是可看的例子`
- Asset state: examples visible.
- Layout: big title above / left, examples large below.
- Why this matters: It visually explains what HTML changes without long explanation.

#### Frame C — Transition
- Visible elements: examples card collapses to a component tile.
- Handoff: tile joins Tom/html-anything and workflow cards.

### Simple Animation Notes
- Text motion: title fades in.
- Asset motion: examples card rises slightly and holds.
- Camera/scale/emphasis: subtle crop pan only.
- Transition: component tile joins final canvas.

### Continuity Contract
- Previous visual anchor: information-density chip.
- Current visual anchor: examples grid.
- Next visual anchor: component tile.
- Motion bridge: grid becomes tile.
- Shared motif: component cards.
- Must not abruptly change: low density / title only.

### Risk / Open Questions
- Risk: Examples page can become too detailed; keep title clean.
- Page ready for direction board: yes
- Hero-frame mockup required in board: yes

---

## Frame 05 / 第 5 帧 — Tom / html-anything Signal

### Page Content

- Main text / 主文案: **网页输出，已经有人在做**
- Secondary text / 辅助文案: `HTML-ANYTHING`
- Visual asset / 视觉素材: `tuturetom_main_video_10s_render.mp4`
- Asset crop or framing / 素材裁切或构图: Full-size X main-content card. Crop away the left X/return strip and the lower blank area; keep the tweet and embedded video as the visible subject.
- Background or layout idea / 背景或布局想法: Figma canvas with one large tweet-card hero.
- Notes / 备注: No separate Feishu/handoff tone; user will narrate.

### Critical Frames

#### Frame A — Entry
- Visible elements: Tom/html-anything card enters as a large hero card.
- Text: `HTML-ANYTHING`
- Asset state: Tom video is cropped to the main tweet and video area.
- Carries from previous: component tile from Frame 04.

#### Frame B — Hero
- Visible elements: tweet + embedded video occupy the center.
- Text: `网页输出，已经有人在做`
- Asset state: source MP4 plays or drifts slowly inside the crop.
- Layout: one-card hero, low text density.
- Why this matters: It shows the open-source/market signal before the user's workflow.

#### Frame C — Transition / Hold
- Visible elements: Tom card drifts upward and prepares the next workflow proof.
- Text: none added.
- Asset state: tweet-card motion remains visible.
- Handoff: Frame 06 workflow card.

### Simple Animation Notes
- Text motion: title enters once and holds.
- Asset motion: Tom source MP4 plays with slow crop drift.
- Camera/scale/emphasis: large-card push-in, no tiny inset.
- Transition: Figma canvas pan to Frame 06.

### Continuity Contract
- Previous visual anchor: component tile.
- Current visual anchor: large tweet-card crop.
- Next visual anchor: workflow board card.
- Motion bridge: source card becomes workflow proof card.
- Shared motif: Figma artboard/component cards.
- Must not abruptly change: Figma canvas, low text density, source-card evidence.

### Risk / Open Questions
- Risk: If the original 720×1920 capture is shown uncropped, the lower blank area wastes the frame.
- Page ready for direction board: yes
- Hero-frame mockup required in board: yes

---

## Frame 06 / 第 6 帧 — Workflow / My HTML Workbench

### Page Content

- Main text / 主文案: **先生成编导台，再生成视频**
- Secondary text / 辅助文案: `网页式编导台`
- Visual asset / 视觉素材: `figma_direction_board_scroll_render.mp4`
- Asset crop or framing / 素材裁切或构图: Full-size workflow card with visible scroll motion.
- Background or layout idea / 背景或布局想法: Figma canvas with one large workflow proof card.
- Notes / 备注: This is the final proof of the user's current workflow.

### Critical Frames

#### Frame A — Entry
- Visible elements: workflow HTML direction board enters as the main card.
- Text: `先生成编导台，再生成视频`
- Asset state: workflow page starts readable and moving.
- Carries from previous: selected source-card outline.

#### Frame B — Hero
- Visible elements: workflow board fills the safe-area center.
- Text: `网页式编导台`
- Asset state: workflow MP4 scroll is visible.
- Layout: one-card hero with final title and component chip.
- Why this matters: It lands on the user's actual HyperFrames method.

#### Frame C — Final Hold
- Visible elements: title + workflow card hold.
- Text: no extra claims.
- Asset state: slow scroll/pan continues.
- Handoff: no additional closing frame.

### Simple Animation Notes
- Text motion: title enters once and holds.
- Asset motion: workflow source MP4 scrolls inside the card with a calm crop drift.
- Camera/scale/emphasis: slow final push-in on workflow HTML.
- Transition: long final hold.

### Continuity Contract
- Previous visual anchor: Tom source-card selection outline.
- Current visual anchor: workflow HTML board.
- Next visual anchor: no next frame; final hold.
- Motion bridge: selected source card becomes workflow board.
- Shared motif: Figma artboard/component cards.
- Must not abruptly change: Figma canvas, low text density, user's workflow as final proof.

### Risk / Open Questions
- Risk: If the workflow card is static, the final beat feels like a screenshot instead of a video workflow.
- Page ready for direction board: yes
- Hero-frame mockup required in board: yes

---

## Review Notes / 审查记录

| Time / 时间 | Source / 来源 | Change / 修改 | Synced / 已同步 |
|---|---|---|---|
| 2026-05-16 13:47 | user review | Split the final combined beat into Frame 05 Tom/html-anything and Frame 06 workflow, and made source-card motion mandatory. | yes |
| 2026-05-16 12:08 | browser self-review | Confirmed 9:16 vertical artboards in `direction_board.html` and created `04_render_plan.md`. | yes |
| 2026-05-16 00:18 | user note | Locked 5-frame script and no subtitle/voice/title-card-only constraints. | yes |
