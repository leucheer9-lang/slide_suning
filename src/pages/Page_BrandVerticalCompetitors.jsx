import React from 'react';

const competitors = [
    {
        no: '01',
        title: '品牌自建直营店',
        hook: '没有中间商赚差价',
        platforms: ['海尔智家·三翼鸟', '美的美居', '格力董明珠店'],
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.15)',
        playPunch: '卖整套智慧场景，不卖单件家电',
        playDetail: 'App 为控制中枢 + 线下直营体验店（如三翼鸟场景店），输出「智慧厨房 / 智慧客厅」方案。',
        threatPunch: '高端套系订单被原厂直接消化',
        threatDetail: '利润最高的那一截，在品牌方自家池子里闭环；原厂直销是苏宁最忌惮的截流力量。',
    },
    {
        no: '02',
        title: '下沉产业互联网',
        hook: '农村包围城市',
        platforms: ['汇通达', '天猫优品'],
        accent: '#10B981',
        accentSoft: 'rgba(16,185,129,0.15)',
        playPunch: '收编县镇夫妻店，不抢大城市大店',
        playDetail: '给当地家电小店提供 SaaS、统一货源供应链与物流，专攻县城与乡镇。',
        threatPunch: '贴身抢夺零售云加盟商与网点',
        threatDetail: '苏宁最核心护城河之一是县镇零售云；汇通达、天猫优品是绝对劲敌。',
    },
    {
        no: '03',
        title: '家装家居一体化',
        hook: '截胡流量的上游玩家',
        platforms: ['居然之家', '红星美凯龙', '住小帮'],
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        playPunch: '装修图纸阶段就把家电打包卖掉',
        playDetail: '嵌入式 / 前置化趋势下，建材家具同时招商家电，推行「家装家电一站购」。',
        threatPunch: '流量在装修阶段就被拦截',
        threatDetail: '等想到逛苏宁时，大件可能已与橱柜一起定好。',
    },
];

export default function Page_BrandVerticalCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2 relative z-10 px-8">
                <h1 className="text-[40px] font-black text-white tracking-widest leading-none mb-1.5">
                    家电领域垂直竞品有谁？
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug max-w-[1100px] mx-auto">
                    对苏宁构成直接截流、且极具参考价值的垂直 / 准垂直平台
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-3 relative z-10 flex flex-col gap-2.5">
                {competitors.map((c) => (
                    <div
                        key={c.no}
                        className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex overflow-hidden"
                        style={{ borderLeftWidth: 5, borderLeftColor: c.accent }}
                    >
                        {/* Identity */}
                        <div className="w-[340px] shrink-0 px-6 py-3 border-r border-white/10 bg-black/40 flex flex-col justify-center gap-2">
                            <div className="flex items-center gap-3.5">
                                <span
                                    className="w-14 h-14 rounded-xl flex items-center justify-center text-[24px] font-black shrink-0"
                                    style={{ backgroundColor: c.accentSoft, color: c.accent }}
                                >
                                    {c.no}
                                </span>
                                <div className="min-w-0">
                                    <h2 className="text-[30px] font-black text-white leading-tight tracking-wide">
                                        {c.title}
                                    </h2>
                                    <p className="text-[19px] font-bold mt-1" style={{ color: c.accent }}>
                                        {c.hook}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-[70px]">
                                {c.platforms.map((p) => (
                                    <span
                                        key={p}
                                        className="text-[16px] font-semibold text-zinc-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Core play */}
                        <div className="flex-1 min-w-0 px-7 py-3 border-r border-white/10 flex flex-col justify-center gap-1.5">
                            <div className="text-[16px] font-bold tracking-widest text-zinc-500">
                                核心打法
                            </div>
                            <div className="text-[28px] font-black text-white leading-snug">
                                {c.playPunch}
                            </div>
                            <p className="text-[20px] text-zinc-300 leading-snug">{c.playDetail}</p>
                        </div>

                        {/* Threat */}
                        <div
                            className="w-[460px] shrink-0 px-7 py-3 flex flex-col justify-center gap-1.5"
                            style={{ backgroundColor: c.accentSoft }}
                        >
                            <div
                                className="text-[16px] font-black tracking-widest"
                                style={{ color: c.accent }}
                            >
                                对苏宁的威胁
                            </div>
                            <div className="text-[28px] font-black text-white leading-snug">
                                {c.threatPunch}
                            </div>
                            <p className="text-[20px] text-zinc-200 leading-snug">{c.threatDetail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
