# Renders

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-23 17:45 | Codex | Added render notes and a lightweight preview without committing the large MP4 artifact. / 添加渲染说明和轻量预览，但不提交大体积 MP4。 |

The source project produced:

- `html_hyperframes_5frame_draft.mp4`
- `html_hyperframes_5frame_final.mp4`

The final MP4 is intentionally not committed to this public package because it is about 143 MB. This folder includes `html_hyperframes_5frame_preview.mp4`, a short low-resolution preview derived from the final render for lightweight review. Use the preview or `../snapshots/` for immediate visual inspection; `../index.html` is the HyperFrames render source.

Regenerate the full render from this folder with:

```bash
npm run render
```

Snapshots are committed in `../snapshots/` for lightweight visual inspection.
