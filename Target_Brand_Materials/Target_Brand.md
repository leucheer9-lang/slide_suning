项目账号密码：
帐号：chuangweichuangxingu
密码：123456

创维创新谷监测词ToC：https://lingjingzhiwei.feishu.cn/base/QaLLbqncLaImfIsCyaVc4jUhnqf?table=tblS3186bnjUKxWn&view=vewHunEQRb
创维创新谷监测词ToB：https://lingjingzhiwei.feishu.cn/base/QaLLbqncLaImfIsCyaVc4jUhnqf?table=tblrbSnDGmm9f2Nh&view=vew8jjSIlm

创维创新谷词条穷举及清洗：https://lingjingzhiwei.feishu.cn/base/K7ejbO980a7AbTsHtoPcVPaFncb?table=tblz1tkSuBnarlok&view=vewLLD9Kl4
创维创新谷词条分类及拓展：https://lingjingzhiwei.feishu.cn/base/K7ejbO980a7AbTsHtoPcVPaFncb?table=tblZQhosFtjOWxFb&view=vew9tj5izU
创维创新谷词条确定：https://lingjingzhiwei.feishu.cn/base/K7ejbO980a7AbTsHtoPcVPaFncb?table=tblDhBGsOESMyvUW&view=vewLxdYlOH

---

## 一、品牌体检报告（替换要点）

**数据源**：GEO ONE → `node scripts/fetch-geo-report.mjs --list` / `<project_id>` → `src/data/geoReport_<id>.json`  
（账号用 `GEO_USER` / `GEO_PASS`，可临时改 `.env`；**若**有多项目/多端，各拉各的，别揉数）

**口径（勿混字段）**
| 展示 | 取 |
|------|----|
| 提及率 / 位次 | `stats.brand_mention_rate` / `stats.avg_position` |
| 影响力排名 | `influence` 里 `is_target.rank` |
| 竞品三榜 | `*_ranking_full` / `top1_ranking`（全量榜） |
| 竞品总家数 | `compare.brand_total`（**别数 `*_ranking_full` 的长度**，那是分页后的条数，会被当成总数写错） |
| 平台柱图 / 引用源 / 词条 | `stats.platform_stats` / `citations.*` / `entries.list` |

**改哪些页**：slideConfig「数据分析报告说明 + 词条数据」整段  
BasicInfo、Dashboard×2、Entries、Competitors、Sources

**先分清项目性质，再决定做几套页**（Awada 就是在这里踩过坑）：GEO ONE 里常有两个项目——**优化词**（不带品牌名的品类需求词，是要争的增量）和**监测词**（用户主动点名问品牌，用来体检舆情）。两者不是平级的两端。
- 词条数据**只做优化词一套**。监测词的提及率天然接近 100%、位次接近 1，拿它铺「数据总览 / 词条表现 / 竞品对比 / 引用源」等于自问自答夸自己，客户看了只会问「这在说什么」。
- 监测词的数据只喂三处：正负面两页、篇章1 负面困境页、KPI 页的「负面及错误信息」行。
- KPI 表**不要**给监测词单列交付承诺（别写「20 条品牌词达标不少于 7 条」这类）。只运营优化词一组时，KPI 表就是「优化词 + 负面及错误信息」两行。
- 只有确实存在两组都要运营的词（如某些品牌的 ToC / ToB 两端）时，才加第二套 `*_ToB` 页。
- 术语统一叫**优化词 / 监测词**，别写「品牌词」；章节名只有一套时就叫「词条数据」，不加后缀。

**残留清一下**：搜上一品牌名；`GeoOneApp` 的 brand/avatar/target；`brandBadge` 置空；平台 logo 用 `public/geo-platforms/`；截图用 `last_screenshot_url`。

**正负面**：`node scripts/fetch-geo-sentiment.mjs <project_id> [<project_id> ...]`（内部拉 `/api/sentiments/stats` + `/api/sentiments/negative-answers`）→ 缓存 `src/data/geoSentiment.json`（按 project_id 分组，有几套存几套；换品牌时先删旧文件，脚本是合并写入不会自动清残留）→ 改 `Page_GeoReport_Sentiment_Pre` / `Sentiment`，并在 slideConfig 打开「监测词舆情分析」。

**困境页（偶发性服务事故 / 负面放大）**：同源负向数据，代码页不是 PNG。
| 项 | 规则 |
|----|------|
| 数据 | `geoSentiment.json` 里已有项目的 `negatives.list` **合并** → `src/pages/painpointNegatives.js`（单项目就用一份） |
| 字段 | `entry_name`→词条；`negative_type` / `_label`→类型；`summary`→问题总结；`screenshot_url`→会话截图 |
| 类型标题 | `price_error`→产品价格错误；`product_info_error`→产品信息错误；`negative_answer`→品牌负面信息（缺类型就补字典） |
| 问题页 | `Page_PainPoint4_SalesModel`：白表还原 GEO ONE「负面回答列表」——列 **词条 / 类型 / 问题总结 / 会话截图 / 操作** + 底栏分页；**不要**右上角「设置价格范围」 |
| 解法页 | `Page_PainPoint4_SalesModel_Solution`：固定 **3** 卡；`pickDiverseCases` **优先每种 type 各 1**，不够再补满，类型少不强求 |
| 解法卡结构 | 上：类型标题 + 问题总结；下：橙标「会话截图：」+ `screenshot_url`（宽度铺满、高度裁切即可）；**不显示词条** |
| 文案 | 困境标题/正文/底栏「解法」按新品牌改；搜清上一品牌名 |

