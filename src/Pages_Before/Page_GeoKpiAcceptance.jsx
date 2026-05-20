import React from 'react';

function Page_GeoKpiAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-3">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0.5">
                    <h1 className="text-[38px] lg:text-[40px] xl:text-[42px] font-extrabold text-white tracking-widest leading-tight">
                        KPI 及验收标准
                    </h1>
                </div>

                {/* Top Section: Current Status Panels */}
                <div className="grid grid-cols-12 gap-4 shrink-0">
                    {/* Panel 1: Tiles */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl p-5 flex flex-col justify-between gap-3 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[20px] xl:text-[22px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                主要产品现状：瓷砖
                            </span>
                        </div>
                        <div className="flex items-center gap-8 my-1.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[14px] xl:text-[15px] font-medium">提及率</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">5.8%</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[14px] xl:text-[15px] font-medium">平均提及位次</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">NO. 8.1</span>
                            </div>
                        </div>
                        <p className="text-[15.5px] xl:text-[16.5px] text-zinc-300 leading-relaxed">
                            在核心瓷砖大词下，萨米特陷入了“<strong className="text-white font-semibold">极少被提及、提了也垫底</strong>”的极度弱势局面，在 AI 的基础推荐库中几乎处于全面失声状态。
                        </p>
                    </div>

                    {/* Panel 2: Sintered Slabs */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl p-5 flex flex-col justify-between gap-3 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[20px] xl:text-[22px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                新品类现状：岩板
                            </span>
                        </div>
                        <div className="flex items-center gap-8 my-1.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[14px] xl:text-[15px] font-medium">提及率</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">0.0%</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[14px] xl:text-[15px] font-medium">平均提及位次</span>
                                <span className="text-[17px] xl:text-[19px] font-bold text-zinc-400 leading-tight mt-1.5">（因未被提及而无排名数据）</span>
                            </div>
                        </div>
                        <p className="text-[15.5px] xl:text-[16.5px] text-zinc-300 leading-relaxed">
                            萨米特在岩板相关领域的 AI 认知里<strong className="text-white font-semibold">完全为零</strong>，尚未建立起任何有效的品类关联，处于彻底隐形的“流量真空”状态。
                        </p>
                    </div>

                    {/* Panel 3: Negative Reviews */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl p-5 flex flex-col justify-between gap-3 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[20px] xl:text-[22px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                舆情与信源错误现状
                            </span>
                        </div>
                        <div className="flex items-center gap-8 my-1.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[14px] xl:text-[15px] font-medium">负面信息比例</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">11.7%</span>
                            </div>
                        </div>
                        <p className="text-[15.5px] xl:text-[16.5px] text-zinc-300 leading-relaxed">
                            负面信息比例为 <strong className="text-white font-semibold">11.7%</strong>，集中在“<strong className="text-white font-semibold">执行存在差异</strong>”以及“<strong className="text-white font-semibold">质量投诉等问题上</strong>”，并且存在部分的品牌信息 and 产品价格错误。
                        </p>
                    </div>
                </div>

                {/* Bottom Section: KPI & Acceptance Table */}
                <div className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
                    <div className="flex items-center justify-between shrink-0 mb-3 pl-1">
                        <h3 className="text-[21px] xl:text-[23px] font-bold text-white flex items-center gap-2.5">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                            运营目标与交付标准制定 (KPI & ACCEPTANCE STANDARDS)
                        </h3>
                    </div>
                    
                    {/* Table wrapper with elegant custom scrollbar */}
                    <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="border-b border-white/10 text-zinc-300 text-[16px] xl:text-[17px] font-bold">
                                    <th className="pb-3 pl-3 w-[14%]">词组分类</th>
                                    <th className="pb-3 w-[34%]">运营目标与三阶段演进策略</th>
                                    <th className="pb-3 w-[24%]">阶段性交付标准与 KPI 考核</th>
                                    <th className="pb-3 pr-3 w-[28%] pl-4">最终展现权益及交付标准</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[14.5px] xl:text-[15.5px] leading-relaxed">
                                
                                {/* Row 1: Tiles */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-3 pl-3 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[17px] xl:text-[18px] text-white font-bold">主要产品词</span>
                                            <span className="text-[14px] text-zinc-400 font-medium">（瓷砖）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">打地基｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">提升基础曝光，打破低提及现状</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">稳提升｜6个月</span>
                                                    <span className="text-zinc-400 ml-2">拉升品牌提及，挤入核心推荐榜</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">占高位｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">稳定核心词条位次，持续压制竞品</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2.5 font-medium text-[15px] xl:text-[16px]">
                                            <div className="flex flex-col">
                                                <span className="text-[#7ca2ff] font-bold">阶段一考核</span>
                                                <span className="text-zinc-300">提及率提升至 <strong className="text-white font-bold">33%</strong>，位次提升至 <strong className="text-white font-semibold">6</strong></span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#7ca2ff] font-bold">阶段二考核</span>
                                                <span className="text-zinc-300">提及率提升至 <strong className="text-white font-bold">75%</strong>，位次提升至 <strong className="text-white font-semibold">2</strong></span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#7ca2ff] font-bold">阶段三考核</span>
                                                <span className="text-zinc-300">提及率提升至 <strong className="text-white font-bold">85%</strong>，位次提升至 <strong className="text-white font-semibold">1.5</strong></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td rowSpan={2} className="py-3 text-zinc-300 align-top pr-3 text-[14.5px] xl:text-[15.5px] leading-relaxed border-l border-white/5 pl-4">
                                        <div className="flex flex-col gap-3 bg-[#004CE5]/5 border border-[#004CE5]/15 p-4 rounded-xl h-full justify-center">
                                            <p className="text-zinc-200">
                                                在 <strong className="text-white font-semibold">DeepSeek、豆包、通义千问</strong> 等 AI 平台搜索约定词条时，AI 回答中应出现品牌/产品推荐、推荐理由及基于官方信息的产品表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-3 text-zinc-400 text-[13.5px] xl:text-[14.5px]">
                                                本次运营 <strong className="text-white font-semibold">30 条核心词条</strong>（覆盖300种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 10 条即视为有效交付；低于 10 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2: Sintered Slabs */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-3 pl-3 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[17px] xl:text-[18px] text-white font-bold">新品词</span>
                                            <span className="text-[14px] text-zinc-400 font-medium">（岩板）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">打地基｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">打破 AI 对该品牌 0 推荐的现状</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">稳提升｜6个月</span>
                                                    <span className="text-zinc-400 ml-2">拉升核心业务词提及，稳步入榜</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">占高位｜3个月</span>
                                                    <span className="text-zinc-400 ml-2">稳定核心词条位次，持续压制竞品</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2.5 font-medium text-[15px] xl:text-[16px]">
                                            <div className="flex flex-col">
                                                <span className="text-[#7ca2ff] font-bold">阶段一考核</span>
                                                <span className="text-zinc-300">提及率提升至 <strong className="text-white font-bold">20%</strong>，位次提升至 <strong className="text-white font-semibold">8</strong></span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#7ca2ff] font-bold">阶段二考核</span>
                                                <span className="text-zinc-300">提及率提升至 <strong className="text-white font-bold">70%</strong>，位次提升至 <strong className="text-white font-semibold">3</strong></span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#7ca2ff] font-bold">阶段三考核</span>
                                                <span className="text-zinc-300">提及率提升至 <strong className="text-white font-bold">85%</strong>，位次提升至 <strong className="text-white font-semibold">1.5</strong></span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3: Negatives & Errors */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-3 pl-3 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[17px] xl:text-[18px] text-white font-bold">品牌词</span>
                                            <span className="text-[14px] text-zinc-400 font-medium">（负面及错误）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">查问题｜1个月</span>
                                                    <span className="text-zinc-400 ml-2">建立错误信息监测，定制针对性策略</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[13px] xl:text-[14px] font-bold bg-white/10 text-zinc-200 px-2 py-0.5 rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[15px] xl:text-[16px] leading-relaxed">
                                                    <span className="text-white font-semibold">解问题｜11个月</span>
                                                    <span className="text-zinc-400 ml-2">分类处理错误信源，逐步修正异常信息</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2 font-medium bg-[#004CE5]/5 border border-[#004CE5]/15 p-3 rounded-xl mt-1 text-[14.5px] xl:text-[15.5px]">
                                            <p className="text-zinc-200 leading-relaxed">
                                                针对品牌询问，AI 生成内容的<strong className="text-white font-semibold">核心事实准确率</strong>达到约定标准，<strong className="text-[#7ca2ff] font-semibold">负面信息占比控制在 5% 以内</strong>，正向/中性情绪导向占比稳定在 <strong className="text-white font-semibold">95% 以上</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 text-zinc-400 align-top pr-3 text-[14.5px] xl:text-[15.5px] leading-relaxed border-l border-white/5 pl-4">
                                        <div className="flex flex-col gap-3 bg-white/[0.015] border border-white/[0.04] p-4 rounded-xl">
                                            <p className="text-zinc-200">
                                                服务期内，围绕约定 AI 平台、产品及核心词条，持续监测并纠偏价格错乱、型号混淆、历史价格引用等问题，通过信源定位、官方口径强化和内容覆盖，降低 AI 引用错误价格的概率。
                                            </p>
                                            <p className="border-t border-white/10 pt-3 text-zinc-400 text-[13.5px] xl:text-[14.5px]">
                                                因 AI 平台升级、信源变化及回答随机性等不可控因素，项目以<strong className="text-white font-semibold">核心错误压制</strong>、<strong className="text-white font-semibold">正确信息占比提升</strong>作为交付标准。
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
