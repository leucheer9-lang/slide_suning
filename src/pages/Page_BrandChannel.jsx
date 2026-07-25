import React from 'react';

const channels = [
    {
        no: '01',
        title: '线上电商',
        metric: '~55%',
        metricLabel: '渠道占比',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.15)',
        desc: 'APP / PC 自营 + 流量平台合作，承接线上家电 3C 消费与以旧换新转化，是当前营收的主渠道。',
    },
    {
        no: '02',
        title: '线下自营大店',
        metric: '79 家',
        metricLabel: '2025 新开重装',
        accent: '#94A3B8',
        accentSoft: 'rgba(148,163,184,0.15)',
        desc: 'Max / Pro / 易家聚焦核心城市；同年关停低效店 238 家，打造沉浸式逛购与一站式置家体验。',
    },
    {
        no: '03',
        title: '零售云加盟',
        metric: '9,401',
        metricLabel: '加盟店 · 县镇下沉',
        accent: '#10B981',
        accentSoft: 'rgba(16,185,129,0.15)',
        desc: '较 2024 年 10,168 家主动优化；服务县镇就近体验、性价比与售后，是下沉市场核心网络。',
    },
    {
        no: '04',
        title: '易采云政企',
        metric: '+23.18%',
        metricLabel: '2025 收入增速',
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        desc: 'B2B 数字化采购平台，服务政企客户，是主业之外的重要增长曲线与增量来源。',
    },
];

export default function Page_BrandChannel() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-8 lg:pt-10 pb-5 relative z-10">
                <h1 className="text-[32px] lg:text-[36px] font-black text-white tracking-widest leading-none">商业模式与全场景渠道体系</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1680px] mx-auto px-8 pb-5 relative z-10 flex items-stretch gap-5">

                {/* Left: chart panel */}
                <div className="w-[380px] shrink-0 bg-[#111] border border-white/10 rounded-2xl px-7 py-8 flex flex-col gap-6 justify-between">
                    <h2 className="text-[24px] font-black text-white flex items-center gap-2.5">
                        <span className="w-2.5 h-6 bg-[#004CE5] rounded-full" />
                        大盘渠道格局占比
                    </h2>

                    <div className="relative w-[200px] h-[200px] mx-auto shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="55 45" strokeDashoffset="0" strokeLinecap="round" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="45 55" strokeDashoffset="-55" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[42px] font-black text-white tracking-tight leading-none">55%</span>
                            <span className="text-[16px] text-blue-400 font-bold mt-2">线上电商</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#004CE5]" />
                                <span className="text-[18px] font-bold text-white">线上电商</span>
                            </div>
                            <span className="text-[24px] font-black text-white">~55%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#64748b]" />
                                <span className="text-[18px] font-bold text-zinc-200">线下门店</span>
                            </div>
                            <span className="text-[24px] font-black text-zinc-200">~45%</span>
                        </div>
                    </div>

                    <p className="text-[17px] text-zinc-300 leading-relaxed pt-4 border-t border-white/10">
                        模式本质：<strong className="text-white">零售平台 + 渠道 / 服务</strong>。线上线下一体，自营与加盟并行，城市与农村协同。
                    </p>
                </div>

                {/* Right: channel rows */}
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
                                <div className="text-[40px] font-black leading-none tracking-tight" style={{ color: ch.accent }}>
                                    {ch.metric}
                                </div>
                            </div>

                            <p className="flex-1 min-w-0 text-[18px] text-zinc-200 leading-[1.65] border-l border-white/10 pl-6">
                                {ch.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
