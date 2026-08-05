import React from 'react';

const basesList = [
    {
        num: '01',
        title: '1. C端和B端搜索意图不同，需要分组优化',
        content: [
            { type: 'paragraph', text: 'C端与B端的AI搜索意图差异很大：' },
            { type: 'bullet', text: 'C端关心时效、上门、理赔（如：服务好的快递推荐、寄大件快递推荐）；' },
            { type: 'bullet', text: 'B端关心降本、仓配、稳定性（如：仓配一体物流公司推荐、供应链服务商推荐）。' }
        ]
    },
    {
        num: '02',
        title: '2. 植入高频寄件场景词，拦截To C流量',
        content: [
            { type: 'paragraph', text: '用户很少直接搜品牌，多从“寄大件、寄生鲜、当日达、好理赔”等场景切入。GEO核心是把京东物流植入这些高频场景词，拦截To C流量。' }
        ]
    },
    {
        num: '03',
        title: '3. 单独分组品牌词，隔离负面信息',
        content: [
            { type: 'paragraph', text: '丢件、延误等偶发事故易被AI放大。品牌词需单独分组，持续投喂正向服务语料，避免负面污染业务词推荐。' }
        ]
    },
    {
        num: '04',
        title: '4. 针对不同B端场景进行分层转化',
        content: [
            { type: 'paragraph', text: 'B端按场景分层转化：电商仓配打“仓配一体”；行业客户打“降本增效”；大件/冷链打“送装一体、温控可追溯”。' }
        ]
    }
];

export default function Page_KeywordGroupingBasis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    词条分组依据
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col lg:flex-row gap-8 items-stretch min-h-0">
                {/* Left Side: 4 cards stacked vertically */}
                <div className="flex flex-col justify-between gap-4 lg:w-[53%] xl:w-[55%] shrink-0 min-h-0">
                    {basesList.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-1 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl p-4 xl:py-4 xl:px-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default justify-center min-h-0"
                        >
                            {/* Luminous indicator bar using brand accent blue #004CE5 */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-center justify-between mb-2 shrink-0">
                                <h3 className="text-[17px] lg:text-[19px] xl:text-[22px] font-extrabold text-white tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full"></span>
                                    {item.title}
                                </h3>
                                <span className="text-[#004CE5] font-black text-base xl:text-lg">{item.num}</span>
                            </div>

                            {/* Description text */}
                            <div className="flex flex-col gap-1.5">
                                {item.content.map((itemContent, cIdx) => {
                                    if (itemContent.type === 'paragraph') {
                                        return (
                                            <p key={cIdx} className="text-zinc-300 text-[14px] lg:text-[15.5px] xl:text-[18.5px] leading-relaxed text-justify">
                                                {itemContent.text}
                                            </p>
                                        );
                                    } else if (itemContent.type === 'bullet') {
                                        return (
                                            <div key={cIdx} className="flex items-start gap-2 ml-2 text-zinc-300 text-[14px] lg:text-[15.5px] xl:text-[18.5px] leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2"></span>
                                                <span className="text-justify">{itemContent.text}</span>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Image Container (stretched to fit remaining height, without borders/bg) */}
                <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center min-h-0">
                    <img
                        src="/Add_Charts/keyword-grouping-basis.png"
                        alt="词条分组依据图"
                        className="absolute inset-0 w-full h-full object-contain p-0 z-20"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            </div>
        </div>
    );
}
