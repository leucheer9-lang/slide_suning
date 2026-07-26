import React from 'react';

// 苏宁易购①（project_id 377）· 2026-07-25～2026-07-25 · src/data/geoReport.json
function Page_GeoReportSources2() {
    const rankings = [
        { name: '今日头条', value: '12.9%', widthClass: 'w-full' },
        { name: '新浪新闻', value: '8.3%', widthClass: 'w-[64%]' },
        { name: '抖音', value: '6.9%', widthClass: 'w-[53%]' },
        { name: 'QQ News', value: '6%', widthClass: 'w-[47%]' },
        { name: '百度知道', value: '4.7%', widthClass: 'w-[36%]' },
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
                                    <h3 className="text-[28px] lg:text-[30px] font-bold text-white flex items-center gap-2">
                                        <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                        引用源健康度评估
                                    </h3>
                                </div>

                                {/* Card Content & Data Visualization */}
                                <div className="flex-1 flex flex-col justify-center gap-4 min-h-0">
                                    <div className="text-[20px] text-zinc-300 leading-snug font-normal text-justify">
                                        <p>
                                            监测数据显示，决定<strong className="text-white font-semibold">苏宁易购</strong>在 AI 问答中表现的最底层抓取来源，高度集中在<strong className="text-white font-semibold">资讯门户、短视频信息流与问答平台</strong>，专业垂媒与官方信源占比极低。
                                        </p>
                                        <p className="mt-2">
                                            排名前五的引用平台分别为：
                                            <strong className="text-white font-bold">今日头条（12.9%）</strong>、
                                            <strong className="text-white font-bold">新浪新闻（8.3%）</strong>、
                                            <strong className="text-white font-bold">抖音（6.9%）</strong>、
                                            <strong className="text-white font-bold">QQ News（6%）</strong>和
                                            <strong className="text-white font-bold">百度知道（4.7%）</strong>。
                                        </p>
                                        <p className="mt-2 border-t border-white/5 pt-2">
                                            文章引用率榜首多为「全套家电选购渠道分析」「一站式配齐全屋家电」「2026年选购家电六大平台口碑解析」等渠道比稿，出自 IT之家、中国商报网、地方资讯站等第三方，未见苏宁官网/官方公众号被有效引用。
                                        </p>
                                    </div>

                                    {/* Horizontal Visual Rankings Bar Chart */}
                                    <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5">
                                        <div className="text-[16px] text-zinc-500 font-semibold tracking-wider mb-0.5">
                                            TOP 5 引用平台份额对比
                                        </div>
                                        {rankings.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between gap-4">
                                                <div className="w-28 text-[18px] lg:text-[20px] text-zinc-400 truncate font-medium">
                                                    {item.name}
                                                </div>
                                                <div className="flex-1 bg-white/5 h-2.5 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full transition-all duration-1000 ${item.widthClass}`}
                                                        style={{ transformOrigin: 'left' }}
                                                    />
                                                </div>
                                                <div className="w-14 text-right text-[18px] lg:text-[20px] text-white font-bold">
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
                                    <h3 className="text-[28px] lg:text-[30px] font-bold text-white flex items-center gap-2">
                                        <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                        诊断与洞察
                                    </h3>
                                </div>

                                <div className="flex-1 flex flex-col justify-center gap-8 min-h-0">

                                    {/* Bullet 1 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#004CE5] p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                            <h4 className="text-[26px] lg:text-[28px] font-bold text-white leading-tight">
                                                信源被资讯流与比稿主导
                                            </h4>
                                        </div>
                                        <p className="text-[20px] text-zinc-300 leading-snug font-normal text-justify">
                                            引用池前五几乎被今日头条、新浪、抖音、QQ News 等泛资讯/信息流占据，百度知道（4.7%）承接问答长尾。知乎、专业测评站等高权重深度语料缺位，AI 在「买哪里」「哪家靠谱」类回答时，更易抓到渠道通稿而非苏宁差异化叙事。
                                        </p>
                                    </div>

                                    {/* Bullet 2 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <h4 className="text-[26px] lg:text-[28px] font-bold text-white leading-tight">
                                                官方话语权缺失，心智由第三方定义
                                            </h4>
                                        </div>
                                        <p className="text-[20px] text-zinc-300 leading-snug font-normal text-justify">
                                            高被引文章榜首「全套家电选购渠道分析」（IT之家，被引 21 次）等 Top 文中，多篇甚至未提及苏宁易购；本品牌官方域名在抓取池中近乎隐形。渠道比稿一旦偏向京东/天猫，品牌缺乏自有信源对冲，AI 心智将被第三方持续改写。
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
