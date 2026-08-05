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
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-extrabold">京东物流</span>
                            <span className="text-[#004CE5] text-xs font-bold tracking-widest mt-0.5">JD LOGISTICS</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">顺丰控股</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">SF EXPRESS</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">菜鸟</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">CAINIAO</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">通达系与极兔</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">FRANCHISE EXPRESS</span>
                        </div>
                        <div className="py-3 px-2 flex flex-col items-center justify-center">
                            <span className="text-white text-base lg:text-lg xl:text-[20px] tracking-wider font-bold">制造业系物流</span>
                            <span className="text-zinc-500 text-xs font-bold tracking-widest mt-0.5">MANUFACTURER 3PL</span>
                        </div>
                    </div>

                    {/* Body Rows Container */}
                    <div className="flex-1 flex flex-col divide-y divide-white/5 text-base lg:text-[17px] xl:text-[18px] leading-relaxed min-h-0">

                        {/* Row 1: 品牌背景 */}
                        <div className="flex-1 grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-2 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                品牌背景与地位
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200 flex flex-col justify-center">
                                <p className="font-semibold text-white">电商自建物流独立而来</p>
                                <p className="text-zinc-400 mt-1">● 2007年起自建仓配，2017年独立开放，2021年港股上市，自营仓储规模国内领先。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex flex-col justify-center">
                                <p className="font-semibold text-white">综合物流龙头</p>
                                <p className="text-zinc-400 mt-1">● 1993年创立，自称亚洲最大、全球第四大综合物流服务商，时效快递长期领先。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex flex-col justify-center">
                                <p className="font-semibold text-white">平台型物流网络</p>
                                <p className="text-zinc-400 mt-1">● 阿里旗下，2013年成立，以搭平台、整合社会运力为主，跨境处于全球第一梯队。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex flex-col justify-center">
                                <p className="font-semibold text-white">加盟制电商快递</p>
                                <p className="text-zinc-400 mt-1">● 中通、圆通、韵达、申通与极兔靠加盟网络承接电商包裹，中通业务量连续十年第一。</p>
                            </div>
                            <div className="py-2 px-4 text-zinc-300 flex flex-col justify-center">
                                <p className="font-semibold text-white">产业背景第三方物流</p>
                                <p className="text-zinc-400 mt-1">● 日日顺（海尔系）、安得智联（美的系）由制造企业内部物流转型对外服务。</p>
                            </div>
                        </div>

                        {/* Row 2: 财务及经营特征 */}
                        <div className="flex-1 grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-2 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                财务及经营特征
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200 flex items-center">
                                <p>● 2025年收入2171亿（+18.8%），归母净利66.5亿，经调整净利77.1亿，毛利率9.1%。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 2025年收入3082亿（+8.4%），归母净利111.2亿，毛利率13.3%，规模与盈利均更厚。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 2025财年收入1013亿（+2%），经调整EBITA仅3.0亿，2026财年起不再单独披露。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 中通2025年收入491亿（+10.9%），业务量385.2亿件，调整后净利95.1亿（-6.3%）。</p>
                            </div>
                            <div className="py-2 px-4 text-zinc-300 flex items-center">
                                <p>● 安得智联2025年收入214.5亿、净利4.5亿；日日顺列合同物流百强第5。</p>
                            </div>
                        </div>

                        {/* Row 3: 网络与能力 */}
                        <div className="flex-1 grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-2 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                网络与能力
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200 flex items-center">
                                <p>● 1600+自营仓与2000+云仓、3400万㎡，54万自有配送人员，仓配一体是核心壁垒。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 自有航空机队与鄂州枢纽支撑高时效，国际业务覆盖95个国家和地区。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 轻资产为主，靠平台调度与技术输出，海外自建本地快递与机器人仓。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 转运中心自营、末端加盟，网点密度极高、单票成本极低，服务由加盟商决定。</p>
                            </div>
                            <div className="py-2 px-4 text-zinc-300 flex items-center">
                                <p>● 长于生产物流、统仓统配与送装一体，仓网围绕制造基地和家电渠道布局。</p>
                            </div>
                        </div>

                        {/* Row 4: 客户与业务结构 */}
                        <div className="flex-1 grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-2 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                客户与业务结构
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200 flex items-center">
                                <p>● 一体化供应链占53.5%、外部客户占63%，B端合约与C端寄递并重。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 235万企业客户、8亿个人用户，时效件、快运、冷运、同城、国际多线并行。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 主要服务淘天与跨境商家，国内物流职能部分回归电商侧，重心转向跨境。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 高度依赖电商平台件，客户是商家与平台，近年个人散件占比在快速提升。</p>
                            </div>
                            <div className="py-2 px-4 text-zinc-300 flex items-center">
                                <p>● 关联方占比仍高（安得智联来自美的的收入占39.6%），正加速拓展第三方客户。</p>
                            </div>
                        </div>

                        {/* Row 5: 品牌定调 */}
                        <div className="flex-1 grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-2 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                品牌定调
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 bg-[#004CE5]/5 text-zinc-200 font-medium flex items-center">
                                <p>“自营仓配一体、送货上门的一体化供应链服务商”</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 font-medium flex items-center">
                                <p>“时效最稳、覆盖最全的综合物流服务商”</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 font-medium flex items-center">
                                <p>“整合社会运力的全球化智慧物流平台”</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 font-medium flex items-center">
                                <p>“性价比优先、规模驱动的电商包裹网络”</p>
                            </div>
                            <div className="py-2 px-4 text-zinc-300 font-medium flex items-center">
                                <p>“懂产业、能做生产物流与送装一体的行业专家”</p>
                            </div>
                        </div>

                        {/* Row 6: 竞争态势 */}
                        <div className="flex-1 grid grid-cols-[130px_1.2fr_1fr_1fr_1.1fr_1fr] group hover:bg-white/[0.01] transition-colors">
                            <div className="py-2 px-3 flex items-center justify-center border-r border-white/5 bg-black/40 text-center font-bold text-zinc-300">
                                竞争态势
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 bg-[#004CE5]/10 text-zinc-200 border-b-2 border-b-[#004CE5] font-semibold flex items-center">
                                <p>● 主场卫冕者：仓配一体壁垒稳固，需同时把外部客户占比与利润率做上去。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 全面对位者：在时效、快运、冷链、国际多个赛道正面交锋，大众认知更强。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 侧翼牵制者：以平台调度与跨境能力争夺商家的履约入口。</p>
                            </div>
                            <div className="py-2 px-4 border-r border-white/5 text-zinc-300 flex items-center">
                                <p>● 价格分流者：用极低单价持续分流对时效不敏感的电商包裹。</p>
                            </div>
                            <div className="py-2 px-4 text-zinc-300 flex items-center">
                                <p>● 垂直蚕食者：在家电、家居等特定行业以产业理解争抢一体化供应链订单。</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Note */}
                <div className="w-full flex justify-end mt-2 px-0 shrink-0">
                    <div className="text-zinc-500 text-[11px] lg:text-[12px] xl:text-[13px] text-right space-y-0.5 leading-tight">
                        <p>数据来源：各公司2025年年报及业绩公告、阿里巴巴集团财报、安得智联港交所招股书、中国合同物流百强榜、国家邮政局2025年行业运行数据</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
