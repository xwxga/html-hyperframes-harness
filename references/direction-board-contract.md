# Direction Board Contract

`direction_board.html` is the Director Workbench: a static, pre-generation review layer before final HyperFrames `index.html` generation. Its UI shell must not replace asset-first review substance.

## Required Board Shape

- Name: Director Workbench.
- Default visible language: English.
- Views: Overview and Frames.
- Style: Figma-like white canvas, soft grid, selection outlines, small pills, side panels, artboards, and timeline.
- Critical-frame style: HyperFrames default unless explicitly overridden.
- Boundary: final HyperFrames `index.html` remains separate.

## Required Stages

The board must include these `data-stage` markers in order:

```html
<header data-stage="director-workbench"></header>
<main data-stage="overview-view"></main>
<section data-stage="director-cover"></section>
<section data-stage="visual-contact-sheet"></section>
<section data-stage="asset-wall"></section>
<section data-stage="rhythm-storyboard"></section>
<section data-stage="section-storyboard"></section>
<section data-stage="critical-frame-mockups"></section>
<section data-stage="visual-system-lock"></section>
<section data-stage="motion-timeline"></section>
<section data-stage="review-gate-summary"></section>
<section data-stage="frames-workbench"></section>
```

## Real Example Requirements

For a real HyperFrames video example, the board must include:

- a 6-frame visual contact sheet or the correct final frame count for the project;
- an asset wall with real local assets;
- section storyboard and rhythm overview;
- critical-frame mockups with locked final-video copy;
- Visual System Lock;
- Motion Timeline;
- Frames view with inspectable 9:16 artboards;
- Inspector declaration for the HyperFrames default critical-frame style;
- mapping to final `index.html`, `hyperframes.json`, local assets, snapshots, and render notes.

## Frame Inspector

Each inspectable artboard should expose:

- frame ID;
- aspect mode;
- critical-frame style route;
- motion intent;
- source asset;
- final source mapping when practical.

Recommended visible copy:

```html
<dt>Frame style</dt>
<dd>HyperFrames default: white grid canvas, black linework, green status dot, sparse title card, source-card evidence.</dd>
```

## Forbidden Board Content

Do not include production handoff checklists, engineering gates, compact handoff tables, risk registers, or final render checklists inside the Director Workbench. Keep those in Markdown, especially `04_render_plan.md`.
