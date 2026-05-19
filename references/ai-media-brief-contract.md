# AI Media Brief Contract / AI 媒体 Brief 契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:08 | Sisyphus | Added provider-neutral AI media brief contract for v1 planning slots. |

## Purpose / 目的

AI media briefs plan possible Image2Image, Image2GPT, and Image-to-Video work without making those providers part of v1 core.

AI 媒体 brief 规划可能的 Image2Image、Image2GPT、Image-to-Video 工作，但不把供应商执行纳入 v1 核心。

## Required Fields / 必填字段

- `request_id`
- `task_type`: image2image / image2gpt / image-to-video
- `source_assets`
- `purpose`
- `prompt`
- `must_preserve`
- `target_aspect_ratio`
- `target_duration`
- `review_slot`
- `status`: planned / generated / accepted / rejected

## Rules / 规则

- Provider execution is optional and external. / 供应商执行是可选外部步骤。
- Generated candidates must return to the Direction Board for review. / 生成候选必须回到 Direction Board 审查。
- Accepted outputs must sync to the asset manifest before render handoff. / 接受的输出必须先同步到 asset manifest，再进入渲染交接。
