# 05 Revision Plan / 修订计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:07 | Sisyphus | Added post-review revision planning template for comment-driven Visual Review loops. |

## Source / 来源

- Direction board / 方向审查 HTML: `direction_board.html`
- Comment export / 评论导出: `review_comments.json`
- Source design direction / 来源设计方向: `02_design_direction.md`
- Source critical frame plan / 来源关键帧计划: `03_critical_frame_plan.md`
- Current status / 当前状态: draft / in-revision / synced / blocked

## Comment Import / 评论导入

The comment export is the machine-readable source for the next revision. The table below is the human-readable sync summary.

评论导出文件是下一版修订的机器可读来源。下表是给人审查的同步摘要。

| Comment ID / 评论 ID | Target / 目标 | Scope / 范围 | Comment / 评论 | Decision / 决策 | Status / 状态 |
|---|---|---|---|---|---|
| cmt-001 | page-01.hero | layout-only / visual-route / narrative-mainline / render-debug |  | accept / reject / needs-user-approval | open / resolved / pending |

## Revision Rules / 修订规则

- Layout-only comments may update board layout, crop, hierarchy, spacing, or visual density without unlocking mainline. / 仅版式评论可修改布局、裁切、层级、间距或视觉密度，不解锁主线。
- Visual-route comments may update `02_design_direction.md` before regenerating the board. / 视觉路线评论需要先更新 `02_design_direction.md`。
- Narrative-mainline comments require explicit user approval after mainline lock. / 主线评论在主线锁定后必须有用户明确批准。
- Render-debug comments may update implementation notes but must not rewrite story or design route. / 渲染修错评论可以更新实现说明，但不得改写故事或视觉路线。

## Next Revision Actions / 下一版动作

| Action / 动作 | Source comment / 来源评论 | Target file / 目标文件 | Scope / 范围 | Done / 完成 |
|---|---|---|---|---|
|  |  | 02_design_direction.md / 03_critical_frame_plan.md / direction_board.html / 04_render_plan.md | layout-only / visual-route / narrative-mainline / render-debug | no |

## Sync Gate / 同步门槛

- [ ] All comments are resolved, rejected, or pending with reason. / 所有评论都已解决、拒绝或有 pending 理由。
- [ ] Accepted comments are synced back to Markdown. / 已接受评论已同步回 Markdown。
- [ ] Narrative-mainline changes have explicit user approval. / 主线修改已有用户明确批准。
- [ ] `direction_board.html` was regenerated or annotated after accepted changes. / 接受修改后已重新生成或标注 `direction_board.html`。
- [ ] `04_render_plan.md` reflects final approved deltas. / `04_render_plan.md` 已反映最终批准变化。
