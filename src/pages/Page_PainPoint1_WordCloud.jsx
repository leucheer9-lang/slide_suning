import React from 'react';

const cEndWords = [
    { text: '寄快递哪家便宜', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '京东快递多久能到', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-100', opacity: 'opacity-100' },
    { text: '多少钱', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-[#004CE5]', opacity: 'opacity-95' },
    { text: '几天到', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '上不上门', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '快递丢件怎么赔', size: 'text-[1.5rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '大件家具怎么寄比较划算', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-[#004CE5]/80', opacity: 'opacity-90' },
    { text: '搬家寄行李哪家好', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '上门取件怎么约', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '快递代收点能拒收吗', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '哪些快递送货上门', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '首重续重怎么算', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '家电送装一体要加钱吗', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '生鲜寄递会不会坏', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '寄电脑要不要保价', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-[#004CE5]/70', opacity: 'opacity-80' },
    { text: '同城当天送达', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '寄快递到国外多少钱', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '快递不上门怎么投诉', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '学生党寄行李回家', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '寄电动车怎么寄', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '保价划算吗', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-[#004CE5]/60', opacity: 'opacity-75' },
    { text: '次日达和隔日达区别', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '哪家快递最不容易破损', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-white', opacity: 'opacity-90' },
    { text: '上门退换货流程', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '大件物流哪家便宜', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-[#004CE5]/90', opacity: 'opacity-95' },
    { text: '药品冷链能寄吗', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-400', opacity: 'opacity-80' },
    { text: '快递时效对比', size: 'text-[1.3rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-85' },
    { text: '春节期间还送吗', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-90' },
    { text: '偏远地区加收多少', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '快递单号查询', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-600', opacity: 'opacity-70' }
];

const bEndWords = [
    { text: '一体化供应链服务商推荐', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '电商仓配一体怎么收费', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-100', opacity: 'opacity-100' },
    { text: '能省多少成本', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-[#004CE5]', opacity: 'opacity-95' },
    { text: '库存能不能压下来', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '大促扛不扛得住', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '仓储外包报价方案', size: 'text-[1.5rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '全渠道一盘货怎么做', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '云仓收费标准与起量门槛', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '履约时效SLA怎么定', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-[#004CE5]/80', opacity: 'opacity-90' },
    { text: '三方物流招标流程', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '家电送装一体服务商', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '逆向物流退货处理', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '分仓策略怎么定', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '库存周转天数优化', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/70', opacity: 'opacity-80' },
    { text: 'WMS系统对接难不难', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '快消品供应链外包', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '零担快运整车报价', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '海外仓服务商对比', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '保税仓一件代发', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '医药GSP仓储资质', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/90', opacity: 'opacity-90' },
    { text: '冷链仓温控标准', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '前置仓布局怎么规划', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '月结账期与结算政策', size: 'text-[1.3rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-85' },
    { text: '旺季弹性产能保障', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '发货成本怎么测算', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-[#004CE5]/60', opacity: 'opacity-75' },
    { text: '生产物流线边配送', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '供应链数字化改造', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-90' },
    { text: '物流服务商比价', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '仓库选址规划', size: 'text-[1.1rem]', weight: 'font-light', color: 'text-zinc-600', opacity: 'opacity-70' }
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
                    B端选型与C端寄件，搜索诉求分层
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    物流是典型的“两端分离”生意：付钱的人和体验服务的人常常不是同一批。C端寄件人和收件人只关心“多少钱、几天到、上不上门、坏了赔不赔”；B端的供应链负责人、电商运营与采购则关心“库存能不能压下来、发货成本能省多少、大促扛不扛得住、系统能不能对接”。同一个“京东物流”，在这两类人的AI提问里几乎是两家不同的公司。
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
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">C端寄件人关心：“多少钱、几天到、上不上门、坏了赔不赔”</h3>
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
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">B端供应链负责人关心：“降本多少、库存多久、旺季稳不稳、系统通不通”</h3>
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
                        建立“C端场景答案 + B端选型依据”的双轨语料。C端围绕寄什么、寄到哪、多久到、出问题怎么办这类具体场景，沉淀能被AI直接引用的确定性答案；B端围绕行业方案、成本测算口径、服务标准与可核验的真实案例，输出能被AI当作“选型依据”的结构化内容。
                    </p>
                </div>
            </div>
        </div>
    );
}
