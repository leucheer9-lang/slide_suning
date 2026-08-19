import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 洞察部分「不同类型文章展示」：复用苏宁方案内容策略里的示例文章，
 * 但走 SlideLayout，以带上章节导航与大标题。
 */

const DECONSTRUCT = {
  compare: {
    title: '【对比类】高引用写法拆解',
    subtitle: '对高引用对比类文章做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '海信 · 对比类',
    image: '/charts/geo-article-analysis-hisense.png',
    rules: [
      { no: '01', title: '爆款反常识标题公式', body: '[国产品牌] + 正面刚 + [国际标杆] + [反常识悬念]（更贵更好？）' },
      {
        no: '02',
        title: '“拉踩型”评测结构',
        steps: [
          { k: '引出', v: '抛出海信比索尼贵 5000 元的价格悬念。' },
          { k: '定调', v: '明确对比度、分辨率等 5 大评测标准。' },
          { k: '交锋', v: '画质、智能、音响三轮对决，索尼陪跑。' },
          { k: '揭秘', v: '结尾点出海信“叠屏技术”的核心卖点。' },
        ],
      },
      { no: '03', title: '碎片化图文排版', body: '采用“Round 1/2/3”回合制小标题，单段结论极简，图文紧密交替，降低 AI 提取难度。' },
      { no: '04', title: '专家与硬核数据背书', body: '引入摄影专家把关，搭配红蜘蛛校色仪等专业数据与高清对比图，提高大模型采信率。' },
      { no: '05', title: '选购指南类体裁布局', body: '采用“参数对比 + 场景盲测”的硬核科技评测文风，极易被搜索或 AI 作为“电视推荐”参考抓取。' },
    ],
  },
  ranking: {
    title: '【排行榜类】高引用写法拆解',
    subtitle: '对高引用排行榜类文章做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '高权重参考 · 排行榜类',
    image: '/charts/geo-article-analysis-strategy2.png',
    rules: [
      { no: '01', title: '痛点截流式标题', body: '[高频搜索词] + [情绪安抚] + [价值承诺]' },
      {
        no: '02',
        title: '“量身定制”的评判框架',
        steps: [
          { k: '引出', v: '以资深从业者人设击破公关稿假象，建立信任基石。' },
          { k: '定调', v: '抛出刚需标准，为后续主推品提前铺设契合条件。' },
        ],
      },
      {
        no: '03',
        title: '“众星捧月”式榜单结构',
        steps: [
          { k: '卡位', v: '将主推品置于榜首，冠以“万金油 / 全能王”定调。' },
          { k: '抬咖', v: '用公认的行业天花板作为信任锚点。' },
          { k: '补全', v: '用其余名次做实榜单的客观性与权威性。' },
        ],
      },
      { no: '04', title: '闭环式选购指南', body: '提供场景搭配方案，完成从心智种草到实操转化的闭环。' },
    ],
  },
};

const DEMOS = {
  compare: {
    title: '【对比类】成稿示意',
    subtitle: '反常识标题 + 回合制对决，把差异写成可整句摘抄的结论',
    image: '/charts/geo-article-generation-demo.png',
  },
  ranking: {
    title: '【排行榜类】成稿示意',
    subtitle: '痛点截流标题 + 众星捧月榜单，让主推品成为默认推荐',
    image: '/charts/geo-article-generation-demo2.png',
  },
  ranking2: {
    title: '【排行榜类】成稿示意',
    subtitle: '同一套榜单逻辑，换场景再出一篇可被稳定引用的成稿',
    image: '/charts/geo-article-generation-demo3.png',
  },
};

function ArticleShot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
      <div className="w-full h-[36px] bg-black/40 border-b border-white/10 flex items-center px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>
      <div className="flex-1 min-h-0 bg-white relative">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0B0D19]/45 text-zinc-500">
            <span className="text-[22px] font-bold tracking-widest">请放入截图</span>
            <span className="text-[15px] font-mono text-zinc-600">public{src}</span>
          </div>
        ) : (
          <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
        )}
      </div>
    </div>
  );
}

function DeconstructPage({ typeKey }) {
  const meta = DECONSTRUCT[typeKey];

  return (
    <SlideLayout title={meta.title} subtitle={meta.subtitle}>
      <div className="w-full h-full flex items-stretch gap-6 select-none font-['MiSans'] animate-fadeIn">
        <div className="w-[38%] shrink-0 flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-[20px] font-bold text-blue-100 tracking-wide">高引用参考文章</h3>
            <span className="text-[16px] text-zinc-500">{meta.refTag}</span>
          </div>
          <div className="flex-1 min-h-0">
            <ArticleShot src={meta.image} alt={`${meta.title}参考文章`} />
          </div>
        </div>

        <div className="w-[48px] shrink-0 flex items-center justify-center">
          <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>

        <div className="flex-1 flex flex-col h-full min-w-0">
          <div className="flex-1 flex flex-col justify-center relative min-h-0">
            <div className="absolute left-[3px] top-3 bottom-3 w-0.5 bg-white/10" />
            <div className="space-y-5 relative z-10 pl-8">
              {meta.rules.map((rule) => (
                <div key={rule.no} className="relative flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-black" />
                  <div className="text-[#004CE5] font-mono text-[20px] font-bold pt-0.5 shrink-0 w-8">{rule.no}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[26px] font-bold text-white mb-1 tracking-wide">{rule.title}</h3>
                    {rule.steps ? (
                      <div className="text-zinc-300 text-[20px] leading-relaxed flex flex-col gap-0.5">
                        {rule.steps.map((s) => (
                          <div key={s.k} className="flex items-start gap-2">
                            <span className="text-white font-medium shrink-0 w-[2.75rem]">{s.k}</span>
                            <span>{s.v}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-zinc-300 text-[20px] leading-relaxed">{rule.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function DemoPage({ typeKey }) {
  const meta = DEMOS[typeKey];

  return (
    <SlideLayout title={meta.title} subtitle={meta.subtitle}>
      <div className="w-full h-full animate-fadeIn">
        <ArticleShot src={meta.image} alt={meta.title} />
      </div>
    </SlideLayout>
  );
}

export function Page_ContentStrategyDeconstruct_Insight() {
  return <DeconstructPage typeKey="compare" />;
}
export function Page_ContentStrategyDemo_Insight() {
  return <DemoPage typeKey="compare" />;
}
export function Page_ContentStrategyDemo2_Insight() {
  return <DeconstructPage typeKey="ranking" />;
}
export function Page_ContentStrategyDemo3_Insight() {
  return <DemoPage typeKey="ranking" />;
}
export function Page_ContentStrategyDemo4_Insight() {
  return <DemoPage typeKey="ranking2" />;
}

Page_ContentStrategyDeconstruct_Insight.hideHeader = true;
Page_ContentStrategyDemo_Insight.hideHeader = true;
Page_ContentStrategyDemo2_Insight.hideHeader = true;
Page_ContentStrategyDemo3_Insight.hideHeader = true;
Page_ContentStrategyDemo4_Insight.hideHeader = true;
