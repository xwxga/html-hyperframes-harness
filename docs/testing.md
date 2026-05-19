# Testing / 测试

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Updated manual checks for director stages, language switch, and side annotations. |
| 2026-05-18 00:00 | Sisyphus | Clarified root GitHub Pages landing page is allowed and strengthened release-gate wording. |
| 2026-05-18 00:00 | Sisyphus | Added static validation and manual demo testing instructions. |

## Static Validation / 静态验证

Run:

```bash
node scripts/validate-static.js
```

运行：

```bash
node scripts/validate-static.js
```

The validator checks required files, director `data-stage` markers, global language switch, semantic comment targets, comment JSON shape, large files, suspicious secret patterns, and accidental `.sisyphus/` tracking.

验证脚本会检查必需文件、导演版 `data-stage` 标记、全局语言切换、语义评论目标、评论 JSON 结构、大文件、可疑密钥模式，以及是否意外跟踪 `.sisyphus/`。

## Manual Review / 人工审查

Open these files locally:

- `demo/index.html`
- `board/direction_board.template.html`
- `examples/asset-first-board/direction_board.skeleton.html`
- `examples/luqee-workflow-film-v2-harness/direction_board.html`

本地打开以上文件。

Check that director stages appear in order, only one language is visible at a time, selectable targets are weakly marked, comments can be added and exported from the side rail, and no production handoff/checklist section appears in the board.

确认导演阶段按顺序出现、页面一次只显示一种语言、可选择目标为弱标记、评论可从侧边栏添加并导出，且 board 中没有 production handoff/checklist section。

## Release Gate / 发布门槛

- Static validator passes. / 静态验证通过。
- Root `index.html`, if present, must be only a GitHub Pages landing/redirect page and not a final HyperFrames composition. / 如存在根目录 `index.html`，它只能是 GitHub Pages 入口/跳转页，不得是最终 HyperFrames composition。
- `.sisyphus/` stays ignored and uncommitted. / `.sisyphus/` 保持忽略且不提交。
- Public docs remain bilingual where user-facing. / 面向用户的公开文档保持中英双语。
