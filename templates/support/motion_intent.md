# Motion Intent / 动效意图

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-17 00:07 | Sisyphus | Added motion intent support manifest for director-level animation planning. |

## Purpose / 目的

Describe why motion exists before writing GSAP, CSS, WAAPI, or HyperFrames timeline code.

先描述动效为什么存在，再写 GSAP、CSS、WAAPI 或 HyperFrames 时间线代码。

| Motion ID / 动效 ID | From / 起点 | To / 终点 | Type / 类型 | Energy / 能量 | Duration hint / 时长参考 | Continuity anchor / 连续性锚点 | Risk / 风险 |
|---|---|---|---|---|---|---|---|
| motion-01 | page-01.hero | page-02.entry | reveal / push / zoom / parallax / wipe / hold / pan | low / medium / high |  |  |  |

## Rules / 规则

- Write director language, not implementation code. / 写导演语言，不写实现代码。
- Motion connects critical frames; it must not replace critical-frame planning. / 动效连接关键帧，不能替代关键帧规划。
- Multi-page videos need named transitions. / 多页视频需要命名转场。
