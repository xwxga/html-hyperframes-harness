---
name: hyperframes-direction-harness
description: "Project-level hard-gate skill for HyperFrames pre-generation direction convergence. Use before creating a new HyperFrames index.html when visual direction, assets, pages, critical frames, continuity, or Design Router selection are not locked. Requires reviewed direction_board.html before final composition generation; small edits may bypass."
---

# HyperFrames Direction Harness

## Changelog / 变更日志

| 时间 / Time | 作者 / Author | 变更 / Change |
|---|---|---|
| 2026-05-16 21:24 | Codex | Added the global short-video source-asset motion rule and updated related paths for the portable GitHub package. |
| 2026-05-15 16:36 | Sisyphus | Added scope classification, mainline lock, drift stop, and layout-only edit rules to prevent visual revisions from rewriting narrative direction. |
| 2026-05-15 13:00 | Sisyphus | Bound the skill to the visual board pattern library and asset-first golden reference. |
| 2026-05-15 11:12 | Sisyphus | Made asset-first visual Direction Board the only board type and added mandatory multiple-choice convergence before board generation. |
| 2026-05-14 22:37 | Sisyphus | Hardened the draft into an operational project-level skill with hard gates, review definition, bypass rules, and HyperFrames handoff contract. |
| 2026-05-14 17:58 | Sisyphus | Connected the workflow to the local Design Router, added a design-direction stage, and documented HyperFrames default visual principles. |
| 2026-05-13 22:23 | Sisyphus | Created the draft skill for the minimal HyperFrames Direction Harness workflow. |

## Overview / 概览

Use this project-level skill before generating a new final HyperFrames `index.html` when the project needs visual direction convergence first.

在生成最终 HyperFrames `index.html` 之前，如果需要先确认视觉方向、页面、关键帧和连续性，使用本 skill。

This skill is not a web app, renderer, CLI, or asset management system. It is an agent-facing hard-gate workflow that creates reviewable planning artifacts before HyperFrames composition begins.

本 skill 不是 Web App、渲染器、CLI 或素材管理系统。它是一套给 Agent 使用的前置流程，用来在 HyperFrames composition 开始前生成可审查的计划产物。

## Trigger / 触发场景

Use this skill when:

- The user asks to create a HyperFrames video but the visual direction is not fully locked.
- The user has ideas, screenshots, illustrations, clips, or director notes that need to be organized first.
- The user wants an explicit HTML direction board before the final HyperFrames HTML.
- The project is short-video oriented and needs pages, critical frames, continuity, and simple animation intent.
- The project needs local Design Router selection before HyperFrames composition.
- The user asks for a new video, major redesign, visual route, asset organization, or direction board.

使用本 skill 的场景：

- 用户要做 HyperFrames 视频，但视觉方向尚未锁定。
- 用户有想法、截图、插图、视频片段或编导安排，需要先整理。
- 用户希望在最终 HyperFrames HTML 之前，先看到一个显式的 HTML 方向审查板。
- 项目主要是短视频，需要先确认页面、关键帧、连续性和简单动画意图。
- 项目需要在 HyperFrames composition 前先做本地 Design Router 选择。
- 用户要求新视频、重大重做、视觉路线、素材组织或方向审查板。

## Bypass Rules / 跳过规则

Bypass this skill only for small edits to an already-existing HyperFrames composition:

- typo or copy edit
- timing adjustment
- one color or spacing correction
- replacing one asset without changing the visual direction
- fixing a lint, validate, inspect, or render bug
- a single-page local adjustment that does not change the design route

只有对已有 HyperFrames composition 做小修时才跳过本 skill：

- 错别字或文案小改
- timing 调整
- 单个颜色或间距修正
- 不改变视觉方向的单素材替换
- 修 lint、validate、inspect 或 render bug
- 不改变设计路线的单页局部调整

If there is any doubt whether the request is a small edit or a new direction, run the harness.

如果不确定是小修还是新方向，默认运行 harness。

## Scope Classification Gate / 范围分类门槛

Before changing any reviewed board, render plan, or final composition, classify the user's request as one of these scopes and record the result in the relevant Markdown artifact.

