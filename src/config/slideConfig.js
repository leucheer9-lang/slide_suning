// ══════════════════════════════════════════════════════════════════════
//  苏宁易购 GEO 方案（全景版）
//  结构对齐「医疗行业 GEO 全景指南」：
//    一、公司介绍          ← Slide_Medical_All（通用）
//    二、GEO行业认知信息差   ← Slide_Medical_All（通用）
//    三、苏宁易购方案        ← 本项目原有内容
//    四、Q&A               ← Slide_Medical_All（通用）
//  医药行业核心门槛为医药专属，本册不收录。
//
//  层级：part（一/二/三…） > chapter（01./02.…） > section > page
//  part 本身不生成幻灯片，仅为章节提供归属与编号；章节编号在每个 part 内独立从 01 起。
// ══════════════════════════════════════════════════════════════════════

// ─────────────── 一、公司介绍 ───────────────
import Page_CompanyIntro from '../pages/Page_CompanyIntro';
import Page_ServiceClients from '../pages/Page_ServiceClients';
import Page_ServiceClients_Sanjiu from '../pages/Page_ServiceClients_Sanjiu';
import Page_CaseStudy_Double_Combined, {
  Page_CaseStudy_Double_Combined_B,
} from '../pages/Page_CaseStudy_Double_Combined';
import Page_CaseStudy_Double_Combined_Health from '../pages/Page_CaseStudy_Double_Combined_Health';
import Page_CaseStudy_Double_Combined_Health_2 from '../pages/Page_CaseStudy_Double_Combined_Health_2';
import Page_CaseStudy_Double_Combined_Health_Sanjiu from '../pages/Page_CaseStudy_Double_Combined_Health_Sanjiu';
import Page_CaseStudy_Double_Combined_2 from '../pages/Page_CaseStudy_Double_Combined_2';
import Page_CaseStudy_Double_Combined_3 from '../pages/Page_CaseStudy_Double_Combined_3';
import Page_TeamEndorsement from '../pages/Page_TeamEndorsement';
import Page_CompanyArchitecture from '../pages/Page_CompanyArchitecture';
import Page_TeamIntro from '../pages/Page_TeamIntro';
import Page_ServiceIntro from '../pages/Page_ServiceIntro';
import Page_Pricing from '../pages/Page_Pricing';
import Page_CoreCapabilities from '../pages/Page_CoreCapabilities';
import Page_GeoMonitorIntro from '../pages/Page_GeoMonitorIntro';
import Page_GeoMonitorModules from '../pages/Page_GeoMonitorModules';
import Page_GeoOneDemo from '../pages/Page_GeoOneDemo';
import Page_GeoMonitor from '../pages/Page_GeoMonitor';
import Page_GeoMonitorDemo from '../pages/Page_GeoMonitorDemo';
import Page_QuantitativeModel from '../pages/Page_QuantitativeModel';
import Page_QuantitativeModel_WhatCanDo from '../pages/Page_QuantitativeModel_WhatCanDo';
import Page_QuantitativeModel_Why from '../pages/Page_QuantitativeModel_Why';
import Page_QuantitativeModelArchitecture from '../pages/Page_QuantitativeModelArchitecture';
import Page_QuantitativeModel_Pic1 from '../pages/Page_QuantitativeModel_Pic1';
import Page_QuantitativeModel_Pic2 from '../pages/Page_QuantitativeModel_Pic2';
import Page_QuantitativeModel_Pic3 from '../pages/Page_QuantitativeModel_Pic3';
import Page_QuantitativeModel_Pic4 from '../pages/Page_QuantitativeModel_Pic4';
import Page_QuantitativeModel_Pic5 from '../pages/Page_QuantitativeModel_Pic5';
import Page_QuantitativeModel_Pic6 from '../pages/Page_QuantitativeModel_Pic6';
import Page_QuantitativeModel_Pic7 from '../pages/Page_QuantitativeModel_Pic7';
import Page_ContentAgentIntro from '../pages/Page_ContentAgentIntro';
import Page_ContentAgentStep_BrandKB, {
  Page_ContentAgentStep_TargetUser,
  Page_ContentAgentStep_CitationPattern,
  Page_ContentAgentStep_CitationPattern_How,
} from '../pages/Page_ContentAgentSteps';
import Page_ContentAgentModules from '../pages/Page_ContentAgentModules';
import Page_ContentAgentDemo from '../pages/Page_ContentAgentDemo';
import { Page_ContentAgentArticleDemo1, Page_ContentAgentArticleDemo2 } from '../pages/Page_ContentAgentArticleDemo';
import Page_UserCommentAnalysis from '../pages/Page_UserCommentAnalysis';
import Page_UserCommentWhy from '../pages/Page_UserCommentWhy';
import Page_UserCommentProblem from '../pages/Page_UserCommentProblem';
import Page_UserCommentHow from '../pages/Page_UserCommentHow';
import Page_UserCommentArchitecture from '../pages/Page_UserCommentArchitecture';
import Page_UserCommentDemo from '../pages/Page_UserCommentDemo';
import Page_SkyworthResearchConclusions from '../pages/Page_SkyworthResearchConclusions';
import Page_ServiceStandard from '../pages/Page_ServiceStandard';

