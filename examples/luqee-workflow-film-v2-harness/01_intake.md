# 01 Intake / 意图摄取

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-16 21:24 | Codex | Updated paths for the portable GitHub example package. |
| 2026-05-14 20:21 | Claude | Initial intake for LUQEE process film v2 — vertical re-run of v1. |

## Project / 项目

- Project title / 项目标题: LUQEE process film v2 — Chat becomes a brand system (vertical)
- Working folder / 工作目录: `examples/luqee-workflow-film-v2-harness/`
- Date / 日期: 2026-05-14
- Owner / 负责人: Sean

## Raw Intent / 原始想法

V1 of this video (`media/codex_chat_reconstruction_trial/`, rendered 2026-05-07) tells the story of how a Codex/chat-driven workflow produced the LazyEazy / LUQEE pet apparel brand system. It was 60s, 1920×1080, three-panel reconstruction (Codex sidebar + chat + 4 artifact cards). The narrative landed but the execution had real weak points (see Anti-patterns below).

V2 reuses the same beats and the same 4 real LUQEE assets, but rebuilds the film **vertical for mobile-first social** and applies the local Design Router to lock a real visual route — instead of v1's half-committed mood.

V1 用 60 秒横版讲了 Codex 协助生成 LazyEazy/LUQEE 品牌的过程。叙事 OK，但执行有明显短板。V2 保留同样的节拍和素材，但改为竖屏移动端，并通过本地 Design Router 锁定一个真正完整的设计语言。

- User idea / 用户想法: Re-run the LUQEE process film using the new hyperframes-direction-harness skill, going vertical, fixing v1's weak spots, applying a real Design Router route.
- Core message / 核心信息: AI-assisted brand process is a craft, not an automation pipeline. The chat is the workshop; the artifacts are the proof.
- Desired viewer takeaway / 希望观众带走什么: This is a premium, transparent brand-build — reconstructed, not faked. Codex/AI is a collaborator with taste, not a content generator.
- What should not be misunderstood / 不能被误解的点:
  - Not "AI made the brand by itself" — the chat shows iteration, decisions, rejections.
  - Not a generic AI demo — this is specifically a pet apparel (dogwear) brand.
  - Not a UI screencast of the actual Codex tool — it is a reconstructed, public-safe visualization.

## Output Target / 产物目标

- Output type / 产物类型: short video / 短视频
- Platform / 平台: Xiaohongshu / Reels / TikTok (vertical social) — desktop replay also acceptable
- Aspect ratio / 画幅: **1080 × 1920 vertical**
- Approximate duration / 预计时长: ~60s (v1 carry-over; allow ±10s during planning)
- Language / 语言: 中文 primary, English secondary on technical labels
- Captions / 字幕: Burned-in via composition layout (no separate .srt) — chat bubbles and overlay captions carry the script

## Existing Materials / 已有素材

Only list assets that exist. Do not invent.

| Asset / 素材 | Type | Path | What it shows | Possible role | Risk |
|---|---|---|---|---|---|
| market_evidence_board.png | image | `assets/market_evidence_board.png` | Market evidence board — research images, brand territories | Page 03 (Evidence) hero | Image is a board collage — needs full-bleed framing to read |
| color_master.png | image | `assets/color_master.png` | Color master board — palette + material logic | Page 04 (Color logic) hero | Wider than tall; vertical needs careful crop |
| logo_luqee_final.png | image | `assets/logo_luqee_final.png` | Final LUQEE logo lockup | Page 05 (Decision gate) hero, scale-up emphasis | Small in v1 — must be reframed for hero scale in vertical |
| sku_system_final.png | image | `assets/sku_system_final.png` | SKU architecture — 4-product matrix | Page 06 (SKU architecture) hero | Information-dense; needs hold time + readable scale |
| v1 index.html | reference | `media/codex_chat_reconstruction_trial/index.html` | Narrative source (9-message chat script + headline timeline) | Script source-of-truth for v2 | Layout reference does NOT carry over (horizontal-only) |
| v1 snapshots | reference | `media/codex_chat_reconstruction_trial/snapshots/*.png` | Rendered evidence of v1 beats and weak spots | Anti-pattern visual record | — |

