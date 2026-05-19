# Direction Board Contract / 方向审查 HTML 契约

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Reframed the contract around director-first previews, weak side annotations, language switch, and design critique. |
| 2026-05-17 00:42 | Sisyphus | Aligned Pattern A summary with fixed public v1 order including convergence and aspect preview. |
| 2026-05-17 00:22 | Sisyphus | Added public v1 fixed-template, semantic comment target, and aspect-mode review requirements. |
| 2026-05-15 16:36 | Sisyphus | Added mainline-lock and drift-stop contract for post-review board edits. |
| 2026-05-15 13:00 | Sisyphus | Linked the contract to the visual board pattern library and clarified Pattern A as the default composition pattern. |
| 2026-05-15 11:12 | Sisyphus | Reframed the contract around asset-first visual Direction Board only, with mandatory pre-board convergence and compact production handoff. |
| 2026-05-14 22:37 | Sisyphus | Added DOM contract, review evidence, ready/blocked states, and browser self-review requirements. |
| 2026-05-14 17:58 | Sisyphus | Added Design Router, asset-first, manual-scroll, and HyperFrames visual-principle requirements. |
| 2026-05-13 22:23 | Sisyphus | Created the direction board contract for the HyperFrames Direction Harness draft skill. |

## Purpose / 目的

`direction_board.html` is a director-facing visual preview board before final HyperFrames `index.html` generation.

`direction_board.html` 是最终 HyperFrames `index.html` 生成前给导演看的视觉预览板。

Its job is to let the director judge rhythm, camera/shot relationship, layout, locked main copy, asset motion, and style consistency. It is not an implementation gate.

它的任务是让导演判断节奏、镜头/画面关系、版面、已锁定主文字、素材运动和风格一致性。它不是 implementation gate。

## Locked Product Decisions / 已锁定产品决策

- Unit of review: mixed section + keyframe. / 审查单位：section + keyframe 混合。
- Default style: existing HyperFrames demo style, interpreted as director preview style. / 默认风格：现有 HyperFrames demo 风格，并转译为导演预览风格。
- Comments: weak side annotations; preserve user input language; readable by the next AI. / 评论：弱化侧边批注；保留用户输入语言；下一个 AI 可读。
- Visible language: global English/Chinese switch; English default; never show both languages side by side. / 可见语言：全局中英文切换；默认英文；不要中英并排。
- Preview fidelity: visual mock with main content, locked main copy, and asset placeholders. / 预览保真度：带主要内容、已锁定主文字、素材占位的视觉 mock。
- Motion intent: before/after state cards for image/video assets. / 动效意图：图片/视频素材用 before/after 状态卡表达。
- Style check: per-layout design critique. / 风格检查：每个版面的 design critique。
- Scope: redesign Direction Board only; do not change final render/composition rules. / 范围：只重做 Direction Board；不改最终成片生成规则。

## Required Stages / 必需 Stage

```html
<section data-stage="director-cover"></section>
<section data-stage="rhythm-storyboard"></section>
<section data-stage="layout-previews"></section>
<section data-stage="keyframe-previews"></section>
<section data-stage="motion-before-after"></section>
<section data-stage="style-critique"></section>
<aside data-stage="annotation-layer"></aside>
```

## Preview Contract / 预览契约

Each layout preview must show:

- visual mock / 视觉 mock
- primary content / 主要内容
- locked main copy / 已锁定主文字
- asset role / 素材角色
- motion intent / 动效意图

Each keyframe preview must show:

- frame role / 帧角色
- shot relationship / 镜头关系
- text placement / 文字位置
- asset state / 素材状态

## Annotation Contract / 批注契约

Every reviewable object needs a semantic target:

```html
<article data-commentable="true" data-comment-target-type="layout" data-comment-target-id="layout-01"></article>
<section data-commentable="true" data-comment-target-type="keyframe" data-comment-target-id="page-01.hero"></section>
<div data-commentable="true" data-comment-target-type="motion" data-comment-target-id="asset-01.motion"></div>
```

Annotations are authored by the user, not by AI. The board should export the user's original annotation text so the next AI can revise the board accordingly.

批注由用户书写，不由 AI 代写。Board 应导出用户原文批注，供下一个 AI 据此修订 board。

## Forbidden Director-View Content / 导演视图禁止内容

- Draft check
- Production handoff
- Compact handoff
- Implementation gate
- Engineering checklist
- Risk-list block
- Large sync table
- Final render checklist

These may exist in internal Markdown such as `04_render_plan.md`, but they must not appear in the director-facing board.

这些内容可以存在于 `04_render_plan.md` 等内部 Markdown 中，但不得出现在导演侧 board。
