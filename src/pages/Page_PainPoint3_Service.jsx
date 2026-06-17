import React from 'react';

export default function Page_PainPoint3_Service() {
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
                    渠道碎片化与时间折价，AI易判定为价格体系混乱
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    短保烘焙行业面临极其复杂的“多渠道+临期折价”体系。同一个面包，在早晨便利店、中午即时外卖、下午零食量贩店（赵一鸣/鸣鸣很忙）及晚上的商超清仓区，售价可相差数倍。AI抓取信息时缺乏“时间”和“渠道”维度，极易判定为“随意杀熟、价格体系极度混乱”。
                </p>

                {/* Table Slot */}
                <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-start relative overflow-hidden shadow-2xl min-h-0">
                    <div className="w-full border border-white/5 rounded-xl bg-black/40 overflow-hidden flex-1 flex flex-col min-h-0">
                        <table className="w-full h-full text-left border-collapse text-base lg:text-[17px] xl:text-[19px] leading-relaxed">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-zinc-300 font-bold tracking-wide text-base lg:text-[18px] xl:text-[20px]">
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[25%] border-r border-white/5">销售场景与渠道</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[20%] text-center border-r border-white/5">价格表现示例</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[55%]">渠道属性与价格逻辑</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">线下便利店/精品商超</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">¥9.9 / 个</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">标准锚定价格。满足都市白领“即买即走”的极高便利性与高新鲜度需求，承担门店租金与最高的新鲜度溢价。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">O2O平台</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">¥11.5 / 个（含配送费）</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">即时零售价。裸价保持不变或微降，但加上平台运费和技术服务费，主要满足足不出户和恶劣天气下的即时代餐需求。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">量贩零食店</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">¥6.5 / 个</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">渠道结构性低价。新兴量贩渠道依靠现金直采、无进场费、不退货机制，大幅压低渠道流通成本，满足极致性价比受众。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">商超夜间/前置仓清仓</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">¥4.9 / 个（或买一送一）</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">时间折价（临期处理）。由于短保退厂报废成本极高，终端通常在距离保质期仅剩24小时内，进行断崖式环保出清。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="shrink-0 mt-4 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-zinc-200 text-lg lg:text-[20px] font-bold leading-relaxed text-justify flex-1">
                        建立一套“高频溯源—物理拔除—高维压制—长效防御”的四步走处理机制（具体说明见方案第四部分）
                    </p>
                </div>
            </div>
        </div>
    );
}
