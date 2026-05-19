---
name: hyperframes-direction-harness
description: "Public reusable Director Workbench harness for HyperFrames pre-generation review. Use before creating a final HyperFrames index.html when rhythm, visual system, frame-by-frame intent, motion timeline, or comment-based revisions are not locked. Requires a reviewed direction_board.html and ready 04_render_plan.md before final composition generation."
---

# HyperFrames Direction Harness

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-19 22:31 | Sisyphus | Upgraded the skill contract to Director Workbench v1.5 with Figma-like Overview/Frames views. / 将 skill 契约升级为 Director Workbench v1.5，包含 Figma-like Overview/Frames 视图。 |
| 2026-05-18 16:22 | Sisyphus | Rewrote public skill contract around director-first preview boards, one-language UI, side annotations, and no production handoff board. |
| 2026-05-17 00:42 | Sisyphus | Aligned workflow/checklist wording with public v1 Pattern A order and comment/aspect review gates. |
| 2026-05-17 00:06 | Sisyphus | Repositioned the skill as a public reusable Visual Review harness with fixed board template, comments, and explicit v1 non-goals. |
| 2026-05-16 21:24 | Codex | Added the global short-video source-asset motion rule and updated related paths for the portable GitHub package. |
| 2026-05-15 16:36 | Sisyphus | Added scope classification, mainline lock, drift stop, and layout-only edit rules to prevent visual revisions from rewriting narrative direction. |
| 2026-05-15 13:00 | Sisyphus | Bound the skill to the visual board pattern library and asset-first golden reference. |
| 2026-05-15 11:12 | Sisyphus | Made asset-first visual Direction Board the only board type and added mandatory multiple-choice convergence before board generation. |
| 2026-05-14 22:37 | Sisyphus | Hardened the draft into an operational project-level skill with hard gates, review definition, bypass rules, and HyperFrames handoff contract. |
| 2026-05-14 17:58 | Sisyphus | Connected the workflow to the local Design Router, added a design-direction stage, and documented HyperFrames default visual principles. |
| 2026-05-13 22:23 | Sisyphus | Created the draft skill for the minimal HyperFrames Direction Harness workflow. |

## Overview / 概览

Use this public reusable skill before generating a new final HyperFrames `index.html` when the project needs director review and direction convergence first.

在生成最终 HyperFrames `index.html` 之前，如果项目需要先做导演审查和方向收敛，使用本 skill。

The central artifact is `direction_board.html`, now named **Director Workbench** in the UI: a Figma-like review workbench with Overview and Frames views for rhythm, visual system, frame-by-frame intent, motion timeline, and comments. It is not a production handoff board.

核心 artifact 是 `direction_board.html`，UI 名称为 **Director Workbench**：一个 Figma-like 审查 workbench，通过 Overview 和 Frames 视图审查节奏、视觉系统、逐帧意图、motion timeline 和评论。它不是 production handoff board。

## V1 Public Boundary / V1 公开边界

- Static HTML/CSS/JS only. / 仅静态 HTML/CSS/JS。
- Fixed Director Workbench template before final `index.html`. / 最终 `index.html` 前使用固定 Director Workbench 模板。
- English is the default visible language; a global switch shows English or Chinese, never both side by side. / 默认显示英文；全局切换显示英文或中文，不中英并排。
- Comments are weak side annotations on semantic targets; reviewers write in any language; export JSON for the next AI revision. / 评论是语义目标上的弱化侧边批注；审查者可用任意语言书写；导出 JSON 供下一个 AI 修改。
- Image2Image, Image2GPT, and Image-to-Video are planning briefs only in v1; no provider execution is required. / v1 中 Image2Image、Image2GPT、Image-to-Video 只是规划 brief，不要求供应商执行。

## Trigger / 触发场景

Use this skill when:

- The user asks to create a HyperFrames video but the visual direction is not fully locked.
- The user wants an explicit HTML direction board before final HyperFrames HTML.
- The project needs rhythm, shots, layouts, locked main copy, asset motion, or style consistency reviewed.
- The user wants reviewers to comment directly on selectable targets in the HTML board.
- The project needs local Design Router selection before HyperFrames composition.

使用本 skill 的场景：

