# Asset Manifest Contract / 素材清单契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:08 | Sisyphus | Added asset manifest contract for source assets and AI media candidates. |

## Required Fields / 必填字段

- `asset_id`
- `status`: must-use / optional / reference-only / banned / generated-candidate
- `type`: image / video / audio / text / link
- `path_or_url`
- `role`
- `page_candidates`
- `crop_or_framing`
- `ai_derivative_allowed`
- `risk`

## Rules / 规则

- The manifest records assets; it does not download, transform, or generate them. / Manifest 记录素材，不下载、不转换、不生成素材。
- Banned assets remain listed to prevent accidental reuse. / 禁止素材仍列出，防止误用。
- Generated candidates must point back to an AI media brief. / 生成候选必须回指 AI media brief。