// ─────────── 二、GEO行业认知信息差 ───────────
import Page_ModelVersionChanges from '../pages/Page_ModelVersionChanges';
import Page_AiPlatformUserScale from '../pages/Page_AiPlatformUserScale';
import Page_ModelChangesOverview from '../pages/Page_ModelChangesOverview';
import Page_DoubaoRevampChanges from '../pages/Page_DoubaoRevampChanges';
import Page_DoubaoRevampHeadTail from '../pages/Page_DoubaoRevampHeadTail';
import Page_DoubaoRevampHeadTailEvidence from '../pages/Page_DoubaoRevampHeadTailEvidence';
import Page_DoubaoRevampHeadTailConclusion from '../pages/Page_DoubaoRevampHeadTailConclusion';
import Page_XiaoheCitationIllusion from '../pages/Page_XiaoheCitationIllusion';
import Page_DoubaoRevampResponse from '../pages/Page_DoubaoRevampResponse';
import Page_PlatformChange_Qwen from '../pages/Page_PlatformChange_Qwen';
import Page_PlatformChange_Yuanbao from '../pages/Page_PlatformChange_Yuanbao';
import Page_PlatformChange_Baidu from '../pages/Page_PlatformChange_Baidu';
import Page_PlatformChange_DeepSeek from '../pages/Page_PlatformChange_DeepSeek';
import Page_GEOWordSelectionOther from '../pages/Page_GEOWordSelectionOther';
import Page_SkyworthShadowAlgorithm from '../pages/Page_SkyworthShadowAlgorithm';
import Page_SkyworthAiProcess from '../pages/Page_SkyworthAiProcess';
import Page_SkyworthSearchEngineModel from '../pages/Page_SkyworthSearchEngineModel';
import Page_SkyworthCrossCompare from '../pages/Page_SkyworthCrossCompare';
import Page_VideoStrategy_HeadTail from '../pages/Page_VideoStrategy_HeadTail';
import Page_SkyworthContentDetailsAI from '../pages/Page_SkyworthContentDetailsAI';
import Page_HumanAiRatioApproach from '../pages/Page_HumanAiRatioApproach';
import Page_ContentWritingLogic from '../pages/Page_ContentWritingLogic';
import {
  Page_ContentStrategyDeconstruct_Insight,
  Page_ContentStrategyDemo_Insight,
  Page_ContentStrategyDemo2_Insight,
  Page_ContentStrategyDemo3_Insight,
  Page_ContentStrategyDemo4_Insight,
} from '../pages/Page_ContentStrategyInsight';
import Page_DeliveryLongTerm from '../pages/Page_DeliveryLongTerm';
import Page_DeliveryHighWeight from '../pages/Page_DeliveryHighWeight';
import Page_PotentialVerticalCommunity from '../pages/Page_PotentialVerticalCommunity';
import Page_EmergingMediaAttempts from '../pages/Page_EmergingMediaAttempts';

