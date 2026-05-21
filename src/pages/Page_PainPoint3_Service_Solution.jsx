import React from 'react';

export default function Page_PainPoint3_Service_Solution() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8 pb-2.5 lg:pb-4 xl:pb-5">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4 lg:mb-6 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">03</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-0 leading-tight">
                        极度依赖安装水平和售后服务
                    </h1>
                </div>

                {/* Main Content: 1 Wide Image Slot */}
                <div className="flex-1 flex flex-col min-h-0 pb-2 items-stretch">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-2 lg:py-4 lg:px-0 flex flex-col relative overflow-hidden shadow-2xl justify-center items-center">
                        <img src="/Summit/painpoint-img-3-solution.png" alt="售后痛点解决截图" className="w-full h-full object-contain rounded-xl" />
                    </div>
                </div>

                {/* Solution Section */}
                <div className="mt-2 lg:mt-2.5 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        建立品牌数据库 + 主动纠偏 + 正向语料干预（详见方案第四部分）
                    </p>
                </div>

            </div>
        </div>
    );
}
