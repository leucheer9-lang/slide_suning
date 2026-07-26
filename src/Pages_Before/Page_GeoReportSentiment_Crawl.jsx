import React, { useState } from 'react';

// 苏宁易购①（project_id 377）· 负面信息的抓取记录 — DeepSeek 等 AI 回答中的口碑风险截图
function Page_GeoReportSentiment_Crawl() {
    const [errors, setErrors] = useState({ left: false, right: false });

    const shots = [
        {
            key: 'left',
            src: '/geo-report/page-65-sentiment-crawl-1.jpg?v=20260726',
            alt: 'DeepSeek：需要注意的平台 — 苏宁易购负面反馈',
            label: '抓取记录 · DeepSeek',
            note: '「需要注意的平台」：品控不佳 / 售后推诿 / 维权困难',
            path: '/public/geo-report/page-65-sentiment-crawl-1.jpg',
        },
        {
            key: 'right',
            src: '/geo-report/page-65-sentiment-crawl-2.jpg?v=20260726',
            alt: 'AI 渠道比稿：苏宁易购口碑与谨慎建议',
            label: '抓取记录 · 渠道比稿',
            note: '「需要注意」：发货退款纠纷 / 建议持谨慎态度',
            path: '/public/geo-report/page-65-sentiment-crawl-2.jpg',
        },
    ];

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-2">

                {/* Header — 与正负面分析页一致 */}
                <div className="text-center shrink-0 mb-5">
                    <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
                        正负面分析
                    </h1>
                    <p className="mt-1.5 text-[20px] lg:text-[22px] text-rose-400/90 font-semibold tracking-wide">
                        负面信息的抓取记录
                    </p>
                </div>

                {/* Main: two crawl screenshots side by side */}
                <div className="flex-1 flex flex-col min-h-0 w-full max-w-[1580px] mx-auto gap-3 mt-1">
                    <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-5 min-h-0">
                        {shots.map((shot) => (
                            <div key={shot.key} className="flex flex-col min-h-0 h-full gap-2">
                                <div className="shrink-0 flex items-center gap-2 px-0.5">
                                    <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                    <div className="min-w-0">
                                        <div className="text-[18px] lg:text-[20px] font-bold text-white leading-tight truncate">
                                            {shot.label}
                                        </div>
                                        <div className="text-[16px] lg:text-[17px] text-zinc-500 leading-snug truncate">
                                            {shot.note}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 min-h-0 relative bg-[#0a0a0a] border border-white/10 rounded-xl p-2 shadow-2xl hover:border-rose-500/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
                                    {!errors[shot.key] ? (
                                        <img
                                            src={shot.src}
                                            alt={shot.alt}
                                            className="w-full h-full object-contain rounded-lg"
                                            onError={() => setErrors((prev) => ({ ...prev, [shot.key]: true }))}
                                        />
                                    ) : (
                                        <div className="absolute inset-2 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                            <p className="text-zinc-300 font-bold text-base mb-1">图片加载失败</p>
                                            <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                                存放路径: {shot.path}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom caption */}
                    <div className="shrink-0 w-full">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3 lg:px-6 lg:py-3.5 flex items-center gap-3">
                            <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] shrink-0" />
                            <p className="text-[18px] lg:text-[20px] xl:text-[21px] text-zinc-300 leading-snug font-normal">
                                AI 在「家电买哪里」「口碑平台推荐」类问答中，已将<strong className="text-white font-semibold">苏宁易购</strong>单独标出为需谨慎渠道：集中指向<strong className="text-rose-400 font-semibold">品控瑕疵、售后推诿、发货退款纠纷</strong>，并给出「多留心眼 / 多方权衡」建议——负面虽占比低，但已被结构化写入回答模板。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoReportSentiment_Crawl;