在修改任何已审查 board、render plan 或最终 composition 前，先把用户请求归类为以下范围之一，并记录到相关 Markdown artifact 中。

1. **Layout-only / 仅版式** — spacing, hierarchy, cropping, asset scale, frame density, scroll/slider treatment, visual polish. Mainline is locked.
2. **Visual route / 视觉路线** — aesthetic language, Design Router source, color/type/layout system. Mainline is locked unless explicitly unlocked.
3. **Narrative/mainline / 叙事主线** — sections, hook, argument order, ending point, claims, or page meanings. Requires explicit user confirmation.
4. **Render/debug / 渲染或修错** — lint, validate, inspect, timing, export, browser/runtime issues. Mainline and visual route are locked.

If the user asks for layout, readability, asset size, 9:16 framing, scroll, slider, or subtitle removal, treat it as **Layout-only** unless the user explicitly says to change the story, sections, hook, or conclusion.

如果用户要求改版式、可读性、素材大小、9:16 构图、scroll、slider 或取消字幕，默认视为 **仅版式**；除非用户明确要求改变故事、章节、hook 或结论。

## Mainline Lock And Drift Stop / 主线锁定与漂移停止

Once sections/assets/mainline have been confirmed or a board has been reviewed, the narrative mainline is locked. Visual/layout feedback must preserve the locked mainline.

一旦章节、素材、主线已确认，或 board 已审查，叙事主线即被锁定。视觉/版式反馈必须保留已锁定主线。

For every post-review edit, record:

每次 review 后修改，都要记录：

- What exactly changed / 具体改了什么
- What stayed locked / 哪些内容保持锁定
- Mainline changed? / 主线是否改变: no / yes with explicit user approval
- Markdown sync target / 同步回哪个 Markdown 文件

If the edit would change section order, narrative spine, opening hook, ending landing point, source claims, or page meanings, stop and ask for confirmation before editing.

如果修改会改变章节顺序、叙事主轴、开头 hook、结尾落点、来源论点或页面含义，必须先停止并询问用户确认。

## Hard Gate / 硬门槛

<HARD-GATE>
Do NOT create or edit the final HyperFrames `index.html` for a new video, major redesign, or unclear visual direction until ALL are true:

1. `harness/01_intake.md` exists.
2. `harness/02_design_direction.md` exists and cites the local Design Router source.
3. `harness/03_critical_frame_plan.md` exists.
4. The user has confirmed the pre-board convergence choices for sections, assets, and mainline.
5. `harness/direction_board.html` exists as an asset-first visual direction board, not a production/compliance board.
6. `harness/direction_board.html` is reviewed by the user OR reviewed by the agent using the review definition below.
7. HTML review changes are synced back to Markdown or explicitly marked pending with a reason.
8. `harness/04_render_plan.md` exists and is marked ready.

File existence alone is not review. A pretty board without Markdown sync is not source of truth. The Direction Board must make visual direction visible through assets, storyboard, and critical-frame mockups. The final HyperFrames composition must be generated from `04_render_plan.md`, not directly from loose intake notes.
</HARD-GATE>

<HARD-GATE>
对于新视频、重大重做或视觉方向不清的任务，在以下条件全部满足前，不要创建或编辑最终 HyperFrames `index.html`：

1. `harness/01_intake.md` 已存在。
2. `harness/02_design_direction.md` 已存在，并引用本地 Design Router 来源。
3. `harness/03_critical_frame_plan.md` 已存在。
4. 用户已确认生成 board 前的章节、素材、主线选择。
5. `harness/direction_board.html` 已存在，且它是 asset-first 视觉方向板，不是 production/compliance board。
6. `harness/direction_board.html` 已由用户审查，或由 agent 按下方 review definition 自检。
7. HTML 审查修改已同步回 Markdown，或明确标记 pending 并说明原因。
8. `harness/04_render_plan.md` 已存在并标记 ready。

文件存在不等于已审查。漂亮的 board 如果没有同步回 Markdown，不是 source of truth。Direction Board 必须通过素材、storyboard 和关键帧 mockup 让视觉方向可见。最终 HyperFrames composition 必须从 `04_render_plan.md` 生成，不能直接从松散 intake notes 生成。
</HARD-GATE>

