import React from 'react';

const channels = [
    {
        no: '01',
        title: '自有品牌电商',
        metric: '主引擎',
        metricLabel: '天猫 / 抖音 / 京东',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.15)',
        desc: '多店矩阵直营，真空收纳袋类目常年第一。线上贡献约八成收入，是品牌声量和现金流的主阵地，也最直接暴露在平台流量成本的波动里。',
    },
    {
        no: '02',
        title: '跨境电商出海',
        metric: '增量',
        metricLabel: '亚马逊 / TikTok / 独立站',
        accent: '#3B82F6',
        accentSoft: 'rgba(59,130,246,0.15)',
        desc: '亚马逊 2025 年同比增长约 45%，获评「产品创新出海品牌 50 强」。服务网络已覆盖 160 多个国家和地区，外销占比升至四成。',
    },
    {
        no: '03',
        title: '全球零售与 ODM',
        metric: '压舱石',
        metricLabel: '宜家 / 沃尔玛 / 3M',
        accent: '#10B981',
        accentSoft: 'rgba(16,185,129,0.15)',
        desc: '宜家真空吸盘的指定专用材料，沃尔玛、利德尔战略供应商，并与 3M 在蘑菇搭扣上深度合作。合作正从成品供应升级为材料供应。',
    },
    {
        no: '04',
        title: '军警与工业 B 端',
        metric: '新曲线',
        metricLabel: '警博会 / 公安采购 / 城市展厅',
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        desc: '已与部分省市公安机关合作，并成为杭州公安「警企学研用」试点单位。决策链最长、单值最高，但公开内容几乎为零，GEO 目前完全接不住。',
    },
];

export default function Page_BrandChannel() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-8 lg:pt-10 pb-5 relative z-10">
                <h1 className="text-[32px] lg:text-[36px] font-black text-white tracking-widest leading-none">商业模式与渠道触达体系</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1680px] mx-auto px-8 pb-5 relative z-10 flex items-stretch gap-5">

                <div className="w-[380px] shrink-0 bg-[#111] border border-white/10 rounded-2xl px-10 py-8 flex flex-col gap-6 justify-between">
                    <h2 className="text-[24px] font-black text-white flex items-center gap-2.5">
                        <span className="w-2.5 h-6 bg-[#004CE5] rounded-full" />
                        三大板块营收结构
                    </h2>

                    <div className="relative w-[200px] h-[200px] mx-auto shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="85 15" strokeDashoffset="0" strokeLinecap="round" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#10B981" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="10 90" strokeDashoffset="-85" strokeLinecap="round" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.5"
                                pathLength="100" strokeDasharray="4 96" strokeDashoffset="-95" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[36px] font-black text-white tracking-tight leading-none">10.4亿</span>
                            <span className="text-[16px] text-blue-400 font-bold mt-2">2025 年营收</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#004CE5]" />
                                <span className="text-[18px] font-bold text-white">健康家居生活</span>
                            </div>
                            <span className="text-[24px] font-black text-white">85%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#10B981]" />
                                <span className="text-[18px] font-bold text-zinc-200">高性能防护</span>
                            </div>
                            <span className="text-[24px] font-black text-zinc-200">10%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/50 rounded-xl px-5 py-3.5 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#64748b]" />
                                <span className="text-[18px] font-bold text-zinc-200">户外及应急装备</span>
                            </div>
                            <span className="text-[24px] font-black text-zinc-200">4%</span>
                        </div>
                    </div>

                    <p className="text-[20px] text-zinc-300 leading-relaxed pt-4 border-t border-white/10 text-justify [text-justify:inter-ideograph]">
                        模式本质：<strong className="text-white">品牌电商直销 + 全球零售 ODM + B 端材料供应</strong>。线上约占八成，外销约占四成；高性能防护增速最快，但基数还小。
                    </p>
                </div>

                <div className="flex-1 min-w-0 flex flex-col gap-3.5">
                    {channels.map((ch) => (
                        <div
                            key={ch.no}
                            className="flex-1 bg-[#111] border border-white/10 rounded-2xl px-10 py-5 flex items-center gap-6"
                            style={{ borderLeftWidth: 5, borderLeftColor: ch.accent }}
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                                style={{ backgroundColor: ch.accentSoft, color: ch.accent }}
                            >
                                <span className="text-[24px] font-black">{ch.no}</span>
                            </div>

                            <div className="w-[210px] shrink-0">
                                <h3 className="text-[26px] font-black text-white leading-tight tracking-wide whitespace-nowrap">
                                    {ch.title}
                                </h3>
                                <span className="text-[16px] font-bold mt-1.5 block" style={{ color: ch.accent }}>
                                    {ch.metricLabel}
                                </span>
                            </div>

                            <div className="w-[150px] shrink-0 text-center">
                                <div className="text-[32px] font-black leading-none tracking-tight" style={{ color: ch.accent }}>
                                    {ch.metric}
                                </div>
                            </div>

                            <p className="flex-1 min-w-0 text-[20px] text-zinc-200 leading-[1.65] border-l border-white/10 pl-6 text-justify [text-justify:inter-ideograph]">
                                {ch.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
