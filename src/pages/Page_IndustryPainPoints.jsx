import React from 'react';

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">短保烘焙行业GEO难点解析</h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-start min-h-0">
                <p className="text-zinc-400 text-base lg:text-lg leading-relaxed tracking-wide mb-6 shrink-0">
                    结合包装短保烘焙快消行业的客观规律与桃李面包当前的现实，总结出其在<strong className="text-white font-bold">智能搜索引擎 (GEO) 中面临的核心痛点与难点：</strong>
                </p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">

                    {/* Card 01 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300">
                        <div className="text-[90px] xl:text-[120px] font-extrabold text-white/5 absolute -top-4 right-6 pointer-events-none select-none leading-none">01</div>
                        <div className="w-10 h-1 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.5)] mb-4"></div>
                        <div className="z-10">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                消费决策极短与搜索意图高度泛化
                            </h3>
                            <p className="text-zinc-400 text-sm lg:text-base xl:text-[17px] leading-relaxed text-justify">
                                烘焙快消品多为即兴、冲动消费或日常复购。消费者绝少主动检索具体产品SKU，流量高度集中在“快手早餐”、“健康代餐”等高度泛化的场景词，导致常规产品词面临搜索量匮乏的困境。
                            </p>
                        </div>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300">
                        <div className="text-[90px] xl:text-[120px] font-extrabold text-white/5 absolute -top-4 right-6 pointer-events-none select-none leading-none">02</div>
                        <div className="w-10 h-1 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.5)] mb-4"></div>
                        <div className="z-10">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                供应链物理半径限制与全域流量倒挂
                            </h3>
                            <p className="text-zinc-400 text-sm lg:text-base xl:text-[17px] leading-relaxed text-justify">
                                3~7天极短保质期决定了生产与短途冷链物流半径局限在300-500公里。若GEO策略采用全域推荐，极易将无货供应地区用户引流到推荐结果中，导致“买不到、不匹配”的严重流量倒挂。
                            </p>
                        </div>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300">
                        <div className="text-[90px] xl:text-[120px] font-extrabold text-white/5 absolute -bottom-4 right-6 pointer-events-none select-none leading-none">03</div>
                        <div className="z-10 mb-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                “0防腐”食安双刃剑与AI系统性放大
                            </h3>
                            <p className="text-zinc-400 text-sm lg:text-base xl:text-[17px] leading-relaxed text-justify">
                                主打新鲜、无添加防腐剂是核心卖点，但终端温差极易引起偶发霉变。在AI时代，搜索引擎无差别抓取网络碎片霉变客诉与负面情绪图片，极易被大模型聚合泛化判定为品牌系统性质量缺陷。
                            </p>
                        </div>
                        <div className="w-10 h-1 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.5)]"></div>
                    </div>

                    {/* Card 04 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300">
                        <div className="text-[90px] xl:text-[120px] font-extrabold text-white/5 absolute -bottom-4 right-6 pointer-events-none select-none leading-none">04</div>
                        <div className="z-10 mb-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                                渠道极端碎片化与时间折价致价格混乱
                            </h3>
                            <p className="text-zinc-400 text-sm lg:text-base xl:text-[17px] leading-relaxed text-justify">
                                短保产品在便利店、生鲜平台、零食量贩及超市临期出清区的销售价格差异可达数倍。AI爬虫抓取缺乏时间与渠道维度，常误把临期出清低价当标准价，导致消费者心理落差与乱加价误判。
                            </p>
                        </div>
                        <div className="w-10 h-1 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.5)]"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
