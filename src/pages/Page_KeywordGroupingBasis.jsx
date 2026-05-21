import React from 'react';

const basesList = [
    {
        desc: 'SKU太多，找到真正的有效词条'
    },
    {
        desc: '匹配真实的营收数据，避免平均用力'
    },
    {
        desc: '隔离行业雷区与负面信息'
    },
    {
        desc: '针对不同目标客群进行分层转化'
    },
    {
        desc: '扬长避短，先在细分优势上战胜竞品'
    }
];

export default function Page_KeywordGroupingBasis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4">

                {/* Header Section */}
                <div className="shrink-0 mb-2">
                    <h1 className="text-4xl lg:text-[46px] font-black text-white tracking-widest leading-tight">
                        词条分组依据
                    </h1>
                </div>

                {/* 5-Column Cards Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 shrink-0">
                    {basesList.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0a0a0a] border border-[#004CE5]/15 hover:border-[#004CE5]/50 rounded-2xl p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default justify-center min-h-[80px]"
                        >
                            {/* Luminous indicator bar using brand accent blue #004CE5 */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>

                            {/* Description text */}
                            <p className="text-zinc-200 text-[0.98rem] lg:text-[1.05rem] leading-relaxed font-bold tracking-wide">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Image Container (stretched to fit remaining height) */}
                <div className="w-full flex-1 relative bg-white/[0.01] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center group shadow-2xl min-h-[350px] lg:min-h-[440px]">
                    <img
                        src="/Add_Charts/keyword-grouping-basis.png"
                        alt="词条分组依据图"
                        className="absolute inset-0 w-full h-full object-contain p-0 z-20"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />

                    {/* Placeholder UI */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none p-4">
                        <div className="w-16 h-16 mb-4 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 text-lg lg:text-xl font-bold tracking-widest text-center">
                            词条分组概念推导图
                        </span>
                        <span className="text-zinc-500/80 text-xs mt-2 font-mono">
                            文件路径: /Add_Charts/keyword-grouping-basis.png
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
