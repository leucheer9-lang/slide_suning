import React, { useState } from 'react';

export default function Page_GeoReport_Sentiment() {
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

                {/* Main Content Sub-container */}
                <div className="flex-1 flex flex-col justify-between items-stretch min-h-0 w-full max-w-[1580px] mx-auto gap-3.5 pt-[20px]">

                    {/* Top Section: Larger, Self-Adaptive Image Slot */}
                    <div className="flex-1 w-full max-h-[50vh] min-h-0 mb-4 flex items-center justify-center">
                        {(!imgError) ? (
                            <img
                                src="/charts/geo-dashboard-sentiment-1.png"
                                alt="正负面分析类型解析大图"
                                className="w-full h-full object-contain select-none"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="w-full aspect-[2.7/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                    <p className="text-zinc-300 font-bold text-base mb-1">图片加载失败</p>
                                    <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                        路径: /public/charts/geo-dashboard-sentiment-1.png
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Section: Single Glassmorphic Container wrapping Title and Three-Column Negative Breakdown */}
                    <div className="h-[28%] min-h-[170px] max-h-[220px] shrink-0 w-full">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 lg:p-3.5 flex flex-col h-full justify-between gap-2 shadow-2xl">
                            {/* Section Title */}
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white flex items-center gap-2 shrink-0 pl-0.5">
                                <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                负面回答类型解析
                            </h3>

                            {/* Three-Column Grid Content */}
                            <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">

                                {/* Column 1: 配料表防腐剂争议 */}
                                <div className="flex flex-col min-h-0 h-full">
                                    <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03]">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            配料表防腐剂争议
                                        </h4>
                                        <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                            AI 在干净度/食品安全相关提问下频繁警示脱氢乙酸钠（防腐剂）成分，容易对白领、宝妈等品质和健康敏感型消费群体产生强烈的劝退效应。
                                        </p>
                                    </div>
                                </div>

                                {/* Column 2: 偶发客诉被无限放大 */}
                                <div className="flex flex-col min-h-0 h-full">
                                    <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03]">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            偶发客诉被无限放大
                                        </h4>
                                        <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                            AI 会过度抓取并归纳互联网上的历史偶发性品质客诉（如霉变、异物个案），在算法回答中将其上升为“品控存在缺陷”等泛化否定性评语。
                                        </p>
                                    </div>
                                </div>

                                {/* Column 3: 口感与廉价标签 */}
                                <div className="flex flex-col min-h-0 h-full">
                                    <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03] shadow-[0_0_15px_rgba(239,68,68,0.02)]">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            “廉价充饥物”鄙视链
                                        </h4>
                                        <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                            算法模型常将桃李定位为“味道偏甜偏油、口感无层次”的性价比替代品，处于消费品味鄙视链底端，极大阻碍了中高端产品线溢价。
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
