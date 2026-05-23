# Aspect Ratio Modes

The harness supports aspect-ratio planning before the final HyperFrames composition is generated.

## Modes

- `vertical`: default for short-video work, usually 9:16.
- `horizontal`: use only when the final platform or source material requires it.
- `both`: use when the same concept must be reviewed for multiple deliverables.

## Rules

- Record the chosen mode in `02_design_direction.md`.
- Record final composition size in `04_render_plan.md`.
- Keep stable frame IDs across modes.
- Do not treat aspect-ratio conversion as a final-render-only concern; review key layouts before handoff.
