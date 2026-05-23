# 03 Critical Frame Plan / 关键帧计划

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-24 00:14 | Codex | Replaced target planning with stable frame metadata and frame-style lock fields. / 将目标规划替换为稳定帧 metadata 和关键帧风格锁定字段。 |
| 2026-05-17 00:18 | Sisyphus | Added semantic target IDs and aspect-mode review requirements for Direction Boards. |
| 2026-05-15 16:36 | Sisyphus | Added narrative lock, scope classification, and drift-stop fields for post-review edits. |
| 2026-05-15 11:12 | Sisyphus | Added mandatory pre-board convergence fields for sections, assets, and mainline choices. |
| 2026-05-14 22:37 | Sisyphus | Added page readiness fields and stricter continuity/waiver handling. |
| 2026-05-14 17:58 | Sisyphus | Renumbered the template after adding Design Direction and connected critical frames to the selected visual route. |
| 2026-05-13 22:23 | Sisyphus | Created the MVP critical-frame planning template for HyperFrames Direction Harness runs. |

## Source / 来源

- Intake file / 意图文件: `01_intake.md`
- Design direction file / 设计方向文件: `02_design_direction.md`
- Current status / 当前状态: draft / review / locked
- Last synced direction board / 最近同步的 direction board:
- Waivers / 豁免项:

## Planning Rules / 计划规则

- Markdown is the source of truth. / Markdown 是 source of truth。
- `direction_board.html` is the review artifact. / `direction_board.html` 是审查 artifact。
- A Frame is a meaningful visual state, not an encoded video frame. / Frame 是关键视觉状态，不是视频编码帧。
- Each Page should use Entry / Hero / Transition frames by default. / 每页默认使用进入帧、主视觉帧、转场帧。
- Animation notes describe intent, not GSAP code. / 动画说明写意图，不写 GSAP 代码。
- Continuity must name concrete visual anchors. / 连续性必须写具体视觉锚点。
- Page layouts must follow `02_design_direction.md` unless a user note explicitly overrides it. / 页面布局必须遵守 `02_design_direction.md`，除非用户审查意见明确覆盖。
- Any missing Entry / Hero / Transition frame requires an explicit waiver. / 缺少 Entry / Hero / Transition frame 必须有明确豁免。
- Layout-only edits must not change sections, hook, claims, conclusion, or page meaning. / 仅版式修改不得改变章节、hook、论点、结论或页面含义。
- Mainline changes after lock require explicit user approval. / 主线锁定后的修改必须有用户明确批准。

## Global Direction / 全局方向

- Core message / 核心信息:
- Page count estimate / 页面数预估:
- Timing estimate / 时间预估:
- Visual system notes / 视觉系统说明:
- Motion system notes / 动效系统说明:
- Primary Design Router style / 主 Design Router 风格:
- Design constraints inherited from `02_design_direction.md` / 继承自 `02_design_direction.md` 的设计约束:
- Ready gate status / 准备状态: ready / blocked
- Blocking issues / 阻塞问题:
- Aspect modes for visual review / 视觉审查画幅: horizontal / vertical / both
- Stable metadata prefix / 稳定 metadata 前缀: page-XX / section-XX / asset-XX / motion-XX
- Critical-frame style route / 关键帧风格路线: HyperFrames default / user-selected route

## Pre-Board Convergence / Board 前收敛

This section must be filled from user answers before creating `direction_board.html`.

本节必须来自用户回答，并且要在创建 `direction_board.html` 前填写。

### 1. Sections / 章节

- Question asked / 已问问题:
- Recommended option / 推荐选项:
- User choice / 用户选择:
- Final sections / 最终章节:
- Merge / remove / reorder notes / 合并、删除、重排说明:

### 2. Assets / 素材

- Question asked / 已问问题:
- Recommended option / 推荐选项:
- User choice / 用户选择:
- Must-use assets / 必用素材:
- Optional assets / 可选素材:
- Reference-only assets / 仅参考素材:
- Banned assets / 禁止素材:

### 3. Mainline / 主线

- Question asked / 已问问题:
- Recommended option / 推荐选项:
- User choice / 用户选择:
- Narrative spine / 叙事主轴:
- Opening hook / 开头 hook:
- Ending landing point / 结尾落点:

### Direction Board Lock / Direction Board 锁定

- User confirmed sections/assets/mainline / 用户已确认章节、素材、主线: yes / no / waived
- Waiver reason if any / 如有豁免，原因:
- Allowed to generate `direction_board.html` / 是否允许生成 `direction_board.html`: yes / no

