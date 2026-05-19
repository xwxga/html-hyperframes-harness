# AI Media Brief / AI 媒体 Brief

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:07 | Sisyphus | Added provider-neutral AI media planning brief for Image2Image, Image2GPT, and Image-to-Video candidates. |

## Purpose / 目的

Plan AI-assisted media candidates without requiring any provider SDK, API key, or generation step in v1.

规划 AI 辅助媒体候选，但 v1 不要求任何供应商 SDK、API key 或生成步骤。

| Request ID / 请求 ID | Task type / 任务类型 | Source assets / 源素材 | Purpose / 目的 | Prompt / 提示词 | Must preserve / 必须保留 | Target aspect / 目标画幅 | Target duration / 目标时长 | Review slot / 审查槽位 | Status / 状态 |
|---|---|---|---|---|---|---|---|---|---|
| ai-001 | image2image / image2gpt / image-to-video | asset-01 |  |  |  | 16:9 / 9:16 |  | page-01.hero | planned / generated / accepted / rejected |

## Rules / 规则

- Provider is optional and external to v1. / 供应商是可选项，不属于 v1 核心。
- Generated candidates must return to `direction_board.html` for review. / 生成候选必须回到 `direction_board.html` 审查。
- Accepted AI media must be synced to `asset_manifest.md`. / 已接受 AI 媒体必须同步到 `asset_manifest.md`。
