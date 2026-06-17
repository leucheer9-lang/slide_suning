import React from 'react';

export default function Page_BrandProducts() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[38px] font-black text-white tracking-widest">品牌主要产品线</h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-start gap-6 min-h-0">
                
                {/* Product Line 1: 面包及糕点系列 */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 shadow-lg flex gap-8 items-stretch hover:border-white/20 transition-all duration-300 min-h-0 flex-1">
                    {/* Left info */}
                    <div className="w-[34%] flex flex-col justify-between border-r border-white/10 pr-8 shrink-0">
                        <div>
                            <h2 className="text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-wider">面包及糕点系列</h2>
                            <p className="text-lg xl:text-xl text-zinc-300 leading-relaxed text-justify">
                                主营保质期在4~15天的“短保”面包糕点，强调新鲜、温和口感与极致性价比，通过密集的商超及便利店渠道占领大众餐桌。
                            </p>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm xl:text-base text-zinc-400 block mb-2 font-medium">2025年主营业务销售额</span>
                            <div className="text-5xl xl:text-6xl font-black text-[#004CE5] flex items-baseline gap-2">
                                53.24<span className="text-xl text-white font-bold">亿元</span>
                                <span className="text-base xl:text-lg text-zinc-300 font-semibold ml-2">(占比 97.72%)</span>
                            </div>
                            <span className="text-[13px] xl:text-sm text-zinc-500 block mt-2">※ 公司核心盈利支柱与最主要的去化大盘</span>
                        </div>
                    </div>
                    {/* Right items */}
                    <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-6 py-2 overflow-y-auto pr-1 justify-center content-center">
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                醇熟及切片面包系列
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                核心大单品，以极高的复购率和高频渠道周转渗透为主，是品牌稳定家庭餐桌消费的心智基础。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                调理面包系列
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                包含各种口味的豆沙圈、天然酵母面包等，主要针对学生、年轻白领等追求高效率代餐的高速节奏人群。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                老式面点系列
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                包括老式豆沙卷、传统手撕面包等经典大单品，主要依靠广泛铺货来覆盖下沉市场及大众家庭。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                中式糕点探索
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                拓展日常下午茶与中式传统点心消费场景，主要用于探索品牌年轻化与提振产品附加值。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Product Line 2: 节日及季节性食品 */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 shadow-lg flex gap-8 items-stretch hover:border-white/20 transition-all duration-300 min-h-0 flex-1">
                    {/* Left info */}
                    <div className="w-[34%] flex flex-col justify-between border-r border-white/10 pr-8 shrink-0">
                        <div>
                            <h2 className="text-3xl xl:text-4xl font-extrabold text-white mb-3 tracking-wider">节日及季节性食品</h2>
                            <p className="text-lg xl:text-xl text-zinc-300 leading-relaxed text-justify">
                                在端午节、中秋节等传统节日期间进行特定产品销售，配合大型商超等渠道，作为阶段性利润补充。
                            </p>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm xl:text-base text-zinc-400 block mb-2 font-medium">2025年主营业务销售额</span>
                            <div className="text-5xl xl:text-6xl font-black text-[#004CE5] flex items-baseline gap-2">
                                8626.24<span className="text-xl text-white font-bold">万元</span>
                                <span className="text-base xl:text-lg text-zinc-300 font-semibold ml-2">(占比 1.58%)</span>
                            </div>
                            <span className="text-[13px] xl:text-sm text-zinc-500 block mt-2">※ 淡季利润补充，销售受市场需求波动较大</span>
                        </div>
                    </div>
                    {/* Right items */}
                    <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-6 py-2 overflow-y-auto pr-1 justify-center content-center">
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                中秋月饼系列
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                以“蛋月烧月饼”为代表（将传统月饼与蛋糕工艺结合），在节日期间销售，覆盖KA等商超渠道。
                            </p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#004CE5] text-xl font-black">•</span>
                                端午粽子系列
                            </h3>
                            <p className="text-base xl:text-lg text-zinc-400 leading-relaxed text-justify">
                                针对端午佳节礼赠和家庭消费市场提供，辅助补充淡季利润并扩大消费场景。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: 主营业务备注 */}
                <div className="bg-zinc-950/60 border border-white/5 rounded-xl p-5 flex items-center gap-6 justify-start shrink-0 text-base xl:text-lg">
                    <span className="text-zinc-500 font-bold tracking-wider flex items-center gap-2 pr-4 border-r border-white/10 shrink-0">
                        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        主营业务备注：
                    </span>
                    <div className="flex gap-12 text-zinc-300">
                        <p>主要去化大盘：<strong className="text-white font-bold">面包及糕点系列（占主营比例 97.72%）</strong></p>
                        <p>主推探索方向：<strong className="text-white font-bold">全麦与零蔗糖系列（健康提质概念）</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
