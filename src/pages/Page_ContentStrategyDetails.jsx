import React from 'react';

export default function Page_ContentStrategyDetails() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">大模型高频引用文章明细</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    溯源反推：大模型引用偏好内容分析与溯源统计明细
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full mx-auto px-4 pb-4 z-10 flex items-center justify-center min-h-0">

                {/* Scale wrapper for the Two placeholders */}
                <div className="w-full grid grid-cols-2 gap-6 items-start justify-center max-h-full">

                    {/* Left Column */}
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center gap-2 px-2">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                            <h3 className="text-xl font-black text-white tracking-wide">综合 Top 100 引用文章明细</h3>
                        </div>

                        {/* Left Placeholder Card */}
                        <div className="w-full aspect-[16/10] relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group flex flex-col items-center justify-center">
                            <img
                                src="/Add_Charts/content-strategy-details-1.png"
                                alt="综合 Top 100 引用文章明细"
                                className="absolute inset-0 w-full h-full object-contain p-2 z-20"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />

                            {/* Placeholder UI */}
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 mb-5 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-zinc-300 text-[1.3rem] font-bold tracking-widest text-center px-4">
                                    综合 Top 100 引用文章明细
                                </span>
                                <span className="text-zinc-500/80 text-[1rem] mt-3 font-mono">
                                    /Add_Charts/content-strategy-details-1.png
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center gap-2 px-2">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                            <h3 className="text-xl font-black text-white tracking-wide">提到桃李面包的引用文章 Top 45 明细</h3>
                        </div>

                        {/* Right Placeholder Card */}
                        <div className="w-full aspect-[16/10] relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group flex flex-col items-center justify-center">
                            <img
                                src="/Add_Charts/content-strategy-details-2.png"
                                alt="提到萨米特的引用文章 Top 45 明细"
                                className="absolute inset-0 w-full h-full object-contain p-2 z-20"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />

                            {/* Placeholder UI */}
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 mb-5 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-zinc-300 text-[1.3rem] font-bold tracking-widest text-center px-4">
                                    提到萨米特的引用文章 Top 45 明细
                                </span>
                                <span className="text-zinc-500/80 text-[1rem] mt-3 font-mono">
                                    /Add_Charts/content-strategy-details-2.png
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
