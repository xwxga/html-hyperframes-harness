# 03 Critical Frame Plan / 关键帧计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-15 09:24 | Claude | Marked as `locked` after v3 hardened-skill agent self-review + prior user approval. No frame-plan changes resulted from review. |
| 2026-05-14 20:24 | Claude | Initial 7-page critical frame plan for LUQEE process film v2 (vertical). |

## Source / 来源

- Intake file / 意图文件: `01_intake.md`
- Design direction file / 设计方向文件: `02_design_direction.md`
- Current status / 当前状态: **locked**
- Last synced direction board / 最近同步的 direction board: `direction_board.html` reviewed 2026-05-15 09:24 (agent self-review per v3 Review Definition + prior user approval 2026-05-14 20:31)

## Planning Rules / 计划规则

(Following skill rules — abbreviated.) Markdown is source of truth. Frames are visual states, not encoded frames. Each Page = Entry + Hero + Transition. Animation notes describe intent, not GSAP code. Continuity must name concrete visual anchors. Page layouts must follow `02_design_direction.md`.

## Global Direction / 全局方向

- Core message / 核心信息: AI-assisted brand-build is a craft. The chat is the workshop; the artifacts are the proof.
- Page count estimate / 页面数预估: **7 pages**
- Timing estimate / 时间预估: **60s total**
  - Page 01: 0–6s (6s)
  - Page 02: 6–14s (8s)
  - Page 03: 14–22s (8s)
  - Page 04: 22–30s (8s)
  - Page 05: 30–40s (10s — longest, for decision-gate emphasis)
  - Page 06: 40–50s (10s — for SKU dwell)
  - Page 07: 50–60s (10s — third-act land)
- Visual system notes / 视觉系统说明: Claude editorial. Parchment canvas. Serif titles + sans UI. Single terracotta brand accent. One mint hazard accent on page 05 only.
- Motion system notes / 动效系统说明: Smoothstep entrance per element. Horizontal 1px rule wipe at every page boundary. No bouncy easing. Decision pills synced to msg-06 words.
- Primary Design Router style / 主 Design Router 风格: Claude (`docs/design-router/design-systems/core/claude/DESIGN.md`)
- Design constraints inherited from `02_design_direction.md`: see that file. Hardest constraints: no cool blue-grays, no Inter-only typography, no hard headline cuts, no soft fade-out closer.

---

## Page 01 / 第 1 页 — Hook / Brand-lock / 钩子 · 品牌锁定

### Scene Context

- Narrative beat / 叙事段: Establish the project. Eyebrow says what this is; serif title says what to expect.
- What this page should make the viewer understand / 这一页要让观众理解: This is a premium AI-assisted brand-build film — pay attention.

### Page Content

- Main text / 主文案: **Chat becomes a brand system** (serif, 112px) / **聊天，长成品牌** (subtitle in 36px sans, below)
- Secondary text / 辅助文案: Eyebrow — **LUQEE PROCESS FILM · 路客品牌纪录**
- Visual asset / 视觉素材: None. Brand-mark only (a single small Codex word-style mark + terracotta status dot).
- Asset crop or framing: N/A
- Background or layout idea: Centered title block. Status dot terracotta `#c96442`. Grain overlay at 0.06.
- Notes: Must hook in first 2.5s. Status dot's 3-beat pulse is the brand signature.

### Critical Frames

#### Frame A — Entry (0.0s)
- Visible: Empty parchment canvas. Grain overlay only.
- Text: nothing yet.
- Layout: Page background loaded.
- Carries from previous page: N/A (first page).

#### Frame B — Hero (3.2s)
- Visible: Full title block: eyebrow + serif title + Chinese subtitle + small status dot pulsing.
- Text: All eyebrow + title + subtitle visible.
- Asset state: Status dot mid-pulse (1.0 scale, mint-free; pure terracotta).
- Layout: Centered. Title sits at 35% from top of frame (gives editorial breathing room above).
- Why this frame matters: This is the page that decides whether viewer stays past 3s. Hero must read instantly.

#### Frame C — Transition (5.4s)
- Visible: Title fading, 1px rule wipe starting from left edge.
- Text: Title at 0.7 opacity, exit pose.
- Asset state: Status dot finishes its 3rd pulse.
- Layout: Rule wipe across at y=50% line.
- Handoff to next page: The rule line carries to page 02 as the chat-panel's underline.

