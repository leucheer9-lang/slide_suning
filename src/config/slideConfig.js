// ——— 篇章5 (现有页面) ———
import Page_ProposalNav from '../pages/Page_ProposalNav';
import Page_SWOTAnalysis from '../pages/Page_SWOTAnalysis';
import Page_SWOTStrategy from '../pages/Page_SWOTStrategy';
import Page_SWOTAnalysisFotile from '../pages/Page_SWOTAnalysisFotile';
import Page_ArticleDataAnalysisHisense from '../pages/Page_ArticleDataAnalysisHisense';
import Page_ArticleGenerationDemo from '../pages/Page_ArticleGenerationDemo';
import Page_ArticleDataAnalysisStrategy2 from '../pages/Page_ArticleDataAnalysisStrategy2';
import Page_ArticleGenerationDemo2 from '../pages/Page_ArticleGenerationDemo2';
import Page_ArticleGenerationDemo3 from '../pages/Page_ArticleGenerationDemo3';
import Page_DeliveryStrategy_Platform from '../pages/Page_DeliveryStrategy_Platform';
import Page_DeliveryStrategy_Combo from '../pages/Page_DeliveryStrategy_Combo';
import Page_SectionCore from '../pages/Page_SectionCore';
import Page_SectionBroad from '../pages/Page_SectionBroad';
import Page_SectionExclusive from '../pages/Page_SectionExclusive';
import Page_SectionSummary from '../pages/Page_SectionSummary';
import Page_GeoReport_CoreSummary from '../pages/Page_GeoReport_CoreSummary';
import Page_GeoReport_OverallProfile from '../pages/Page_GeoReport_OverallProfile';
import Page_GeoReport_SearchInsight from '../pages/Page_GeoReport_SearchInsight';
import Page_GeoReport_Attribution from '../pages/Page_GeoReport_Attribution';
import Page_StrategyOutline from '../pages/Page_StrategyOutline';
import Page_PlatformFilterIntro from '../pages/Page_PlatformFilterIntro';
import Page_PlatformFilterLogic from '../pages/Page_PlatformFilterLogic';
import Page_PlatformFilterLogicB from '../pages/Page_PlatformFilterLogicB';
import Page_PlatformFilterLogicC from '../pages/Page_PlatformFilterLogicC';
import Page_PlatformFilterLogicC2 from '../pages/Page_PlatformFilterLogicC2';
import Page_PlatformFilterConclusion from '../pages/Page_PlatformFilterConclusion';
import Page_ArticleTypeAnalysis from '../pages/Page_ArticleTypeAnalysis';
import Page_ArticleTypeDetails from '../pages/Page_ArticleTypeDetails';
import Page_ArticleQuantityAnalysis from '../pages/Page_ArticleQuantityAnalysis';

// ——— 篇章1: 品牌信息调研 (Pages_Before) ———
import PB_ProposalNav from '../Pages_Before/Page_ProposalNav';
import PB_TargetAudience from '../Pages_Before/Page_TargetAudience';
import PB_PainPoints from '../Pages_Before/Page_PainPoints';
import PB_Brands from '../Pages_Before/Page_Brands';
import PB_TargetProduct from '../Pages_Before/Page_TargetProduct';
import PB_TargetUser from '../Pages_Before/Page_TargetUser';
import PB_CoreSellingPainPoints from '../Pages_Before/Page_CoreSellingPainPoints';

