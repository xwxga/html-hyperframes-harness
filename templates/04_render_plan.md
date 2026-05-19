# 04 Render Plan / 渲染计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Updated final generation gate for director-first board review and removed compact production handoff requirement. |
| 2026-05-17 00:18 | Sisyphus | Added comment export, semantic target, and aspect-mode checks for final HyperFrames handoff. |
| 2026-05-15 16:36 | Sisyphus | Added final drift check and what-changed handoff fields so render generation preserves locked narrative direction. |
| 2026-05-15 11:12 | Sisyphus | Added pre-board convergence and compact production handoff checks. |
| 2026-05-14 22:37 | Sisyphus | Added strict ready gate, review evidence, and final HyperFrames handoff constraints. |
| 2026-05-14 17:58 | Sisyphus | Renumbered the render handoff and added Design Router and HyperFrames visual-principle fields. |
| 2026-05-13 22:23 | Sisyphus | Created the MVP render-plan handoff template for HyperFrames Direction Harness runs. |

## Gate Status / 门槛状态

This file should only be created after `direction_board.html` has been reviewed or explicitly waived.

本文件只应在 `direction_board.html` 已审查，或用户明确豁免后创建。

- Direction board reviewed / 方向审查 HTML 已审: yes / no
- Review method / 审查方式: user-approved / agent-reviewed / waived
- Review evidence / 审查证据:
- Pre-board convergence recorded / Board 前收敛已记录: yes / no / waived
- HTML changes synced to Markdown / HTML 修改已同步回 Markdown: yes / no / pending
- Comment JSON synced to `05_revision_plan.md` / 评论 JSON 已同步到 `05_revision_plan.md`: yes / no / not-used
- Scope classification recorded / 修改范围分类已记录: yes / no / not-needed
- Mainline lock respected / 主线锁定已遵守: yes / no / not-locked
- Waiver if any / 如有豁免，说明:
- Source design direction / 来源设计方向: `02_design_direction.md`
- Source critical frame plan / 来源关键帧计划: `03_critical_frame_plan.md`
- Render plan status / 渲染计划状态: ready / blocked

## Final Structure / 最终结构

- Final page count / 最终页面数:
- Target duration / 目标时长:
- Aspect ratio / 画幅:
- Aspect modes reviewed / 已审查画幅模式: horizontal / vertical / both
- Composition size / Composition 尺寸:
- Target platform / 目标平台:

## Design Handoff / 设计交接

- Primary Design Router style / 主 Design Router 风格:
- Accent or reference style / 辅助或参考风格:
- Local design source paths / 本地设计来源路径:
- Visual principles to preserve / 必须保留的视觉原则:
- Anti-patterns to avoid / 必须避免的反模式:

## What Changed Since Review / Review 后具体变化

Use this section to prevent layout feedback from silently rewriting narrative direction.

用本节防止版式反馈悄悄改写叙事方向。

| Change / 修改 | Scope / 范围 | Source note / 来源说明 | Mainline impact / 对主线影响 | Markdown sync / Markdown 同步 |
|---|---|---|---|---|
|  | layout-only / visual-route / narrative-mainline / render-debug |  | none / approved / blocked | synced / pending / waived |

Locked items that final HyperFrames generation must preserve:

最终 HyperFrames 生成必须保留的锁定项：

- Locked sections / 锁定章节:
- Locked narrative spine / 锁定叙事主轴:
- Locked opening hook / 锁定开头 hook:
- Locked ending landing point / 锁定结尾落点:
- Locked source claims / 锁定来源论点:
- Allowed visual-only deltas / 允许的仅视觉差异:

## Page Handoff / 页面交接

| Page / 页 | Duration / 时长 | Main text / 主文案 | Hero frame / 主视觉帧 | Asset / 素材 | Transition / 转场 |
|---|---:|---|---|---|---|
| 01 |  |  |  |  |  |

## Semantic Target Handoff / 语义目标交接

Carry these stable IDs into final HTML where practical so future edits can map back to the reviewed board.

尽量把这些稳定 ID 带入最终 HTML，方便未来修改回溯到已审查 board。

