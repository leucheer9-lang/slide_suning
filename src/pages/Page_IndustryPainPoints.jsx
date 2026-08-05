import React from 'react';

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header (Centered) */}
            <div className="w-full flex flex-col items-center justify-center text-center pt-12 pb-8 relative z-10 shrink-0">
                <h1 className="text-4xl lg:text-[40px] font-black text-white tracking-widest mb-4">供应链物流行业GEO难点解析</h1>
                <p className="text-zinc-400 text-lg lg:text-[22px] xl:text-[26px] leading-relaxed max-w-[1200px] tracking-wide">
                    从供应链物流行业的特性，以及我们过去服务过的同类型客户经验中，<br />
                    总结出<strong className="text-[#004CE5] font-bold">京东物流在 GEO 中可能会遇到的核心困境：</strong>
                </p>
            </div>

            {/* Content Container with 3-column Grid */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-12 relative z-10 flex flex-col justify-center min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 max-h-[560px]">

                    {/* Card 01 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <div className="w-12 h-1 bg-white/60 mb-6 shrink-0"></div>
                        <h3 className="text-[28px] lg:text-[36px] xl:text-[44px] font-bold text-white leading-snug tracking-wider mb-auto z-10">
                            B端选型与C端寄件<br />
                            搜索诉求分层
                        </h3>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">01</div>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <div className="w-12 h-1 bg-white/60 mb-6 shrink-0"></div>
                        <h3 className="text-[28px] lg:text-[36px] xl:text-[44px] font-bold text-white leading-snug tracking-wider mb-auto z-10">
                            偶发性服务事故<br />
                            极易被AI抓取放大
                        </h3>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">02</div>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300">
                        <div className="w-12 h-1 bg-white/60 mb-6 shrink-0"></div>
                        <h3 className="text-[28px] lg:text-[36px] xl:text-[44px] font-bold text-white leading-snug tracking-wider mb-auto z-10">
                            寄件渠道碎片化<br />
                            报价口径难对齐
                        </h3>
                        <div className="text-[120px] lg:text-[140px] font-black text-white/5 absolute bottom-4 right-8 pointer-events-none select-none leading-none">03</div>
                    </div>

                </div>
            </div>
        </div>
    );
}
