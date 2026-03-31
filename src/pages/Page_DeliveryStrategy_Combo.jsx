import React from 'react';

export default function Page_DeliveryStrategy_Combo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">特定组合</h1>
                <p className="text-[1.1rem] lg:text-[1.2rem] text-rose-400 font-medium tracking-wide">
                    通过特定组合的投放配合内容策略进行定点精准覆盖（不投放主流“大平台”）
                </p>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col justify-center px-8 lg:px-16 py-2 pb-16 min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full max-w-[1400px] mx-auto h-full items-start pt-10">

                    {/* Item 1: 60% */}
                    <div className="flex flex-col group relative">
                        <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400" style={{ width: '60%', boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)' }} />
                        </div>
                        <div className="flex items-baseline mb-6">
                            <span className="text-[6rem] lg:text-[8.5rem] leading-none font-bold tracking-tighter text-white transition-colors group-hover:text-orange-100">60</span>
                            <span className="text-4xl lg:text-5xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-orange-500/50 transition-colors">测评对比：垂直媒体与论坛</h3>
                        <p className="text-base lg:text-lg font-medium text-orange-300 mb-6 tracking-wide leading-relaxed">大众家电网、大众网家居频道、消费日报网家电、家电消费网、环球家电网、艾肯家电网</p>
                        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">深度种草与口碑群落扩散。</strong>通过在主流垂直家电媒体与专业家居论坛的「多覆盖」策略，以横向对比和评测导购形式建立真实的口碑基础。这不仅能够快速截获各平台正在比对高意向用户，更能为前端AI搜索引擎的「通用候选视野」提供高密度的底层语料背书。
                        </p>
                    </div>

                    {/* Item 2: 40% */}
                    <div className="flex flex-col group relative">
                        <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: '40%', boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)' }} />
                        </div>
                        <div className="flex items-baseline mb-6">
                            <span className="text-[6rem] lg:text-[8.5rem] leading-none font-bold tracking-tighter text-white transition-colors group-hover:text-blue-100">40</span>
                            <span className="text-4xl lg:text-5xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-blue-500/50 transition-colors">定位排行：只投专业媒体</h3>
                        <p className="text-base lg:text-lg font-medium text-blue-300 mb-6 tracking-wide leading-relaxed">中国家电网、中关村在线家电</p>
                        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">硬核背书与行业地位定调。</strong>聚焦高权重、高公信力的重点权威媒体，投入针对性预算卡位具有行业公信力的排行榜以及定调文章，实现「少而精」的穿透。凭借极强的公关权威属性，该策略能最直接有效地拉升方太相关词条在AI分析模型中的权重与评价倾向。
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