- 用户要做 HyperFrames 视频，但视觉方向尚未锁定。
- 用户希望在最终 HyperFrames HTML 之前，先看到一个 HTML 方向审查板。
- 项目需要审查节奏、镜头、版面、已锁定主文字、素材运动或风格一致性。
- 用户希望审查者能直接在 HTML board 上选择目标并写评论。
- 项目需要在 HyperFrames composition 前先做本地 Design Router 选择。

## Bypass Rules / 跳过规则

Bypass only for small edits to an already-existing HyperFrames composition: typo, timing, one color/spacing correction, same-direction asset replacement, lint/validate/render bug fix, or a single-page local adjustment that does not change direction.

只有对已有 HyperFrames composition 做小修时才跳过：错字、timing、单个颜色或间距修正、方向不变的素材替换、lint/validate/render bug、或不改变方向的单页局部调整。

## Required Workflow / 必须工作流

1. Create/update `01_intake.md` from the user brief and real assets.
2. Create/update `02_design_direction.md` with the aesthetic route.
3. Create/update `03_critical_frame_plan.md` with sections, keyframes, locked main copy, assets, and motion intent.
4. Ask short multiple-choice questions if sections, assets, or mainline are not confirmed.
5. Create `direction_board.html` from `board/direction_board.template.html` using Pattern W in `references/visual-board-patterns.md`.
6. Ensure the workbench contains: top bar, Overview view, Frames view, Visual System Lock, Motion Timeline, Review Gate Summary, and lightweight side annotations.
7. Let the user or agent review the board visually. Comments should be exported as JSON and synced into `05_revision_plan.md`.
8. Update Markdown artifacts after accepted board revisions.
9. Mark `04_render_plan.md` ready only after the board is reviewed or explicitly waived.
10. Hand off to the HyperFrames skill using `04_render_plan.md` as the final composition source.

1. 根据用户 brief 和真实素材创建/更新 `01_intake.md`。
2. 创建/更新 `02_design_direction.md`，记录审美路线。
3. 创建/更新 `03_critical_frame_plan.md`，记录章节、关键帧、锁定主文字、素材和动效意图。
4. 如果章节、素材或主线尚未确认，用简短选择题收敛。
5. 使用 `board/direction_board.template.html` 和 `references/visual-board-patterns.md` 中的 Pattern W 创建 `direction_board.html`。
6. 确保 workbench 包含：顶栏、Overview 视图、Frames 视图、Visual System Lock、Motion Timeline、Review Gate Summary 和轻量侧边批注。
7. 让用户或 agent 做视觉审查。评论应导出为 JSON，并同步进 `05_revision_plan.md`。
8. 接受 board 修订后，同步更新 Markdown artifacts。
9. 只有 board 已审查或明确豁免后，才把 `04_render_plan.md` 标记为 ready。
10. 最终交给 HyperFrames skill 时，只使用 `04_render_plan.md` 作为 composition source。

## Direction Board Contract / Direction Board 契约

`direction_board.html` must include these stages in order:

```html
<header data-stage="director-workbench"></header>
<section data-stage="overview-view"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="review-gate-summary"></section>
<section data-stage="frames-workbench"></section>
<aside data-stage="annotation-layer"></aside>
```

Each layout preview must show a visual mock, primary content, locked main copy, asset role, and motion intent.

每个版面预览必须展示视觉 mock、主要内容、已锁定主文字、素材角色和动效意图。

Every reviewable object should expose a semantic target:

```html
<article data-commentable="true" data-comment-target-type="layout" data-comment-target-id="layout-01"></article>
```

## Forbidden Board Content / Board 禁止内容

Do not put draft checks, production handoff, compact handoff, implementation gates, engineering checklists, risk-list blocks, final render checklists, or large sync tables inside the director-facing board.

不要把 draft check、production handoff、compact handoff、implementation gate、engineering checklist、risk-list block、final render checklist 或大型同步表放进导演侧 board。

Those details belong in Markdown, especially `04_render_plan.md`, after the director preview is approved.

这些细节属于 Markdown，尤其是导演预览通过之后的 `04_render_plan.md`。

## Required References / 必读参考

- `board/direction_board.template.html`
- `board/comment-layer.js`
- `references/direction-board-contract.md`
- `references/visual-board-patterns.md`
- `references/comment-layer-contract.md`
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
