# 01 Intake / 意图摄取

## Project / 项目

- Project title / 项目标题: **HTML + HyperFrames 6-frame final-video harness**
- Working folder / 工作目录: `examples/html-hyperframes-video-project/`
- Harness folder / Harness 目录: `harness/`
- Date / 日期: 2026-05-16
- Owner / 负责人: Sean

## Gate Mode / 门槛模式

- Request type / 请求类型: **new video direction harness**
- Harness required / 是否必须运行 Harness: **yes**
- Bypass reason if small edit / 如小修跳过，原因: N/A
- Blocking facts still needed / 仍缺少的阻塞事实: **none** — user explicitly approved 6 frames, Figma style, no subtitles, no voice, title-only text, and visible source-card motion.

## Raw Intent / 原始想法

- User idea / 用户想法: 用 HyperFrames Direction Harness 根据最终口播文案做一个约 3 分钟的 6 个关键帧脚本；生成风格用 Figma；不要字幕、不要语音，只要标题类文字和视觉素材；素材卡要有明显的 scroll/pan/video motion。
- Core message / 核心信息: AI 时代，Markdown 会退到后台；网页式 HTML/视觉脚本会成为人和 AI 对齐复杂内容、素材、关键帧、协作和视频生成的新工作台。
- Desired viewer takeaway / 希望观众带走什么: 这不是单纯讲 HTML，而是在展示一个新的视频生产范式：网页式编导台 → HyperFrames 粗版视频。
- What should not be misunderstood / 不能被误解的点:
  - 不做最终视频。
  - 不加字幕、不加旁白、不做 TTS。
  - 不要做高文字密度报告页。
  - 不要把第 1 帧设计成正式内容；用户后期会加人为内容。
  - “Capacity”按上下文理解为 Andrej Karpathy 截图；“Tariki”统一为 Thariq。

## Output Target / 产物目标

- Output type / 产物类型: short-video direction board / 短视频方向板
- Platform / 平台: Douyin / Xiaohongshu vertical video
- Aspect ratio / 画幅: **9:16, 1080×1920 vertical**
- Approximate duration / 预计时长: ~3 minutes, 6 key frames with long holds
- Language / 语言: Chinese-first labels, English terms when source titles require
- Captions / 字幕: **none**

## Existing Materials / 已有素材

| Asset / 素材 | Type / 类型 | Path or URL / 路径或链接 | Local copy path / 本地副本路径 | What it shows / 内容 | Possible role / 可能作用 | Risk / 风险 |
|---|---|---|---|---|---|---|
| Thariq X first panel | video | `https://x.com/trq212/status/2052809885763747935` | `../assets/thariq_x_first_panel_render.mp4` | Thariq article first panel / HTML effectiveness article | Frame 02 Hook | X metrics are live; use as visual evidence, not source of exact numbers. |
| Karpathy screenshot | image | user-provided screenshot | `../assets/karpathy_html_quote.png` | Andrej Karpathy quote about HTML / visual information density | Frame 03 authority | Long screenshot; crop to readable central quote, not full text wall. |
| HTML effectiveness site scroll | video | `https://thariqs.github.io/html-effectiveness/` | `../assets/html_effectiveness_site_scroll_render.mp4` | Thariq examples page | Frame 04 examples | Use as visual proof, not as a text reading surface. |
| Tom / html-anything X video | video | `https://x.com/tuturetom/status/2054860276088860819` | `../assets/tuturetom_main_video_10s_render.mp4` | Tom Huang html-anything post with embedded video | Frame 05 market signal | Must be a full-size card; crop away side chrome and lower blank area. |
| Figma direction board scroll | video | local harness output | `../assets/figma_direction_board_scroll_render.mp4` | User's current HTML visual workbench | Frame 06 main workflow proof | Must read as user's workflow, not generic web demo. |
| Polished voiceover | text | source-project transcript, not committed to the public package | not committed | Current narration source | Text reference only | Do not turn this into subtitles. |

## Source Notes / 来源说明

- Source documents or links read / 已读取来源文档或链接:
  - source-project intake and source manifest from the original local run
  - source-project polished voiceover transcript, used as reference only
  - `docs/design-router/design-systems/core/figma/DESIGN.md`
- Claims that must remain source-supported / 必须有来源支撑的论点:
  - Thariq article is the core hook source.
  - Karpathy screenshot supports visual/audio information-density argument.
  - html-anything/Tom X video is the market/open-source signal.
  - User's workflow proof is the existing HTML direction board / HyperFrames harness asset.
- Things inferred by agent / Agent 推断内容:
  - “Capacity” means Karpathy screenshot based on the user's prior text.
  - Frame 04 can use Thariq article imagery or HTML effectiveness examples; direction board should show the chosen default as Thariq/examples page.

## Style Preferences / 风格偏好

- Visual style / 视觉风格: **Figma-inspired design canvas**, low text density, product-design storyboard, big title cards.
- Typography preference / 字体偏好: Figma-like sans; large display titles; mono labels sparingly.
- Color preference / 色彩偏好: monochrome UI shell with restrained Figma accent dots / small color handles.
- Motion preference / 动效偏好: slow holds, visible source-card scroll/pan/video motion, subtle slide/scale; frame changes can be long pauses.
- Reference examples / 参考例子: Figma Design Router, user’s existing direction-board assets.
- Existing `design.md` / `DESIGN.md` path if any / 如有现成设计文档，路径: none for this run.
- Candidate Design Router style / 候选 Design Router 风格: `docs/design-router/design-systems/core/figma/DESIGN.md`
- Visual anti-patterns / 视觉反模式: dense text wall, tutorial UI, production checklist, subtitles, narration waveform, generic AI neon look.

## Constraints / 约束

- Hard constraints / 硬约束:
  - Exactly 6 key frames.
  - Every key frame is a true 9:16 short-video artboard, not a horizontal webpage layout.
  - Frame 01 is placeholder only; do not over-design.
  - No subtitles.
  - No voice/audio.
  - Use title-like text only.
  - Figma style.
  - Low information density and low text density.
- Platform constraints / 平台约束: vertical short-video safe area; large titles readable on phone.
- Asset constraints / 素材约束:
  - Use accepted `video/cut/*.mp4` and screenshot assets from the intake package.
  - Tom/html-anything is Frame 05; the user's workflow HTML is Frame 06.
  - Do not add new external assets.
- Time constraints / 时间约束: ~3-minute video can hold on each frame; source cards still need visible internal motion.

## Things To Avoid / 禁止项

- Avoid content / 内容不要: explaining every line of the voiceover, adding subtitles, adding AI-ish summary bullets.
- Avoid visual style / 视觉不要: dense dashboard, dark hacker aesthetic, neon AI template, PPT slide deck, long text blocks.
- Avoid motion / 动效不要: auto-scroll overload, static-only source cards, rapid cuts, constant kinetic typography.
- Avoid interpretation / 理解不要偏到: “HTML tutorial”, “Figma tutorial”, “HyperFrames feature demo only”.

## Open Questions / 未决问题

- [x] Frame count: user approved 6 after splitting the final beat.
- [x] Duration target: user locked ~3 minutes with long pauses.
- [x] Style: user locked Figma.
- [x] Text/audio: user locked no subtitles, no voice, title-like text only.
