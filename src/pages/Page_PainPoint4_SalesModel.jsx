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
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">04</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        销售模式大多是经销商体系，易造成价格不一、信息错乱
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        大宗建材是典型的<strong className="text-white">F2B2C（工厂-经销商-顾客）</strong>模式，由于各地门店的租金、运营成本和包工包料方式不同，同款瓷砖在网上的报价可能相差一倍。<br />
                        如果它抓取到A网页说100元，B网页说250元，AI在生成答案时就会陷入混乱，最终呈现给消费者的，往往是一个极其离谱或自相矛盾的价格，这会直接让客户觉得品牌“水很深、价格不透明、极不靠谱”。
                    </p>
                </div>

                {/* Main Content: Pricing Table */}
                <div className="flex-1 flex flex-col min-h-0 pb-4 justify-center">
                    <div className="w-full overflow-hidden border border-white/10 rounded-2xl bg-[#0a0a0a] shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10 text-sm lg:text-base font-bold text-zinc-200 tracking-wider">
                                        <th className="py-4 px-4 lg:px-6">价格档次（单片价）</th>
                                        <th className="py-4 px-4 lg:px-6">折合单平米价格（约）</th>
                                        <th className="py-4 px-4 lg:px-6">平台/货源渠道</th>
                                        <th className="py-4 px-4 lg:px-6">价格说明</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm lg:text-[0.95rem] xl:text-[1rem]">
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-white whitespace-nowrap">¥400 - ¥571</td>
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-zinc-200 whitespace-nowrap">¥355 - ¥507 / ㎡</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-white font-semibold whitespace-nowrap">天猫/京东官方旗舰店</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-zinc-300 leading-relaxed">
                                            线上标高价是为了保护线下实体经销商的利益，防止线上低价导致线下实体店无法生存。这个价格通常只是“展示价”，极少有消费者直接以此价成交。
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-white whitespace-nowrap">¥180 - ¥280</td>
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-zinc-200 whitespace-nowrap">¥160 - ¥248 / ㎡</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-white font-semibold whitespace-nowrap">地方线下建材城、经销商专卖店实体报价</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-zinc-300 leading-relaxed">
                                            包含实体展厅租金、人工成本，以及商家承诺的本地免费量房、铺贴设计方案（送排版图）、免费送货上门（甚至包上楼）等本地化服务费用。不同城市的经销商会根据当地市场定位上下浮动。
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-white whitespace-nowrap">¥115 - ¥135</td>
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-zinc-200 whitespace-nowrap">¥102 - ¥120 / ㎡</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-white font-semibold whitespace-nowrap">淘宝/京东/拼多多等非官方授权C店（如“佛山粤鸿瓷砖网店”）</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-zinc-300 leading-relaxed">
                                            一些广东佛山本地的贸易商或大商，绕过区域代理，直接从佛山厂仓拉货放到网上卖。虽然裸砖价格便宜，但通常不包物流费（需自提）、不包上楼、不包退补货。
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-white whitespace-nowrap">¥79 - ¥128</td>
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-zinc-200 whitespace-nowrap">¥70 - ¥114 / ㎡</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-white font-semibold whitespace-nowrap">官方大促（315/618等）、抖音同城引流、老款/清仓爆款促销区</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-zinc-300 leading-relaxed">
                                            总部返利给地方经销商，或经销商自身为了在特定节点（如家装黄金周）快速回笼资金、冲销量而给出的合规促销价。
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-white whitespace-nowrap">¥35 - ¥45</td>
                                        <td className="py-3.5 px-4 lg:px-6 font-bold text-zinc-200 whitespace-nowrap">¥31 - ¥40 / ㎡</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-white font-semibold whitespace-nowrap">抖音仓储直销直播间、厂仓特价尾货库</td>
                                        <td className="py-3.5 px-4 lg:px-6 text-zinc-300 leading-relaxed">
                                            多为工程大宗采购剩下的尾数，或在出厂质量检测中未达到“优等品”标准。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        建立一套“高频溯源—物理拔除—高维压制—长效防御”的四步走处理机制（具体说明见方案第四部分）
                    </p>
                </div>
            </div>
        </div>
    );
}
