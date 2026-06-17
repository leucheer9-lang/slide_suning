import React, { useState } from 'react';

function Page_GeoReport_Sentiment_Pre() {
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
                    <div className="flex-1 w-full max-h-[38vh] min-h-0 mb-4 flex items-center justify-center">
                        {(!imgError) ? (
                            <img
                                src="/charts/geo-dashboard-sentiment-pre.png"
                                alt="正负面分析基本情况大图"
                                className="w-full h-full object-contain select-none"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="w-full aspect-[2.7/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                    <p className="text-zinc-300 font-bold text-base mb-1">图片加载失败</p>
                                    <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                        路径: /public/charts/geo-dashboard-sentiment-pre.png
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Section: Single Full-width Banner Card */}
                    <div className="h-[26%] min-h-[145px] max-h-[190px] shrink-0 w-full">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3.5 lg:px-6 lg:py-4 flex flex-col h-full justify-center gap-1.5">
                            <h3 className="text-[21px] lg:text-[23px] xl:text-[24.5px] font-bold text-white flex items-center gap-2 shrink-0">
                                <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                基本情况概述
                            </h3>
                            <div className="text-[15px] lg:text-[16px] xl:text-[17.5px] text-zinc-300 leading-relaxed font-normal flex flex-col gap-1.5">
                                <p>
                                    在针对桃李面包品牌词的定向监测中，正面回答率维持在 80%，主流正向标签高度统一：“性价比高、口感好、品质稳定”，被 AI 视为管饱充饥的性价比优选。
                                </p>
                                <p className="border-t border-white/5 pt-1.5">
                                    然而，高达 20% 的负面声量对于高频复购的快消食品而言，是一个极其危险的“红色警报”，且负面焦点全部直击消费者生命线：“食品安全问题、配料表争议、风味粗糙”，正在严重磨损品牌公信力并阻断购买行为。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Page_GeoReport_Sentiment_Pre;
