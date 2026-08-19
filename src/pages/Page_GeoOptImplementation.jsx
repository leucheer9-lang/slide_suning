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
                    <h1 className="text-[34px] lg:text-[40px] xl:text-[46px] font-black text-white tracking-widest leading-tight">
                        可量化且合规的GEO优化如何实现
                    </h1>
                </div>

                {/* Horizontal Flow Container with 4 Steps */}
                <div className="flex-1 flex items-stretch justify-between gap-1 xl:gap-2 min-h-0 py-2">
                    
                    {/* Step 1 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-3.5 lg:p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-2.5 border-b border-white/10 pb-2 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[16px] lg:text-[17px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[18px] lg:text-[20px] xl:text-[22px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                01
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3 lg:p-3.5 hover:bg-white/[0.04] transition-colors duration-300 justify-start min-h-0">
                            <h4 className="text-white font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0">
                                把“单个关键词”当成“复杂问题场景”
                            </h4>
                            <p className="text-zinc-300 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed flex-1">
                                用户搜“家电购买平台推荐”，AI 不是去傻傻匹配这八个字，而是去猜用户是想选渠道、看排行、做京东/天猫对比，还是怕售后踩坑。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-4 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 lg:p-3.5 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start min-h-0">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            
                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[16px] lg:text-[17px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0 z-10">
                                全场景覆盖，不做关键词堆砌
                            </h4>
                            <p className="text-zinc-200 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed z-10 flex-1">
                                目的不是在一篇稿里狂塞“苏宁易购”（不投毒），而是围绕“选平台、比服务、国补/以旧换新、送装避坑”等真实诉求，提供高质量标准答案。
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
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-3.5 lg:p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-2.5 border-b border-white/10 pb-2 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[16px] lg:text-[17px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[18px] lg:text-[20px] xl:text-[22px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                02
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3 lg:p-3.5 hover:bg-white/[0.04] transition-colors duration-300 justify-start min-h-0 overflow-hidden">
                            <h4 className="text-white font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0">
                                一个问题 → 多个“搜索方向”
                            </h4>
                            <div className="flex-1 min-h-0 min-w-0 flex flex-col">
                                <p className="shrink-0 text-zinc-300 text-[20px] leading-[30px] whitespace-nowrap">
                                    同一问题，AI 会分几路去查：
                                </p>
                                <div className="mt-2 flex-1 min-h-0 flex flex-col justify-evenly">
                                    <span className="block text-zinc-200 font-semibold text-[22px] leading-[32px] whitespace-nowrap">
                                        ① 查榜单：家电平台推荐
                                    </span>
                                    <span className="block text-zinc-200 font-semibold text-[22px] leading-[32px] whitespace-nowrap">
                                        ② 查对比：京东苏宁谁划算
                                    </span>
                                    <span className="block text-zinc-200 font-semibold text-[22px] leading-[32px] whitespace-nowrap">
                                        ③ 查避坑：售后和加盟店
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-4 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 lg:p-3.5 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start min-h-0">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            
                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[16px] lg:text-[17px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0 z-10">
                                按 AI 拆解路径，提前铺设对应内容
                            </h4>
                            <p className="text-zinc-200 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed z-10 flex-1">
                                AI 搜榜单，就准备渠道权威推荐稿；搜对比，就发送装一体 / 国补 / 全渠道详实对比；搜避坑，就铺官方澄清与服务口碑。让 AI 无论走哪条路，都能看到苏宁正面信息。
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
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-3.5 lg:p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-2.5 border-b border-white/10 pb-2 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[16px] lg:text-[17px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[18px] lg:text-[20px] xl:text-[22px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                03
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3 lg:p-3.5 hover:bg-white/[0.04] transition-colors duration-300 justify-start min-h-0">
                            <h4 className="text-white font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0">
                                在各大平台“抓取并拼凑”答案
                            </h4>
                            <p className="text-zinc-300 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed flex-1">
                                AI 带着拆解好的方向，去全网它信任的平台寻找知识碎片，最后重组为一个完整回答——当前苏宁监测显示，引用高度集中在资讯门户、短视频与问答平台。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-4 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 lg:p-3.5 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start min-h-0">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            
                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[16px] lg:text-[17px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0 z-10">
                                投其所好，在 AI 信任阵地布局
                            </h4>
                            <p className="text-zinc-200 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed z-10 flex-1">
                                不瞎发通稿，而是按监测数据，把定制高质量语料投到今日头条、新浪、抖音、百度知道、IT之家等 AI 高频引用阵地，让它顺理成章抓取采纳。
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
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-3.5 lg:p-4 xl:p-5 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-2.5 border-b border-white/10 pb-2 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[16px] lg:text-[17px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[18px] lg:text-[20px] xl:text-[22px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                04
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3 lg:p-3.5 hover:bg-white/[0.04] transition-colors duration-300 justify-start min-h-0">
                            <h4 className="text-white font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0">
                                算法更迭，答案是动态变化的
                            </h4>
                            <p className="text-zinc-300 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed flex-1">
                                AI 的回答不是一成不变的；随着新数据加入，它推荐的渠道平台、引用的文章和位次随时可能变化——苏宁当前平均位次仅 NO.5.1，更需持续干预。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-1.5">
                            <div className="h-4 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3 lg:p-3.5 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start min-h-0">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>
                            
                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[16px] lg:text-[17px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[22px] lg:text-[24px] xl:text-[26px] leading-snug shrink-0 z-10">
                                持续监测，闭环验证与调整
                            </h4>
                            <p className="text-zinc-200 text-[18px] lg:text-[19px] xl:text-[20px] leading-relaxed z-10 flex-1">
                                文章发出去只是开始。我们会持续监测苏宁提及率、平均位次、Top1 首推率及引用文章来源，据此调整发什么内容、投哪个平台。
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
