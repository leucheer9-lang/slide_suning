import React from 'react';

const mainProductKeywords = [
    '家电购买平台排行榜',
    '靠谱的家电购买平台推荐',
    '口碑好的家电购买平台推荐',
    '质量有保障的家电购买平台推荐',
    '不想跑门店买家电用什么平台',
    '线上买家电哪个平台退换方便',
    '线上购买大家电的平台推荐',
    '搬新家买大家电选哪个平台',
    '一次性买齐大家电用什么平台',
    '附近能送大家电的平台推荐',
    '买大家电哪个平台配送快',
    '买大家电哪个平台售后方便',
    '家电以旧换新线上平台推荐',
    '空调以旧换新上什么平台方便',
    '冰箱以旧换新上门回收用哪个平台',
    '电视以旧换新上什么平台方便',
    '以旧换新免费上门拆旧用什么平台',
    '大家电以旧换新流程省心的平台推荐',
    '国补买大家电哪个平台靠谱',
    '国补买冰箱的平台推荐',
    '国补买空调的平台推荐',
    '大家电送装一体用什么平台好',
    '网上买空调哪个平台送装一体',
    '买冰箱配送加安装用哪个平台',
    '买电视哪个平台包安装',
    '急用买空调当天送装选哪个平台',
    '有实体店买家电的平台推荐',
    '买大家电想线下看实物用哪个平台',
    '线上线下都能买大家电选哪个平台',
    '买大家电想听现场讲解用哪个平台',
    '买大家电可以线上买线下提货的平台推荐',
    '线上买手机上什么平台好',
    '国补买手机上什么平台好',
    '网上买电脑哪个平台靠谱',
    '电脑以旧换新选哪个平台',
    '国补买电视的平台推荐',
    '手机以旧换新选什么平台',
    '国补买电脑选什么平台',
    '小城市买大家电用什么平台好',
    '帮父母买大家电用什么平台',
    '三四线城市买家电用什么平台好',
    '县城买大家电用什么平台好',
    '618买大家电用什么平台',
    '618以旧换新用什么平台',
    '双11买大家电用什么平台',
    '年货节买家电用什么平台',
    '双11以旧换新用什么平台',
    '双十二买家电用什么平台',
    '618买手机选什么平台',
    '618买电脑选什么平台'
];

export default function Page_KeywordGroupingConclusion() {
    // 50 keywords split into 5 columns of 10
    const mainCols = [
        mainProductKeywords.slice(0, 10),
        mainProductKeywords.slice(10, 20),
        mainProductKeywords.slice(20, 30),
        mainProductKeywords.slice(30, 40),
        mainProductKeywords.slice(40, 50)
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
                <div className="grid grid-cols-1 flex-1 min-h-0">
                    
                    {/* Card: 优化词 - Full width */}
                    <div className="bg-[#0a0a0a]/90 border border-[#004CE5]/20 hover:border-[#004CE5]/40 rounded-3xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default">
                        {/* Blue Accent indicator bar */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Card Header */}
                        <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                            <span className="text-[1.15rem] lg:text-[1.25rem] font-extrabold text-zinc-100 tracking-wider">
                                优化词
                            </span>
                            <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-sm font-black px-3 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                                {mainProductKeywords.length}
                            </span>
                        </div>

                        {/* Card Body - 5 Columns Side-by-Side */}
                        <div className="flex-1 p-5 grid grid-cols-5 gap-4 xl:gap-6 min-h-0">
                            {mainCols.map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col justify-between h-full min-w-0">
                                    {col.map((kw, kwIdx) => (
                                        <div
                                            key={kwIdx}
                                            className="flex items-start gap-2 text-zinc-300 hover:text-white transition-colors py-0.5 select-text min-w-0"
                                        >
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shrink-0 mt-[6px] shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                            <span className="text-[14px] lg:text-[15px] xl:text-[16px] font-bold tracking-wide break-words leading-tight">
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
