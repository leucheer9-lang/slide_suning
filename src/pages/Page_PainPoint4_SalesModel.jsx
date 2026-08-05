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
                    <span className="text-[#004CE5] font-black text-base">02</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    偶发性服务事故极易被AI抓取放大
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    物流服务发生在每天数千万次的线下交付中，破损、延误、丢件、派送纠纷这类个案在任何体量下都不可能归零。这类内容自带情绪和画面，在社交平台的传播效率远高于正常履约。而大模型抓取时并不区分“偶发个案”与“系统性问题”，容易把零星投诉归纳成“这家爱丢件、服务差”，在“哪家快递更靠谱”这类推荐问题上直接扣分。
                </p>

                {/* Main Content: Image Position */}
                <div className="flex-1 flex items-center justify-center min-h-0 pb-0">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <img 
                            src="/Summit/painpoint-img-3.png" 
                            alt="偶发性服务事故极易被AI抓取放大（图片位待替换）" 
                            className="max-h-full max-w-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
