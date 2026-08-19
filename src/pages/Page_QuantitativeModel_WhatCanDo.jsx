import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 量化模型可以做什么？
 * 结构：Hero 主张（用算法理解算法）→ 三条量化能力 → 底部收口一句。
 */

const ABILITIES = [
  {
    tag: '量化目标',
    lead: '找到准确、可实现的 KPI',
    punch: 'KPI 不是拍脑袋，是算出来的',
    desc: (
      <>
        结合<span className="text-white font-bold">行业竞争水平</span>、<span className="text-white font-bold">品牌现状</span>和
        <span className="text-white font-bold">词库难度</span>，量化评估合理的提及率、Top1、Top3 等目标，避免 KPI 靠经验拍脑袋。
      </>
    ),
  },
  {
    tag: '量化优化',
    lead: '找到 AI 真正喜欢的内容和渠道',
    punch: '优化不是凭经验，是数据跑出来的',
    desc: (
      <>
        持续测试不同<span className="text-white font-bold">文章类型</span>、<span className="text-white font-bold">内容结构</span>、
        <span className="text-white font-bold">信息点</span>和<span className="text-white font-bold">投放平台</span>，识别哪些内容更容易被 AI 学习、引用和推荐，哪些渠道投入最有效。
      </>
    ),
  },
  {
    tag: '量化竞争',
    lead: '识别竞品变化并及时反制',
    punch: '竞品一变化，策略就跟着变',
    desc: (
      <>
        持续监测竞争对手在 AI 中的<span className="text-white font-bold">排名</span>、<span className="text-white font-bold">内容</span>和
        <span className="text-white font-bold">引用来源</span>变化，识别对方正在加强什么，并快速调整自己的内容和投放策略。
      </>
    ),
  },
];

export default function Page_QuantitativeModel_WhatCanDo() {
  return (
    <SlideLayout title="量化模型可以做什么？">
      {/* ── 背景柔光 ── */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-[#004CE5]/[0.07] blur-[220px] right-[-160px] top-[-220px] pointer-events-none z-0" />

      <div className="absolute inset-0 flex flex-col select-none font-['MiSans'] z-10">
        {/* ── Hero：核心主张 ── */}
        <div className="shrink-0 flex items-center gap-10 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.07] px-10 py-7 shadow-[0_0_40px_rgba(0,76,229,0.14)]">
          <div className="shrink-0 pr-10 border-r border-white/15">
            <p className="text-[42px] font-black text-white leading-[1.25] whitespace-nowrap">
              用算法理解算法
            </p>
            <p className="text-[42px] font-black text-[#004CE5] leading-[1.25] whitespace-nowrap">
              用数据对抗算法
            </p>
          </div>
          <p className="text-[26px] text-white leading-[1.55]">
            把过去依赖<span className="text-white font-bold">人工经验</span>、<span className="text-white font-bold">人工统计</span>和
            <span className="text-white font-bold">事后复盘</span>的 GEO 优化，
            <br />
            升级为<span className="text-white font-black">可量化、可预测、可持续迭代</span>的模型化决策。
          </p>
        </div>

        {/* ── 三条量化能力 ── */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-7 mt-7">
          {ABILITIES.map((a, i) => (
            <div
              key={a.tag}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] px-9 pt-8 pb-9 flex flex-col overflow-hidden"
            >
              {/* 顶部高亮细线 */}
              <span className="absolute top-0 left-9 right-9 h-[3px] bg-gradient-to-r from-[#004CE5] to-transparent rounded-full" />

              <div className="shrink-0 flex items-baseline gap-4">
                <span className="font-['Montserrat'] text-[54px] font-black text-[#004CE5] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[32px] font-black text-white tracking-wide">{a.tag}</span>
              </div>

              <p className="shrink-0 mt-4 text-[29px] font-bold text-white leading-[1.35]">
                {a.lead}
              </p>

              <p className="flex-1 mt-5 pt-5 border-t border-white/10 text-[26px] text-white leading-[1.6]">
                {a.desc}
              </p>

              <p className="shrink-0 mt-6 text-[28px] font-black text-[#004CE5] leading-[1.35]">
                {a.punch}
              </p>
            </div>
          ))}
        </div>

        {/* ── 底部收口 ── */}
        <div className="shrink-0 mt-7 rounded-2xl border border-white/10 bg-white/[0.02] px-9 py-5 flex items-center">
          <p className="text-[25px] text-white leading-snug">
            <span className="text-[#004CE5] font-bold">最终实现</span>：从<span className="text-white font-bold">「人判断下一步做什么」</span>，变成
            <span className="text-white font-black">「模型告诉我们下一步哪里最值得投入」</span>。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_WhatCanDo.hideHeader = true;
