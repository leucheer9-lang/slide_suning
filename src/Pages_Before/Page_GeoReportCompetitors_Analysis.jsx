import React, { useState } from 'react';

function Page_GeoReportCompetitors_Analysis() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-3">

                {/* Header Section (Moved further up with reduced margin) */}
                <div className="text-center shrink-0 mb-1">
                    <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                        竞品横向对比
                    </h1>
                </div>

                {/* Top Section: Larger, Self-Adaptive Image Slot occupying all remaining space */}
                <div className="flex-1 flex flex-col justify-center items-center min-h-0 mb-2 relative">
                    {imgLoaded && !imgError ? (
                        /* Adaptive Border Wrapper: Tightly wraps the image based on its natural dimensions, scaling to maximum allowed space without overflow */
                        <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 group flex items-center justify-center">
                            <img
                                src="/geo-report/page-57-competitors-compare.jpg"
                                alt="竞品横向对比大图"
                                className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgError(true)}
                            />
                        </div>
                    ) : (
                        /* Fallback Placeholder matching the exact width of the 3-column grid below */
                        <div className="w-full max-w-[1550px] aspect-[2.4/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                            {/* Hidden Image for loading detection */}
                            <img
                                src="/geo-report/page-57-competitors-compare.jpg"
                                alt="竞品横向对比大图"
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
                                <p className="text-zinc-300 font-bold text-base mb-1">此处为竞品对比分析大图展示位</p>
                                <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                    存放路径: /public/geo-report/page-57-competitors-compare.jpg
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Section: Balanced, Slightly Taller 3-Column Content Grid */}
                <div className="h-[35%] min-h-[240px] max-h-[320px] shrink-0 grid grid-cols-12 gap-5">

                    {/* Column 1: Core Discoveries */}
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-5 sm:pt-5 sm:pb-4.5 sm:px-6 flex flex-col h-full justify-start gap-2.5">
                            <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                核心发现
                            </h3>

                            <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                <p>
                                    <strong className="text-white font-bold">竞品仍明显领先：</strong>马可波罗（69%）、东鹏瓷砖（54.3%）、蒙娜丽莎（50.9%）三大品牌提及率均高于 50%。在瓷砖泛搜索场景中，这三家几乎必定出现，仍占据 AI 问答池的大部分自然流量。
                                </p>
                                <p className="border-t border-white/5 pt-2.5">
                                    <strong className="text-white font-bold">首位推荐权严重缺失：</strong>在决定用户第一印象的“Top 1 提及率”上，马可波罗以 25.9% 的概率占据首位，欧神诺以 12.1% 紧随其后。而冠珠仅为 0.9%，尚不具备作为“首选答案”稳定输出的能力。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Competitive Landscape Summary */}
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-5 sm:pt-5 sm:pb-4.5 sm:px-6 flex flex-col h-full justify-start gap-2.5">
                            <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                竞争格局总结
                            </h3>

                            <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                <p>
                                    在 AI 的认知图谱中，马可波罗和东鹏瓷砖已被默认为<strong className="text-white font-semibold">“绝对正确的基础共识答案”</strong>，牢牢把控泛需求推荐位。
                                </p>
                                <p className="border-t border-white/5 pt-2.5">
                                    而冠珠虽在“瓷砖品牌推荐”、“新中式”等词条已有提及，但在“防渗污好打理的瓷砖推荐”、“超平整无波纹的瓷砖推荐”、“同批次无色差瓷砖推荐”等功能性主战场仍<strong className="text-red-400 font-semibold">明显失声</strong>，“新中式”与“国民设计”是目前最值得放大的细分标签。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Action Suggestion */}
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-5 pb-4 px-5 sm:pt-5 sm:pb-4.5 sm:px-6 flex flex-col h-full justify-start gap-2.5 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                            <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                行动建议
                            </h3>

                            <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                <p>
                                    冠珠不宜与马可波罗、东鹏瓷砖在通用品类大词上硬碰硬。
                                </p>
                                <p className="border-t border-white/5 pt-2.5">
                                    而应<strong className="text-white font-semibold">集中资源巩固</strong>“新中式瓷砖品牌排行榜”、“瓷砖品牌排行榜”、“质量好的新中式瓷砖推荐”等已有提及基础的词条，同步补齐功能性零提及词条的语料关联，<strong className="text-blue-300 font-semibold">先稳细分、再抢首推</strong>。
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
