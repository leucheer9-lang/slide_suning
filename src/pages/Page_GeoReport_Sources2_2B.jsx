import React from 'react';

export default function Page_GeoReport_Sources2_2B() {
    const rankings = [
        { name: '中国商报网', value: '7.1%', widthClass: 'w-[95%]' },
        { name: '搜狐网', value: '6.3%', widthClass: 'w-[84%]' },
        { name: 'Foodaily每日食品', value: '4.3%', widthClass: 'w-[58%]' },
        { name: '新浪财经', value: '3.5%', widthClass: 'w-[47%]' },
        { name: '网易商业', value: '2.8%', widthClass: 'w-[37%]' },
    ];

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10 gap-4">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        2B 引用源健康度与诊断
                    </h1>
                </div>

                {/* Main Content Layout */}
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
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                        <p>
                                            监测数据显示，决定<strong className="text-white font-semibold">桃李面包</strong>在 B 端 AI 问答中表现的最底层数据抓取来源，呈现出极强的<strong className="text-white font-semibold">“商业与产业垂直度”</strong>特点。
                                        </p>
                                        <p className="mt-2.5">
                                            排名前三的引用平台分别为：
                                            <strong className="text-white font-bold">中国商报网 (7.1%)</strong>、
                                            <strong className="text-white font-bold">搜狐网 (6.3%)</strong>和
                                            <strong className="text-white font-bold">Foodaily每日食品 (4.3%)</strong>。
                                        </p>
                                        <p className="mt-2.5 border-t border-white/5 pt-2.5">
                                            这表明桃李在 B 端主流财经和食品行业垂直媒体的公关铺设较为成功。大模型对这类具备权威质感的行业深度分析和企业动态白皮书有着极强的抓取信任度，帮助品牌形成了稳固的 AI 推荐壁垒。
                                        </p>
                                    </div>

                                    {/* Horizontal Visual Rankings Bar Chart */}
                                    <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5">
                                        <div className="text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-0.5">
                                            2B 渠道 TOP 5 引用平台份额对比
                                        </div>
                                        {rankings.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between gap-4">
                                                <div className="w-36 text-[15px] lg:text-[16px] text-zinc-400 truncate font-medium">
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

                                {/* Bullet Point Cards */}
                                <div className="flex-1 flex flex-col justify-center gap-4 min-h-0">

                                    {/* Bullet 1 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#004CE5] p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                信源权威度极高，物理硬指标稳固
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            由于高权重官方快消分析信源极其充分，AI 把桃李的“全国中央工厂分销”、“冷链配送链条”等产业特征背得非常熟。这为桃李在批发供货赛道里奠定了强大的心智底座。
                                        </p>
                                    </div>

                                    {/* Bullet 2 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                渠道收益与赋能文章严重稀缺
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            目前核心引用池缺乏面向经销商、超市老板等算账痛点的商业故事。由于大模型抓取不到“经销桃李高周转实现高回报”等民间商业实操软文，导致商户在询问高利润批发时，AI 没有现成语料可推荐。
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
