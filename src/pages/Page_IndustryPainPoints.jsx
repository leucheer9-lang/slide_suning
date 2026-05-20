import React from 'react';

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1500px] mx-auto flex flex-col h-full relative z-10">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center justify-center text-center pt-2 pb-12 relative z-10 shrink-0">
                    <h1 className="text-[36px] font-black text-white tracking-widest mb-6 -translate-y-[4px]">萨米特瓷砖 GEO 困境分析</h1>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-[1400px] tracking-wide whitespace-nowrap">
                        从整个建陶行业的特性，以及我们过去服务过的同类型客户经验中，总结出<strong className="text-white">萨米特瓷砖在 GEO 中可能会遇到的核心困境：</strong>
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 flex-1 min-h-0 pb-6 px-4">
                    
                    {/* Card 1 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -top-2 lg:-top-6 right-6 lg:right-8 pointer-events-none">01</div>
                        <div className="w-12 h-1 bg-white mb-auto"></div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mt-10">
                            产品线繁杂<br/>目标词难以集中
                        </h3>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -top-2 lg:-top-6 right-6 lg:right-8 pointer-events-none">02</div>
                        <div className="w-12 h-1 bg-white mb-auto"></div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mt-10">
                            在消费者端认知度极低<br/>竞争非常激烈
                        </h3>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -bottom-6 lg:-bottom-10 right-6 lg:right-8 pointer-events-none">03</div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mb-auto">
                            极度依赖安装水平<br/>和售后服务
                        </h3>
                        <div className="w-12 h-1 bg-white mt-10"></div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -bottom-6 lg:-bottom-10 right-6 lg:right-8 pointer-events-none">04</div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mb-auto">
                            销售模式多为经销商体系<br/>易造成价格不一与信息错乱
                        </h3>
                        <div className="w-12 h-1 bg-white mt-10"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
