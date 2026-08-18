import React from 'react';

export default function Page_GeoReport_Dashboard2_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        数据指标与特征诊断 · 优化词 B 端
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
                                            def: '在不带品牌名的中介渠道带客类优化词下，AI 回复中出现“创维创新谷”的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">2.0%</span>
                                                    （50 次对话中只有 1 次提到本品，25 个词里 24 个为 0）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 1 提及率',
                                            def: '当被提及时，创维创新谷被排在首位推荐的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">0.0%</span>
                                                    （未进 Top1 榜，第一名新桥东先进制造产业园为 22.0%）
                                                </>
                                            ),
                                        },
                                        {
                                            name: '平均提及位次',
                                            def: '被推荐时在 AI 生成文本列表中的平均排名位次。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">NO. 7.9</span>
                                                    （位次榜第 70，新桥东 NO. 5.3、燕罗 NO. 6.6）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 引用来源',
                                            def: 'AI 生成回答时，最底层的数据抓取来源平台。',
                                            note: '宝安区政府在线 (14.7%)、顺企网 (10.5%)、安居客 (5.9%)',
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
                                创维创新谷在 B 端渠道招商优化词问答里的表现特征：
                            </h3>

                            <div className="flex-1 flex flex-col gap-3 min-h-0">
                                {[
                                    {
                                        n: '01',
                                        title: '只有“高端 + 现成房源”这一个窄词能进入答案',
                                        body: '25 个 B 端词里仅 1 个被提及：“有现成房源的宝安区高端产业园推荐”50%（NO. 4.5）。这个词同时限定了“高端”与“现成房源”两个条件，恰好命中创维创新谷可即时交付的整栋物业形态。',
                                    },
                                    {
                                        n: '02',
                                        title: '中介带客、佣金、报备类词全部为 0',
                                        body: '其余 24 个词提及率均为 0%，包括渠道最关心的“适合中介带客的宝安区产业园推荐”“中介佣金高的宝安区产业园推荐”“中介报备流程简单的宝安区产业园推荐”“渠道带客成交效率高的宝安区产业园推荐”。这些位置目前由政府招商通稿和中介平台内容占据。',
                                    },
                                    {
                                        n: '03',
                                        title: '仅豆包能召回，DeepSeek 为零',
                                        body: '豆包提及率 4%、位次 NO. 9.4；DeepSeek 提及率 0%。B 端问题上 DeepSeek 更依赖宝安区政府在线、深圳政府在线等官方信源，而这些信源里目前没有创维创新谷的可引用条目。',
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
                                先补齐官方信源里的园区词条，再把中介渠道类词逐个吃下来
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-justify">
                                同一批词下新桥东先进制造产业园以 42% 提及率、NO. 5.3 位次排第一，燕罗智能网联汽车产业园 26%，汇智研发中心 18%，创维创新谷只有 2%、行业影响力第 85。可行路径是：先在宝安区政府在线、深圳政府在线、宝安湾这三个占引用量 25% 的官方信源里补齐园区物业清单与招商条目，再用“宝安区十大产业园区”这类名录榜单内容去争中介带客、佣金、报备等 0 提及词；平台上豆包已能召回，DeepSeek 需靠官方信源打开。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