## Style Preferences / 风格偏好

- Visual style / 视觉风格: editorial parchment, warm gravitas, AI-process-as-craft. Magazine spread, not dashboard.
- Typography preference / 字体偏好: Serif display for page titles + sans for chat/UI labels. v1 used Inter only — that flattened the hierarchy.
- Color preference / 色彩偏好: Warm parchment canvas + terracotta brand accent + warm-only neutrals. Single hazard accent for decision-gate moment.
- Motion preference / 动效偏好: Restrained smoothstep, deliberate text crossfades (0.3–0.5s), real hero emphasis on the logo lock, real third-act land on the closing page.
- Reference examples / 参考例子: V1 of this project — keep its narrative restraint, fix its hierarchy and timing.
- Existing `design.md` path / 项目设计文档路径: None for LUQEE itself. Brand info implied via the 4 real assets.
- Candidate Design Router style / 候选 Design Router 风格:
  - Primary: `docs/design-router/design-systems/core/claude/DESIGN.md`
  - Optional accent: `docs/design-router/design-systems/core/theverge/DESIGN.md` (single hazard mint for decision-approved beat only)
- Visual anti-patterns / 视觉反模式: see "Things To Avoid" below.

## Constraints / 约束

- Hard constraints / 硬约束:
  - Vertical 1080×1920.
  - Reuse the 4 real LUQEE asset PNGs — no redraw, no AI-generated stand-ins.
  - No CDN runtime — keep self-contained per HyperFrames practice.
  - Bilingual labels — Chinese-first.
- Platform constraints / 平台约束: vertical social feed — first 2–3s must hook without sound; assume sound-off default.
- Asset constraints / 素材约束:
  - market_evidence_board, color_master, sku_system are wider-than-tall — vertical layout must frame them in constrained hero containers, not crop to ruin.
  - logo_luqee_final must scale up cleanly — it was 360×210 in v1, will need to hold more visual weight in vertical.
- Time constraints / 时间约束: target ~60s.

## Things To Avoid / 禁止项

Drawn from the v1 audit (concrete weak spots, not vague preferences):

- Avoid content / 内容不要:
  - "Safety note" defensive copy ("Public-safe reconstruction, no raw paths…"). Tone clashes with premium positioning. Trust the work; don't apologize for it.
  - Eyebrow labels that never change with state (v1's "Codex App style reconstruction" was static for 60s).
- Avoid visual style / 视觉不要:
  - Inter-only typography (v1's flat single-font hierarchy).
  - Green (#2e7569) as primary accent — switch to Claude terracotta (#c96442) as committed brand color.
  - Cool blue-grays anywhere (Claude rule).
  - Hard drop shadows. Use Claude's ring-shadow system.
  - PPT-style hard cuts between pages — every transition needs a named continuity anchor.
- Avoid motion / 动效不要:
  - Hard cut on headline/copy switches — v1 popped text at 10s/22s/32s/42s/54s with no transition. V2 uses 0.3–0.4s crossfades.
  - Decision pills firing before / out of sync with the dialogue that triggers them (v1 lag of 1s).
  - Soft fade-out exit with no third-act beat (v1's last 3s felt incomplete).
  - Logo card sliding in alongside other cards with no dedicated emphasis (v1 buried the logo-lock moment).
- Avoid interpretation / 理解不要偏到:
  - "AI replaces designer." It's collaboration, not automation.
  - "Generic LLM demo." This is a real dogwear brand's real artifacts.

## Open Questions / 未决问题

Resolved during planning, not held open into critical-frame lock:

- [x] Page count for vertical? → Proposed 7 pages (matches v1 beats decomposition); confirmed in `02_design_direction.md` and `03_critical_frame_plan.md`.
- [x] Keep all 9 messages verbatim, or compress? → Keep beats verbatim; some msgs merge into the same page's chat panel.
- [ ] Should the closing page (07) use a static "land" frame or a slow camera pull-in on the wordmark? — open, resolve at critical-frame review.
- [ ] Do we need a final timecode/scroll-hint cue for social feed retention? — open.
