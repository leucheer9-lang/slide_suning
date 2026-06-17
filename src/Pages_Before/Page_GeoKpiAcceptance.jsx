import React from 'react';

function Page_GeoKpiAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-1.5 pb-2.5 xl:pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-1 xl:gap-1.5">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0 mt-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        KPI 及验收标准
                    </h1>
                </div>

                {/* H3 for Brand Current Status */}
                <div className="flex items-center justify-between shrink-0 pl-1 mt-1.5 xl:mt-2.5">
                    <h3 className="text-[17.5px] xl:text-[19px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        品牌当前现状
                    </h3>
                </div>

                {/* Top Section: Current Status Panels */}
                <div className="grid grid-cols-12 gap-4 shrink-0 mt-1.5 xl:mt-2.5">
                    {/* Panel 1: 2B Current Status */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-3 px-5 xl:py-[18px] xl:px-[24px] flex flex-col gap-2 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[16px] xl:text-[17.5px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                主要产品（2B侧）现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-6 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[12px] xl:text-[13px] font-medium">提及率</span>
                                <span className="text-[26px] xl:text-[30px] font-extrabold text-[#004CE5] leading-none mt-1">81.1%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[12px] xl:text-[13px] font-medium">平均提及位次</span>
                                <span className="text-[26px] xl:text-[30px] font-extrabold text-[#004CE5] leading-none mt-1">NO. 3.4</span>
                            </div>
                        </div>
                        <p className="text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed text-justify">
                            在渠道拿货相关词下，整体提及率达 81.1% 且稳居首推第一梯队；但在“高毛利”等核心利益词下，提及率下降并容易掉落至边缘位置。
                        </p>
                    </div>

                    {/* Panel 2: 2C Current Status */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-3 px-5 xl:py-[18px] xl:px-[24px] flex flex-col gap-2 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[16px] xl:text-[17.5px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                新品（2C侧）现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-6 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[12px] xl:text-[13px] font-medium">提及率</span>
                                <span className="text-[26px] xl:text-[30px] font-extrabold text-[#004CE5] leading-none mt-1">57.6%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[12px] xl:text-[13px] font-medium">平均提及位次</span>
                                <span className="text-[26px] xl:text-[30px] font-extrabold text-[#004CE5] leading-none mt-1">NO. 4.8</span>
                            </div>
                        </div>
                        <p className="text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed text-justify">
                            在 C 端日常消费场景搜索下，整体提及率跌至 57.6%，且在“品质好/超市能买到”等刚需场景词下出现失语，领先优势被大幅缩窄。
                        </p>
                    </div>

                    {/* Panel 3: Brand Sentiment Current Status */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-3 px-5 xl:py-[18px] xl:px-[24px] flex flex-col gap-2 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[16px] xl:text-[17.5px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                负面舆情现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-6 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[12px] xl:text-[13px] font-medium">负面及舆情占比</span>
                                <span className="text-[26px] xl:text-[30px] font-extrabold text-[#004CE5] leading-none mt-1">20.0%</span>
                            </div>
                        </div>
                        <p className="text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed text-justify">
                            负面声量占比达 20.0%，主要集中在“食品安全问题”、“配料表防腐剂争议”和“风味粗糙廉价”上，严重磨损品牌公信力。
                        </p>
                    </div>
                </div>

                {/* Premium Horizontal Divider Line */}
                <div className="w-full h-px bg-white/[0.08] mt-2.5 xl:mt-3 mb-1 xl:mb-2" />

                {/* H3 placed outside the table card, position remains the same in flow */}
                <div className="flex items-center justify-between shrink-0 pl-1 mt-0">
                    <h3 className="text-[17.5px] xl:text-[19px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        KPI与交付标准
                    </h3>
                </div>

                {/* Bottom Section: KPI & Acceptance Table */}
                <div className="w-full mt-1.5 xl:mt-2 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-[12px] px-[16px] xl:py-[16px] xl:px-[24px] shadow-2xl flex flex-col gap-2 xl:gap-2.5 flex-1">

                    {/* Table wrapper showing the full layout without vertical scrollbar */}
                    <div className="w-full overflow-x-auto flex-1 flex flex-col justify-center">
                        <table className="w-full text-left border-collapse min-w-[1000px] h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-300 text-[16px] xl:text-[17px] font-black">
                                    <th className="pb-2.5 pl-4 w-[11.5%]">词组分类</th>
                                    <th className="pb-2.5 w-[28.5%]">运营目标与三阶段演进策略</th>
                                    <th className="pb-2.5 w-[22%]">阶段性交付标准与 KPI 考核</th>
                                    <th className="pb-2.5 pr-4 w-[38%] pl-6">最终展现权益及交付标准</th>
                                </tr>
                            </thead>
                            <tbody className="text-[15px] xl:text-[16px] leading-relaxed">

                                {/* Row 1: 2B词条 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22]">
                                    <td className="py-2 pl-4 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[16px] xl:text-[17.5px] text-white font-extrabold">2B词条</span>
                                            <span className="text-[13px] xl:text-[13.5px] text-zinc-400 font-bold">（面向经销商）</span>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">占高位｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">拉升品牌提及，挤入核心推荐榜</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">稳位置｜6个月</span>
                                                    <span className="text-zinc-400 ml-2">稳定核心词条位次，持续压制竞品</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">稳位置｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">稳定核心词条位次，持续压制竞品</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11px] xl:text-[12px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一考核</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-zinc-200">
                                                    提及率提升至 <strong className="text-white font-black">94%</strong>，位次提升至 <strong className="text-white font-bold">2</strong>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11px] xl:text-[12px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二考核</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-zinc-200">
                                                    提及率稳定在 <strong className="text-white font-black">94%</strong>，位次稳定在 <strong className="text-white font-bold">2</strong>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11px] xl:text-[12px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段三考核</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-zinc-200">
                                                    提及率稳定在 <strong className="text-white font-black">94%</strong>，位次稳定在 <strong className="text-white font-bold">2</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-top pr-4 border-l border-white/[0.22] pl-6">
                                        <div className="flex flex-col gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl">
                                            <p className="text-zinc-150 text-[13.5px] xl:text-[14px] leading-normal text-justify">
                                                在 <strong className="text-white font-bold">豆包、DeepSeek、通义千问</strong> 等 AI 平台搜索约定词条时，AI 回答中应出现品牌/产品推荐、推荐理由及基于官方信息的产品表释。
                                            </p>
                                            <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[12.5px] xl:text-[13px] leading-normal text-justify">
                                                本次运营 <strong className="text-white font-bold">30 条核心词条</strong>（覆盖300种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 10 条即视为有效交付；低于 10 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2: 2C词条 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22]">
                                    <td className="py-3 pl-4 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[16px] xl:text-[17.5px] text-white font-extrabold">2C词条</span>
                                            <span className="text-[13px] xl:text-[13.5px] text-zinc-400 font-bold">（面向消费者）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">打地基｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">积累 AI 对品牌的信息</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">稳提升｜6个月</span>
                                                    <span className="text-zinc-400 ml-2">拉升核心业务词提及，稳步入榜</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">占高位｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">稳定核心词条位次，持续压制竞品</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11px] xl:text-[12px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一考核</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-zinc-200">
                                                    提及率提升至 <strong className="text-white font-black">70%</strong>，位次提升至 <strong className="text-white font-bold">3</strong>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11px] xl:text-[12px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二考核</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-zinc-200">
                                                    提及率提升至 <strong className="text-white font-black">80%</strong>，位次提升至 <strong className="text-white font-bold">2</strong>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11px] xl:text-[12px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段三考核</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-zinc-200">
                                                    提及率提升至 <strong className="text-white font-black">85%</strong>，位次提升至 <strong className="text-white font-bold">1.5</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4 border-l border-white/[0.22] pl-6">
                                        <div className="flex flex-col gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl">
                                            <p className="text-zinc-150 text-[13.5px] xl:text-[14px] leading-normal text-justify">
                                                在 <strong className="text-white font-bold">豆包、DeepSeek、通义千问</strong> 等 AI 平台搜索约定词条时，AI 回答中应出现品牌/产品推荐、推荐理由及基于官方信息的产品表释。
                                            </p>
                                            <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[12.5px] xl:text-[13px] leading-normal text-justify">
                                                本次运营 <strong className="text-white font-bold">22 条核心词条</strong>（覆盖220种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 7 条即视为有效交付；低于 7 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3: 品牌词 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-3 pl-4 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[16px] xl:text-[17.5px] text-white font-extrabold">品牌词</span>
                                            <span className="text-[13px] xl:text-[13.5px] text-zinc-400 font-bold">（负面及对冲）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">查问题｜1个月</span>
                                                    <span className="text-zinc-400 ml-2">建立错误信息监测，定制针对性策略</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[11.5px] xl:text-[12.5px] font-black bg-white/10 text-zinc-200 px-2 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[14px] xl:text-[15px] leading-relaxed text-justify">
                                                    <span className="text-white font-black">解问题｜11个月</span>
                                                    <span className="text-zinc-400 ml-2">分类处理错误信源，逐步修正异常信息</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2 font-medium bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl text-[14px] xl:text-[14.5px] leading-relaxed text-justify">
                                            <p className="text-zinc-200">
                                                针对品牌问询，AI 生成内容的<strong className="text-white font-bold">核心事实准确率</strong>达到约定标准，<strong className="text-[#8cb1ff] font-bold">负面信息占比控制在 5% 以内</strong>，正向/中性情绪导向占比稳定在 <strong className="text-white font-bold">95% 以上</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-400 align-top pr-4 leading-relaxed border-l border-white/[0.22] pl-6 text-zinc-200">
                                        <div className="flex flex-col gap-1.5 bg-white/[0.015] border border-white/[0.04] p-2.5 xl:p-3 rounded-xl text-[13.5px] xl:text-[14px] text-justify">
                                            <p>
                                                围绕约定 AI 平台、产品及核心词条，持续监测并纠偏价格混乱、型号漏洞、历史价格引用等问题，通过信源定位、官方内容覆盖，降低 AI 引用错误价格的概率。
                                            </p>
                                            <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[12.5px] xl:text-[13px]">
                                                因 AI 平台升级、信源演化及回答随机性等不可控因素，项目以<strong className="text-white font-bold">核心错误纠治</strong>、<strong className="text-white font-bold">正确信息占比提升</strong>作为交付标准。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoKpiAcceptance;