### Simple Animation Notes
- Text motion: Eyebrow fades+lifts in at 0.4s. Serif title scale 0.98→1.0 + fade at 0.9s (0.6s duration). Chinese subtitle fades in at 1.6s.
- Asset motion: Status dot scales 1.0→1.08→1.0 on 3 beats at 2.0s / 2.8s / 3.6s.
- Camera / scale / emphasis: None.
- Transition: 1px `#e8e6dc` rule wipes left→right at 5.0s, completing by 5.5s.

### Continuity Contract
- Previous visual anchor: N/A.
- Current visual anchor: 1px horizontal rule + terracotta dot.
- Next visual anchor: The rule line becomes page 02's chat panel underline.
- Motion bridge: Rule wipe animation carries the eye across the page boundary.
- Shared color / shape / layout motif: Terracotta dot reappears as the "send" mark on page 02's composer.
- What must not abruptly change: Background parchment color, eyebrow font, terracotta hue.

### Risk / Open Questions
- Risk: Subtitle Chinese may feel like an afterthought if not equal-weight. Mitigation: same line-height as title, 0.45× scale.
- Open: Should we add a tiny "60s" duration chip in corner to signal short-video commitment?

---

## Page 02 / 第 2 页 — Conversation Opens / 对话开始

### Scene Context

- Narrative beat: The chat begins. User asks the original request; Codex sets the authenticity stance.
- What this page should make the viewer understand: This is a real conversation. The work has a starting point.

### Page Content

- Main text: chat bubbles
  - User msg-01: "I want to show how Codex helped generate the LazyEazy / LUQEE brand workflow."
  - Codex msg-02: "I will not fake a raw recording. I can rebuild a clean process explainer from transcript beats and source artifacts."
- Secondary text: Eyebrow — **STEP 00 · 起点**
- Composer at bottom: typed prompt "Build LUQEE workflow film."
- Visual asset: None.
- Background or layout idea: Top 30%: eyebrow + small section title "对话 / Conversation". Middle 55%: phone-frame inset chat panel (Ivory card, 16px radius, ring shadow) containing the two bubbles. Bottom 15%: composer with caret + send mark.

### Critical Frames

#### Frame A — Entry (6.0s)
- Visible: Eyebrow appearing, empty chat panel showing.
- Layout: Phone-frame chat panel slides up into place from bottom (16px lift).
- Carries from previous page: The 1px rule from page 01 now reads as the chat panel's top border.

#### Frame B — Hero (10.5s)
- Visible: Both bubbles present, composer prompt fully typed.
- Text: msg-01 and msg-02 visible. Composer shows "Build LUQEE workflow film." with caret.
- Asset state: Send mark on composer is terracotta `#c96442` (matches page 01 dot).
- Layout: User bubble right-aligned, assistant bubble left-aligned. Both at 32px sans.
- Why this frame matters: Establishes the chat-as-workshop convention that pages 03–06 will use.

#### Frame C — Transition (13.4s)
- Visible: Chat panel scaling slightly (0.96) and lifting up, rule wipe starting.
- Layout: Composer typing carries through the transition.
- Handoff: Rule wipe + the chat panel's bottom edge becomes page 03's top boundary.

### Simple Animation Notes
- Text motion: Bubbles enter sequentially — msg-01 fades+lifts at 7.0s, msg-02 fades+lifts at 9.0s.
- Asset motion: Composer caret blinks at 1 Hz throughout. Prompt typing reveal from 7.5s to 10.5s.
- Camera / scale / emphasis: Chat panel ring shadow softly pulses once at 10.5s (panel acknowledges complete).
- Transition: Rule wipe at 13.4s.

### Continuity Contract
- Previous: 1px rule from page 01.
- Current: Phone-frame chat panel + composer + terracotta send mark.
- Next: Chat panel collapses to a small inset in page 03's bottom-right.
- Motion bridge: Chat panel doesn't fully disappear — it minimizes to corner-card for pages 03–06.
- Shared motif: Terracotta dot (page 01) → send mark (page 02) → page 05 emphasis ring will be mint (intentional break).
- Must not change: Bubble typography, terracotta hue.

