import React from 'react';

function Page_GeoReportSources2() {
    const rankings = [
        { name: '百度知道', value: '16.5%', widthClass: 'w-[95%]' },
        { name: '今日头条', value: '7.4%', widthClass: 'w-[45%]' },
        { name: '网易', value: '6.5%', widthClass: 'w-[40%]' },
        { name: 'QQ News', value: '5.5%', widthClass: 'w-[34%]' },
        { name: '太平洋家居', value: '4.9%', widthClass: 'w-[30%]' },
    ];

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-8 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-2">
                    <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
                        引用源分析
                    </h1>
                </div>

                {/* Main Content Layout: Vertically Centered 2-Column Grid with Shrunk Height */}
                <div className="flex-1 flex flex-col justify-center min-h-0">
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
                                            监测数据显示，决定<strong className="text-white font-semibold">冠珠</strong>在 AI 问答中表现的最底层数据抓取来源，高度集中在<strong className="text-white font-semibold">百度系（知道/百科）、门户资讯及第三方加盟排行站</strong>，行业垂直深度语料与官方信源占比极低。
                                        </p>
                                        <p className="mt-2.5">
                                            排名前五的引用平台分别为：
                                            <strong className="text-white font-bold">百度知道（16.5%）</strong>、
                                            <strong className="text-white font-bold">今日头条（7.4%）</strong>、
                                            <strong className="text-white font-bold">网易（6.5%）</strong>、
                                            <strong className="text-white font-bold">QQ News（5.5%）</strong>和
                                            <strong className="text-white font-bold">太平洋家居（4.9%）</strong>。
                                        </p>
                                        <p className="mt-2.5 border-t border-white/5 pt-2.5">
                                            在文章引用率排名榜单中，排在首位的是“岩板”、“瓷砖十大品牌”、“2026年瓷砖十大品牌推荐|靠谱之选,定义健康人居新美学”等词条化或榜单类内容，且多为泛行业通稿，未见本品牌官方域名（如官网、官方公众号）被有效引用。
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

                                    {/* Bullet 1: 信源结构单一，缺乏垂直专业背书 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#004CE5] p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                信源结构单一，缺乏垂直专业背书
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            引用源高度依赖“百度知道”（16.5%）等问答平台，虽然有“太平洋家居”（4.9%）等垂媒进入前五，但知乎等高权重、深度的专业测评语料严重匮乏。这导致 AI 在生成品牌深度解析或工艺对比时，缺乏高质量抓取源，容易导致品牌在硬核推荐场景中被边缘化。
                                        </p>
                                    </div>

                                    {/* Bullet 2: 官方话语权缺失，存在认知偏移风险 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                官方话语权缺失，存在认知偏移风险
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            引用库中排名前列的多为“2026年瓷砖十大品牌推荐|靠谱之选,定义健康人居新美学”（被引 14 次）等第三方内容，本品牌官方信源（官网、官微）在 AI 抓取池中几乎处于隐形状态。这意味着品牌在 AI 生态中的形象完全由第三方定义，一旦出现竞品公关稿或不实榜单，品牌缺乏有效的信源对冲与心智锚点。
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