### Stable Frame Metadata Plan / 稳定帧 Metadata 计划

Every visible frame and asset in `direction_board.html` needs stable metadata so review decisions can map to final HTML.

`direction_board.html` 中每个可见 frame 和 asset 都需要稳定 metadata，方便审查决策映射到最终 HTML。

| Target ID / 目标 ID | Type / 类型 | Source / 来源 | Aspect modes / 画幅模式 | Notes / 备注 |
|---|---|---|---|---|
| page-01.entry | critical-frame | Page 01 Entry | horizontal, vertical |  |
| page-01.hero | critical-frame | Page 01 Hero | horizontal, vertical |  |
| page-01.transition | critical-frame | Page 01 Transition | horizontal, vertical |  |

## Narrative Lock / 主线锁定

Fill this before generating or revising `direction_board.html`.

生成或修改 `direction_board.html` 前填写本节。

- Mainline lock status / 主线锁定状态: draft / locked / unlocked-by-user
- Locked sections / 已锁定章节:
- Locked narrative spine / 已锁定叙事主轴:
- Locked opening hook / 已锁定开头 hook:
- Locked ending landing point / 已锁定结尾落点:
- Claims or facts that must not change / 不得改变的论点或事实:
- Allowed visual-only changes / 允许的仅视觉修改:
- Explicit user approval for mainline change / 用户明确批准主线修改: none / quoted note

## Post-Review Scope Classification / Review 后范围分类

Use this section for every change after board review or mainline lock.

每次 board review 或主线锁定后的修改都填写本节。

| Time / 时间 | Request / 请求 | Scope / 范围 | What changed / 具体修改 | What stayed locked / 保持锁定 | Mainline changed? / 主线是否改变 | Synced to / 同步到 |
|---|---|---|---|---|---|---|
|  |  | layout-only / visual-route / narrative-mainline / render-debug |  |  | no / yes-approved |  |

---

## Page 01 / 第 1 页

### Scene Context / 场景上下文（可选）

- Narrative beat / 叙事段:
- What this page should make the viewer understand / 这一页要让观众理解:

### Page Content / 页面内容

- Main text / 主文案:
- Secondary text / 辅助文案:
- Visual asset / 视觉素材:
- Asset crop or framing / 素材裁切或构图:
- Background or layout idea / 背景或布局想法:
- Notes / 备注:

### Critical Frames / 关键帧

#### Frame A — Entry / 进入帧

- Timestamp or relative position / 时间点或相对位置:
- Visible elements / 可见元素:
- Text / 文案:
- Asset state / 素材状态:
- Layout / 布局:
- Carries from previous page / 从上一页继承:

#### Frame B — Hero / 主视觉帧

- Timestamp or relative position / 时间点或相对位置:
- Visible elements / 可见元素:
- Text / 文案:
- Asset state / 素材状态:
- Layout / 布局:
- Why this frame matters / 为什么这是关键帧:

#### Frame C — Transition / 转场帧

- Timestamp or relative position / 时间点或相对位置:
- Visible elements / 可见元素:
- Text / 文案:
- Asset state / 素材状态:
- Layout / 布局:
- Handoff to next page / 交给下一页的内容:

### Simple Animation Notes / 简单动画说明

- Text motion / 文案动效:
- Asset motion / 素材动效:
- Camera / scale / emphasis / 镜头、缩放、强调:
- Transition / 转场:

### Continuity Contract / 连续性约束

- Previous visual anchor / 上一页视觉锚点:
- Current visual anchor / 当前页视觉锚点:
- Next visual anchor / 下一页视觉锚点:
- Motion bridge / 动效桥接:
- Shared color / shape / layout motif / 延续色彩、形状、版式母题:
- What must not abruptly change / 不能突然变化的东西:

### Risk / Open Questions / 风险与问题

- Risk / 风险:
- Open question / 未决问题:
- Page ready for direction board / 本页是否可进入 direction board: yes / no
- Waiver if any / 如有豁免:
- Hero-frame mockup required in board / Board 中是否必须有 hero-frame mockup: yes / no
- Stable frame IDs / 稳定帧 ID: page-01.entry / page-01.hero / page-01.transition

---

## Review Notes / 审查记录

Use this section to sync direction board feedback back into Markdown.

用本区把 direction board 的审查意见同步回 Markdown。

| Time / 时间 | Source / 来源 | Change / 修改 | Synced / 已同步 |
|---|---|---|---|
|  | direction_board.html / user note |  | no |
