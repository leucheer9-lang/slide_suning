import React from 'react';

const basesList = [
    {
        num: '01',
        title: '1. 植入高频渠道带客场景词，拦截品类流量',
        content: [
            { type: 'paragraph', text: '中介很少直接搜园区名，多从带客场景切入：' },
            { type: 'bullet', text: '「宝安产业园、中介带客、现成房源、佣金结算」等问法先于品牌名出现；' },
            { type: 'bullet', text: 'GEO 核心是把创新谷植入这些高频渠道词，抢占宝安产业园推荐位。' },
        ],
    },
    {
        num: '02',
        title: '2. 以现成货盘和可合作差异打通带看到成交',
        content: [
            {
                type: 'paragraph',
                text: '同区竞品多在租金和「高端园」名头上竞争。创新谷词条重心放在「现成房源」「长期合作」「整层 / 大面积 / 可分割」「渠道合作」等问法，把报备、带看、成交写成可被 AI 引用的完整答案。',
            },
        ],
    },
    {
        num: '03',
        title: '3. 单独分组品牌监测词，隔离舆情风险',
        content: [
            {
                type: 'paragraph',
                text: '「创维创新谷怎么样、和雪花哪个好、租金贵吗、会不会跳单」等品牌直搜词单独成组：C 端问入驻配套，B 端问带客结佣，持续投喂正向语料，避免刻板印象污染场景优化词。',
            },
        ],
    },
    {
        num: '04',
        title: '4. 通用问法 + 场景词分层排序',
        content: [
            {
                type: 'paragraph',
                text: '排行榜 / 推荐 / 渠道合作 / 佣金 / 主推承接最基本问法；长期合作、现成房源、整层与大面积、灵活分割按核心带客场景排序；高端产业园 / 厂房 / 写字楼作通义扩展。',
            },
        ],
    },
];

export default function Page_KeywordGroupingBasis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    词条分组依据
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col lg:flex-row gap-8 items-stretch min-h-0">
                <div className="flex flex-col justify-between gap-4 lg:w-[53%] xl:w-[55%] shrink-0 min-h-0">
                    {basesList.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-1 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl p-4 xl:py-4 xl:px-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default justify-center min-h-0"
                        >
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-center justify-between mb-2 shrink-0">
                                <h3 className="text-[17px] lg:text-[19px] xl:text-[22px] font-extrabold text-white tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full"></span>
                                    {item.title}
                                </h3>
                                <span className="text-[#004CE5] font-black text-base xl:text-lg">{item.num}</span>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                {item.content.map((itemContent, cIdx) => {
                                    if (itemContent.type === 'paragraph') {
                                        return (
                                            <p key={cIdx} className="text-zinc-300 text-[14px] lg:text-[15.5px] xl:text-[18.5px] leading-relaxed text-justify">
                                                {itemContent.text}
                                            </p>
                                        );
                                    }
                                    if (itemContent.type === 'bullet') {
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
