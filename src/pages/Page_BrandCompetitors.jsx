import React from 'react';

export default function Page_BrandCompetitors() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">行业核心竞品对比分析</h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col justify-start min-h-0">

                {/* Table Container */}
                <div className="w-full flex flex-col border border-white/10 rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-md shadow-2xl relative flex-1 min-h-0">

                    {/* Header Row */}
                    <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] bg-black/60 border-b border-white/10 shrink-0 text-center font-bold">
                        <div className="py-3 px-2 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest text-sm lg:text-base xl:text-lg">比较维度</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10 bg-[#004CE5]/10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]"></div>
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-extrabold">桃李面包</span>
                            <span className="text-[#004CE5] text-xs font-bold tracking-widest mt-0.5">TOLY BREAD</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">达利美焙辰</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">MEIBEICHEN</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">宾堡/曼可顿/嘉顿</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">MULTINATIONALS</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">便利店自营 (罗森/711/全家)</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">CVS PRIVATE BRAND</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">山姆/盒马自有品牌</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">RETAIL PB</span>
                        </div>
                    </div>

                    {/* Body Rows Container */}
                    <div className="flex-1 overflow-y-auto divide-y divide-white/5 text-base lg:text-[17px] xl:text-[18px] leading-relaxed">

                        {/* Row 1: 品牌背景 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                品牌背景与地位
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                <p className="text-zinc-300">● 24个中央工厂，占短保市场约35%份额，定位于全国性龙头。</p>
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                <p className="text-zinc-400">● 达利旗下短保品牌，资金实力雄厚，渠道下沉极深。</p>
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                <p className="text-zinc-400">● 跨国巨头，曼可顿深耕华东/华北，嘉顿占据华南。</p>
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                <p className="text-zinc-400">● 便利店自营短保，依托庞大终端网点及高频客流迅速崛起。</p>
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                <p className="text-zinc-400">● 仓储新零售巨头自营，整合全球大宗供应链，占比上升。</p>
                            </div>
                        </div>

                        {/* Row 2: 经营特征 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                财务及经营特征
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                ● 2025年营收54.48亿，净利润2.84亿，折旧增加导致利润波动。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 共享达利集团物流配送红利，地推渗透力强，资金周转快。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 占据一二线中高端渠道，高溢价与中高毛利，稳健运行。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 扣点费用极低，独占终端主场高转化，毛利空间大。
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                ● 零营销推广费用，依靠量贩大规格高周转，整体成本极低。
                            </div>
                        </div>

                        {/* Row 3: 产品与研发 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                产品与研发
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                ● 研发费用2625万，主打经典大众面包，正开发健康低糖系列。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 新品开发与推广敏捷，主打“汤熟”、“纯豆浆”等细分新工艺。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 西式配方成熟度极高，品控标准与全球采购供应链领先。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 灵活代工(OEM)模式，新品迭代极快，口味包装贴合白领。
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                ● 打造麻薯、瑞士卷等现象级爆款，性价比高，去化速度快。
                            </div>
                        </div>

                        {/* Row 4: 渠道特征 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                渠道特征
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                ● 高度依赖大型KA商超，正发力下沉散店与线上渠道。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 依托达利地推铁军，饱和式渗透散店及传统夫妻老婆店。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 牢牢占据一二线核心商圈大型商超，及罗森、全家等高端便利。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                ● 占据门店收银黄金货架陈列，冷链一日一配，渠道链路闭环。
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                ● 闭环的付费会员店现场烘焙展示，结合自有APP闪送极速到家。
                            </div>
                        </div>

                        {/* Row 5: 品牌定调 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                品牌定调
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200 font-medium">
                                “大众化、高性价比的全国性经典短保面包”
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 font-medium">
                                “多样、新颖、高性价比的日常烘焙代餐”
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 font-medium">
                                “主打西式、品质与一二线都市商超的代表”
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 font-medium">
                                “年轻、便携、贴合白领快节奏的高效早餐”
                            </div>
                            <div className="py-3 px-4 text-zinc-300 font-medium">
                                “中产阶层、家庭化、极致量贩性价比的储备烘焙”
                            </div>
                        </div>

                        {/* Row 6: 相对态势 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                相对竞争态势
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/10 text-zinc-200 border-b-2 border-b-[#004CE5] font-semibold flex items-center">
                                ● 大盘防守者：基本盘巨大，正稳固防线并积极进行策略调整。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                ● 强力抢食者：依托庞大成熟网络，侵蚀北方和南方重合市场。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                ● 稳健防御者：牢守外资商超与连锁便利传统领地，防线稳固。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                ● 终端截流者：直接在离年轻客群最近的零售终端进行拦截和替代。
                            </div>
                            <div className="py-3 px-4 text-zinc-300 flex items-center">
                                ● 跨界竞争者：通过大容量极致性价比，分流家庭采购性早餐。
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Note */}
                <div className="w-full flex justify-end mt-2 px-0 shrink-0">
                    <div className="text-zinc-500 text-[11px] lg:text-[12px] xl:text-[13px] text-right space-y-0.5 leading-tight">
                        <p>数据来源：公开披露财报（2025/2026Q1）、行业公开统计研报、GEO消费心智数据库</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
