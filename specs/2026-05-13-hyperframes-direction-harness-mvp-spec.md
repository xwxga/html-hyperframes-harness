# HyperFrames Direction Harness MVP Spec

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-13 22:09 | Sisyphus | Created the MVP spec for a small HyperFrames pre-generation direction harness centered on pages, critical frames, continuity, and a review HTML artifact. |

## 目标 / Purpose

HyperFrames Direction Harness 是一个面向 Agent 的前置收敛流程，用于在生成最终 HyperFrames `index.html` 之前，先确认短视频的视觉页、关键帧、简单动画说明和帧间连续性。

HyperFrames Direction Harness is an agent-facing pre-generation workflow. Before the final HyperFrames `index.html` is generated, it locks the video pages, critical frames, simple animation notes, and continuity between visual states.

核心目标不是多做一个软件系统，而是填补用户想法与 AI 直接生成 HyperFrames HTML 之间的鸿沟。

The goal is not to build a traditional software system. The goal is to bridge the gap between the user's creative intent and the instructions an AI agent receives before producing HyperFrames HTML.

## 范围 / Scope

MVP 版本保持小而通用，但默认服务短视频生产。

The MVP stays small and general, but assumes short-form video as the default output type.

MVP includes:

- Markdown source-of-truth files for intake, critical frame planning, and render handoff.
- A visible `direction_board.html` review artifact before final HyperFrames generation.
- One default page/critical-frame template.
- A manual or agent-mediated sync rule from edited HTML back to Markdown.

MVP does not include:

- Web app, database, backend service, or account system.
- Complex template router.
- Automated asset library management.
- Full bidirectional WYSIWYG editor.
- Automatic final rendering.

## 核心术语 / Core Terms

### Scene / 场景

Scene 是叙事单位，回答“这一段在讲什么”。

A scene is a narrative unit. It answers: what is this segment saying?

Example:

- Scene: Explain why Markdown is no longer enough for agent output.

Scene is optional in the MVP. It can provide narrative context, but the harness should not depend on complex scene modeling.

### Page / 页面

Page 是视觉页面单位，回答“这一屏怎么设计”。

A page is a visual layout unit. It answers: what should this screen/page look like?

For the MVP, Page is the primary planning unit.

### Frame / 帧

Frame 在本 Harness 中不是视频编码里的每一帧，不是 30fps 中的 frame。

In this harness, a frame is not an encoded video frame at 24/30/60 fps.

Frame means a meaningful visual state inside a page.

Frame 指某个 Page 在某个关键时间点的视觉状态：画面上有什么、文案是什么、素材在哪里、布局如何、它与前后状态如何连接。

### Critical Frame / 关键帧

Critical Frame 是在生成最终 HyperFrames HTML 之前必须显式确认的关键视觉状态。

A critical frame is a required visual checkpoint that must be reviewed before final HyperFrames composition begins.

By default, each Page uses three critical frames:

1. Entry Frame / 进入帧 — how the page enters from the previous page.
2. Hero Frame / 主视觉帧 — the most complete and important visual state of the page.
3. Transition Frame / 转场帧 — how the page prepares continuity into the next page.

### Continuity Contract / 连续性约束

Continuity Contract defines how frames and pages connect without feeling like disconnected slides.

连续性约束用于说明几个关键帧、几个页面之间如何自然衔接，避免视频变成拼接 PPT。

It must specify concrete anchors, such as:

- carried visual element
- shared color
- recurring shape
- layout motif
- motion bridge
- text or icon that survives into the next page

It should not use vague phrases like “make it smooth” without naming what actually continues.

### Sync / 同步

Markdown is the source of truth. `direction_board.html` is a review artifact.

Markdown 是 source of truth。`direction_board.html` 是审查 artifact。

If the HTML is edited or reviewed with changes, those changes remain pending until they are synced back into Markdown.

如果 HTML 里发生修改或审查意见，这些修改在同步回 Markdown 之前只是 pending change，不是正式 source of truth。

The MVP sync rule is:

```text
Markdown -> generate direction_board.html
HTML review/edit -> extract changes
sync changes back into Markdown
regenerate direction_board.html
```

## MVP Artifacts / MVP 产物

Each harness run should create a small local folder, for example:

```text
harness/
  01_intake.md
  02_critical_frame_plan.md
  direction_board.html
  03_render_plan.md
```

### `01_intake.md`

Captures raw project intent.

记录项目初始意图。

Fields:

- User idea / 用户原始想法
- Target platform / 目标平台
- Output type / 产物类型
- Aspect ratio and duration / 画幅与时长
- Existing assets / 已有素材
- Style preferences / 风格偏好
- Hard constraints / 硬约束
- Things to avoid / 禁止项

