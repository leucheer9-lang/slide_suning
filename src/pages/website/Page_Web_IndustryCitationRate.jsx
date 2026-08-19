import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   口径：官网（品牌自有站点）在 AI 回答引用信源中的占比
   数据基础：新榜智汇 4400 万+ 条 AI 信源监测（6 大主流 AI 平台 /
   11 个细分行业 / 8 大类信源 / 连续 4 个月追踪）公开披露的结论——
   全量信源中官网占 19.1%，大众消费行业均值 13.8%，
   教育 / 医疗 / 金融等行业超 11%、白酒仅 2.35%，最高与最低相差近 10 倍。
   公开报告未逐行业给出数值，下列分行业数值按上述区间与排序综合估算，
   仅用于说明量级差异，不作为精确指标。
   苏宁主营的家电 3C / 科技数码处于均值以下，故本页结论为：
   官网不是苏宁的主战场，但价格与服务口径只能由自有站点供数。
   ============================================================ */

const MAX = 24;
const CONSUMER_AVG = 13.8;

const INDUSTRIES = [
    { name: '教育培训', rate: 21.7 },
    { name: '医疗健康', rate: 19.4 },
    { name: '金融保险', rate: 15.2 },
    { name: '汽车', rate: 11.3 },
    { name: '科技数码', rate: 9.6, highlight: true },
    { name: '家电家居', rate: 8.4, highlight: true },
    { name: '母婴亲子', rate: 7.1 },
    { name: '食品饮料', rate: 5.6 },
    { name: '服饰鞋包', rate: 4.3 },
    { name: '美妆个护', rate: 3.1 },
    { name: '白酒', rate: 2.4 },
];

// 对苏宁的三段结论：先认清位置，再指出唯一不可替代的那块，最后给投入判断
const TIERS = [
    {
        label: '官网不是苏宁的主战场',
        desc: 'AI 回答「哪台冰箱好、值不值得买」时，引用的是评测、榜单、用户口碑，不是 suning.com 的介绍页。这部分要靠内容投放去抢，官网使不上劲。',
    },
    {
        label: '但价格和服务，只有苏宁官网说得清',
        desc: '价格、国补、以旧换新、送装与售后政策——没有任何第三方能给出权威口径。苏宁的页面 AI 抓不到，它就只能拿过期报价和竞品页面凑答案。',
        highlight: true,
    },
    {
        label: '所以不用改版，写给 AI 看就行',
        desc: '不重做官网，只把商品、价格、服务、FAQ 写成 AI 抓得到的页面：一次性投入，之后长期被所有 AI 平台引用。',
    },
];

function Bar({ item }) {
    const isHi = item.highlight;

    return (
        <div className="flex-1 min-w-0 h-full flex flex-col items-center justify-end">
            <span
                className={`shrink-0 mb-2 font-bold leading-none font-['Montserrat'] tabular-nums ${
                    isHi ? 'text-[32px] text-[#4C8DFF]' : 'text-[26px] text-white'
                }`}
            >
                {item.rate.toFixed(1)}%
            </span>
            <div
                className="w-full rounded-t-[10px]"
                style={{
                    height: `${(item.rate / MAX) * 100}%`,
                    maxWidth: 92,
                    background: isHi
                        ? 'linear-gradient(to top, rgba(76,141,255,0.35), #4C8DFF)'
                        : 'linear-gradient(to top, rgba(255,255,255,0.06), rgba(255,255,255,0.26))',
                    boxShadow: isHi ? '0 0 32px rgba(76,141,255,0.45)' : 'none',
                }}
            />
        </div>
    );
}

export default function Page_Web_IndustryCitationRate() {
    return (
        <SlideLayout
            title="官网对苏宁到底重不重要"
            subtitle="家电 3C、科技数码官网很少被引用——价格和服务，只能看苏宁官网"
        >
            <div className="w-full h-full flex gap-5 animate-fadeIn font-['MiSans']">
                {/* ── 左：分行业官网引用率 ── */}
                <div className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 pt-6 pb-5 flex flex-col">
                    <div className="shrink-0 flex items-baseline gap-4">
                        <h3 className="text-[30px] font-bold text-white leading-none">
                            AI 回答里，官网被当作信源的比例
                        </h3>
                        <span className="text-[22px] text-[#4C8DFF] leading-none">蓝色为苏宁主营品类</span>
                    </div>

                    {/* 柱状图 */}
                    <div className="flex-1 min-h-0 mt-5 flex flex-col">
                        <div className="flex-1 min-h-0 relative">
                            {/* 大众消费行业均值参考线 */}
                            <div
                                className="absolute left-0 right-0 z-10 pointer-events-none border-t border-dashed border-white/40"
                                style={{ bottom: `${(CONSUMER_AVG / MAX) * 100}%` }}
                            >
                                <span className="absolute right-0 -top-[24px] text-[17px] text-white leading-none font-['Montserrat']">
                                    均值 13.8%
                                </span>
                            </div>

                            <div className="w-full h-full flex items-end gap-2">
                                {INDUSTRIES.map((item) => (
                                    <Bar key={item.name} item={item} />
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 flex items-start gap-2 pt-3.5">
                            {INDUSTRIES.map((item) => (
                                <span
                                    key={item.name}
                                    className={`flex-1 min-w-0 text-center text-[23px] leading-none whitespace-nowrap ${
                                        item.highlight ? 'font-bold text-[#4C8DFF]' : 'text-white'
                                    }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="shrink-0 mt-4 text-[20px] text-white leading-[30px] whitespace-nowrap">
                        教育、医疗、金融答错要担责，AI 只认官网；家电、美妆、白酒靠口碑评测，官网说不上话。
                    </p>
                    <p className="shrink-0 mt-2 text-[16px] text-white/70 leading-[24px]">
                        数据来自新榜智汇 4400 万+ 条 AI 信源监测（6 个平台、11 个行业、4 个月）；报告只公开区间和排序，各行业数值为估算，看量级即可。
                    </p>
                </div>

                {/* ── 右：对苏宁的三段结论 ── */}
                <div className="w-[560px] shrink-0 h-full flex flex-col gap-4">
                    {TIERS.map((tier) => (
                        <div
                            key={tier.label}
                            className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-5 flex flex-col justify-center relative overflow-hidden"
                        >
                            {tier.highlight && (
                                <span className="absolute left-0 top-0 h-full w-[4px] bg-[#4C8DFF]" />
                            )}
                            <span
                                className={`text-[28px] font-bold leading-[38px] whitespace-nowrap ${
                                    tier.highlight ? 'text-[#4C8DFF]' : 'text-white'
                                }`}
                            >
                                {tier.label}
                            </span>
                            <p className="mt-3 text-[22px] text-white leading-[34px]">{tier.desc}</p>
                        </div>
                    ))}

                    <p className="shrink-0 text-[21px] text-white leading-[32px]">
                        而且这个比例还在往上走：4 个月里整体从 15.06% 涨到 24.66%，DeepSeek 上已经到 33.32%。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_Web_IndustryCitationRate.hideHeader = true;
