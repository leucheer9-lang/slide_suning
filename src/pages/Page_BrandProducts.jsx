import React from 'react';

export default function Page_BrandProducts() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[38px] font-black text-white tracking-widest">主要业务线</h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-start gap-6 min-h-0">

                {/* Business Line 1: 一体化供应链 */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 shadow-lg flex gap-8 items-stretch hover:border-white/20 transition-all duration-300 min-h-0 flex-1">
                    {/* Left info */}
                    <div className="w-[34%] flex flex-col justify-between border-r border-white/10 pr-8 shrink-0">
                        <div>
                            <h2 className="text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-wider">一体化供应链</h2>
                            <p className="text-lg xl:text-xl text-zinc-300 leading-relaxed text-justify">
                                为客户托管从入库、库存分布、干线调拨到末端交付与退换货的全链路，按仓储、操作、运配分项计费，是长期合约型收入。
                            </p>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm xl:text-base text-zinc-400 block mb-2 font-medium">2025年收入（同比 +33.0%）</span>
                            <div className="text-5xl xl:text-6xl font-black text-[#004CE5] flex items-baseline gap-2">
                                1162<span className="text-xl text-white font-bold">亿元</span>
                                <span className="text-base xl:text-lg text-zinc-300 font-semibold ml-2">(占比 53.5%)</span>
                            </div>
                            <span className="text-[13px] xl:text-sm text-zinc-500 block mt-2">※ 公司主赛道，其中外部客户贡献359亿元</span>
                        </div>
                    </div>
                    {/* Right items */}
                    <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-6 py-2 overflow-y-auto pr-1 justify-center content-center">
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                全渠道“一盘货”仓配一体
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                线上线下库存合仓统一管理，同一批货支持多渠道发货，帮客户减少重复备货与调拨。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                行业定制供应链方案
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                针对快消、家电家居、3C、服装、汽车、生鲜医药等行业各自的货品与流转特点单独设计。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                送装一体与逆向复原
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                大家电、家具的配送与安装由同一支团队完成，退货商品可回收、检测并复原包装再次销售。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                即时配送（2025年并入）
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                2025年起自建全职骑手运力并收购本地即时配送业务，补齐“最后一公里”的分钟级履约能力。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Business Line 2: 快递快运等其他物流服务 */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 shadow-lg flex gap-8 items-stretch hover:border-white/20 transition-all duration-300 min-h-0 flex-1">
                    {/* Left info */}
                    <div className="w-[34%] flex flex-col justify-between border-r border-white/10 pr-8 shrink-0">
                        <div>
                            <h2 className="text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-wider">快递快运等其他服务</h2>
                            <p className="text-lg xl:text-xl text-zinc-300 leading-relaxed text-justify">
                                面向未使用仓储服务的客户，按票、按重量计费的标准化寄递业务，也是品牌被大众直接感知的窗口。
                            </p>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm xl:text-base text-zinc-400 block mb-2 font-medium">2025年收入（同比 +5.7%）</span>
                            <div className="text-5xl xl:text-6xl font-black text-[#004CE5] flex items-baseline gap-2">
                                1009<span className="text-xl text-white font-bold">亿元</span>
                                <span className="text-base xl:text-lg text-zinc-300 font-semibold ml-2">(占比 46.5%)</span>
                            </div>
                            <span className="text-[13px] xl:text-sm text-zinc-500 block mt-2">※ 增长主要来自快递、快运业务量提升</span>
                        </div>
                    </div>
                    {/* Right items */}
                    <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-6 py-2 overflow-y-auto pr-1 justify-center content-center">
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                京东快递
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                自营直送、坚持送货上门，走“快时效、高品质”路线，快递服务满意度稳居行业第一梯队。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                快运（德邦 + 跨越速运）
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                承接零担与大件重货运输，两个品牌合计规模位居全国前列，覆盖不同价位与时效的细分需求。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                冷链与医药物流
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                运营60+个温控冷链仓与50+个药品医疗器械专用仓，生鲜与医药品类的全程温控履约。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                跨境与海外仓
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                海外仓已覆盖25个国家和地区，并在沙特、英法德荷等地推出自营快递品牌JoyExpress。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: 收入结构备注 */}
                <div className="bg-zinc-950/60 border border-white/5 rounded-xl p-5 flex items-center gap-6 justify-start shrink-0 text-base xl:text-lg">
                    <span className="text-zinc-500 font-bold tracking-wider flex items-center gap-2 pr-4 border-r border-white/10 shrink-0">
                        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        收入结构备注：
                    </span>
                    <div className="flex gap-12 text-zinc-300">
                        <p>2025年总收入：<strong className="text-white font-bold">2171亿元（同比 +18.8%）</strong></p>
                        <p>外部客户收入：<strong className="text-white font-bold">1368亿元（占比 63%）</strong></p>
                        <p>增长最快方向：<strong className="text-white font-bold">一体化供应链与海外业务</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
