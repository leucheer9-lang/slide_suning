import React from 'react';

const officialWords = [
    { text: '无界之境', size: 'text-[1.35rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '芭莎霓彩', size: 'text-[0.85rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '色度', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '色界', size: 'text-[0.75rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-60' },
    { text: '色趣', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '星钻石', size: 'text-[1.15rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '巴里-漫石', size: 'text-[0.9rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '魔幻大师2.0', size: 'text-[1.1rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '臻石釉', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '艺术水泥', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '密缝系列', size: 'text-[1.25rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '柔光砖', size: 'text-[1.15rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '莱姆石', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '惊鸿', size: 'text-[1.15rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '格韵·轻纹', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: 'Master系列', size: 'text-[1.1rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '皮纹系列', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '邸韵系列', size: 'text-[0.85rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-70' },
    { text: '臻彩理石', size: 'text-[1.1rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '密缝·大理石', size: 'text-[1.25rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '星珀石', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '水泥水磨石', size: 'text-[0.9rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '可可西里系列', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '流韵石语', size: 'text-[0.8rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '砂岩', size: 'text-[0.9rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' }
];

const userWords = [
    { text: '防滑地砖', size: 'text-[1.35rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '客厅铺什么砖好看', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '哑光瓷砖', size: 'text-[1.15rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '灰色大理石瓷砖', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '看起来无缝的砖', size: 'text-[1.1rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '耐脏地砖', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '高级灰地砖', size: 'text-[1.1rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '卫生间防滑砖', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '厨房贴什么墙砖', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '岩板背景墙', size: 'text-[1.1rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '奶油风瓷砖', size: 'text-[1.25rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '素色瓷砖', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '750x1500瓷砖', size: 'text-[1.1rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '卧室木纹砖', size: 'text-[1.05rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '免美缝的砖', size: 'text-[1.2rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '客餐厅通铺瓷砖', size: 'text-[0.95rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '阳台防滑砖', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '婴儿肌肤触感砖', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-90' },
    { text: '仿石材砖', size: 'text-[0.9rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '极简风装修选什么砖', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '不反光地砖', size: 'text-[0.95rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '便宜耐用的瓷砖', size: 'text-[0.9rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' }
];

export default function Page_PainPoint1_WordCloud() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-1.5 mb-3">
                        <span className="text-zinc-200 text-base tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-lg lg:text-xl">01</span>
                    </div>
                    <h1 className="text-3xl lg:text-[40px] font-black text-white tracking-widest mb-3 leading-tight">
                        产品线繁杂，目标词难以集中
                    </h1>

                    <p className="text-zinc-400 text-[1.1rem] lg:text-[1.2rem] leading-relaxed max-w-[1400px] tracking-wide">
                        整个行业从大类到小类可能有<strong className="text-blue-400 font-extrabold">几百个SKU</strong>，如果<strong className="text-white font-extrabold">逐一撒网优化</strong>每个具体型号或行业术语，<strong className="text-[#004CE5] font-black">预算会被严重稀释</strong>。品牌方往往觉得<strong className="text-white font-extrabold">无从下手</strong>，找不到发力点，导致整个 GEO 项目<strong className="text-blue-400 font-extrabold">极难落地</strong>。
                    </p>
                </div>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-0 pb-4 items-stretch">

                    {/* Left Cloud: Brand Official */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-5 lg:p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        {/* Title */}
                        <div className="flex items-center gap-3 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-lg">B</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-widest">品牌专业命名</h3>
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
                    <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-12 relative">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent absolute"></div>
                        <div className="w-12 h-12 rounded-full bg-[#111] border border-white/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <span className="font-['AlimamaShuHeiTi'] text-xl text-white/60 italic">VS</span>
                        </div>
                    </div>

                    {/* Right Cloud: User Search */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-5 lg:p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        {/* Title */}
                        <div className="flex items-center gap-3 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-lg">C</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-widest">用户口语化需求</h3>
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

                {/* Solution Section: Sleek Spotlight Callout Banner */}
                <div className="mt-2 shrink-0 bg-gradient-to-r from-[#004CE5]/15 via-[#0b0f19] to-[#04060d] border border-[#004CE5]/40 rounded-3xl p-5 lg:py-5 lg:px-6 shadow-[0_0_35px_rgba(0,76,229,0.2)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4">
                    {/* Decorative blue glow spotlight */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-[#004CE5] opacity-25 blur-[55px] rounded-full pointer-events-none"></div>

                    {/* Left: Sleek Icon Badge */}
                    <div className="flex items-center gap-3 shrink-0 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004CE5] to-[#002699] text-white flex items-center justify-center shadow-[0_0_15px_rgba(0,76,229,0.4)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none mb-1">BREAKTHROUGH</span>
                            <span className="text-lg font-black text-white tracking-wider leading-none">破局解法</span>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-[1px] h-10 bg-white/15 shrink-0 relative z-10"></div>

                    {/* Right: Detailed Solution text with keyword highlighting */}
                    <div className="flex-1 z-10">
                        <p className="text-zinc-200 text-sm lg:text-[1.05rem] font-bold leading-relaxed tracking-wide text-justify">
                            我们会通过<strong className="text-white font-extrabold">数据系统</strong>，摸清用户的真实搜索习惯，把几百个繁杂的产品词，<strong className="text-blue-400 font-black">打包提炼成几十个真正带流量、能覆盖绝大多数装修场景的核心词</strong>，把预算集中打在<strong className="text-white font-extrabold">真正能带来转化的词</strong>上。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
