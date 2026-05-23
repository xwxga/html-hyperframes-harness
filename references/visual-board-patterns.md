# Visual Board Patterns

The canonical pattern for `direction_board.html` is **Pattern W shell + Pattern A substance**.

## Pattern W: Director Workbench Shell

Pattern W gives the director one Figma-like workbench where overall direction and every frame can be reviewed before final HyperFrames generation.

Required shell elements:

- top bar with project status;
- Overview / Frames switch;
- language switch when the source project needs it;
- white canvas and soft grid;
- artboards, side panels, inspector, and timeline;
- stable dimensions for frame lists, artboards, and timeline controls.

## Pattern A: Asset-First Substance

Pattern A prevents the board from becoming a pretty but empty UI contract.

Required substance:

- visual contact sheet before abstract planning text;
- Asset Wall with real local assets;
- section storyboard;
- critical-frame mockups;
- Visual System Lock;
- Motion Timeline;
- Frames view with inspectable 9:16 artboards;
- final `index.html` mapping.

## Critical-Frame Style

The Frames Inspector must declare the critical-frame style route. Default route:

> HyperFrames default: white grid canvas, black linework, green status dot, sparse title-card copy, and source-card evidence.

Do not confuse the workbench shell style with the critical-frame style. The shell is the review UI; the critical frame is the visual language of the video frames being reviewed.

## Anti-Patterns

- Showing fewer frame previews than the final composition.
- Hiding assets behind inspector text or final summaries.
- Replacing locked source copy with generic marketing copy.
- Letting motion notes replace critical-frame planning.
- Turning `direction_board.html` into the final HyperFrames `index.html`.
