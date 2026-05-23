# Testing / 测试

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-24 03:25 | Codex | Added strict public-package release checks for retired docs, old comment-system tokens, and repository cleanliness. / 增加严格公开包发布检查，覆盖退役文档、旧评论系统标记和仓库整洁度。 |
| 2026-05-23 23:31 | Codex | Added golden-example checks for 6 frames, locked copy, asset-first content, and retired example references. / 增加 golden example 的 6 帧、锁定文案、素材优先内容和废弃示例引用检查。 |
| 2026-05-18 16:22 | Sisyphus | Updated manual checks, static validation, demo testing, release gates, GitHub Pages note, director stages, and language switch. |

## Static Validation / 静态验证

Run:

```bash
node scripts/validate-static.js
```

运行：

```bash
node scripts/validate-static.js
```

The validator checks required files, director `data-stage` markers, global language switch, explicit HyperFrames default frame style, golden-example frame count, locked copy, asset targets, retired example references, retired public-draft files, old comment-system tokens, large files, suspicious secret patterns, and accidental `.sisyphus/` tracking.

验证脚本会检查必需文件、导演版 `data-stage` 标记、全局语言切换、显式 HyperFrames 默认关键帧风格、golden example frame 数量、锁定文案、素材目标、废弃示例引用、退役公开草稿、旧评论系统标记、大文件、可疑密钥模式，以及是否意外跟踪 `.sisyphus/`。

## Manual Review / 人工审查

Open these files locally:

- `demo/index.html`
- `board/direction_board.template.html`
- `examples/html-hyperframes-video-project/harness/direction_board.html`
- `examples/html-hyperframes-video-project/index.html`

本地打开以上文件。

Check that director stages appear in order, only one language is visible at a time, the Overview starts with a real 6-frame contact sheet, all 5 must-use assets are visible before the review summary, Frames view exposes 6 real frames, the Inspector explicitly declares the HyperFrames default critical-frame style, and no production handoff/checklist section appears in the board.

确认导演阶段按顺序出现、页面一次只显示一种语言、Overview 以真实 6 帧 contact sheet 开始、5 个必用素材都在审查摘要前可见、Frames 视图暴露 6 个真实 frame、Inspector 显式声明 HyperFrames 默认关键帧风格，且 board 中没有 production handoff/checklist section。

## Release Gate / 发布门槛

- Static validator passes. / 静态验证通过。
- Root `index.html`, if present, must be only a GitHub Pages landing/redirect page and not a final HyperFrames composition. / 如存在根目录 `index.html`，它只能是 GitHub Pages 入口/跳转页，不得是最终 HyperFrames composition。
- The only public example is `examples/html-hyperframes-video-project/`. / 唯一公开示例是 `examples/html-hyperframes-video-project/`。
- Historical draft docs and old comment-system files are absent. / 历史草稿文档和旧评论系统文件不存在。
- `.sisyphus/` stays ignored and uncommitted. / `.sisyphus/` 保持忽略且不提交。
- Public docs remain bilingual where user-facing. / 面向用户的公开文档保持中英双语。
