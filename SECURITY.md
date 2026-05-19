# Security Policy / 安全政策

## Changelog / 变更日志

| Time / 时间 | Author / 作者 | Change / 变更 |
|---|---|---|
| 2026-05-18 00:00 | Sisyphus | Added public security policy and V1 static safety boundaries. |

## Supported Scope / 支持范围

V1 is a static local workflow: Markdown, HTML, CSS, JavaScript, and JSON. There should be no backend, auth system, database, analytics, tracking script, remote provider SDK, or required network call.

V1 是静态本地流程：Markdown、HTML、CSS、JavaScript、JSON。不应包含后端、登录系统、数据库、分析追踪脚本、远程供应商 SDK 或必需网络请求。

## Reporting / 报告问题

Open a GitHub security advisory or private issue if available. If not, open a normal issue without including secrets or exploit payloads that expose private data.

优先使用 GitHub security advisory 或私有 issue。若不可用，提交普通 issue，但不要包含密钥或会暴露私人数据的攻击载荷。

## Do Not Include / 不要提交

- API keys, tokens, passwords, cookies, private provider configuration. / API key、token、密码、cookie、私有供应商配置。
- Real customer data or private review comments. / 真实客户数据或私有审查评论。
- `.env`, `.sisyphus/`, `.worktree-id`, credentials, private local paths. / `.env`、`.sisyphus/`、`.worktree-id`、凭证、私有本地路径。

## Static Comment Layer / 静态评论层

The comment layer stores review comments in browser `localStorage` and exports JSON. Treat exported comments as project planning data and review them before publishing.

评论层把审查评论保存在浏览器 `localStorage`，并导出 JSON。导出的评论属于项目计划数据，公开前必须审查。

Run `node scripts/validate-static.js` before release.

发布前运行 `node scripts/validate-static.js`。