// ——— 篇章2: GEO体检报告 (Pages_Before) ———
import PB_GeoReportOverview from '../Pages_Before/Page_GeoReportOverview';
import PB_GeoReportOverview2 from '../Pages_Before/Page_GeoReportOverview2';
import PB_GeoReportDashboard from '../Pages_Before/Page_GeoReportDashboard';
import PB_GeoReportEntries from '../Pages_Before/Page_GeoReportEntries';
import PB_GeoReportEntries2 from '../Pages_Before/Page_GeoReportEntries2';
import PB_GeoReportEntries3 from '../Pages_Before/Page_GeoReportEntries3';
import PB_GeoReportCompetitors from '../Pages_Before/Page_GeoReportCompetitors';
import PB_GeoReportCompetitors2 from '../Pages_Before/Page_GeoReportCompetitors2';
import PB_GeoReportCompetitors3 from '../Pages_Before/Page_GeoReportCompetitors3';
import PB_GeoReportSources from '../Pages_Before/Page_GeoReportSources';
import PB_GeoReportSources2 from '../Pages_Before/Page_GeoReportSources2';
import PB_GeoReportSentiment_Pre from '../Pages_Before/Page_GeoReportSentiment_Pre';
import PB_GeoReportSentiment from '../Pages_Before/Page_GeoReportSentiment';

// ——— 篇章3: GEO优化 (Pages_Before) ———
import PB_GeoOptKeywords from '../Pages_Before/Page_GeoOptKeywords';
import PB_GeoOptKeywordsSocial from '../Pages_Before/Page_GeoOptKeywordsSocial';
import PB_GeoOptKeywordsClassify from '../Pages_Before/Page_GeoOptKeywordsClassify';
import PB_GeoOptKeywordsClassify2 from '../Pages_Before/Page_GeoOptKeywordsClassify2';
import PB_GeoOptKeywordsClassify3 from '../Pages_Before/Page_GeoOptKeywordsClassify3';
import PB_GeoOptKeywordsCleaning1 from '../Pages_Before/Page_GeoOptKeywordsCleaning1';
import PB_AgentDataFlow from '../Pages_Before/Page_AgentDataFlow';
import PB_BrandKnowledgeBase from '../Pages_Before/Page_BrandKnowledgeBase';
import PB_UserReviewAnalysis from '../Pages_Before/Page_UserReviewAnalysis';
import PB_ArticleDataAnalysis from '../Pages_Before/Page_ArticleDataAnalysis';

