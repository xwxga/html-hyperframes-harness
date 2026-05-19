# Contributing / 贡献指南

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-18 00:00 | Sisyphus | Added public contribution workflow for the reusable HyperFrames Harness package. |

## Principles / 原则

This repository is a reusable pre-generation harness for HyperFrames. Keep changes small, static, reviewable, and provider-neutral.

本仓库是可复用的 HyperFrames 生成前 Harness。修改应保持小型、静态、可审查、供应商中立。

- Markdown remains the harness source of truth before render handoff. / 渲染交接前，Markdown 是 Harness 的事实源。
- `direction_board.html` is a review artifact, not a backend app. / `direction_board.html` 是审查 artifact，不是后端应用。
- `04_render_plan.md` is the only final HyperFrames handoff. / `04_render_plan.md` 是唯一最终 HyperFrames 交接。
- V1 must stay static: HTML, CSS, JS, Markdown, JSON. / V1 必须保持静态：HTML、CSS、JS、Markdown、JSON。

## Development Flow / 开发流程

1. Create a feature branch. / 创建 feature branch。
2. Update docs and templates bilingually where public-facing. / 公开文档和模板需中英双语更新。
3. Add a changelog entry after the title in every changed Markdown document. / 每个修改过的 Markdown 文档都要在标题后添加变更日志。
4. Run `node scripts/validate-static.js`. / 运行 `node scripts/validate-static.js`。
5. Open `demo/index.html` or `board/direction_board.template.html` locally for manual review when changing board UI. / 修改 board UI 时本地打开 `demo/index.html` 或 `board/direction_board.template.html` 人工审查。

## Scope Boundaries / 范围边界

Do not add backend services, auth, databases, websocket collaboration, provider SDKs, or final render execution to V1.

不要把后端服务、登录、数据库、WebSocket 协作、供应商 SDK 或最终渲染执行加入 V1。

## Local Planning State / 本地计划状态

`.sisyphus/` is local agent state and is intentionally ignored. Do not commit it. If a plan becomes public documentation, rewrite it into `docs/` with secrets and machine-local paths removed.

`.sisyphus/` 是本地 agent 状态，已被有意忽略。不要提交它。如果某个计划需要公开，需改写到 `docs/`，并移除密钥和机器本地路径。
