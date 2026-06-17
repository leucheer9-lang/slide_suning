import React from 'react';

const basesList = [
    {
        num: '01',
        title: '1. C端和B端搜索意图不同，需要分组优化',
        content: [
            { type: 'paragraph', text: '在F2B2C模式下，C端与B端的AI搜索意图存在巨大差异：' },
            { type: 'bullet', text: 'C端消费者关注“好吃、便宜、方便”等体验（如：性价比高的面包、适合上班族早餐的面包）；' },
            { type: 'bullet', text: 'B端店主则关心“赚钱、好卖、不易滞销”等效益（如：毛利高的面包批发、好卖不容易滞销的面包）。' }
        ]
    },
    {
        num: '02',
        title: '2. 顺应快消品“意图泛化”特性，拦截To C流量',
        content: [
            { type: 'paragraph', text: '消费者极少主动搜索面包具体型号，绝大部分搜索来源于生活痛点与高频场景。GEO的核心在于将桃李面包“植入”这些高频场景词，从而在AI端拦截海量的To C泛流量。' }
        ]
    },
    {
        num: '03',
        title: '3. 隔离食安雷区与负面信息',
        content: [
            { type: 'paragraph', text: '短保“0防腐”在运输与储存中易产生偶发霉变，易被AI抓取误导并放大为食安危机。因此必须单独分组舆情词，建立“食安防波堤”，向AI投喂科普与优质语料以防守净化。' }
        ]
    },
    {
        num: '04',
        title: '4. 针对不同的渠道进行分层转化',
        content: [
            { type: 'paragraph', text: '不同To B销售渠道的选品逻辑截然不同，需要进行分层切分与精准转化：' },
            { type: 'bullet', text: '大型商超：打“正规大品牌供应商”，看重商家资质与供货体量；' },
            { type: 'bullet', text: '小超市：打“便宜实惠型”，看重绝对低价与下沉属性；' },
            { type: 'bullet', text: '批发渠道：打“毛利高、独立包装”，看重利润空间与拆零销售。' }
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
