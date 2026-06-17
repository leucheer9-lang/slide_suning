import React from 'react';

function Page_GeoReportCompetitors_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10 pt-0 gap-3">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        竞品横向对比
                    </h1>
                </div>

                {/* Top Section: Larger, Self-Adaptive Image Slot occupying all remaining space */}
                {/* Top Section: Larger Image Slot occupying all remaining space, stretching to margins */}
                <div className="flex-1 w-full relative min-h-0 mb-2 pt-[20px]">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 flex items-center justify-center">
                        <img
                            src="/geo-report/page-57-competitors-compare.jpg"
                            alt="竞品横向对比大图"
                            className="w-full max-h-full rounded-lg object-contain select-none"
                        />
                    </div>
                </div>

                {/* Bottom Section: Balanced, Slightly Taller 3-Column Content Grid */}
                <div className="h-[35%] min-h-[240px] max-h-[320px] shrink-0 grid grid-cols-12 gap-5">

                    {/* Column 1: Core Discoveries */}
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[19px] lg:text-[20px] xl:text-[21.5px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                核心发现
                            </h3>

                            <div className="flex-grow flex flex-col gap-2 text-[16px] lg:text-[17.5px] xl:text-[19px] text-zinc-300 leading-relaxed font-normal text-justify">
                                <p>
                                    <strong className="text-white font-bold">声量绝对领先：</strong>合并提及率近 70%，对周边竞品形成压倒性优势（上城学府仅 5.7%）。
                                </p>
                                <p className="border-t border-white/5 pt-2">
                                    <strong className="text-white font-bold">案名分流内耗：</strong>因简称与全称并存导致AI权重分散，流量未充分聚合。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Competitive Landscape Summary */}
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[19px] lg:text-[20px] xl:text-[21.5px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                竞争格局总结
                            </h3>

                            <div className="flex-grow flex flex-col gap-2 text-[16px] lg:text-[17.5px] xl:text-[19px] text-zinc-300 leading-relaxed font-normal text-justify">
                                <p>
                                    项目在龙华上塘已无对手。客群资金跨区流动，需跳出板块，去全市拦截同等预算的改善型买家。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Action Suggestion */}
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                            <h3 className="text-[19px] lg:text-[20px] xl:text-[21.5px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                行动建议
                            </h3>

                            <div className="flex-grow flex flex-col gap-2 text-[16px] lg:text-[17.5px] xl:text-[19px] text-zinc-300 leading-relaxed font-normal text-justify">
                                <p>
                                    <strong className="text-white font-bold">1. 统一案名：</strong>规范使用【深业上宸瑞府】标准全称，聚合流量与AI权重。
                                </p>
                                <p className="border-t border-white/5 pt-2">
                                    <strong className="text-white font-bold">2. 全市拦截：</strong>主攻“深圳 500-800 万改善盘”等全市大词，跨区抢夺客源。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page_GeoReportCompetitors_Analysis;
