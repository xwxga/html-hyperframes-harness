# Asset Manifest / 素材清单

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:07 | Sisyphus | Added provider-neutral asset manifest for Visual Review and AI media planning. |

## Purpose / 目的

List real, reference, banned, and generated-candidate assets without turning the harness into an asset-processing pipeline.

列出真实素材、参考素材、禁止素材和 AI 候选素材，但不把 Harness 变成素材处理流水线。

| Asset ID / 素材 ID | Status / 状态 | Type / 类型 | Path or URL / 路径或 URL | Role / 角色 | Page candidates / 候选页面 | Crop/framing / 裁切构图 | AI derivative allowed / 允许 AI 派生 | Risk / 风险 |
|---|---|---|---|---|---|---|---|---|
| asset-01 | must-use / optional / reference-only / banned / generated-candidate | image / video / audio / text / link |  | hero / proof / texture / background / transition-anchor | page-01 |  | yes / no |  |

## Rules / 规则

- Do not invent source assets. / 不发明源素材。
- Generated candidates must point back to source assets or AI media briefs. / 生成候选必须回指源素材或 AI media brief。
- Banned assets must stay visible in the manifest so later agents do not reuse them. / 禁止素材仍要留在 manifest 中，防止后续 Agent 误用。
