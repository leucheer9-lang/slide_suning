import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            <div className="w-full max-w-[1600px] mx-auto mb-10 lg:mb-12 relative z-10 flex flex-col items-start pt-4 lg:pt-6 shrink-0">
                <h1
                    className="text-5xl lg:text-6xl xl:text-[72px] font-black text-white tracking-tight mb-2"
                    style={{ lineHeight: '1.3' }}
                >
                    园区核心<br />能力壁垒
                </h1>
            </div>

            <div className="flex-1 w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch min-h-0 pb-10">

                <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/50 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">01</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        链主在场<br />产业就近配套
                    </h3>
                    <p className="text-zinc-400 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        创维 13 家产业公司的研发生产基地、彩电公司全球总部都在这里。园区约 270 家企业中，<strong className="text-white">5G+8K 上下游近 90 家</strong>，产值超 500 亿元。对供应商来说，这不是「租一块地」，而是挨着客户办公。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#0033aa] to-[#001144] border border-blue-400/20 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,50,200,0.15)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/60 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">02</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        研产办住一体<br />石岩少有的闭环
                    </h3>
                    <p className="text-blue-100/70 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        一期能做<strong className="text-white">工业上楼</strong>，二期、三期做办公；再配约 6 万㎡商场、1,500 套公寓和商务酒店。南山多数甲级楼做不了中试产线，石岩多数旧厂房又没有这套生活配套。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#004CE5] to-[#002288] border border-blue-400/30 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,76,229,0.2)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/80 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">03</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        政策身份<br />可以叠加使用
                    </h3>
                    <p className="text-blue-100/80 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        2023 年获评<strong className="text-white">广东省特色产业园</strong>（新一代电子信息技术，当年深圳唯一），同时是宝安区科技桃花源、深圳市投资推广产业链专业园区。符合条件的企业，租金补贴和落户奖励可以按身份申报。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/30 group-hover:text-white/80 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