## Source of Truth / 事实源

Markdown is the source of truth. HTML is the review artifact.

Markdown 是 source of truth。HTML 是审查 artifact。

If the HTML is edited or annotated, those changes must be synced back into Markdown before they are treated as final.

如果 HTML 中发生修改或标注，必须先同步回 Markdown，才能视为最终计划。

Design Router is the local visual reference layer. It helps choose a design language; it is not allowed to invent source facts, scores, workflows, fields, or claims.

Design Router 是本地视觉参考层。它用于选择设计语言；不得用它发明源事实、分数、workflow、字段或论点。

## Terms / 术语

- Scene / 场景: narrative unit; what this segment says.
- Page / 页面: visual layout unit; what this screen looks like.
- Frame / 帧: meaningful visual state inside a page, not a 24/30/60fps encoded frame.
- Critical Frame / 关键帧: required visual checkpoint before HyperFrames composition.
- Design Direction / 设计方向: selected local Design Router style plus concrete typography, color, layout, asset, and motion rules for the run.
- Sync / 同步: process of applying HTML review changes back to Markdown.

## Workflow / 工作流

## Execution Protocol / 执行协议

Run the workflow in this exact order. Do not skip ahead because the user sounds urgent.

按以下顺序执行。不要因为用户催促就跳步。

1. Create or update the `harness/` folder in the active project folder.
2. Fill `01_intake.md` from the user's message and real source assets. Ask only for missing blocking facts.
3. Fill `02_design_direction.md` before planning pages. Read local Design Router docs first.
4. Fill `03_critical_frame_plan.md`; every Page defaults to Entry / Hero / Transition frames.
5. Before creating `direction_board.html`, ask the user multiple-choice confirmation questions for sections, assets, and mainline. Record the confirmed choices and mainline lock in Markdown.
6. Create `direction_board.html` as an asset-first visual direction board from the confirmed choices and Markdown artifacts, following Pattern A in `references/visual-board-patterns.md`.
7. Review `direction_board.html` by user approval or agent self-review.
8. Classify review changes as layout-only, visual-route, narrative/mainline, or render/debug; preserve mainline unless explicitly unlocked.
9. Sync any review changes back to Markdown.
10. Create `04_render_plan.md` only after review or explicit waiver.
11. Hand off to HyperFrames generation using only `04_render_plan.md`.

### Mandatory Pre-Board Convergence / 生成 Board 前强制收敛

Before generating `direction_board.html`, the agent must stop and ask the user to confirm three things using multiple-choice questions. Do not generate the board until the user answers or explicitly waives confirmation.

在生成 `direction_board.html` 前，Agent 必须停下来，用选择题让用户确认三件事。用户回答或明确豁免前，不要生成 board。

1. Sections / 章节: proposed chapters or beats, with options to merge, remove, or reorder.
2. Assets / 素材: must-use assets, optional assets, reference-only assets, and banned assets.
3. Mainline / 主线: narrative spine, opening hook, and ending landing point.

The questions should be short and concrete. Prefer 2–4 options each, with one recommended option first.

问题要短而具体。每题优先给 2–4 个选项，把推荐选项放第一。

Record the answers in `03_critical_frame_plan.md` under `Pre-Board Convergence / Board 前收敛` and carry them into `direction_board.html`.

把回答记录到 `03_critical_frame_plan.md` 的 `Pre-Board Convergence / Board 前收敛` 中，并带入 `direction_board.html`。

### Review Definition / 审查定义

`direction_board.html` is reviewed only when one of these is true:

1. User explicitly approves the board.
2. Agent opens the HTML in a browser or equivalent rendered inspection and records review notes confirming:
   - required sections exist
   - local images/assets load or missing assets are explicitly listed
   - long screenshot modules are constrained-height and manually scrollable
   - no critical console errors block review
   - ready gate is visible and says `ready` or `blocked`
   - compact production handoff section exists but does not dominate the board
   - any changes are synced back to Markdown or marked pending

`direction_board.html` 只有在以下任一条件满足时才算 reviewed：