// ─────────── 三、苏宁易购方案（本项目原有页面，沿用自带顶部导航 nav: 'legacy'）───────────
import Page_BrandInfo from '../pages/Page_BrandInfo';
import Page_BrandProducts from '../pages/Page_BrandProducts';
import Page_BrandTech from '../pages/Page_BrandTech';
import Page_BrandChannel from '../pages/Page_BrandChannel';
import Page_BrandCompetitors from '../pages/Page_BrandCompetitors';
import Page_BrandAdMatrix from '../pages/Page_BrandAdMatrix';
import Page_BrandWhySuning from '../pages/Page_BrandWhySuning';
import Page_BrandVerticalCompetitors from '../pages/Page_BrandVerticalCompetitors';
import Page_BrandVerticalTraffic_A from '../pages/Page_BrandVerticalTraffic_A';
import Page_IndustryPainPoints from '../pages/Page_IndustryPainPoints';
import Page_PainPoint1_WordCloud from '../pages/Page_PainPoint1_WordCloud';
import Page_PainPoint2_Industry from '../pages/Page_PainPoint2_Industry';
import Page_PainPoint3_Service from '../pages/Page_PainPoint3_Service';
import Page_PainPoint3_Service_Solution from '../pages/Page_PainPoint3_Service_Solution';
import Page_PainPoint4_SalesModel from '../pages/Page_PainPoint4_SalesModel';
import Page_KeywordGroupingConclusion from '../pages/Page_KeywordGroupingConclusion';
import PB_DataImportAnalysis from '../Pages_Before/Page_DataImportAnalysis';
import Page_KeywordGenerationLogic from '../pages/Page_KeywordGenerationLogic';
import Page_KeywordTaggingLogic from '../pages/Page_KeywordTaggingLogic';
import Page_KeywordExpansionLogic from '../pages/Page_KeywordExpansionLogic';
import PB_GeoOptKeywordsClassify from '../Pages_Before/Page_GeoOptKeywordsClassify';
import PB_GeoOptKeywordsClassify2 from '../Pages_Before/Page_GeoOptKeywordsClassify2';
import PB_GeoOptKeywordsClassify_New from '../Pages_Before/Page_GeoOptKeywordsClassify_New';
import PB_GeoOptKeywordsClassify_New2 from '../Pages_Before/Page_GeoOptKeywordsClassify_New2';
import PB_GeoOptKeywordsClassify3 from '../Pages_Before/Page_GeoOptKeywordsClassify3';
import PB_GeoOptKeywordsClassify4 from '../Pages_Before/Page_GeoOptKeywordsClassify4';
import PB_GeoOptKeywordsCleaning1 from '../Pages_Before/Page_GeoOptKeywordsCleaning1';
import PB_GeoOptKeywordsCleaning2 from '../Pages_Before/Page_GeoOptKeywordsCleaning2';
import Page_GeoReport_BasicInfo1 from '../pages/Page_GeoReport_BasicInfo1';
import Page_GeoReport_BasicInfo2 from '../pages/Page_GeoReport_BasicInfo2';
import PB_GeoReportDashboard from '../Pages_Before/Page_GeoReportDashboard';
import PB_GeoReportDashboard2 from '../Pages_Before/Page_GeoReportDashboard2';
import PB_GeoReportEntries from '../Pages_Before/Page_GeoReportEntries';
import PB_GeoReportEntries_Analysis from '../Pages_Before/Page_GeoReportEntries_Analysis';
import PB_GeoReportCompetitors_Analysis from '../Pages_Before/Page_GeoReportCompetitors_Analysis';
import PB_GeoReportSources from '../Pages_Before/Page_GeoReportSources';
import PB_GeoReportSources2 from '../Pages_Before/Page_GeoReportSources2';
import PB_GeoReportSentiment_Pre from '../Pages_Before/Page_GeoReportSentiment_Pre';
import PB_GeoReportSentiment from '../Pages_Before/Page_GeoReportSentiment';
import PB_GeoReportSentiment_Crawl from '../Pages_Before/Page_GeoReportSentiment_Crawl';
import PB_GeoCoreStrategy from '../Pages_Before/Page_GeoCoreStrategy';
import PB_GeoConversionChain from '../Pages_Before/Page_GeoConversionChain';
import PB_GeoKpiAcceptance from '../Pages_Before/Page_GeoKpiAcceptance';
import PB_GeoWorkAcceptance from '../Pages_Before/Page_GeoWorkAcceptance';
import Page_BrandDatabaseBuild from '../pages/Page_BrandDatabaseBuild';
import Page_BrandDatabaseBuildDetails from '../pages/Page_BrandDatabaseBuildDetails';
import Page_ContentStrategyBacktrack from '../pages/Page_ContentStrategyBacktrack';
import Page_ContentStrategyDetails from '../pages/Page_ContentStrategyDetails';
import Page_ContentStrategyDeconstruct from '../pages/Page_ContentStrategyDeconstruct';
import Page_ContentStrategyDemo from '../pages/Page_ContentStrategyDemo';
import Page_ContentStrategyDemo2 from '../pages/Page_ContentStrategyDemo2';
import Page_ContentStrategyDemo3 from '../pages/Page_ContentStrategyDemo3';
import Page_ContentStrategyDemo4 from '../pages/Page_ContentStrategyDemo4';
import Page_PlatformFilterIntro from '../pages/Page_PlatformFilterIntro';
import Page_PlatformFilterLogic from '../pages/Page_PlatformFilterLogic';
import Page_PlatformFilterLogicB from '../pages/Page_PlatformFilterLogicB';
import Page_PlatformFilterLogicC from '../pages/Page_PlatformFilterLogicC';
import Page_PlatformFilterConclusion from '../pages/Page_PlatformFilterConclusion';
import Page_DeliveryStrategy_Combo from '../pages/Page_DeliveryStrategy_Combo';
import Page_GeoOptImplementation from '../pages/Page_GeoOptImplementation';
import Page_NegativeInfoSearch from '../pages/Page_NegativeInfoSearch';
import Page_NegativeInfoHandling from '../pages/Page_NegativeInfoHandling';

// ─────────── 四、Q&A ───────────
// Q1 数据监测怎么优化和迭代
import Page_QA_Monitor_DataReview from '../pages/qa/Page_QA_Monitor_DataReview';
import Page_QA_Monitor_ModelTracking from '../pages/qa/Page_QA_Monitor_ModelTracking';

