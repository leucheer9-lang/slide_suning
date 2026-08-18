import React from 'react';
import SlideLayout from '../components/SlideLayout';

const MUST_KNOW = [
  { label: '因为什么买', desc: '真正驱动成交的理由' },
  { label: '担心什么', desc: '决策前的顾虑与犹豫' },
  { label: '吐槽什么', desc: '用后不满与差评焦点' },
];

export default function Page_UserCommentWhy() {
  return (
    <SlideLayout title="为什么需要用户评论分析系统">
      <div className="absolute w-[680px] h-[680px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 -top-40 pointer-events-none z-0" />
      <div className="absolute w-[560px] h-[560px] rounded-full bg-blue-900/[0.05] blur-[150px] -left-24 bottom-10 pointer-events-none z-0" />

      {/* 右下角倾斜印章：发得越多，错得越深 */}
      <div
        className="absolute z-20 select-none pointer-events-none"
        style={{ right: '20px', bottom: '8px', transform: 'rotate(-12deg)' }}
        aria-hidden
      >
        <svg viewBox="0 0 220 220" width="220" height="220" fill="none">
          <circle cx="110" cy="110" r="102" stroke="#F59E0B" strokeWidth="3.5" strokeOpacity="0.6" />
          <circle cx="110" cy="110" r="86" stroke="#F59E0B" strokeWidth="1.6" strokeOpacity="0.4" strokeDasharray="7 6" />
          <text x="110" y="96" textAnchor="middle" fill="#FBBF24" fontSize="36" fontWeight="900" fontFamily="MiSans, sans-serif">越发</text>
          <text x="110" y="142" textAnchor="middle" fill="#FBBF24" fontSize="36" fontWeight="900" fontFamily="MiSans, sans-serif">越偏</text>
        </svg>
      </div>

      <div
        className="absolute w-[1840px] flex flex-col justify-between select-none animate-fadeIn z-10"
        style={{ top: 0, height: '790px', paddingTop: '12px', paddingBottom: '8px' }}
      >
        {/* 上：主张句 */}
        <div className="shrink-0">
          <div className="w-[64px] h-[4px] bg-[#004CE5]/70 rounded-full mb-8" />
          <p className="font-['MiSans']" style={{ fontSize: '52px', lineHeight: '1.25' }}>
            <strong className="text-white font-bold">AI 相对中立，更接近消费者视角</strong>
            <span className="text-zinc-500">，所以——</span>
          </p>
          <p className="text-[28px] text-zinc-300 font-['MiSans'] leading-[44px] mt-6" style={{ maxWidth: '1520px' }}>
            品牌自己想讲的卖点，不一定是用户真正认可的卖点。
            <br />
            如果一直讲「自己想讲的」，却和消费者真实感受不一致，
            <span className="text-white font-bold">内容发得越多，反而越容易强化 AI 对品牌的错误认知。</span>
          </p>
        </div>

        {/* 中：错位对照，而不是相加公式 */}
        <div className="flex items-center gap-8 pr-[100px] mt-2">
          <div className="px-12 py-9 rounded-[32px] bg-zinc-900/70 border border-zinc-700/80">
            <span className="block text-[20px] text-zinc-500 font-['MiSans'] mb-2">品牌想讲</span>
            <span className="text-[44px] font-black text-zinc-300 font-['MiSans'] leading-none">自己的卖点</span>
          </div>
          <span className="text-[56px] font-black text-zinc-600 leading-none">≠</span>
          <div className="px-12 py-9 rounded-[32px] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
            <span className="block text-[20px] text-blue-200/70 font-['MiSans'] mb-2">用户真正认可</span>
            <span className="text-[44px] font-black text-white font-['MiSans'] leading-none">真实卖点</span>
          </div>
          <span className="text-[48px] font-black text-zinc-600 leading-none mx-1">→</span>
          <span className="text-[34px] text-amber-400 font-['MiSans'] font-bold leading-tight">
            发得越多
            <br />
            错得越深
          </span>
        </div>

        {/* 下：GEO 必须知道的三件事 */}
        <div className="w-full border-t border-zinc-800 pt-8 shrink-0" style={{ maxWidth: '1480px' }}>
          <p className="text-[26px] text-zinc-400 font-['MiSans'] mb-6">
            所以 GEO <span className="text-white font-bold">不能只看品牌定位</span>，还必须知道消费者——
          </p>
          <div className="flex gap-12">
            {MUST_KNOW.map((item, i) => (
              <div key={item.label} className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-['Montserrat'] text-[22px] font-black text-[#004CE5]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[30px] font-black text-white font-['MiSans']">{item.label}</span>
                </div>
                <p className="text-[22px] text-zinc-500 font-['MiSans'] leading-relaxed mt-2 pl-[42px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentWhy.hideHeader = true;
