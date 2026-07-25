import React from 'react';

export default function Page_ContentStrategyBacktrack() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4">

                {/* Header Section */}
                <div className="shrink-0 flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl lg:text-[46px] font-black text-white tracking-widest leading-tight">
                            内容策略
                        </h1>
                    </div>
                </div>

                {/* Context Card - glowing warnings/notes */}
                <div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-2xl py-3 px-4 lg:py-3.5 lg:px-5.5 flex items-start gap-4 shadow-xl backdrop-blur-md relative overflow-hidden transition-all duration-300 shrink-0">
                    {/* Visual Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#004CE5]"></div>

                    <div className="flex-1 min-w-0">
                        <p className="text-zinc-300 text-[1rem] lg:text-[1.08rem] leading-relaxed tracking-wide font-medium">
                            为了杜绝 <span className="text-white font-bold">AI 批量洗稿带来的降权</span> 和被标记为 <span className="text-red-400 font-bold font-black">“投毒”风险</span>，确保更多的语料能被主流大模型抓取并高频引用，我们将严格执行以下内容策略：
                        </p>
                    </div>
                </div>

                {/* Main Step Card */}
                <div className="bg-[#0a0a0a] border border-[#004CE5]/20 hover:border-[#004CE5]/50 rounded-2xl py-4 px-5 lg:py-4.5 lg:px-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default shrink-0">
                    {/* Luminous indicator bar using brand accent blue #004CE5 */}
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                    {/* Glow effect on hover */}
                    <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-[#004CE5]/5 blur-3xl group-hover:bg-[#004CE5]/10 transition-all duration-500"></div>

                    <div className="flex items-start gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-[#004CE5]/20 group-hover:text-[#004CE5]/40 transition-colors font-mono leading-none tracking-tighter mt-1">
                            01
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-black text-white tracking-wide mb-2 lg:mb-3 flex items-center gap-2.5">
                                溯源反推：搞清大模型的引用偏好
                            </h3>
                            <p className="text-zinc-300 text-[1.05rem] lg:text-[1.12rem] leading-relaxed tracking-wide font-medium">
                                依托前期的 <span className="text-white font-bold">GEO 监测数据系统</span>，针对特定的目标搜索词条，<span className="text-[#004CE5] font-bold">精准定向抓取</span> 当前已被各类大模型高频引用的头部文章源。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Image Container (stretched to fit remaining height) */}
                <div className="w-full flex-1 relative bg-white/[0.01] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center group shadow-2xl min-h-[380px] lg:min-h-[480px] xl:min-h-[530px]">
                    <img
                        src="/Add_Charts/content-strategy-step1.png"
                        alt="溯源反推：搞清大模型的引用偏好"
                        className="absolute inset-0 w-full h-full object-contain p-3 lg:p-5 z-20 transition-all duration-500 hover:scale-[1.02]"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />

                    {/* Placeholder UI if image fails */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none p-4">
                        <div className="w-16 h-16 mb-4 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 text-lg lg:text-xl font-bold tracking-widest text-center">
                            大模型引用偏好追踪与溯源反推系统架构图
                        </span>
                        <span className="text-zinc-500/80 text-xs mt-2 font-mono">
                            文件路径: /Add_Charts/content-strategy-step1.png
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
