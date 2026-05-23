# 02 Design Direction / 设计方向

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-23 23:31 | Codex | Migrated the real-project design direction into the public golden example and removed non-example optional assets. / 将真实项目设计方向迁入公开 golden example，并移除非示例可选素材。 |
| 2026-05-16 13:47 | Codex | Updated the Figma direction to six low-density key frames and made source-card scroll/pan/video motion a default requirement. |

## Source / 来源

- Intake file / 意图文件: `01_intake.md`
- Project `design.md` / `DESIGN.md` if present / 如有项目设计文档: none
- Local Design Router overview / 本地 Design Router 总览: `docs/design-router/README.md`
- Local interaction patterns / 本地交互模式: `docs/design-router/INTERACTION_PATTERNS.md`
- Current status / 当前状态: **locked**

## Design Router Selection / Design Router 选择

| Role / 角色 | Selection / 选择 | Local source path / 本地来源路径 | Why it fits / 为什么适合 | What not to borrow / 不借用什么 |
|---|---|---|---|---|
| Primary / 主风格 | Figma | `docs/design-router/design-systems/core/figma/DESIGN.md` | The video is about webpage-like visual scripts, design workbenches, review surfaces, and low-density big-card composition. Figma's white canvas, black UI shell, pill geometry, dashed selection language, and product-content-as-color map directly to this idea. | Do not borrow the full marketing hero gradient or dense product-site sections. Keep color as small product accents, not a full rainbow UI. |
| Accent or reference / 辅助或参考 | none | N/A | User explicitly requested Figma; no additional visual route needed. | Do not mix with XHS, Claude parchment, or dark hacker styles. |

## Route Gate / 路由门槛

- [x] Project `design.md` / `DESIGN.md` was checked. / 已检查项目 `design.md` / `DESIGN.md`。
- [x] `docs/design-router/README.md` was read. / 已读取 `docs/design-router/README.md`。
- [x] Primary route cites an exact local `DESIGN.md`. / 主路由引用了准确的本地 `DESIGN.md`。
- [x] No more than one primary plus one optional accent/reference. / 不超过一个主风格和一个可选辅助/参考风格。
- [x] `xiaohongshu` is reference-only unless user explicitly asks otherwise. / 除非用户明确要求，`xiaohongshu` 仅作参考。

## Route Rationale / 路由理由

- Source material mood / 源素材气质: Screenshots, X posts, webpage scrolls, and direction boards are all interface-native. They need a design-canvas treatment, not a cinematic or editorial treatment.
- Audience and platform fit / 受众与平台适配: The viewer should understand this as a creator/workflow upgrade, with clean large titles and obvious visual proof.
- Why this route is better than alternatives / 为什么优于其他路由: Figma makes "webpage visual script" feel like a reviewable design surface; Claude parchment would feel like a research essay, and XHS would make it too lifestyle.
- User-provided constraints that override router defaults / 用户约束中覆盖 router 默认值的内容: Low text density; title-card only; no subtitles or voice; long holds allowed.

## Visual Principles For This Run / 本次视觉原则

- Composition mood / 构图气质: White 9:16 short-video artboards, black frame labels, large calm title cards, one hero asset per frame.
- Background treatment / 背景处理: pure white / very light gray canvas with faint Figma-grid dots or selection handles.
- Typography hierarchy / 字体层级: one large Chinese headline per frame; one small mono label; no paragraph subtitles.
- Color system / 色彩系统: interface stays black/white; color comes from source assets and small Figma accent dots/handles.
- Divider / rule / frame language / 分隔线、边框、框架语言: thin black/gray outlines, dashed selection boxes, 8px radius asset cards, pill frame labels.
- Asset treatment / 素材处理: source asset is the hero; no heavy filters; use crop masks, rounded cards, and simple selection outlines.
- Density and spacing / 密度与留白: low density; at least 35% empty space per frame; no more than two short text blocks per frame.
- Mobile vertical-video considerations / 竖屏短视频注意事项: every frame is 1080×1920 / 9:16; title should be readable at phone size; hero asset centered in safe area; no tiny labels as required comprehension.

## Concrete Values / 具体值

- Background colors / 背景色: `#ffffff`, `#f7f7f7`, `#f2f2f2`
- Text colors / 文字颜色: `#000000`, `#333333`, `#666666`
- Accent colors / 强调色: Figma dots only — blue `#0d99ff`, purple `#a259ff`, green `#1abc54`, orange `#ff7262`
- Type scale / 字号层级:
  - Display title: 82-104px, weight 540-700, line-height 1.02
  - Small label: 20-24px mono/uppercase
  - Tiny annotation: 18-22px max, optional
- Card/frame radius / 卡片或框架圆角: 8px asset cards; 50px pill labels; circular accent handles.
- Border/divider style / 边框或分隔线样式: 1px `#000000` for active frame, 1px `#d9d9d9` for inactive UI, dashed 2px selection outline.
- Screenshot treatment / 截图处理: crop into a centered mock device/page card; keep original colors; no fake redraw.
- Maximum text density per frame / 每帧最大文字密度: one headline + one label + optional 3-word tag.

