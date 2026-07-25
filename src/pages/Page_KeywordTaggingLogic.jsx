import React from 'react';

export default function Page_KeywordTaggingLogic() {
    const criteria = [
        {
            num: "①",
            title: "非购买意图",
            desc: "AI不会推荐任何品牌，而是以回答“信息”为主",
            badgeClass: "bg-[#404040]/90 border-[#606060]/50 text-white"
        },
        {
            num: "②",
            title: "跟目标产品不符",
            desc: "与品牌定位、客户定位不符",
            badgeClass: "bg-[#4F2EAF]/90 border-[#744BE3]/50 text-white"
        },
        {
            num: "③",
            title: "品类共性",
            desc: "属于行业普遍具备的特点，难以体现品牌差异",
            badgeClass: "bg-[#732053]/90 border-[#9E3374]/50 text-white"
        },
        {
            num: "④",
            title: "产品痛点",
            desc: "涉及产品痛点的问题，若无解决办法，不提缺点",
            badgeClass: "bg-[#144A63]/90 border-[#207299]/50 text-white"
        },
        {
            num: "⑤",
            title: "搜索意图低",
            desc: "用户搜索意图较低，表达意思比较模糊",
            badgeClass: "bg-[#174E45]/90 border-[#287569]/50 text-white"
        },
        {
            num: "⑥",
            title: "重复",
            desc: "与前面的词或搜索意图相同，去掉重复项",
            badgeClass: "bg-[#1E521C]/90 border-[#347A31]/50 text-white"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4">

                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        词条打标逻辑
                    </h1>

                    {/* 6 Criteria Glassmorphic Grid */}
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 mt-1">
                        {/* Larger Section Title */}
                        <div className="text-[18px] lg:text-[20px] xl:text-[22px] text-zinc-100 font-extrabold mb-4 tracking-wider border-b border-white/10 pb-3 flex items-center gap-2.5">
                            <span className="w-2.5 h-5 bg-[#004CE5] rounded shadow-[0_0_12px_rgba(0,76,229,0.6)]"></span>
                            打标依据：
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-4">
                            {criteria.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.15] rounded-xl p-4 lg:p-5 transition-all duration-300 flex flex-col gap-3 group hover:-translate-y-0.5 shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-zinc-400 font-black text-[18px] lg:text-[20px] xl:text-[22px] group-hover:text-zinc-300 transition-colors">
                                            {item.num}
                                        </span>
                                        {/* Significantly larger Capsule Badge */}
                                        <span className={`px-4 lg:px-4.5 py-1.5 rounded-full text-[15px] lg:text-[16.5px] xl:text-[18px] font-extrabold tracking-wider border shadow-md transition-all duration-300 ${item.badgeClass}`}>
                                            {item.title}
                                        </span>
                                    </div>
                                    <p className="text-zinc-200 text-[15px] lg:text-[16.5px] xl:text-[18px] leading-relaxed pl-8 font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Image Container (stretched to fit remaining height with self-adaptive border) */}
                <div className="w-full flex-1 flex items-start justify-start min-h-[220px] lg:min-h-[280px]">
                    <div className="relative h-full w-fit border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01] shadow-2xl flex items-center justify-center">
                        <img
                            src="/Add_Charts/keyword-tagging-logic.png"
                            alt="词条打标逻辑图"
                            className="h-full w-auto object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.className = "w-full h-full relative bg-white/[0.01] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4";
                                const fallback = e.target.parentNode.querySelector('.fallback-ui');
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        {/* Fallback Placeholder UI (initially hidden, shown on error) */}
                        <div className="fallback-ui absolute inset-0 z-10 flex-col items-center justify-center pointer-events-none p-4 hidden">
                            <div className="w-14 h-14 mb-3 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-zinc-300 text-base lg:text-lg font-bold tracking-widest text-center">
                                词条打标依据与逻辑图
                            </span>
                            <span className="text-zinc-500/80 text-[10px] mt-1 font-mono">
                                文件路径: /Add_Charts/keyword-tagging-logic.png
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
