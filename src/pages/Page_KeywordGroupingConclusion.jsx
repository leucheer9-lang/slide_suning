import React from 'react';

const mainProductKeywords = [
    '瓷砖品牌排行榜',
    '瓷砖品牌推荐',
    '性价比高的瓷砖推荐',
    '质量好的瓷砖推荐',
    '口碑好的瓷砖推荐',
    '知名品牌品控好的瓷砖推荐',
    '符合现代家装审美的瓷砖推荐',
    '厨房卫生间专用瓷砖推荐',
    '防渗污好清理的瓷砖推荐',
    '耐磨防刮不留划痕的瓷砖推荐',
    '能实现地面无缝效果的瓷砖推荐',
    '客厅通铺瓷砖推荐',
    '电视背景墙瓷砖推荐',
    '岛台瓷砖推荐',
    '安全环保的瓷砖推荐',
    '符合年轻人审美的瓷砖推荐',
    '密缝铺贴全套落地的瓷砖品牌推荐',
    '温润质感的瓷砖推荐',
    '平整度高无水波纹反光的瓷砖推荐',
    '大理石瓷砖推荐',
    '仿古砖推荐',
    '木纹砖推荐',
    '柔光砖推荐',
    '哑光砖推荐',
    '卧室瓷砖推荐',
    '阳台瓷砖推荐',
    '整装定制瓷砖推荐',
    '大平层瓷砖推荐',
    '写字楼瓷砖推荐'
];

const newProductKeywords = [
    '岩板品牌排行榜',
    '岩板品牌推荐',
    '口碑好的岩板推荐',
    '国产岩板推荐',
    '大规格岩板推荐',
    '高端装修岩板推荐',
    '连纹、质感好的岩板推荐',
    '全流程交付的岩板品牌推荐',
    '天然原料、无甲醛的岩板推荐',
    '客餐厅背景墙岩板推荐',
    '厨卫岩板推荐',
    '高端家居岩板推荐',
    '全屋定制岩板推荐',
    '别墅豪宅岩板推荐',
    '高端酒店会所岩板推荐',
    '天然奢石纹理的岩板推荐',
    '瑕疵少的岩板推荐',
    '真材实料的岩板推荐',
    '售后有保障的岩板品牌推荐',
    '服务好的岩板品牌推荐'
];

const brandKeywords = [
    '萨米特瓷砖是一线品牌吗',
    '萨米特是几线品牌',
    '萨米特瓷砖是十大品牌之一吗',
    '萨米特瓷砖是哪里生产的',
    '广东萨米特瓷砖怎么样',
    '佛山萨米特瓷砖怎么样',
    '萨米特瓷砖质量怎么样',
    '萨米特瓷砖好不好',
    '萨米特瓷砖翻车率高吗',
    '萨米特与金意陶哪个好',
    '萨米特与东鹏哪个好',
    '萨米特瓷砖和蒙娜丽莎哪个好',
    '萨米特和冠珠区别',
    '萨米特瓷砖贵吗',
    '萨米特瓷砖性价比高吗',
    '萨米特密缝·无间之境欧迪白1200x1800的瓷砖多少钱一块',
    '怎么辨别萨米特瓷砖的真假',
    '萨米特瓷砖专卖店和网上买有什么区别',
    '萨米特瓷砖售后服务怎么样',
    '萨米特瓷砖买多了包退换吗'
];

export default function Page_KeywordGroupingConclusion() {
    // Slices for Main Product (29 keywords split into 3 columns: 10, 10, 9)
    const mainCols = [
        mainProductKeywords.slice(0, 10),
        mainProductKeywords.slice(10, 20),
        mainProductKeywords.slice(20)
    ];

    // Slices for New Product (20 keywords split into 2 columns: 10, 10)
    const newCols = [
        newProductKeywords.slice(0, 10),
        newProductKeywords.slice(10)
    ];

    // Slices for Brand (20 keywords split into 2 columns: 10, 10)
    const brandCols = [
        brandKeywords.slice(0, 10),
        brandKeywords.slice(10)
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

                {/* Dashboard Grid Container */}
                {/* Total 7 columns layout: Card 1 (3 cols), Card 2 (2 cols), Card 3 (2 cols) */}
                <div className="grid grid-cols-1 xl:grid-cols-7 gap-5 lg:gap-6 flex-1 min-h-0">
                    
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
                                            <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0 mt-1.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                            <span className="text-[0.87rem] lg:text-[0.94rem] xl:text-[1rem] font-bold tracking-wide break-words leading-tight">
                                                {kw}
                                            </span>
                                        </div>
                                    ))}
                                    {/* Empty items buffer to balance height spacing if column has 9 items */}
                                    {col.length < 10 && (
                                        <div className="py-0.5 min-h-[30px] invisible"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: 新品词（岩板）- Spans 2 columns */}
                    <div className="xl:col-span-2 bg-[#0a0a0a]/90 border border-[#004CE5]/20 hover:border-[#004CE5]/40 rounded-3xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default">
                        {/* Blue Accent indicator bar */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        {/* Card Header */}
                        <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                            <span className="text-[1.15rem] lg:text-[1.25rem] font-extrabold text-zinc-100 tracking-wider">
                                新品词（岩板）
                            </span>
                            <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-sm font-black px-3 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                                {newProductKeywords.length}
                            </span>
                        </div>

                        {/* Card Body - 2 Columns Side-by-Side */}
                        <div className="flex-1 p-5 grid grid-cols-2 gap-4 min-h-0">
                            {newCols.map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col justify-between h-full min-w-0">
                                    {col.map((kw, kwIdx) => (
                                        <div
                                            key={kwIdx}
                                            className="flex items-start gap-2 text-zinc-300 hover:text-white transition-colors py-0.5 select-text min-w-0"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0 mt-1.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                            <span className="text-[0.87rem] lg:text-[0.94rem] xl:text-[1rem] font-bold tracking-wide break-words leading-tight">
                                                {kw}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3: 品牌词（负面及错误）- Spans 2 columns */}
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
                                            <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0 mt-1.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                            <span className="text-[0.87rem] lg:text-[0.94rem] xl:text-[1rem] font-bold tracking-wide break-words leading-tight">
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
