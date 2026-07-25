import React from 'react';

const productBrandWords = [
    { text: '海尔', size: 'text-[2rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '美的', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '格力', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '苹果', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '华为', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '小米', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '卡萨帝', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '西门子', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '容声', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: 'iPhone 16', size: 'text-[1.5rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: 'MacBook', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: 'Mate 70', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '2000元冰箱推荐', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '嵌入式洗碗机', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '一级能效空调', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '洗烘一体机', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: 'OLED电视', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '方太', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '老板电器', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '戴森吸尘器', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '科沃斯', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '哪款洗衣机好', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '性价比手机', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '变频空调排行', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '海信电视', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '松下冰箱', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
];

const channelWords = [
    { text: '苏宁易购', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '以旧换新', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '送装一体', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '国补购机', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '家电套购', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '哪里买家电靠谱', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '家电哪里买划算', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '线下体验店', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '零售云', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '县镇下沉', size: 'text-[1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-65' },
    { text: '京东', size: 'text-[1.5rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '天猫', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '拼多多', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-75' },
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
                        「渠道隐身」：平台在 AI 答案中被商品品牌淹没
                    </h1>

                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        苏宁售卖的是海尔、美的、苹果、华为等第三方品牌商品，自身几乎没有独立「产品词」。用户问「2000 元买什么冰箱好」时，AI 推荐的是产品型号与品牌，极少主动提及渠道；问「家电哪里买靠谱」时，又往往默认京东/天猫——传统「产品词铺量」的 GEO 打法对平台完全失效。
                    </p>
                </div>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 min-h-0 pb-4 items-stretch">

                    {/* Left Cloud: Product Brands */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 xl:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        <div className="flex items-center gap-4 mb-6 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-xl">P</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-widest">商品品牌词（AI 默认召回）</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {productBrandWords.map((word, idx) => (
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

                    {/* Right Cloud: Channel Words */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 xl:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        <div className="flex items-center gap-4 mb-6 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-xl">C</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-widest">渠道/服务词（稀疏难召回）</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {channelWords.map((word, idx) => (
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
                        构建「渠道 + 服务 + 场景」专属词库，把苏宁与「以旧换新、送装一体、国补购机、家电套购」等购买决策环节强绑定，抢占 AI 的「渠道推荐位」而非「产品参数位」。
                    </p>
                </div>
            </div>
        </div>
    );
}
