import React, { useState } from 'react';

function Page_GeoReportSentiment() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10 gap-2">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        正负面分析
                    </h1>
                </div>

                {/* Main Content Sub-container: Dynamically fits to the image's width and stretches the bottom card to match it exactly */}
                <div className="flex-1 flex flex-col justify-between items-stretch min-h-0 w-fit max-w-[1580px] mx-auto gap-3.5 pt-[20px]">
                    
                    {/* Top Section: Larger, Self-Adaptive Image Slot */}
                    <div className="flex-1 flex flex-col justify-center items-center min-h-0 relative">
                        {imgLoaded && !imgError ? (
                            /* Adaptive Border Wrapper: Tightly wraps the image based on its natural dimensions */
                            <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 group flex items-center justify-center">
                                <img
                                    src="/geo-report/page-64-sentiment.jpg"
                                    alt="正负面分析类型解析大图"
                                    className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                                    onLoad={() => setImgLoaded(true)}
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        ) : (
                            /* Fallback Placeholder matching the layout height with wider aspect ratio */
                            <div className="w-full aspect-[2.7/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                {/* Hidden Image for loading detection */}
                                <img
                                    src="/geo-report/page-64-sentiment.jpg"
                                    alt="正负面分析类型解析大图"
                                    className="hidden"
                                    onLoad={() => setImgLoaded(true)}
                                    onError={() => setImgError(true)}
                                />

                                {/* Fallback Placeholder UI */}
                                <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 022 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                        </svg>
                                    </div>
                                    <p className="text-zinc-300 font-bold text-base mb-1">此处为正负面类型解析大图展示位</p>
                                    <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                        存放路径: /public/geo-report/page-64-sentiment.jpg
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Section: Single Glassmorphic Container wrapping Title and Two-Column Negative Breakdown */}
                    <div className="h-[32%] min-h-[210px] max-h-[280px] shrink-0 w-full">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3.5 lg:p-4 flex flex-col h-full justify-between gap-2.5 shadow-2xl">
                            {/* Section Title */}
                            <h3 className="text-[21px] lg:text-[22.5px] xl:text-[24px] font-bold text-white flex items-center gap-2 shrink-0 pl-0.5">
                                <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                负面回答类型解析
                            </h3>

                            {/* Two-Column Grid Content */}
                            <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">

                                {/* Point 1: 期房交付引发的安全感危机 */}
                                <div className="col-span-6 flex flex-col min-h-0 h-full">
                                    <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03]">
                                        <h4 className="text-[17px] lg:text-[18.5px] xl:text-[20px] font-bold text-white flex items-center gap-2 shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            “期房焦虑”安全感危机
                                        </h4>
                                        <p className="text-[15px] lg:text-[16.5px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal">
                                            AI在“值得买吗”等词条下预警“需等待交房”，易导致客户决策犹豫。<br />
                                            <strong className="text-emerald-400">对冲方案：</strong>投放“深业与龙华建设双国企开发、保障准时交付”语料，化解疑虑。
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2: 交通便利带来的“噪音反噬” */}
                                <div className="col-span-6 flex flex-col min-h-0 h-full">
                                    <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03] shadow-[0_0_15px_rgba(239,68,68,0.02)]">
                                        <h4 className="text-[17px] lg:text-[18.5px] xl:text-[20px] font-bold text-white flex items-center gap-2 shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            临街地铁的“噪音反噬”
                                        </h4>
                                        <p className="text-[15px] lg:text-[16.5px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal">
                                            AI频繁提及临街及地铁“噪音”细节，在客户下定临门一脚时造成阻碍。<br />
                                            <strong className="text-emerald-400">对冲方案：</strong>主打“高配双层中空隔音玻璃、科学楼栋排布规避噪音”以体现品质。
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoReportSentiment;
