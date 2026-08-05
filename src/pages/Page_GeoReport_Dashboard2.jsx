import React from 'react';

export default function Page_GeoReport_Dashboard2() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        数据指标与特征诊断 · C端
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

                    {/* Left Column: Quantitative Metrics Table */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                关键数据表现
                            </h3>
                            <div className="overflow-hidden rounded-xl border border-[#004CE5]/20 bg-[#020202]/60 flex-1 min-h-0 flex flex-col">
                                <div className="shrink-0 grid grid-cols-[24%_38%_38%] border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                                    {['关键数据', '定义', '数据说明'].map((h) => (
                                        <div
                                            key={h}
                                            className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200"
                                        >
                                            {h}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/10">
                                    {[
                                        {
                                            name: '整体提及率',
                                            def: '在 C 端寄件词条下，AI 回复中包含“京东物流”的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">80.0%</span>
                                                    （可见度高，但尚未拉开与顺丰的绝对差距）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 1 提及率',
                                            def: '当被提及建议时，京东物流被排在首位推荐的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">7.5%</span>
                                                    （显著落后顺丰 47.5%，首推权仍被竞品锁定）
                                                </>
                                            ),
                                        },
                                        {
                                            name: '平均提及位次',
                                            def: '被推荐时在 AI 生成文本列表中的平均排名位次。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">NO. 3.5</span>
                                                    （稳居第一梯队，但位次优势弱于顺丰 NO. 3.0）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 引用来源',
                                            def: 'AI 生成回答时，最底层的数据抓取来源平台。',
                                            note: '腾讯新闻 (8.8%)、今日头条 (7.7%)、新浪新闻 (4.3%)',
                                        },
                                    ].map((row) => (
                                        <div
                                            key={row.name}
                                            className="flex-1 min-h-0 grid grid-cols-[24%_38%_38%] items-center hover:bg-white/[0.02] transition-colors"
                                        >
                                            <div className="px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">
                                                {row.name}
                                            </div>
                                            <div className="px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                {row.def}
                                            </div>
                                            <div className="px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                {row.note}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Three Features evenly stretched */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                京东物流在 C 端寄件问答生态里的表现特征：
                            </h3>

                            <div className="flex-1 flex flex-col gap-3 min-h-0">
                                {[
                                    {
                                        n: '01',
                                        title: '服务口碑与场景词表现拉满',
                                        body: '在“服务好的快递推荐”、“口碑好的快递推荐”、“寄家具家电的快递推荐”等词下，提及率全部拉满至 100%，排位多落在 NO. 1.0 - 3.0。',
                                    },
                                    {
                                        n: '02',
                                        title: '“有提及、难首推”的结构性短板',
                                        body: '整体提及率 80%，但 Top 1 首推率仅 7.5%，顺丰高达 47.5%。AI 把京东物流放进候选清单，却很少把它写成第一答案。',
                                    },
                                    {
                                        n: '03',
                                        title: '极致时效与一站式平台词偏弱',
                                        body: '“当天就能到的快递推荐”、“寄快递哪家最快”等词提及率仅 50%；“服务丰富的一站式快递平台推荐”更是 0%，场景心智尚未打穿。',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.n}
                                        className="flex-1 min-h-0 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 flex gap-3 items-center transition-colors duration-300"
                                    >
                                        <div className="text-[#004CE5] text-xl lg:text-2xl font-mono font-bold select-none shrink-0">
                                            {item.n}
                                        </div>
                                        <div className="min-h-0 flex flex-col justify-center gap-1">
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-snug">
                                                {item.title}
                                            </h4>
                                            <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed text-justify">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Full-width Action Callout Card */}
                <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        核心优化策略
                    </h3>
                    <div className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="font-bold text-white mb-0.5 text-[17px] lg:text-[20px]">
                                从“进清单”走向“占首位”
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-justify">
                                C 端可见度已经不低，下一步应围绕“送货上门、大件送装、冷链生鲜、极致时效”等可被 AI 引用的场景内容强势铺量，把高提及率转化为真正的 Top 1 首推权，缩小与顺丰的首位差距。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
