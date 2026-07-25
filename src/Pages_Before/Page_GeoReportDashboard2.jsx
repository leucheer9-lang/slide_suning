import React from 'react';

function Page_GeoReportDashboard2() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-2 lg:pt-4 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">
                {/* Header Section */}
                <div className="text-center mb-4 shrink-0">
                    <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                        核心指标定义与表现概览
                    </h1>
                </div>

                {/* Main Content Area: Side-by-Side aligned Columns */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">

                    {/* Left Column: Quantitative Metrics Table */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full justify-between">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                关键数据指标定义与表现
                            </h3>
                            <div className="overflow-hidden rounded-xl border border-[#004CE5]/20 bg-[#020202]/60 flex-grow flex flex-col justify-center">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                                            <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[24%]">关键数据</th>
                                            <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">定义</th>
                                            <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">数据说明</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">提及率</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                在测试的词条中，AI回复中包含“冠珠”的概率。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-blue-400 font-bold">34.5%</span>（在众多家装提问中，AI较少主动推荐冠珠，曝光度严重不足）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">平均提及位次</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                当品牌被普及时，在AI生成文本中出现的排位，越靠前权重越高。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-blue-400 font-bold">NO. 6.4</span>（位次靠后，通常排在马可波罗、东鹏之后，处于末尾位）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">行业影响力排名</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                在AI生态中，各品牌的综合排名。影响力排名越高，说明AI认可度越高。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-blue-400 font-bold">NO.14</span>（几乎从未作为首选品牌被AI推荐给用户）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top 引用来源</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                AI 生成当前结果时，最底层的数据抓取来源平台。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                前三：百度知道（16.5%）、今日头条（7.4%）、网易（6.5%）。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Three Features aligned exactly */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full justify-start min-h-0 gap-3">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                结合本次数据，冠珠在 AI 问答里的表现呈现以下特征：
                            </h3>

                            <div className="flex-grow flex flex-col justify-start gap-4 min-h-0 pt-2 lg:pt-3">
                                {/* Bullet 1 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors duration-300">
                                    <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        01
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white mb-0.5 leading-snug">
                                            整体提及率处于中位水平，与现实商业地位仍有显著差距。
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                            冠珠整体提及率 34.5%，虽然在通用词条有覆盖，但在“防渗污”、“超平整”等功能性核心词条下提及率均为 0.0%。在极致品质搜索场景下，AI 极少主动推介冠珠，且平台间认知不均衡。
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet 2 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors duration-300">
                                    <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        02
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white mb-0.5 leading-snug">
                                            特定风格标签初步建立。
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                            品牌在新中式等风格赛道表现亮眼，如“新中式背景墙”提及率达 50.0%（NO.2.3）。但在功能性及特定空间词条下提及率仍为 0.0%，AI 尚未建立其“硬核品质与全场景应用”的强关联。
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet 3 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors duration-300">
                                    <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        03
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white mb-0.5 leading-snug">
                                            与竞品在“首推权”上存在较大差距。
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                            竞品马可波罗（69%）与东鹏（54.3%）大幅领先并主导首推权。而冠珠平均位次仅 NO.6.4，Top1 首推率仅 0.9%，在绝大多数对话中仅作为陪跑选项出现，差距悬殊。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Full-width Action Callout Card */}
                <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-5">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        核心行动建议
                    </h3>
                    <div className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="font-bold text-white mb-1 text-[18px] lg:text-[20px]">
                                急需进行系统化的 GEO 优化。
                            </p>
                            <p className="text-zinc-400 leading-relaxed text-justify">
                                当前 AI 对冠珠在新中式等风格赛道已有初步认知，但在功能工艺词条与首推场景中权重明显不足，必须立即干预并喂养高质量的品牌语料，重塑冠珠“国民设计瓷砖”、“新中式审美”、“高平整工艺”的权重，从而在 AI 搜索 & 问答截流中建立正确的品牌认知。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoReportDashboard2;
