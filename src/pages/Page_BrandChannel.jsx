import React from 'react';

export default function Page_BrandChannel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            
            {/* Header */}
            <div className="w-full flex-col items-center justify-center text-center pt-3 lg:pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">品牌商业模式与渠道体系</h1>
            </div>

            {/* Content Grid */}
            <div className="flex-1 w-full max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16 pt-6 lg:pt-8 pb-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-0">
                
                {/* Left: To B vs To C */}
                <div className="lg:col-span-5 flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl flex-1 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004CE5] opacity-[0.15] blur-[60px] rounded-full"></div>
                        
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-4">
                            <span className="w-2 h-8 bg-[#004CE5] rounded-full"></span>
                            业务构成 (To B vs To C)
                        </h2>
                        
                        <p className="text-zinc-300 text-[1.2rem] lg:text-[1.3rem] leading-relaxed mb-12 text-justify tracking-wide">
                            萨米特采用的是<strong className="text-white">“以 To C 为主导基本盘，同时深耕 To B 的全渠道双线模式”</strong>。
                        </p>
                        
                        {/* Stats */}
                        <div className="mt-auto space-y-10">
                            <div>
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-white font-bold text-xl lg:text-2xl">To C 端 (零售)</span>
                                    <span className="text-[#004CE5] font-['AlimamaShuHeiTi'] text-4xl lg:text-5xl tracking-widest">70%</span>
                                </div>
                                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#004CE5] to-blue-400 w-[70%] rounded-full shadow-[0_0_15px_rgba(0,76,229,0.5)]"></div>
                                </div>
                                <p className="text-zinc-500 text-[1rem] mt-4 font-bold tracking-wide">核心经销商实际业务构成主力</p>
                            </div>
                            
                            <div>
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-zinc-400 font-bold text-lg lg:text-xl">To B 端 (工程/大客户)</span>
                                    <span className="text-zinc-500 font-['AlimamaShuHeiTi'] text-3xl lg:text-4xl tracking-widest">30%</span>
                                </div>
                                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-600 w-[30%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Channel Analysis */}
                <div className="lg:col-span-7 flex flex-col gap-6 h-full justify-between">
                    {/* Item 1 */}
                    <div className="bg-[#111] border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all flex-1">
                        <h3 className="text-xl lg:text-[1.5rem] font-bold text-white mb-3 tracking-wide flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>
                            全国渠道规模：强线下型品牌
                        </h3>
                        <p className="text-zinc-400 text-[1.15rem] lg:text-[1.2rem] leading-relaxed text-justify">
                            官网提到<strong className="text-zinc-200">“超2000家终端体验店，经销商体系覆盖全国”</strong>。说明它属于强线下型品牌，这契合瓷砖行业特点，因为消费者极度依赖实物体验、样板展示与门店场景。
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-[#111] border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all flex-1">
                        <h3 className="text-xl lg:text-[1.5rem] font-bold text-white mb-3 tracking-wide flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>
                            渠道模式：经销商加盟制为主
                        </h3>
                        <p className="text-zinc-400 text-[1.15rem] lg:text-[1.2rem] leading-relaxed text-justify">
                            <strong className="text-zinc-200">总部赋能，经销商落地。</strong>总部负责品牌、产品、供应链及展厅标准建设；经销商则负责本地销售、装修公司合作、设计师关系维护以及工程客户开拓。
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-[#111] border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col group hover:-translate-y-1 transition-all flex-1">
                        <h3 className="text-xl lg:text-[1.5rem] font-bold text-white mb-3 tracking-wide flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>
                            渠道演变：设计师驱动成交
                        </h3>
                        <p className="text-zinc-400 text-[1.15rem] lg:text-[1.2rem] leading-relaxed text-justify">
                            萨米特正越来越偏向<strong className="text-[#004CE5]">“设计师驱动成交”</strong>。在针对高端和中高端客户的装修链路中，设计师的决策与推荐影响力巨大，已成为核心流量入口。
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
