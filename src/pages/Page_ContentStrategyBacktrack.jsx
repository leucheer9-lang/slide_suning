import React from 'react';

const CATEGORY_ROWS = [
    { name: '其他', count: 36, pct: 36, suningPct: 41, bar: '#71717a' },
    { name: '知识科普', count: 31, pct: 31, suningPct: 22, bar: '#d4a017' },
    { name: '单品介绍', count: 10, pct: 10, suningPct: 7, bar: '#22c55e' },
    { name: '排行榜', count: 8, pct: 8, suningPct: 18, bar: '#f97316' },
    { name: '行业资讯', count: 8, pct: 8, suningPct: 6, bar: '#a855f7' },
    { name: '测评', count: 7, pct: 7, suningPct: 6, bar: '#3b82f6' },
];

export default function Page_ContentStrategyBacktrack() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4 min-h-0">

                {/* Header */}
                <div className="shrink-0 flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl lg:text-[46px] font-black text-white tracking-widest leading-tight">
                            内容策略
                        </h1>
                    </div>
                    <div className="text-right text-zinc-500 text-[15px] lg:text-[16px] font-medium leading-snug">
                        <div>数据来源：geo-one</div>
                        <div>2026-07-25 · 苏宁易购 · 共 1850 篇独立文章</div>
                    </div>
                </div>

                {/* Context */}
                <div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-2xl py-3 px-4 lg:py-3.5 lg:px-5.5 flex items-start gap-4 shadow-xl backdrop-blur-md relative overflow-hidden transition-all duration-300 shrink-0">
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#004CE5]"></div>
                    <div className="flex-1 min-w-0">
                        <p className="text-zinc-300 text-[20px] lg:text-[21px] leading-relaxed tracking-wide font-medium">
                            为了杜绝 <span className="text-white font-bold">AI 批量洗稿带来的降权</span> 和被标记为 <span className="text-red-400 font-black">“投毒”风险</span>，确保更多的语料能被主流大模型抓取并高频引用，我们将严格执行以下内容策略：
                        </p>
                    </div>
                </div>

                {/* Step 01 */}
                <div className="bg-[#0a0a0a] border border-[#004CE5]/20 hover:border-[#004CE5]/50 rounded-2xl py-3.5 px-5 lg:py-4 lg:px-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default shrink-0">
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-[#004CE5]/5 blur-3xl group-hover:bg-[#004CE5]/10 transition-all duration-500"></div>

                    <div className="flex items-start gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-[#004CE5]/20 group-hover:text-[#004CE5]/40 transition-colors font-mono leading-none tracking-tighter mt-1">
                            01
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[28px] lg:text-[30px] font-black text-white tracking-wide mb-1.5 lg:mb-2 flex items-center gap-2.5">
                                溯源反推：搞清大模型的引用偏好
                            </h3>
                            <p className="text-zinc-300 text-[20px] lg:text-[21px] leading-relaxed tracking-wide font-medium">
                                依托 <span className="text-white font-bold">GEO 监测数据</span>，按总引用次数取 Top100，对比
                                <span className="text-[#004CE5] font-bold"> 综合高频文章 </span>
                                与
                                <span className="text-[#004CE5] font-bold"> 提到苏宁易购的稿件 </span>
                                在体裁结构上的差异，反推可被大模型高频采信的内容方向。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Category Distribution Table */}
                <div className="w-full flex-1 relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl min-h-0">
                    <div className="shrink-0 px-5 lg:px-6 py-3 lg:py-3.5 border-b border-white/10 bg-[#0b1220]/80 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-1.5 h-7 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                            <h2 className="text-[22px] lg:text-[26px] font-black text-white tracking-wide truncate">
                                文章类别分布统计
                            </h2>
                        </div>
                        <p className="text-zinc-400 text-[16px] lg:text-[17px] font-medium shrink-0 hidden md:block">
                            左：综合 Top100 · 右：提到苏宁易购 Top100
                        </p>
                    </div>

                    <div className="flex-1 min-h-0 overflow-hidden px-4 lg:px-5 py-3 lg:py-4 flex flex-col">
                        {/* Column headers */}
                        <div className="grid grid-cols-[140px_72px_72px_1fr_88px] xl:grid-cols-[160px_88px_88px_1fr_100px] gap-3 xl:gap-4 px-3 pb-2 text-zinc-500 font-bold text-[16px] lg:text-[17px] shrink-0">
                            <span>文章类别</span>
                            <span className="text-right">综合篇数</span>
                            <span className="text-right">综合占比</span>
                            <span>可视化（综合占比）</span>
                            <span className="text-right">苏宁占比</span>
                        </div>

                        <div className="flex-1 min-h-0 flex flex-col gap-2">
                            {CATEGORY_ROWS.map((row) => (
                                <div
                                    key={row.name}
                                    className="flex-1 min-h-0 grid grid-cols-[140px_72px_72px_1fr_88px] xl:grid-cols-[160px_88px_88px_1fr_100px] gap-3 xl:gap-4 items-center bg-white/[0.03] hover:bg-white/[0.06] px-3 rounded-xl border border-white/5 transition-colors"
                                >
                                    <span className="text-white font-black text-[22px] lg:text-[24px] tracking-wide truncate">
                                        {row.name}
                                    </span>
                                    <span className="text-zinc-300 font-mono text-[22px] lg:text-[24px] text-right font-bold">
                                        {row.count}
                                    </span>
                                    <span className="text-[#004CE5] font-mono text-[22px] lg:text-[24px] text-right font-black">
                                        {row.pct}%
                                    </span>
                                    <div className="relative h-4 lg:h-5 rounded-full bg-white/[0.06] overflow-hidden border border-white/5">
                                        <div
                                            className="absolute inset-y-0 left-0 rounded-full"
                                            style={{ width: `${row.pct}%`, backgroundColor: row.bar }}
                                        />
                                    </div>
                                    <span className="text-white font-mono text-[22px] lg:text-[24px] text-right font-black">
                                        {row.suningPct}%
                                    </span>
                                </div>
                            ))}

                            {/* Total */}
                            <div className="shrink-0 grid grid-cols-[140px_72px_72px_1fr_88px] xl:grid-cols-[160px_88px_88px_1fr_100px] gap-3 xl:gap-4 items-center bg-[#004CE5]/10 px-3 py-2.5 rounded-xl border border-[#004CE5]/25">
                                <span className="text-white font-black text-[22px] lg:text-[24px]">合计</span>
                                <span className="text-white font-mono text-[22px] lg:text-[24px] text-right font-black">100</span>
                                <span className="text-white font-mono text-[22px] lg:text-[24px] text-right font-black">100%</span>
                                <div />
                                <span className="text-white font-mono text-[22px] lg:text-[24px] text-right font-black">100%</span>
                            </div>
                        </div>

                        <p className="shrink-0 mt-3 text-zinc-400 text-[20px] lg:text-[21px] leading-relaxed tracking-wide font-medium">
                            注：「其他」占比最高，通常涵盖未归入上述五类的体裁，如
                            <span className="text-zinc-200 font-bold"> 选购指南、对比攻略、优惠促销、品牌故事、使用教程 </span>
                            等混合型内容。
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
