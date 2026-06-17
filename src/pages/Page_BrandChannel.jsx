export default function Page_BrandChannel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            
            {/* Header */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">商业模式与渠道体系分析</h1>
            </div>

            {/* Content Grid */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-0">
                
                {/* Left Column: Visual Data Analytics (Doughnut & 2D Scatter Quadrant) */}
                <div className="lg:col-span-5 flex flex-col gap-6 h-full min-h-0 justify-between">
                    
                    {/* Top Box: Doughnut Gauge (Mix Ratio) */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004CE5] opacity-[0.08] blur-[60px] rounded-full"></div>
                        
                        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-4 flex items-center gap-3 shrink-0">
                            <span className="w-2 h-7 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.5)]"></span>
                            大盘渠道格局占比
                        </h2>

                        <div className="flex-1 flex items-center justify-around gap-8">
                            {/* Glowing SVG Ring */}
                            <div className="relative w-40 h-40 xl:w-44 xl:h-44 flex items-center justify-center shrink-0">
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                     {/* BG Track */}
                                     <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
                                     
                                     {/* KA Direct (58%) Arc */}
                                     <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.8" 
                                         pathLength="100" strokeDasharray="58 42" strokeDashoffset="0" strokeLinecap="round"
                                         className="drop-shadow-[0_0_8px_rgba(0,76,229,0.6)]" />
                                         
                                     {/* Distributors & Others (42%) Arc */}
                                     <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.8" 
                                         pathLength="100" strokeDasharray="42 58" strokeDashoffset="-58" strokeLinecap="round" />
                                 </svg>
                                
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl xl:text-5xl font-black text-white tracking-tight leading-none">58<span className="text-lg text-zinc-400 font-normal">%</span></span>
                                    <span className="text-sm text-blue-400 font-bold tracking-widest mt-1.5">直营KA商超</span>
                                </div>
                            </div>

                            {/* Legend Labels */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.6)] shrink-0"></span>
                                    <span className="text-lg xl:text-xl font-bold text-white">直营KA渠道 (58%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#64748b] shrink-0"></span>
                                    <span className="text-lg xl:text-xl font-bold text-zinc-300">经销、便利店及其他 (42%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Box: 2D Coordinate Quadrant Chart (Scatter Plot) */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 opacity-[0.06] blur-[60px] rounded-full"></div>
                        
                        <h2 className="text-2xl xl:text-3xl font-bold text-white mb-4 flex items-center gap-3 shrink-0">
                            <span className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                            渠道效能定位象限
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
                                    <tspan x="7" y="30">控</tspan>
                                    <tspan x="7" y="42">制</tspan>
                                    <tspan x="7" y="54">力</tspan>
                                    <tspan x="7" y="66">↑</tspan>
                                </text>
                                <text x="154" y="98" fill="rgba(255,255,255,0.6)" fontSize="10" fontWeight="bold" textAnchor="end">销量规模 ➔</text>
                                
                                {/* Bubble 1: CVS */}
                                <circle cx="50" cy="30" r="14.5" fill="#a78bfa" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                                <text x="50" y="33.5" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle">便利店渠道</text>

                                {/* Bubble 2: Dealers */}
                                <circle cx="100" cy="70" r="15.5" fill="#64748b" fillOpacity="0.85" />
                                <text x="100" y="73.5" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle">经销商分销</text>
                                
                                {/* Bubble 3: KA */}
                                <circle cx="140" cy="35" r="17.5" fill="#004CE5" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(0,76,229,0.8)]" />
                                <text x="140" y="38.5" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle">直营KA商超</text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column: Three Premium visual channel cards */}
                <div className="lg:col-span-7 flex flex-col gap-4 h-full min-h-0 justify-between">
                    
                    {/* Card 1: To KA */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col xl:flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[340px] 2xl:w-[380px] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/10 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(0,76,229,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">直营KA渠道 (To KA)</h3>
                                    <span className="text-sm font-black text-blue-400 tracking-wider mt-0.5 inline-block">占比 58% // 核心销量支柱</span>
                                </div>
                            </div>
                            
                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    商超直营
                                </div>
                                <svg className="w-4 h-4 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-blue-600/10 border border-blue-500/30 px-2 py-1.5 rounded text-white text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.2)]">
                                    货架陈列
                                </div>
                                <svg className="w-4 h-4 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    账期结算
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-4 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-[#004CE5] mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">商超直营体系：</strong>直接入驻大润发、家乐福等全国连锁大卖场，是品牌最核心的日常销量支撑体系。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#004CE5] mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">高频冷链直供：</strong>工厂直接配履至终端货架，实现高周转运营并根据约定账期按时结算。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: To CVS */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col xl:flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[340px] 2xl:w-[380px] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/10 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">品牌便利店渠道 (To CVS)</h3>
                                    <span className="text-sm font-black text-purple-400 tracking-wider mt-0.5 inline-block">年轻核心阵地 // 青年代餐网络</span>
                                </div>
                            </div>
                            
                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    便利入驻
                                </div>
                                <svg className="w-4 h-4 text-purple-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-purple-600/10 border border-purple-500/30 px-2 py-1.5 rounded text-white text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(167,139,250,0.2)]">
                                    青年货架
                                </div>
                                <svg className="w-4 h-4 text-purple-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    代餐场景
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-4 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">便利网络覆盖：</strong>广泛铺设于罗森、全家、7-11等一二线城市的主流品牌便利店，主要服务青年与白领客群。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">快捷早餐代餐：</strong>依托4~15天短保优势进行高频补货与货架陈列，快速满足快节奏都市群体的便捷代餐需求。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: To Dealer */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col xl:flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[340px] 2xl:w-[380px] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/10 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-600/20 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">经销商分销渠道 (To Dealer)</h3>
                                    <span className="text-sm font-black text-zinc-400 tracking-wider mt-0.5 inline-block">占比 42% // 广泛下沉辐射网</span>
                                </div>
                            </div>
                            
                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    分销网络
                                </div>
                                <svg className="w-4 h-4 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-800 border border-white/10 px-2 py-1.5 rounded text-white text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    社会小店
                                </div>
                                <svg className="w-4 h-4 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-center shrink-0">
                                    终端铺货
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-4 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">下沉市场辐射：</strong>拥有950+家合作经销商，主要负责下沉市场、传统商超与广泛的社会夫妻店。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">批发分销机制：</strong>采用成熟批发模式，依托经销商本地网点资源深入乡镇和广泛社区，完成末端触达。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}
