import React from 'react';

export default function Page_BrandChannel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            
            {/* Header */}
            <div className="w-full flex-col items-center justify-center text-center pt-5 lg:pt-6 pb-2 relative z-10 shrink-0">
                <h1 className="text-[40px] font-black text-white tracking-widest mb-1.5">品牌商业模式与渠道体系</h1>
            </div>

            {/* Content Grid */}
            <div className="flex-1 w-full max-w-[1750px] mx-auto px-8 lg:px-12 xl:px-14 pt-4 pb-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-0">
                
                {/* Left Column: Visual Data Analytics (Doughnut & 2D Scatter Quadrant) */}
                <div className="lg:col-span-5 flex flex-col gap-6 h-full min-h-0 justify-between">
                    
                    {/* Top Box: Doughnut Gauge (Mix Ratio) */}
                    <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-[2rem] p-6 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004CE5] opacity-[0.08] blur-[60px] rounded-full"></div>
                        
                        <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-3 shrink-0">
                            <span className="w-2.5 h-7 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.5)]"></span>
                            大盘渠道格局占比 (To C vs To B)
                        </h2>

                        <div className="flex-1 flex flex-col md:flex-row items-center justify-around gap-8">
                            {/* Glowing SVG Ring (Enlarged and Corrected) */}
                            <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                    {/* BG Track */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
                                    
                                    {/* To C (70%) Arc - Placed on the same circle */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.8" 
                                        pathLength="100" strokeDasharray="70 30" strokeDashoffset="0" strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(0,76,229,0.6)]" />
                                        
                                    {/* To B (30%) Arc - Placed on the exact same circle to form a perfect 100% doughnut */}
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.8" 
                                        pathLength="100" strokeDasharray="30 70" strokeDashoffset="-70" strokeLinecap="round" />
                                </svg>
                                
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-[36px] font-black text-white tracking-tight leading-none">70<span className="text-lg text-zinc-400 font-normal">%</span></span>
                                    <span className="text-[12px] text-blue-400 font-extrabold uppercase tracking-wider mt-1 scale-95">零售端为主</span>
                                </div>
                            </div>

                            {/* Legend Labels */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-4 h-4 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.6)] shrink-0"></span>
                                    <span className="text-lg font-black text-white">To C 零售 (70%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4 h-4 rounded-full bg-[#64748b] shrink-0"></span>
                                    <span className="text-lg font-black text-zinc-300">To B 工程 (30%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Box: 2D Coordinate Quadrant Chart (Scatter Plot) */}
                    <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-[2rem] p-6 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 opacity-[0.06] blur-[60px] rounded-full"></div>
                        
                        <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-3 shrink-0">
                            <span className="w-2.5 h-7 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                            渠道效能定位象限 (销量 vs 溢价)
                        </h2>
                        
                        <div className="flex-1 w-full relative flex items-center justify-center">
                            {/* SVG Coordinate Grid (Enlarged, Shifted & Corrected to Avoid Overlaps) */}
                            <svg className="w-full max-w-[500px] h-[245px]" viewBox="0 0 160 100">
                                {/* Grid Dotted Lines (Shifted x center to 84) */}
                                <line x1="14" y1="50" x2="154" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                                <line x1="84" y1="10" x2="84" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                                
                                {/* Axes (Shifted x start to 14) */}
                                <line x1="14" y1="90" x2="154" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <line x1="14" y1="10" x2="14" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                
                                {/* Axis Arrows */}
                                <path d="M154 88 L158 90 L154 92 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M12 10 L14 6 L16 10 Z" fill="rgba(255,255,255,0.4)" />

                                {/* Axis Labels (Clean & Zero Overlap) */}
                                <text fill="rgba(255,255,255,0.5)" fontSize="8" fontWeight="bold" textAnchor="middle">
                                    <tspan x="6" y="30">溢</tspan>
                                    <tspan x="6" y="40">价</tspan>
                                    <tspan x="6" y="50">空</tspan>
                                    <tspan x="6" y="60">间</tspan>
                                    <tspan x="6" y="70">↑</tspan>
                                </text>
                                {/* X-axis Label: Positioned underneath the axis line */}
                                <text x="154" y="98" fill="rgba(255,255,255,0.6)" fontSize="9" fontWeight="bold" textAnchor="end">销量规模 ➔</text>
                                
                                {/* Bubble 1: Designers (Low Volume, Highest Premium - Shifted & Clear of Y-axis) */}
                                <circle cx="49" cy="24" r="11.5" fill="#a78bfa" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                                <text x="49" y="27" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle">设计师</text>

                                {/* Bubble 2: Engineering To B (Moderate Volume, Low Premium - Shifted to Match Dotted Divider) */}
                                <circle cx="99" cy="72" r="13" fill="#64748b" fillOpacity="0.85" />
                                <text x="99" y="75" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle">B端工程</text>
                                
                                {/* Bubble 3: Retail To C (Highest Volume, High Premium - Shifted to Match Dotted Divider) */}
                                <circle cx="139" cy="35" r="14.5" fill="#004CE5" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(0,76,229,0.8)]" />
                                <text x="139" y="38" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle">C端零售</text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column: Three Premium visual channel cards with embedded flow topologies */}
                <div className="lg:col-span-7 flex flex-col gap-4 h-full min-h-0 justify-between">
                    
                    {/* Card 1: To C Retail */}
                    <div className="bg-gradient-to-br from-[#121212] to-black border border-white/10 rounded-[2rem] p-5 xl:p-6 shadow-2xl flex flex-col xl:flex-row gap-5 justify-between items-stretch flex-1">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[38%] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/5 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(0,76,229,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl lg:text-2xl font-black text-white">零售终端 (To C)</h3>
                                    <span className="text-[12px] font-extrabold text-blue-400 uppercase tracking-widest mt-0.5 inline-block">占比 70% // 品牌基本盘</span>
                                </div>
                            </div>
                            
                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1.5 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-300 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    总部标准赋能
                                </div>
                                <svg className="w-3.5 h-3.5 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-blue-600/10 border border-blue-500/30 px-2 py-1 rounded text-white text-[11px] lg:text-[12px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.2)]">
                                    2000+体验终端
                                </div>
                                <svg className="w-3.5 h-3.5 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-300 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    密缝交付与业主
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-3 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1.5 shrink-0 text-lg">●</span>
                                <p className="text-zinc-200 text-sm lg:text-[15px] xl:text-[16px] font-bold leading-relaxed text-justify">
                                    <strong className="text-white">经销商加盟制：</strong>全国超2000家专卖店，总部提供标准化展示与政策赋能，经销商在本地市场深耕细作。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1.5 shrink-0 text-lg">●</span>
                                <p className="text-zinc-200 text-sm lg:text-[15px] xl:text-[16px] font-bold leading-relaxed text-justify">
                                    <strong className="text-white">潮牌体验与密缝交付：</strong>针对年轻客群设计实景样板间，主打密缝铺贴精工交付，建立差异化美学壁垒。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: To B Engineering */}
                    <div className="bg-gradient-to-br from-[#121212] to-black border border-white/10 rounded-[2rem] p-5 xl:p-6 shadow-2xl flex flex-col xl:flex-row gap-5 justify-between items-stretch flex-1">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[38%] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/5 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-zinc-600/20 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl lg:text-2xl font-black text-white">工程大客户 (To B)</h3>
                                    <span className="text-[12px] font-extrabold text-zinc-400 uppercase tracking-widest mt-0.5 inline-block">占比 30% // 规模发动机</span>
                                </div>
                            </div>
                            
                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1.5 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-300 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    总部大客户签约
                                </div>
                                <svg className="w-3.5 h-3.5 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-800 border border-white/10 px-2 py-1 rounded text-zinc-200 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    本地经销商配送
                                </div>
                                <svg className="w-3.5 h-3.5 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-300 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    现场施工
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-3 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1.5 shrink-0 text-lg">●</span>
                                <p className="text-zinc-200 text-sm lg:text-[15px] xl:text-[16px] font-bold leading-relaxed text-justify">
                                    <strong className="text-white">总部集采与属地服务：</strong>总部负责与百强房企、大型公建签约集采框架，本地经销商落地提供配货、安装和售后保障。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1.5 shrink-0 text-lg">●</span>
                                <p className="text-zinc-200 text-sm lg:text-[15px] xl:text-[16px] font-bold leading-relaxed text-justify">
                                    <strong className="text-white">安全稳定大批量交付：</strong>背靠母公司新明珠集团强大的量产排产能力与优质健康的资金流，让开发商完全免除断链断供之忧。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Designer Channel */}
                    <div className="bg-gradient-to-br from-[#121212] to-black border border-white/10 rounded-[2rem] p-5 xl:p-6 shadow-2xl flex flex-col xl:flex-row gap-5 justify-between items-stretch flex-1">
                        {/* Left Info & Topology */}
                        <div className="xl:w-[38%] flex flex-col justify-between gap-3 border-r-0 xl:border-r border-white/5 xl:pr-6 shrink-0">
                            {/* Card Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(167,139,250,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl lg:text-2xl font-black text-purple-300">设计师渠道 (流量)</h3>
                                    <span className="text-[12px] font-extrabold text-purple-400 uppercase tracking-widest mt-0.5 inline-block">高溢价点 // 艺术化前哨</span>
                                </div>
                            </div>
                            
                            {/* Embedded Horizontal Flow Topology */}
                            <div className="flex items-center justify-between gap-1.5 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-300 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    设计大咖与圈层活动
                                </div>
                                <svg className="w-3.5 h-3.5 text-purple-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-purple-600/10 border border-purple-500/30 px-2 py-1 rounded text-white text-[11px] lg:text-[12px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(167,139,250,0.2)]">
                                    原创高端套系方案
                                </div>
                                <svg className="w-3.5 h-3.5 text-purple-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-300 text-[11px] lg:text-[12px] font-bold text-center shrink-0">
                                    别墅家装
                                </div>
                            </div>
                        </div>

                        {/* Right Bullet Items */}
                        <div className="flex-1 flex flex-col justify-center gap-3 xl:pl-6 border-t xl:border-t-0 xl:border-l border-white/5 pt-4 xl:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1.5 shrink-0 text-lg">●</span>
                                <p className="text-zinc-200 text-sm lg:text-[15px] xl:text-[16px] font-bold leading-relaxed text-justify">
                                    <strong className="text-white">圈层裂变与设计师库：</strong>签约邵唯晏等明星设计大师，跨界联合广州设计周、红棉设计奖等深度运营，建立核心的高端流量入口。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 mt-1.5 shrink-0 text-lg">●</span>
                                <p className="text-zinc-200 text-sm lg:text-[15px] xl:text-[16px] font-bold leading-relaxed text-justify">
                                    <strong className="text-white">原创设计共鸣与溢价：</strong>依托“超级玩家”与“巴里漫石”等前卫高规格套系产品满足艺术审美，以设计原创驱动高单价高溢价成交。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