1. 用户明确批准。
2. Agent 用浏览器或等价渲染检查打开 HTML，并记录审查说明，确认：
   - 必需区块存在
   - 本地图片/素材可加载，或缺失素材被明确列出
   - 长截图模块限高且可手动滚动
   - 没有阻塞审查的关键 console error
   - ready gate 可见，且明确显示 `ready` 或 `blocked`
   - compact production handoff 小节存在，但没有压过视觉方向板主体
   - 修改已同步回 Markdown 或标记 pending

### HyperFrames Handoff Contract / HyperFrames 交接契约

After the harness is complete, `harness/04_render_plan.md` is the only allowed handoff into the `hyperframes` skill.

Harness 完成后，`harness/04_render_plan.md` 是进入 `hyperframes` skill 的唯一交接入口。

- Do not reinterpret `01_intake.md` directly once `04_render_plan.md` exists.
- Do not invent new pages, assets, visual styles, or transitions during final composition generation.
- If final composition work reveals a direction problem, return to the harness Markdown, update it, regenerate/review the board, then update `04_render_plan.md`.
- Preserve director metadata in final HTML: `data-page-id`, `data-critical-frame`, `data-director-intent`, and `data-continuity-anchor` where applicable.

- 一旦 `04_render_plan.md` 存在，不要重新直接解读 `01_intake.md`。
- 最终 composition 生成阶段不要发明新页面、新素材、新视觉风格或新转场。
- 如果最终 composition 阶段发现方向问题，回到 harness Markdown 更新，重新生成/审查 board，再更新 `04_render_plan.md`。
- 最终 HTML 中尽量保留编导元数据：`data-page-id`、`data-critical-frame`、`data-director-intent`、`data-continuity-anchor`。

### 1. Intake / 意图摄取

Create `01_intake.md` using `templates/01_intake.md`.

使用 `templates/01_intake.md` 创建 `01_intake.md`。

Capture raw intent, target platform, output format, assets, style preferences, constraints, and things to avoid. Do not over-structure too early.

记录原始想法、目标平台、产物形式、已有素材、风格偏好、硬约束和禁止项。不要过早过度结构化。

### 2. Design Direction / 设计方向

Create `02_design_direction.md` using `templates/02_design_direction.md`.

使用 `templates/02_design_direction.md` 创建 `02_design_direction.md`。

Design direction must happen before critical-frame planning. It selects one primary local Design Router system and optionally one accent/reference system, then translates that choice into concrete video-useful rules.

设计方向必须先于关键帧计划。它选择一个本地 Design Router 主风格，并可选一个辅助/参考风格，然后把选择转成适合视频制作的具体规则。

Routing order:

1. If the project has `design.md` or `DESIGN.md`, read it first and treat it as brand source of truth.
2. Read `docs/design-router/README.md` for the local router map.
3. Use `docs/design-router/design-systems/core/` for the default candidate systems.
4. Use `docs/design-router/design-systems/reference/xiaohongshu/` only as reference/accent, not as a default primary route.
5. Use at most one primary design system plus one optional accent/reference system.

路由顺序：

1. 如果项目存在 `design.md` 或 `DESIGN.md`，先读它，并把它作为品牌事实源。
2. 读取 `docs/design-router/README.md` 理解本地 router map。
3. 默认候选来自 `docs/design-router/design-systems/core/`。
4. `docs/design-router/design-systems/reference/xiaohongshu/` 只能作为参考/辅助，不作为默认主路由。
5. 最多使用一个主设计系统，加一个可选辅助/参考系统。

### 3. Critical Frame Plan / 关键帧计划

Create `03_critical_frame_plan.md` using `templates/03_critical_frame_plan.md`.

使用 `templates/03_critical_frame_plan.md` 创建 `03_critical_frame_plan.md`。

For every Page, define:

- Page content / 页面内容
- Entry Frame / 进入帧
- Hero Frame / 主视觉帧
- Transition Frame / 转场帧
- Simple animation notes / 简单动画说明
- Continuity contract / 连续性约束
- Risks and open questions / 风险与未决问题

### 4. Direction Board HTML / 方向审查 HTML

