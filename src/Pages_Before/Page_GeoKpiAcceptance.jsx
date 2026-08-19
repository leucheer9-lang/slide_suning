import React from 'react';

function Page_GeoKpiAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-1 pb-1.5 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-0.5">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0 mt-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        KPI 及验收标准
                    </h1>
                </div>

                {/* H3 for Brand Current Status */}
                <div className="flex items-center justify-between shrink-0 pl-1 mt-1">
                    <h3 className="text-[17.5px] xl:text-[19px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        品牌当前现状
                    </h3>
                </div>

                {/* Top Section: Current Status Panels */}
                <div className="grid grid-cols-12 gap-3 shrink-0 mt-1">
                    {/* Panel 1: 优化词 To C */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-4 xl:py-2.5 xl:px-5 flex flex-col gap-1 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[15px] xl:text-[16.5px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                优化词 To C 现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-5 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[11.5px] xl:text-[12.5px] font-medium">提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">24.0%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[11.5px] xl:text-[12.5px] font-medium">Top1提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">2.0%</span>
                            </div>
                        </div>
                        <p className="text-[12.5px] xl:text-[13.5px] text-zinc-300 leading-snug text-justify">
                            25 词命中 9 个，靠榜单与新型显示、电子信息等产业属性词；16 条完全不出现。同期新桥东 54% 稳居第一，本品在 166 家中排第 4。
                        </p>
                    </div>

                    {/* Panel 2: 优化词 To B */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-4 xl:py-2.5 xl:px-5 flex flex-col gap-1 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[15px] xl:text-[16.5px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                优化词 To B 现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-5 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[11.5px] xl:text-[12.5px] font-medium">提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">2.0%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[11.5px] xl:text-[12.5px] font-medium">Top1提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">0.0%</span>
                            </div>
                        </div>
                        <p className="text-[12.5px] xl:text-[13.5px] text-zinc-300 leading-snug text-justify">
                            25 词仅命中 1 个（高端 + 现成房源）；24 条完全不出现。同期新桥东 42% 稳居第一，本品在 175 家中排第 72。
                        </p>
                    </div>

                    {/* Panel 3: 负面与错误信息 */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-4 xl:py-2.5 xl:px-5 flex flex-col gap-1 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[15px] xl:text-[16.5px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                负面与错误信息现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-5 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[11.5px] xl:text-[12.5px] font-medium">负面占比</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">16.3%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[11.5px] xl:text-[12.5px] font-medium">正面占比</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">83.8%</span>
                            </div>
                        </div>
                        <p className="text-[12.5px] xl:text-[13.5px] text-zinc-300 leading-snug text-justify">
                            13 条负面中 9 条是交通信息错误（无地铁直达、应人石站在建）；其余 4 条来自公寓噪音与押金纠纷，被写成整个园区的物业水平。
                        </p>
                    </div>
                </div>

                {/* Premium Horizontal Divider Line */}
                <div className="w-full h-px bg-white/[0.08] mt-1.5 mb-0.5 shrink-0" />

                {/* H3 placed outside the table card, position remains the same in flow */}
                <div className="flex items-center justify-between shrink-0 pl-1 mt-0">
                    <h3 className="text-[17.5px] xl:text-[19px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        KPI与交付标准
                    </h3>
                </div>

                {/* Bottom Section: KPI & Acceptance Table */}
                <div className="w-full mt-1 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-1.5 px-3 xl:py-2 xl:px-5 shadow-2xl flex flex-col flex-1 min-h-0 overflow-hidden">

                    {/* Table wrapper: min-h-0 so flex child can shrink and bottom rows stay visible */}
                    <div className="w-full flex-1 min-h-0 overflow-hidden flex flex-col">
                        <table className="w-full text-left border-collapse min-w-[1000px] h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-300 text-[15.5px] xl:text-[17px] font-black">
                                    <th className="pb-1.5 pl-3 w-[11%]">词组分类</th>
                                    <th className="pb-1.5 w-[30%]">运营目标与两阶段演进策略</th>
                                    <th className="pb-1.5 w-[22%]">阶段性交付标准与 KPI 考核</th>
                                    <th className="pb-1.5 pr-3 w-[37%] pl-5">最终展现权益及交付标准</th>
                                </tr>
                            </thead>
                            <tbody className="text-[15px] xl:text-[16.5px] leading-snug">

                                {/* Row 1: 优化词 To C */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22] h-[34%]">
                                    <td className="py-2 pl-3 font-semibold text-zinc-100 align-middle">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[16.5px] xl:text-[18px] text-white font-extrabold">优化词 To C</span>
                                            <span className="text-[12px] xl:text-[13px] text-zinc-400 font-bold">企业选址 · 25 条</span>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3">
                                        <div className="flex flex-col h-full justify-evenly gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-white/10 text-zinc-200 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                    <span className="text-white font-black">打地基｜2个月</span>
                                                    <span className="text-zinc-400 ml-1.5">先做实已能进的“新型显示 / 电子信息 / 研发办公一体化”类产业属性词，同步补齐政府名录收录</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-white/10 text-zinc-200 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                    <span className="text-white font-black">稳提升｜1个月</span>
                                                    <span className="text-zinc-400 ml-1.5">向“宝安区产业园推荐 / 政策补贴 / 人才公寓”等通用大词与软条件词扩面，稳住占位并持续压制新桥东，冲击第一</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3">
                                        <div className="flex flex-col h-full justify-evenly gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一考核</span>
                                                <p className="text-[16px] xl:text-[17.5px] leading-snug text-zinc-200 text-justify [text-justify:inter-ideograph]">
                                                    进前三，提及率提升至 <strong className="text-white font-black">40%</strong>，
                                                    <br />
                                                    Top1 提及率提升至 <strong className="text-white font-black">13%</strong>
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二考核</span>
                                                <p className="text-[16px] xl:text-[17.5px] leading-snug text-zinc-200 text-justify [text-justify:inter-ideograph]">
                                                    争第一，提及率提升至 <strong className="text-white font-black">50%</strong>，
                                                    <br />
                                                    Top1 提升至 <strong className="text-white font-black">30%</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col justify-center gap-1.5 h-full bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl">
                                            <p className="text-zinc-150 text-[13.5px] xl:text-[14.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                在 <strong className="text-white font-bold">DeepSeek、豆包</strong> 搜索企业选址类约定词条时，AI 回答中应出现创维创新谷推荐、推荐理由及园区配置表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[13.5px] xl:text-[14.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                本次运营 <strong className="text-white font-bold">25 条 C 端优化词</strong>（覆盖 250 种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 9 条即视为有效交付；低于 9 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2: 优化词 To B */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22] h-[34%]">
                                    <td className="py-2 pl-3 font-semibold text-zinc-100 align-middle">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[16.5px] xl:text-[18px] text-white font-extrabold">优化词 To B</span>
                                            <span className="text-[12px] xl:text-[13px] text-zinc-400 font-bold">渠道招商 · 25 条</span>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3">
                                        <div className="flex flex-col h-full justify-evenly gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-white/10 text-zinc-200 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                    <span className="text-white font-black">打地基｜2个月</span>
                                                    <span className="text-zinc-400 ml-1.5">先做实“高端 + 现成房源 / 大面积整层”等窄词入口，同步补齐官方信源物业清单与招商条目</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-white/10 text-zinc-200 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                    <span className="text-white font-black">稳提升｜1个月</span>
                                                    <span className="text-zinc-400 ml-1.5">向“中介带客 / 佣金政策 / 报备流程”等渠道成交词扩面，稳住占位并持续压制新桥东，争取第一</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3">
                                        <div className="flex flex-col h-full justify-evenly gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一考核</span>
                                                <p className="text-[16px] xl:text-[17.5px] leading-snug text-zinc-200 text-justify [text-justify:inter-ideograph]">
                                                    进前五，提及率提升至 <strong className="text-white font-black">10%</strong>，
                                                    <br />
                                                    Top1 提升至 <strong className="text-white font-black">5%</strong>
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二考核</span>
                                                <p className="text-[16px] xl:text-[17.5px] leading-snug text-zinc-200 text-justify [text-justify:inter-ideograph]">
                                                    进前三，提及率提升至 <strong className="text-white font-black">20%</strong>，
                                                    <br />
                                                    Top1 提升至 <strong className="text-white font-black">10%</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col justify-center gap-1.5 h-full bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl">
                                            <p className="text-zinc-150 text-[13.5px] xl:text-[14.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                在 <strong className="text-white font-bold">DeepSeek、豆包</strong> 搜索中介带客类约定词条时，AI 回答中应出现创维创新谷推荐、房源条件及渠道政策表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[13.5px] xl:text-[14.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                本次运营 <strong className="text-white font-bold">25 条 B 端优化词</strong>（覆盖 250 种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 8 条即视为有效交付；低于 8 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3: 负面及错误信息 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 h-[32%]">
                                    <td className="py-2 pl-3 font-semibold text-zinc-100 align-middle">
                                        <span className="text-[16.5px] xl:text-[18px] text-white font-extrabold leading-tight">负面及错误信息</span>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3">
                                        <div className="flex flex-col h-full justify-evenly gap-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-white/10 text-zinc-200 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                    <span className="text-white font-black">查问题｜2个月</span>
                                                    <span className="text-zinc-400 ml-1.5">建立负面与错误信息监测，定位承载投诉帖和过期交通表述的具体信源</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[12.5px] xl:text-[13.5px] font-black bg-white/10 text-zinc-200 px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                                    <span className="text-white font-black">解问题｜1个月</span>
                                                    <span className="text-zinc-400 ml-1.5">纠正“无地铁直达 / 应人石站在建”等过期表述，对冲公寓投诉被泛化为园区物业的结论</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-300 align-middle pr-3">
                                        <div className="flex flex-col justify-center h-full font-medium bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl text-[16px] xl:text-[17.5px] leading-snug text-justify [text-justify:inter-ideograph]">
                                            <p className="text-zinc-200">
                                                针对创维创新谷品牌相关问询（40 条监测词口径，C 端 20 条 + B 端 20 条），AI 生成内容的<strong className="text-white font-bold">核心事实准确率</strong>达到约定标准，<strong className="text-[#8cb1ff] font-bold">负面信息占比从 16.3% 降至 5% 以内</strong>，正向/中性情绪导向占比稳定在 <strong className="text-white font-bold">95% 以上</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 text-zinc-400 align-middle pr-3 leading-snug border-l border-white/[0.22] pl-5 text-zinc-200">
                                        <div className="flex flex-col justify-center gap-1.5 h-full bg-white/[0.015] border border-white/[0.04] p-2.5 xl:p-3 rounded-xl text-[13.5px] xl:text-[14.5px] text-justify [text-justify:inter-ideograph]">
                                            <p>
                                                围绕约定 AI 平台及核心词条，持续监测并纠偏“园区无地铁直达、应人石站仍在建、物业推诿不退押金、施工噪音扰民”等表述，通过信源定位与官方内容覆盖，降低 AI 固化负面印象的概率。
                                            </p>
                                            <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[13.5px] xl:text-[14.5px]">
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
