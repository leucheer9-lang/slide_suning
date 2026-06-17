import React from 'react';

function Page_GeoReportSources2() {
    const rankings = [
        { name: '网易', value: '16.9%', widthClass: 'w-[95%]' },
        { name: '房天下', value: '11.9%', widthClass: 'w-[67%]' },
        { name: 'QQ News', value: '10.4%', widthClass: 'w-[58%]' },
        { name: '搜狐网', value: '8.2%', widthClass: 'w-[46%]' },
        { name: '焦点网', value: '6.8%', widthClass: 'w-[38%]' },
    ];

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10 gap-4">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        引用源分析
                    </h1>
                </div>

                {/* Main Content Layout: Vertically Centered 2-Column Grid with Shrunk Height */}
                <div className="flex-1 flex flex-col justify-center min-h-0 pt-[20px]">
                    <div className="w-full h-[85%] max-h-[660px] min-h-[540px] grid grid-cols-12 gap-6 self-center">

                        {/* Left Column: Health Assessment */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3">

                                {/* Card Title */}
                                <div className="shrink-0">
                                    <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                        <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                        引用源健康度评估
                                    </h3>
                                </div>

                                {/* Card Content & Data Visualization */}
                                <div className="flex-1 flex flex-col justify-center gap-5 min-h-0">
                                    {/* Verbatim Text with Responsive 18px Font Size */}
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                        <p>
                                            监测数据显示，决定<strong className="text-white font-semibold">深业上宸瑞府</strong>在 AI 问答中表现的最底层数据抓取来源，呈现出极度浓厚的<strong className="text-white font-semibold">“房产门户与官方通稿依赖症”</strong>，行业垂直深度语料与社交平台信源占比极低。
                                        </p>
                                        <p className="mt-2.5">
                                            排名前五的引用平台分别为：
                                            <strong className="text-white font-bold">网易 (16.9%)</strong>、
                                            <strong className="text-white font-bold">房天下 (11.9%)</strong>、
                                            <strong className="text-white font-bold">QQ News (10.4%)</strong>、
                                            <strong className="text-white font-bold">搜狐网 (8.2%)</strong>和
                                            <strong className="text-white font-bold">焦点网 (6.8%)</strong>。
                                        </p>
                                        <p className="mt-2.5 border-t border-white/5 pt-2.5">
                                            在文章引用率排名榜单中，被 AI 高频采纳的素材主要由传统的中心化媒体和官方硬广及楼盘库信息构成。这帮品牌在 AI 底层夯实了地铁距离、得房率等“楼盘物理参数”的心智底座，但也导致 AI 抓取到的语料风格过于严肃和官方。
                                        </p>
                                    </div>

                                    {/* Horizontal Visual Rankings Bar Chart with Clear Spacing */}
                                    <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5">
                                        <div className="text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-0.5">
                                            TOP 5 引用平台份额对比
                                        </div>
                                        {rankings.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between gap-4">
                                                <div className="w-28 text-[15px] lg:text-[16px] text-zinc-400 truncate font-medium">
                                                    {item.name}
                                                </div>
                                                <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full transition-all duration-1000 ${item.widthClass}`}
                                                        style={{ transformOrigin: 'left' }}
                                                    />
                                                </div>
                                                <div className="w-12 text-right text-[15px] lg:text-[16px] text-white font-bold">
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Diagnostics & Insights */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                            <div className="bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3 shadow-[0_0_25px_rgba(0,76,229,0.06)]">

                                {/* Card Title */}
                                <div className="shrink-0">
                                    <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                        <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                        诊断与洞察
                                    </h3>
                                </div>

                                {/* Bullet Point Cards with Increased Font Size and Balanced Padding */}
                                <div className="flex-1 flex flex-col justify-center gap-4 min-h-0">

                                    {/* Bullet 1: 信源权重极高，但“说明书”感太重 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#004CE5] p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                信源权重极高，但“说明书”感太重
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            依靠房天下、网易等老牌房产门户的好处是，AI 把楼盘的基础物理参数（地铁距离、得房率、四房户型）背得滚瓜烂熟。但这导致 AI 的语料储备像一份冰冷的“电子楼书”，很难用具有感染力的大白话向购房者种草。
                                        </p>
                                    </div>

                                    {/* Bullet 2: “真实购房者视角（UGC）”严重缺位 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                “真实购房者视角（UGC）”严重缺位
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            买房是极重决策的行为，但整个核心引用池中，完全看不到知乎、小红书、本地买房论坛（如家在深圳）等真实种草社区的身影。当购房者询问“适不适合居家/89平怎么样”等主观问题时，AI 因为搜不到真实的民间讨论，只能闭口不言（提及率为 0%）。项目亟需补充大量的“素人看房日记”、“业主视角户型分析”等活人语料来平衡当前的生态。
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

export default Page_GeoReportSources2;