Generate or author `direction_board.html` from the confirmed sections, assets, mainline, and Markdown plan.

根据 Markdown 计划生成或编写 `direction_board.html`。

The board must be an asset-first visual Direction Board. It should show a visual contact sheet, asset wall, storyboard, and critical-frame mockups first. Production readiness is only a compact mandatory section near the end, not the board's main structure.

该 HTML 必须是 asset-first 视觉方向板。它首先展示 visual contact sheet、asset wall、storyboard 和 critical-frame mockups。Production readiness 只是靠后的小型必填章节，不是 board 的主结构。

Follow `references/direction-board-contract.md` and `references/visual-board-patterns.md`. Treat the rough board example in `examples/asset-first-board/` as a structure reference, not content to copy.

遵守 `references/direction-board-contract.md` 和 `references/visual-board-patterns.md`。把 `examples/asset-first-board/` 中的 rough board example 当作结构参考，不复制具体内容。

### 5. Review and Sync / 审查与同步

Review the HTML artifact before writing HyperFrames composition HTML.

在编写 HyperFrames composition HTML 之前，先审查 HTML artifact。

If changes are made in the HTML or in review notes, sync them back to `02_design_direction.md` or `03_critical_frame_plan.md`.

如果 HTML 或审查意见中发生修改，必须同步回 `02_design_direction.md` 或 `03_critical_frame_plan.md`。

### 6. Render Plan / 渲染计划

Create `04_render_plan.md` using `templates/04_render_plan.md` only after the direction board is reviewed or explicitly waived by the user.

只有在 direction board 已审查，或用户明确豁免后，才用 `templates/04_render_plan.md` 创建 `04_render_plan.md`。

This file is the handoff to the HyperFrames generation agent.

这个文件是给 HyperFrames 生成 Agent 的交接文件。

## Output Folder / 输出目录

For each run, use a small local folder:

```text
harness/
  01_intake.md
  02_design_direction.md
  03_critical_frame_plan.md
  direction_board.html
  04_render_plan.md
```

每次运行使用一个小的本地目录，不要引入数据库或复杂项目结构。

## Quality Gate / 质量门

Before final HyperFrames generation, verify:

- `01_intake.md` exists.
- `02_design_direction.md` exists and cites the chosen Design Router source.
- `03_critical_frame_plan.md` exists.
- `direction_board.html` exists and is reviewable.
- Direction board shows the design-router selection and concrete visual rules.
- Direction board is asset-first and visual-first; text explains visuals, not the reverse.
- Direction board follows Pattern A in `references/visual-board-patterns.md`: visual contact sheet, asset wall, section storyboard, critical-frame mockups, visual route, motion strip, compact production handoff, review/sync.
- Pre-board convergence choices for sections, assets, and mainline are recorded.
- Scope classification is recorded for any post-review edit.
- Mainline lock is respected; layout-only edits do not rewrite narrative truth.
- Every Page has Entry / Hero / Transition frames unless explicitly waived.
- Every Page has simple animation notes.
- Every Page has a concrete continuity contract.
- HTML review changes are synced back to Markdown or clearly marked as pending.
- `04_render_plan.md` exists only after review or explicit waiver.
- Final `index.html` generation uses `04_render_plan.md` as the handoff source.

生成最终 HyperFrames 前必须确认以上事项。

## Non-goals / 不做什么

Do not add in the MVP:

- Web App
- CLI
- Database
- Complex template router
- Automatic asset management
- Full WYSIWYG bidirectional editor
- Automatic final render

MVP 只验证一个默认 critical-frame 模板是否能提升 HyperFrames 输出质量。只接入本地 Design Router 做视觉选择，不做复杂 router 或复杂系统。

## Failure Modes / 失败模式

If any of these happen, stop and repair the harness artifacts before final HyperFrames generation:

