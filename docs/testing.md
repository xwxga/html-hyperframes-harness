# Testing

## Static Validation

Run:

```bash
node scripts/validate-static.js
```

The validator checks required files, director `data-stage` markers, language switch controls, explicit HyperFrames default frame style, golden-example frame count, locked copy, asset targets, README media, retired references, retired public-draft files, large files, suspicious secret patterns, and accidental local-state tracking.

## Manual Review

Open these files locally:

- `demo/index.html`
- `board/direction_board.template.html`
- `examples/html-hyperframes-video-project/harness/direction_board.html`
- `examples/html-hyperframes-video-project/index.html`
- `README.md`
- `README.zh-CN.md`

Check that the Director Workbench opens, the Overview starts with the real 6-frame contact sheet, all must-use assets are visible, Frames exposes 6 real frames, the Inspector declares the HyperFrames default critical-frame style, and README images load from `docs/media/`.

## Release Gate

- Static validator passes.
- `README.md` is English-first and has no changelog.
- `README.zh-CN.md` is the only translated README.
- The only public example is `examples/html-hyperframes-video-project/`.
- Historical draft docs and old comment-system files are absent.
- `.sisyphus/` stays ignored and uncommitted.
