import React, { useState } from 'react';

function Page_GeoReportSentiment() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-2">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0.5">
                    <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
                        正负面分析
                    </h1>
                </div>

                {/* Main Content Sub-container: Dynamically fits to the image's width and stretches the bottom card to match it exactly */}
                <div className="flex-1 flex flex-col justify-between items-stretch min-h-0 w-fit max-w-[1580px] mx-auto gap-3.5">

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

                    {/* Bottom Section: Two-Column Negative Breakdown (More compact vertically, matching image width exactly) */}
                    <div className="h-[24%] min-h-[145px] max-h-[185px] shrink-0 flex flex-col gap-2 w-full">
                        {/* Intro Text */}
                        <div className="text-[17px] lg:text-[18px] xl:text-[19.5px] text-zinc-400 shrink-0 font-medium pl-0.5">
                            负面回答类型解析：
                        </div>

                        {/* Two-Column Grid */}
                        <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">

                            {/* Point 1: Terminal Channels & Services */}
                            <div className="col-span-6 flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.02] border border-white/[0.08] border-l-4 border-l-rose-500 rounded-r-2xl px-4 py-3 lg:px-5 lg:py-3.5 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.04]">
                                    <h4 className="text-[18.5px] lg:text-[19.5px] xl:text-[21px] font-bold text-white flex items-center gap-2 shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        1. 终端渠道与服务折损
                                    </h4>
                                    <p className="text-[15.5px] lg:text-[16.5px] xl:text-[17.5px] text-zinc-300 leading-normal font-normal overflow-y-auto">
                                        数据抓取到的核心负面标签之一是“<strong className="text-white font-semibold">执行存在差异</strong>”。在具体的长文本测试中，当询问“萨米特瓷砖售后服务怎么样”或“好不好”时，AI 明确指出萨米特的售后服务呈现出明显的“<strong className="text-rose-300 font-semibold">两面性</strong>”。
                                    </p>
                                </div>
                            </div>

                            {/* Point 2: Brand Information & Price Errors */}
                            <div className="col-span-6 flex flex-col min-h-0 h-full">
                                <div className="bg-gradient-to-br from-rose-500/10 to-white/[0.01] border border-rose-500/30 border-l-4 border-l-rose-500 rounded-r-2xl px-4 py-3 lg:px-5 lg:py-3.5 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.04] shadow-[0_0_20px_rgba(239,68,68,0.03)]">
                                    <h4 className="text-[18.5px] lg:text-[19.5px] xl:text-[21px] font-bold text-white flex items-center gap-2 shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        2. 品牌信息错误及价格错误
                                    </h4>
                                    <p className="text-[15.5px] lg:text-[16.5px] xl:text-[17.5px] text-zinc-300 leading-normal font-normal overflow-y-auto">
                                        在部分回答中，因为AI抓取到了一篇具有错误信息的文章，导致在回答中出现了明显的<strong className="text-rose-300 font-semibold">价格错误</strong>以及<strong className="text-rose-300 font-semibold">产品规格错误</strong>，容易给用户造成误解。
                                    </p>
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
