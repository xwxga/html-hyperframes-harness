# 02 Design Direction / 设计方向

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-18 16:22 | Sisyphus | Reframed board bias fields for director-first previews, language switch, and side annotations. |
| 2026-05-17 00:42 | Sisyphus | Clarified that final HTML source-of-truth wording applies only after render handoff, not to the review board. |
| 2026-05-17 00:18 | Sisyphus | Added aspect-mode and semantic comment-target requirements for public Visual Review boards. |
| 2026-05-15 11:12 | Sisyphus | Clarified that design direction supports an asset-first visual board rather than a production/compliance board. |
| 2026-05-14 22:37 | Sisyphus | Added concrete route gate, non-generic visual rules, and design readiness checks. |
| 2026-05-14 17:58 | Sisyphus | Added the Design Router direction template for HyperFrames Direction Harness runs. |

## Source / 来源

- Intake file / 意图文件: `01_intake.md`
- Project `design.md` / `DESIGN.md` if present / 如有项目设计文档:
- Local Design Router overview / 本地 Design Router 总览: `docs/design-router/README.md`
- Local interaction patterns / 本地交互模式: `docs/design-router/INTERACTION_PATTERNS.md`
- Current status / 当前状态: draft / review / locked

## Design Router Selection / Design Router 选择

Select at most one primary design system plus one optional accent/reference system. Cite the exact local source path.

最多选择一个主设计系统，加一个可选辅助/参考系统。必须引用准确的本地来源路径。

| Role / 角色 | Selection / 选择 | Local source path / 本地来源路径 | Why it fits / 为什么适合 | What not to borrow / 不借用什么 |
|---|---|---|---|---|
| Primary / 主风格 |  | `docs/design-router/design-systems/core/.../DESIGN.md` |  |  |
| Accent or reference / 辅助或参考 |  | `docs/design-router/design-systems/reference/.../DESIGN.md` |  |  |

## Route Gate / 路由门槛

- [ ] Project `design.md` / `DESIGN.md` was checked. / 已检查项目 `design.md` / `DESIGN.md`。
- [ ] `docs/design-router/README.md` was read. / 已读取 `docs/design-router/README.md`。
- [ ] Primary route cites an exact local `DESIGN.md`. / 主路由引用了准确的本地 `DESIGN.md`。
- [ ] No more than one primary plus one optional accent/reference. / 不超过一个主风格和一个可选辅助/参考风格。
- [ ] `xiaohongshu` is reference-only unless user explicitly asks otherwise. / 除非用户明确要求，`xiaohongshu` 仅作参考。

## Route Rationale / 路由理由

- Source material mood / 源素材气质:
- Audience and platform fit / 受众与平台适配:
- Why this route is better than alternatives / 为什么优于其他路由:
- User-provided constraints that override router defaults / 用户约束中覆盖 router 默认值的内容:

## Visual Principles For This Run / 本次视觉原则

Translate the design route into video-useful rules. Do not stay at brand adjectives.

把设计路由翻译成适合视频制作的规则。不要停留在品牌形容词。

- Composition mood / 构图气质:
- Background treatment / 背景处理:
- Typography hierarchy / 字体层级:
- Color system / 色彩系统:
- Divider / rule / frame language / 分隔线、边框、框架语言:
- Asset treatment / 素材处理:
- Density and spacing / 密度与留白:
- Mobile vertical-video considerations / 竖屏短视频注意事项:

## Concrete Values / 具体值

Fill with usable direction. Avoid generic words like “modern”, “clean”, or “dynamic” unless they are translated into concrete choices.

填写可执行方向。避免只写 “modern”“clean”“dynamic” 这类泛词，除非已翻译成具体选择。

- Background colors / 背景色:
- Text colors / 文字颜色:
- Accent colors / 强调色:
- Type scale / 字号层级:
- Card/frame radius / 卡片或框架圆角:
- Border/divider style / 边框或分隔线样式:
- Screenshot treatment / 截图处理:
- Maximum text density per frame / 每帧最大文字密度:

## Asset-First Direction / 素材优先方向

List real assets from `01_intake.md`. Do not invent assets.

只列 `01_intake.md` 中真实存在的素材，不发明素材。

| Asset / 素材 | Visual role / 视觉角色 | Crop or framing / 裁切或构图 | Page candidates / 候选页面 | Risk / 风险 |
|---|---|---|---|---|
|  |  |  |  |  |

## Motion Principles / 动效原则

Write motion direction, not GSAP code.

写动效方向，不写 GSAP 代码。

- Global rhythm / 全局节奏:
- Entrance language / 入场语言:
- Emphasis language / 强调语言:
- Camera / scale language / 镜头与缩放语言:
- Transition language / 转场语言:
- Reduced-motion or restraint notes / 克制动效说明:

## HyperFrames Default Visual Principles Applied / 已应用的 HyperFrames 默认视觉原则

- [ ] After `04_render_plan.md` handoff, the generated final HyperFrames HTML is the composition source of truth; before handoff, Markdown remains the harness source of truth. / `04_render_plan.md` 交接后，生成的最终 HyperFrames HTML 是 composition 的 source of truth；交接前，Markdown 仍是 harness 的 source of truth。
- [ ] Build hero layouts before animation. / 先搭建 hero layout，再做动画。
- [ ] Real screenshots and source assets stay primary. / 真实截图和源素材优先。
- [ ] Motion notes are directional, not GSAP code. / 动效说明是导演语言，不是 GSAP 代码。
- [ ] Multi-page output needs page transitions. / 多页产物需要页间转场。
- [ ] Long webpage screenshots in `direction_board.html` use constrained manual scroll containers. / `direction_board.html` 中长网页截图使用限高手动滚动容器。

## Design Readiness / 设计准备度

- Status / 状态: ready / blocked
- Blocking issues / 阻塞问题:
- Pending user decisions / 待用户决定:
- Notes that must carry into `03_critical_frame_plan.md` / 必须带入 `03_critical_frame_plan.md` 的说明:
- Notes that must be visible in the director-first `direction_board.html` / 必须在 director-first `direction_board.html` 中可见的说明:

## Direction Board Bias / Direction Board 倾向

- Board type / Board 类型: director-first visual preview board only
- Rhythm storyboard priority / 节奏分镜优先级:
- Layout preview priority / 版面预览优先级:
- Keyframe preview priority / 关键帧预览优先级:
- Motion before/after priority / 运动前后状态优先级:
- Style critique priority / 风格检查优先级:
- Language switch requirement / 语言切换要求: English default, Chinese optional, one visible language at a time
- Semantic comment target strategy / 语义评论目标策略: page-id + layout-id + frame-id + asset-id

## Anti-Patterns / 反模式

- Visual styles to avoid / 避免的视觉风格:
- Typography mistakes to avoid / 避免的字体问题:
- Asset misuse to avoid / 避免的素材误用:
- Motion mistakes to avoid / 避免的动效问题:

## Review Notes / 审查记录

Use this section to sync design-board feedback back into Markdown.

用本区把 direction board 的设计反馈同步回 Markdown。

| Time / 时间 | Source / 来源 | Change / 修改 | Synced / 已同步 |
|---|---|---|---|
|  | direction_board.html / user note |  | no |
