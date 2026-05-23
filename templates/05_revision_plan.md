# 05 Revision Plan / 修订计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-24 00:14 | Codex | Reworked the revision template for direct visual review notes. / 将修订模板改为直接视觉审查记录。 |

## Source / 来源

- Direction board / 方向审查 HTML: `direction_board.html`
- Source design direction / 来源设计方向: `02_design_direction.md`
- Source critical frame plan / 来源关键帧计划: `03_critical_frame_plan.md`
- Current status / 当前状态: draft / in-revision / synced / blocked

## Review Notes / 审查记录

Record accepted visual review notes from the user or agent. Keep frame style, locked copy, motion intent, and final source mapping explicit.

记录用户或 agent 接受的视觉审查意见。保持关键帧风格、锁定文案、motion intent 和最终 source 映射清晰。

| Time / 时间 | Source / 来源 | Target / 目标 | Scope / 范围 | Decision / 决策 | Status / 状态 |
|---|---|---|---|---|---|
|  | user note / agent review | frame-01 / asset-01 / system.visual-style | layout-only / visual-route / narrative-mainline / render-debug | accept / reject / needs-user-approval | open / resolved / pending |

## Revision Rules / 修订规则

- Layout-only notes may update board layout, crop, hierarchy, spacing, or visual density without unlocking mainline. / 仅版式意见可修改布局、裁切、层级、间距或视觉密度，不解锁主线。
- Visual-route notes may update `02_design_direction.md` before regenerating the board. / 视觉路线意见需要先更新 `02_design_direction.md`。
- Narrative-mainline notes require explicit user approval after mainline lock. / 主线意见在主线锁定后必须有用户明确批准。
- Render-debug notes may update implementation notes but must not rewrite story or design route. / 渲染修错意见可以更新实现说明，但不得改写故事或视觉路线。

## Next Revision Actions / 下一版动作

| Action / 动作 | Source note / 来源意见 | Target file / 目标文件 | Scope / 范围 | Done / 完成 |
|---|---|---|---|---|
|  |  | 02_design_direction.md / 03_critical_frame_plan.md / direction_board.html / 04_render_plan.md | layout-only / visual-route / narrative-mainline / render-debug | no |

## Sync Gate / 同步门槛

- [ ] Accepted review notes are synced back to Markdown. / 已接受审查意见已同步回 Markdown。
- [ ] Narrative-mainline changes have explicit user approval. / 主线修改已有用户明确批准。
- [ ] `direction_board.html` was regenerated after accepted changes. / 接受修改后已重新生成 `direction_board.html`。
- [ ] `04_render_plan.md` reflects final approved deltas. / `04_render_plan.md` 已反映最终批准变化。
