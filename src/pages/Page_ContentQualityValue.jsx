import React from 'react';

/**
 * 用人写的好处和坏处：
 *   好处一 文章保质期长（AI 稿 15 天失效 vs 人工稿 6 个月以上持续被引用）
 *   好处二 一文两用（GEO 搜索侧 + 传统公关侧）
 *   坏处   单篇成本相差 100 倍
 */

const TIME_TICKS = [
    { label: '发布期', x: '5%' },
    { label: '15天', x: '22%' },
    { label: '1个月', x: '40%' },
    { label: '3个月', x: '60%' },
    { label: '6个月', x: '78%' },
    { label: '12个月', x: '95%' },
];

export default function Page_ContentQualityValue() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    用人写的好处和坏处
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex gap-6 min-h-0">
                {/* 左栏：好处 */}
                <div className="flex-1 min-w-0 bg-zinc-900/40 border border-white/10 rounded-[1.75rem] p-8 flex flex-col shadow-xl">
                    <span className="self-start px-5 py-1.5 rounded-full text-[19px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                        好处
                    </span>

                    <div className="flex flex-col mt-6">
                        <h3 className="text-[30px] font-black text-white mb-3">1. 文章保质期长</h3>

                        <div className="relative w-full h-[220px] bg-black/60 border border-white/10 rounded-2xl p-4 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none">
                                {TIME_TICKS.map((tick) => (
                                    <div
                                        key={tick.label}
                                        className="absolute h-full border-r border-dashed border-white/10"
                                        style={{ left: tick.x }}
                                    />
                                ))}
                            </div>

                            <div className="absolute left-0 right-0 top-3 pointer-events-none">
                                {TIME_TICKS.map((tick) => (
                                    <span
                                        key={tick.label}
                                        className="absolute text-[17px] font-black text-zinc-400 whitespace-nowrap"
                                        style={{ left: tick.x, transform: 'translateX(-50%)' }}
                                    >
                                        {tick.label}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute left-8 right-8 top-[68px] bottom-4 flex flex-col justify-around">
                                <div className="flex items-center">
                                    <div className="w-[22%] h-[40px] bg-zinc-700/80 border border-zinc-600 rounded-full flex items-center justify-between px-4 shrink-0">
                                        <span className="text-[16px] font-black text-zinc-300">AI 创作文章</span>
                                        <span className="text-[13px] font-black text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded-full shrink-0">
                                            15天内
                                        </span>
                                    </div>
                                    <span className="text-[17px] text-zinc-500 font-black ml-5">15 天后开始失效</span>
                                </div>

                                <div className="flex items-center">
                                    <div
                                        className="w-[90%] h-[42px] rounded-full flex items-center justify-between px-6 shadow-lg border border-teal-500/25"
                                        style={{ background: 'linear-gradient(to right, #004CE5 0%, #0D9488 100%)' }}
                                    >
                                        <span className="text-[18px] font-black text-white">人工创作文章</span>
                                        <span className="text-[14px] font-black text-white bg-white/20 px-3.5 py-1 rounded-full shrink-0">
                                            6 个月 + 持续被大模型高频引用
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 my-6 shrink-0" />

                    <div className="flex flex-col flex-1 min-h-0">
                        <h3 className="text-[30px] font-black text-white mb-3">2. 一文两用</h3>

                        <div className="flex items-stretch gap-5 flex-1 min-h-0">
                            <div className="flex-1 bg-[#004CE5]/[0.07] border border-[#004CE5]/30 rounded-2xl p-6 flex flex-col justify-between">
                                <div>
                                    <span className="px-4 py-1 rounded text-[16px] font-black bg-[#004CE5]/25 text-[#9CBBFF] border border-[#004CE5]/40 inline-block">
                                        GEO 搜索侧
                                    </span>
                                    <h4 className="text-[23px] font-black text-white mt-3 leading-tight">
                                        面向 AI 引擎：获取高频引用
                                    </h4>
                                </div>
                                <p className="text-[19px] font-black text-white mt-4">沉淀为长期的搜索引用流量资产</p>
                            </div>

                            <div className="flex items-center shrink-0">
                                <span className="text-[28px] text-zinc-600 font-black">+</span>
                            </div>

                            <div className="flex-1 bg-teal-500/[0.07] border border-teal-500/25 rounded-2xl p-6 flex flex-col justify-between">
                                <div>
                                    <span className="px-4 py-1 rounded text-[16px] font-black bg-teal-500/20 text-teal-300 border border-teal-500/30 inline-block">
                                        传统公关侧
                                    </span>
                                    <h4 className="text-[23px] font-black text-white mt-3 leading-tight">
                                        面向真人阅读：带来招商种草
                                    </h4>
                                </div>
                                <p className="text-[19px] font-black text-white mt-4">直接节省并替代独立的传统 PR 预算</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 右栏：坏处 */}
                <div className="w-[520px] shrink-0 bg-red-950/20 border border-white/10 rounded-[1.75rem] p-8 flex flex-col justify-between shadow-xl">
                    <div className="flex flex-col gap-3">
                        <span className="self-start px-5 py-1.5 rounded-full text-[17px] font-black text-red-400 bg-red-500/10 border border-red-500/25">
                            坏处
                        </span>
                        <h3 className="text-[34px] font-black text-white leading-tight mt-2">单篇内容成本剧增</h3>
                    </div>

                    <div className="flex flex-col gap-5 my-auto">
                        <div className="flex items-center justify-between bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-6">
                            <span className="text-[19px] text-zinc-300 font-black">Agent 创作成本</span>
                            <span className="text-[26px] font-black text-zinc-400">约 ¥ 3 / 篇</span>
                        </div>

                        <div className="flex items-center justify-between bg-red-500/[0.07] border border-red-500/25 rounded-2xl px-6 py-6">
                            <span className="text-[19px] text-red-300 font-black">人工创作成本</span>
                            <span className="text-[26px] font-black text-red-400">约 ¥ 300 / 篇</span>
                        </div>
                    </div>

                    <div className="w-full rounded-2xl bg-red-500/10 border border-red-500/20 py-8 flex items-center justify-center">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[22px] font-black text-white">单篇制作成本相差</span>
                            <span className="text-[52px] font-black text-red-500 leading-none">100倍</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
