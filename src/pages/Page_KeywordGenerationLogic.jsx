import React from 'react';

export default function Page_KeywordGenerationLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4">

                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        词条生成逻辑
                    </h1>
                </div>

                {/* Content Wrapper - Shrink to match the image's dynamic width */}
                <div className="w-fit flex flex-col items-stretch gap-3 lg:gap-4 flex-1 min-h-0">
                    {/* Description Card */}
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5">
                        <p className="text-zinc-300 text-[16px] lg:text-[17.5px] xl:text-[19px] leading-relaxed">
                            将产品的<strong className="text-white font-bold">购买动机、场景画像、核心卖点、核心痛点、搜索引擎数据及社媒数据</strong>所有核心信息收集提炼后，对照生成相应的专业词条。
                        </p>
                    </div>

                    {/* Bottom Image Container */}
                    <div className="relative flex-1 min-h-0 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01] shadow-2xl flex items-center justify-center">
                        <img
                            src="/Add_Charts/keyword-generation-logic.png"
                            alt="词条生成逻辑图"
                            className="h-full w-auto object-contain block"
                            onError={(e) => { 
                                e.target.style.display = 'none';
                                e.target.parentNode.className = "w-full h-full relative bg-white/[0.01] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4";
                                const fallback = e.target.parentNode.querySelector('.fallback-ui');
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        {/* Fallback Placeholder UI (initially hidden, shown on error) */}
                        <div className="fallback-ui absolute inset-0 z-10 flex-col items-center justify-center pointer-events-none p-4 hidden">
                            <div className="w-16 h-16 mb-4 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-zinc-300 text-lg lg:text-xl font-bold tracking-widest text-center">
                                词条推导与生成逻辑图
                            </span>
                            <span className="text-zinc-500/80 text-xs mt-2 font-mono">
                                文件路径: /Add_Charts/keyword-generation-logic.png
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
