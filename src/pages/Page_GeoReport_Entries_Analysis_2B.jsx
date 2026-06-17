import React from 'react';

export default function Page_GeoReport_Entries_Analysis_2B() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        2B 词条表现诊断与策略规划
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

                    {/* Left Column: Core Discoveries (3 Items Grid for better spacing) */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                            <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                B端监测词条核心发现
                            </h3>
                            <div className="flex-1 grid grid-cols-1 gap-4 min-h-0">
                                {/* Finding 1 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            供应链实力构筑高额壁垒
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 100%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在“适合连锁超市供货的面包品牌推荐”、“供货稳定配送及时的面包品牌”、“保质期短、好拉库存的短保面包”等核心招商词的提及率全部拉满至 100%，排位高居 NO. 1.0 - 3.0。AI 高度认可其强大的线下冷链物流与下沉分销能力。
                                    </p>
                                </div>

                                {/* Finding 2 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            毛利与回报痛点拖累推荐
                                        </h4>
                                        <span className="bg-rose-950/40 border border-rose-950/60 text-rose-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 33.3%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        一旦渠道商的提问重心从“好不好卖”转向“赚不赚钱”（如“毛利高的面包批发品牌推荐”），桃李的提及率暴跌至 33.3%，且排位掉落至 NO. 7.0 - 8.2 的边缘位置，暴露出 AI 在此维度的推荐信心断崖式下滑。
                                    </p>
                                </div>

                                {/* Finding 3 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            首位推荐权绝对把控
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">Top 1 占位超六成</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在 B 端面包采购相关的搜索回复中，桃李的 Top 1 首推率高达 63.3%，遥遥领先主要竞品。这说明在 AI 的烘焙认知大盘中，桃李已被高度固化为商户货架上不可或缺的基石品牌。
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
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">长板词（供应链实力）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/30 px-3 py-0.5 rounded font-bold shrink-0">守擂防守</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-blue-300 font-bold">表现：</strong>“超市面包供货推荐”、“配送稳定面包品牌”、“好拉库存短保面包”。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-emerald-400 font-bold">诊断与建议：</strong>既然已经拿到极高曝光和首推，无需大费周章地继续砸钱铺设单纯展示物流规模的通稿。策略转为“日常维护”，维持住现有高权威优势即可。
                                        </div>
                                    </div>
                                </div>

                                {/* Short Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-red-500/50 rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">短板词（渠道毛利空间）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-red-950/40 text-red-400 border border-red-950/60 px-3 py-0.5 rounded font-bold shrink-0">痛点重构</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-red-300 font-bold">表现：</strong>“毛利高的面包批发”、“适合开便利店批发高利润面包推荐”等均为 33.3%。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-amber-400 font-bold">诊断与建议：</strong>这是下一步招商引流的攻坚线。必须利用高周转率对冲毛利率的逻辑进行公关。大量铺设《便利店低损耗高利润选品分析：桃李高周转的算账逻辑》，让大模型学会用“综合收益率”替代“单件毛利率”来推荐桃李。
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
