# Comment Layer Contract / 评论层契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Updated comment contract for weak side annotations, director scopes, and source language preservation. |
| 2026-05-17 00:30 | Sisyphus | Added optional page, asset, and aspect metadata so shared semantic IDs remain reviewable across modes. |
| 2026-05-17 00:08 | Sisyphus | Added static HTML comment-layer contract for component-targeted Visual Review revisions. |

## Purpose / 目的

The v1 comment layer lets reviewers select semantic targets inside `direction_board.html`, write side annotations in any language, export JSON, and sync accepted changes back to Markdown.

v1 评论层让审查者在 `direction_board.html` 中选择语义目标、用任意语言写侧边批注、导出 JSON，并把接受的修改同步回 Markdown。

## Boundary / 边界

- Static local HTML only. / 仅静态本地 HTML。
- No backend, auth, database, websocket, or network dependency. / 不需要后端、登录、数据库、WebSocket 或网络依赖。
- Comments revise harness artifacts; they do not directly mutate final HyperFrames `index.html`. / 评论修订 Harness artifact，不直接修改最终 HyperFrames `index.html`。

## Required Target Attributes / 必须目标属性

```html
<article data-commentable="true" data-comment-target-type="layout" data-comment-target-id="layout-01" data-page-id="page-01"></article>
```

## Comment JSON / 评论 JSON

```json
{
  "comment_id": "cmt-001",
  "target_type": "layout",
  "target_id": "layout-01",
  "selector": "[data-comment-target-id='layout-01'][data-comment-target-type='layout']",
  "page_id": "page-01",
  "asset_id": "asset-01",
  "aspect_mode": "",
  "scope": "layout",
  "comment": "Asset is too small; make it the visual focus.",
  "priority": "high",
  "status": "open",
  "source_language": "en"
}
```

## Scope Values / 范围值

- `layout`: spacing, crop, hierarchy, asset size, density. / 间距、裁切、层级、素材大小、密度。
- `copy`: locked main copy or text placement. / 已锁定主文字或文字位置。
- `motion`: asset motion, transition feel, before/after states. / 素材运动、转场感、前后状态。
- `style`: unity, rhythm, visual relationship, text density, consistency. / 统一性、节奏、画面关系、文字密度、一致性。
- `mainline`: section order, hook, claims, ending, page meaning. / 章节顺序、hook、论点、结尾、页面含义。

## Edge Cases / 边界情况

- Missing target: keep the comment in JSON and mark `status: pending-target`. / 缺失目标：保留评论并标记 `pending-target`。
- Unexpected duplicate target ID outside declared aspect-mode or frame variants: block export until IDs are disambiguated. / 在声明的画幅或关键帧变体之外出现意外重复目标 ID：阻止导出直到消歧。
- Stale/deleted target: keep comment and require human decision. / 过期或删除目标：保留评论并要求人工决策。
- Conflicting comments: keep both and resolve in `05_revision_plan.md`. / 冲突评论：两条都保留，并在 `05_revision_plan.md` 决策。
- Empty comments: do not export. / 空评论不导出。

## Markdown Sync / Markdown 同步

Every accepted comment must become an entry in `templates/05_revision_plan.md` or the run-specific `harness/05_revision_plan.md`.

每条接受的评论都必须进入 `templates/05_revision_plan.md` 或本次运行的 `harness/05_revision_plan.md`。
