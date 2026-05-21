import React from 'react';

export default function Page_GeoOptImplementation() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-4 px-6 lg:pt-5 lg:pb-5 lg:px-8 xl:pt-5 xl:pb-6 xl:px-10 animate-fade-in">
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] bg-[#004CE5]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-[#004CE5]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4 xl:gap-5">

                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-1.5">
                    <h1 className="text-[34px] lg:text-[38px] xl:text-[44px] font-black text-white tracking-widest leading-tight">
                        可量化且合规的GEO优化如何实现
                    </h1>
                </div>

                {/* Horizontal Flow Container with 4 Steps */}
                <div className="flex-1 flex items-stretch justify-between gap-1 xl:gap-2 min-h-0 py-2">
                    
                    {/* Step 1 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Card Header with Step Number */}
                        <div className="flex justify-between items-start mb-3 xl:mb-4 shrink-0">
                            <span className="text-3xl xl:text-4xl font-extrabold font-mono text-zinc-650 group-hover:text-[#004CE5] transition-colors duration-300">01</span>
                            <div className="px-2 py-0.5 rounded text-[10px] xl:text-xs font-bold tracking-wider bg-white/5 text-zinc-400 border border-white/5 uppercase">
                                Step
                            </div>
                        </div>

                        {/* AI Mechanism block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-2 hover:bg-white/[0.04] transition-colors duration-300">
                            <div className="flex items-center gap-1.5 text-zinc-400 font-bold text-[11px] xl:text-xs tracking-wider border-b border-white/5 pb-1">
                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></span>
                                AI 真实搜索机制（背景与原理）
                            </div>
                            <h4 className="text-white font-extrabold text-[13.5px] xl:text-[15.5px] leading-snug">
                                把“单个关键词”当成“复杂问题场景”
                            </h4>
                            <p className="text-zinc-400 text-[11.5px] xl:text-[13px] leading-relaxed">
                                用户搜“瓷砖品牌推荐”，AI 不是去傻傻匹配这六个字，而是去猜用户是想直接买、想看排名、想做对比，还是怕踩坑。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            <div className="flex items-center gap-1.5 text-[#004CE5] font-extrabold text-[11px] xl:text-xs tracking-wider border-b border-[#004CE5]/10 pb-1 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的白帽优化应对策略（思路与做法）
                            </div>
                            <h4 className="text-[#004CE5] font-black text-[13.5px] xl:text-[15.5px] leading-snug z-10">
                                全场景覆盖，不做关键词堆砌
                            </h4>
                            <p className="text-zinc-350 text-[11.5px] xl:text-[13px] leading-relaxed z-10">
                                我们的目的不是像传统作弊那样在一篇文章里狂塞关键词（不投毒），而是围绕用户“买、比、防雷”等真实诉求，提供高质量的标准答案。
                            </p>
                        </div>
                    </div>

                    {/* Step Connection Line 1 */}
                    <div className="shrink-0 flex flex-col justify-center items-center w-3 xl:w-5">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#004CE5]/70 to-[#004CE5]/10 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Card Header with Step Number */}
                        <div className="flex justify-between items-start mb-3 xl:mb-4 shrink-0">
                            <span className="text-3xl xl:text-4xl font-extrabold font-mono text-zinc-650 group-hover:text-[#004CE5] transition-colors duration-300">02</span>
                            <div className="px-2 py-0.5 rounded text-[10px] xl:text-xs font-bold tracking-wider bg-white/5 text-zinc-400 border border-white/5 uppercase">
                                Step
                            </div>
                        </div>

                        {/* AI Mechanism block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-2 hover:bg-white/[0.04] transition-colors duration-300">
                            <div className="flex items-center gap-1.5 text-zinc-400 font-bold text-[11px] xl:text-xs tracking-wider border-b border-white/5 pb-1">
                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></span>
                                AI 真实搜索机制（背景与原理）
                            </div>
                            <h4 className="text-white font-extrabold text-[13.5px] xl:text-[15.5px] leading-snug">
                                自动把问题拆解成多个“搜索方向”
                            </h4>
                            <div className="text-zinc-400 text-[11px] xl:text-[12.5px] leading-relaxed">
                                面对同一个问题，AI 会兵分几路去查：
                                <span className="block text-zinc-400 mt-1 pl-1">
                                    ① 查榜单（如：瓷砖十大品牌排行）
                                </span>
                                <span className="block text-zinc-400 pl-1">
                                    ② 查对比（如：萨米特和东鹏哪个好）
                                </span>
                                <span className="block text-zinc-400 pl-1">
                                    ③ 查避坑（如：某品牌有什么质量负面）
                                </span>
                            </div>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            <div className="flex items-center gap-1.5 text-[#004CE5] font-extrabold text-[11px] xl:text-xs tracking-wider border-b border-[#004CE5]/10 pb-1 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的白帽优化应对策略（思路与做法）
                            </div>
                            <h4 className="text-[#004CE5] font-black text-[13.5px] xl:text-[15.5px] leading-snug z-10">
                                根据 AI 的拆解路径，提前铺设“内容路标”
                            </h4>
                            <p className="text-zinc-350 text-[11.5px] xl:text-[13px] leading-relaxed z-10">
                                AI 搜榜单，我们就准备权威推荐稿；AI 搜对比，我们就发详实的实景测评；AI 搜避坑，我们就铺设官方澄清和优质好评。让 AI 无论走哪条路，都能看到我们的正面信息。
                            </p>
                        </div>
                    </div>

                    {/* Step Connection Line 2 */}
                    <div className="shrink-0 flex flex-col justify-center items-center w-3 xl:w-5">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#004CE5]/70 to-[#004CE5]/10 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Card Header with Step Number */}
                        <div className="flex justify-between items-start mb-3 xl:mb-4 shrink-0">
                            <span className="text-3xl xl:text-4xl font-extrabold font-mono text-zinc-650 group-hover:text-[#004CE5] transition-colors duration-300">03</span>
                            <div className="px-2 py-0.5 rounded text-[10px] xl:text-xs font-bold tracking-wider bg-white/5 text-zinc-400 border border-white/5 uppercase">
                                Step
                            </div>
                        </div>

                        {/* AI Mechanism block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-2 hover:bg-white/[0.04] transition-colors duration-300">
                            <div className="flex items-center gap-1.5 text-zinc-400 font-bold text-[11px] xl:text-xs tracking-wider border-b border-white/5 pb-1">
                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></span>
                                AI 真实搜索机制（背景与原理）
                            </div>
                            <h4 className="text-white font-extrabold text-[13.5px] xl:text-[15.5px] leading-snug">
                                像学者一样去各大平台“抓取并拼凑”答案
                            </h4>
                            <p className="text-zinc-400 text-[11.5px] xl:text-[13px] leading-relaxed">
                                AI 带着拆解好的方向，去全网各个它信任的平台寻找知识碎片，最后重组为一个完整的回答。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            <div className="flex items-center gap-1.5 text-[#004CE5] font-extrabold text-[11px] xl:text-xs tracking-wider border-b border-[#004CE5]/10 pb-1 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的白帽优化应对策略（思路与做法）
                            </div>
                            <h4 className="text-[#004CE5] font-black text-[13.5px] xl:text-[15.5px] leading-snug z-10">
                                投其所好，在 AI 信任的阵地上“喂”好内容
                            </h4>
                            <p className="text-zinc-350 text-[11.5px] xl:text-[13px] leading-relaxed z-10">
                                我们不瞎发通稿，而是根据数据监测，把专门定制的高质量语料，发到 AI 当前最喜欢引用的平台（如家居门户、资讯端）上，让 AI 顺理成章地抓取采纳。
                            </p>
                        </div>
                    </div>

                    {/* Step Connection Line 3 */}
                    <div className="shrink-0 flex flex-col justify-center items-center w-3 xl:w-5">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#004CE5]/70 to-[#004CE5]/10 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Card Header with Step Number */}
                        <div className="flex justify-between items-start mb-3 xl:mb-4 shrink-0">
                            <span className="text-3xl xl:text-4xl font-extrabold font-mono text-zinc-650 group-hover:text-[#004CE5] transition-colors duration-300">04</span>
                            <div className="px-2 py-0.5 rounded text-[10px] xl:text-xs font-bold tracking-wider bg-white/5 text-zinc-400 border border-white/5 uppercase">
                                Step
                            </div>
                        </div>

                        {/* AI Mechanism block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-2 hover:bg-white/[0.04] transition-colors duration-300">
                            <div className="flex items-center gap-1.5 text-zinc-400 font-bold text-[11px] xl:text-xs tracking-wider border-b border-white/5 pb-1">
                                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></span>
                                AI 真实搜索机制（背景与原理）
                            </div>
                            <h4 className="text-white font-extrabold text-[13.5px] xl:text-[15.5px] leading-snug">
                                算法不断学习，答案是动态变化的
                            </h4>
                            <p className="text-zinc-400 text-[11.5px] xl:text-[13px] leading-relaxed">
                                AI 的回答不是一成不变的，随着新数据的加入，它推荐的品牌和引用的内容随时可能发生变化。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            <div className="flex items-center gap-1.5 text-[#004CE5] font-extrabold text-[11px] xl:text-xs tracking-wider border-b border-[#004CE5]/10 pb-1 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的白帽优化应对策略（思路与做法）
                            </div>
                            <h4 className="text-[#004CE5] font-black text-[13.5px] xl:text-[15.5px] leading-snug z-10">
                                通过持续的数据监测，进行闭环验证与调整
                            </h4>
                            <p className="text-zinc-350 text-[11.5px] xl:text-[13px] leading-relaxed z-10">
                                文章发出去只是开始。我们会每天监测 AI 到底引用了哪些文章、萨米特排在第几名。根据这些真实反馈，不断调整我们要发什么内容、去哪个平台发。
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
