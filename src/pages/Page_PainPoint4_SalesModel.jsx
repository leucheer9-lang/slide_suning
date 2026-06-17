import React from 'react';

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">03</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    “0防腐”带来的食安双刃剑，偶发性变质极易被AI抓取放大
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    短保烘焙核心卖点是新鲜、无防腐剂添加，但终端储藏的温差极易导致保质期内个案霉变。在AI时代，大模型爬虫会无差别抓取这类带强烈负面情绪和视觉冲击的社交媒体争议，将个别保管不当事件归纳总结为品牌严重的质量缺陷，在“安全健康推荐”中扣分。
                </p>

                {/* Main Content: Image Position */}
                <div className="flex-1 flex items-center justify-center min-h-0 pb-0">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <img 
                            src="/Summit/painpoint-img-3.png" 
                            alt="“0防腐”带来的食安双刃剑，偶发性变质极易被AI抓取放大" 
                            className="max-h-full max-w-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
