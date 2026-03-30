import Page_ProposalNav from '../pages/Page_ProposalNav';
import Page_SWOTAnalysis from '../pages/Page_SWOTAnalysis';
import Page_SWOTStrategy from '../pages/Page_SWOTStrategy';
import Page_SWOTAnalysisFotile from '../pages/Page_SWOTAnalysisFotile';
import Page_ArticleDataAnalysisHisense from '../pages/Page_ArticleDataAnalysisHisense';
import Page_ArticleGenerationDemo from '../pages/Page_ArticleGenerationDemo';
import Page_ArticleDataAnalysisStrategy2 from '../pages/Page_ArticleDataAnalysisStrategy2';
import Page_ArticleGenerationDemo2 from '../pages/Page_ArticleGenerationDemo2';
import Page_DeliveryStrategy_Platform from '../pages/Page_DeliveryStrategy_Platform';
import Page_DeliveryStrategy_Combo from '../pages/Page_DeliveryStrategy_Combo';
import Page_SectionCore from '../pages/Page_SectionCore';
import Page_SectionBroad from '../pages/Page_SectionBroad';
import Page_SectionExclusive from '../pages/Page_SectionExclusive';
import Page_SectionSummary from '../pages/Page_SectionSummary';
import Page_GeoReportAnalysis from '../pages/Page_GeoReportAnalysis';
import Page_StrategyOutline from '../pages/Page_StrategyOutline';

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

  // ——— 篇章1: 品牌信息调研 ———
  { type: 'chapter', title: '品牌信息调研', subtitle: 'BRAND DISCOVERY', backgroundImage: '/' },
  { type: 'section', title: '目标行业信息' },
  { type: 'page', title: '冰箱是什么？', components: [Page_ProposalNav, Page_SWOTAnalysis] },
  { type: 'page', title: '冰箱卖给谁？', component: Page_SWOTAnalysis },

  // ——— 篇章2: GEO体检报告 ———
  { type: 'chapter', title: 'GEO体检报告', subtitle: 'GEO HEALTH CHECK', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '页面1' },
  { type: 'section', title: '一级标题2' },

  // ——— 篇章3: GEO优化 ———
  { type: 'chapter', title: 'GEO优化', subtitle: 'GEO OPTIMIZATION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '页面1', component: Page_SWOTStrategy },
  { type: 'section', title: '一级标题2' },
  { type: 'page', title: '页面2' },
  { type: 'section', title: '一级标题3' },

  // ——— 篇章4: 阶段性复盘报告 ———
  { type: 'chapter', title: '阶段性复盘报告', subtitle: 'PHASE REVIEW', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },

  // ——— 篇章5: 方太新增 ———
  { type: 'chapter', title: '方太新增页面', subtitle: 'PHASE REVIEW', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },
  { type: 'section', title: '数据分析' },
  { type: 'page', title: '方太冰箱 GEO报告', component: Page_GeoReportAnalysis },
  { type: 'page', title: '战略与 GEO 行动建议', component: Page_StrategyOutline },
  { type: 'section', title: 'GEO战略规划' },
  { type: 'page', title: '三个板块介绍', components: [Page_SectionCore, Page_SectionBroad, Page_SectionExclusive] },
  { type: 'page', title: '总结', component: Page_SectionSummary },
  { type: 'section', title: '执行规划-“搭便车”具体执行要点' },
  { type: 'page', title: '方太冰箱SWOT分析', component: Page_SWOTAnalysisFotile },
  { type: 'page', title: '卡萨帝冰箱SWOT分析', component: Page_SWOTAnalysis },
  { type: 'page', title: 'SWOT分析与策略', component: Page_SWOTStrategy },
  { type: 'page', title: '两个内容策略1', component: Page_ArticleDataAnalysisHisense },
  { type: 'page', title: '生成文章示意1', component: Page_ArticleGenerationDemo },
  { type: 'page', title: '两个内容策略2', component: Page_ArticleDataAnalysisStrategy2 },
  { type: 'page', title: '生成文章示意2', component: Page_ArticleGenerationDemo2 },
  { type: 'page', title: '两个投放策略', components: [Page_DeliveryStrategy_Platform, Page_DeliveryStrategy_Combo] },


];
