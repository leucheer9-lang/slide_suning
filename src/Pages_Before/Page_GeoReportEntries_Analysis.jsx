import React from 'react';

function Page_GeoReportEntries_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        词条表现诊断与策略规划
                    </h1>
                </div>

                {/* Main Content Area: Side-by-Side balanced Columns */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

                    {/* Left Column: Core Discoveries (4 Items Grid) */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                            <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                监测词条核心发现
                            </h3>
                            <div className="flex-1 grid grid-cols-1 gap-4 min-h-0">
                                {/* Finding 1 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            生活方式与微观通勤场景“全面隐身”
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 0.0%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在“在福田上班龙华买房推荐”、“龙华低容积率新盘推荐”、“龙华纯商品房小区推荐”等极具真实购房痛点的大词下，提及率全部为 0.0%（仅“适合家庭居住”等词有微弱的 33.3%）。购房者往往通过这些具体需求找房，而 AI 目前无法将项目与之匹配。
                                    </p>
                                </div>

                                {/* Finding 2 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            精准地段与交通指标大词展现“统治力”
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 100%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在“深圳地铁盘推荐”、“深圳北站附近买房推荐”、“龙华高得房率新房推荐”等带有明确区位交通属性的词条中，提及率直接拉满到 100%，且排位霸榜 NO. 1.0 - 2.7。AI 形成了绝对的垄断，只要搜索意图明确，AI 几乎毫不犹豫首推该项目。
                                    </p>
                                </div>

                                {/* Finding 3 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            表现最好的“绝对高位词”
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">霸榜均位 NO. 1.0级别</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在前述地铁/高铁及高得房率大词中，不仅提及率满分，平均排位更是达到了绝对霸榜的 NO. 1.0 左右。这说明项目前期的核心地段宣发非常成功，锁死了核心卖点，构成了最强的 AI 流量护城河。
                                    </p>
                                </div>

                                {/* Finding 4 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            临门一脚的“成交收口词”严重缺失
                                        </h4>
                                        <span className="bg-rose-950/40 border border-rose-950/60 text-rose-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 0.0%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        针对楼盘自身的深度口碑词，如“深业上宸瑞府怎么样/值得买吗/适合刚改吗/89平三房怎么样”，提及率全部是 0.0%。这意味着当客户想通过 AI 搜一下真实口碑辅助决策时，无法获取正面确认，极易导致客户流失。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Keyword Strategy (Long & Short Boards) */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                            <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                长短板诊断与词条策略
                            </h3>

                            <div className="flex-grow grid grid-cols-1 gap-4 min-h-0">
                                {/* Long Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-[#004CE5] rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">长板词（区位交通与硬核参数）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/30 px-3 py-0.5 rounded font-bold shrink-0">护城河防御</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-blue-300 font-bold">表现：</strong>“深圳地铁盘推荐”、“深圳北站附近买房推荐”、“深圳新房推荐”、“龙华高得房率新房推荐”。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-emerald-400 font-bold">诊断与建议：</strong>既然已经在这些高热度词上拿到了极高曝光和 NO. 1.0 的排位，就无需再大规模砸钱铺设纯地段通稿。策略转为“守擂防守”，定期维护现有优质参数语料，锁死其在交通地段赛道中的 AI 权威地位。
                                        </div>
                                    </div>
                                </div>

                                {/* Short Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-red-500/50 rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">短板词（跨区通勤与决策口碑）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-red-950/40 text-red-400 border border-red-950/60 px-3 py-0.5 rounded font-bold shrink-0">拓圈降维攻坚</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-red-300 font-bold">表现：</strong>“在福田上班龙华买房推荐”、“龙华纯商品房小区推荐”、“深业上宸瑞府怎么样/值得买吗/89平三房怎么样”等均为 0.0%。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-amber-400 font-bold">诊断与建议：</strong>这是下一步优化的生死线，必须开展“痛点对冲与场景破圈”。大量铺设包含打工人视角的《福田打工人通勤实测》、《深业上宸瑞府89平户型深度拆解》等场景化与深度决策评料，填补 AI 认知里的“口碑黑洞”。
                                        </div>
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

export default Page_GeoReportEntries_Analysis;
