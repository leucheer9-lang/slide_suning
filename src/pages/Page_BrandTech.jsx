import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            {/* Header */}
            <div className="w-full max-w-[1600px] mx-auto mb-10 lg:mb-12 relative z-10 flex flex-col items-start pt-4 lg:pt-6 shrink-0">
                <h1
                    className="text-5xl lg:text-6xl xl:text-[72px] font-black text-white tracking-tight mb-2"
                    style={{ lineHeight: '1.3' }}
                >
                    品牌核心<br />竞争优势
                </h1>
            </div>

            {/* Cards Grid */}
            <div className="flex-1 w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch min-h-0 pb-10">

                {/* Card 1 */}
                <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/50 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">01</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        “中央工厂 + 批发”<br />重资产规模制造模式
                    </h3>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.2rem] leading-relaxed flex-1 text-justify">
                        通过在全国各核心城市密集布局标准化现代生产基地（目前已投产24个基地），在生产端建立起巨大的规模与折旧成本优势，拉高短保烘焙行业竞争壁垒，阻断新玩家低成本切入。
                    </p>
                    {/* Decorative Star */}
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-[#0033aa] to-[#001144] border border-blue-400/20 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,50,200,0.15)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/60 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">02</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        “每日新鲜送达”<br />高频配送物流履约网络
                    </h3>
                    <p className="text-blue-100/70 text-[1.15rem] lg:text-[1.2rem] leading-relaxed flex-1 text-justify">
                        配套自主研发的PDA物流配送数据采集系统，建立起一套高频清晨8点前精准配送的物流毛细网络。通过极高效率的配送，控制整体退货损耗率在10%以内，保证新鲜度。
                    </p>
                    {/* Decorative Star */}
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-[#004CE5] to-[#002288] border border-blue-400/30 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,76,229,0.2)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/80 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">03</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        “F2B2C”中介快消<br />极其深厚的渠道分销壁垒
                    </h3>
                    <p className="text-blue-100/80 text-[1.15rem] lg:text-[1.2rem] leading-relaxed flex-1 text-justify">
                        向大型连锁商超（To KA）、连锁便利店及成千上万的中小社会夫妻店（To B）进行饱和式密集铺货，构建了深厚的终端零售触达壁垒，实现离消费者最近的日常性价比面包定位。
                    </p>
                    {/* Decorative Star */}
                    <div className="absolute bottom-8 right-8 text-white/30 group-hover:text-white/80 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
