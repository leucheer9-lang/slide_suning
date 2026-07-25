import React, { useState } from 'react';

// 苏宁易购①（project_id 377）· 2026-07-25～2026-07-25 · src/data/geoReport.json → sentiments
// 负面明细对齐 GEO ONE「负面回答列表」截图（品控/售后、国补价格误写、零售云门店误写）
function Page_GeoReportSentiment() {
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

                {/* Main: wide strip image on top + analysis card below (same width) */}
                <div className="flex-1 flex flex-col justify-between min-h-0 w-full max-w-[1580px] mx-auto gap-3.5">

                    {/* Top Section: Long horizontal strip — GEO ONE 负面回答列表 */}
                    <div className="flex-1 flex flex-col justify-center items-stretch min-h-0 relative">
                        {!imgError ? (
                            <div className="relative w-full max-h-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/geo-report/page-64-sentiment.jpg?v=20260725-suning"
                                    alt="苏宁易购负面回答列表"
                                    className="w-full h-auto max-h-full object-contain rounded-lg"
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        ) : (
                            <div className="w-full aspect-[4.8/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                    <p className="text-zinc-300 font-bold text-base mb-1">图片加载失败</p>
                                    <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                        存放路径: /public/geo-report/page-64-sentiment.jpg
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Section: Negative type breakdown */}
                    <div className="h-[27%] min-h-[175px] max-h-[225px] shrink-0 w-full">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 lg:p-5 flex flex-col h-full justify-between gap-3 shadow-2xl">
                            <h3 className="text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-white flex items-center gap-2 shrink-0 pl-0.5">
                                <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                负面回答类型解析
                            </h3>

                            <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">

                                {/* Point 1: Primary Negative Types */}
                                <div className="col-span-6 flex flex-col min-h-0 h-full">
                                    <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-4 py-2.5 lg:px-4.5 lg:py-3 flex flex-col h-full justify-center gap-1.5 transition-all duration-300 hover:bg-white/[0.03]">
                                        <h4 className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white flex items-center gap-2 shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            主要负面类型
                                        </h4>
                                        <p className="text-[18px] lg:text-[20px] xl:text-[21px] text-zinc-300 leading-snug font-normal">
                                            本周期负面率 <strong className="text-rose-400 font-bold">2%</strong>，明细集中三类：“<strong className="text-white font-semibold">负面回答</strong>”（品控不佳 / 售后推诿 / 发货退款纠纷）、“<strong className="text-white font-semibold">价格错误</strong>”（国补一级能效补贴误写 20%）与“<strong className="text-white font-semibold">产品信息错误</strong>”（零售云门店数量误写超 12000 家）。
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2: Handling Recommendations */}
                                <div className="col-span-6 flex flex-col min-h-0 h-full">
                                    <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-4 py-2.5 lg:px-4.5 lg:py-3 flex flex-col h-full justify-center gap-1.5 transition-all duration-300 hover:bg-white/[0.03] shadow-[0_0_15px_rgba(239,68,68,0.02)]">
                                        <h4 className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white flex items-center gap-2 shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            处理建议
                                        </h4>
                                        <p className="text-[18px] lg:text-[20px] xl:text-[21px] text-zinc-300 leading-snug font-normal">
                                            对口碑攻击，用官方<strong className="text-white font-semibold">品控标准、售后时效与维权路径</strong>语料覆盖；对事实错误，校准<strong className="text-white font-semibold">国补政策口径</strong>与<strong className="text-white font-semibold">零售云门店真实规模</strong>，把负面率稳控在 <strong className="text-emerald-400 font-bold">2%</strong> 以内并消除可核实误写。
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
