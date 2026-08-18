import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * GEO 量化竞争模型 · 为什么不能只看监测数据
 * GEO 主线 + 股票旁注（主角是我们的模型，量化交易退为佐证）
 */

const MAP_ROWS = [
  {
    principle: '表面数据不是判断依据',
    stock: 'K 线、成交量只是现象，要找出真正驱动收益的因子',
    geo: '监测只说 AI 现在引用了什么，模型要算出哪个信源占了 80% 权重',
  },
  {
    principle: '收益 = 信号 − 成本',
    stock: '同样的资金，追求更高的夏普比率',
    geo: '同样的预算，追求更高的排名位次',
  },
  {
    principle: '永远有对手盘',
    stock: '拥挤交易会让 Alpha 衰减',
    geo: '竞对投 5 篇把你挤下去，模型要算出反制动作',
  },
  {
    principle: '活下来比冲高重要',
    stock: '控制回撤，不爆仓',
    geo: '第 1 不是短期冲上去，而是有成本壁垒的位置',
  },
  {
    principle: '策略容量有限',
    stock: '同一策略资金越大，收益必然被摊薄',
    geo: '同一细分类目只服务一家',
    emph: '排他原则',
    highlight: true,
  },
];

export default function Page_QuantitativeModel_Why() {
  const ROW_GRID = 'grid grid-cols-[76px_1fr_360px]';

  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      <div className="absolute top-0 left-0 w-full select-none font-['MiSans']">
        <p className="text-[34px] text-white font-black leading-[46px]">
          同样的钱，别人做完只能把品牌推到
          <span className="text-[40px] border-b-4 border-[#004CE5] pb-1 mx-1.5">第 3</span>
          ，我们能把品牌推到
          <span className="text-[40px] border-b-4 border-[#004CE5] pb-1 mx-1.5">第 1</span>
          。
        </p>
      </div>

      <div className="absolute left-0 top-[104px] w-full bottom-0 grid grid-cols-2 gap-8 select-none font-['MiSans']">
        {/* 左：五条量化原理逐行对照 */}
        <div className="min-w-0 rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden flex flex-col">
          <div className={`${ROW_GRID} shrink-0 items-center bg-[#004CE5]/15 border-b border-[#004CE5]/30 px-8 py-4`}>
            <span />
            <span className="text-[22px] font-black text-white">GEO · 量化竞争模型</span>
            <span className="text-[22px] font-black text-white pl-8">股票 · 量化交易</span>
          </div>

          <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/[0.07]">
            {MAP_ROWS.map((r, i) => (
              <div key={r.principle} className={`${ROW_GRID} flex-1 min-h-0 items-center px-8`}>
                <span className="font-['Montserrat'] text-[34px] font-black text-[#004CE5] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 pr-8">
                  <div className="text-[24px] font-black text-white leading-[32px]">{r.principle}</div>
                  <div className="mt-1.5 text-[21px] font-bold text-white leading-[30px]">
                    {r.geo}
                    {r.emph && <span> —— {r.emph}</span>}
                  </div>
                </div>
                <div className="text-[19px] font-bold text-white leading-[28px] pl-8 border-l border-white/[0.08]">
                  {r.stock}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右：同等预算下的位次差距 */}
        <div className="min-w-0 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.07] px-10 py-9 flex flex-col justify-between">
          <div>
            <div className="text-[26px] font-black text-white">预算与效果对比</div>
            <p className="mt-5 text-[25px] font-bold text-white leading-[40px]">
              同类品牌、同等预算下，一旦在 AI 答案里占到第一位，竞品很难撼动，除非愿意花
              <span className="text-[29px] font-black border-b-4 border-[#004CE5] pb-0.5 mx-1.5">5-10 倍</span>
              的钱去砸内容和投放。
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <div className="text-[20px] font-black text-white mb-2.5">我们的预算 (1×)</div>
              <div className="h-[74px] rounded-2xl bg-black/30 border border-white/10 flex items-center relative overflow-hidden">
                <div className="h-full w-[34%] bg-[#004CE5] rounded-2xl" />
                <span className="absolute right-7 text-[24px] font-black text-white">第一名（占首位）</span>
              </div>
            </div>

            <div>
              <div className="text-[20px] font-black text-white mb-2.5">对手的预算 (5-10×)</div>
              <div className="h-[74px] rounded-2xl bg-black/30 border border-white/10 flex items-center relative overflow-hidden">
                <div className="h-full w-[86%] bg-white/15 rounded-2xl" />
                <span className="absolute right-7 text-[24px] font-black text-white">第三名</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Why.hideHeader = true;
