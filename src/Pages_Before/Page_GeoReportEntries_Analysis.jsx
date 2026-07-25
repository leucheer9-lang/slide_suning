import React from 'react';

function Page_GeoReportEntries_Analysis() {
    // 苏宁易购①（project_id 377）· 2026-07-25～2026-07-25 · src/data/geoReport.json
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
                {/* Header Section */}
                <div className="text-center mb-5 shrink-0">
                    <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                        词条表现诊断与策略规划
                    </h1>
                </div>

                {/* Main Content Area: Side-by-Side balanced Columns */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">

                    {/* Left Column: Core Discoveries (4 Items Grid) */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-5 shadow-[-10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-3">
                            <h3 className="text-2xl lg:text-[26px] font-bold text-white shrink-0 flex items-center gap-2.5">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                监测词条核心发现
                            </h3>

                            <div className="flex-1 grid grid-cols-1 gap-3 min-h-0">
                                {/* Finding 1 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[20px] lg:text-[22px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            3C 与送装词条完全失语
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[16px] px-3 py-0.5 rounded font-bold shrink-0">提及率 0.0%</span>
                                    </div>
                                    <p className="text-[18px] lg:text-[20px] text-zinc-200 leading-snug font-normal text-justify">
                                        在「线上买手机上什么平台好」、「网上买电脑哪个平台靠谱」、「大家电送装一体用什么平台好」、「国补买电脑选什么平台」等 8 个高频决策词条中，苏宁易购提及率全部为 0%。AI 尚未把苏宁与手机/电脑选购及送装一体强绑定。
                                    </p>
                                </div>

                                {/* Finding 2 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[20px] lg:text-[22px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            全渠道履约词条表现强劲
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[16px] px-3 py-0.5 rounded font-bold shrink-0">提及率 100%</span>
                                    </div>
                                    <p className="text-[18px] lg:text-[20px] text-zinc-200 leading-snug font-normal text-justify">
                                        50 个词条中有 42 个录得有效提及。其中「线上买线下提货」、「线下看实物」、「配送快」、「口碑好的家电购买平台」4 个词条提及率达 100%；实体店、帮父母买、搬新家等场景也稳定在 75%。全渠道与履约标签已形成初步护城河。
                                    </p>
                                </div>

                                {/* Finding 3 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[20px] lg:text-[22px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            表现相对最好的「高位词」
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[16px] px-3 py-0.5 rounded font-bold shrink-0">最高均位 NO. 2</span>
                                    </div>
                                    <p className="text-[18px] lg:text-[20px] text-zinc-200 leading-snug font-normal text-justify">
                                        「买大家电可以线上买线下提货的平台推荐」平均排位最高，达 NO.2，且提及率 100%。这是苏宁目前最具竞争力的细分赛道，距离第一梯队仅一步之遥。
                                    </p>
                                </div>

                                {/* Finding 4 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl px-4 py-3 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[20px] lg:text-[22px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            表现垫底的「陪跑词」
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[16px] px-3 py-0.5 rounded font-bold shrink-0">均位 NO. 6.5</span>
                                    </div>
                                    <p className="text-[18px] lg:text-[20px] text-zinc-200 leading-snug font-normal text-justify">
                                        在「双11以旧换新用什么平台」词条下，虽有 50% 提及，但平均排位仅 NO.6.5；「三四线城市买家电」「国补买电视」等也落在 6 位之后。大促与下沉场景中仍多处于列表后段，点击转化概率偏低。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Keyword Strategy (Long & Short Boards) */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-5 shadow-[10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-3">
                            <h3 className="text-2xl lg:text-[26px] font-bold text-white shrink-0 flex items-center gap-2.5">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                长短板诊断与词条策略
                            </h3>

                            <div className="flex-grow grid grid-cols-1 gap-3 min-h-0">
                                {/* Long Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-[#004CE5] rounded-xl p-5 flex flex-col justify-center gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[24px] lg:text-[28px] font-bold text-white">长板词（全渠道履约）</span>
                                            <span className="text-[16px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/30 px-3 py-0.5 rounded font-bold shrink-0">主要攻坚口</span>
                                        </div>
                                    </div>
                                    <div className="text-[18px] lg:text-[20px] leading-snug text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-blue-300 font-bold">表现：</strong>「线上买线下提货」、「线下看实物」、「配送快」、「有实体店买家电」、「帮父母买大家电」、「线上线下都能买」等。履约类词条提及率最高达 100%，位次集中在 NO.2～5。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-emerald-400 font-bold">诊断与建议：</strong>苏宁在全渠道与履约场景已有较好提及基础，且部分排位靠前。建议作为第一突破口，集中资源投喂「线上买线下提货 / 实体店体验 / 配送安装」专业内容，力争相关高位词全部推入前三，打造成绝对优势词。
                                        </div>
                                    </div>
                                </div>

                                {/* Short Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-red-500/50 rounded-xl p-5 flex flex-col justify-center gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[24px] lg:text-[28px] font-bold text-white">短板词（3C 与送装）</span>
                                            <span className="text-[16px] bg-red-950/40 text-red-400 border border-red-950/60 px-3 py-0.5 rounded font-bold shrink-0">盲区消除口</span>
                                        </div>
                                    </div>
                                    <div className="text-[18px] lg:text-[20px] leading-snug text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-red-300 font-bold">表现：</strong>「线上买手机」、「网上买电脑」、「国补买电脑」、「手机/电脑以旧换新」、「618 买手机/电脑」、「大家电送装一体」等 8 个高频刚需词条提及率均为 0%。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-amber-400 font-bold">诊断与建议：</strong>这些词代表 3C 选购与送装决策的核心入口，但品牌在 AI 中关联度极低。急需通过测评、行业媒体及高权重内容，将「苏宁易购」与「手机/电脑靠谱购买」、「送装一体」、「国补与以旧换新」强制绑定，消除认知盲区。
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
