# 04 Render Plan

## Gate Status

Create this file only after `direction_board.html` has been reviewed or explicitly waived.

- Direction board reviewed: yes / no
- Review method: user-approved / agent-reviewed / waived
- Review evidence:
- HTML changes synced to Markdown: yes / no / pending
- Render plan status: ready / blocked

## Final Structure

- Final page count:
- Target duration:
- Aspect ratio:
- Composition size:
- Target platform:

## Design Handoff

- Primary design route:
- Accent or reference route:
- Critical-frame style route: HyperFrames default / user-selected route
- Local design source paths:
- Visual principles to preserve:
- Anti-patterns to avoid:

## Locked Items

Final HyperFrames generation must preserve:

- Locked sections:
- Locked narrative spine:
- Locked opening hook:
- Locked ending landing point:
- Locked source claims:
- Allowed visual-only deltas:

## Page Handoff

| Page | Duration | Main text | Hero frame | Asset | Transition |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Stable Metadata Handoff

Carry these stable IDs into the final HTML when practical.

| Target ID | Final HTML metadata | Source board object |
|---|---|---|
|  |  |  |

## Motion Intent

Describe director-level motion intent, not GSAP code.

- Global motion rule:
- Text motion:
- Asset motion:
- Page transition pattern:
- Motion constraints:

## Director Metadata Required In Final HTML

The final HyperFrames HTML should preserve planning intent as metadata so future agents can edit safely.

Recommended metadata:

- `data-page-id`
- `data-section-id`
- `data-critical-frame`
- `data-motion-intent`
- `data-aspect-mode`
- `data-source-asset`

## HyperFrames Generation Notes

- Use this render plan as the only handoff source.
- Do not invent new pages unless the user approves.
- Do not invent new assets, styles, or transitions unless the harness Markdown is updated first.
- Preserve critical-frame intent in layout and timing.
- Animation connects critical frames; it must not replace critical-frame planning.
- Build hero layouts first, then animate between validated states.
- Run `npx hyperframes lint`, `npx hyperframes validate`, and `npx hyperframes inspect` when practical before final render.

## Final Generation Gate

- [ ] Sections, assets, and mainline were confirmed before `direction_board.html` generation.
- [ ] `direction_board.html` was Director Workbench style and preview-first.
- [ ] Visual System Lock, Motion Timeline, Review Gate Summary, and critical-frame style lock are visible.
- [ ] Review changes are synced or marked pending.
- [ ] Every final page maps to a planned page.
- [ ] Every transition is named in this render plan.
- [ ] Open risks are accepted or resolved.
