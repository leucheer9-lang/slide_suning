import React from 'react';

export default function Page_BrandInfo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest">品牌基础信息</h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-10 relative z-10 flex flex-col justify-start gap-6 min-h-0">

                {/* 核心数据 Metrics (4 Columns) */}
                <div className="grid grid-cols-4 gap-6 w-full shrink-0">
                    {[
                        { label: '独立运营', value: '2017年' },
                        { label: '自营仓库', value: '1600+个' },
                        { label: '2025年总收入', value: '2171亿' },
                        { label: '员工总数', value: '68.3万人' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-zinc-900/60 border border-white/10 rounded-xl py-7 flex flex-col items-center justify-center shadow-lg hover:border-white/20 transition-all duration-300">
                            <span className="text-zinc-400 text-base xl:text-lg tracking-widest mb-2 font-medium">{item.label}</span>
                            <span className="text-5xl xl:text-6xl font-black text-white tracking-tight">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* 基础信息 & 核心定位 (2 Columns) */}
                <div className="grid grid-cols-2 gap-6 w-full min-h-0 flex-1">
                    {/* 基础信息 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 xl:p-10 shadow-lg relative flex flex-col justify-start hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            品牌基础简介
                        </h3>
                        <p className="text-zinc-300 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed text-justify tracking-wide">
                            京东物流是京东集团旗下的供应链解决方案及物流服务商。2007年起自建仓配体系，2017年独立运营并对外开放，2021年在港交所上市（2618.HK），运营仓储、运输、末端配送、大件、冷链与跨境六大网络。
                        </p>
                    </div>

                    {/* 核心定位 */}
                    <div className="bg-zinc-900/60 border border-white/10 border-l-[4px] border-l-[#004CE5] rounded-xl p-8 xl:p-10 shadow-lg relative flex flex-col justify-start hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            品牌核心定位
                        </h3>
                        <div className="text-zinc-300 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed text-justify tracking-wide flex flex-col gap-4">
                            <strong className="text-white text-xl lg:text-[22px] xl:text-[24px] border-l-4 border-[#004CE5] pl-3.5">
                                “以一体化供应链为核心赛道的技术驱动型物流服务商。”
                            </strong>
                            不同于以“收件—中转—派件”为主的网络型快递公司，京东物流把货提前放进离消费者最近的仓库，并为客户托管从入库、库存分布到末端交付与退换货的全链路。
                        </div>
                    </div>
                </div>

                {/* 目标客群 (Full Width wrapping two columns) */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 xl:p-10 shadow-lg w-full flex flex-col shrink-0">
                    <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-6 flex items-center gap-2">
                        <svg className="w-7 h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        目标客群
                    </h3>

                    <div className="grid grid-cols-2 gap-12">
                        {/* Column 1 */}
                        <div className="border-l border-white/20 pl-6 flex flex-col justify-start">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-wider">
                                第一类：需要供应链托管的企业客户（B端）
                            </h4>
                            <p className="text-base lg:text-[19px] xl:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                覆盖快消、家电家居、3C、服装、汽车、生鲜医药等行业的品牌方与制造企业，2025年达9.1万家，核心诉求是降库存、降成本、保交付。
                            </p>
                        </div>
                        {/* Column 2 */}
                        <div className="border-l border-white/20 pl-6 flex flex-col justify-start">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-wider">
                                第二类：寄递与到家服务的个人及中小商家（C端）
                            </h4>
                            <p className="text-base lg:text-[19px] xl:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                通过京东快递、大件送装、冷链寄递与即时配送触达，关心时效准不准、上不上门、丢损能不能赔。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
