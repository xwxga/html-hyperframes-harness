# 02 Design Direction / 设计方向

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-15 09:24 | Claude | Marked as `locked` after v3 hardened-skill agent self-review + prior user approval. No design changes resulted from review. |
| 2026-05-14 20:23 | Claude | Initial design direction. Primary Claude editorial, accent restrained Verge mint for decision-gate beat. |

## Source / 来源

- Intake file / 意图文件: `01_intake.md`
- Project `design.md` / `DESIGN.md` if present / 如有项目设计文档: None for LUQEE; brand evidence carried by the 4 asset PNGs.
- Local Design Router overview / 本地 Design Router 总览: `docs/design-router/README.md`
- Local interaction patterns / 本地交互模式: `docs/design-router/INTERACTION_PATTERNS.md`
- Current status / 当前状态: **locked**

## Design Router Selection / Design Router 选择

| Role | Selection | Local source path | Why it fits | What not to borrow |
|---|---|---|---|---|
| Primary / 主风格 | Claude (Anthropic) | `docs/design-router/design-systems/core/claude/DESIGN.md` | LUQEE is a premium brand built through AI-assisted craft. Claude's literary-salon mood (parchment canvas, serif headlines, warm-toned neutrals, terracotta accent) matches "thoughtful collaborator with taste" — not "automation pipeline." V1 already gestures at this idiom but borrows a green accent and uses Inter throughout. Going full Claude makes the design route real instead of partial. | The full corporate website chrome (nav, model-comparison cards, dark/light section alternation). We borrow the typographic system, palette, ring shadows, and editorial spacing — not the page furniture. |
| Accent / reference / 辅助 | The Verge (single hazard mint) | `docs/design-router/design-systems/core/theverge/DESIGN.md` | Page 05's "decision gate" beat (Approved / Rejected / QA Pending) needs one moment of visual voltage to land the "real decisions happened" claim. Verge's Jelly Mint `#3cffd0` used as hazard-tape accent on the approved pill — restrained, single appearance — adds editorial punch without breaking Claude's warmth. | Manuka display headlines, ultraviolet `#5200ff`, story-tile color blocks, dashed StoryStream rule. None of Verge's loud chrome carries over. |

## Route Rationale / 路由理由

- Source material mood / 源素材气质: LUQEE assets (market evidence, colorboard, logo lockup, SKU matrix) are warm-toned, editorial, craft-document-style — not slick e-commerce. Claude's parchment + warm neutrals reads as their natural display surface.
- Audience and platform fit / 受众与平台适配: Xiaohongshu / vertical social audience for premium pet brands skews toward craft, lifestyle, storytelling — not tech-bro UI. Claude's editorial register is exactly right; xiaohongshu reference would push toward lifestyle-feed energy that undersells the process story.
- Why this route is better than alternatives / 为什么优于其他路由:
  - vs. **xiaohongshu**: too lifestyle-feed, would dilute the "real AI-assisted brand-build" claim.
  - vs. **stripe / linear-app**: too systems/SaaS — wrong audience signal for a pet apparel brand.
  - vs. **figma / openai**: technically capable but feel like product pages, not process films.
  - vs. **theverge as primary**: too loud — would compete with the LUQEE assets instead of framing them.
- User-provided constraints that override router defaults / 用户约束中覆盖 router 默认值的内容:
  - Bilingual labels (Chinese-first) — added on top of Claude's English-only system.
  - Vertical 1080×1920 — Claude's responsive guidance (≤479px small-mobile) is the closest reference; we extrapolate.
  - No fake corporate chrome (nav, footer, model-cards) — strip away.

## Visual Principles For This Run / 本次视觉原则

### Composition mood / 构图气质
Editorial parchment. Each page is a magazine spread, not a slide. Generous vertical breathing room. One hero element per page; supporting elements never compete with it.

### Background treatment / 背景处理
- Page canvas: **Parchment** `#f5f4ed` (Claude).
- No gradients (Claude is gradient-free).
- Optional subtle 72px grid grain at ~0.06 opacity (borrowed from v1; reduce intensity).
- Page 05 background allows a single hazard-mint accent ring around the approved pill; rest stays parchment.

### Typography hierarchy / 字体层级

