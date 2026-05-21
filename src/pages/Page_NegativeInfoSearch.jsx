import React from 'react';
import { ShieldAlert, AlertTriangle, Eye, Activity, Radar, Search } from 'lucide-react';

export default function Page_NegativeInfoSearch() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-4 px-6 lg:pt-5 lg:pb-5 lg:px-8 xl:pt-5 xl:pb-6 xl:px-10 animate-fade-in">
            {/* Custom Embedded CSS Animations */}
            <style>{`
                @keyframes radar-scan {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes grid-pulse {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.35; }
                }
                @keyframes flow-dash {
                    to { stroke-dashoffset: -40; }
                }
            `}</style>

            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] bg-[#004CE5]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-red-600/[0.03] rounded-full blur-[140px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4 xl:gap-5">
                
                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-1">
                    <h1 className="text-[34px] lg:text-[40px] xl:text-[46px] font-black text-white tracking-widest leading-tight">
                        如何查找负面信息
                    </h1>
                </div>

                {/* Main Content: Split layout */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 min-h-0 items-stretch py-1">
                    
                    {/* Left Column: Copy Cards (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4 xl:gap-5 min-h-0">
                        
                        {/* Section 1: Monitoring Difficulties (监控难点) */}
                        <div className="flex-1 flex flex-col gap-2.5 bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-red-500/20 rounded-2xl p-4 lg:p-4.5 xl:p-5 transition-all duration-300 relative group">
                            {/* Card Glow accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] rounded-full blur-xl pointer-events-none"></div>
                            
                            {/* Category Header */}
                            <div className="flex items-center gap-2 text-rose-500 font-extrabold text-[13.5px] lg:text-[15px] xl:text-[16.5px] tracking-wider border-b border-red-500/10 pb-2 shrink-0">
                                <ShieldAlert className="w-4 h-4 shrink-0" />
                                监控难点
                            </div>

                            {/* Difficulties content */}
                            <div className="flex-1 flex flex-col justify-evenly gap-2">
                                {/* Bullet 1 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-zinc-100 font-bold text-[15.5px] lg:text-[17px] xl:text-[18.5px] leading-snug flex items-center gap-1.5 shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)]"></span>
                                        负面随时在产生
                                    </h4>
                                    <p className="text-zinc-400 text-[13px] lg:text-[14.5px] xl:text-[16px] leading-relaxed pl-3">
                                        互联网上的信息每分每秒都在更新。今天清理干净了，明天可能又会冒出一条经销商乱报价的帖子，或者一条对泥瓦工的吐槽。
                                    </p>
                                </div>
                                
                                {/* Bullet 2 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-zinc-100 font-bold text-[15.5px] lg:text-[17px] xl:text-[18.5px] leading-snug flex items-center gap-1.5 shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)]"></span>
                                        AI 抓取速度极快
                                    </h4>
                                    <p className="text-zinc-400 text-[13px] lg:text-[14.5px] xl:text-[16px] leading-relaxed pl-3">
                                        大模型随时可能把这些新冒出来的“毒点”抓取进答案里。一旦 AI 输出了错误价格或负面评价，会直接且瞬间打消消费者的购买念头，影响极其恶劣。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Our Response Mechanism (我们的应对机制) */}
                        <div className="flex-1 flex flex-col gap-2.5 bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 rounded-2xl p-4 lg:p-4.5 xl:p-5 transition-all duration-300 relative group">
                            {/* Card Glow accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#004CE5]/[0.02] rounded-full blur-xl pointer-events-none"></div>

                            {/* Category Header */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[13.5px] lg:text-[15px] xl:text-[16.5px] tracking-wider border-b border-[#004CE5]/10 pb-2 shrink-0">
                                <Radar className="w-4 h-4 shrink-0" />
                                我们的应对机制
                            </div>

                            {/* Response content */}
                            <div className="flex-1 flex flex-col justify-evenly gap-2">
                                {/* Bullet 1 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-zinc-100 font-bold text-[15.5px] lg:text-[17px] xl:text-[18.5px] leading-snug flex items-center gap-1.5 shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                        高频实时监测
                                    </h4>
                                    <p className="text-zinc-400 text-[13px] lg:text-[14.5px] xl:text-[16px] leading-relaxed pl-3">
                                        因为 GEO 优化的核心在于“纠偏”，所以我们必须像雷达一样死死盯住 AI。我们会每天进行 1 到 3 次的实时搜索抽查，看看 AI 现在的回答有没有“跑偏”。
                                    </p>
                                </div>

                                {/* Bullet 2 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-zinc-100 font-bold text-[15.5px] lg:text-[17px] xl:text-[18.5px] leading-snug flex items-center gap-1.5 shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                        发现即溯源
                                    </h4>
                                    <p className="text-zinc-400 text-[13px] lg:text-[14.5px] xl:text-[16px] leading-relaxed pl-3">
                                        只要在当天的搜索中发现 AI 开始乱报价或出现负面，第一时间存档留存。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Active Monitoring Center Visualization (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col min-h-0">
                        
                        <div className="flex-1 relative flex items-center justify-center bg-zinc-950/30 backdrop-blur border border-white/5 rounded-3xl overflow-hidden p-6 shadow-2xl group min-h-[480px] lg:min-h-0">
                            
                            {/* Scanning Grid Background */}
                            <div className="absolute inset-0 bg-[radial-gradient(#004ce510_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-40 z-0 pointer-events-none animate-[grid-pulse_4s_infinite]"></div>

                            {/* Concentric Radar Rings */}
                            <div className="absolute w-[160px] h-[160px] border border-white/10 rounded-full z-0 pointer-events-none"></div>
                            <div className="absolute w-[300px] h-[300px] border border-[#004CE5]/10 rounded-full z-0 pointer-events-none"></div>
                            <div className="absolute w-[440px] h-[440px] border border-[#004CE5]/5 rounded-full border-dashed z-0 pointer-events-none animate-[spin_60s_linear_infinite]"></div>
                            <div className="absolute w-[580px] h-[580px] border border-white/5 rounded-full z-0 pointer-events-none"></div>

                            {/* Rotating Radar Sweeper */}
                            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#004CE5]/10 via-transparent to-transparent rounded-full origin-center pointer-events-none z-10 animate-[radar-scan_6s_linear_infinite]" style={{ transformOrigin: 'center' }}></div>

                            {/* Flowing animated SVG connecting orbit paths */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="scan-flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
                                        <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.6" />
                                        <stop offset="70%" stopColor="#004CE5" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
                                    </linearGradient>
                                </defs>
                                <path 
                                    d="M 120,110 Q 300,40 480,100 Q 520,250 480,390 Q 300,450 120,380 Q 80,250 120,110 Z" 
                                    fill="none" 
                                    stroke="url(#scan-flow-gradient)" 
                                    strokeWidth="2.5" 
                                    strokeDasharray="12, 12" 
                                    className="animate-[flow-dash_6s_linear_infinite]"
                                />
                            </svg>

                            {/* ════════════ NODE 1: Dealer Pricing Risk (Top-Left) ════════════ */}
                            <div className="absolute top-[18%] left-[10%] z-20 flex items-center gap-3 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-rose-500/30 transition-all duration-300 group/node cursor-pointer">
                                <div className="relative w-9 h-9 rounded-full bg-rose-950/45 flex items-center justify-center shrink-0 border border-rose-500/25">
                                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500 animate-ping absolute"></div>
                                    <AlertTriangle className="w-4 h-4 text-rose-500 relative z-10" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-bold text-zinc-300 group-hover/node:text-rose-400 transition-colors">
                                        经销商乱报价
                                    </span>
                                    <span className="text-[10px] font-semibold text-rose-500 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-rose-500 animate-pulse"></span>
                                        已触发预警
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 2: Construction Quality Reviews (Top-Right) ════════════ */}
                            <div className="absolute top-[16%] right-[10%] z-20 flex items-center gap-3 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-amber-500/30 transition-all duration-300 group/node cursor-pointer">
                                <div className="relative w-9 h-9 rounded-full bg-amber-950/45 flex items-center justify-center shrink-0 border border-amber-500/25">
                                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500 animate-ping absolute"></div>
                                    <ShieldAlert className="w-4 h-4 text-amber-500 relative z-10" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-bold text-zinc-300 group-hover/node:text-amber-400 transition-colors">
                                        泥瓦工吐槽
                                    </span>
                                    <span className="text-[10px] font-semibold text-amber-500 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>
                                        负面监控中
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 3: Active AI Crawler Crawling (Bottom-Right) ════════════ */}
                            <div className="absolute bottom-[20%] right-[10%] z-20 flex items-center gap-3 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-[#004CE5]/30 transition-all duration-300 group/node cursor-pointer">
                                <div className="relative w-9 h-9 rounded-full bg-blue-950/45 flex items-center justify-center shrink-0 border border-[#004CE5]/25">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#004CE5] animate-ping absolute"></div>
                                    <Search className="w-4 h-4 text-blue-400 relative z-10" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-bold text-zinc-300 group-hover/node:text-blue-400 transition-colors">
                                        AI 实时爬网抓取
                                    </span>
                                    <span className="text-[10px] font-semibold text-blue-400 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-[#004CE5] animate-pulse"></span>
                                        抓取源监测中
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 4: All-Web Knowledge Fragments (Bottom-Left) ════════════ */}
                            <div className="absolute bottom-[18%] left-[10%] z-20 flex items-center gap-3 bg-zinc-900/90 backdrop-blur border border-white/10 rounded-2xl p-3 pr-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-emerald-500/30 transition-all duration-300 group/node cursor-pointer">
                                <div className="relative w-9 h-9 rounded-full bg-emerald-950/45 flex items-center justify-center shrink-0 border border-emerald-500/25">
                                    <Activity className="w-4 h-4 text-emerald-400 relative z-10" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-bold text-zinc-300 group-hover/node:text-emerald-400 transition-colors">
                                        全网知识碎片
                                    </span>
                                    <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                        无安全毒点
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ CENTER HUB: AI Corrective Radar ════════════ */}
                            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#004CE5] to-blue-900 shadow-[0_0_50px_rgba(0,76,229,0.5)] flex flex-col items-center justify-center border border-white/20 z-20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="absolute inset-0.5 rounded-full border border-white/10 animate-[pulse_2s_infinite]"></div>
                                <Radar className="w-7 h-7 text-white mb-1.5 animate-pulse" />
                                <span className="text-[10px] font-bold tracking-widest text-blue-200/80 uppercase">
                                    GEO RADAR
                                </span>
                                <span className="text-[14px] font-black text-white tracking-wider leading-none">
                                    纠偏雷达
                                </span>
                            </div>

                            {/* Decorative active scanning sweep status HUD overlay */}
                            <div className="absolute bottom-4 left-6 z-10 flex items-center gap-2 text-[11px] font-bold tracking-wide text-zinc-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                SYSTEM: ACTIVE SCANNING
                            </div>
                            
                            <div className="absolute bottom-4 right-6 z-10 flex items-center gap-2 text-[11px] font-bold tracking-wide text-zinc-500">
                                CHANNELS: 4/4 MONITORED
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
