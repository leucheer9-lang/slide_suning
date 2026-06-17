import React from 'react';

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1500px] mx-auto flex flex-col h-full relative z-10">

                {/* Header */}
                <div className="w-full flex flex-col items-center justify-center text-center pt-2 pb-12 relative z-10 shrink-0">
                    <h1 className="text-[36px] font-black text-white tracking-widest mb-6 -translate-y-[4px]">短保烘焙行业GEO难点解析</h1>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-[1400px] tracking-wide whitespace-nowrap">
                        结合包装短保烘焙快消行业的客观规律与桃李面包当前的现实，总结出其在<strong className="text-white">智能搜索引擎 (GEO) 中面临的核心痛点与难点：</strong>
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 flex-1 min-h-0 pb-6 px-4">

                    {/* Card 1 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -top-2 lg:-top-6 right-6 lg:right-8 pointer-events-none">01</div>
                        <div className="w-12 h-1 bg-white mb-auto"></div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mt-10">
                            传统重资产扩张受阻，闲置产能与折旧攀升<br />“双向绞杀”利润，产能过剩成为研报搜索重灾区
                        </h3>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -top-2 lg:-top-6 right-6 lg:right-8 pointer-events-none">02</div>
                        <div className="w-12 h-1 bg-white mb-auto"></div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mt-10">
                            “健康、清洁、减糖”烘焙风潮席卷<br />研发投入吝啬（0.48%）导致产品形象在健康心智端边缘化
                        </h3>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -bottom-6 lg:-bottom-10 right-6 lg:right-8 pointer-events-none">03</div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mb-auto">
                            大卖场衰退而品牌便利店被自有贴牌围堵<br />销售渠道大洗牌，品牌信息在低端小超市打转
                        </h3>
                        <div className="w-12 h-1 bg-white mt-10"></div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] p-10 lg:p-12 flex flex-col relative overflow-hidden -translate-y-2 transition-all duration-500 shadow-2xl">
                        <div className="text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute -bottom-6 lg:-bottom-10 right-6 lg:right-8 pointer-events-none">04</div>
                        <h3 className="text-2xl lg:text-[1.8rem] font-bold text-white leading-[1.5] tracking-widest z-10 mb-auto">
                            食品安全事件频发与中秋月饼说教广告“翻车”<br />负面舆料全网发酵，对品牌资产造成灾难性流失
                        </h3>
                        <div className="w-12 h-1 bg-white mt-10"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