| Role | Font | Size (vertical 1080×1920) | Weight | Line height | Notes |
|---|---|---:|---:|---:|---|
| Hero serif title | Georgia (fallback for Anthropic Serif) | 96–112px | 500 | 1.05 | Page titles. Single-weight, never bold. |
| Eyebrow label | Sans (system / Inter) | 22px | 500 | 1.20 | Uppercase, 1.2px letter-spacing. Bilingual: 中文 + UPPERCASE EN. |
| Chat bubble user | Sans | 32px | 500 | 1.40 | Phone-frame inset, max-width 720px. |
| Chat bubble assistant | Sans | 32px | 400 | 1.40 | |
| Overlay caption | Sans | 36px | 500 | 1.30 | Burned-in caption beneath hero. |
| Decision pill label | Sans | 26px | 600 | 1.10 | Uppercase. |
| Card label / metadata | Sans | 20px | 500 | 1.20 | 0.6px letter-spacing. |
| Timecode HUD | Sans | 18px | 400 | 1.20 | Bottom corner. |

Serif for authority on titles; sans for chat and UI. Single serif weight (500) per Claude rule.

### Color system / 色彩系统
- Page background: Parchment `#f5f4ed`
- Card surface: Ivory `#faf9f5`
- Primary text: Anthropic Near Black `#141413`
- Secondary text: Olive Gray `#5e5d59`
- Tertiary text: Stone Gray `#87867f`
- Brand accent (page 01 eyebrow, page 07 wordmark, terminal ribbon): **Terracotta Brand `#c96442`**
- Borders: Border Cream `#f0eee6` (default), Border Warm `#e8e6dc` (emphasized)
- Ring shadow: `#d1cfc5` warm gray
- Page 05 hazard accent (single use): **Jelly Mint `#3cffd0`** on approved pill outline + dot
- Page 05 rejected pill: dark warm `#3d3d3a` text on `#e8e6dc`
- Page 05 pending pill: stone gray `#87867f` text on parchment
- Forbidden: any cool blue-gray, any saturated color beyond terracotta and the one mint moment.

### Divider / rule / frame language / 分隔线、边框、框架语言
- Cards use 1px solid `#f0eee6` border + ring shadow `0 0 0 1px #d1cfc5` for the lifted state.
- Featured cards (page 03, 04, 06 hero images) use 16px border-radius + whisper drop shadow `0 4px 24px rgba(0,0,0,0.05)`.
- Logo lock card (page 05) uses 24px border-radius and gets a brief 0 0 0 4px `#3cffd0` ring flash during the emphasis beat.
- Page transitions: horizontal thin rule (1px `#e8e6dc`) wipes from left to right between pages, as a continuity anchor.

### Asset treatment / 素材处理
- Real LUQEE assets are framed inside Ivory `#faf9f5` cards with 32–40px internal padding so they don't bleed to the parchment edge. This preserves the editorial frame and keeps the asset legible without forced crops.
- No retouching of source PNGs.
- Card label ("Market evidence / 市场证据" etc.) appears as eyebrow above the card, not overlaid.

### Density and spacing / 密度与留白
- 8px base grid (Claude rule).
- Vertical section rhythm: 80–120px between major elements within a page. Tighter (40–60px) inside chat panels.
- Outer page padding: 80px left/right, 120px top, 160px bottom (room for timecode HUD and breathing zone).

### Mobile vertical-video considerations / 竖屏短视频注意事项
- All text legible at typical viewport scale (assume viewer holds phone vertically, ~16cm tall screen).
- First 2.5s must show: brand eyebrow + serif title + status dot. No reliance on sound.
- Captions/chat bubbles must not crowd the asset hero — split-page convention: top 35% = serif title + eyebrow; middle 50% = asset hero; bottom 15% = chat bubble or overlay caption + timecode.

## Asset-First Direction / 素材优先方向

| Asset | Visual role | Crop or framing | Page candidates | Risk |
|---|---|---|---|---|
| market_evidence_board.png | Page 03 hero — proves "research before taste" | Full image inside Ivory card with 32px padding; centered, no crop. Card border-radius 16px. | 03 | Image is collage-style — may read busy at small scale. Mitigation: hold 8–10s, longer dwell than v1's 4s. |
| color_master.png | Page 04 hero — proves "color is material logic" | Full image inside Ivory card. Possibly with one color chip pulled out as continuity anchor for page 05. | 04 | Wider than tall — vertical frame must be portrait-tall card so the image dominates frame width. |
| logo_luqee_final.png | Page 05 hero — the brand-lock moment | Centered, scaled up so logo fills ~60% of card width. Ivory card, 24px radius, ring flash on emphasis beat. | 05 | Small in v1 — must be reframed substantially larger to carry vertical hero weight. |
| sku_system_final.png | Page 06 hero — proves "system, not aesthetic" | Full image inside Ivory card. Hold 6–8s for SKU matrix to read. | 06 | Information-dense; needs longest dwell of the four assets. |

