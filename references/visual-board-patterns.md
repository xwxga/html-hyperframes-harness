# Visual Board Patterns / 视觉 Board 模式库

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Replaced engineering-gate Pattern A with director-first preview board pattern, language switch, side annotations, and per-layout critique. |
| 2026-05-18 00:00 | Sisyphus | Aligned required order with fixed public v1 stage sequence including pre-board convergence. |
| 2026-05-17 00:22 | Sisyphus | Added fixed-template, aspect-mode preview, and comment-target requirements for the public V1 board pattern. |
| 2026-05-16 21:24 | Codex | Updated canonical and example paths for the standalone GitHub package. |
| 2026-05-15 16:36 | Sisyphus | Added layout-only boundary and mainline-lock preservation rules for Pattern A revisions. |
| 2026-05-15 13:00 | Sisyphus | Added self-path and verification wording for board-pattern routing. |
| 2026-05-15 13:00 | Sisyphus | Added the mandatory asset-first visual board pattern library for HyperFrames Direction Harness. |

## Purpose / 目的

This file defines the director-facing structure of `direction_board.html`. The board is a visual storyboard review surface, not an implementation gate.

本文定义 `direction_board.html` 的导演侧结构。Board 是视觉分镜审查界面，不是实现交付门槛。

## Mandatory Pattern / 强制模式

### Pattern D — Director Preview Board / 导演预览板

Use this pattern for every public V1 `direction_board.html` unless the user explicitly asks for a different artifact.

除非用户明确要求其他 artifact，否则公开 V1 的 `direction_board.html` 使用本模式。

#### Goal / 目标

Let a director judge rhythm, shot relationship, layout, locked main copy, asset motion, and style consistency by looking at previews first.

让导演优先通过预览判断节奏、镜头关系、版面、已锁定主文字、素材运动和风格一致性。

#### Required Order / 必须顺序

1. **Director Cover / 导演封面** — title, language switch, one-line intent, overall rhythm.
2. **Rhythm Storyboard / 节奏分镜** — section + keyframe mixed sequence.
3. **Layout Previews / 版面预览** — every layout has a visual mock, primary content, and locked main copy.
4. **Keyframe Previews / 关键帧预览** — key visual states with shot/camera intent.
5. **Motion Before/After / 运动前后状态** — image/video asset motion shown as small before/after states.
6. **Style Critique / 风格检查** — per-layout design critique: unity, rhythm, visual relationship, text density, asset motion consistency.
7. **Annotation Layer / 侧边批注层** — weak markers and side annotations; comments are not board content.

#### Required DOM / 必须 DOM

```html
<body data-lang="en">
<button data-lang-switch="en"></button>
<button data-lang-switch="zh"></button>
<section data-stage="director-cover"></section>
<section data-stage="rhythm-storyboard"></section>
<section data-stage="layout-previews"></section>
<section data-stage="keyframe-previews"></section>
<section data-stage="motion-before-after"></section>
<section data-stage="style-critique"></section>
<aside data-stage="annotation-layer"></aside>
```

Every reviewable visual object should expose a stable semantic target:

每个可审查视觉对象都应暴露稳定语义目标：

```html
<article data-commentable="true" data-comment-target-type="layout" data-comment-target-id="layout-01"></article>
<section data-commentable="true" data-comment-target-type="keyframe" data-comment-target-id="page-01.hero"></section>
<div data-commentable="true" data-comment-target-type="motion" data-comment-target-id="asset-01.motion"></div>
```

#### Language Rule / 语言规则

The page must show one visible language at a time. English is the default for the public interface. Side annotations preserve the user's input language and are not auto-translated.

页面一次只显示一种可见语言。公开界面默认英文。侧边批注保留用户输入语言，不自动翻译。

#### Annotation Rule / 批注规则

Annotations are weak side markers like Google Docs or Notion comments. They should be visible enough for review, but visually subordinate to previews. The next AI reads exported annotation JSON to revise the board.

批注是类似 Google Docs / Notion 的弱化侧边 marker。它们要足够可见，但不能压过预览。下一个 AI 读取导出的批注 JSON 来修改 board。

#### Forbidden / 禁止

- No production handoff section in the director board.
- No compact handoff section in the director board.
- No draft check, implementation gate, engineering checklist, or risk-list block.
- No bilingual copy shown side by side in the same view.
- No text-only layout or keyframe entries.
- No comment section as board content.

- 导演版 board 中不要出现 production handoff section。
- 导演版 board 中不要出现 compact handoff section。
- 不要出现 draft check、implementation gate、工程 checklist 或风险清单板块。
- 同一视图中不要中英并排显示。
- 不要只用文字描述版面或关键帧。
- 不要把评论作为 board 内容 section。

## Relationship To Render Plan / 与 Render Plan 的关系

The director board does not change final HyperFrames composition rules. Engineering handoff details belong in `04_render_plan.md`, not in the director-facing board.

导演版 board 不改变最终 HyperFrames 成片生成规则。工程交接细节属于 `04_render_plan.md`，不属于导演侧 board。
