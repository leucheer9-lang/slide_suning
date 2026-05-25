import React from 'react';

function Page_GeoReportEntries_Analysis() {
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
                                            核心功能性词条表现不佳
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 0.0%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在消费者高度关注的硬核品质词条中（如“防渗污好打理的瓷砖推荐”、“超平整无波纹的瓷砖推荐”、“同批次无色差瓷砖推荐”等），冠珠的提及率全部为 0.0%。这说明品牌在 AI 的底层推荐逻辑中，尚未建立起与“高平整度”、“强耐磨抗污”等核心工艺标签的强关联。
                                    </p>
                                </div>

                                {/* Finding 2 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            特定“风格/排行榜”词条表现稳健
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 63.3%</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在测试的 30 个词条中，冠珠在“新中式瓷砖品牌排行榜”、“瓷砖品牌排行榜”、“瓷砖品牌推荐”、“性价比高的瓷砖推荐”、“质量好的新中式瓷砖推荐”等 19 个词条中录得了有效提及。这表明品牌的“国民设计”与“新中式”标签已在部分 AI 模型中留下深刻痕迹，形成了初步的品牌护城河。
                                    </p>
                                </div>

                                {/* Finding 3 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            表现相对最好的“高位词”
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">最高均位 NO. 2.3</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在“新中式背景墙瓷砖推荐”这一词条中，平均排位最高，达到 NO.2.3。这是品牌目前最具竞争力的细分赛道，距离第一梯队仅一步之遥。
                                    </p>
                                </div>

                                {/* Finding 4 */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                                    <div className="flex items-center justify-between shrink-0">
                                        <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                            表现垫底的“陪跑词”
                                        </h4>
                                        <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">均位 NO. 8.8</span>
                                    </div>
                                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                                        在“适合现代家装审美的瓷砖推荐”词条下，虽然被 AI 提及，但平均排位为 NO.8.8。这意味着在部分宽泛推荐中，品牌仍处于列表后段，用户点击转化的概率较低。
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
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">长板词（风格与设计）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/30 px-3 py-0.5 rounded font-bold shrink-0">主要攻坚口</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-blue-300 font-bold">表现：</strong>“新中式瓷砖品牌排行榜”、“瓷砖品牌排行榜”、“质量好的新中式瓷砖推荐”、“知名品牌品控好的新中式瓷砖推荐”等。 共 19 个词条录得提及，位次 2.3～8.8 位。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-emerald-400 font-bold">诊断与建议：</strong>冠珠在这类词条下已有较好的提及基础，且部分排位靠前。建议将其作为第一突破口，集中资源在此类词条下进行专业内容投喂，力争将其全部推举进前三，打造成品牌的绝对优势词。
                                        </div>
                                    </div>
                                </div>

                                {/* Short Board Strategy */}
                                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-red-500/50 rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                    <div>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">短板词（功能与空间）</span>
                                            <span className="text-[13px] lg:text-[14px] bg-red-950/40 text-red-400 border border-red-950/60 px-3 py-0.5 rounded font-bold shrink-0">盲区消除口</span>
                                        </div>
                                    </div>
                                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                                        <div className="text-justify border-b border-white/5 pb-2">
                                            <strong className="text-red-300 font-bold">表现：</strong>“防渗污好打理的瓷砖推荐”、“超平整无波纹的瓷砖推荐”、“厨房专用瓷砖推荐”、“建筑外墙专用岩板推荐”、“安全不脱落的超薄岩板推荐”等 11 个高频刚需词条提及率均为 0.0%。
                                        </div>
                                        <div className="text-justify pt-1">
                                            <strong className="text-amber-400 font-bold">诊断与建议：</strong>这些功能性词汇代表了消费者的硬核采购标准，但品牌目前在这些领域的 AI 关联度极低。急需通过专业测评、行业媒体以及高权重内容平台建立关联矩阵，将“冠珠”与“防渗污”、“超平整”、“不断供”等核心消费决策属性进行强制绑定，消除 AI 认知盲区。
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
