import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            {/* Background Pattern */}

            {/* Header */}
            <div className="w-full max-w-[1600px] mx-auto mb-10 lg:mb-12 relative z-10 flex flex-col items-start pt-4 lg:pt-6 shrink-0">
                <h1 className="text-5xl lg:text-6xl xl:text-[72px] font-black text-white tracking-tight leading-[1.4] mb-2">
                    产品核心<br />技术壁垒
                </h1>
            </div>

            {/* Cards Grid */}
            <div className="flex-1 w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch min-h-0 pb-10">

                {/* Card 1 */}
                <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/50 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">01</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        ＜0.5mm<br />密缝精工技术
                    </h3>
                    <p className="text-zinc-400 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        打破了传统瓷砖必须留宽缝的痛点，其<strong className="text-white">“无间之境”</strong>系列可以实现小于0.5mm的微缝连纹铺贴，使多片瓷砖铺贴后宛若一整片，视觉极度开阔。
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
                        肤感美学<br />(三大专利工艺)
                    </h3>
                    <p className="text-blue-100/70 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        行业<strong className="text-white">“肤感面”</strong>技术的开创者之一。研发出玉质肤感、超平肤感、微模肤感等专属专利技术，使哑光瓷砖表面触感如婴儿肌肤般温润细腻，且兼具高防滑性与极强抗污防腐能力。
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
                        高端釉料<br />复刻技术
                    </h3>
                    <p className="text-blue-100/80 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        如“定位炫彩结晶干粒釉”、“金丝绒复刻釉”、“3D哑光雕琢技术”，使瓷砖呈现出璀璨、羊绒质感或天然原石的立体肌理，高度逼真。
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
