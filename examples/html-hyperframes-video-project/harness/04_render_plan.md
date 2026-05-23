# 04 Render Plan / 生成交接

## Status / 状态

- Direction board / 方向板: `direction_board.html`
- Board review status / Board 审查状态: **reviewed, then layout-updated by user feedback**
- Current deliverable / 当前产物: **`../index.html` only**
- MP4 render / MP4 生成: **full 143 MB render is not committed; use `../renders/html_hyperframes_5frame_preview.mp4` for lightweight review**
- Previous draft MP4 / 上一版 MP4: source-project draft/final renders existed locally, but the public package keeps only a lightweight preview and render notes.
- Output format / 输出格式: **9:16 vertical, 1080×1920**
- Approximate duration / 预计时长: **~3 minutes**
- Audio / 音频: **none**
- Subtitles / 字幕: **none**
- Text style / 文字方式: **title-card text only**
- Visual route / 视觉路线: **Figma**

## Post-Review Change Record / Review 后变更记录

- Scope / 范围: **layout-only with explicit user-approved frame split**
- What changed / 具体修改:
  - Split the old final frame into two full frames: Tom/html-anything first, then the user's HTML direction-board workflow.
  - Made Tom/html-anything a large hero card, not a small inset.
  - Cropped Tom's X recording to retain the tweet body and embedded video while removing the comment/reply area and lower blank space.
  - Switched source cards back to MP4 preview layers so the index shows real scroll/pan/video motion.
  - Recorded visible source-asset motion as a global Harness rule in `docs/skills/hyperframes-direction-harness/SKILL.md`.
- What stayed locked / 保持锁定:
  - Core argument: webpage-style visual scripts carry denser human-readable AI output than Markdown-only documents.
  - Asset set: Thariq article, Karpathy screenshot, Thariq examples, Tom/html-anything, user's workflow HTML.
  - Visual route: Figma-style white canvas, low-density large title cards, no voice, no subtitles.
- Mainline changed? / 主线是否改变: **No narrative change; frame count changed from 5 to 6 with explicit user approval.**
- Markdown sync target / Markdown 同步目标: this render plan and the project Harness skill.

## Locked Mainline / 锁定主线

The current `index.html` must preserve this six-frame order:

1. **Frame 01 — Placeholder**
   - Purpose / 用途: user will add human-made opening content later.
   - Title / 标题: `OPENING SLOT`
   - Asset / 素材: none.
   - Visual rule / 画面规则: blank 9:16 Figma artboard with dashed placeholder.

2. **Frame 02 — Hook**
   - Purpose / 用途: connect the hot Thariq HTML article to the video's hook.
   - Title / 标题: `网页，正在变成新的编导台`
  - Asset / 素材: `../assets/thariq_x_first_panel_render.mp4`
   - Visual rule / 画面规则: large article card, sparse title, visible internal crop/pan motion.

3. **Frame 03 — Karpathy / Authority**
   - Purpose / 用途: support the information-density argument.
   - Title / 标题: `人类吃信息，靠视觉和声音`
   - Asset / 素材: `../assets/karpathy_html_quote.png`
   - Visual rule / 画面规则: readable authority crop with slow crop drift; do not show it as a flat full text wall.

4. **Frame 04 — Thariq Examples**
   - Purpose / 用途: show that the webpage format creates visual examples, not just documents.
   - Title / 标题: `不是文档，是可看的例子`
   - Asset / 素材: `../assets/html_effectiveness_site_scroll_render.mp4`
   - Visual rule / 画面规则: use the examples page as visual proof; keep text low-density and keep the page moving slowly.

5. **Frame 05 — Tom / html-anything**
   - Purpose / 用途: show the open-source/market signal before landing on the user's workflow.
   - Title / 标题: `网页输出，已经有人在做`
   - Asset / 素材: `../assets/tuturetom_main_video_10s_render.mp4`
   - Visual rule / 画面规则: wide X main-content card; keep the tweet body and embedded video, but crop out the surrounding card layer, comment/reply area, and lower blank space.

