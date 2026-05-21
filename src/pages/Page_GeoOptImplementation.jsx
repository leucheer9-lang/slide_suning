import React from 'react';

export default function Page_GeoOptImplementation() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-4 px-6 lg:pt-5 lg:pb-5 lg:px-8 xl:pt-5 xl:pb-6 xl:px-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 xl:gap-4">

                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-1.5">
                    <h1 className="text-[34px] lg:text-[38px] xl:text-[44px] font-black text-white tracking-widest leading-tight">
                        可量化且合规的GEO优化如何实现
                    </h1>
                </div>

                {/* Column Headers for alignment without using a table */}
                <div className="shrink-0 grid grid-cols-2 gap-6 xl:gap-8 border-b border-white/10 pb-2 px-4 mt-1">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-zinc-500 rounded-full"></span>
                        <span className="text-zinc-400 text-sm lg:text-[15.5px] xl:text-[17px] font-bold tracking-wider">AI 真实的搜索机制（背景与原理）</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]"></span>
                        <span className="text-[#004CE5] text-sm lg:text-[15.5px] xl:text-[17px] font-extrabold tracking-wider">我们的白帽优化应对策略（思路与做法）</span>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="flex-1 flex flex-col gap-3 lg:gap-3.5 xl:gap-4 min-h-0 justify-between py-1">

                    {/* Step 1 */}
                    <div className="group bg-zinc-950/40 border border-white/5 hover:border-[#004CE5]/20 rounded-xl p-3 lg:p-3.5 xl:p-4 flex items-stretch gap-4 xl:gap-5 transition-all duration-300 relative overflow-hidden">
                        <div className="shrink-0 flex flex-col justify-center items-center w-[45px] lg:w-[55px] xl:w-[65px] border-r border-white/5 pr-4 xl:pr-5">
                            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono tracking-widest uppercase">Step</span>
                            <span className="text-xl lg:text-2xl xl:text-3xl font-black font-mono text-zinc-400 group-hover:text-[#004CE5] transition-colors duration-300">01</span>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-6 xl:gap-8 items-center">
                            {/* Left: AI mechanism */}
                            <div className="flex flex-col gap-1 pr-2">
                                <h3 className="text-white font-extrabold text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    把“单个关键词”当成“复杂问题场景”
                                </h3>
                                <p className="text-zinc-400 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    用户搜“瓷砖品牌推荐”，AI 不是去傻傻匹配这六个字，而是去猜用户是想直接买、想看排名、想做对比，还是怕踩坑。
                                </p>
                            </div>
                            {/* Right: Strategy */}
                            <div className="flex flex-col gap-1 pl-2 border-l border-white/5 relative">
                                <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.7)]"></div>
                                <h3 className="text-[#004CE5] font-black text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    全场景覆盖，不做关键词堆砌
                                </h3>
                                <p className="text-zinc-300 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    我们的目的不是像传统作弊那样在一篇文章里狂塞关键词（不投毒），而是围绕用户“买、比、防雷”等真实诉求，提供高质量的标准答案。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group bg-zinc-950/40 border border-white/5 hover:border-[#004CE5]/20 rounded-xl p-3 lg:p-3.5 xl:p-4 flex items-stretch gap-4 xl:gap-5 transition-all duration-300 relative overflow-hidden">
                        <div className="shrink-0 flex flex-col justify-center items-center w-[45px] lg:w-[55px] xl:w-[65px] border-r border-white/5 pr-4 xl:pr-5">
                            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono tracking-widest uppercase">Step</span>
                            <span className="text-xl lg:text-2xl xl:text-3xl font-black font-mono text-zinc-400 group-hover:text-[#004CE5] transition-colors duration-300">02</span>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-6 xl:gap-8 items-center">
                            {/* Left: AI mechanism */}
                            <div className="flex flex-col gap-1 pr-2">
                                <h3 className="text-white font-extrabold text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    自动把问题拆解成多个“搜索方向”
                                </h3>
                                <p className="text-zinc-400 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-normal">
                                    面对同一个问题，AI 会兵分几路去查：<br />
                                    ① 查榜单（如：瓷砖十大品牌排行）<br />
                                    ② 查对比（如：萨米特和东鹏哪个好）<br />
                                    ③ 查避坑（如：某品牌有什么质量负面）
                                </p>
                            </div>
                            {/* Right: Strategy */}
                            <div className="flex flex-col gap-1 pl-2 border-l border-white/5 relative">
                                <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.7)]"></div>
                                <h3 className="text-[#004CE5] font-black text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    根据 AI 的拆解路径，提前铺设“内容路标”
                                </h3>
                                <p className="text-zinc-300 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    AI 搜榜单，我们就准备权威推荐稿；AI 搜对比，我们就发详实的实景测评；AI 搜避坑，我们就铺设官方澄清和优质好评。让 AI 无论走哪条路，都能看到我们的正面信息。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group bg-zinc-950/40 border border-white/5 hover:border-[#004CE5]/20 rounded-xl p-3 lg:p-3.5 xl:p-4 flex items-stretch gap-4 xl:gap-5 transition-all duration-300 relative overflow-hidden">
                        <div className="shrink-0 flex flex-col justify-center items-center w-[45px] lg:w-[55px] xl:w-[65px] border-r border-white/5 pr-4 xl:pr-5">
                            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono tracking-widest uppercase">Step</span>
                            <span className="text-xl lg:text-2xl xl:text-3xl font-black font-mono text-zinc-400 group-hover:text-[#004CE5] transition-colors duration-300">03</span>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-6 xl:gap-8 items-center">
                            {/* Left: AI mechanism */}
                            <div className="flex flex-col gap-1 pr-2">
                                <h3 className="text-white font-extrabold text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    像学者一样去各大平台“抓取并拼凑”答案
                                </h3>
                                <p className="text-zinc-400 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    AI 带着拆解好的方向，去全网各个它信任的平台寻找知识碎片，最后重组为一个完整的回答。
                                </p>
                            </div>
                            {/* Right: Strategy */}
                            <div className="flex flex-col gap-1 pl-2 border-l border-white/5 relative">
                                <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.7)]"></div>
                                <h3 className="text-[#004CE5] font-black text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    投其所好，在 AI 信任的阵地上“喂”好内容
                                </h3>
                                <p className="text-zinc-300 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    我们不瞎发通稿，而是根据数据监测，把专门定制的高质量语料，发到 AI 当前最喜欢引用的平台（如家居门户、资讯端）上，让 AI 顺理成章地抓取采纳。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="group bg-zinc-950/40 border border-white/5 hover:border-[#004CE5]/20 rounded-xl p-3 lg:p-3.5 xl:p-4 flex items-stretch gap-4 xl:gap-5 transition-all duration-300 relative overflow-hidden">
                        <div className="shrink-0 flex flex-col justify-center items-center w-[45px] lg:w-[55px] xl:w-[65px] border-r border-white/5 pr-4 xl:pr-5">
                            <span className="text-[10px] lg:text-xs text-zinc-500 font-mono tracking-widest uppercase">Step</span>
                            <span className="text-xl lg:text-2xl xl:text-3xl font-black font-mono text-zinc-400 group-hover:text-[#004CE5] transition-colors duration-300">04</span>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-6 xl:gap-8 items-center">
                            {/* Left: AI mechanism */}
                            <div className="flex flex-col gap-1 pr-2">
                                <h3 className="text-white font-extrabold text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    算法不断学习，答案是动态变化的
                                </h3>
                                <p className="text-zinc-400 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    AI 的回答不是一成不变的，随着新数据的加入，它推荐的品牌和引用的内容随时可能发生变化。
                                </p>
                            </div>
                            {/* Right: Strategy */}
                            <div className="flex flex-col gap-1 pl-2 border-l border-white/5 relative">
                                <div className="absolute -left-[4px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.7)]"></div>
                                <h3 className="text-[#004CE5] font-black text-[15px] lg:text-[16.5px] xl:text-[18px]">
                                    通过持续的数据监测，进行闭环验证与调整
                                </h3>
                                <p className="text-zinc-300 text-[12.5px] lg:text-[13.5px] xl:text-[14.5px] leading-relaxed">
                                    文章发出去只是开始。我们会每天监测 AI 到底引用了哪些文章、萨米特排在第几名。根据这些真实反馈，不断调整我们要发什么内容、去哪个平台发。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
