import React from 'react';

const officialWords = [
    { text: '冠珠华脉', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '冠珠华珍', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '冠珠韶华', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '金丝', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '丝绒系列', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '风物纪系列', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '观斓系列', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '臻石', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '琉光', size: 'text-[1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '臻石密境', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '万象系列', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '原石秘境', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '漫天石系列', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '明镜石系列', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '美拉德系列', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '魔术星', size: 'text-[1.1rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '抛釉系列', size: 'text-[1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '魔术师岩板', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '冠珠岩板', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '柔光系列', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '肌肤釉', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '西慕水泥', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '克拉系列', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '境界石', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '微光石', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '时光印记', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '静岚石', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '素色水泥', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '悦木系列', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '科技布纹', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '臻石3.0', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '防滑砖', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '现代仿古', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '大理石瓷砖', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '斑点通体大理石', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '天玑臻', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '明珠源石', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '冠珠艺术砖', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '艺术花砖', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '综合产品', size: 'text-[1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-65' },
    { text: '配套产品', size: 'text-[1.1rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '岩板(定制)', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '仿古砖(定制)', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '哑光砖(定制)', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '全抛釉(定制)', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '景观砖(定制)', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '抛光石', size: 'text-[1.1rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '专(定制)', size: 'text-[1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-65' },
    { text: '内墙砖(定制)', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-300', opacity: 'opacity-80' },
];

const userWords = [
    { text: '防滑地砖', size: 'text-[2rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '客厅铺什么砖好看', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '哑光瓷砖', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '灰色大理石瓷砖', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '看起来无缝的砖', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '好打理的瓷砖', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '耐脏地砖', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '高级灰地砖', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '木纹砖好不好', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '卫生间防滑砖', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '厨房贴什么墙砖', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '岩板背景墙', size: 'text-[1.5rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '便宜耐用的瓷砖', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '奶油风瓷砖', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '不反光地砖', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '素色瓷砖', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '大规格瓷砖', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '750x1500瓷砖', size: 'text-[1.5rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '婴儿肌肤触感砖', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '仿石材砖', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '网红小花砖', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '阳台防滑砖', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '卧室木纹砖', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '客餐厅通铺瓷砖', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '免美缝的砖', size: 'text-[1.5rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '亮面好还是哑光好', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '极简风装修选什么砖', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
];

export default function Page_PainPoint1_WordCloud() {
    const getScaledSize = (sizeStr) => {
        const match = sizeStr.match(/text-\[(\d+(\.\d+)?)rem\]/);
        if (match) {
            const val = parseFloat(match[1]);
            // Scale down by 8% (multiplier 0.92), floor at 0.90rem to ensure excellent readability
            const scaledVal = Math.max(val * 0.92, 0.90);
            return `${scaledVal.toFixed(2)}rem`;
        }
        return '1rem';
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4 lg:mb-6">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">01</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        产品线繁杂，目标词难以集中
                    </h1>

                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        整个行业从大类到小类可能有几百个SKU，如果逐一撒网优化每个具体型号或行业术语，预算会被严重稀释。品牌方往往觉得无从下手，找不到发力点，导致整个 GEO 项目极难落地。
                    </p>
                </div>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 min-h-0 pb-4 items-stretch">

                    {/* Left Cloud: Brand Official */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 xl:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        {/* Title */}
                        <div className="flex items-center gap-4 mb-6 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-xl">B</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-widest">品牌专业命名</h3>
                            </div>
                        </div>

                        {/* Word Cloud Container */}
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {officialWords.map((word, idx) => (
                                <span
                                    key={idx}
                                    style={{ fontSize: getScaledSize(word.size) }}
                                    className={`${word.weight} ${word.color} ${word.opacity} hover:scale-110 hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block`}
                                >
                                    {word.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* VS Divider */}
                    <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-16 relative">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent absolute"></div>
                        <div className="w-16 h-16 rounded-full bg-[#111] border border-white/20 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <span className="font-['AlimamaShuHeiTi'] text-2xl text-white/60 italic">VS</span>
                        </div>
                    </div>

                    {/* Right Cloud: User Search */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 xl:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        {/* Title */}
                        <div className="flex items-center gap-4 mb-6 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-xl">C</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-widest">用户口语化需求</h3>
                            </div>
                        </div>

                        {/* Word Cloud Container */}
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {userWords.map((word, idx) => (
                                <span
                                    key={idx}
                                    style={{ fontSize: getScaledSize(word.size) }}
                                    className={`${word.weight} ${word.color} ${word.opacity} hover:scale-110 hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block`}
                                >
                                    {word.text}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Solution Section */}
                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        我们会通过数据系统，摸清用户的真实搜索习惯，把几百个繁杂的产品词，打包提炼成几十个真正带流量、能覆盖绝大多数装修场景的核心词，把预算集中打在真正能带来转化的词上。
                    </p>
                </div>
            </div>
        </div>
    );
}