| Target ID / 目标 ID | Final HTML metadata / 最终 HTML 元数据 | Source board target / 来源 board 目标 |
|---|---|---|
| page-01.entry | `data-page-id="page-01" data-critical-frame="entry"` | `data-comment-target-id="page-01.entry"` |
| page-01.hero | `data-page-id="page-01" data-critical-frame="hero"` | `data-comment-target-id="page-01.hero"` |
| page-01.transition | `data-page-id="page-01" data-critical-frame="transition"` | `data-comment-target-id="page-01.transition"` |

## Text Hierarchy / 文案层级

- Display title style / 大标题样式:
- Body style / 正文样式:
- Caption style / 字幕样式:
- Label / callout style / 标签与标注样式:

## Asset Placement / 素材位置

| Asset / 素材 | Used on page / 使用页面 | Placement / 位置 | Treatment / 处理方式 | Risk / 风险 |
|---|---|---|---|---|
|  |  |  |  |  |

## Motion Intent / 动效意图

Write direction-level motion notes. Do not write GSAP code here.

这里写导演级动效说明，不写 GSAP 代码。

- Global motion rule / 全局动效规则:
- Text motion / 文案动效:
- Asset motion / 素材动效:
- Page transition pattern / 页面转场模式:
- Motion constraints / 动效约束:

## Director Metadata Required In Final HTML / 最终 HTML 需要保留的编导元数据

The final HyperFrames HTML should preserve planning intent as metadata so future agents can edit safely.

最终 HyperFrames HTML 应保留计划意图作为元数据，方便后续 Agent 安全修改。

Required metadata examples:

```html
data-page-id="page-01"
data-scene-context="..."
data-critical-frame="hero"
data-director-intent="..."
data-continuity-anchor="..."
```

## HyperFrames Generation Notes / HyperFrames 生成说明

- Use the render plan as the only handoff source. / 只以本 render plan 作为交接来源。
- Do not invent new pages unless user approves. / 未经用户同意，不新增页面。
- Do not invent new assets, styles, or transitions unless the harness Markdown is updated first. / 除非先更新 harness Markdown，不要发明新素材、新风格或新转场。
- Preserve critical-frame intent in layout and timing. / 在布局和时间线中保留关键帧意图。
- Animation connects critical frames; it must not replace critical-frame planning. / 动画用于连接关键帧，不能替代关键帧计划。
- Build hero layouts first, then animate between validated states. / 先搭建 hero layout，再在已确认状态之间做动画。
- Run `npx hyperframes lint`, `npx hyperframes validate`, and `npx hyperframes inspect` when practical before final render. / 最终渲染前尽量运行 `npx hyperframes lint`、`npx hyperframes validate` 和 `npx hyperframes inspect`。

## Final Generation Gate / 最终生成门槛

- [ ] Sections/assets/mainline were confirmed before `direction_board.html` generation. / 章节、素材、主线已在生成 `direction_board.html` 前确认。
- [ ] `direction_board.html` was director-first and preview-first. / `direction_board.html` 是导演优先、预览优先。
- [ ] Director board includes rhythm storyboard, layout previews, keyframe previews, motion before/after, style critique, and side annotations. / 导演 board 包含节奏分镜、版面预览、关键帧预览、运动前后状态、风格检查和侧边批注。
- [ ] `direction_board.html` reviewed or waived with reason. / `direction_board.html` 已审查或有理由豁免。
- [ ] Review changes synced or marked pending. / 审查修改已同步或标记 pending。
- [ ] Comment export is empty, synced, or waived. / 评论导出为空、已同步或已豁免。
- [ ] Semantic target IDs are stable across reviewed aspect modes. / 语义目标 ID 在已审查画幅中保持稳定。
- [ ] Post-review scope classification is recorded or not needed. / Review 后修改范围已记录，或无需记录。
- [ ] Mainline lock is respected; layout-only changes did not alter narrative truth. / 已遵守主线锁定；仅版式修改没有改变叙事事实。
- [ ] Every final page maps to a planned Page. / 每个最终页面都对应已规划 Page。
- [ ] Every transition is named in this render plan. / 每个转场都已在本 render plan 命名。
- [ ] Design route is preserved. / 设计路线已保留。
- [ ] Open risks are accepted or resolved. / 未决风险已接受或解决。

## Open Risks / 未决风险

- [ ] 
