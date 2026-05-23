# Motion Intent Contract / 动效意图契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:08 | Sisyphus | Added motion intent contract for director-level animation planning. |

## Purpose / 目的

Motion intent describes what motion should communicate before final implementation writes GSAP, CSS, WAAPI, or other timeline code.

动效意图描述动效要表达什么，先于 GSAP、CSS、WAAPI 或其他时间线代码实现。

## Required Fields / 必填字段

- `motion_id`
- `from_target_id`
- `to_target_id`
- `motion_type`
- `energy`
- `duration_hint`
- `continuity_anchor`
- `risk`

## Non-goals / 不做什么

- Do not write GSAP code here. / 不在这里写 GSAP 代码。
- Do not use motion to replace missing critical frames. / 不用动效替代缺失关键帧。
- Do not introduce new pages during motion planning. / 动效规划中不新增页面。