## Asset-First Direction / 素材优先方向

| Asset / 素材 | Visual role / 视觉角色 | Crop or framing / 裁切或构图 | Page candidates / 候选页面 | Risk / 风险 |
|---|---|---|---|---|
| `thariq_x_first_panel_render.mp4` | Hook source / article authority | Center-column page card, large and clean | Frame 02 | It includes article text; keep title overlay sparse. |
| `karpathy_html_quote.png` | Authority quote / information-density thesis | Crop top/central quote area in tall phone card | Frame 03 | Full screenshot is text-dense; crop selectively. |
| `html_effectiveness_site_scroll_render.mp4` | Thariq examples / visual proof | Large moving source card | Frame 04 | Keep visual proof prominent without adding subtitles. |
| `tuturetom_main_video_10s_render.mp4` | html-anything / market signal | Full-size X main-content card, cropped away from side chrome and lower blank area | Frame 05 | Must be readable as Tom/html-anything, not a tiny inset. |
| `figma_direction_board_scroll_render.mp4` | User workflow proof | Full-size hero card with visible scroll motion | Frame 06 | Needs to read as "my workflow". |

## Motion Principles / 动效原则

- Global rhythm / 全局节奏: long holds; motion exists only to reveal assets and move between frames.
- Entrance language / 入场语言: title fades in; asset card scales 0.98 to 1.0; selection handles pop in.
- Emphasis language / 强调语言: active frame label, dashed bounding box, small Figma color dots.
- Camera / scale language / 镜头与缩放语言: very slow asset push-in plus internal source-card scroll/pan; no rapid zooms.
- Transition language / 转场语言: Figma canvas pan between artboards.
- Reduced-motion or restraint notes / 克制动效说明: no subtitles, no kinetic typography, no scrolling text wall.

## HyperFrames Default Visual Principles Applied / 已应用的 HyperFrames 默认视觉原则

- [x] HTML is the final composition source of truth. / HTML 是最终 composition 的 source of truth。
- [x] Build hero layouts before animation. / 先搭建 hero layout，再做动画。
- [x] Real screenshots and source assets stay primary. / 真实截图和源素材优先。
- [x] Motion notes are directional, not GSAP code. / 动效说明是导演语言，不是 GSAP 代码。
- [x] Multi-page output needs page transitions. / 多页产物需要页间转场。
- [x] Long webpage screenshots in `direction_board.html` use constrained manual scroll containers. / `direction_board.html` 中长网页截图使用限高手动滚动容器。
- [x] Final `index.html` source cards use visible MP4/scroll/pan motion by default. / 最终 `index.html` 素材卡默认使用可见的 MP4、scroll 或 pan 动效。

## Design Readiness / 设计准备度

- Status / 状态: **ready**
- Blocking issues / 阻塞问题: none
- Pending user decisions / 待用户决定: none
- Notes that must carry into `03_critical_frame_plan.md` / 必须带入 `03_critical_frame_plan.md` 的说明: 6 frames; Frame 01 placeholder; Figma style; no subtitles/voice; Tom is Frame 05 and workflow is Frame 06.
- Notes that must be visible in the asset-first `direction_board.html` / 必须在 asset-first `direction_board.html` 中可见的说明: visual contact sheet, asset wall, 6-frame storyboard, low-density critical frame mockups, compact production handoff.

## Direction Board Bias / Direction Board 倾向

- Board type / Board 类型: asset-first visual direction board only
- Visual contact sheet priority / 视觉总览优先级: high; first viewport should show the 6-artboard sequence.
- Asset wall priority / 素材墙优先级: medium; all must-use assets visible.
- Critical-frame mockup priority / 关键帧 mockup 优先级: high; each frame gets a single hero mockup.
- Compact production handoff notes / 小型生产交接说明: small; only ready state and final handoff constraints.

## Anti-Patterns / 反模式

- Visual styles to avoid / 避免的视觉风格: AI neon, dark terminal, dense dashboard, editorial essay.
- Typography mistakes to avoid / 避免的字体问题: paragraph subtitles, tiny essential labels, too many bullets.
- Asset misuse to avoid / 避免的素材误用: shrinking Tom/html-anything into a tiny inset again, full Karpathy screenshot as unreadable text wall.
- Motion mistakes to avoid / 避免的动效问题: static-only source cards, constant motion across 3 minutes, auto-scroll overload, rapid caption popups.

## Review Notes / 审查记录

| Time / 时间 | Source / 来源 | Change / 修改 | Synced / 已同步 |
|---|---|---|---|
| 2026-05-16 13:47 | user review | Split Tom/html-anything and workflow into separate full frames and made source-card motion mandatory. | yes |
| 2026-05-16 00:18 | user note | Locked Figma route, five key frames, no subtitles/voice, low title-card text density. | yes |
