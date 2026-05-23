---
name: hyperframes-direction-harness
description: "Public reusable Director Workbench harness for HyperFrames pre-generation review. Use before creating a final HyperFrames index.html when rhythm, visual system, critical-frame style, frame-by-frame intent, or motion timeline is not locked. Requires a reviewed direction_board.html and ready 04_render_plan.md before final composition generation."
---

# HyperFrames Direction Harness

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-24 00:14 | Codex | Removed the side review rail from the workbench contract and locked critical frames to the HyperFrames default style. / 从 workbench 契约中移除侧边审查栏，并将关键帧锁定为 HyperFrames 默认风格。 |
| 2026-05-23 23:31 | Codex | Restored asset-first substance inside the Director Workbench shell and added golden-example quality gates. / 在 Director Workbench 外壳内恢复素材优先内容，并加入 golden example 质量门槛。 |
| 2026-05-19 22:31 | Sisyphus | Upgraded the skill contract to Director Workbench v1.5 with Figma-like Overview/Frames views. / 将 skill 契约升级为 Director Workbench v1.5，包含 Figma-like Overview/Frames 视图。 |
| 2026-05-18 16:22 | Sisyphus | Rewrote public skill contract around director-first preview boards, one-language UI, and no production handoff board. |
| 2026-05-17 00:42 | Sisyphus | Aligned the public Visual Review harness positioning, fixed board template, v1 Pattern A workflow, non-goals, and review gates. |
| 2026-05-16 21:24 | Codex | Added the global short-video source-asset motion rule and updated related paths for the portable GitHub package. |
| 2026-05-15 16:36 | Sisyphus | Bound the skill to asset-first visual boards, pattern library, golden reference, pre-board convergence, scope classification, mainline lock, and drift controls. |
| 2026-05-14 22:37 | Sisyphus | Hardened the draft into an operational project-level skill with Design Router, design direction, hard gates, review definition, bypass rules, default visual principles, and HyperFrames handoff contract. |
| 2026-05-13 22:23 | Sisyphus | Created the draft skill for the minimal HyperFrames Direction Harness workflow. |

## Overview / 概览

Use this public reusable skill before generating a new final HyperFrames `index.html` when the project needs director review and direction convergence first.

在生成最终 HyperFrames `index.html` 之前，如果项目需要先做导演审查和方向收敛，使用本 skill。

The central artifact is `direction_board.html`, named **Director Workbench** in the UI. The workbench shell is Pattern W: Figma-like top bar, Overview / Frames views, language switch, inspector, and timeline. The workbench substance remains Pattern A: asset-first visual evidence, contact sheet, asset wall, storyboard, critical-frame mockups, locked copy, explicit critical-frame style, and final `index.html` mapping.

核心 artifact 是 `direction_board.html`，UI 名称为 **Director Workbench**。Workbench 外壳是 Pattern W：Figma-like 顶栏、Overview / Frames 视图、语言切换、inspector 和 timeline。Workbench 实质仍是 Pattern A：素材优先的视觉证据、contact sheet、asset wall、storyboard、critical-frame mockups、锁定文案、显式关键帧风格和最终 `index.html` 映射。

## V1 Public Boundary / V1 公开边界

- Static HTML/CSS/JS only. / 仅静态 HTML/CSS/JS。
- Fixed Director Workbench shell before final `index.html`, with asset-first content generated from the full harness Markdown. / 最终 `index.html` 前使用固定 Director Workbench 外壳，内容必须由完整 harness Markdown 生成并保持素材优先。
- English is the default visible language; a global switch shows English or Chinese, never both side by side. / 默认显示英文；全局切换显示英文或中文，不中英并排。
- Locked final-video copy is source content. Do not translate or replace it just because the board UI defaults to English. / 已锁定的最终视频文案是 source content。不要因为 board UI 默认英文就翻译或替换它。
- Critical frames default to the HyperFrames frame style: white grid canvas, black linework, green status dot, sparse title-card copy, and source-card evidence. / 关键帧默认使用 HyperFrames 画面风格：白色网格画布、黑色线框、绿色状态点、低密度标题卡和 source-card 证据。
- Image2Image, Image2GPT, and Image-to-Video are planning briefs only in v1; no provider execution is required. / v1 中 Image2Image、Image2GPT、Image-to-Video 只是规划 brief，不要求供应商执行。

## Trigger / 触发场景

Use this skill when:

- The user asks to create a HyperFrames video but the visual direction is not fully locked.
- The user wants an explicit HTML direction board before final HyperFrames HTML.
- The project needs rhythm, shots, layouts, locked main copy, asset motion, or style consistency reviewed.
- The project needs local Design Router selection before HyperFrames composition.

使用本 skill 的场景：

- 用户要做 HyperFrames 视频，但视觉方向尚未锁定。
- 用户希望在最终 HyperFrames HTML 之前，先看到一个 HTML 方向审查板。
- 项目需要审查节奏、镜头、版面、已锁定主文字、素材运动或风格一致性。
- 项目需要在 HyperFrames composition 前先做本地 Design Router 选择。

## Bypass Rules / 跳过规则

Bypass only for small edits to an already-existing HyperFrames composition: typo, timing, one color/spacing correction, same-direction asset replacement, lint/validate/render bug fix, or a single-page local adjustment that does not change direction.

只有对已有 HyperFrames composition 做小修时才跳过：错字、timing、单个颜色或间距修正、方向不变的素材替换、lint/validate/render bug、或不改变方向的单页局部调整。

## Required Workflow / 必须工作流