- A design route is selected without citing a local `docs/design-router/` source.
- Visual principles are generic adjectives instead of executable rules.
- Assets appear in the board that were not listed in intake or source notes.
- A Page lacks Entry / Hero / Transition frames without explicit waiver.
- Continuity says only “smooth”, “dynamic”, or “natural” without naming a concrete visual anchor.
- `direction_board.html` is not opened/reviewed but `04_render_plan.md` is created.
- `direction_board.html` becomes a long production/compliance document instead of an asset-first visual board.
- Agent generates `direction_board.html` before confirming sections, assets, and mainline with the user.
- Agent treats layout-only feedback as permission to rewrite sections, hook, conclusion, claims, or page meaning.
- Agent changes the mainline without explicit user approval after the board or mainline is locked.
- Final composition introduces new pages or styles not in `04_render_plan.md`.

出现以下情况时，停止进入最终 HyperFrames 生成，先修复 harness artifact：

- 选择设计路线但没有引用本地 `docs/design-router/` 来源。
- 视觉原则只是泛泛形容词，不是可执行规则。
- board 中出现 intake 或 source notes 没有列出的素材。
- Page 缺少 Entry / Hero / Transition frames，且没有明确豁免。
- Continuity 只写“顺滑”“动态”“自然”，没有具体视觉锚点。
- `direction_board.html` 未打开/未审查，却创建了 `04_render_plan.md`。
- `direction_board.html` 变成长篇 production/compliance 文档，而不是 asset-first 视觉方向板。
- Agent 没有先向用户确认章节、素材、主线，就生成 `direction_board.html`。
- Agent 把仅版式反馈当作重写章节、hook、结论、论点或页面含义的许可。
- Board 或主线锁定后，Agent 未经用户明确批准就改变主线。
- 最终 composition 引入了 `04_render_plan.md` 中没有的新页面或新风格。

## HyperFrames Default Visual Principles / HyperFrames 默认视觉原则

Use these when the user has not provided stricter brand rules:

- HTML is the source of truth for the final video composition.
- Build the most-visible hero layout first; animation connects validated visual states.
- Prefer strong hierarchy, readable typography, editorial spacing, and clear asset roles over decorative complexity.
- Use warm editorial paper, strong rules/dividers, and restrained accent color as the fallback mood when no stronger style is selected.
- Preserve real screenshots and source assets as primary visual evidence; do not redraw them unless the user asks.
- For long webpage screenshots in `direction_board.html`, use constrained-height manual scroll containers, not auto-scroll animation.
- In final short-video `index.html` compositions, source asset cards should not sit as static screenshots by default; use source MP4s, internal scroll, pan, or a crop drift so the viewer can feel the material moving.
- Motion notes come before GSAP implementation. They should describe entrance, emphasis, camera/scale, and transition intent in plain language.
- Multi-page videos need transitions between pages; avoid disconnected slide cuts.
- Before final render, run the relevant HyperFrames checks: `npx hyperframes lint`, `npx hyperframes validate`, and `npx hyperframes inspect` when practical.

当用户没有提供更严格的品牌规则时，使用这些默认原则：

- HTML 是最终视频 composition 的 source of truth。
- 先建立最可见的 hero layout；动画用于连接已确认的视觉状态。
- 强层级、可读字体、编辑式留白、清晰素材角色，优先于装饰复杂度。
- 没有更强风格时，默认使用温暖纸感、强分隔线、克制强调色的 editorial mood。
- 真实截图和源素材是主要视觉证据；除非用户要求，不要重绘成假 UI。
- `direction_board.html` 中的长网页截图使用限高可手动滚动容器，不使用自动滚动动画。
- 最终短视频 `index.html` composition 里，素材卡默认不能只是静态截图；要优先使用源 MP4、内部 scroll、pan 或裁切漂移，让观众能感到素材在动。
- 动效说明先于 GSAP 实现，用自然语言描述进入、强调、镜头/缩放和转场意图。
- 多页视频需要页间转场，避免像 PPT 一样硬切。
- 最终渲染前尽量运行相关 HyperFrames 检查：`npx hyperframes lint`、`npx hyperframes validate`，以及可行时的 `npx hyperframes inspect`。

## Related Spec / 相关 Spec

Primary source spec:

- `specs/2026-05-13-hyperframes-direction-harness-mvp-spec.md`

Board pattern references:

- `references/direction-board-contract.md`
- `references/visual-board-patterns.md`
- `examples/asset-first-board/README.md`
