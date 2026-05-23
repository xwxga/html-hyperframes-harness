---
name: hyperframes-direction-harness
description: "Public reusable Director Workbench harness for HyperFrames pre-generation review. Use before creating a final HyperFrames index.html when rhythm, visual system, critical-frame style, frame-by-frame intent, or motion timeline is not locked. Requires a reviewed direction_board.html and ready 04_render_plan.md before final composition generation."
---

# HyperFrames Direction Harness

## Overview

Use this skill before generating a new final HyperFrames `index.html` when the project needs director review and direction convergence first.

The central artifact is `direction_board.html`, named **Director Workbench** in the UI. The workbench shell is Pattern W: Figma-like top bar, Overview / Frames views, language switch, inspector, and timeline. The workbench substance remains Pattern A: asset-first visual evidence, contact sheet, asset wall, storyboard, critical-frame mockups, locked copy, explicit critical-frame style, and final `index.html` mapping.

## V1 Public Boundary

- Static HTML/CSS/JS only.
- Fixed Director Workbench shell before final `index.html`, with asset-first content generated from the full harness Markdown.
- English is the default visible language; the workbench may switch between English and Chinese when the source project needs it.
- Locked final-video copy is source content. Do not translate or replace it just because the board UI defaults to English.
- Critical frames default to the HyperFrames frame style: white grid canvas, black linework, green status dot, sparse title-card copy, and source-card evidence.
- Image2Image, Image2GPT, and Image-to-Video are planning briefs only in v1; no provider execution is required.

## Trigger

Use this skill when:

- The user asks to create a HyperFrames video but the visual direction is not fully locked.
- The user wants an explicit HTML direction board before final HyperFrames HTML.
- The project needs rhythm, shots, layouts, locked main copy, asset motion, or style consistency reviewed.
- The project needs local design-route selection before HyperFrames composition.

## Bypass Rules

Bypass only for small edits to an already-existing HyperFrames composition: typo, timing, one color or spacing correction, same-direction asset replacement, lint/validate/render bug fix, or a single-page local adjustment that does not change direction.

## Required Workflow

1. Create or update `01_intake.md` from the user brief and real assets.
2. Create or update `02_design_direction.md` with the aesthetic route.
3. Create or update `03_critical_frame_plan.md` with sections, keyframes, locked main copy, assets, and motion intent.
4. Ask short multiple-choice questions if sections, assets, or mainline are not confirmed.
5. Create `direction_board.html` from `board/direction_board.template.html` using Pattern W shell plus Pattern A asset-first substance from `references/visual-board-patterns.md`.
6. Ensure the Overview view contains a visual contact sheet, asset wall, section storyboard, critical-frame mockups, Visual System Lock, Motion Timeline, and Review Gate Summary.
7. Ensure the Frames view maps every planned final frame to a real 9:16 artboard, locked copy, asset role, motion intent, explicit HyperFrames default frame style, and final `index.html` metadata where practical.
8. Let the user or agent review the board visually, then sync accepted revisions into Markdown.
9. Mark `04_render_plan.md` ready only after the board is reviewed or explicitly waived.
10. Hand off to the HyperFrames skill using `04_render_plan.md` as the final composition source.

## Direction Board Contract

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

The Frames inspector must explicitly show the critical-frame style route, defaulting to the HyperFrames frame style unless the user chooses another route.

## Quality Guardrails

For a real video example, the board is blocked if any of these are true:

- `03_critical_frame_plan.md` was compressed into a summary table instead of preserving frame intent, locked copy, assets, motion, and continuity.
- The board replaces locked final-video copy with generic English marketing copy.
- The board has fewer frame previews than the final HyperFrames composition.
- The board hides must-use assets behind abstract text, inspector fields, or a final summary.
- The final `index.html` can no longer be traced back to the reviewed board and `04_render_plan.md`.

## Forbidden Board Content

Do not put draft checks, production handoff, compact handoff, implementation gates, engineering checklists, risk-list blocks, final render checklists, or large sync tables inside the director-facing board.

Those details belong in Markdown, especially `04_render_plan.md`, after the director preview is approved.

## Required References

- `board/direction_board.template.html`
- `board/workbench-controls.js`
- `references/direction-board-contract.md`
- `references/visual-board-patterns.md`
- `templates/05_revision_plan.md`

## Static Validation

Before publishing, run:

```bash
node scripts/validate-static.js
```
