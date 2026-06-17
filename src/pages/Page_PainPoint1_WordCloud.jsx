import React from 'react';

const cEndWords = [
    { text: '性价比高的面包', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '适合上班族早餐的面包', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-100', opacity: 'opacity-100' },
    { text: '好不好吃', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-[#004CE5]', opacity: 'opacity-95' },
    { text: '便不便宜', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '方不方便', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '减脂期快手早餐推荐', size: 'text-[1.5rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '配料表干净的儿童零食', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-[#004CE5]/80', opacity: 'opacity-90' },
    { text: '打工人无负担下午茶', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '快手营养早餐', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '低脂健康代餐推荐', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '饱腹低脂代餐', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '牛奶吐司推荐', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '儿童营养早餐怎么做', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '减脂主食首选', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '低糖杂粮面包', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-[#004CE5]/70', opacity: 'opacity-80' },
    { text: '全麦面包推荐', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '无蔗糖健康食品', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '好吃不贵的吐司', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '平价学生党早餐', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '打工人饱腹夜宵', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '手撕面包保质期', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-[#004CE5]/60', opacity: 'opacity-75' },
    { text: '低糖吐司热量', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '控糖早餐搭配', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-white', opacity: 'opacity-90' },
    { text: '办公室解馋小零食', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '新鲜即食面包', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-[#004CE5]/90', opacity: 'opacity-95' },
    { text: '高钙儿童早餐', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '全麦面包热量表', size: 'text-[1.3rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-85' },
    { text: '快手代餐吐司', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-90' },
    { text: '低卡吐司片品牌', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '网红吐司配方', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-600', opacity: 'opacity-70' }
];

const bEndWords = [
    { text: '毛利高的面包批发', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '好卖不容易滞销的面包', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-100', opacity: 'opacity-100' },
    { text: '赚不赚钱', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-[#004CE5]', opacity: 'opacity-95' },
    { text: '好不好卖', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '会不会烂在手里', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '短保面包批发政策', size: 'text-[1.5rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '临期退货保障', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '面包起批量与物流配送', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '每日新鲜配送厂家', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-[#004CE5]/80', opacity: 'opacity-90' },
    { text: '便利店进货渠道', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '爆款面包稳定货源', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '高动销产品推荐', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '高溢价短保代理', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '利润率空间', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/70', opacity: 'opacity-80' },
    { text: '商超面包进场费', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '高周转短保面包品牌', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '面包代理招商加盟', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '零食量贩店起批额', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '学校超市面包批发', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '面包冷链配履时效', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/90', opacity: 'opacity-90' },
    { text: '短保滞销报废机制', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-350', opacity: 'opacity-80' },
    { text: '面包中央工厂供货', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '终端渠道返点分成', size: 'text-[1.3rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-85' },
    { text: '临期折扣店进货', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '面包起送标准', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-[#004CE5]/60', opacity: 'opacity-75' },
    { text: '全国工厂物流网点', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '连锁商超供货协议', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-90' },
    { text: '短保烘焙毛利空间', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '面包铺货陈列费', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-600', opacity: 'opacity-70' }
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
                    F2B2C模式下C端与B端决策逻辑割裂
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    面包是典型的F2B2C（工厂-渠道终端-消费者）快消品。买面包的消费者（C端）与卖面包的经销商便利店老板（B端），在AI搜索时的意图决策逻辑有着天壤之别：C端更关心“好不好吃、便不便宜、方不方便”；B端更关心“赚不赚钱、好不好卖、会不会烂在手里”。
                </p>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 pb-4 items-stretch">

                    {/* Left Cloud: C-end Consumer Search */}
                    <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        {/* Title */}
                        <div className="flex items-center gap-4 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-lg">C端</span>
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">C端消费者关心：“好不好吃、便不便宜、方不方便”</h3>
                            </div>
                        </div>

                        {/* Word Cloud Container */}
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-3">
                            {cEndWords.map((word, idx) => (
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

                    {/* Right Cloud: B-end Dealer/Convenience Store Search */}
                    <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        {/* Title */}
                        <div className="flex items-center gap-4 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-lg">B端</span>
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">B端便利店/超市老板关心：“赚不赚钱、好不好卖、会不会烂在手里”</h3>
                            </div>
                        </div>

                        {/* Word Cloud Container */}
                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-3">
                            {bEndWords.map((word, idx) => (
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
                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-4 py-1.5 rounded-lg text-[#004CE5] text-base xl:text-lg font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[16px] xl:text-[17px] font-bold leading-relaxed text-justify flex-1">
                        实施“C端场景拦截 + B端招商引流”的双轨投喂策略。针对C端高频注入“场景词”（如减脂早餐、健康代餐）提升消费心智推荐；针对B端则重点覆盖“痛点词”（如批发利润、控货履约、稳定货源），全方位打消商超老板的压货及流转顾虑。
                    </p>
                </div>
            </div>
        </div>
    );
}
