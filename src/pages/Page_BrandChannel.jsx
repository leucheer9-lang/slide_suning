import React from 'react';

export default function Page_BrandChannel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">商业模式与客户结构分析</h1>
            </div>

            {/* Content Grid */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-0">

                {/* Left Column: Visual Data Analytics (Doughnut & 2D Scatter Quadrant) */}
                <div className="lg:col-span-5 flex flex-col gap-6 h-full min-h-0 justify-between">

                    {/* Top Box: Doughnut Gauge (Revenue Mix) */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004CE5] opacity-[0.08] blur-[60px] rounded-full"></div>

                        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-4 flex items-center gap-3 shrink-0">
                            <span className="w-2 h-7 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.5)]"></span>
                            2025年收入结构
                        </h2>

                        <div className="flex-1 flex items-center justify-around gap-8">
                            {/* Glowing SVG Ring representing three segments */}
                            <div className="relative w-40 h-40 xl:w-44 xl:h-44 flex items-center justify-center shrink-0">
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                    {/* BG Track */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />

                                    {/* JD Group ISC (37.0%) Arc */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.8"
                                        pathLength="100" strokeDasharray="37 63" strokeDashoffset="0" strokeLinecap="round" />

                                    {/* External ISC (16.5%) Arc */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.8"
                                        pathLength="100" strokeDasharray="16.5 83.5" strokeDashoffset="-37" strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(0,76,229,0.6)]" />

                                    {/* Other customers (46.5%) Arc */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f43f5e" strokeWidth="4.8"
                                        pathLength="100" strokeDasharray="46.5 53.5" strokeDashoffset="-53.5" strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl xl:text-5xl font-black text-white tracking-tight leading-none">63<span className="text-lg text-zinc-400 font-normal">%</span></span>
                                    <span className="text-sm text-blue-400 font-bold tracking-widest mt-1.5">来自外部客户</span>
                                </div>
                            </div>

                            {/* Legend Labels */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#64748b] shrink-0"></span>
                                    <span className="text-lg xl:text-xl font-bold text-zinc-300">京东集团一体化 (803亿 · 37.0%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.6)] shrink-0"></span>
                                    <span className="text-lg xl:text-xl font-bold text-white">外部一体化供应链 (359亿 · 16.5%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#f43f5e] shadow-[0_0_8px_rgba(244,63,94,0.6)] shrink-0"></span>
                                    <span className="text-lg xl:text-xl font-bold text-zinc-300">快递快运等其他 (1009亿 · 46.5%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Box: 2D Coordinate Quadrant Chart (Scatter Plot) */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 opacity-[0.06] blur-[60px] rounded-full"></div>

                        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-4 flex items-center gap-3 shrink-0">
                            <span className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                            客户价值定位象限
                        </h2>

                        <div className="flex-1 w-full relative flex items-center justify-center">
                            {/* SVG Coordinate Grid */}
                            <svg className="w-full max-w-[420px] h-[200px]" viewBox="0 0 160 100">
                                {/* Grid Dotted Lines */}
                                <line x1="14" y1="50" x2="154" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                                <line x1="84" y1="10" x2="84" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />

                                {/* Axes */}
                                <line x1="14" y1="90" x2="154" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <line x1="14" y1="10" x2="14" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                                {/* Axis Arrows */}
                                <path d="M154 88 L158 90 L154 92 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M12 10 L14 6 L16 10 Z" fill="rgba(255,255,255,0.4)" />

                                {/* Axis Labels */}
                                <text fill="rgba(255,255,255,0.6)" fontSize="10" fontWeight="bold" textAnchor="middle">
                                    <tspan x="7" y="30">黏</tspan>
                                    <tspan x="7" y="42">性</tspan>
                                    <tspan x="7" y="54">↑</tspan>
                                </text>
                                <text x="154" y="98" fill="rgba(255,255,255,0.6)" fontSize="10" fontWeight="bold" textAnchor="end">收入规模 ➔</text>

                                {/* Bubble 1: External ISC */}
                                <circle cx="48" cy="28" r="14" fill="#004CE5" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(0,76,229,0.8)]" />
                                <text x="48" y="31.5" fill="#fff" fontSize="8.5" fontWeight="black" textAnchor="middle">外部一体化</text>

                                {/* Bubble 2: JD Group ISC */}
                                <circle cx="112" cy="32" r="16" fill="#64748b" fillOpacity="0.85" />
                                <text x="112" y="35.5" fill="#fff" fontSize="8.5" fontWeight="black" textAnchor="middle">京东集团</text>

                                {/* Bubble 3: Express & LTL */}
                                <circle cx="136" cy="70" r="17.5" fill="#f43f5e" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                                <text x="136" y="73.5" fill="#fff" fontSize="8.5" fontWeight="black" textAnchor="middle">快递快运</text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column: Three Premium visual customer cards */}
                <div className="lg:col-span-7 flex flex-col gap-4 h-full min-h-0 justify-between">

                    {/* Card 1: JD Group ISC */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col xl:flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[340px] 2xl:w-[380px] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/10 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-600/20 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">京东集团（一体化供应链）</h3>
                                    <span className="text-sm font-black text-zinc-400 tracking-wider mt-0.5 inline-block">占比 37.0% // 内部履约基本盘</span>
                                </div>
                            </div>

                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    商流订单
                                </div>
                                <svg className="w-4 h-4 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-850 border border-white/15 px-2 py-1.5 rounded text-white text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    仓配一体
                                </div>
                                <svg className="w-4 h-4 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    末端履约
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-4 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">承接京东零售全渠道履约：</strong>2025年收入803亿元、同比增长46%，增量主要来自新并入的即时配送业务。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">网络密度的来源：</strong>稳定高单量摊薄了仓网与末端的固定成本，但也意味着关联方收入占比仍接近四成。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: External ISC */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col xl:flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[340px] 2xl:w-[380px] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/10 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(0,76,229,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">外部一体化供应链客户</h3>
                                    <span className="text-sm font-black text-blue-400 tracking-wider mt-0.5 inline-block">占比 16.5% // 9.1万家 · 核心增长引擎</span>
                                </div>
                            </div>

                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    入仓托管
                                </div>
                                <svg className="w-4 h-4 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-blue-600/10 border border-blue-500/30 px-2 py-1.5 rounded text-white text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.2)]">
                                    一盘货统配
                                </div>
                                <svg className="w-4 h-4 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    送装逆向
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-4 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-[#004CE5] mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">客户盘子：</strong>2025年9.1万家、同比增长13.0%，单客户年均收入39.4万元，覆盖快消、家电家居、3C、服装、汽车、生鲜医药等行业。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#004CE5] mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">决策特征：</strong>长周期选型与招标，采购、供应链负责人会主动检索方案、案例与服务标准，是GEO最该发力的B端阵地。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Express & LTL */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col xl:flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[340px] 2xl:w-[380px] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/10 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">快递、快运等其他客户</h3>
                                    <span className="text-sm font-black text-rose-400 tracking-wider mt-0.5 inline-block">占比 46.5% // 大众寄递与口碑触点</span>
                                </div>
                            </div>

                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    上门揽收
                                </div>
                                <svg className="w-4 h-4 text-rose-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-rose-600/10 border border-rose-500/30 px-2 py-1.5 rounded text-white text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(244,63,94,0.2)]">
                                    干线分拣
                                </div>
                                <svg className="w-4 h-4 text-rose-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    送货上门
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-4 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">大众触点：</strong>京东快递、德邦与跨越速运的零担快运、冷链与跨境寄递，2025年收入1009亿元，是品牌口碑被公开讨论最集中的部分。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">竞争环境：</strong>2025年全国快递量增13.6%、行业收入仅增6.5%，单价持续下行，价格与时效对比是C端搜索的主战场。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
