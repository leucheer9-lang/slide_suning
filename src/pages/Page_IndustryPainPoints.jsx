import React from 'react';

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header (Centered) */}
            <div className="w-full flex flex-col items-center justify-center text-center pt-12 pb-8 relative z-10 shrink-0">
                <h1 className="text-4xl lg:text-[40px] font-black text-white tracking-widest mb-4">短保烘焙行业GEO难点解析</h1>
                <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-[1000px] tracking-wide">
                    从整个短保烘焙行业的特性，以及我们过去服务过的同类型客户经验中，总结出<strong className="text-white font-bold">桃李面包在 GEO 中可能会遇到的核心困境：</strong>
                </p>
            </div>

            {/* Content Container with 2x2 Grid */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-12 relative z-10 flex flex-col justify-center min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 max-h-[560px]">

                    {/* Card 01 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <div className="w-12 h-1 bg-white/60 mb-6 shrink-0"></div>
                        <h3 className="text-2xl lg:text-[2rem] font-bold text-white leading-snug tracking-wider mb-auto z-10">
                            消费决策极短<br />
                            常规产品词无流量
                        </h3>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">01</div>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <div className="w-12 h-1 bg-white/60 mb-6 shrink-0"></div>
                        <h3 className="text-2xl lg:text-[2rem] font-bold text-white leading-snug tracking-wider mb-auto z-10">
                            供应链半径受限<br />
                            全域推荐流量倒挂
                        </h3>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">02</div>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <h3 className="text-2xl lg:text-[2rem] font-bold text-white leading-snug tracking-wider mt-auto mb-6 z-10">
                            “0防腐”双刃剑<br />
                            偶发变质被AI放大
                        </h3>
                        <div className="w-12 h-1 bg-white/60 mt-auto shrink-0"></div>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">03</div>
                    </div>

                    {/* Card 04 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <h3 className="text-2xl lg:text-[2rem] font-bold text-white leading-snug tracking-wider mt-auto mb-6 z-10">
                            渠道极端碎片化<br />
                            出清折价致价格混乱
                        </h3>
                        <div className="w-12 h-1 bg-white/60 mt-auto shrink-0"></div>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">04</div>
                    </div>

                </div>
            </div>
        </div>
    );
}
