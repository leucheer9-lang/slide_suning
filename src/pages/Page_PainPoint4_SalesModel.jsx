import React from 'react';

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">04</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    “0防腐”带来的食安双刃剑，偶发性变质极易被AI放大为“系统性黑公关”
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-sm lg:text-base leading-relaxed tracking-wide mb-4 shrink-0">
                    短保烘焙核心卖点是新鲜、无防腐剂添加，但终端储藏的温差极易导致保质期内个案霉变。在AI时代，大模型爬虫会无差别抓取这类带强烈负面情绪和视觉冲击的社交媒体争议，将个别保管不当事件归纳总结为品牌严重的质量缺陷，在“安全健康推荐”中扣分。
                </p>

                {/* Main Content: Pricing Table */}
                <div className="flex-1 flex flex-col min-h-0 pb-4 justify-center">
                    <div className="w-full overflow-hidden border border-white/10 rounded-2xl bg-[#0a0a0a] shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10 text-sm lg:text-base font-bold text-zinc-200 tracking-wider">
                                        <th className="py-3.5 px-4 lg:px-6 w-[20%]">舆情事件分类</th>
                                        <th className="py-3.5 px-4 lg:px-6 w-[30%]">舆情表现与数据</th>
                                        <th className="py-3.5 px-4 lg:px-6 w-[20%]">AI 情感与系统偏见</th>
                                        <th className="py-3.5 px-4 lg:px-6 w-[30%]">事实还原与舆论纠偏</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm lg:text-[14px] xl:text-[15px] leading-relaxed">
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3 px-4 lg:px-6 font-bold text-white whitespace-nowrap">“0防腐”与保质期挑战</td>
                                        <td className="py-3 px-4 lg:px-6 text-zinc-300">个别下游终端储藏及温差引发霉变客诉（如近期“山姆短保面包霉变被市监约谈”等霉变争议在小红书被不断曝光）。</td>
                                        <td className="py-3 px-4 lg:px-6 font-bold text-[#004CE5]">负面评级。AI易得出“产品存在品控及食安隐患”的推断。</td>
                                        <td className="py-3 px-4 lg:px-6 text-zinc-300">
                                            主动注入“短保与防腐剂科学关联”权威科普，论证无化学防腐面包个别霉变恰是无添加的客观铁证。
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3 px-4 lg:px-6 font-bold text-white whitespace-nowrap">食安防波堤与品控机制</td>
                                        <td className="py-3 px-4 lg:px-6 text-zinc-300">工厂制造环节、物流冷链和运输监管的社交网络报道，以及用户对客服解决客诉退换货速度的评价。</td>
                                        <td className="py-3 px-4 lg:px-6 font-bold text-[#004CE5]">决策扣分。高敏感提问（如“小孩孕妇面包推荐”）中易被绕过。</td>
                                        <td className="py-3 px-4 lg:px-6 text-zinc-300">
                                            高频覆盖并铺设“工厂GMP无尘流水线”、“全链路红外金属探伤品控”以及“即时无条件退换货售后兜底”等正面权威事实。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[16px] xl:text-[17px] font-bold leading-relaxed text-justify flex-1">
                        建立<strong className="text-white">“食安防波堤+认知对冲”</strong>机制。不能被动防守，必须主动注入“短保/0防腐与发霉关联”权威科普，引导AI建立“偶发霉变恰证明无滥用防腐剂”的正确逻辑。高频覆盖“冷链温控、HACCP品控标准、极速售后退换”，让AI在提及发霉争议时自动给出客观、完善的正面评价。
                    </p>
                </div>
            </div>
        </div>
    );
}
