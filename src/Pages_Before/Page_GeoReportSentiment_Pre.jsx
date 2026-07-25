import React, { useState } from 'react';

// 苏宁易购①（project_id 377）· 2026-07-25～2026-07-25 · src/data/geoReport.json → sentiments
function Page_GeoReportSentiment_Pre() {
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

                {/* Main: wide strip image on top + overview card below (same width) */}
                <div className="flex-1 flex flex-col justify-between min-h-0 w-full max-w-[1580px] mx-auto gap-3.5">
                    
                    {/* Top Section: Long horizontal strip */}
                    <div className="flex-1 flex flex-col justify-center items-stretch min-h-0 relative">
                        {!imgError ? (
                            <div className="relative w-full max-h-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 flex items-center justify-center overflow-hidden">
                                <img 
                                    src="/geo-report/page-63-sentiment-pre.jpg?v=20260725b" 
                                    alt="正负面分析基本情况大图" 
                                    className="w-full h-auto max-h-full object-contain rounded-lg"
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        ) : (
                            <div className="w-full aspect-[3.1/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                    <p className="text-zinc-300 font-bold text-base mb-1">图片加载失败</p>
                                    <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                        存放路径: /public/geo-report/page-63-sentiment-pre.jpg
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Section: Overview — matches image width */}
                    <div className="h-[23%] min-h-[135px] max-h-[180px] shrink-0 w-full">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3.5 lg:px-6 lg:py-4 flex flex-col h-full justify-center gap-1.5">
                            <h3 className="text-[21px] lg:text-[23px] xl:text-[24.5px] font-bold text-white flex items-center gap-2 shrink-0">
                                <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                基本情况概述
                            </h3>
                            <div className="text-[18px] lg:text-[19.5px] xl:text-[21px] text-zinc-300 leading-normal font-normal flex flex-col gap-1.5">
                                <p>
                                    针对<strong className="text-white font-semibold">苏宁易购</strong>监测，本周期合计 <strong className="text-[#004CE5] font-bold">200</strong> 次对话，品牌提及率 <strong className="text-[#004CE5] font-bold">47%</strong>。在 AI 已识别并讨论苏宁易购的回答中，正面回答率为 <strong className="text-emerald-400 font-bold">98%</strong>，负面回答率为 <strong className="text-rose-400 font-bold">2%</strong>，正面评价主要围绕“<strong className="text-white font-semibold">渠道优势</strong>”、“<strong className="text-white font-semibold">线上线下融合</strong>”、“<strong className="text-white font-semibold">线下体验优势</strong>”展开。
                                </p>
                                <p className="border-t border-white/5 pt-1.5">
                                    正面率整体偏高，说明 AI 对苏宁的渠道与体验认知基调积极；但剩余 <strong className="text-rose-400 font-bold">2%</strong> 负面仍指向“<strong className="text-white font-semibold">负面口碑</strong>”、“<strong className="text-white font-semibold">谨慎建议</strong>”、“<strong className="text-white font-semibold">维权困难</strong>”等标签——占比虽小，一旦在购买决策问答中被放大，仍可能削弱信任。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Page_GeoReportSentiment_Pre;
