import React from 'react';

const storageWords = [
    { text: '真空压缩袋', size: 'text-[2rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '太力压缩袋', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '压缩袋十大品牌', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '收纳袋', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '吸盘挂钩', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '免抽气压缩袋', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '太力家庭用品', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '会不会漏气', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '塑料家庭用品', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '被子收纳袋', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '换季收纳', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '轻工制造', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '抽气泵', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '无痕挂钩', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '收纳好物', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '太力旗舰店', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '家居收纳', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '免钉免胶扶手', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '租房好物', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '太力宜尚', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
];

const materialWords = [
    { text: '高性能纳米材料', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '剪切增稠纳米流体', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '防刺割手套', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '航天真空封装', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '机器人防护材料', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '柔性防弹衣', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '蘑菇搭扣', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '功能粘胶', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '气调保鲜膜', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '警标 A 类', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '太力科技 301595', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '专精特新小巨人', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '纳米防护涂层', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-65' },
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
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">
                <div className="mb-4 lg:mb-6">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">01</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        「身份错位」：AI 把太力答成塑料家居用品公司
                    </h1>

                    <p className="text-zinc-400 text-[20px] lg:text-[21px] leading-relaxed max-w-[1400px] tracking-wide text-justify [text-justify:inter-ideograph]">
                        「太力」在公开语料里首先是真空压缩袋。导购榜把它排第一，但挂靠的主体名仍是已废弃的「中山市太力家庭用品制造有限公司」；同花顺按轻工制造—家居用品归类，百度百科写「专业塑料家庭用品企业」。官网讲纳米材料和安全防护，这套叙事在外部语料里几乎没有落点——问「太力是不是新材料公司」，AI 会用它自己的年报数据回答「不是」。
                    </p>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 min-h-0 pb-4 items-stretch">
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 xl:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        <div className="flex items-center gap-4 mb-6 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-xl">A</span>
                            </div>
                            <div>
                                <h3 className="text-[26px] font-bold text-white tracking-widest">收纳 / 导购词（AI 默认召回）</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {storageWords.map((word, idx) => (
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

                    <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-16 relative">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent absolute"></div>
                        <div className="w-16 h-16 rounded-full bg-[#111] border border-white/20 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <span className="font-['AlimamaShuHeiTi'] text-2xl text-white/60 italic">VS</span>
                        </div>
                    </div>

                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 xl:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        <div className="flex items-center gap-4 mb-6 shrink-0">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-xl">M</span>
                            </div>
                            <div>
                                <h3 className="text-[26px] font-bold text-white tracking-widest">材料 / 防护词（稀疏难召回）</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {materialWords.map((word, idx) => (
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

                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-[16px] lg:text-[18px] font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-[20px] lg:text-[21px] font-bold leading-relaxed text-justify [text-justify:inter-ideograph] flex-1">
                        不否认收纳第一，而是把它变成材料能力的证据：让「航天真空封装」「剪切增稠纳米流体」「防刺割」「壁挂连接材料」成为可检索的独立实体，把太力从品类榜单搬进材料供应商名单。
                    </p>
                </div>
            </div>
        </div>
    );
}