### Risk / Open Questions
- Risk: Two bubbles in 8s feels static. Mitigation: composer typing fills the silence.
- Open: Do we show a "thinking..." dot pattern between msg-01 and msg-02? Leaning yes — fills the 2s gap.

---

## Page 03 / 第 3 页 — Step 01 · Evidence / 步骤一 · 证据

### Scene Context

- Narrative beat: Codex declares "evidence before taste." Market evidence board appears as hero.
- What this page should make the viewer understand: The brand build started with research, not aesthetics.

### Page Content

- Main text: Serif title — **Evidence before taste / 证据先于品味**
- Secondary text: Eyebrow — **STEP 01 · 市场证据**
- Chat bubble inset (bottom-right): msg-03 "Step 01: establish case-study evidence before visual taste."
- Visual asset: `market_evidence_board.png` in hero Ivory card.
- Asset crop or framing: Full image, 32px card padding, 16px radius.
- Background or layout idea: Top 22%: eyebrow + serif title. Middle 60%: hero asset card. Bottom 18%: chat bubble inset (assistant-styled, no user msg this page).

### Critical Frames

#### Frame A — Entry (14.0s)
- Visible: Eyebrow + serif title in entry pose. Hero card empty placeholder.
- Layout: Title at 22% from top.
- Carries from previous page: Chat panel from page 02 has minimized to a small corner inset showing msg-03 typing.

#### Frame B — Hero (17.5s)
- Visible: Full hero asset card visible (market_evidence_board.png), title fully visible.
- Text: Serif title fully rendered.
- Asset state: Card has ring shadow + whisper drop shadow active.
- Layout: Card dominates middle 60% of vertical frame.
- Why this frame matters: First real LUQEE asset reveal. Sets the visual evidence convention.

#### Frame C — Transition (21.4s)
- Visible: Card softly scales up 1.04 (camera pull-in), title starts crossfade.
- Asset state: 0.45s before page boundary, ring shadow tightens.
- Handoff: A color chip pulled from the market board becomes the entry anchor for page 04 (color logic).

### Simple Animation Notes
- Text motion: Eyebrow 14.4s, serif title 14.9s (0.5s scale + fade).
- Asset motion: Card scale 0.96→1.0 + fade from 15.5s to 16.1s. Late-page pull-in 1.0→1.04 over 21.0–21.4s.
- Camera / scale / emphasis: Camera pull on hero card at end of page.
- Transition: Rule wipe at 21.4s. Title crossfades to page 04's title with 0.4s overlap.

