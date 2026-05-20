import React from 'react';

const officialWords = [
    { text: '无界之境', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '芭莎霓彩', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '色度', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '色界', size: 'text-[0.85rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-60' },
    { text: '色趣', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '星钻石', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '巴里-漫石', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '魔幻大师2.0', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '臻石釉', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '艺术水泥', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '素感水泥', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '素感水泥-韵', size: 'text-[0.9rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-60' },
    { text: '密缝系列', size: 'text-[2rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '水泥水磨石', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '缎光釉', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '精雕釉', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '柔光砖', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '珠光釉', size: 'text-[0.95rem]', weight: 'font-light', color: 'text-zinc-400', opacity: 'opacity-60' },
    { text: '星珀石', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '流韵石语', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '砂岩', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '木纹', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '瓷片', size: 'text-[0.85rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-60' },
    { text: '莱姆石', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '比萨风度', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '惊鸿', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '格韵·轻纹', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '布拉格彩艺', size: 'text-[0.95rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-60' },
    { text: 'Master系列', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '皮纹系列', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '邸韵系列', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '寻迹系列', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '里岛·印象', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '饰界系列', size: 'text-[0.95rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-60' },
    { text: '森林·其景', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '可可西里系列', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '千里山色系列', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '爱装系列', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '臻彩理石', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '密缝·大理石', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '复刻釉', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '透光石', size: 'text-[1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
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
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-6 lg:p-10 xl:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-8">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-6">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">01</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-6 leading-tight">
                        产品线繁杂，目标词难以集中
                    </h1>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-[1400px] tracking-wide">
                        AI引擎在回答用户宽泛问题时，很难将<strong className="text-[#004CE5]">萨米特内部繁杂的专业命名</strong>与<strong className="text-white">用户的口语化需求</strong>对齐。
                    </p>
                </div>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-0 pb-8 items-stretch">

                    {/* Left Cloud: Brand Official */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 lg:p-10 flex flex-col relative overflow-hidden shadow-2xl">
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
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2 lg:gap-x-5 lg:gap-y-3">
                            {officialWords.map((word, idx) => (
                                <span
                                    key={idx}
                                    className={`${word.size} ${word.weight} ${word.color} ${word.opacity} hover:scale-110 hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block`}
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
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 lg:p-10 flex flex-col relative overflow-hidden shadow-2xl">
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
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2 lg:gap-x-5 lg:gap-y-3">
                            {userWords.map((word, idx) => (
                                <span
                                    key={idx}
                                    className={`${word.size} ${word.weight} ${word.color} ${word.opacity} hover:scale-110 hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block`}
                                >
                                    {word.text}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