// Q2「官网对 GEO 建设是否重要」：先讲行业差异，再走桃李面包官网诊断报告全量页面
import Page_Web_IndustryCitationRate from '../pages/website/Page_Web_IndustryCitationRate';
import Page_Web_DiagnosticCriteria from '../pages/website/Page_DiagnosticCriteria';
import Page_Web_OverallAssessment from '../pages/website/Page_OverallAssessment';
import Page_Web_Process_Overview from '../pages/website/Page_Process_Overview';
import Page_Web_Process_Mobile from '../pages/website/Page_Process_Mobile';
import Page_Web_ArchitectureResult from '../pages/website/Page_ArchitectureResult';
import Page_Web_Issue_StructureClarity from '../pages/website/Page_Issue_StructureClarity';
import Page_Web_Issue_HeadingHierarchy from '../pages/website/Page_Issue_HeadingHierarchy';
import Page_Web_Issue_ImageAlt from '../pages/website/Page_Issue_ImageAlt';
import Page_Web_Issue_Sitemap from '../pages/website/Page_Issue_Sitemap';
import Page_Web_Issue_StructuredData from '../pages/website/Page_Issue_StructuredData';
import Page_Web_CompetitorCrawl from '../pages/website/Page_CompetitorCrawl';
import Page_Web_ContentCoverageResult from '../pages/website/Page_ContentCoverageResult';
import Page_Web_Issue_ProductInfo from '../pages/website/Page_Issue_ProductInfo';
import Page_Web_Issue_AfterSales from '../pages/website/Page_Issue_AfterSales';
import Page_Web_Issue_UseCase from '../pages/website/Page_Issue_UseCase';
import Page_Web_Issue_FAQ from '../pages/website/Page_Issue_FAQ';
import Page_Web_Issue_ContentOps from '../pages/website/Page_Issue_ContentOps';
import Page_Web_CompetitorContent from '../pages/website/Page_CompetitorContent';
import Page_Web_Advice_Architecture from '../pages/website/Page_Advice_Architecture';
import Page_Web_Advice_Content from '../pages/website/Page_Advice_Content';
import Page_Web_Benchmark_Luckin from '../pages/website/Page_Benchmark_Luckin';
import Page_Web_Benchmark_Luckin_Robots from '../pages/website/Page_Benchmark_Luckin_Robots';
import Page_Web_Benchmark_Luckin_Products from '../pages/website/Page_Benchmark_Luckin_Products';
import Page_Web_Benchmark_Luckin_FAQ from '../pages/website/Page_Benchmark_Luckin_FAQ';
import Page_Web_Benchmark_Luckin_Open from '../pages/website/Page_Benchmark_Luckin_Open';

// Q3 标书和验收
// 「预算和项目该如何规划」（300 万分配）暂时下线，保留 import 注释以便随时恢复
// import Page_QA_Budget_Allocation from '../pages/qa/Page_QA_Budget_Allocation';
// import Page_QA_Budget_Why from '../pages/qa/Page_QA_Budget_Why';
// import Page_QA_Budget_Timeline from '../pages/qa/Page_QA_Budget_Timeline';
import Page_QA_Bid_Threshold from '../pages/qa/Page_QA_Bid_Threshold';
import Page_QA_Acceptance_Framework from '../pages/qa/Page_QA_Acceptance_Framework';

