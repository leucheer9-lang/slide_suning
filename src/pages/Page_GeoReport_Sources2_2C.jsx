import React from 'react';

export default function Page_GeoReport_Sources2_2C() {
    const rankings = [
        { name: '什么值得买社区', value: '19.6%', widthClass: 'w-[95%]' },
        { name: '抖音', value: '8.1%', widthClass: 'w-[40%]' },
        { name: '淘宝网', value: '6.4%', widthClass: 'w-[32%]' },
        { name: '小红书', value: '5.2%', widthClass: 'w-[26%]' },
        { name: '京东商城', value: '3.8%', widthClass: 'w-[19%]' },
    ];

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10 gap-4">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        2C 引用源健康度与诊断
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
                                        <span className="w-1.5 h-5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                        引用源健康度评估
                                    </h3>
                                </div>

                                {/* Card Content & Data Visualization */}
                                <div className="flex-1 flex flex-col justify-center gap-5 min-h-0">
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                        <p>
                                            C 端的 AI 抓取源画风突变，高度集中在民间消费决策与评测平台：<strong className="text-white font-bold">“什么值得买社区”（19.6%）</strong>以绝对优势排在第一，其次是<strong className="text-white font-bold">抖音 (8.1%)</strong>和<strong className="text-white font-bold">淘宝网 (6.4%)</strong>。
                                        </p>
                                        <p className="mt-2.5">
                                            这揭示了一个残酷真相：决定 AI 在 C 端推荐谁的，不再是冰冷的官方新闻通稿，而是真实网友的**横向测评和性价比盘点文章**（如《平价面包选购指南》）。
                                        </p>
                                        <p className="mt-2.5 border-t border-white/5 pt-2.5">
                                            这意味着桃李面包的 C 端 GEO 优化，必须要高度依赖具有“真实人设”和“干货评测”的 UGC 信源，而不是传统的官方硬广投放。
                                        </p>
                                    </div>

                                    {/* Horizontal Visual Rankings Bar Chart */}
                                    <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5">
                                        <div className="text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-0.5">
                                            2C 消费端 TOP 5 引用平台份额对比
                                        </div>
                                        {rankings.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between gap-4">
                                                <div className="w-36 text-[15px] lg:text-[16px] text-zinc-400 truncate font-medium">
                                                    {item.name}
                                                </div>
                                                <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ${item.widthClass}`}
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
                            <div className="bg-gradient-to-br from-purple-500/10 to-white/[0.01] backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3 shadow-[0_0_25px_rgba(168,85,247,0.06)]">

                                {/* Card Title */}
                                <div className="shrink-0">
                                    <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                        <span className="w-1.5 h-5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                        诊断与洞察
                                    </h3>
                                </div>

                                {/* Bullet Point Cards */}
                                <div className="flex-1 flex flex-col justify-center gap-4 min-h-0">

                                    {/* Bullet 1 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-purple-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                UGC 信源权重极高，测评驱动算法
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            由于“什么值得买”等种草测评社区的高频引用，AI 对桃李面包的口味搭配、隐藏食谱（如空气炸锅复烤）以及高性价比属性非常了解，这是在 C 端触发推荐的重要基石。
                                        </p>
                                    </div>

                                    {/* Bullet 2 */}
                                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                                                真实就餐痛点场景语料极度踏空
                                            </h4>
                                        </div>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                                            在大众在知乎、小红书等询问“早八代餐”、“办公室面包”等生活痛点词时，完全没有关于“桃李”的活人评测语料推荐。AI 搜不到真实讨论导致提及率归零，项目必须尽快投放针对性的场景软文。
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
