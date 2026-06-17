import React from 'react';

export default function Page_GeoReport_Entries_Analysis_2C() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        2C 词条表现诊断与策略规划
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

                    {/* Left Column: Core Discoveries */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(168,85,247,0.05)] flex flex-col h-full justify-start gap-4">
                            <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                <span className="w-1.5 h-5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                C端监测词条核心发现
                            </h3>
                            <div className="flex-1 grid grid-cols-1 gap-4 min-h-0">
                                {/* Finding 1 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
                                            被固化的“短保”偏执心智
                                        </h4>
                                        <span className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 100%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        只要用户的搜索词明确带有“短保”二字（如“短保面包推荐”），桃李的提及率稳居 100%，排位高居 NO. 1.0 - 2.7。算法把桃李深度固化在了短保大类的品类头牌上。
                                    </p>
                                </div>

                                {/* Finding 2 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
                                            大众真实自然生活场景“踏空”
                                        </h4>
                                        <span className="bg-rose-950/40 border border-rose-950/60 text-rose-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 0.0%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        一旦脱离“短保”这个技术定语，进入消费者大白话刚需中（如“品质好的面包”、“超市能买到的面包”等），桃李提及率全部暴跌至 0.0%。全网大词“面包品牌推荐”排位跌至垫底的 NO. 13.7。
                                    </p>
                                </div>

                                {/* Finding 3 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
                                            民间评测平台占信源大头
                                        </h4>
                                        <span className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">社区口碑主导</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        C 端大模型的抓取源极高比例来自“什么值得买社区”、“抖音评测”，这意味着真正的消费者主观评价和性价比横评直接控制了 AI 在 C 端的推荐倾向。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Keyword Strategy */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 shadow-[10px_0_30px_rgba(168,85,247,0.05)] flex flex-col h-full justify-start gap-4">
                            <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                <span className="w-1.5 h-5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                长短板诊断与词条策略
                            </h3>

                            <div className="flex-grow grid grid-cols-1 gap-4 min-h-0">
                                {/* Long Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-purple-500 rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">长板词（短保心智绑定）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-0.5 rounded font-bold shrink-0">防守维稳</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-purple-300 font-bold">表现：</strong>“短保面包推荐”、“适合当上班族早餐的短保面包”。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-emerald-400 font-bold">诊断与建议：</strong>桃李在此细分概念里已稳居头把交椅。策略为“防御守成”，不需要盲目追加重复性硬通稿，保留大盘基底声量即可。
                                        </div>
                                    </div>
                                </div>

                                {/* Short Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-rose-500/50 rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">短板词（生活泛消费场景）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-red-950/40 text-red-400 border border-red-950/60 px-3 py-0.5 rounded font-bold shrink-0">撕掉标签</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-red-300 font-bold">表现：</strong>“品质好的面包”、“超市好买到的面包”、“办公室便携口粮”等提及率均为 0.0%。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-amber-400 font-bold">诊断与建议：</strong>进行“去标签化场景扩容”。在小红书、值得买等种草平台大量投放生活化软文《超市必买的品质代餐》、《办公室抽屉面包评测》，强力引导 AI 算法把桃李面包与这些高流量通用就餐场景深度绑定。
                                        </div>
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