export const slideConfig = [
  // ─────────────────────── 封面 & 总目录 ───────────────────────
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-company.png',
    brand: 'GEO索引未来',
    subtitle: '苏宁易购\nGEO规划方案',
    date: 'August 2026',
  },

  {
    type: 'toc',
    title: '目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO SERVICE GUIDE',
  },

  // ══════════════════════════════════════════════════════════
  // ——— 一、公司介绍 ———
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'company',
    title: '公司介绍',
    tocTitle: 'GEO索引未来公司介绍',
    subtitle: 'COMPANY',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-new.jpg',
      brand: 'GEO索引未来',
      subtitle: 'GEO索引未来\n公司介绍',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '公司简介', subtitle: 'COMPANY PROFILE', backgroundImage: '' },
  { type: 'section', title: '公司概览' },
  { type: 'page', title: '「GEO 索引未来」整体介绍', component: Page_CompanyIntro, hideHeader: true },

  { type: 'section', title: '服务客户' },
  { type: 'page', title: '服务客户', component: Page_ServiceClients, hideHeader: true },
  { type: 'page', title: '服务客户', component: Page_ServiceClients_Sanjiu, hideHeader: true },

  { type: 'section', title: '案例展示' },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_Health, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_Health_2, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_Health_Sanjiu, hideHeader: true },
  { type: 'page', title: '服务案例', variants: [Page_CaseStudy_Double_Combined_B, Page_CaseStudy_Double_Combined], hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_2, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_3, hideHeader: true },

  { type: 'section', title: '团队背书' },
  { type: 'page', title: '团队背书', component: Page_TeamEndorsement, hideHeader: true },

  { type: 'section', title: '组织架构' },
  { type: 'page', title: '团队组织架构', component: Page_CompanyArchitecture, hideHeader: true },

  { type: 'section', title: '核心成员' },
  { type: 'page', title: '核心成员', component: Page_TeamIntro, hideHeader: true },

  { type: 'chapter', title: '服务介绍', subtitle: 'SERVICE INTRO', backgroundImage: '' },
  { type: 'section', title: '服务内容' },
  { type: 'page', title: '服务内容', component: Page_ServiceIntro, hideHeader: true },
  { type: 'section', title: '报价' },
  { type: 'page', title: '报价', component: Page_Pricing, hideHeader: true },

  { type: 'chapter', title: '核心能力', subtitle: 'CORE CAPABILITIES', backgroundImage: '' },
  { type: 'section', title: '总览' },
  { type: 'page', title: '核心能力', component: Page_CoreCapabilities, hideHeader: true },

  { type: 'section', title: 'GEO ONE数据监测系统' },
  { type: 'page', title: 'GEO ONE 数据监测系统介绍', component: Page_GeoMonitorIntro, hideHeader: true },
  { type: 'page', title: 'GEO ONE数据系统功能介绍', component: Page_GeoMonitorModules, hideHeader: true },
  { type: 'page', title: 'Geo One数据系统演示', component: Page_GeoOneDemo, hideHeader: true },
  { type: 'page', title: 'GEO ONE 数据监测系统', component: Page_GeoMonitor, hideHeader: true },
  { type: 'page', title: 'GEO ONE数据系统后台运行录屏演示', component: Page_GeoMonitorDemo, hideHeader: true },

  { type: 'section', title: '内容撰写Agent' },
  { type: 'page', title: '内容撰写Agent介绍', component: Page_ContentAgentIntro, hideHeader: true },
  { type: 'page', title: '构建品牌资料库', component: Page_ContentAgentStep_BrandKB, hideHeader: true },
  { type: 'page', title: '目标用户设定', component: Page_ContentAgentStep_TargetUser, hideHeader: true },
  {
    type: 'page',
    title: 'AI高引用规律总结',
    components: [Page_ContentAgentStep_CitationPattern, Page_ContentAgentStep_CitationPattern_How],
    hideHeader: true,
  },
  { type: 'page', title: '内容撰写Agent功能介绍', component: Page_ContentAgentModules, hideHeader: true },
  { type: 'page', title: '内容撰写Agent演示', component: Page_ContentAgentDemo, hideHeader: true },
  { type: 'page', title: '高质量文章示意', component: Page_ContentAgentArticleDemo1, hideHeader: true },
  { type: 'page', title: '高质量文章示意', component: Page_ContentAgentArticleDemo2, hideHeader: true },

  { type: 'section', title: '用户评论分析系统' },
  { type: 'page', title: '用户评论分析系统', component: Page_UserCommentAnalysis, hideHeader: true },
  { type: 'page', title: '为什么需要用户评论分析系统', component: Page_UserCommentWhy, hideHeader: true },
  { type: 'page', title: '用户评论分析系统解决什么问题', component: Page_UserCommentProblem, hideHeader: true },
  { type: 'page', title: '用户评论分析系统怎么运作', component: Page_UserCommentHow, hideHeader: true },
  { type: 'page', title: '用户评论分析系统架构', component: Page_UserCommentArchitecture, hideHeader: true },
  { type: 'page', title: '用户真评系统演示', component: Page_UserCommentDemo, hideHeader: true },
  { type: 'page', title: '品牌调研报告内容大纲', component: Page_SkyworthResearchConclusions, hideHeader: true },

  { type: 'section', title: '量化竞争模型' },
  { type: 'page', title: '量化竞争模型(Alpha模型)', component: Page_QuantitativeModel, hideHeader: true },
  { type: 'page', title: '量化模型可以做什么', component: Page_QuantitativeModel_WhatCanDo, hideHeader: true },
  { type: 'page', title: '为什么不能只看监测数据', component: Page_QuantitativeModel_Why, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑', component: Page_QuantitativeModelArchitecture, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 1', component: Page_QuantitativeModel_Pic1, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 2', component: Page_QuantitativeModel_Pic2, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 3', component: Page_QuantitativeModel_Pic3, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 4', component: Page_QuantitativeModel_Pic4, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 5', component: Page_QuantitativeModel_Pic5, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 6', component: Page_QuantitativeModel_Pic6, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 7', component: Page_QuantitativeModel_Pic7, hideHeader: true },

  { type: 'chapter', title: '服务流程', subtitle: 'SERVICE TIMELINE', backgroundImage: '' },
  { type: 'section', title: '服务流程' },
  { type: 'page', title: '服务流程', component: Page_ServiceStandard, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 二、GEO行业认知信息差 ———
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'insight',
    title: 'GEO行业认知信息差',
    subtitle: 'INDUSTRY INSIGHT',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-company.png',
      brand: 'GEO索引未来',
      subtitle: 'GEO行业\n认知信息差',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '各AI平台\n现状和发展方向', subtitle: 'AI PLATFORM STATUS & TRENDS', backgroundImage: '' },

  { type: 'section', title: '近期主流AI模型更迭' },
  { type: 'page', title: '主流AI模型版本变更', component: Page_ModelVersionChanges, hideHeader: true },
  { type: 'page', title: '各AI平台用户量', component: Page_AiPlatformUserScale, hideHeader: true },
  { type: 'page', title: '近期主流模型更新记录', component: Page_ModelChangesOverview, hideHeader: true },

  { type: 'section', title: '豆包改版' },
  { type: 'page', title: '豆包改版变化1：大幅增多了对抖音的引用', component: Page_DoubaoRevampChanges, hideHeader: true },
  { type: 'page', title: '豆包改版变化2：读取视频只读头尾', component: Page_DoubaoRevampHeadTail, hideHeader: true },
  { type: 'page', title: '豆包改版变化2：Summary 与逐字稿对照', component: Page_DoubaoRevampHeadTailEvidence, hideHeader: true },
  { type: 'page', title: '豆包改版变化2：三档时长实测结论', component: Page_DoubaoRevampHeadTailConclusion, hideHeader: true },
  { type: 'page', title: '豆包改版后我们的应对方案', component: Page_DoubaoRevampResponse, hideHeader: true },

  { type: 'section', title: '其他平台重要变化' },
  { type: 'page', title: '千问：从关键词检索到检索 Agent', component: Page_PlatformChange_Qwen, hideHeader: true },
  { type: 'page', title: '元宝：进了微信生态，还要被 Agent 选中', component: Page_PlatformChange_Yuanbao, hideHeader: true },
  { type: 'page', title: '百度：搜索正在变成 AI 的检索基础设施', component: Page_PlatformChange_Baidu, hideHeader: true },
  { type: 'page', title: 'DeepSeek：内容开始拼证据密度', component: Page_PlatformChange_DeepSeek, hideHeader: true },

  { type: 'chapter', title: '关键词策略', subtitle: 'KEYWORD STRATEGY', backgroundImage: '' },
  { type: 'section', title: '这些词是怎么选出来的' },
  { type: 'page', title: '市场上其他做法', component: Page_GEOWordSelectionOther, hideHeader: true },
  { type: 'page', title: '影子算法', component: Page_SkyworthShadowAlgorithm, hideHeader: true },
  { type: 'page', title: 'AI 如何处理用户问题', component: Page_SkyworthAiProcess, hideHeader: true },
  { type: 'page', title: '模拟搜索引擎', component: Page_SkyworthSearchEngineModel, hideHeader: true },
  { type: 'page', title: '交叉对比锁定高频优化词', component: Page_SkyworthCrossCompare, hideHeader: true },

  { type: 'chapter', title: '内容策略', subtitle: 'CONTENT STRATEGY', backgroundImage: '' },
  { type: 'section', title: '我们到底用AI还是用人写内容' },
  { type: 'page', title: '我们到底用AI还是用人工写内容', variants: [Page_SkyworthContentDetailsAI, Page_HumanAiRatioApproach], hideHeader: true },

  { type: 'section', title: '我们怎么写一篇文章' },
  { type: 'page', title: '写文章的整体逻辑', component: Page_ContentWritingLogic, hideHeader: true },

  { type: 'section', title: '不同类型文章展示' },
  { type: 'page', title: '对比类写法拆解', component: Page_ContentStrategyDeconstruct_Insight, hideHeader: true },
  { type: 'page', title: '对比类成稿示意', component: Page_ContentStrategyDemo_Insight, hideHeader: true },
  { type: 'page', title: '排行榜类写法拆解', component: Page_ContentStrategyDemo2_Insight, hideHeader: true },
  { type: 'page', title: '排行榜类成稿示意', component: Page_ContentStrategyDemo3_Insight, hideHeader: true },
  { type: 'page', title: '排行榜类成稿示意', component: Page_ContentStrategyDemo4_Insight, hideHeader: true },

  { type: 'section', title: '视频策略' },
  { type: 'page', title: '投视频怎么操作', component: Page_VideoStrategy_HeadTail, hideHeader: true },

  { type: 'chapter', title: '投放策略', subtitle: 'DELIVERY STRATEGY', backgroundImage: '' },
  { type: 'section', title: '投放原则' },
  { type: 'page', title: '长期投放', component: Page_DeliveryLongTerm, hideHeader: true },
  { type: 'section', title: '精准高权重账号' },
  { type: 'page', title: '精准高权重账号', component: Page_DeliveryHighWeight, hideHeader: true },
  { type: 'section', title: '有潜力的垂直社区' },
  { type: 'page', title: '有潜力的垂直社区', component: Page_PotentialVerticalCommunity, hideHeader: true },
  { type: 'section', title: '新兴媒体尝试' },
  { type: 'page', title: '新兴媒体尝试', component: Page_EmergingMediaAttempts, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 三、苏宁易购方案 ———
  // 本项目原有页面，使用自带的顶部导航样式（nav: 'legacy'）
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'suning',
    title: '苏宁易购方案',
    subtitle: 'SUNING PROPOSAL',
    nav: 'legacy',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-new.png',
      brand: 'GEO索引未来',
      subtitle: '苏宁易购\nGEO规划方案',
      date: 'August 2026',
      layout: 'fullscreen',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '品牌信息调研及词条策略', subtitle: 'BRAND DISCOVERY', backgroundImage: '/' },

  { type: 'section', title: '品牌信息' },
  { type: 'page', title: '品牌基础信息', component: Page_BrandInfo },
  { type: 'page', title: '主要业务矩阵', component: Page_BrandProducts },
  { type: 'page', title: '平台核心能力壁垒', component: Page_BrandTech },
  { type: 'page', title: '商业模式与全场景渠道体系', component: Page_BrandChannel },
  { type: 'page', title: '核心竞品对比分析', component: Page_BrandCompetitors },
  { type: 'page', title: '主流电商站内外广告投放对比矩阵', component: Page_BrandAdMatrix },
  { type: 'page', title: '为何选择苏宁而非京东', component: Page_BrandWhySuning },
  { type: 'page', title: '家电领域垂直竞品', component: Page_BrandVerticalCompetitors },
  { type: 'page', title: '竞品流量链路与苏宁应对', component: Page_BrandVerticalTraffic_A },

  { type: 'section', title: '行业特点' },
  { type: 'page', title: '平台型零售行业GEO难点解析', component: Page_IndustryPainPoints },
  { type: 'page', title: '渠道隐身：平台在AI答案中被商品品牌淹没', component: Page_PainPoint1_WordCloud },
  { type: 'page', title: '极强比价属性：价格促销高频变动，AI报价滞后混乱', component: Page_PainPoint4_SalesModel },
  { type: 'page', title: '双巨头声量垄断：苏宁在AI引用源中被稀释', component: Page_PainPoint2_Industry },
  { type: 'page', title: '服务履约口碑依赖第三方，负面易被AI放大', components: [Page_PainPoint3_Service, Page_PainPoint3_Service_Solution] },

  { type: 'section', title: '词条策略' },
  { type: 'page', title: '词条分组结论', component: Page_KeywordGroupingConclusion },

  { type: 'section', title: '词条推导及确定过程' },
  { type: 'page', title: '数据导入分析', component: PB_DataImportAnalysis },
  { type: 'page', title: '词条生成逻辑', component: Page_KeywordGenerationLogic },
  { type: 'page', title: '词条打标逻辑', component: Page_KeywordTaggingLogic },
  { type: 'page', title: '词条拓展逻辑', component: Page_KeywordExpansionLogic },
  { type: 'page', title: '词条穷举及清洗', components: [PB_GeoOptKeywordsClassify, PB_GeoOptKeywordsClassify2, PB_GeoOptKeywordsClassify_New, PB_GeoOptKeywordsClassify_New2] },
  { type: 'page', title: '词条分类及拓展', components: [PB_GeoOptKeywordsClassify3, PB_GeoOptKeywordsClassify4] },
  { type: 'page', title: '词条确定', components: [PB_GeoOptKeywordsCleaning1, PB_GeoOptKeywordsCleaning2] },

  { type: 'chapter', title: 'GEO体检报告', subtitle: 'GEO HEALTH CHECK', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },

  { type: 'section', title: '数据分析报告' },
  { type: 'page', title: '报告说明', components: [Page_GeoReport_BasicInfo1, Page_GeoReport_BasicInfo2] },
  { type: 'page', title: '总览', components: [PB_GeoReportDashboard, PB_GeoReportDashboard2] },
  { type: 'page', title: '词条', components: [PB_GeoReportEntries, PB_GeoReportEntries_Analysis] },
  { type: 'page', title: '竞品', component: PB_GeoReportCompetitors_Analysis },
  { type: 'page', title: '引用源', components: [PB_GeoReportSources, PB_GeoReportSources2] },
  { type: 'page', title: '正负面', components: [PB_GeoReportSentiment_Pre, PB_GeoReportSentiment, PB_GeoReportSentiment_Crawl] },

  { type: 'chapter', title: 'KPI及验收标准', subtitle: 'KPI & ACCEPTANCE CRITERIA', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },

  { type: 'section', title: 'KPI及验收标准' },
  { type: 'page', title: '核心优化策略', component: PB_GeoCoreStrategy },
  { type: 'page', title: '四级链路：曝光→决策→对比→转化', component: PB_GeoConversionChain },
  { type: 'page', title: '品牌现状与KPI', component: PB_GeoKpiAcceptance },
  { type: 'page', title: '工作内容与预期效果', component: PB_GeoWorkAcceptance },

  { type: 'chapter', title: 'GEO\n实操要点解析', subtitle: 'GEO EXECUTION ESSENTIALS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },

  { type: 'section', title: '品牌数据库建立' },
  { type: 'page', title: '品牌数据库建立', components: [Page_BrandDatabaseBuild, Page_BrandDatabaseBuildDetails] },

  { type: 'section', title: '内容策略' },
  { type: 'page', title: '内容策略', components: [Page_ContentStrategyBacktrack, Page_ContentStrategyDetails, Page_ContentStrategyDeconstruct, Page_ContentStrategyDemo, Page_ContentStrategyDemo2, Page_ContentStrategyDemo3, Page_ContentStrategyDemo4] },

  { type: 'section', title: '投放策略' },
  { type: 'page', title: '筛选逻辑总览', component: Page_PlatformFilterIntro },
  { type: 'page', title: '筛选过程', components: [Page_PlatformFilterLogic, Page_PlatformFilterLogicB, Page_PlatformFilterLogicC] },
  { type: 'page', title: '筛选结论', component: Page_PlatformFilterConclusion },
  { type: 'page', title: '按权分发', component: Page_DeliveryStrategy_Combo },

  { type: 'section', title: '可量化且合规的GEO如何实现' },
  { type: 'page', title: '可量化且合规的GEO如何实现', component: Page_GeoOptImplementation },

  { type: 'section', title: '错误价格、负面信息怎么处理' },
  { type: 'page', title: '如何查找负面信息', component: Page_NegativeInfoSearch },
  { type: 'page', title: '处理负面及错误信息', component: Page_NegativeInfoHandling },

  // ══════════════════════════════════════════════════════════
  // ——— 四、Q&A ———
  // Q1 数据监测怎么优化和迭代 / Q2 官网对 GEO 建设是否重要 / Q3 标书和验收
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'qa',
    title: 'Q&A',
    subtitle: 'Q & A',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-new.jpg',
      brand: 'GEO索引未来',
      subtitle: 'Q&A',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  {
    type: 'chapter',
    title: '数据监测怎么\n优化和迭代',
    subtitle: 'Q1 · DATA MONITORING & ITERATION',
    backgroundImage: '',
  },
  { type: 'section', title: '按节点复盘数据' },
  { type: 'page', title: '数据监测怎么优化和迭代', component: Page_QA_Monitor_DataReview, hideHeader: true },
  { type: 'section', title: '跟随模型变化' },
  { type: 'page', title: '模型一变，策略就得跟着改', component: Page_QA_Monitor_ModelTracking, hideHeader: true },

  {
    type: 'chapter',
    title: '官网对GEO建设\n是否重要',
    subtitle: 'Q2 · OFFICIAL WEBSITE & GEO',
    backgroundImage: '',
  },

  { type: 'section', title: '行业差异' },
  { type: 'page', title: '官网对苏宁到底重不重要', component: Page_Web_IndustryCitationRate, hideHeader: true },

  { type: 'section', title: '官网 GEO 优化案例' },
  { type: 'page', title: '官网诊断标准', component: Page_Web_DiagnosticCriteria, hideHeader: true },
  { type: 'page', title: '桃李面包官网诊断结论', component: Page_Web_OverallAssessment, hideHeader: true },
  { type: 'page', title: '诊断过程（桌面端）', component: Page_Web_Process_Overview, hideHeader: true },
  { type: 'page', title: '诊断过程（移动端）', component: Page_Web_Process_Mobile, hideHeader: true },

  { type: 'page', title: '网站架构诊断结果', component: Page_Web_ArchitectureResult, hideHeader: true },
  { type: 'page', title: '问题一：页面结构不清晰', component: Page_Web_Issue_StructureClarity, hideHeader: true },
  { type: 'page', title: '问题二：标题层级不规范', component: Page_Web_Issue_HeadingHierarchy, hideHeader: true },
  { type: 'page', title: '问题三：抓取权限与安全漏洞', component: Page_Web_Issue_ImageAlt, hideHeader: true },
  { type: 'page', title: '问题四：网站地图缺失', component: Page_Web_Issue_Sitemap, hideHeader: true },
  { type: 'page', title: '问题五：结构化数据缺失', component: Page_Web_Issue_StructuredData, hideHeader: true },
  { type: 'page', title: '网站架构竞品对比', component: Page_Web_CompetitorCrawl, hideHeader: true },

  { type: 'page', title: '内容覆盖诊断结果', component: Page_Web_ContentCoverageResult, hideHeader: true },
  { type: 'page', title: '问题一：产品信息缺失', component: Page_Web_Issue_ProductInfo, hideHeader: true },
  { type: 'page', title: '问题二：售后与服务信息', component: Page_Web_Issue_AfterSales, hideHeader: true },
  { type: 'page', title: '问题三：使用场景内容', component: Page_Web_Issue_UseCase, hideHeader: true },
  { type: 'page', title: '问题四：FAQ / 知识科普', component: Page_Web_Issue_FAQ, hideHeader: true },
  { type: 'page', title: '问题五：内容持续运营', component: Page_Web_Issue_ContentOps, hideHeader: true },
  { type: 'page', title: '内容覆盖竞品对比', component: Page_Web_CompetitorContent, hideHeader: true },

  { type: 'page', title: '网站架构优化建议', component: Page_Web_Advice_Architecture, hideHeader: true },
  { type: 'page', title: '内容覆盖优化建议', component: Page_Web_Advice_Content, hideHeader: true },

  { type: 'page', title: '标杆案例：瑞幸咖啡', component: Page_Web_Benchmark_Luckin, hideHeader: true },
  { type: 'page', title: '瑞幸·robots.txt', component: Page_Web_Benchmark_Luckin_Robots, hideHeader: true },
  { type: 'page', title: '瑞幸·产品页', component: Page_Web_Benchmark_Luckin_Products, hideHeader: true },
  { type: 'page', title: '瑞幸·FAQ', component: Page_Web_Benchmark_Luckin_FAQ, hideHeader: true },
  { type: 'page', title: '瑞幸·内容开放', component: Page_Web_Benchmark_Luckin_Open, hideHeader: true },

  // 「预算和项目该如何规划」（300 万分配）暂时下线，需要时取消注释即可恢复
  // {
  //   type: 'chapter',
  //   title: '预算和项目\n该如何规划',
  //   subtitle: 'Q · BUDGET & PLANNING',
  //   backgroundImage: '',
  // },
  // { type: 'section', title: '预算规划' },
  // { type: 'page', title: '单品 300 万，怎么分', component: Page_QA_Budget_Allocation, hideHeader: true },
  // { type: 'page', title: '重点投在哪里，为什么', component: Page_QA_Budget_Why, hideHeader: true },
  // { type: 'section', title: '项目排期' },
  // { type: 'page', title: '300 万怎么花：12 个月节奏', component: Page_QA_Budget_Timeline, hideHeader: true },

  {
    type: 'chapter',
    title: '标书和验收',
    subtitle: 'Q3 · BIDDING & ACCEPTANCE',
    backgroundImage: '',
  },
  { type: 'section', title: '招标门槛' },
  { type: 'page', title: '招标怎么设门槛', component: Page_QA_Bid_Threshold, hideHeader: true },
  { type: 'section', title: '验收设计' },
  { type: 'page', title: '验收怎么设计', component: Page_QA_Acceptance_Framework, hideHeader: true },
];
