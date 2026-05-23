# Aspect Ratio Modes / 画幅模式

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-24 00:14 | Codex | Removed target-language from aspect mode rules. / 从画幅规则中移除目标表述。 |
| 2026-05-17 00:08 | Sisyphus | Added horizontal and vertical Visual Review mode contract. |

## Purpose / 目的

Visual Review may show horizontal and vertical layouts, but both modes must preserve the same content meaning, page IDs, and locked frame style.

Visual Review 可以展示横版和竖版布局，但两种模式必须保留相同内容含义、page ID 和已锁定关键帧风格。

## Modes / 模式

| Mode / 模式 | Size / 尺寸 | Use / 用途 | Risk / 风险 |
|---|---|---|---|
| horizontal / 横版 | 1920x1080 | YouTube, website hero, product demo | wide negative space, small mobile text |
| vertical / 竖版 | 1080x1920 | TikTok, Reels, Shorts, Stories | crop loss, stacked text density |

## Rules / 规则

- Same page IDs across modes. / 两种模式共享相同 page ID。
- Same locked frame style across modes. / 两种模式共享相同已锁定关键帧风格。
- Aspect changes may alter crop, scale, and hierarchy but not mainline. / 画幅变化可改变裁切、缩放、层级，但不得改变主线。
- Document crop/safe-area risk before final render plan. / 最终 render plan 前记录裁切和安全区风险。

## Required Board Markers / Board 必须标记

```html
<section data-stage="aspect-mode-preview" data-aspect-modes="horizontal,vertical"></section>
<article data-page-id="page-01" data-aspect-mode="horizontal"></article>
<article data-page-id="page-01" data-aspect-mode="vertical"></article>
```
