import React from 'react';
import { ShieldAlert, Radar, Search, AlertTriangle, Activity } from 'lucide-react';

export default function Page_NegativeInfoSearch() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-6 pb-6 px-10 lg:pt-8 lg:pb-8 lg:px-12 xl:pt-10 xl:pb-10 xl:px-16 animate-fade-in">
            {/* Background Ambient Glows - Sleek Dark Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-5%] top-[15%] w-[600px] h-[600px] bg-[#004CE5]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
            <div className="absolute left-[-5%] bottom-[5%] w-[600px] h-[600px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 gap-6 lg:gap-8">
                
                {/* Header Section */}
                <div className="shrink-0">
                    <h1 className="text-[38px] lg:text-[48px] xl:text-[58px] font-black text-white tracking-widest leading-tight">
                        一、如何查找负面信息
                    </h1>
                </div>

                {/* Main Content: Split 6:6 layout for maximum visual scale */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-0 items-stretch">
                    
                    {/* Left Column: Extremely Large Text Copy (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-6 min-h-0">
                        
                        {/* Section 1: 监控难点 */}
                        <div className="flex-1 flex flex-col gap-4 bg-zinc-950/70 border-2 border-red-500/20 hover:border-red-500/40 rounded-3xl p-6 lg:p-8 xl:p-9 transition-all duration-300 relative group">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 text-red-500 font-black text-[22px] lg:text-[26px] xl:text-[30px] tracking-wide border-b-2 border-red-500/20 pb-3 shrink-0">
                                <ShieldAlert className="w-7 h-7 lg:w-8 h-8 text-red-500 shrink-0" />
                                监控难点
                            </div>

                            {/* Difficulties content */}
                            <div className="flex-1 flex flex-col justify-center gap-6">
                                {/* Bullet 1 */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-white font-black text-[19px] lg:text-[22px] xl:text-[25px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]"></span>
                                        负面随时在产生
                                    </h4>
                                    <p className="text-zinc-300 text-[15.5px] lg:text-[17.5px] xl:text-[20px] leading-relaxed pl-4 font-bold">
                                        互联网上的信息每分每秒都在更新。今天清理干净了，明天可能又会冒出一条经销商乱报价的帖子，或者一条对泥瓦工的吐槽。
                                    </p>
                                </div>
                                
                                {/* Bullet 2 */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-white font-black text-[19px] lg:text-[22px] xl:text-[25px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]"></span>
                                        AI 抓取速度极快
                                    </h4>
                                    <p className="text-zinc-300 text-[15.5px] lg:text-[17.5px] xl:text-[20px] leading-relaxed pl-4 font-bold">
                                        大模型随时可能把这些新冒出来的“毒点”抓取进答案里。一旦 AI 输出了错误价格或负面评价，会直接且瞬间打消消费者的购买念头，影响极其恶劣。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: 我们的应对机制 */}
                        <div className="flex-1 flex flex-col gap-4 bg-zinc-950/70 border-2 border-blue-500/20 hover:border-[#004CE5]/40 rounded-3xl p-6 lg:p-8 xl:p-9 transition-all duration-300 relative group">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 text-blue-400 font-black text-[22px] lg:text-[26px] xl:text-[30px] tracking-wide border-b-2 border-blue-500/20 pb-3 shrink-0">
                                <Radar className="w-7 h-7 lg:w-8 h-8 text-blue-400 shrink-0" />
                                我们的应对机制
                            </div>

                            {/* Response content */}
                            <div className="flex-1 flex flex-col justify-center gap-6">
                                {/* Bullet 1 */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-white font-black text-[19px] lg:text-[22px] xl:text-[25px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]"></span>
                                        高频实时监测
                                    </h4>
                                    <p className="text-zinc-300 text-[15.5px] lg:text-[17.5px] xl:text-[20px] leading-relaxed pl-4 font-bold">
                                        因为 GEO 优化的核心在于“纠偏”，所以我们必须像雷达一样死死盯住 AI。我们会每天进行 1 到 3 次的实时搜索抽查，看看 AI 现在的回答有没有“跑偏”。
                                    </p>
                                </div>

                                {/* Bullet 2 */}
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-white font-black text-[19px] lg:text-[22px] xl:text-[25px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]"></span>
                                        发现即溯源
                                    </h4>
                                    <p className="text-zinc-300 text-[15.5px] lg:text-[17.5px] xl:text-[20px] leading-relaxed pl-4 font-bold">
                                        只要在当天的搜索中发现 AI 开始乱报价或出现负面，第一时间存档留存。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: High-Contrast Static Monitoring Center (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col min-h-0">
                        <div className="flex-1 relative flex items-center justify-center bg-zinc-950/40 border-2 border-white/10 rounded-[36px] overflow-hidden p-8 shadow-2xl min-h-[500px] lg:min-h-0">
                            
                            {/* Scanning Grid Background - Pure clean & high contrast */}
                            <div className="absolute inset-0 bg-[radial-gradient(#004ce515_2.5px,transparent_2.5px)] bg-[size:36px_36px] opacity-60 z-0 pointer-events-none"></div>

                            {/* Concentric Radar Rings - Simple, Thick, Sharp */}
                            <div className="absolute w-[200px] h-[200px] border-2 border-white/10 rounded-full z-0 pointer-events-none"></div>
                            <div className="absolute w-[380px] h-[380px] border-2 border-[#004CE5]/20 rounded-full z-0 pointer-events-none"></div>
                            <div className="absolute w-[560px] h-[560px] border-2 border-white/5 rounded-full z-0 pointer-events-none"></div>

                            {/* Solid Connective Ring (Static visual bridge connecting the 4 nodes) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M 100,100 Q 300,30 500,100 Q 540,250 500,400 Q 300,470 100,400 Q 60,250 100,100 Z" 
                                    fill="none" 
                                    stroke="#004CE5" 
                                    strokeWidth="3.5" 
                                    strokeOpacity="0.4"
                                />
                            </svg>

                            {/* ════════════ NODE 1: Dealer Pricing Risk (Top-Left) ════════════ */}
                            <div className="absolute top-[14%] left-[6%] z-20 flex items-center gap-4 bg-zinc-900 border-2 border-red-500 rounded-2xl p-4 pr-5 shadow-[0_6px_24px_rgba(0,0,0,0.6)]">
                                <div className="w-12 h-12 rounded-full bg-red-950 flex items-center justify-center shrink-0 border-2 border-red-500">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[17px] lg:text-[19px] xl:text-[21px] font-black text-white">
                                        经销商乱报价
                                    </span>
                                    <span className="text-[12px] lg:text-[13px] xl:text-[14px] font-black text-red-500">
                                        ● 触发价格预警
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 2: Construction Quality Reviews (Top-Right) ════════════ */}
                            <div className="absolute top-[14%] right-[6%] z-20 flex items-center gap-4 bg-zinc-900 border-2 border-red-500 rounded-2xl p-4 pr-5 shadow-[0_6px_24px_rgba(0,0,0,0.6)]">
                                <div className="w-12 h-12 rounded-full bg-red-950 flex items-center justify-center shrink-0 border-2 border-red-500">
                                    <ShieldAlert className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[17px] lg:text-[19px] xl:text-[21px] font-black text-white">
                                        泥瓦工吐槽
                                    </span>
                                    <span className="text-[12px] lg:text-[13px] xl:text-[14px] font-black text-red-500">
                                        ● 触发负面警告
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 3: Active AI Crawler Crawling (Bottom-Right) ════════════ */}
                            <div className="absolute bottom-[14%] right-[6%] z-20 flex items-center gap-4 bg-zinc-900 border-2 border-blue-500 rounded-2xl p-4 pr-5 shadow-[0_6px_24px_rgba(0,0,0,0.6)]">
                                <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                    <Search className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[17px] lg:text-[19px] xl:text-[21px] font-black text-white">
                                        大模型数据抓取
                                    </span>
                                    <span className="text-[12px] lg:text-[13px] xl:text-[14px] font-black text-blue-400">
                                        ● 全天实时监测
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 4: All-Web Knowledge Fragments (Bottom-Left) ════════════ */}
                            <div className="absolute bottom-[14%] left-[6%] z-20 flex items-center gap-4 bg-zinc-900 border-2 border-blue-500 rounded-2xl p-4 pr-5 shadow-[0_6px_24px_rgba(0,0,0,0.6)]">
                                <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                    <Activity className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[17px] lg:text-[19px] xl:text-[21px] font-black text-white">
                                        全网知识碎片
                                    </span>
                                    <span className="text-[12px] lg:text-[13px] xl:text-[14px] font-black text-blue-400">
                                        ● 来源合规纠偏
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ CENTER HUB: AI Corrective Radar (Much Bigger, High-Contrast) ════════════ */}
                            <div className="relative w-40 h-40 lg:w-44 h-44 xl:w-48 h-48 rounded-full bg-[#004CE5] shadow-[0_0_40px_rgba(0,76,229,0.5)] flex flex-col items-center justify-center border-4 border-white z-20">
                                <Radar className="w-10 h-10 lg:w-12 h-12 text-white mb-2" />
                                <span className="text-[20px] lg:text-[24px] xl:text-[28px] font-black text-white tracking-widest leading-none">
                                    纠偏雷达
                                </span>
                            </div>

                            {/* Dynamic scanning sweep status HUD overlay - Chinese Only, Large & Clear */}
                            <div className="absolute bottom-6 left-8 z-10 flex items-center gap-2 text-[14px] lg:text-[16px] font-black tracking-wider text-zinc-400">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                雷达监测系统：运行中
                            </div>
                            
                            <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2 text-[14px] lg:text-[16px] font-black tracking-wider text-zinc-400">
                                监测通道：已全量覆盖
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
