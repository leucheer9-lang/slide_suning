import React from 'react';

const mainProductKeywords = [
    '瓷砖品牌排行榜',
    '瓷砖品牌推荐',
    '质量好的瓷砖推荐',
    '性价比高的瓷砖推荐',
    '口碑好的瓷砖推荐',
    '知名品牌品控好的瓷砖推荐',
    '适合现代家装审美的瓷砖推荐',
    '遇水防滑的瓷砖推荐',
    '防渗污好打理的瓷砖推荐',
    '客厅通铺大板瓷砖推荐',
    '超平整无波纹的瓷砖推荐',
    '厨房专用瓷砖推荐',
    '质量好防渗污的柔光砖推荐',
    '同批次无色差瓷砖推荐',
    '工程集采不断供的瓷砖品牌推荐',
    '能一站式买齐的全屋瓷砖推荐',
    '适合商场公装的瓷砖推荐',
    '背景墙瓷砖推荐',
    '建筑外墙专用岩板推荐',
    '适合新中式风格的瓷砖推荐',
    '安全不脱落的超薄岩板推荐',
    '适合大平层别墅的大规格瓷砖推荐',
    '提供包铺贴指导服务的瓷砖推荐',
    '卫生间专用瓷砖推荐',
    '质量好防渗污的哑光砖推荐',
    '新中式瓷砖品牌排行榜',
    '质量好的新中式瓷砖推荐',
    '知名品牌品控好的新中式瓷砖推荐',
    '新中式背景墙瓷砖推荐',
    '适合大平层别墅的大规格新中式瓷砖推荐'
];

const brandKeywords = [
    '冠珠瓷砖是一线品牌吗',
    '冠珠是几线品牌',
    '冠珠瓷砖是十大品牌之一吗',
    '冠珠瓷砖是哪里生产的',
    '广东冠珠瓷砖怎么样',
    '佛山冠珠瓷砖怎么样',
    '冠珠瓷砖质量怎么样',
    '冠珠瓷砖好不好',
    '冠珠瓷砖翻车率高吗',
    '冠珠与马可波罗哪个好',
    '冠珠与东鹏哪个好',
    '冠珠瓷砖和蒙娜丽莎哪个好',
    '冠珠和萨米特区别',
    '冠珠瓷砖贵吗',
    '冠珠瓷砖性价比高吗',
    '冠珠月影清辉-臻石琉光800x800的瓷砖多少钱一块',
    '怎么辨别冠珠瓷砖的真假',
    '冠珠瓷砖专卖店和网上买有什么区别',
    '冠珠瓷砖售后服务怎么样',
    '冠珠瓷砖买多了包退换吗'
];

export default function Page_KeywordGroupingConclusion() {
    // Slices for Main Product (30 keywords split into 3 columns: 10, 10, 10)
    const mainCols = [
        mainProductKeywords.slice(0, 10),
        mainProductKeywords.slice(10, 20),
        mainProductKeywords.slice(20, 30)
    ];

    // Slices for Brand (20 keywords split into 2 columns: 10, 10)
    const brandCols = [
        brandKeywords.slice(0, 10),
        brandKeywords.slice(10, 20)
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-6 px-6 lg:pt-6 lg:pb-8 lg:px-8 xl:pt-8 xl:pb-10 xl:px-12">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            
            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 gap-5 lg:gap-6 min-h-0">
                
                {/* Header Section */}
                <div className="shrink-0">
                    <h1 className="text-4xl lg:text-[46px] font-black text-white tracking-widest leading-none">
                        词条分组结论
                    </h1>
                </div>

                {/* Dashboard Grid Container - Rearranged to a perfectly balanced 5-column grid */}
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8 flex-1 min-h-0">
                    
                    {/* Card 1: 主要产品词（瓷砖）- Spans 3 columns */}
                    <div className="xl:col-span-3 bg-[#0a0a0a]/90 border border-[#004CE5]/20 hover:border-[#004CE5]/40 rounded-3xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default">
                        {/* Blue Accent indicator bar */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Card Header */}
                        <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                            <span className="text-[1.15rem] lg:text-[1.25rem] font-extrabold text-zinc-100 tracking-wider">
                                主要产品词（瓷砖）
                            </span>
                            <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-sm font-black px-3 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                                {mainProductKeywords.length}
                            </span>
                        </div>

                        {/* Card Body - 3 Columns Side-by-Side */}
                        <div className="flex-1 p-5 grid grid-cols-3 gap-6 xl:gap-8 min-h-0">
                            {mainCols.map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col justify-between h-full min-w-0">
                                    {col.map((kw, kwIdx) => (
                                        <div
                                            key={kwIdx}
                                            className="flex items-start gap-2 text-zinc-300 hover:text-white transition-colors py-0.5 select-text min-w-0"
                                        >
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shrink-0 mt-[6px] shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                            <span className="text-[15px] lg:text-[16px] xl:text-[18px] font-bold tracking-wide break-words leading-tight">
                                                {kw}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: 品牌词（负面及错误）- Spans 2 columns */}
                    <div className="xl:col-span-2 bg-[#0a0a0a]/90 border border-[#004CE5]/20 hover:border-[#004CE5]/40 rounded-3xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default">
                        {/* Blue Accent indicator bar */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Card Header */}
                        <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                            <span className="text-[1.15rem] lg:text-[1.25rem] font-extrabold text-zinc-100 tracking-wider">
                                品牌词（负面及错误）
                            </span>
                            <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-sm font-black px-3 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                                {brandKeywords.length}
                            </span>
                        </div>

                        {/* Card Body - 2 Columns Side-by-Side */}
                        <div className="flex-1 p-5 grid grid-cols-2 gap-4 min-h-0">
                            {brandCols.map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col justify-between h-full min-w-0">
                                    {col.map((kw, kwIdx) => (
                                        <div
                                            key={kwIdx}
                                            className="flex items-start gap-2 text-zinc-300 hover:text-white transition-colors py-0.5 select-text min-w-0"
                                        >
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shrink-0 mt-[6px] shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                            <span className="text-[15px] lg:text-[16px] xl:text-[18px] font-bold tracking-wide break-words leading-tight">
                                                {kw}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
