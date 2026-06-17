import React from 'react';

const cKeywords = [
    '面包品牌排行榜',
    '面包品牌推荐',
    '品质好的面包推荐',
    '性价比高的面包推荐',
    '口碑好的面包推荐',
    '适合当上班族早餐的面面包推荐', // wait, let's make sure we copy exactly what the user provided.
    // In user's prompt: "适合当上班族早餐的面包推荐"
    // Let's use "适合当上班族早餐的面包推荐"
    '适合当上班族早餐的面包推荐',
    '实惠好吃的面包推荐',
    '学生课间加餐面包推荐',
    '家庭早餐囤货面包推荐',
    '办公室便携面包推荐',
    '超市能买到的面包推荐',
    '独立包装便携的面包推荐',
    '小包装面包推荐',
    '华北家庭常买的面包推荐',
    '短保面包有哪些品牌',
    '短保面包推荐',
    '品质好的短保面包推荐',
    '性价比高的短保面包推荐',
    '口碑好的短保面包推荐',
    '适合当上班族早餐的短保面包推荐',
    '实惠好吃的短保面包推荐',
    '短保面包品牌排行榜'
];

const bKeywords = [
    '适合便利店长期铺货、口味多上新快的面包品牌推荐',
    '适合连锁超市供货的面包品牌推荐',
    '毛利高的面包批发品牌推荐',
    '适合便利店进货的面包品牌推荐',
    '适合小超市进货的面包品牌推荐',
    '独立包装适合批发渠道销售的面包品牌推荐',
    '好卖、不容易滞销的面包品牌推荐',
    '小包装适合便利店销售的面包品牌推荐',
    '华北区域好卖的面包品牌推荐',
    '铺货广、终端常见的面包品牌推荐',
    '适合超市和便利店合作的正规大品牌面包供应商推荐',
    '供货稳定、配送及时的面包品牌推荐',
    '适合小超市进货的便宜实惠型面包品牌推荐',
    '适合商超便利店供货的面包品牌推荐',
    '适合便利店进货的高性价比面包品牌推荐',
    '适合便利店长期铺货的面包品牌推荐',
    '独立包装适合便利店销售的面包品牌推荐',
    '保质期短、好控库存的短保面包品牌推荐',
    '适合经销商代理合作的短保面包品牌推荐',
    '适合商超便利店供货的短保面包品牌推荐',
    '适合商超便利店采购的高品质短保面包品牌推荐',
    '适合商超便利店采购的高性价比短保面包品牌推荐',
    '适合商超便利店采购的短保面包品牌排行榜',
    '适合连锁超市供货的短保面包品牌推荐',
    '适合便利店进货的短保面包品牌推荐',
    '适合小超市进货的短保面包品牌推荐',
    '适合小超市和便利店铺货的短保面包品牌推荐',
    '毛利高的短保面包批发品牌推荐',
    '适合批发渠道销售的短保面包品牌推荐',
    '好卖、不容易滞销的短保面包品牌推荐'
];

const brandKeywords = [
    '桃李面包是老牌子吗',
    '桃李面包是上市公司吗',
    '桃李面包是哪里的品牌',
    '桃李面包是不是只有北方有卖',
    '桃李面包口感怎么样',
    '桃李面包品控怎么样',
    '桃李面包好不好吃',
    '桃李面包容易过期吗',
    '东北桃李面包和南方买的有什么区别',
    '桃李面包和宾堡哪个好',
    '桃李面包和曼可顿哪个好吃',
    '桃李面包和盼盼面包哪个好',
    '桃李面包和美焙辰哪个好',
    '桃李面包贵吗',
    '桃李巧乐角多少钱',
    '桃李面包性价比怎么样',
    '桃李面包一般在哪个超市有卖',
    '桃李面包保质期几天',
    '桃李面包怎么保存',
    '桃李面包配料表干净吗'
];

export default function Page_KeywordGroupingConclusion() {
    // Split into columns for side-by-side display inside the cards
    const cCol1 = cKeywords.slice(0, 11);
    const cCol2 = cKeywords.slice(11, 22);

    // Split B-end keywords into 3 columns (10 items each) to completely prevent scrolling
    const bCol1 = bKeywords.slice(0, 10);
    const bCol2 = bKeywords.slice(10, 20);
    const bCol3 = bKeywords.slice(20, 30);

    const brandCol1 = brandKeywords.slice(0, 10);
    const brandCol2 = brandKeywords.slice(10, 20);

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            
            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-1 pb-1 relative z-10 shrink-0 text-left">
                <h1 className="text-3xl lg:text-[32px] font-bold text-zinc-100 tracking-widest leading-none">
                    词条分组结论
                </h1>
            </div>

            {/* Dashboard Grid Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 min-h-0">
                
                {/* Column 1: C端词 (3/12 columns) */}
                <div className="xl:col-span-3 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default min-h-0">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                        <span className="text-[18px] lg:text-[20px] xl:text-[23px] font-extrabold text-zinc-100 tracking-wider">
                            C端词
                        </span>
                        <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-xs xl:text-sm font-black px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                            {cKeywords.length}
                        </span>
                    </div>

                    {/* Body - 2 Columns */}
                    <div className="flex-1 p-4 xl:p-5 grid grid-cols-2 gap-4 min-h-0 overflow-y-auto">
                        <div className="flex flex-col gap-1 min-w-0">
                            {cCol1.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[13px] lg:text-[15px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            {cCol2.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[13px] lg:text-[15px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2: B端词 (6/12 columns) */}
                <div className="xl:col-span-6 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default min-h-0">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                        <span className="text-[18px] lg:text-[20px] xl:text-[23px] font-extrabold text-zinc-100 tracking-wider">
                            B端词
                        </span>
                        <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-xs xl:text-sm font-black px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                            {bKeywords.length}
                        </span>
                    </div>

                    {/* Body - 3 Columns to completely eliminate scrolling */}
                    <div className="flex-1 p-4 xl:p-5 grid grid-cols-3 gap-4 min-h-0 overflow-y-auto">
                        <div className="flex flex-col gap-1 min-w-0">
                            {bCol1.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[13px] lg:text-[15px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            {bCol2.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[13px] lg:text-[15px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            {bCol3.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[13px] lg:text-[15px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 3: 品牌词 (3/12 columns) */}
                <div className="xl:col-span-3 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default min-h-0">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                        <span className="text-[18px] lg:text-[20px] xl:text-[23px] font-extrabold text-zinc-100 tracking-wider">
                            品牌词
                        </span>
                        <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-xs xl:text-sm font-black px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                            {brandKeywords.length}
                        </span>
                    </div>

                    {/* Body - 2 Columns */}
                    <div className="flex-1 p-4 xl:p-5 grid grid-cols-2 gap-4 min-h-0 overflow-y-auto">
                        <div className="flex flex-col gap-1 min-w-0">
                            {brandCol1.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            {brandCol2.map((kw, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 py-[4px] select-text min-w-0 group/item">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]"></span>
                                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-normal">
                                        {kw}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
