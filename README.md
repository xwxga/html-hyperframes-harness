# HTML HyperFrames Harness

<p>
  <strong>English</strong> |
  <a href="./README.zh-CN.md">Chinese</a>
</p>

![Director Workbench overview](./docs/media/director-workbench-overview.png)

HTML HyperFrames Harness is an unofficial independent community package for HyperFrames workflows. It adds a pre-render **Director Workbench** before the final HyperFrames `index.html` is generated.

The problem it solves is simple: without a visual review layer, an agent can say it understands the video, but the human reviewer cannot feel the rhythm, assets, frame layout, or motion intent before render time.

This harness makes those decisions visible first.

## Quick Links

- [Live demo](https://xwxga.github.io/html-hyperframes-harness/)
- [Director Workbench example](https://xwxga.github.io/html-hyperframes-harness/examples/html-hyperframes-video-project/harness/direction_board.html)
- [Final HyperFrames source](https://xwxga.github.io/html-hyperframes-harness/examples/html-hyperframes-video-project/index.html)
- [Preview MP4](https://xwxga.github.io/html-hyperframes-harness/examples/html-hyperframes-video-project/renders/html_hyperframes_5frame_preview.mp4)

## What It Is

The core artifact is `direction_board.html`, a static Director Workbench that sits before the final HyperFrames composition.

It is designed to lock:

- the video rhythm and section structure;
- the real source assets and their roles;
- the critical frame layout for each planned frame;
- the visual system and critical-frame style;
- the motion intent that the final HyperFrames composition should preserve;
- the mapping from reviewed frames to the final `index.html`.

This repository is not a HyperFrames fork, not an OpenDesign fork, and not affiliated with or endorsed by HyperFrames unless accepted upstream. HyperFrames is the target workflow; Figma-like/OpenDesign-style language only describes the workbench UI pattern.

## How The Workflow Works

1. Start with a user brief and real assets.
2. Fill the harness Markdown files in `templates/`.
3. Generate a Director Workbench from `board/direction_board.template.html`.
4. Review the Overview view for the contact sheet, asset wall, storyboard, visual system, and motion timeline.
5. Review the Frames view frame by frame.
6. Sync accepted revisions back into Markdown.
7. Mark `04_render_plan.md` ready.
8. Hand off to the HyperFrames generation step to create the final `index.html`.

![Director Workbench frames view](./docs/media/director-workbench-frames.png)

## Repository Layout

```text
.
├── SKILL.md
├── board/
│   ├── direction_board.template.html
│   ├── direction_board.css
│   └── workbench-controls.js
├── demo/
│   └── index.html
├── docs/
│   ├── media/
│   └── testing.md
├── examples/
│   └── html-hyperframes-video-project/
├── references/
├── scripts/
│   └── validate-static.js
└── templates/
```

## Example

The bundled example in `examples/html-hyperframes-video-project/` is a real 6-frame HyperFrames video project. It includes:

- full harness Markdown;
- the Director Workbench;
- local source assets;
- snapshots and a lightweight preview MP4;
- the final HyperFrames `index.html`;
- `hyperframes.json` and `package.json`.

The example keeps its locked Chinese video titles because they are source content, not UI chrome.

## Acknowledgements

This project is built for people experimenting with [HyperFrames](https://github.com/heygen-com/hyperframes) workflows. Thanks to the HyperFrames team for making HTML-based video composition programmable, inspectable, and friendly to agent-driven production.

The Director Workbench borrows interface language from familiar Figma-like and [OpenDesign](https://github.com/nexu-io/open-design)-style review patterns: canvas, artboards, inspector, timeline, and visual-system locking. OpenDesign is referenced here as design inspiration and UI vocabulary, not as an upstream dependency, fork relationship, or official affiliation.

## What This Is Not

- Not a HyperFrames renderer.
- Not a backend collaboration app.
- Not a provider-specific media SDK wrapper.
- Not a replacement for human visual review.
- Not the final HyperFrames composition.

## Validation

Run the static validator before release:

```bash
node scripts/validate-static.js
```

It checks required files, board stages, language switching, locked copy, frame count, asset targets, README media, retired references, large files, suspicious secrets, and local-state ignore rules.

## License

MIT.
