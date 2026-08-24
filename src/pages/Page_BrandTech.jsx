import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            <div className="w-full max-w-[1600px] mx-auto mb-10 lg:mb-12 relative z-10 flex flex-col items-start pt-4 lg:pt-6 shrink-0">
                <h1
                    className="text-5xl lg:text-6xl xl:text-[72px] font-black text-white tracking-tight mb-2"
                    style={{ lineHeight: '1.3' }}
                >
                    核心技术<br />能力壁垒
                </h1>
            </div>

            <div className="flex-1 w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch min-h-0 pb-10">

                <div className="bg-[#111] border border-white/10 rounded-[2rem] px-10 py-10 lg:px-12 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/50 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">01</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        航天验证过的<br />材料底座
                    </h3>
                    <p className="text-zinc-400 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify [text-justify:inter-ideograph]">
                        航天级封装材料由高强高模分子链取向纳米尼龙膜、高阻隔纳米涂层与低温 PE 复合而成，<strong className="text-white">抗穿刺达普通材料 4 倍以上，阻隔性超过 10 倍</strong>。产品已 31 次进入太空，是最难被质疑的技术证明。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#0033aa] to-[#001144] border border-blue-400/20 rounded-[2rem] px-10 py-10 lg:px-12 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,50,200,0.15)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/60 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">02</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        剪切增稠纳米流体<br />遇强则强
                    </h3>
                    <p className="text-blue-100/70 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify [text-justify:inter-ideograph]">
                        常态柔软可穿戴，受冲击时<strong className="text-white">毫秒级瞬时硬化</strong>形成防护层。太力已打通从纳米粒子自主合成到终端产品的全链条，<strong className="text-white">单位成本降低 90% 以上</strong>，不再依赖每克 5 至 7 美元的进口粒子。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#004CE5] to-[#002288] border border-blue-400/30 rounded-[2rem] px-10 py-10 lg:px-12 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,76,229,0.2)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/80 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">03</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        专利与研发平台<br />能自己出标准
                    </h3>
                    <p className="text-blue-100/80 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify [text-justify:inter-ideograph]">
                        <strong className="text-white">1200 余项授权专利</strong>，集团研发中心下设 11 个专业研究院、覆盖 31 个研发领域，配套 CNAS 认可实验室与专业弹道实验室；牵头行业标准，并与华南理工大学共建先进功能材料联合实验室。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/30 group-hover:text-white/80 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
