import React from 'react';

export default function Page_PlatformFilterConclusion() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[5px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-3 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">平台筛选结论总览</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    未来的核心投放资源将完全聚焦于由上述三组精选的高价值平台构成的矩阵
                </p>
            </div>

            {/* ── Main Content Area (Three Columns Layout) ── */}
            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 lg:px-12 pb-4 z-10 min-h-0 container grid grid-cols-3 gap-6 xl:gap-8">

                {/* Column 1: A组 */}
                <div className="flex flex-col min-h-0">
                    <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 p-6 flex flex-col gap-4 shadow-2xl h-full">
                        <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-white/20"></div>
                        <h2 className="text-[1.35rem] font-bold text-blue-100 tracking-widest flex items-center justify-between">
                            A组：共性高频网站 <span className="text-zinc-400 text-[1.05rem]">（5个）</span>
                        </h2>
                        <div className="w-full h-px bg-white/5 my-0 shrink-0"></div>

                        <div className="flex flex-col gap-3 pb-2 pt-1">
                            {[
                                { name: "太平洋家居", num: "103", cover: "DeepSeek、豆包、通义千问" },
                                { name: "网易", num: "90", cover: "DeepSeek、豆包、通义千问" },
                                { name: "今日头条", num: "77", cover: "豆包、通义千问" },
                                { name: "界面新闻", num: "47", cover: "DeepSeek、通义千问" },
                                { name: "千龙网", num: "40", cover: "豆包、通义千问" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col bg-white/[0.03] px-4 py-3 rounded-xl border border-white/5 transition-colors hover:bg-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white/90 font-bold text-[1.25rem]"><span className="text-zinc-500 mr-2">{idx + 1}.</span>{item.name}</span>
                                        <span className="text-[#004CE5] font-mono text-[1.15rem] bg-[#004CE5]/10 px-2 py-0.5 rounded font-bold border border-[#004CE5]/20">引用 {item.num} 次</span>
                                    </div>
                                    <div className="text-zinc-400 text-[1.05rem] flex gap-2"><span className="text-zinc-500 shrink-0">模型覆盖:</span> <span className="truncate">{item.cover}</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2: B组 */}
                <div className="flex flex-col min-h-0">
                    <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 p-6 flex flex-col gap-4 shadow-2xl h-full">
                        <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-white/20"></div>
                        <h2 className="text-[1.35rem] font-bold text-blue-100 tracking-widest flex items-center justify-between">
                            B组：差异化特异平台 <span className="text-zinc-400 text-[1.05rem]">（3个）</span>
                        </h2>
                        <div className="w-full h-px bg-white/5 my-0 shrink-0"></div>

                        <div className="flex flex-col gap-3 pb-2 pt-1">
                            {[
                                { group: "DeepSeek", items: [{ n: "中国陶瓷网", c: "26" }] },
                                { group: "豆包", items: [{ n: "抖音", c: "103" }] },
                                { group: "通义千问", items: [{ n: "大众网", c: "14" }] }
                            ].map((g, i) => (
                                <div key={i} className="flex flex-col gap-1.5 bg-white/[0.03] px-4 py-2.5 rounded-xl border border-white/5 transition-colors hover:bg-white/5">
                                    <span className="text-zinc-300 font-bold text-[1.2rem] tracking-wider mb-0.5 px-1">{g.group} 对应极高权重池：</span>
                                    <div className="flex justify-between items-center text-[1.2rem] bg-black/20 px-3 py-1.5 rounded-md">
                                        <span className="text-white/80 font-medium truncate pr-2">· {g.items[0].n}</span>
                                        <span className="text-zinc-400 font-mono shrink-0 text-[1.1rem]">{g.items[0].c} 次引用</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 3: C组 & Remarks */}
                <div className="flex flex-col min-h-0">
                    <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 p-6 flex flex-col gap-4 shadow-2xl h-full">
                        <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-white/20"></div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-[1.35rem] font-bold text-blue-100 tracking-widest">
                                C组：高命中高频阵地
                            </h2>
                            <span className="text-zinc-400 text-[1.05rem]">（5个）</span>
                        </div>
                        <div className="w-full h-px bg-white/5 my-0 shrink-0"></div>

                        <div className="flex flex-col gap-2 pb-2 pt-1 relative">
                            {/* Table Header */}
                            <div className="grid grid-cols-[1fr_50px_50px_80px] xl:grid-cols-[1fr_60px_60px_90px] gap-3 xl:gap-4 px-2 py-1 text-zinc-500 font-bold text-[1rem]">
                                <span>东鹏瓷砖高优平台</span>
                                <span className="text-right">引用</span>
                                <span className="text-right">命中</span>
                                <span className="text-right">胜率</span>
                            </div>

                            {[
                                { n: "淘宝网", ref: 88, hit: 88, rate: "100.00%" },
                                { n: "房天下", ref: 77, hit: 77, rate: "100.00%" },
                                { n: "陶城网", ref: 55, hit: 55, rate: "100.00%" },
                                { n: "sqxww.com", ref: 44, hit: 44, rate: "100.00%" },
                                { n: "邢台广播电视台", ref: 44, hit: 44, rate: "100.00%" }
                            ].map((item, idx) => (
                                <div key={idx} className="grid grid-cols-[1fr_50px_50px_80px] xl:grid-cols-[1fr_60px_60px_90px] gap-3 xl:gap-4 items-center bg-white/[0.03] px-3 py-2 rounded-lg border border-white/5 transition-colors hover:bg-white/5">
                                    <span className="text-white/90 font-bold text-[1.1rem] truncate" title={item.n}>{item.n}</span>
                                    <span className="text-zinc-400 font-mono text-[1.1rem] text-right">{item.ref}</span>
                                    <span className="text-zinc-400 font-mono text-[1.1rem] text-right">{item.hit}</span>
                                    <span className="text-zinc-300 font-mono text-[1.1rem] font-black text-right">{item.rate}</span>
                                </div>
                            ))}
                        </div>

                        {/* 说明区域 */}
                        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                            <span className="text-zinc-400 font-bold text-[1.2rem] tracking-widest flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                说明
                            </span>
                            <div className="flex flex-col gap-2 border-l-2 border-white/20 pl-4 bg-white/[0.02] py-2.5 rounded-r-lg">
                                <p className="flex items-start text-zinc-300 text-[1.05rem] leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block mt-2 mr-2 shrink-0"></span>
                                    <span className="flex-1">C组平台是核心竞品（东鹏瓷砖）在AI引用中命中率最高的媒体/内容平台</span>
                                </p>
                                <p className="flex items-start text-zinc-300 text-[1.05rem] leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block mt-2 mr-2 shrink-0"></span>
                                    <span className="flex-1"><strong className="text-white/90">命中率 = </strong>引用文章中提及竞品的次数 ÷ 该平台总引用次数</span>
                                </p>
                                <p className="flex items-start text-zinc-300 text-[1.05rem] leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block mt-2 mr-2 shrink-0"></span>
                                    <span className="flex-1">高命中率意味着该平台在瓷砖及家居建材领域具备极高的AI信任权重，竞争拦截价值巨大</span>
                                </p>
                                <p className="flex items-start text-zinc-500 text-[0.95rem] leading-snug mt-1 border-t border-white/5 pt-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 inline-block mt-1.5 mr-2 shrink-0"></span>
                                    <span className="flex-1">筛选条件：引用次数≥20，排除品牌自有平台</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
