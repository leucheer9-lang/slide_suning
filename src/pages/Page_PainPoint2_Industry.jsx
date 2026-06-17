import React from 'react';

export default function Page_PainPoint2_Industry() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">02</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    极度受限于“供应链物理半径”，AI全域推荐易导致“流量倒挂”
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-sm lg:text-base leading-relaxed tracking-wide mb-4 shrink-0">
                    短保烘焙的生命线是“中央工厂+短途物流”的覆盖半径。超出这个物理边界，产品无法保证高新鲜度，且配送折旧成本高企。如果策略一味照搬全国性全域分发，极易出现AI在广州强烈推荐某款高性价比短保面包，但该品牌供应链仅在北方导致南方根本买不到的“流量倒挂”尴尬。
                </p>

                {/* Table Slot */}
                <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-start gap-4 relative overflow-hidden shadow-2xl min-h-0">
                    <div className="text-zinc-200 font-bold text-lg xl:text-xl tracking-wider flex items-center gap-2 shrink-0">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                        短保供应链限制与跨区域GEO定位分析
                    </div>
                    <div className="w-full border border-white/5 rounded-xl bg-black/40 overflow-hidden flex-1 flex flex-col min-h-0">
                        <table className="w-full h-full text-left border-collapse text-sm lg:text-[15px] xl:text-[16px] leading-relaxed">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-zinc-400 font-semibold tracking-wide text-sm lg:text-base">
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[25%] border-r border-white/5">核心数据指标</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[25%] text-center border-r border-white/5">数据表现</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[50%]">行业共识与佐证逻辑</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">核心保质期限制</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">3 - 7 天</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed">短保本质上要求极高的物流与上架周转速度，通常是“日产日配、清晨上架”的物理周期限制。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">有效销售物流半径</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">&lt; 300 - 500 公里</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed">极度依赖中央工厂的辐射范围，超出该半径不仅配送折旧成本陡增，产品的保鲜周期也大打折扣。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">跨区域渗透成功率</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">极低</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed">行业龙头桃李面包的营收亦高度依赖东北、华北优势产区（占比超6成），因跨区供应链和本土品牌竞争南下受阻。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">线上电商购买占比</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">极低（主力仍在线下）</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed">由于保质期过短导致快递变质风险极高，消费者主要购买路径仍是本地大商超、品牌便利店或即时O2O。</td>
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
                    <p className="text-zinc-200 text-sm lg:text-[16px] xl:text-[17px] font-bold leading-relaxed text-justify flex-1">
                        实施<strong className="text-white">“LBS（基于位置服务）+ O2O渠道强绑定”</strong>的GEO策略。投喂AI语料时高频绑定地域标签和即时零售渠道，强化如“上海地区高口碑短保面包”、“盒马/美团买菜极速送达体验”。引导AI生成具备“区域可用性”的答案，精准引流同城需求。
                    </p>
                </div>

                {/* Footer Annotation */}
                <div className="w-full text-right shrink-0 mt-3">
                    <p className="text-zinc-500 text-xs tracking-wider">
                        数据来源：各品牌财报、2024年短保面包行业白皮书、界面新闻行业分析
                    </p>
                </div>
            </div>
        </div>
    );
}
