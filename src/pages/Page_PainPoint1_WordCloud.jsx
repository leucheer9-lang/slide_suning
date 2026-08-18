import React from 'react';

const applianceWords = [
    { text: '创维电视', size: 'text-[2rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '创维集团', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '创维大厦', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '酷开', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: 'OLED电视', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '创维股价', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '南山总部', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '哪款电视好', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '创维售后', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '创维数字', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '智能电视推荐', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '高新南一道', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '创维工业园', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '平板电视工厂', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '创维空调', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: 'Mini LED', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '创维总工厂', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '以旧换新', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '创维半导体大厦', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '电视参数对比', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
];

const parkWords = [
    { text: '创维创新谷', size: 'text-[1.8rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '5G+8K园区', size: 'text-[1.6rem]', weight: 'font-black', color: 'text-zinc-200', opacity: 'opacity-100' },
    { text: '工业上楼', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-95' },
    { text: '石岩研发楼', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '省级特色产业园', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '宝安高端产业园', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '宝安产业园', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '科技桃花源', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '楼上研发楼下中试', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '创维彩电总部', size: 'text-[1.3rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '应人石站', size: 'text-[1.2rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-75' },
    { text: '链主园区', size: 'text-[1.1rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-70' },
    { text: '产城综合体', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-500', opacity: 'opacity-65' },
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
                        「品牌隐身」：园区在 AI 答案中被创维家电词淹没
                    </h1>

                    <p className="text-zinc-400 text-[20px] lg:text-[21px] leading-relaxed max-w-[1400px] tracking-wide">
                        「创维」在公开语料里首先是电视品牌。集团办公总部在南山科技园创维大厦，石岩这边又长期被写成工业园、总工厂。企业问「创维」时，AI 先讲产品和股价；问「宝安高端产业园」时，又很少主动点到创新谷——园区没有自己的独立选址词，传统「品牌词铺量」在这里用不上。
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
                                <h3 className="text-[26px] font-bold text-white tracking-widest">家电 / 集团词（AI 默认召回）</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {applianceWords.map((word, idx) => (
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
                                <span className="text-white font-black text-xl">P</span>
                            </div>
                            <div>
                                <h3 className="text-[26px] font-bold text-white tracking-widest">园区 / 选址词（稀疏难召回）</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:gap-y-3.5">
                            {parkWords.map((word, idx) => (
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
                    <p className="text-zinc-200 text-[20px] lg:text-[21px] font-bold leading-relaxed text-justify flex-1">
                        把「创维创新谷」从集团品牌里拆出来，做成可检索的园区实体：绑住宝安高端产业园、5G+8K、工业上楼、石岩研发楼、省级特色产业园这些选址词，让 AI 在「宝安去哪落户」而不是「买哪台电视」时召回创新谷。
                    </p>
                </div>
            </div>
        </div>
    );
}