### `02_critical_frame_plan.md`

The main source-of-truth planning file.

核心 source-of-truth 文件。

It defines each Page, its content, critical frames, simple animation notes, continuity contract, and risks.

### `direction_board.html`

The visible pre-HyperFrames review artifact.

最终 HyperFrames `index.html` 之前必须先生成的方向审查 HTML。

It is not the final video composition. It is a review board that shows whether the agent understands the visual plan.

It must display:

- Page list / 页面列表
- Critical frames per page / 每页关键帧
- Visible content per frame / 每帧可见内容
- Simple animation notes / 简单动画说明
- Continuity contract / 连续性约束
- Risks and open questions / 风险与未决问题
- Ready-for-HyperFrames gate / 是否允许进入 HyperFrames 生成

### `03_render_plan.md`

The locked handoff for HyperFrames generation.

给 HyperFrames agent 的锁定交接文件。

It should only be produced after `direction_board.html` has been reviewed or explicitly waived by the user.

It defines:

- Final page count / 最终页面数
- Approximate timing / 大致时间安排
- Text hierarchy / 文案层级
- Asset placement / 素材位置
- Motion intent / 动效意图
- Transition intent / 转场意图
- Required director metadata in final HTML / 最终 HTML 中需要保留的编导元数据

## Default Page Template / 默认页面模板

The MVP uses one default template. A router can be added later only after this default template proves useful.

MVP 只使用一个默认模板。之后如果确实需要，再增加 template router。

```md
## Page NN / 第 NN 页

### Scene Context / 场景上下文（可选）
- Narrative beat:
- What this page should make the viewer understand:

### Page Content / 页面内容
- Main text:
- Secondary text:
- Visual asset:
- Background / layout idea:
- Notes:

### Critical Frames / 关键帧

#### Frame A — Entry / 进入帧
- Timestamp or relative position:
- Visible elements:
- Text:
- Asset state:
- Layout:
- Carries from previous page:

#### Frame B — Hero / 主视觉帧
- Timestamp or relative position:
- Visible elements:
- Text:
- Asset state:
- Layout:
- Why this frame matters:

#### Frame C — Transition / 转场帧
- Timestamp or relative position:
- Visible elements:
- Text:
- Asset state:
- Layout:
- Handoff to next page:

### Simple Animation Notes / 简单动画说明
- Text motion:
- Asset motion:
- Camera / scale / emphasis:
- Transition:

### Continuity Contract / 连续性约束
- Previous visual anchor:
- Current visual anchor:
- Next visual anchor:
- Motion bridge:
- Shared color / shape / layout motif:
- What must not abruptly change:

### Risk / Open Questions / 风险与问题
- Risk:
- Open question:
```

## Direction Board HTML Contract / 方向审查 HTML 契约

`direction_board.html` should be a simple operating artifact, not a polished marketing page.

`direction_board.html` 应该是操作型 artifact，不是宣传页。

Recommended layout:

1. Top summary / 顶部摘要
   - project title
   - current status
   - ready/not-ready gate

2. Page timeline / 页面时间线
   - list of pages
   - each page shows Entry / Hero / Transition frames

3. Frame detail panel / 帧详情面板
   - visible content
   - layout notes
   - asset state
   - animation notes
   - continuity notes

4. Asset usage panel / 素材使用区
   - which asset is used where
   - role of each asset
   - risks

5. Sync / review panel / 同步与审查区
   - pending changes
   - reviewer notes
   - whether Markdown has been synced

The HTML may be edited or annotated, but Markdown remains canonical after sync.

HTML 可以被修改或标注，但同步后 Markdown 仍然是 canonical source。

## HyperFrames Gate / HyperFrames 生成门槛

No final HyperFrames `index.html` should be generated before the critical-frame plan is reviewable in HTML.

在关键帧计划没有通过 HTML 显式审查之前，不应生成最终 HyperFrames `index.html`。

Minimum gate:

- `02_critical_frame_plan.md` exists.
- `direction_board.html` exists.
- Each Page has Entry, Hero, and Transition frames, unless explicitly waived.
- Each Page has simple animation notes.
- Each Page has a concrete continuity contract.
- HTML review changes have been synced back to Markdown or marked as pending.

## Future Extension / 后续扩展

Template router can be added later, but not in the MVP.

后续可以增加模板 router，但 MVP 不做。

Possible future templates:

- Explainer / 观点解释型
- Comparison / 对比型
- Tutorial / 教程型
- Product demo / 产品演示型
- Narrative / 叙事型

The first version should prove that one default critical-frame template improves HyperFrames output quality before adding routing.

第一版应该先验证：一个默认 critical-frame 模板是否真的能提高 HyperFrames 输出质量。验证成立后再加 router。
