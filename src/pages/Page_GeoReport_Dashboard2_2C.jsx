import React from 'react';

export default function Page_GeoReport_Dashboard2_2C() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        2C 数据指标与特征诊断
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

                    {/* Left Column: Quantitative Metrics Table */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(168,85,247,0.1)] flex flex-col h-full justify-between">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                消费端关键数据表现
                            </h3>
                            <div className="overflow-hidden rounded-xl border border-purple-500/20 bg-[#020202]/60 flex-grow flex flex-col justify-center">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-purple-500/20 bg-purple-500/10">
                                            <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[24%]">关键数据</th>
                                            <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">定义</th>
                                            <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">数据说明</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">整体提及率</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                在大众日常消费场景搜索词下，AI回复中包含“桃李”的概率。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-purple-400 font-bold">57.6%</span>（相比B端明显缩水，流失了较多日常泛搜索大词的曝光）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top 1 提及率</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                当被提及建议时，桃李面包被排在首位推荐的概率。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-purple-400 font-bold">33.3%</span>（首推地位削弱，说明在消费者自由挑选时，AI开始向竞品分流）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">平均提及位次</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                被推荐时在 AI 生成文本列表中的平均排名位次。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-purple-400 font-bold">NO. 4.8</span>（表现居中，容易在大众横向测评、长回答中被折叠或淹没）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top 引用来源</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                AI 生成 2C 结果时，最底层的数据抓取来源平台。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                什么值得买社区 (19.6%)、抖音 (8.1%)、淘宝网 (6.4%)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Three Features aligned exactly */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="border border-purple-500/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(168,85,247,0.1)] flex flex-col h-full justify-start min-h-0 gap-3">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                桃李面包在 C 端 AI 问答生态里的表现特征：
                            </h3>

                            <div className="flex-grow flex flex-col justify-start gap-[20px] min-h-0 pt-2 lg:pt-2">
                                {/* Bullet 1 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex gap-3 transition-colors duration-300">
                                    <div className="text-purple-400 text-xl lg:text-2xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        01
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white mb-0.5 leading-snug">
                                            深陷“短保”产业名词，脱离大众生活场景
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed text-justify">
                                            AI 算法死死将桃李绑定在了“短保”二字上，但在大众带着“便携/品质好”等自然需求搜索时，品牌出现了大面积失语。
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet 2 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex gap-3 transition-colors duration-300">
                                    <div className="text-purple-400 text-xl lg:text-2xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        02
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white mb-0.5 leading-snug">
                                            无前缀的大众刚需词提及率“全军覆没”
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed text-justify">
                                            在“品质好的面包”、“办公室便携面包”、“超市能买到的面包”等自然流量词下，提及率全部暴跌至 0.0%，痛失泛消费流量。
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet 3 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex gap-3 transition-colors duration-300">
                                    <div className="text-purple-400 text-xl lg:text-2xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        03
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white mb-0.5 leading-snug">
                                            消费信源严重依赖第三方评测与种草
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed text-justify">
                                            大模型在生成 C 端推荐时，更偏爱抓取真实网友写的性价比横评盘点。因此，纯官方公关硬广在此维度几乎没有权重。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Full-width Action Callout Card */}
                <div className="border border-purple-500/20 border-l-4 border-l-purple-500 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 shadow-[-10px_0_30px_rgba(168,85,247,0.1)] shrink-0 mt-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        2C端核心优化策略
                    </h3>
                    <div className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="font-bold text-white mb-0.5 text-[17px] lg:text-[20px]">
                                从“基础表现”迈向“多维突围”
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-justify">
                                当前桃李在 2C 消费端的词条表现和推荐率处于基础水平，尚有很大的提升和优化空间。下一步的策略是破除单一的“短保”心智标签，积极铺设打工人早八代餐、超市好买面包等生活化种草语料，强行切入到日常无前缀的泛自然搜索场景中，提升 C 端的提及广度与深度。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
