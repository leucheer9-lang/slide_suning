import React from 'react';

export default function Page_PainPoint4_SalesModel_Solution() {
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
                {/* No description paragraph here per user request */}

                {/* Main Content: Image Position */}
                <div className="flex-1 flex items-center justify-center min-h-0 pb-2">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <img 
                            src="/Summit/painpoint-img-3-solution.png" 
                            alt="“0防腐”带来的食安双刃剑，偶发性变质极易被AI抓取放大 解法" 
                            className="max-h-full max-w-full object-contain rounded-lg"
                        />
                    </div>
                </div>

                {/* Solution Section */}
                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-zinc-200 text-lg lg:text-[20px] font-bold leading-relaxed text-justify flex-1">
                        建立品牌数据库 + 主动纠偏 + 正向语料干预 (详见方案第四部分)
                    </p>
                </div>
            </div>
        </div>
    );
}