## Motion Principles / 动效原则

Direction only. No GSAP code in this file.

- Global rhythm / 全局节奏: One hero entry per page, no second-act dance. Each page commits to its visual statement and holds it.
- Entrance language / 入场语言: Eyebrow first (fade + 8px lift, 0.3s), then serif title (slow scale 0.98→1.0 + fade, 0.5s), then hero asset (whisper drop shadow appears under the card with a soft scale 0.96→1.0, 0.6s). Chat bubble and overlay caption come in last, with 0.3s fades.
- Emphasis language / 强调语言:
  - Page 01: status dot pulse (3 beats) as soft brand signature.
  - Page 05: **logo lock emphasis** — at the moment msg-06 ("Decision gate") fires, the logo card scales 1.0→1.04→1.0 over 0.6s and the Jelly Mint ring pulses (`0 0 0 0 #3cffd0` → `0 0 0 6px rgba(60,255,208,0.0)`). This is the single hazard moment of the film.
  - Page 07: terracotta ribbon stamp animates in over the final word; wordmark callback lands as a static hold, not a fade-out.
- Camera / scale language / 镜头与缩放语言: Almost none. Page-to-page is a horizontal rule wipe + slight 4% zoom on the previous page's hero as it exits. No parallax, no float.
- Transition language / 转场语言: 1px `#e8e6dc` rule wipes left-to-right (0.45s) at every page boundary. The rule is the continuity anchor — it never disappears entirely, just relocates.
- Reduced-motion or restraint notes / 克制动效说明: No bouncy easing. All easing is smoothstep (Claude's restraint matches this). Decision pills cascade one-by-one synced to the spoken words of msg-06 — fixes v1's 1s lag.

## HyperFrames Default Visual Principles Applied / 已应用的 HyperFrames 默认视觉原则

- [x] HTML is the final composition source of truth.
- [x] Build hero layouts before animation.
- [x] Real screenshots and source assets stay primary.
- [x] Motion notes are directional, not GSAP code.
- [x] Multi-page output needs page transitions. — Horizontal 1px rule wipe.
- [x] Long webpage screenshots in `direction_board.html` use constrained manual scroll containers. — N/A (no long screenshots here, but the board will respect the rule).

## Anti-Patterns / 反模式

Carrying from `01_intake.md` and v1 audit:

- Visual styles to avoid / 避免的视觉风格:
  - Cool blue-gray neutrals.
  - Green-as-primary (v1's #2e7569 mistake).
  - Sharp corners (<6px).
  - Drop shadows without ring shadow.
- Typography mistakes to avoid / 避免的字体问题:
  - Inter-only flat hierarchy.
  - Bold (700+) serif weights.
  - Mono for non-code text.
- Asset misuse to avoid / 避免的素材误用:
  - Cropping asset PNGs to fit vertical frame — use frame around them instead.
  - Retouching LUQEE asset PNGs.
  - Stretching `logo_luqee_final.png` — must scale uniformly.
- Motion mistakes to avoid / 避免的动效问题:
  - Hard cut headline switches.
  - Decision pills firing before / out of sync with msg-06.
  - Soft fade-out closer with no land.
  - Logo entering simultaneously with other assets (must own its own beat).

## Review Notes / 审查记录

| Time | Source | Change | Synced |
|---|---|---|---|
| 2026-05-14 20:31 | user / chat | "Approved, proceed" — no design changes requested | yes (no diff) |
| 2026-05-15 09:24 | agent self-review (v3 hardened skill) | Structural review of direction_board.html via http://127.0.0.1:4812 — 9 h2 sections + header verified; 4/4 LUQEE PNG returned HTTP 200; 10 swatches, 7 timeline rows, 7 page-detail blocks, both Design Router source paths cited. No design changes resulted. | yes (no diff) |
