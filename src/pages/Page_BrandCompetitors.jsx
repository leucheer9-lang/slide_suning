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
                                <p className="font-semibold text-white">全国化布局领先</p>
                                <p className="text-zinc-400 mt-1">全国部署24个大型中央工厂，占短保市场约35%份额，为国内最大规模的短保面包企业。</p>
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                <p className="font-semibold text-white">强势新秀品牌</p>
                                <p className="text-zinc-400 mt-1">达利食品于2018年推出的短保子品牌，资金与渠道实力雄厚，国内渠道下沉极深。</p>
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                <p className="font-semibold text-white">区域跨国巨头</p>
                                <p className="text-zinc-400 mt-1">跨国烘焙巨头，研发实力雄厚。曼可顿深耕华东与华北，嘉顿独占华南，区域壁垒稳固。</p>
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                <p className="font-semibold text-white">便利零售自有品牌</p>
                                <p className="text-zinc-400 mt-1">罗森、7-11、全家等自营短保面包，依托庞大终端网络与自有高频客流快速崛起。</p>
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                <p className="font-semibold text-white">会员新零售自有品牌</p>
                                <p className="text-zinc-400 mt-1">山姆会员店、盒马鲜生等仓储新零售巨头，凭借私域流量和整合供应链迅速扩展占有率。</p>
                            </div>
                        </div>

                        {/* Row 2: 经营特征 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                财务及经营特征
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                2025年营收54.48亿元，净利润2.84亿元。产能扩张导致固定资产折旧增加，对利润水平产生阶段性波动影响。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                依托达利集团全国化的庞大成熟分销网络与地推资源，在国内高频进行地推渗透，资金周转良好。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                维持相对稳定的一二线中高端商超及品牌便利店市场，主打高溢价与中高毛利，经营表现稳健。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                毛利空间和运营效益极佳。凭借终端主场优势截留高频客流，免去传统厂商品牌的渠道铺货扣点。
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                整合大宗全球供应链，依靠会员店大规格包装高周转去化，零营销费用投入，产品毛利可控。
                            </div>
                        </div>

                        {/* Row 3: 产品与研发 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                产品与研发
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                2025年研发费用为2625万元，产品线以醇熟切片、老式面包等成熟经典品类为主，目前正积极进行健康轻食系列开发。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                产品开发及市场反馈敏捷度极高，推出汤熟、纯豆浆等多项细分工艺产品，实现差异化竞争。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                西式配方高度成熟，拥有国际化研发经验支持，在原料品质标准与跨国采购供应链方面具备优势。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                采用成熟的代工厂（OEM）模式生产，主打新潮口味与精美单片包装，贴合年轻白领群体的日常代餐偏好。
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                突出极具杀伤力的量贩装性价比，以麻薯、瑞士卷等爆款单品切入，产品迭代和淘汰速度极快。
                            </div>
                        </div>

                        {/* Row 4: 渠道特征 */}
                        <div className="grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-3 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                渠道特征
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200">
                                核心渠道为大型商超和卖场，便利店及散店覆盖深度正逐步优化，并积极探索线上直播带货。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                依托母公司达利集团的分销和地推实力，对社区便利店及杂货散店进行高密度铺货。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                牢牢占据一二线核心商圈的大型主流商超，以及罗森、7-11等高端品牌连锁便利店渠道。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300">
                                独占自有便利店系统的黄金陈列区及收银台货架，实现极高周转的冷链一日一配，渠道流通完全闭环。
                            </div>
                            <div className="py-3 px-4 text-zinc-300">
                                闭环式付费会员制私域渠道，依托线下仓储门店烘焙区展示，结合线上APP即时配送送货上门。
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
                                大盘防守者：核心基本盘最大，但面临产能折旧与渠道变革压力，正在进行防线巩固与策略调整。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                凶悍抢食者：依托庞大的渠道网络和地推优势，不断侵蚀传统品牌的北方和南方重合市场。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                稳健守成者：深固外资大型商超与高端连锁便利店的传统领地，业务表现稳固。
                            </div>
                            <div className="py-3 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                终端截流者：直接在距离年轻消费者最近的便利零售终端，完成对传统工业短保品牌的拦截和替代。
                            </div>
                            <div className="py-3 px-4 text-zinc-300 flex items-center">
                                跨界竞争者：通过极致性价比和大容量包装，分流大量都市中产家庭及周末采购性早餐份额。
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
