import React from 'react';

export default function Page_BrandProducts() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-3 lg:pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">品牌主要产品线</h1>
            </div>

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 lg:px-8 pb-6 relative z-10 flex flex-col justify-start gap-4 lg:gap-5 min-h-0 -translate-y-[10px]">

                {/* 瓷砖系列 */}
                <div className="bg-[#111] border border-white/10 rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#004CE5]"></div>
                    {/* Left Col */}
                    <div className="w-full lg:w-[28%] p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-widest">瓷砖系列</h2>
                            <p className="text-zinc-400 text-[1rem] lg:text-[1.05rem] leading-relaxed text-justify mb-4">
                                瓷砖品类覆盖木纹、石纹、大理石及素色轻奢等日常规格，满足大众刚需与改善型住房需求。
                            </p>
                        </div>
                        {/* 销售数据看板 */}
                        <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 text-left">
                            <span className="text-[14px] text-zinc-400 font-bold tracking-wider">2022年集团销售额 (新明珠整体)</span>
                            <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-5xl lg:text-6xl font-black text-[#004CE5] tracking-tight">53.92</span>
                                <span className="text-lg text-zinc-300 font-bold">亿元</span>
                            </div>
                            <span className="text-base text-blue-400 font-bold mt-0.5">(占比 73.14%)</span>
                            <span className="text-[12px] text-zinc-500 italic mt-0.5">※ 母公司整体数据，非冠珠单品牌</span>
                        </div>
                    </div>
                    {/* Right Col */}
                    <div className="w-full lg:w-[72%] p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-5">
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>悦木系列（木纹砖）</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">
                                2023 年主推木纹新品，官网称其为“设计师偏爱款”。采用喷墨、精雕、微模具工艺还原木理。主力规格 1200×200mm 胡桃木系列（梨黄、栗咖、驼棕等花色），并延伸鱼骨纹等规格，支持人字铺、二八铺、对角铺、编织铺等创意铺贴，主打原木风、自然舒适的空间调性。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>微光石系列（素色柔光）</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">
                                冠珠近年重点推广的素色砖线，覆盖 1800×900、1500×750、1200×600、800×800mm 多规格。采用亚光釉料与超平细腻釉，光泽约 10° 微光，配合低饱和度轻纹设计，兼顾护眼柔光、细腻触感与防污性能，适配奶油风、现代极简、侘寂等需要“有质感但不刺眼”的场景。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>真石系列（大理石瓷砖）</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">
                                以全通体纹理技术实现“表里如一”，复刻天然石材的明亮、平光、素哑等多类光泽。常见 800×800mm 等规格，适用于客厅、玄关等需要石材质感、又要求易打理的空间。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>石纹系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">
                                官网独立分类，以天然石材肌理为灵感，在常规墙地砖规格上提供深浅灰、云石纹等花色，与木纹、大理石形成纹理补充。
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>清新系列 / 轻奢系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">
                                官网导航两大素色方向：清新系列偏简约明亮、轻负担配色；轻奢系列强调低饱和质感与隐奢调性，适合全屋通铺与开放式客餐厅。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 岩板系列 */}
                <div className="bg-[#111] border border-white/10 rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                    {/* Left Col */}
                    <div className="w-full lg:w-[28%] p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-widest">岩板系列</h2>
                            <p className="text-zinc-400 text-[1rem] lg:text-[1.05rem] leading-relaxed text-justify mb-4">
                                主打高端设计与材质跨界，实现家居空间的深度定制与高定质感落地。
                            </p>
                        </div>
                        {/* 销售数据看板 */}
                        <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 text-left">
                            <span className="text-[14px] text-zinc-400 font-bold tracking-wider">2022年集团销售额 (新明珠整体)</span>
                            <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-5xl lg:text-6xl font-black text-blue-500 tracking-tight">19.69</span>
                                <span className="text-lg text-zinc-300 font-bold">亿元</span>
                            </div>
                            <span className="text-base text-blue-400 font-bold mt-0.5">(占比 26.71%)</span>
                            <span className="text-[12px] text-zinc-500 italic mt-0.5">※ 母公司整体数据，非冠珠单品牌</span>
                        </div>
                    </div>
                    {/* Right Col */}
                    <div className="w-full lg:w-[72%] p-6 lg:p-8 flex items-center justify-center bg-black/20">
                        <p className="text-zinc-300 text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-justify tracking-wider">
                            岩板品类主打<strong className="text-white text-[1.25rem] lg:text-[1.35rem] font-bold">“大规格、国潮 IP、全屋应用”</strong>，尺寸覆盖 <strong className="text-zinc-100">1800×1200、2600×800</strong> 等，可上墙铺地，并延伸至<strong className="text-zinc-100">背景墙、岛台、护墙板</strong>等场景。
                        </p>
                    </div>
                </div>

                {/* 备注：主营业务 */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 justify-center mt-1 px-8">
                    <span className="text-zinc-400 font-bold tracking-widest text-[1.15rem] lg:text-[1.2rem] flex items-center gap-2">
                        <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        主营业务备注：
                    </span>
                    <div className="flex flex-col sm:flex-row gap-6 lg:gap-12">
                        <p className="text-zinc-300 text-[1.1rem] lg:text-[1.15rem]">主要盈利产品大类：<strong className="text-white tracking-wide">陶瓷砖</strong> <span className="text-zinc-500 text-[1rem]">(以大理石瓷砖/微光石为主)</span></p>
                        <p className="text-zinc-300 text-[1.1rem] lg:text-[1.15rem]">主推高端产品大类：<strong className="text-white tracking-wide">柔光素色砖 / 国潮高定岩板</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
