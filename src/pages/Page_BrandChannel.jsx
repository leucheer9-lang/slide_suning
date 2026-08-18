import React from 'react';

const channels = [
    {
        no: '01',
        title: '业主直招',
        metric: '主路径',
        metricLabel: '官网 + 招商中心',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.15)',
        desc: '创维科技园公司自持招租，看房、谈价、免租期都在业主侧闭环。大面积、产业链客户通常走这条，佣金成本最低、成交信息最完整。',
    },
    {
        no: '02',
        title: '中介与房源平台',
        metric: '铺量',
        metricLabel: '58 / 安居客 / 写字楼网',
        accent: '#94A3B8',
        accentSoft: 'rgba(148,163,184,0.15)',
        desc: '公开市场里创新谷出现最多的地方。能带来询盘，但内容以面积和单价为主，很少讲清「链主园区」和工业上楼，容易被比成普通写字楼。',
    },
    {
        no: '03',
        title: '政府产业渠道',
        metric: '背书',
        metricLabel: '工信 / 投资推广 / 桃花源',
        accent: '#10B981',
        accentSoft: 'rgba(16,185,129,0.15)',
        desc: '省级特色产业园和科技桃花源身份，让园区能进入区、市产业招引名单。适合对接迁入奖励、租金补贴和高企落户，转化周期长、客户质量高。',
    },
    {
        no: '04',
        title: '产业链转介绍',
        metric: '暗线',
        metricLabel: '供应商 / 在园企业互荐',
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        desc: '创维供应商和已入驻企业介绍同行入园。这条链路最贴近真实选址动机，但公开内容几乎看不见，GEO 和官网目前都接不住。',
    },
];

export default function Page_BrandChannel() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-8 lg:pt-10 pb-5 relative z-10">
                <h1 className="text-[32px] lg:text-[36px] font-black text-white tracking-widest leading-none">商业模式与招商触达体系</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1680px] mx-auto px-8 pb-5 relative z-10 flex items-stretch gap-5">

                <div className="w-[380px] shrink-0 bg-[#111] border border-white/10 rounded-2xl px-7 py-8 flex flex-col gap-6 justify-between">
                    <h2 className="text-[24px] font-black text-white flex items-center gap-2.5">
                        <span className="w-2.5 h-6 bg-[#004CE5] rounded-full" />
                        对外开放空间结构
                    </h2>

                    <div className="relative w-[200px] h-[200px] mx-auto shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="20 80" strokeDashoffset="0" strokeLinecap="round" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="58 42" strokeDashoffset="-20" strokeLinecap="round" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#10B981" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="22 78" strokeDashoffset="-78" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[36px] font-black text-white tracking-tight leading-none">45万</span>
                            <span className="text-[16px] text-blue-400 font-bold mt-2">㎡ 对外开放</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#004CE5]" />
                                <span className="text-[18px] font-bold text-white">二期商务综合</span>
                            </div>
                            <span className="text-[24px] font-black text-white">58%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#10B981]" />
                                <span className="text-[18px] font-bold text-zinc-200">三期总部办公</span>
                            </div>
                            <span className="text-[24px] font-black text-zinc-200">22%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#64748b]" />
                                <span className="text-[18px] font-bold text-zinc-200">一期工业上楼</span>
                            </div>
                            <span className="text-[24px] font-black text-zinc-200">20%</span>
                        </div>
                    </div>

                    <p className="text-[20px] text-zinc-300 leading-relaxed pt-4 border-t border-white/10">
                        模式本质：<strong className="text-white">自持出租 + 园区运营</strong>。不散售，靠租金、物业和配套经营回收；招商按产业链筛选，不是来租就收。
                    </p>
                </div>

                <div className="flex-1 min-w-0 flex flex-col gap-3.5">
                    {channels.map((ch) => (
                        <div
                            key={ch.no}
                            className="flex-1 bg-[#111] border border-white/10 rounded-2xl px-7 py-5 flex items-center gap-6"
                            style={{ borderLeftWidth: 5, borderLeftColor: ch.accent }}
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                                style={{ backgroundColor: ch.accentSoft, color: ch.accent }}
                            >
                                <span className="text-[24px] font-black">{ch.no}</span>
                            </div>

                            <div className="w-[200px] shrink-0">
                                <h3 className="text-[26px] font-black text-white leading-tight tracking-wide">
                                    {ch.title}
                                </h3>
                                <span className="text-[16px] font-bold mt-1.5 block" style={{ color: ch.accent }}>
                                    {ch.metricLabel}
                                </span>
                            </div>

                            <div className="w-[160px] shrink-0 text-center">
                                <div className="text-[32px] font-black leading-none tracking-tight" style={{ color: ch.accent }}>
                                    {ch.metric}
                                </div>
                            </div>

                            <p className="flex-1 min-w-0 text-[20px] text-zinc-200 leading-[1.65] border-l border-white/10 pl-6">
                                {ch.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
