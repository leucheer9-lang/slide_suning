import React from 'react';

const officialWords = [
    { text: '醇熟切片', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '老式豆沙卷', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '全麦熟切片', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '中种发酵工艺', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '603866.SH', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '乳酸菌酵母面包', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '手撕面包', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '起酥面包', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '天然酵母', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '面团发酵工艺', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '全自动生产线', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '主食面包', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '包装烘焙快消', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '牛奶吐司', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '哈里斯风味', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '椰丝椰蓉', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
];

const userWords = [
    { text: '减脂期快手早餐推荐', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '打工人无负担下午茶', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '配料表干净的儿童零食', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '低卡零糖面包推荐', size: 'text-[1.5rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '快手营养早餐', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '健康吐司推荐', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '饱腹低脂代餐', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '高纤维全麦包', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '办公室解馋小点', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '低脂健康代餐推荐', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '儿童营养早餐怎么做', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '减脂主食首选', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '办公室饱腹零食', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
];

export default function Page_PainPoint1_WordCloud() {
    const getScaledSize = (sizeStr) => {
        const match = sizeStr.match(/text-\[(\d+(\.\d+)?)rem\]/);
        if (match) {
            const val = parseFloat(match[1]);
            const scaledVal = Math.max(val * 0.92, 0.90);
            return `${scaledVal.toFixed(2)}rem`;
        }
        return '1rem';
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">01</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    消费决策极短与搜索意图高度泛化，产品词无流量
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-sm lg:text-base leading-relaxed tracking-wide mb-4 shrink-0">
                    短保烘焙是典型的快消品。消费者日常购买往往是“所见即所得”的冲动消费或习惯性复购，绝大多数人不会去搜索引擎或AI引擎里主动搜索“某品牌某具体型号的全麦吐司”。如果去优化具体的产品 SKU，会发现根本没有搜索量；而如果盲目优化“面包”等大词，预算又犹如泥牛入海。
                </p>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 pb-4 items-stretch">

                    {/* Left Cloud: Brand Official SKU/Process */}
                    <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        {/* Title */}
                        <div className="flex items-center gap-4 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-lg">SKU</span>
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">品牌侧重词（内部SKU/工艺）</h3>
                            </div>
                        </div>

                        {/* Word Cloud Container */}
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-3">
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
                    <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-12 relative">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute"></div>
                        <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center z-10 shadow-2xl">
                            <span className="text-lg text-zinc-400 italic font-bold">VS</span>
                        </div>
                    </div>

                    {/* Right Cloud: Consumer Scene/Pain-Point */}
                    <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        {/* Title */}
                        <div className="flex items-center gap-4 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-lg">GEO</span>
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">真实搜索词（场景化/痛点化）</h3>
                            </div>
                        </div>

                        {/* Word Cloud Container */}
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-3">
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
                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[16px] xl:text-[17px] font-bold leading-relaxed text-justify flex-1">
                        摒弃“以产品名为主”的优化逻辑，转向<strong className="text-white">“场景与痛点拦截”</strong>。我们会通过AI意图分析，将短保产品打包植入到目标人群的高频生活场景中。例如，不优化“醇熟吐司”，而是优化“减脂期快手早餐推荐”、“打工人无负担下午茶”、“配料表干净的儿童零食”，使AI在回答此类场景提问时自然输出品牌产品。
                    </p>
                </div>
            </div>
        </div>
    );
}