6. **Frame 06 — My Workflow HTML**
   - Purpose / 用途: land on the user's actual HyperFrames workflow.
   - Title / 标题: `先生成编导台，再生成视频`
   - Asset / 素材: `../assets/figma_direction_board_scroll_render.mp4`
   - Visual rule / 画面规则: full-size workflow card, visible scroll motion, final proof of the HTML direction-board workflow.

## Timing Guide / 节奏建议

Target total / 总长度: about 180 seconds.

| Frame / 帧 | Suggested range / 建议区间 | Motion / 动效 |
|---|---:|---|
| 01 Placeholder | 0:00-0:15 | almost still; user replaces later |
| 02 Hook | 0:15-0:45 | article card slides in, MP4/crop drifts slowly |
| 03 Karpathy | 0:45-1:15 | slow crop drift on quote card |
| 04 Examples | 1:15-1:50 | source MP4 scroll plus gentle card rise |
| 05 Tom / html-anything | 1:50-2:20 | large tweet-card crop, video motion, slow vertical drift |
| 06 Workflow | 2:20-3:00 | workflow MP4 scroll, final long hold |

These are editing handles, not hard cuts. Long holds are intentional.

## Production Rules / 竖屏制作规则

- Every frame is a true 1080×1920 / 9:16 composition.
- Do not compose the video as a horizontal webpage screen recording.
- Keep the phone safe area clean: title in the upper or lower third, hero asset centered.
- Use one large title per frame; no subtitle lines, no transcript text.
- Source assets should have visible motion by default: source MP4 playback, internal scroll, pan, zoom, or crop drift.
- Static first-frame PNGs are fallback only for future render compatibility, not the default preview look.
- The final workflow frame must carry the ending weight.

## Motion & Continuity / 动效连续性

- Global language / 全局语言: Figma canvas pan between artboards.
- Shared visual anchor / 共享视觉锚点: dashed selection outlines, black pill labels, white canvas.
- Text motion / 文字动效: fade in once, then hold.
- Asset motion / 素材动效: visible but calm source movement inside cards; avoid dead static cards.
- Twitter crop / Twitter 裁切: show only the main content column; crop away side chrome and visible blank padding.
- Avoid / 避免: kinetic subtitles, rapid zooms, dense UI explanation, static-only source walls.

## Check Plan / 检查计划

- Run `npm run check` when HyperFrames CLI access is available.
- Do not commit the full render; regenerate it locally with `npm run render` when needed.
- Inspect `../index.html` as the current review artifact:
  - six scenes are present and total duration is 180 seconds.
  - Tom/html-anything is its own wide middle-frame card.
  - Tom crop retains the tweet body and embedded video while removing the comment/reply area and lower blank space.
  - source assets use MP4 layers or crop drift, not static-only first-frame PNGs.
  - no audio, no subtitles, no extra explanatory paragraphs.

## Verification Evidence / 验证记录

- Check command / 检查命令: `npm run check`
  - Result / 结果: passed; 0 lint errors, 1 non-blocking `composition_file_too_large` warning, no console errors, 0 layout issues across 9 timeline samples.
- Snapshot command / 预览截图命令: `npm run snapshot`
  - Result / 结果: source project refreshed review snapshots in `../snapshots/`; the public package keeps snapshots plus a lightweight preview MP4.
- Visual spot check / 视觉抽查: 75% snapshot shows Frame 05 as a full-size Tom/html-anything card with the lower blank area cropped; 100% snapshot shows Frame 06 workflow card with visible direction-board content and no title/card overlap.

## Risks / 风险

- Previous HyperFrames MP4 rendering produced blank areas with direct `<video>` tags; this pass intentionally prioritizes `index.html` browser preview, not MP4 export.
- If a new MP4 is needed later, run a dedicated video-layer compatibility pass instead of assuming this preview HTML will render unchanged.
- Frame 01 is intentionally empty; it will feel unfinished unless replaced in post.

## Final Instruction For HyperFrames / 给 HyperFrames 的最终指令

Generate or revise only the `index.html` preview from this render plan. Preserve the six-frame order, use the listed assets, keep the Figma-style low-density title-card look, use visible source-asset scroll/pan/video motion, and do not add voiceover, subtitles, extra claims, or an MP4 render in this pass.
