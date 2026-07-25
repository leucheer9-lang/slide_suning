import React from 'react';

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4 lg:mb-5 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">02</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        极强比价属性：价格/促销高频变动，AI 报价滞后且混乱
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        家电 3C 是全网比价最激烈的品类，用户决策路径必带「京东 vs 苏宁 vs 天猫价格对比」「国补在哪个平台最划算」。<br />
                        价格随大促与国补政策高频变动，AI 训练与爬取数据严重滞后，极易给出过时价格或错误补贴口径——一旦形成「苏宁比京东贵」的错误结论，将直接影响成交。
                    </p>
                </div>

                {/* Main Content: Pricing Risk Table */}
                <div className="flex-1 flex flex-col min-h-0 pb-3">
                    <div className="w-full h-full overflow-hidden border border-white/10 rounded-2xl bg-[#0a0a0a] shadow-2xl flex flex-col">
                        <table className="w-full h-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-base lg:text-lg xl:text-xl font-bold text-zinc-200 tracking-wider">
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[22%]">用户典型提问</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[28%]">AI 易给出的错误结论</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[22%]">滞后/混乱来源</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[28%]">对苏宁的直接伤害</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">京东和苏宁同款冰箱谁更便宜？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">引用过期价得出「苏宁贵 / 京东更划算」</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">日常价 vs 大促价混用，爬取滞后</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">比价环节被直接劝退，流失成交</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">国补在哪个平台最划算？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">补贴比例、品类资格、领取口径过时或错误</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">国补政策多轮调整，语料未同步</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">错失「国补购机」决策推荐位</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">618 / 双 11 苏宁家电怎么买？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">仍按日常价或旧活动规则作答</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">大促价窗口短，AI 更新跟不上</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">促销期声量与转化双重受损</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">以旧换新补贴后到手价多少？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">漏算旧机抵扣、平台补贴叠加规则</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">组合优惠口径分散、非结构化</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">核心差异化优势无法被正确表达</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">苏宁和天猫同款手机差多少？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">把券前价、券后价、会员价混为一谈</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">多平台价格口径不一致</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">品牌被贴上「价格不透明」标签</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        建立价格/促销/国补的权威语料源与高频更新机制，向 AI 输出结构化、可溯源的官方价与政策口径，压制过期与错误报价（对齐方案「错误价格处理」模块）。
                    </p>
                </div>
            </div>
        </div>
    );
}
