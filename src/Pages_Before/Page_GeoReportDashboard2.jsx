import React from 'react';

function Page_GeoReportDashboard2() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        核心指标定义与表现概览
                    </h1>
                </div>

                {/* Main Content Area: Side-by-Side aligned Columns */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

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
                                                在测试的词条中，AI回复中包含“上宸瑞府”的概率。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-blue-400 font-bold">42.9%</span>（注：曝光度表现良好，具备极强的区域基础声量，已形成较好的品牌认知）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">平均提及位次</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                当楼盘被普及时，在AI生成文本中出现的排位，越靠前权重越高。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-blue-400 font-bold">NO. 5.4</span>（平均提及位次处于中游水平，说明虽被提及概率提高，但排位仍有较大优化提升空间）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">行业影响力排名</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                在AI生态中，各楼盘/板块的综合排名。影响力排名越高，说明AI认可度越高。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                <span className="text-blue-400 font-bold">NO. 2</span>（在龙华/上塘片区的同类竞品监测中，处于绝对的头部统治地位）
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top 引用来源</td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                AI 生成当前结果时，最底层的数据抓取来源平台。
                                            </td>
                                            <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                网易 (16.9%)、房天下 (11.9%)、QQ News (10.4%)
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
                                结合本次数据，深业上宸瑞府在 AI 问答生态里的表现呈现以下特征：
                            </h3>

                            <div className="flex-grow flex flex-col justify-start gap-3 min-h-0 pt-2 lg:pt-2">
                                {/* Bullet 1 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex gap-3 transition-colors duration-300">
                                    <div className="text-[#004CE5] text-xl lg:text-2xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        01
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[15px] lg:text-[16.5px] xl:text-[18px] font-bold text-white mb-0.5 leading-snug">
                                            “地段与硬核指标”极度强势，首推权具有垄断性。
                                        </h4>
                                        <p className="text-[13px] lg:text-[14px] xl:text-[15px] text-zinc-300 leading-relaxed text-justify">
                                            项目在“地铁盘/深圳北买房/高得房率”三大词下提及率达 100%，排位霸榜 NO. 1.0 - 2.7。一旦搜索意图明确指向硬核交通地段，AI 几乎必然首推。
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet 2 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex gap-3 transition-colors duration-300">
                                    <div className="text-[#004CE5] text-xl lg:text-2xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        02
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[15px] lg:text-[16.5px] xl:text-[18px] font-bold text-white mb-0.5 leading-snug">
                                            跨区通勤场景与产品细节严重“踏空”，存在流量死角。
                                        </h4>
                                        <p className="text-[13px] lg:text-[14px] xl:text-[15px] text-zinc-300 leading-relaxed text-justify">
                                            在“福田上班龙华买房”、“低容积率新盘”等居住场景词下提及率均为 0.0%，导致福田外溢通勤等具购房痛点的客户无法通过 AI 检索到项目。
                                        </p>
                                    </div>
                                </div>

                                {/* Bullet 3 */}
                                <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex gap-3 transition-colors duration-300">
                                    <div className="text-[#004CE5] text-xl lg:text-2xl font-mono font-bold select-none pt-0.5 shrink-0">
                                        03
                                    </div>
                                    <div className="min-h-0">
                                        <h4 className="text-[15px] lg:text-[16.5px] xl:text-[18px] font-bold text-white mb-0.5 leading-snug">
                                            高意向决策词陷入“口碑盲区”，案名认知存在割裂。
                                        </h4>
                                        <p className="text-[13px] lg:text-[14px] xl:text-[15px] text-zinc-300 leading-relaxed text-justify">
                                            “值得买吗/89平三房怎么样”等决策词提及率为 0.0%。且 AI 对简称“上宸瑞府”与全称“深业上宸瑞府”认知割裂，内耗并分散了流量。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Full-width Action Callout Card */}
                <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        核心行动建议
                    </h3>
                    <div className="text-[13px] lg:text-[14px] xl:text-[15px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="font-bold text-white mb-0.5 text-[15px] lg:text-[17px]">
                                拓宽触发场景 + 案名归一 + 补齐口碑短板
                            </p>
                            <p className="text-zinc-400 leading-relaxed text-justify">
                                优化任务包括提升提及位次（当前均位仅 NO. 5.4，存在较大提升空间），同时利用“地铁/深圳北”的垄断优势强行绑定“福田通勤”、“刚改深度测评”等长尾场景，补齐 0% 空白词条，让 AI 能够针对客户具体需求输出高转化率的置业理由。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoReportDashboard2;
