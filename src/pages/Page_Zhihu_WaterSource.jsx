import React from 'react';

export default function Page_Zhihu_WaterSource() {
    return (
        <div className="w-full h-full bg-black relative overflow-hidden font-sans flex flex-col text-white">

            {/* Header Section */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-16 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-widest opacity-95">
                    理解核心：知乎在 GEO 中的「水源」地位
                </h1>

                <div className="mt-8 flex justify-center w-full">
                    <div className="relative flex flex-col items-center text-center">
                        <p className="text-[18px] xl:text-[20px] text-zinc-400 leading-relaxed font-medium max-w-[900px]">
                            在中文大模型（LLM）的训练语料与 <span className="text-zinc-200 font-bold mx-1 border-b border-zinc-600">RAG（检索增强生成）</span>数据源中，知乎的内容权重极高。<br/>
                            其核心在于为 AI 模型灌溉了两大难以替代的<span className="text-zinc-200 font-bold mx-1">优质水源壁垒</span>：
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Pipeline */}
            <div className="relative z-10 flex-1 w-full px-12 lg:px-16 pb-16 flex flex-col items-center justify-center">

                {/* The Two Pillars Container */}
                <div className="relative w-full max-w-[1300px] flex gap-10 xl:gap-14">

                    {/* Central Flow Node representation (Background graphic) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[1px] border-zinc-800/60 rounded-full blur-[2px] opacity-20 pointer-events-none flex items-center justify-center">
                        <div className="w-[150px] h-[150px] border-[1px] border-zinc-700/60 rounded-full"></div>
                    </div>

                    {/* Card 1: 专家网络 */}
                    <div className="flex-1 group relative transform transition-transform duration-700 hover:-translate-y-3">
                        <div className="h-full flex flex-col bg-[#0c0c0c]/80 backdrop-blur-3xl border border-zinc-800 rounded-[32px] p-10 xl:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group-hover:border-zinc-500/60 transition-colors duration-500">
                            
                            {/* Watermark Icon background */}
                            <div className="absolute -right-12 -bottom-12 opacity-[0.02] text-zinc-500 pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-700 scale-125">
                                <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>

                            {/* Glow subtle line */}
                            <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent transition-opacity duration-500 opacity-30 group-hover:opacity-100"></div>

                            {/* Standard Frosted Icon */}
                            <div className="w-16 h-16 rounded-[16px] flex items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_15px_rgba(255,255,255,0.05)_inset] text-zinc-200 mb-8 relative z-10">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>

                            <div className="relative z-10 flex flex-col flex-1">
                                <h3 className="text-[34px] xl:text-[36px] font-black text-white mb-6 tracking-wide">
                                    专家网络
                                </h3>
                                <p className="text-[20px] xl:text-[22px] text-zinc-400 leading-[1.8] font-medium flex-1">
                                    指知乎上通过身份认证、专业勋章及高赞同比率严格筛选出的<span className="text-zinc-200">垂直领域创作者群体</span>。
                                </p>

                                {/* AI Preference Highlight */}
                                <div className="mt-8 bg-[#141414]/90 border border-zinc-800 rounded-2xl p-6 relative">
                                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-zinc-600 rounded-r-lg"></div>
                                    <h4 className="text-[18px] xl:text-[20px] font-bold text-zinc-200 mb-3 flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                                        算法模型抓取逻辑
                                    </h4>
                                    <p className="text-[18px] xl:text-[19px] text-zinc-500 leading-relaxed font-medium">
                                        大模型倾向于优先抓取带有<span className="text-zinc-300">“专业认证”</span>标签的回答。由于专家网络的逻辑性架构更庞大、且专业词汇与术语应用绝对精准，模型判断这类语料的可信度呈指数级上升。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: 可信内容 */}
                    <div className="flex-1 group relative transform transition-transform duration-700 hover:-translate-y-3">
                        <div className="h-full flex flex-col bg-[#0c0c0c]/80 backdrop-blur-3xl border border-zinc-800 rounded-[32px] p-10 xl:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group-hover:border-zinc-500/60 transition-colors duration-500">
                            
                            {/* Watermark Icon background */}
                            <div className="absolute -right-12 -bottom-12 opacity-[0.02] text-zinc-500 pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-700 scale-125">
                                <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>

                            {/* Glow subtle line */}
                            <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent transition-opacity duration-500 opacity-30 group-hover:opacity-100"></div>

                            {/* Standard Frosted Icon */}
                            <div className="w-16 h-16 rounded-[16px] flex items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_15px_rgba(255,255,255,0.05)_inset] text-zinc-200 mb-8 relative z-10">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>

                            <div className="relative z-10 flex flex-col flex-1">
                                <h3 className="text-[34px] xl:text-[36px] font-black text-white mb-6 tracking-wide">
                                    可信内容
                                </h3>
                                <p className="text-[20px] xl:text-[22px] text-zinc-400 leading-[1.8] font-medium flex-1">
                                    以独立问答为核心，具备<span className="text-zinc-200">结构化、可追溯</span>且内容厚度的优质图文数据生态。
                                </p>

                                {/* AI Preference Highlight */}
                                <div className="mt-8 bg-[#141414]/90 border border-zinc-800 rounded-2xl p-6 relative">
                                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-zinc-600 rounded-r-lg"></div>
                                    <h4 className="text-[18px] xl:text-[20px] font-bold text-zinc-200 mb-3 flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        算法打分权重指标
                                    </h4>
                                    <p className="text-[18px] xl:text-[19px] text-zinc-500 leading-relaxed font-medium">
                                        此类内容拥有高密度的自然点赞和多级收藏，同时具有极低的短序列“水军感”特征（即内容稀疏度低），因此在模型底层架构的<span className="text-zinc-300">奖励模型（RM）</span>中长期获取顶格高分。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
