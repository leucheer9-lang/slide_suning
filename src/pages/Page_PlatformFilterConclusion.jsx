import React from 'react';

export default function Page_PlatformFilterConclusion() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            {/* 顶部占位尽可能缩小 */}
            <div className="h-[10px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-0 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-1">结论</h1>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-center pb-10 min-h-0 container mx-auto">
                <div className="w-full max-w-[1300px] flex flex-col gap-6">

                    <div className="w-full text-center mb-1">
                        <p className="inline-block text-[#004CE5] text-[1.35rem] font-bold tracking-widest bg-[#004CE5]/10 px-8 py-3 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                            基于上述量化分析，未来的核心投放资源将聚焦于由上述三组平台构成的矩阵
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 w-full">
                        {/* A组 */}
                        <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 p-8 flex flex-col gap-5 shadow-2xl">
                            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-white/20"></div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl font-bold text-white tracking-widest">A 组 <span className="text-zinc-400 text-[1.35rem] font-normal tracking-normal ml-2">（5个）</span></h2>
                                </div>
                                <p className="text-[1.2rem] text-zinc-300 font-medium leading-relaxed">
                                    保障全网基础曝光与 AI 普适性抓取。
                                </p>
                            </div>
                            <div className="w-full h-px bg-white/5 my-0"></div>
                            <div className="flex flex-wrap gap-3">
                                {["搜狐网", "新浪新闻", "网易新闻", "知乎", "百家号"].map(t => (
                                    <span key={t} className="px-4 py-2 bg-white/[0.06] rounded-md text-[1.1rem] text-white/80 border border-white/10 shadow-sm">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* B组 */}
                        <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 p-8 flex flex-col gap-5 shadow-2xl">
                            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-white/20"></div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl font-bold text-white tracking-widest">B 组 <span className="text-zinc-400 text-[1.35rem] font-normal tracking-normal ml-2">（8个）</span></h2>
                                </div>
                                <p className="text-[1.2rem] text-zinc-300 font-medium leading-relaxed">
                                    针对不同 AI 平台受众进行差异化深度渗透。
                                </p>
                            </div>
                            <div className="w-full h-px bg-white/5 my-0"></div>
                            <div className="flex flex-wrap gap-3">
                                {["IT之家", "少数派", "抖音", "今日头条", "小红书", "微信公众号", "百度知道", "贴吧"].map(t => (
                                    <span key={t} className="px-4 py-2 bg-white/[0.06] rounded-md text-[1.1rem] text-white/80 border border-white/10 shadow-sm">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* C组 */}
                        <div className="relative w-full rounded-2xl bg-white/[0.02] border border-white/10 p-8 flex flex-col gap-5 shadow-2xl">
                            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-white/20"></div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl font-bold text-white tracking-widest">C 组 <span className="text-zinc-400 text-[1.35rem] font-normal tracking-normal ml-2">（5个）</span></h2>
                                </div>
                                <p className="text-[1.2rem] text-zinc-300 font-medium leading-relaxed">
                                    确保品牌高相关内容的精准触达与转化效率。
                                </p>
                            </div>
                            <div className="w-full h-px bg-white/5 my-0"></div>
                            <div className="flex flex-wrap gap-3">
                                {["太平洋科技", "什么值得买", "中关村在线", "天极网", "家电消费网"].map(t => (
                                    <span key={t} className="px-4 py-2 bg-white/[0.06] rounded-md text-[1.1rem] text-white/80 border border-white/10 shadow-sm">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
