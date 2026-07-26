# GEO ONE 数据接入说明（给同事 / Agent）

本文说明本仓库已接入的 **GEO ONE（geotopone）监测数据** 能力，以及苏宁易购项目当前数据状态。拉取代码后请先读完再改幻灯或重新拉数。

## 背景

- 接口脚本自 [Slide_BIMENHUI / Slide_Skyworth](https://github.com/hynpurpose/Slide_BIMENHUI) 迁移而来，对接 `https://api.geotopone.com`。
- 当前业务项目名：**苏宁易购①**，`project_id = 377`。
- 账号侧公司名/登录用户：`suningyigou`（密码不入库，见下方环境变量）。

## 仓库里有什么（均未被 gitignore）

| 路径 | 作用 |
|------|------|
| `scripts/fetch-geo-report.mjs` | 按项目拉取报告 → `src/data/geoReport.json` |
| `scripts/fetch-geo-overview.mjs` | 按「品类/产品优化词·监测词」多项目汇总 → `src/data/geoOverview.json`（需账号下存在对应命名项目） |
| `src/data/geoReport.json` | **已拉取的苏宁易购①报告快照**（可直接给幻灯读） |
| `package.json` scripts | `fetch:geo-overview` / `fetch:geo-report` |

**会被忽略、不会进仓库的：**

- `.env` / `.env.local` / `.env.*.local`（放账号密码）
- `node_modules/`、`dist/`、截图导出产物等

因此：**脚本 + 数据 JSON 会随 git 交给同事**；凭据需各自本地配置。

## 环境变量（拉数前必填）

在项目根目录建 `.env`（勿提交），或导出到 shell：

```env
GEO_API_BASE=https://api.geotopone.com
GEO_USER=suningyigou
GEO_PASS=<向项目负责人索取>
```

可选：

```env
GEO_SELF_BRAND=苏宁易购
```

（用于 overview 脚本统计竞品数时排除本品；未设则尽量用项目的 `target_brand_name`。）

PowerShell 临时示例：

```powershell
$env:GEO_API_BASE = "https://api.geotopone.com"
$env:GEO_USER = "suningyigou"
$env:GEO_PASS = "******"
npm run fetch:geo-report -- 377
```

## 常用命令

```bash
# 拉苏宁易购① 单项目报告（推荐，与当前幻灯数据一致）
npm run fetch:geo-report -- 377

# 指定日期区间
node scripts/fetch-geo-report.mjs 377 --start 2026-07-25 --end 2026-07-25

# 多项目总览（仅当账号下有「品类优化词*」「品类监测词*」及 group 含优化词/监测词的产品项目时可用）
npm run fetch:geo-overview
```

登录后若要核对项目列表，可用 Node 调 `GET /api/projects`；当前账号下可见：`377 | 苏宁易购①`。

## 与后台「数据汇报摘要」对齐方式（易踩坑）

后台摘要卡与脚本日志含义不同，**不要用日志里的「列表条数」当汇总指标**。

以苏宁易购①、区间 2026-07-25～2026-07-25 为例，与后台一致的口径是：

| 摘要项 | 口径 | 在 `geoReport.json` 中的位置 |
|--------|------|------------------------------|
| 执行天数 | 有数据的日期数 | `meta.start_date`～`meta.end_date`（当前仅 1 天） |
| 监测词条 | 词条总数 | `entries.total`（50） |
| 覆盖平台 | 项目监测平台数 | 项目 `monitor_platforms` ↔ `platforms`（DeepSeek / 豆包 / 元宝 / 通义千问，共 4） |
| 总查询 | 会话/查询总数 | `citations.total_conversations` 或 `influence.total_conversations`（200） |
| 引用文章 | 引用次数合计 | `citations.total_citations`（2501）——**不是** `citations.articles` 数组长度 |
| 识别竞品 | Top1 提及品牌全量 | `/api/competitors/top-mention-rate` 的 `total`（84）——**不是** `influence.list` 长度（榜单采样常为 Top5） |
| TOP1 / TOP3 提及率 | 本品在 TopN 榜单中的 `selected_top_mention_rate` | `stats.top1_mention_rate` / `stats.top3_mention_rate`（来自 `/api/competitors/top-mention-rate?top_type=top1\|top3` 的 `is_self` 行；当前苏宁为 0.5% / 12%） |

脚本写入时会额外保存**幻灯用采样列表**（如影响力 Top、文章 Top10）。原先控制台打印的「竞品 5 / 引用文章 10」指的是这些列表长度，不是摘要总数。

另：`citations/articles` 接口的 `total`（去重文章篇数，约 1850）与摘要「引用文章 2501」（`total_citations` 引用次数）不是同一指标，做页时请跟后台摘要对齐用 **2501 / total_citations**。

## 当前快照状态（拉取仓库时）

- 文件：`src/data/geoReport.json`
- 项目：苏宁易购①（id 377）
- 区间：2026-07-25～2026-07-25（监测刚起步时可能只有一天）
- 已含：词条、平台统计、提及率、竞品影响力/对比、引用平台与文章采样等

数据会过期；需要最新数时重新执行 `fetch:geo-report`，不要手改 JSON 里的 `meta.fetched_at` 假装刷新。

## Agent 工作建议

1. 改「现状诊断 / 数据汇报」类页面时，优先读 `src/data/geoReport.json` 的**汇总字段**，再读 list 做表格/榜单。
2. 需要刷新数据：确认本地有 `GEO_*` 环境变量 → `npm run fetch:geo-report -- 377`。
3. 不要把密码写入代码、规则文件或本 Markdown。
4. `fetch-geo-overview.mjs` 依赖多项目命名约定；苏宁账号目前主要是单项目「苏宁易购①」，一般用 **report** 脚本即可。
5. 提交前确认未误加 `.env`；`git status` 中不应出现明文密码文件。

## 相关接口（GEO ONE）

脚本已封装：`POST /login`，以及 cookie 会话下的例如：

- `/api/projects`、`/api/projects/:id/data-dates`
- `/api/platforms`
- `/api/conversations/stats`
- `/api/entries`
- `/api/competitors/influence`、`/compare`、`/top-mention-rate`
- `/api/citations/stats`、`/api/citations/articles`
- `/api/sentiments/stats`（overview 监测词用）

完整请求参数见 `scripts/fetch-geo-*.mjs`。
