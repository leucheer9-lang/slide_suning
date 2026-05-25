import React from 'react';

export default function Page_BrandCompetitors() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className="w-full flex-col items-center justify-center text-center pt-3 lg:pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">核心竞品对比分析</h1>
            </div>

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 lg:px-8 pb-4 relative z-10 flex flex-col justify-start min-h-0 -translate-y-[6px]">

                {/* Table Container */}
                <div className="w-full flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#111]/80 shadow-2xl relative">

                    {/* Header Row */}
                    <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] bg-black/60 border-b border-white/10 shrink-0">
                        <div className="p-2 lg:p-3 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest">比较维度</span>
                        </div>
                        <div className="p-2 lg:p-3 flex flex-col items-center justify-center border-r border-white/10 bg-[#004CE5]/10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]"></div>
                            <span className="font-bold text-white text-lg tracking-wider">冠珠</span>
                            <span className="text-[#004CE5] text-xs uppercase tracking-widest mt-1 font-bold">GUANZHU</span>
                        </div>
                        <div className="p-2 lg:p-3 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="font-bold text-white text-lg tracking-wider">马可波罗</span>
                            <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Marco Polo</span>
                        </div>
                        <div className="p-2 lg:p-3 flex flex-col items-center justify-center border-r border-white/10">
                            <span className="font-bold text-white text-lg tracking-wider">东鹏控股</span>
                            <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Dongpeng</span>
                        </div>
                        <div className="p-2 lg:p-3 flex flex-col items-center justify-center">
                            <span className="font-bold text-white text-lg tracking-wider">蒙娜丽莎</span>
                            <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Monalisa</span>
                        </div>
                    </div>

                    {/* Body Rows */}
                    <div className="flex flex-col">

                        {/* Row 1: 财务 */}
                        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                            <div className="p-2.5 lg:p-3 flex items-center justify-center border-r border-white/5 bg-black/40">
                                <span className="font-bold text-zinc-300 text-center text-sm lg:text-[0.95rem]">2025年<br />财务表现</span>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 bg-[#004CE5]/5 flex flex-col justify-center">
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem] leading-relaxed">具体财报未公开。</p>
                                <p className="text-zinc-500 text-[0.85rem] lg:text-[0.9rem] mt-2">注：母公司新明珠集团总产能居行业前二，底盘稳固。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center gap-1">
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem]">营收：64.58亿 <span className="text-red-400">(降11.83%)</span></p>
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem]">净利：12.10亿 <span className="text-red-400">(降8.80%)</span></p>
                                <p className="text-orange-400/80 text-[0.85rem] lg:text-[0.9rem] mt-1 font-bold">现金流极好(21亿)，建陶利润王</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center gap-1">
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem]">营收：60.62亿 <span className="text-red-400">(降6.30%)</span></p>
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem]">净利：3.52亿 <span className="text-emerald-400">(增7.15%)</span></p>
                                <p className="text-emerald-400/80 text-[0.85rem] lg:text-[0.9rem] mt-1 font-bold">行业唯一利润逆势增长巨头</p>
                            </div>
                            <div className="p-2.5 lg:p-3 flex flex-col justify-center gap-1">
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem]">营收：39.23亿 <span className="text-red-400">(降15.28%)</span></p>
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem]">净利：0.52亿 <span className="text-red-400">(降58.05%)</span></p>
                                <p className="text-red-400/80 text-[0.85rem] lg:text-[0.9rem] mt-1 font-bold">受房地产下行拖累最严重</p>
                            </div>
                        </div>

                        {/* Row 2: 渠道 */}
                        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                            <div className="p-2.5 lg:p-3 flex items-center justify-center border-r border-white/5 bg-black/40">
                                <span className="font-bold text-zinc-300 text-center text-sm lg:text-[0.95rem]">渠道特征</span>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 bg-[#004CE5]/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">重 To C 与设计师/整装渠道</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed">C 端（零售/家装）占比约 73%（经销为主），B 端（工程）约 27%。3000+ 经销商、6000+ 终端，极度依赖线下看样与设计师圈层推荐。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">B端C端双线霸主</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed">线下门店超4000家，下沉县级市场极深；早期工程端(B端)基建打得非常牢固。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">强 To C 大零售</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed">零售、整装渠道是其核心。2025年C端大零售渠道收入逆势增长3.98%。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">B端艰难向C端转型</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed">过去高度绑定百强房企战略集采(强B端)。现因地产暴雷正加速建立C端经销网络体系。</p>
                            </div>
                        </div>

                        {/* Row 3: 瓷砖 */}
                        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                            <div className="p-2.5 lg:p-3 flex items-center justify-center border-r border-white/5 bg-black/40">
                                <span className="font-bold text-zinc-300 text-center text-sm lg:text-[0.95rem]">瓷砖产品线</span>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 bg-[#004CE5]/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打国风审美与柔光护眼</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>微光石/柔光砖（香云纱釉面）</li>
                                    <li>悦木木纹砖（设计师款）</li>
                                    <li>新中式/现代简约全品类墙地砖</li>
                                </ul>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打经典耐用与文化</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>有釉砖是绝对主力（贡97%营收）</li>
                                    <li>仿古砖（起家王牌）</li>
                                    <li>中国印象文化砖</li>
                                </ul>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打功能性与标准化</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>防滑/抗菌功能性瓷砖</li>
                                    <li>经典原石系列瓷砖</li>
                                    <li>5A级高标砖</li>
                                </ul>
                            </div>
                            <div className="p-2.5 lg:p-3 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打釉面质感与高端</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>罗马超石代系列</li>
                                    <li>经典大理石瓷砖</li>
                                    <li>高密度防滑耐磨砖</li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 4: 岩板 */}
                        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                            <div className="p-2.5 lg:p-3 flex items-center justify-center border-r border-white/5 bg-black/40">
                                <span className="font-bold text-zinc-300 text-center text-sm lg:text-[0.95rem]">岩板产品线</span>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 bg-[#004CE5]/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打国潮大板与通体复刻</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>华珍/华脉国潮岩板（&lt;0.5mm 密缝）</li>
                                    <li>魔术师系列（MAGIC·STAR 通体）</li>
                                    <li>华韵高端岩板（3200×1600mm）</li>
                                </ul>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打工艺突破</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>曲面岩板（可弯曲）</li>
                                    <li>3mm 超薄智能抛光亮面岩板</li>
                                </ul>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打空间全案(1+N)</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>尊石岩板</li>
                                    <li>打通全屋交付生态(卫浴/家居)</li>
                                </ul>
                            </div>
                            <div className="p-2.5 lg:p-3 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">主打大规格与艺术性</strong>
                                <ul className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed space-y-1 list-decimal pl-4">
                                    <li>国内最早研发超大陶瓷板</li>
                                    <li>陶瓷艺术画/岩板背景墙</li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 5: 品牌定调 */}
                        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                            <div className="p-2.5 lg:p-3 flex items-center justify-center border-r border-white/5 bg-black/40">
                                <span className="font-bold text-zinc-300 text-center text-sm lg:text-[0.95rem]">核心品牌<br />定调</span>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 bg-[#004CE5]/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5 text-center">“国风+设计”的国民大牌</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-center">有质感、讲设计、偏新中式与大宅审美。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5 text-center">“稳重+底蕴”的老大哥</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-center">国民度高、质量可靠、中式底蕴。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5 text-center">“实用+全能”方案商</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-center">一站式购齐、重功能属性。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5 text-center">“高端+艺术”技术先驱</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-center">研发强、带有浓厚艺术标签。</p>
                            </div>
                        </div>

                        {/* Row 6: 竞争态势 */}
                        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr] group hover:bg-white/[0.02] transition-colors bg-[#111]">
                            <div className="p-2.5 lg:p-3 flex items-center justify-center border-r border-white/5 bg-black/40">
                                <span className="font-bold text-zinc-300 text-center text-sm lg:text-[0.95rem]">相对竞争<br />态势</span>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 bg-[#004CE5]/10 flex flex-col justify-center border-b-2 border-b-[#004CE5]">
                                <strong className="text-[#004CE5] text-[0.95rem] lg:text-[1rem] mb-1">稳健第二梯队</strong>
                                <p className="text-zinc-300 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-justify">体量弱于马、东一线龙头，但凭借国潮岩板、密缝连纹在大宅市场建立鲜明认知，新中式场景表现突出。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">规模防御者</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-justify">虽然营收略降，但12.1亿的净利润让其在价格战中拥有绝对底气，品牌下沉优势极大。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 border-r border-white/5 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">生态整合者</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-justify">凭借“瓷砖+卫浴+辅材”的闭环，在存量房翻新（C端局改）中抢占了大量份额，财报韧性最强。</p>
                            </div>
                            <div className="p-2.5 lg:p-3 flex flex-col justify-center">
                                <strong className="text-white text-[0.9rem] lg:text-[0.95rem] mb-1.5">阵痛调整者</strong>
                                <p className="text-zinc-400 text-[0.85rem] lg:text-[0.9rem] leading-relaxed text-justify">2025年因地产坏账计提了1.32亿减值准备，利润大幅缩水，目前重点是清历史包袱和发力C端。</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Note */}
                <div className="w-full flex justify-end mt-1 px-2 shrink-0">
                    <div className="text-zinc-500 text-[0.75rem] lg:text-[0.8rem] text-right space-y-0.5 leading-tight">
                        <p>信息来源：各公司2025年度报告</p>
                        <p>蒙娜丽莎(002918)_公司公告_蒙娜丽莎：2025年年度报告 | 马可波罗(001386)_公司公告_马可波罗：2025年年度报告 | 东鹏控股(003012)_公司公告_东鹏控股：2025年年度报告</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
