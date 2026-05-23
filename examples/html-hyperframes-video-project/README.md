# HTML + HyperFrames Video Project Example

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-23 23:31 | Codex | Rebuilt the example as a full 6-frame asset-first Director Workbench mapped to the final HyperFrames source. / 将示例重建为完整 6 帧素材优先 Director Workbench，并映射到最终 HyperFrames source。 |

## What This Shows / 这个示例说明什么

This is a real HyperFrames project that went beyond a planning board and produced a final composition.

这是一个真实 HyperFrames 项目：它不只是 planning board，而是已经进入最终 composition。

Included:

- `harness/direction_board.html` — 6-frame asset-first Director Workbench with EN / 中文 switching.
- `harness/01_intake.md` through `harness/04_render_plan.md` — full planning source, not summaries.
- `index.html` — final HyperFrames composition.
- `hyperframes.json` and `package.json` — project metadata and runnable commands.
- `assets/` — local media assets used by the final composition.
- `snapshots/` — timestamped visual review snapshots.
- `renders/html_hyperframes_5frame_preview.mp4` — lightweight preview derived from the final render.
- `renders/README.md` — render output notes. The large final MP4 is not committed because it is too large for a lightweight public package.

## Open Locally / 本地查看

- Open `harness/direction_board.html` to review the Director Workbench.
- Open `renders/html_hyperframes_5frame_preview.mp4` for an instant visual preview.
- Open `index.html` to inspect the final HyperFrames composition source. It is a render source, so HyperFrames drives `window.__timelines.main` during capture; the first frame is intentionally sparse.
- Run `npm run check` inside this folder if HyperFrames CLI access is available.

## Boundary / 边界

The Director Workbench is the review layer. It preserves the locked Chinese final-video titles as source content while allowing the UI to switch EN / 中文. The final `index.html` is the HyperFrames composition source.

Director Workbench 是审查层。它保留已锁定中文最终视频标题作为 source content，同时允许 UI 做 EN / 中文切换。最终 `index.html` 才是 HyperFrames composition source。
