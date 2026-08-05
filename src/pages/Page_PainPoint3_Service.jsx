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
                    <span className="text-[#004CE5] font-black text-base">03</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    寄件渠道碎片化，报价口径难对齐
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    同样一票货，走官方App下单、第三方比价平台代下单、企业月结协议，还是走一体化供应链项目，价格可以差出一大截；再叠加首重续重、体积重、保价费、上门费、偏远地区附加费与各类优惠券，最终成交价并不唯一。AI抓取时几乎不携带“渠道、重量、时效产品、结算方式”这些前提，很容易把不同条件下的报价直接并列，得出“收费不透明、同货不同价”的结论。
                </p>

                {/* Table Slot */}
                <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-start relative overflow-hidden shadow-2xl min-h-0">
                    <div className="w-full border border-white/5 rounded-xl bg-black/40 overflow-hidden flex-1 flex flex-col min-h-0">
                        <table className="w-full h-full text-left border-collapse text-base lg:text-[17px] xl:text-[19px] leading-relaxed">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-zinc-300 font-bold tracking-wide text-base lg:text-[18px] xl:text-[20px]">
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[25%] border-r border-white/5">下单场景与渠道</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[20%] text-center border-r border-white/5">计价方式</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[55%]">渠道属性与定价逻辑</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">官方渠道散寄（App / 小程序）</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">首重 + 续重</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">对外公示的价格锚点。按重量分段计费，含上门取件与送货上门，另有保价费、偏远地区附加费等浮动项。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">第三方寄件 / 比价平台代下单</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">折扣价 + 平台补贴</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">聚合平台以流量换折扣，同样的承运能力被打上更低价签。这是AI最容易抓到、也最常被拿来做“对照组”的价格。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">企业月结协议</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">一单一议（阶梯价）</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">按月度体量、流向结构、产品组合与账期综合定价，属于不公开信息。AI抓不到，企业客户搜到的往往只是散单价。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-200 border-r border-white/5 font-semibold leading-snug">一体化供应链项目</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">仓储 + 操作 + 运配分项</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-zinc-400 leading-relaxed text-justify">计费单位是仓储面积、库存件数、操作件数与配送票数，与“一票多少钱”根本不是同一个口径，被并列比较时最易失真。</td>
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
                        用“计价规则”替代“单一价格”输出内容，每个报价都锚定渠道、重量体积、时效产品、结算方式四个前提；对已扩散的错误报价，按“高频溯源—物理拔除—高维压制—长效防御”四步处理（具体说明见方案第四部分）
                    </p>
                </div>
            </div>
        </div>
    );
}