> **备注**：不是每个品牌都分 C 端 / B 端（或 ToC / ToB）。数据有几套就拉几套，但**展示几套要看有几组要运营的词**——监测词不算一端，别把它做成第二套词条数据页。只有一套时别硬拆两端，页名/章节标题跟实际口径走即可。

---

## 二、内容策略 + 投放策略（替换要点）

**数据源**：GEO ONE 导出的「投放平台量化分析」Excel，放到 `Target_Brand_Materials/`，按表填页，**不要手编数字**。

### Excel 用哪些 Sheet
| Sheet | 用途 |
|-------|------|
| 引用媒体综合分析 / A组 | A组 Top5 + 各 AI Top10 |
| B组 | 每 AI 平台 5 个差异化站 |
| C组 | **行业头部竞品**命中率 Top5（不是自家品牌） |
| 引用文章Top100分析 | 类别分布 + 综合/品牌命中明细 |
| 表头元信息 | AI 平台列表、自家品牌组、日期 |

### 改哪些页（slideConfig「内容策略 + 投放策略」）
| 页 | 文件 | 填什么 |
|----|------|--------|
| 内容策略·回溯 | `Page_ContentStrategyBacktrack` | Top100 类别分布左右两列、独立文章数、日期 |
| 内容策略·明细 | `Page_ContentStrategyDetails` | 综合 Top 明细 + 提到自家品牌组的明细 |
| 内容策略·拆解/示意 | `Deconstruct`、`Demo`~`Demo4` | 按高引用品类改文案；截图另换 |
| 筛选逻辑总览 | `Page_PlatformFilterIntro` | 四 AI 各 Top10 |
| 筛选过程 A/B/C | `Logic` / `LogicB` / `LogicC` | A交叉 / B差异化 / C竞品命中 |
| 筛选结论 | `Page_PlatformFilterConclusion` | A5 + B代表站 + C5 |
| 按权分发 | `Page_DeliveryStrategy_Combo` | **70%** 小众专业垂直媒体 / **20%** 主流媒体平台 / **10%** 权威官方媒体；站点从 A/B/C 精选池按**媒体属性**重分，不是 A→70、B→20、C→10 硬套 |

### 易错点
1. **C组 = 竞品命中 TOP1 的平台**，不是自家品牌命中。
2. 域名展示改中文站名（查官网标题即可）。
3. 「自家品牌」跟表头品牌组走（含子品牌时右列/右表明细一起跟）。

---

## 三、词条推导（替换要点）

换品牌时：把对应飞书多维表链接丢给 AI，按下面映射整段替换。**不要写死 base/table id**，以当次链接为准。

### 你要提供什么
| 飞书表（按名字认） | 用途 |
|------------------|------|
| 词条穷举及清洗 | 全量穷举 + 清洗打标 |
| 词条分类及拓展 | 清洗后分类结果 |
| 词条确定（及关联提示词） | 终版词条 + 提示词；**若**业务上分多端，再各端各一张（如有的品牌才有 ToC / ToB） |
| 监测词表（若有） | 分组结论里的「监测词」列；没有就别留上一品牌残留 |

### 表格页怎么落（slideConfig「词条推导及确定过程」）
| 飞书表 | 改哪些页 | 怎么拆页 |
|--------|---------|---------|
| 穷举及清洗 | `Page_KeywordExhaustClean`（不够就 +2/+3…） | 约 **17 行/页** 铺满；总条数÷页容量，**均分铺满**，禁止末页只剩几条 |
| 分类及拓展 | `Page_KeywordClassifyExpand`（+2…） | 同上，约 17 行/页 |
| 词条确定 | `Page_KeywordConfirmPrompt`（+2…） | 约 **10 行/页**（行更高）；多页用 `components: [...]` |

字段按表头原样映射（类型/名称/名称解释/词条生成/清洗打标/分类/排序/关联提示词等），标签色跟现有 `T`/`F`/`A`/`B` 字典走，缺的类型补字典项。

### 逻辑示意页（同段，只放样例，不是全表）
| 页 | 从哪张表取 | 怎么选 |
|----|-----------|--------|
| `Page_KeywordGenerationLogic` | 穷举及清洗 | **每个「类别」各取 1 条** |
| `Page_KeywordTaggingLogic` | 穷举及清洗 | **每种「词条清洗打标」各取 1 条**（通常六类） |
| `Page_KeywordExpansionLogic` | 词条确定 | **按表顺序取前若干条**（够铺满示意表即可，带分类/排序/提示词） |

### 词条分组结论
`Page_KeywordGroupingConclusion`：按**实际有的**词条确定表填列——有多端才分列（常见叫法如 C 端 / B 端，以表名为准）；只有一套就单列展示，别空造另一端。监测词有表才填，没表就去掉该列，**禁止留上一品牌的词**。

### 做完自检
搜上一品牌名 / 旧品类词；slideConfig 多页组件数与拆页一致。
