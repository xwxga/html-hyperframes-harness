# 04 Render Plan / 渲染计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-16 21:24 | Codex | Updated asset path wording for the portable GitHub example package. |
| 2026-05-15 09:25 | Claude | Re-validated under v3 hardened skill: agent self-review of direction_board.html passed; all 7 hard-gate items green; marked **ready**. |
| 2026-05-14 20:32 | Claude | Created render plan after user approval of direction_board.html. Gate passed. |

## Gate Status / 门槛状态

- Plan status / 计划状态: **ready** ✅
- Direction board reviewed / 方向审查 HTML 已审: **yes**
  - User approval 2026-05-14 20:31 ("Approved, proceed")
  - Agent self-review 2026-05-15 09:25 (v3 Review Definition — structural pass via http://127.0.0.1:4812 static-server inspection; 9 h2 sections, 4/4 asset PNG = HTTP 200, 7 page-detail blocks 1:1 with critical-frame plan, both Design Router source paths cited, no console errors — pure CSS no JS)
- HTML changes synced to Markdown / HTML 修改已同步回 Markdown: **yes — no diff** (sync entries added to 02_design_direction.md and 03_critical_frame_plan.md review tables)
- Waiver if any / 如有豁免: none
- Source design direction: `02_design_direction.md` (locked)
- Source critical frame plan: `03_critical_frame_plan.md` (locked)

## Failure-Mode Check / 失败模式自检 (v3 hardened skill)

Per the skill's `Failure Modes` section, none of these are triggered:

- [x] Design route cites local `docs/design-router/` source path ✅ (Claude + Verge both cited verbatim)
- [x] Visual principles are executable rules, not adjectives ✅ (concrete hex, px, weights, durations in 02_design_direction.md)
- [x] All board assets exist in intake / source notes ✅ (4 PNG real files via symlink to v1)
- [x] Every page has Entry / Hero / Transition frames ✅ (verified in board structural check)
- [x] Continuity names concrete visual anchors, not "smooth/dynamic/natural" ✅ (rule line, color chip, wordmark preview, pill cluster, etc.)
- [x] direction_board.html reviewed before 04_render_plan.md marked ready ✅ (reviewed first, marked ready second)
- [x] Final composition will use only this render plan ✅ (handoff contract — see below)

## Final Structure / 最终结构

- Final page count / 最终页面数: **7**
- Target duration / 目标时长: **60.0s**
- Aspect ratio / 画幅: **9:16 vertical**
- Composition size: **1080 × 1920**
- Target platform: Xiaohongshu / Reels / TikTok; desktop replay acceptable
- HyperFrames version: **0.5.3** (matching v1)

## Design Handoff / 设计交接

- Primary Design Router style: Claude — `docs/design-router/design-systems/core/claude/DESIGN.md`
- Accent / reference: The Verge — `docs/design-router/design-systems/core/theverge/DESIGN.md` (single hazard mint at Page 05)
- Local design source paths: see above; both cited verbatim
- Visual principles to preserve:
  - Parchment `#f5f4ed` canvas, never pure white
  - Warm-only neutrals (no cool blue-grays anywhere)
  - Single terracotta brand accent `#c96442` — appears on Page 01 dot, Page 02 send mark, Page 07 ribbon
  - Single Jelly Mint `#3cffd0` hazard — Page 05 only (ring + 1 pill dot)
  - Serif (Georgia / Anthropic Serif fallback) for page titles only; sans for everything else
  - Ring shadow `0 0 0 1px #d1cfc5` + whisper drop `0 4px 24px rgba(0,0,0,0.05)` for elevated cards
  - 1px `#e8e6dc` horizontal rule wipe is the global page transition
- Anti-patterns to avoid:
  - Cool blue-grays
  - Hard headline cuts → all title transitions are 0.3–0.4s crossfades
  - Decision pills firing before / out of sync with msg-06 → word-level sync mandatory
  - Soft fade-out closer → Page 07 must STAMP with terracotta ribbon + 1.5s hold

## Page Handoff / 页面交接

| Page | Duration | Main text | Hero | Asset | Transition |
|---|---:|---|---|---|---|
| 01 | 6.0s | Chat becomes a brand system / 聊天，长成品牌 | Brand-lock title + status-dot pulse | none | rule-wipe @ 5.4s |
| 02 | 8.0s | msg-01 + msg-02 + composer typing | Phone-frame chat panel + composer | none | rule-wipe @ 13.4s; panel minimizes |
| 03 | 8.0s | Evidence before taste / 证据先于品味 | Market evidence hero card | market_evidence_board.png | rule-wipe @ 21.4s; color chip lifts |
| 04 | 8.0s | Color becomes logic / 色彩即逻辑 | Color master hero card + chip anchor | color_master.png | rule-wipe @ 29.4s; wordmark previews |
| 05 | 10.0s | Decisions stay visible / 决策可见 | Logo lock + word-synced pills (APPROVED · REJECTED · PENDING); mint hazard ring | logo_luqee_final.png | rule-wipe @ 39.4s; pills cluster |
| 06 | 10.0s | SKU architecture / 产品体系 | SKU matrix hero card; 4-row subtle highlight | sku_system_final.png | rule-wipe @ 49.4s; wordmark previews |
| 07 | 10.0s | Reconstructed, not faked / 重建，不是伪造 | Wordmark stamp + terracotta ribbon scale-X; 1.5s static hold | logo_luqee_final.png (stamp callback) | no exit — hard end |

## Text Hierarchy / 文案层级

- **Display title** (page titles): Georgia / Anthropic Serif fallback, 96–112px, weight 500, line-height 1.05
- **Subtitle** (Chinese under English title): Sans, 36px, weight 500, line-height 1.30
- **Eyebrow**: Sans, 22px UPPERCASE, weight 500, letter-spacing 1.2px, terracotta `#c96442`
- **Chat bubble**: Sans, 32px, weight 500 (user) / 400 (Codex), line-height 1.40
- **Overlay caption**: Sans, 36px, weight 500
- **Decision pill label**: Sans, 26px UPPERCASE, weight 600, letter-spacing 0.6px
- **Card label**: Sans, 20px UPPERCASE, weight 500
- **Timecode HUD**: Sans mono, 18px

## Asset Placement / 素材位置

| Asset | Page | Placement | Treatment | Risk |
|---|---|---|---|---|
| `assets/market_evidence_board.png` | 03 | Center hero card | Ivory `#faf9f5` card, 32px padding, 16px radius, ring shadow + whisper drop | Collage may read busy — 6s clean dwell |
| `assets/color_master.png` | 04 | Center hero card with one color-chip anchor at corner | Same card treatment; chip is a 36px circle pulled-out of board | Wider than tall — letterbox absorbed by frame |
| `assets/logo_luqee_final.png` | 05 (hero) | Center, scaled to fill ~60% card width | 24px radius card + 33.4–34.0s mint ring `0 0 0 0 → 0 0 0 8px rgba(60,255,208,0)` | Small PNG — soft framing absorbs scale artifacts |
| `assets/logo_luqee_final.png` | 07 (stamp) | Bottom stamp on page; scaled smaller than P05 | No mint; terracotta ribbon under; scale 0.96→1.0 on stamp beat | — |
| `assets/sku_system_final.png` | 06 | Center hero card | Same card treatment; subtle 4-row highlight 43.5–44.7s | Information-dense; 7s dwell |

## Motion Intent / 动效意图

Direction-level only. No GSAP code here.

- **Global motion rule**: Smoothstep easing on every element. No bouncy easing. No parallax.
- **Page entry order**: eyebrow (0.3s) → serif title (0.5s) → hero asset (0.6s) → chat inset / overlay caption (0.3s).
- **Page transition**: 1px `#e8e6dc` horizontal rule wipes left→right (0.45s) at every page boundary. The rule is the persistent continuity anchor — it never disappears, only relocates.
- **Title transitions between pages**: 0.4s overlap crossfade. Fixes v1's hard cuts.
- **Page 05 emphasis** (the film's peak):
  - Logo card 1.0→1.04→1.0 over 0.6s peaking at 33.6s
  - Mint ring 33.4–34.0s
  - APPROVED pill at 33.8s, REJECTED at 34.5s, PENDING at 35.2s — word-synced to msg-06 reveal
- **Page 07 land** (third-act fix):
  - Terracotta ribbon scale-X 0→1 from 58.0s to 58.8s
  - Wordmark scale 0.96→1.0 from 58.2s to 58.8s
  - Static hold ≥1.5s from 58.8s to end
  - **No fade-out exit**
- **Motion constraints**:
  - Mint appears ONCE total (Page 05). Don't repeat.
  - Terracotta returns at Page 07 to close the loop (Page 01 dot → Page 02 send mark → Page 07 ribbon).
  - Logo lockup on Page 05 must have its own beat, not enter alongside other cards.

## Director Metadata Required In Final HTML / 最终 HTML 需要保留的编导元数据

Per v3 hardened skill HyperFrames Handoff Contract, final composition HTML MUST preserve:

```html
data-page-id      <!-- page-01 ... page-07 -->
data-critical-frame <!-- entry | hero | transition | emphasis | land | hold -->
data-director-intent <!-- short slug, see per-page table below -->
data-continuity-anchor <!-- what visual anchor connects this to neighbors -->
```

Per-page metadata spec / 每页元数据规约:

| Page | data-page-id | data-director-intent | data-continuity-anchor (in → out) |
|---|---|---|---|
| 01 | `page-01` | `brand-lock-hook` | `none` → `1px-rule-and-terracotta-dot` |
| 02 | `page-02` | `conversation-opens-phone-frame` | `1px-rule-becomes-chat-top` → `chat-minimizes-to-corner` |
| 03 | `page-03` | `evidence-before-taste-hero` | `chat-inset-corner` → `color-chip-lifts` |
| 04 | `page-04` | `color-becomes-logic` | `color-chip-settles-at-card-corner` → `tiny-wordmark-preview` |
| 05 | `page-05` | `logo-lock-with-mint-hazard` | `wordmark-preview-grows` → `pill-cluster-to-sku-rows` |
| 06 | `page-06` | `sku-architecture-dwell` | `pill-cluster-becomes-sku-rows` → `wordmark-top-preview` |
| 07 | `page-07` | `stamp-land-no-fade` | `wordmark-top-preview-falls-to-bottom` → `final-hold` |

Each asset image gets:

```html
data-asset-role  <!-- market-evidence | color-master | logo-lock | sku-matrix | wordmark-callback -->
```

The composition root keeps:

```html
data-composition-id="main"
data-start="0"
data-duration="60"
data-width="1080"
data-height="1920"
```

## HyperFrames Generation Notes / HyperFrames 生成说明

- Composition root: `<main id="root" data-composition-id="main" data-start="0" data-duration="60" data-width="1080" data-height="1920">`
- Register a `ManualTimeline` with `seek(value)` and `timeScale()` per HyperFrames 0.5.3 contract (matches v1).
- Mount on `window.__timelines.main`.
- All rendering driven by a single idempotent `renderAt(t)` function. No CSS animations, no `requestAnimationFrame`. HyperFrames seeks to specific timestamps.
- Use `setProperty` on transform/opacity/box-shadow for animated states. CSS transitions are forbidden (HyperFrames renders are time-deterministic; transitions are not).
- Use the helper `smooth(edge0, edge1, value)` for smoothstep interpolation, as v1 does.
- Reuse asset paths via the bundled `assets/` folder.
- Run before render: `npx --yes hyperframes@0.5.3 lint` → `validate` → `inspect` → `snapshot` → `render`.

## HyperFrames Handoff Contract / 交接契约 (v3 hardened skill)

This file is the **only** input the `hyperframes` skill is allowed to read when generating final composition HTML.

本文件是 `hyperframes` skill 生成最终 composition 时唯一允许读取的输入。

- ❌ Do NOT reinterpret `01_intake.md` directly during composition generation.
- ❌ Do NOT invent new pages, assets, visual styles, transitions, or motion that are not in this plan.
- ✅ If a direction problem surfaces during composition, STOP and return to `02_design_direction.md` / `03_critical_frame_plan.md`, update them, regenerate `direction_board.html`, re-review, then update this plan.
- ✅ Preserve all director metadata listed above in the final HTML.

## Open Risks / 未决风险

- [ ] SKU matrix at 1080×1920 vertical may be too small to read text inside the matrix. Mitigation: 7s dwell; review at first snapshot. If illegible, add row-callouts pass.
- [ ] msg-06 word-level pill sync requires writing per-word reveal logic; if it proves brittle in practice, fallback is staggered pill reveal with same timestamps (33.8 / 34.5 / 35.2) but without per-word text mask.
- [ ] Bilingual title pairs (English serif + Chinese sans subtitle) may compete for vertical space on Page 01 / Page 07. Adjust at first snapshot review.