1. Create/update `01_intake.md` from the user brief and real assets.
2. Create/update `02_design_direction.md` with the aesthetic route.
3. Create/update `03_critical_frame_plan.md` with sections, keyframes, locked main copy, assets, and motion intent.
4. Ask short multiple-choice questions if sections, assets, or mainline are not confirmed.
5. Create `direction_board.html` from `board/direction_board.template.html` using Pattern W shell plus Pattern A asset-first substance from `references/visual-board-patterns.md`.
6. Ensure the Overview view contains a visual contact sheet, asset wall, section storyboard, critical-frame mockups, Visual System Lock, Motion Timeline, and Review Gate Summary.
7. Ensure the Frames view maps every planned final frame to a real 9:16 artboard, locked copy, asset role, motion intent, explicit HyperFrames default frame style, and final `index.html` metadata where practical.
8. Let the user or agent review the board visually, then sync accepted revisions into Markdown.
9. Update Markdown artifacts after accepted board revisions.
10. Mark `04_render_plan.md` ready only after the board is reviewed or explicitly waived.
11. Hand off to the HyperFrames skill using `04_render_plan.md` as the final composition source.

1. 根据用户 brief 和真实素材创建/更新 `01_intake.md`。
2. 创建/更新 `02_design_direction.md`，记录审美路线。
3. 创建/更新 `03_critical_frame_plan.md`，记录章节、关键帧、锁定主文字、素材和动效意图。
4. 如果章节、素材或主线尚未确认，用简短选择题收敛。
5. 使用 `board/direction_board.template.html` 和 `references/visual-board-patterns.md` 中的 Pattern W 外壳 + Pattern A 素材优先内容创建 `direction_board.html`。
6. 确保 Overview 视图包含 visual contact sheet、asset wall、section storyboard、critical-frame mockups、Visual System Lock、Motion Timeline 和 Review Gate Summary。
7. 确保 Frames 视图把每一个计划中的最终 frame 映射到真实 9:16 artboard、锁定文案、素材角色、motion intent、显式 HyperFrames 默认关键帧风格，以及可行时的最终 `index.html` metadata。
8. 让用户或 agent 做视觉审查，并把接受的修改同步回 Markdown。
9. 接受 board 修订后，同步更新 Markdown artifacts。
10. 只有 board 已审查或明确豁免后，才把 `04_render_plan.md` 标记为 ready。
11. 最终交给 HyperFrames skill 时，只使用 `04_render_plan.md` 作为 composition source。

## Direction Board Contract / Direction Board 契约

`direction_board.html` must include these stages in order:

```html
<header data-stage="director-workbench"></header>
<section data-stage="overview-view"></section>
<section data-stage="visual-contact-sheet"></section>
<section data-stage="asset-wall"></section>
<section data-stage="section-storyboard"></section>
<section data-stage="critical-frame-mockups"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="review-gate-summary"></section>
<section data-stage="frames-workbench"></section>
```

Each board must show real visual evidence before abstract planning text. Each final frame preview must show a visual mock, locked final-video copy, asset role, motion intent, and mapping to the final HyperFrames composition.

每个 board 必须先展示真实视觉证据，再展示抽象规划文字。每个最终 frame preview 必须展示视觉 mock、已锁定最终视频文案、素材角色、动效意图，以及到最终 HyperFrames composition 的映射。

The Frames inspector must explicitly show the critical-frame style route, defaulting to the HyperFrames frame style unless the user chooses another route.

Frames inspector 必须显式展示关键帧风格路线；除非用户选择其他路线，否则默认使用 HyperFrames 画面风格。

## Quality Guardrails / 质量门槛

For a real video example, the board is blocked if any of these are true:

- `03_critical_frame_plan.md` was compressed into a summary table instead of preserving frame intent, locked copy, assets, motion, and continuity.
- The board replaces locked final-video copy with generic English marketing copy.
- The board has fewer frame previews than the final HyperFrames composition.
- The board hides must-use assets behind abstract text, inspector fields, or a final summary.
- The final `index.html` can no longer be traced back to the reviewed board and `04_render_plan.md`.

真实视频示例中，如出现以下任一情况，board 视为 blocked：

- `03_critical_frame_plan.md` 被压缩成摘要表，而没有保留 frame intent、锁定文案、素材、动效和连续性。
- Board 用泛化英文营销文案替换已锁定最终视频文案。
- Board 的 frame preview 数量少于最终 HyperFrames composition。
- Board 把必用素材藏在抽象文字、inspector 字段或最终摘要后面。
- 最终 `index.html` 无法回溯到已审查 board 和 `04_render_plan.md`。

## Forbidden Board Content / Board 禁止内容

Do not put draft checks, production handoff, compact handoff, implementation gates, engineering checklists, risk-list blocks, final render checklists, or large sync tables inside the director-facing board.

不要把 draft check、production handoff、compact handoff、implementation gate、engineering checklist、risk-list block、final render checklist 或大型同步表放进导演侧 board。

Those details belong in Markdown, especially `04_render_plan.md`, after the director preview is approved.

这些细节属于 Markdown，尤其是导演预览通过之后的 `04_render_plan.md`。

## Required References / 必读参考

- `board/direction_board.template.html`
- `board/workbench-controls.js`
- `references/direction-board-contract.md`
- `references/visual-board-patterns.md`
- `templates/05_revision_plan.md`

## Static Validation / 静态验证

Before publishing, run:

```bash
node scripts/validate-static.js
```

发布前运行：

```bash
node scripts/validate-static.js
```
