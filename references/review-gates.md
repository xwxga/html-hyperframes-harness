# Review Gates / 审查门槛

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Updated gates for director stages, language switch, and side annotation review. |
| 2026-05-17 00:08 | Sisyphus | Added objective verification gates for public v1 Visual Review harness. |

## Required Checks / 必须检查

- Required files exist. / 必需文件存在。
- README, SKILL, templates, references, board, and examples agree on the 01–04 core flow. / README、SKILL、templates、references、board、examples 对 01–04 主流程保持一致。
- `board/direction_board.template.html` contains required director `data-stage` sections. / 模板包含必需导演版 `data-stage`。
- Global language switch exists and defaults to English. / 存在全局语言切换，且默认英文。
- Comment targets use semantic IDs. / 评论目标使用语义 ID。
- Comment JSON example and Markdown sync table exist. / 存在评论 JSON 示例和 Markdown 同步表。
- Side annotations can be added and exported locally. / 侧边批注可本地添加并导出。
- New public docs are bilingual. / 新增公开文档为中英双语。

## Forbidden v1 Scope / v1 禁止范围

- No renderer implementation. / 不实现 renderer。
- No backend comment service. / 不实现后端评论服务。
- No provider SDK as core dependency. / 不把供应商 SDK 作为核心依赖。
- No required AI generation execution. / 不要求 AI 生成执行。
- No automatic replacement of human review. / 不自动替代人工审查。
- No private local paths or secrets. / 不引入私有本地路径或密钥。
