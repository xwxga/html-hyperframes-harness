# Director Workbench Upgrade Brief / Director Workbench 升级 Brief

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-19 21:23 | Codex | Created the confirmed v1.5 upgrade brief for merging Direction Board and frame-by-frame preview. / 创建已确认的 v1.5 升级 brief，用于合并 Direction Board 与逐帧预览。 |

## Name / 名称

Confirmed artifact name: **Director Workbench**.

已确认 artifact 名称：**Director Workbench**。

Recommended file name for now: `direction_board.html`.

当前建议文件名：`direction_board.html`。

Reason: keep compatibility with the existing Harness Skill while upgrading the meaning of the artifact. Internally, the board becomes a workbench with multiple views.

原因：保持与现有 Harness Skill 兼容，同时升级 artifact 的含义。内部语义上，board 变成带多视图的 workbench。

## Confirmed Decisions / 已确认决策

1. **Style is fixed to Figma. / 风格固定为 Figma。**
   Do not use Apple/macOS chrome as the outer visual language. The default style should be Figma-like: white canvas, soft grid, selection outlines, small pills, side panels, artboards, timeline.
   不使用 Apple/macOS chrome 作为外层视觉语言。默认风格应接近 Figma：白色画布、柔和网格、选择描边、小 pills、侧栏、artboards、timeline。

2. **Direction Board and frame-by-frame preview are merged. / Direction Board 与逐帧预览合并。**
   Generate one `direction_board.html`, not two separate review files.
   生成一个 `direction_board.html`，不要拆成两个审查文件。

3. **Rename Layout Previews. / 重命名 Layout Previews。**
   Replace `Layout Previews` with **Visual System Lock**. This section should lock the whole video's reusable visual system: artboard framing, title placement, source card style, inspector labels, selection outlines, safe area, typography scale, timeline style, and reusable frame components.
   用 **Visual System Lock** 替代 `Layout Previews`。这个 section 用来锁定整条视频的可复用视觉系统：artboard framing、标题位置、source card 样式、inspector labels、选择描边、安全区、字体层级、timeline 样式和可复用 frame components。

4. **Replace Motion Before/After cards. / 替换 Motion Before/After 卡片。**
   Do not use generic before/after cards. Use **Motion Timeline** or **Motion Strip** to show motion intent across time.
   不使用泛化 before/after 卡片。改用 **Motion Timeline** 或 **Motion Strip** 展示跨时间的 motion intent。

5. **Director Notes should be collapsible/lightweight. / Director Notes 应可折叠且轻量。**
   Do not let notes dominate the main visual surface. Use a collapsible drawer, right rail, per-frame accordion, or comment popover.
   不要让 notes 压过主视觉界面。使用可折叠 drawer、右侧 rail、逐帧 accordion 或 comment popover。

## Correction About Animation / 关于 Animation 的纠正

The user did **not** say the animation effect itself is unsatisfactory.

用户**不是**说动画效果本身不满意。

The correct issue is: the current way of **representing motion intent** in the Direction Board is not ideal.

正确问题是：当前 Direction Board 中**表达 motion intent 的方式**不理想。

When the brief says "animation effects," it refers to the board's UI representation of motion, including:

当 brief 提到 “animation effects” 时，实际指 board 对 motion 的 UI 表达方式，包括：

- entry / hero / transition states
- source asset scroll / pan / crop intent
- timeline position
- before/after motion cards
- how motion notes are reviewed before final HyperFrames generation

So the upgrade should not criticize or redesign animation quality itself. It should redesign how motion intent is shown and reviewed in the workbench.

因此，本次升级不应批评或重做动画质量本身，而应重做 motion intent 在 workbench 中如何展示和审查。

## Target Information Architecture / 目标信息架构

`direction_board.html` should contain:

`direction_board.html` 应包含：

- Top bar: project name, status, view switch / 顶栏：项目名、状态、视图切换
- `Overview` view: overall direction review / `Overview` 视图：整体方向审查
- `Frames` view: frame-by-frame workbench / `Frames` 视图：逐帧 workbench
- Lightweight comment rail: Google Docs-like, weak markers, export JSON / 轻量 comment rail：类似 Google Docs，弱 marker，可导出 JSON

Overview view should include:

Overview 视图应包含：

- Director cover / 导演封面
- Rhythm Storyboard / 节奏分镜
- Visual System Lock / 视觉系统锁定
- Motion Timeline / Motion Strip / 运动时间线或运动条
- Review Gate Summary / 审查门槛摘要

Frames view should include:

Frames 视图应包含：

- left frame list / 左侧 frame 列表
- center 9:16 artboard / 中央 9:16 artboard
- right inspector / 右侧 inspector
- bottom timeline / 底部 timeline

## Implementation Boundary / 实现边界

This is a v1.5 upgrade to the existing Harness Skill, not a rewrite.

这是对现有 Harness Skill 的 v1.5 升级，不是重写。

Do not merge this with the final HyperFrames composition `index.html`. The final `index.html` remains a separate artifact for rendering/animation. `direction_board.html` is only the pre-generation director review workbench.

不要把它和最终 HyperFrames composition `index.html` 合并。最终 `index.html` 仍然是独立的渲染/动画 artifact。`direction_board.html` 只是生成前的导演审查 workbench。

## One-Line Brief For The Next Agent / 给下一个 Agent 的一句话 Brief

Upgrade the existing Direction Board into a single Figma-like Director Workbench: Overview locks rhythm, visual system, and motion intent; Frames lets every frame be inspected as an independent 9:16 artboard; comments stay lightweight like Google Docs; the final HyperFrames `index.html` remains separate.

把现有 Direction Board 升级成单一、Figma-like 的 Director Workbench：Overview 锁定节奏、视觉系统和 motion intent；Frames 让每一帧都能作为独立 9:16 artboard 被检查；评论保持类似 Google Docs 的轻量模式；最终 HyperFrames `index.html` 仍然独立。