// ——— 篇章4: 阶段性复盘报告 (Pages_Before) ———
import PB_CampaignDataAnalysis from '../Pages_Before/Page_CampaignDataAnalysis';
import PB_CampaignDataAnalysis2 from '../Pages_Before/Page_CampaignDataAnalysis2';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: '方太冰箱',
    subtitle: 'GEO\n年度规划方案',
    date: 'March 2026',
  },

  {
    type: 'toc',
    title: '方案目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO SERVICE GUIDE',
  },

  // ══════════════════════════════════════════════════════════
  // ——— 篇章1: 品牌信息调研 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '品牌信息调研', subtitle: 'BRAND DISCOVERY', backgroundImage: '/' },

  { type: 'section', title: '目标行业信息' },
  { type: 'page', title: '冰箱是什么？', component: PB_ProposalNav },
  { type: 'page', title: '卖给谁？', component: PB_TargetAudience },
  { type: 'page', title: '冰箱的主要品牌', component: PB_Brands },

  { type: 'section', title: '目标产品信息' },
  { type: 'page', title: '方太冰箱X20.i是什么？', component: PB_TargetProduct },
  { type: 'page', title: '方太冰箱X20.i卖给谁？', component: PB_TargetUser },
  { type: 'page', title: '核心卖点及痛点', component: PB_CoreSellingPainPoints },

  // ══════════════════════════════════════════════════════════
  // ——— 篇章2: 词条选择 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '词条选择', subtitle: 'KEYWORD SELECTION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },

  { type: 'section', title: '数据采集' },
  { type: 'page', title: '百度搜索数据', },
  { type: 'page', title: '各平台热搜词', component: PB_GeoOptKeywords },
  { type: 'page', title: '社媒数据', component: PB_GeoOptKeywordsSocial },
  { type: 'page', title: '数据导入分析', },

  { type: 'section', title: '词条穷举及清洗' },
  { type: 'page', title: '词条穷举及清洗', components: [PB_GeoOptKeywordsClassify, PB_GeoOptKeywordsClassify2] },

  { type: 'section', title: '词条分类及拓展' },
  { type: 'page', title: '词条分类及拓展', component: PB_GeoOptKeywordsClassify3 },

  { type: 'section', title: '词条确定' },
  { type: 'page', title: '词条确定', component: PB_GeoOptKeywordsCleaning1 },

  // ══════════════════════════════════════════════════════════
  // ——— 篇章3: GEO体检报告 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: 'GEO体检报告', subtitle: 'GEO HEALTH CHECK', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },

  { type: 'section', title: '数据概要' },
  { type: 'page', title: '总览', component: PB_GeoReportDashboard },
  { type: 'page', title: '词条', components: [PB_GeoReportEntries, PB_GeoReportEntries2, PB_GeoReportEntries3] },
  { type: 'page', title: '竞品', components: [PB_GeoReportCompetitors, PB_GeoReportCompetitors2, PB_GeoReportCompetitors3] },
  { type: 'page', title: '引用源', components: [PB_GeoReportSources, PB_GeoReportSources2] },
  { type: 'page', title: '正负向分析', components: [PB_GeoReportSentiment_Pre, PB_GeoReportSentiment] },

  { type: 'section', title: '数据报告' },
  { type: 'page', title: '核心摘要', component: Page_GeoReport_CoreSummary },
  { type: 'page', title: '大盘画像', component: Page_GeoReport_OverallProfile },
  { type: 'page', title: '搜索词洞察', component: Page_GeoReport_SearchInsight },
  { type: 'page', title: '归因诊断', component: Page_GeoReport_Attribution },
  { type: 'page', title: '战略与 GEO 行动建议', component: Page_StrategyOutline },

  // ══════════════════════════════════════════════════════════
  // ——— 篇章4: GEO优化 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: 'GEO优化', subtitle: 'GEO OPTIMIZATION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },

  { type: 'section', title: 'GEO战略规划' },
  { type: 'page', title: '三个板块介绍', components: [Page_SectionCore, Page_SectionBroad, Page_SectionExclusive] },
  { type: 'page', title: '总结', component: Page_SectionSummary },

  { type: 'section', title: '综合大词如何执行' },
  { type: 'page', title: '方太和卡萨帝 SWOT 分析', components: [Page_SWOTAnalysis, Page_SWOTAnalysisFotile, Page_SWOTStrategy] },
  { type: 'page', title: '两个内容策略', components: [Page_ArticleDataAnalysisHisense, Page_ArticleGenerationDemo, Page_ArticleDataAnalysisStrategy2, Page_ArticleGenerationDemo2, Page_ArticleGenerationDemo3] },
  { type: 'page', title: '两个投放策略', components: [Page_DeliveryStrategy_Combo, Page_DeliveryStrategy_Platform] },

  // ══════════════════════════════════════════════════════════
  // ——— 篇章5: 数据量化分析 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '数据量化分析', subtitle: 'DATA QUANTIFICATION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },

  { type: 'section', title: '投放平台量化分析' },
  { type: 'page', title: '筛选逻辑总览', component: Page_PlatformFilterIntro },
  { type: 'page', title: '筛选过程', components: [Page_PlatformFilterLogic, Page_PlatformFilterLogicB, Page_PlatformFilterLogicC, Page_PlatformFilterLogicC2] },
  { type: 'page', title: '筛选结论', component: Page_PlatformFilterConclusion },

  { type: 'section', title: '投放文章量化分析' },
  { type: 'page', title: '投放文章类型', components: [Page_ArticleTypeAnalysis, Page_ArticleTypeDetails] },
  { type: 'page', title: '投放文章数量', component: Page_ArticleQuantityAnalysis },

  // ══════════════════════════════════════════════════════════
  // ——— 篇章6: 阶段性复盘报告 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '阶段性复盘报告', subtitle: 'PHASED REVIEW REPORT', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '系统回看' },
  { type: 'page', title: '系统回看当前GEO效果与问题', component: PB_CampaignDataAnalysis },
  { type: 'section', title: '重构下一阶段目标' },
  { type: 'page', title: '重构下一阶段GEO优化目标', component: PB_CampaignDataAnalysis2 },


];