### Continuity Contract
- Previous: Chat panel collapsed to corner inset.
- Current: Hero card on parchment + chat inset bottom-right + eyebrow + serif title.
- Next: A single color chip swatch lifts from the market board as the continuity anchor into page 04.
- Motion bridge: 0.4s crossfade on title (fixes v1's hard headline cut).
- Shared motif: Card framing convention — Ivory card with ring shadow — carries to pages 04, 05, 06.
- Must not change: Asset is not retouched, not cropped, not recolored.

### Risk / Open Questions
- Risk: 4s of asset visible (15.5s→19.5s before late camera pull) may feel short for a collage-style image. Mitigation: extended to 6s clean dwell.

---

## Page 04 / 第 4 页 — Step 02 · Color Logic / 步骤二 · 色彩逻辑

### Scene Context

- Narrative beat: Codex frames color as material logic, not decoration.
- What this page should make the viewer understand: Color is reasoning, not styling.

### Page Content

- Main text: Serif title — **Color becomes logic / 色彩即逻辑**
- Secondary text: Eyebrow — **STEP 02 · 色彩主板**
- Chat bubble inset: msg-04 (user) "Then show colorboard, references, SKU decisions, and the final system." + msg-05 (Codex) "Step 02: turn territories into material color logic, not decorative palettes."
- Visual asset: `color_master.png` in hero Ivory card.
- Asset crop or framing: Full image. May be tall-cropped if width forces issues, but try full first.

### Critical Frames

#### Frame A — Entry (22.0s)
- Visible: Color chip swatch (carry-over from page 03) sitting prominently top-center. Title in entry pose.
- Carries from previous page: The single color chip — visual anchor.

#### Frame B — Hero (25.5s)
- Visible: Color master card fully visible. Color chip has migrated into the card as a corner marker.
- Text: Title rendered. Both chat bubbles in inset.
- Layout: Hero card dominates middle. Chat inset bottom-right.

#### Frame C — Transition (29.4s)
- Visible: Card camera pull-in, title crossfade starting.
- Handoff: Logo lockup motif previews bottom-center as a tiny mark before page 05 opens.

### Simple Animation Notes
- Text motion: Eyebrow 22.4s, title 22.9s. Crossfade out at 29.4s.
- Asset motion: Color chip migrates from page 03 → settles at corner of color_master card at 23.5s. Card fades in 23.7s→24.3s.
- Camera / scale / emphasis: Late pull-in at 29.0s.
- Transition: Rule wipe at 29.4s.

### Continuity Contract
- Previous: Hero card convention from page 03.
- Current: Card with corner color-chip marker + same Ivory framing.
- Next: A tiny LUQEE wordmark preview emerges to signal logo-lock incoming.
- Motion bridge: Color chip → tiny wordmark preview at page 04→05 boundary.
- Shared motif: Card convention.
- Must not change: Asset, framing, terracotta accent.

### Risk / Open Questions
- Risk: color_master is wider than tall — vertical aspect may force letterboxing. Mitigation: Ivory card pads it; letterbox bands are part of the editorial frame, not a defect.

---

## Page 05 / 第 5 页 — Decision Gate / 决策门 — Logo Lock + 3 Pills

### Scene Context

- Narrative beat: Codex (msg-06) says "Decision gate: approved source, rejected hallucinated logo, QA pending board." This is the film's emotional peak — the real decisions become visible.
- What this page should make the viewer understand: AI-assisted craft means real decisions, real rejections, real QA — not auto-generation.

### Page Content

- Main text: Serif title — **Decisions stay visible / 决策可见**
- Secondary text: Eyebrow — **STEP 03 · 品牌锁定**
- Chat bubble inset: msg-06 "Decision gate: approved source, rejected hallucinated logo, QA pending board."
- Visual asset: `logo_luqee_final.png` centered, scaled large.
- 3 decision pills stacked vertically below logo card:
  - **APPROVED · 通过** — Jelly Mint `#3cffd0` outline + dot
  - **REJECTED · 拒绝** — `#3d3d3a` on `#e8e6dc`
  - **QA PENDING · 待审** — `#87867f` on parchment

### Critical Frames

#### Frame A — Entry (30.0s)
- Visible: Title in entry pose, hero card empty, three pill placeholders dark/empty.
- Carries from previous page: Tiny wordmark preview from page 04 boundary.

#### Frame B — Hero (33.6s)
- Visible: **Logo lock moment.** Logo card centered, scaled large, ring flash mid-pulse. msg-06 just appeared in chat inset.
- Asset state: Logo card scaling 1.0→1.04, mint ring `0 0 0 0 #3cffd0` expanding to `0 0 0 8px rgba(60,255,208,0)`.
- Why this frame matters: **This is THE moment of the film.** Logo lock + decisions visible + hazard mint ring = the third act gravity that v1 lacked.

#### Frame C — Hero+ (36.5s)
- Visible: Logo locked in. All three decision pills now visible, cascaded in sync with msg-06's three words ("approved", "rejected", "pending").
- Asset state: Pills are stable. Approved pill has terminal mint dot to its left.

#### Frame D — Transition (39.4s)
- Visible: Pills lifting (collective), title crossfading.
- Handoff: SKU matrix tile preview emerges bottom.

### Simple Animation Notes
- Text motion: Eyebrow 30.4s, title 31.0s (crossfade in). msg-06 reveals word-by-word at 32.6s ("Decision gate: ..."), with key words ("approved" at 33.8s, "rejected" at 34.5s, "pending" at 35.2s) triggering pill cascade.
- Asset motion: Logo card scales in 31.5s→32.5s. Logo card emphasis beat (1.0→1.04→1.0) timed to peak of msg-06 at 33.6s. Mint ring `box-shadow` animation 33.4s→34.0s.
- Camera / scale / emphasis: This is the only page with real emphasis motion.
- Transition: Rule wipe at 39.4s.

### Continuity Contract
- Previous: Tiny wordmark preview.
- Current: Logo lockup hero + 3 stacked pills + mint hazard ring (single appearance in entire film).
- Next: Pills cluster down to form the SKU matrix entry point.
- Motion bridge: Pills' cascade timing → SKU matrix row-by-row entry on page 06.
- Shared motif: Card convention preserved. Mint appears ONLY here.
- Must not change: msg-06 word→pill sync (this fixes v1's 1s lag). Logo lockup is not cropped.

### Risk / Open Questions
- Risk: Mint as hazard accent on a Claude-warm page could feel jarring if overused. Mitigation: SINGLE use, single page, single ring pulse + single dot.
- Risk: Logo PNG was small in v1; scaling up may show artifacts. Mitigation: card padding + ring framing softens any artifact.

---

## Page 06 / 第 6 页 — Step 03 · SKU Architecture / 步骤三 · SKU 架构

### Scene Context

- Narrative beat: Codex (msg-07) maps the matrix into four sellable systems.
- What this page should make the viewer understand: This isn't an aesthetic exercise — it's a real product system.

### Page Content

- Main text: Serif title — **SKU architecture / 产品体系**
- Secondary text: Eyebrow — **STEP 04 · 产品矩阵**
- Chat bubble inset: msg-07 "Step 03: map the SKU matrix into four sellable product systems."
- Visual asset: `sku_system_final.png` in hero Ivory card.
- Asset crop or framing: Full image, longer dwell time.

### Critical Frames

#### Frame A — Entry (40.0s)
- Visible: Title in entry pose, SKU matrix card empty placeholder.
- Carries from previous page: 3 decision pills from page 05 cluster into 4 SKU tile placeholders at top of card.

#### Frame B — Hero (43.5s)
- Visible: Full SKU matrix card visible. Title rendered. msg-07 in inset.
- Asset state: Card with ring + whisper drop shadow.
- Why this frame matters: This is the second-longest dwell (7s). The matrix needs reading time.

#### Frame C — Transition (49.4s)
- Visible: Late pull-in on card, title crossfade.
- Handoff: Card softly recedes; brand wordmark previews top of page 07.

### Simple Animation Notes
- Text motion: Eyebrow 40.4s, title 41.0s.
- Asset motion: Card fades in 41.5s→42.1s, 4 SKU rows briefly highlight one-by-one (subtle, 0.3s each) from 43.5s to 44.7s. Late pull-in at 49.0s.
- Camera / scale / emphasis: Late pull-in only.
- Transition: Rule wipe at 49.4s.

### Continuity Contract
- Previous: Pill cluster from page 05.
- Current: Card with 4-row highlight pattern.
- Next: Wordmark wipes in as the final hero.
- Motion bridge: SKU rows → wordmark callback.
- Shared motif: Card convention.
- Must not change: Asset not cropped; 4-row highlight is subtle, not flashy.

### Risk / Open Questions
- Risk: Matrix detail may be hard to read at vertical scale. Mitigation: longest dwell (7s clean) gives reading time. If still illegible at preview, we add subtle row callouts in critical-frame review.

---

## Page 07 / 第 7 页 — Closer / 收束 — Reconstructed, not faked

### Scene Context

- Narrative beat: User msg-08 + Codex msg-09. Premium, fashion-forward, technical. Agent-assisted, not automated. Third-act land.
- What this page should make the viewer understand: The film is over, the brand is real, the workflow stands.

### Page Content

- Main text: Serif title — **Reconstructed, not faked / 重建，不是伪造**
- Secondary text: Final eyebrow — **LUQEE · 路客**
- Final two chat bubbles:
  - User msg-08: "Make it feel premium, fashion-forward, and technical."
  - Codex msg-09: "Final: agent-assisted design workflow, not an automated everything machine."
- Visual asset: LUQEE wordmark — same `logo_luqee_final.png` but used as **brand-mark callback**, not hero. Sits at bottom as a sealed stamp with a terracotta ribbon.
- Background or layout idea: Top 25% — serif title (3-line max) + Chinese subtitle. Middle 40% — final two chat bubbles laid out. Bottom 35% — wordmark stamp with terracotta ribbon stripe + final timecode "60s / 路客 · LUQEE".

### Critical Frames

#### Frame A — Entry (50.0s)
- Visible: Title fading in. msg-08 bubble entering.
- Carries from previous page: Wordmark preview at top.

#### Frame B — Hero (54.8s)
- Visible: Title fully rendered. Both final bubbles visible.
- Layout: Wordmark + terracotta ribbon stamped at bottom.

#### Frame C — Land (58.5s)
- Visible: **The land beat.** Terracotta ribbon scales horizontally across bottom (0→100% over 0.8s). Wordmark scales 0.96→1.0 simultaneously. Page state freezes for 1.5s.
- Why this frame matters: **This is the third-act fix.** v1 ended with a soft fade. v2 stamps. Hold time matters.

#### Frame D — Exit (59.5s)
- Visible: Held state. 0.5s hold before render ends.
- Handoff: N/A (last page).

### Simple Animation Notes
- Text motion: Title crossfades in at 50.4s (over from page 06 title). msg-08 reveals 51.5s, msg-09 reveals 54.0s.
- Asset motion: Wordmark fade in at 52.5s. Terracotta ribbon scales horizontally 58.0s→58.8s. Wordmark scale 0.96→1.0 from 58.2s→58.8s.
- Camera / scale / emphasis: Land beat — page freezes for 1.5s at end. No fade-out.
- Transition: No exit transition. Hard end with stamp.

### Continuity Contract
- Previous: SKU card recedes; wordmark previews top of page.
- Current: Title + 2 bubbles + wordmark stamp + ribbon.
- Next: N/A.
- Motion bridge: Ribbon stamp is the bridge from active film to brand state — terminal.
- Shared motif: Terracotta returns (last appearance was page 01 status dot + page 02 send mark) — closing the loop. Page 05's mint does NOT return.
- Must not change: Page must hold static for ≥1s at the end.

### Risk / Open Questions
- Risk: "Reconstructed, not faked" headline may be too internal/defensive — but it's a strong stake in the ground. Decide at direction_board review.
- Open: Do we keep "LUQEE · 路客" as final eyebrow, or just LUQEE? Leaning bilingual.

---

## Page Summary Table / 页面汇总

| Page | Time | Hero | Asset | Continuity anchor → next |
|---|---|---|---|---|
| 01 | 0–6s | Brand-lock title | (none) | 1px rule + terracotta dot |
| 02 | 6–14s | Chat panel + composer | (none) | Chat panel minimizes to corner |
| 03 | 14–22s | Market evidence card | market_evidence_board | Color chip lifts |
| 04 | 22–30s | Color master card | color_master | Tiny wordmark previews |
| 05 | 30–40s | **Logo lock** + decision pills | logo_luqee_final | Pills cluster → SKU tiles |
| 06 | 40–50s | SKU matrix card | sku_system_final | Wordmark previews |
| 07 | 50–60s | Wordmark stamp + ribbon | logo_luqee_final (callback) | (final) |

## V1 → V2 Fix Map / V1 → V2 修复对照

| V1 weak spot | V2 fix | Page(s) |
|---|---|---|
| Hard headline cuts at 10/22/32/42/54s | 0.3–0.4s crossfade between consecutive page titles | All page boundaries |
| Decision pills firing 1s before msg-06 | Pills cascade IN SYNC with msg-06 words ("approved" → "rejected" → "pending") | 05 |
| Logo lock had no emphasis beat | Logo gets its own page (05) + 1.0→1.04 scale + mint ring pulse | 05 |
| Soft fade-out exit, no third-act land | Terracotta ribbon stamp + wordmark scale-in + 1.5s static hold | 07 |
| Eyebrow ("Codex App reconstruction") static for 60s | Each page has its own eyebrow ("STEP 01 · 市场证据" etc.) | All |
| Inter-only typography | Serif (Georgia/Anthropic) for titles + sans for chat/UI | All |
| Green #2e7569 borrowed accent | Terracotta `#c96442` as committed brand color | 01, 02, 07 |
| Cards muted against neutral bg | Ring shadow + whisper drop shadow + Ivory framing for contrast | 03, 04, 05, 06 |

## Review Notes / 审查记录

| Time | Source | Change | Synced |
|---|---|---|---|
| 2026-05-14 20:31 | user / chat | "Approved, proceed" — confirmed 7-page structure, Page 05 mint hazard, Page 07 stamp closer | yes (no diff) |
| 2026-05-15 09:24 | agent self-review (v3 hardened skill) | Verified 7 page-detail blocks 1:1 with this plan; every page shows Entry / Hero / Transition chips on timeline; continuity anchors named per page (not vague "smooth"). No frame-plan changes. | yes (no diff) |
