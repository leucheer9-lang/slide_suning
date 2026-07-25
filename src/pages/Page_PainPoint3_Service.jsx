import React from 'react';

const channels = [
    {
        tag: '送装一体',
        title: '履约质量参差',
        points: ['安装预约爽约、师傅水平不一', '送装进度信息不透明引发客诉', '单次事故被泛化为平台服务差'],
    },
    {
        tag: '售后维修',
        title: '第三方服务背锅',
        points: ['品牌厂家售后与平台售后边界模糊', '维修时效与配件问题被记在苏宁头上', '负面语料持续进入 AI 训练池'],
    },
    {
        tag: '零售云加盟',
        title: '门店体验不一致',
        points: ['万店体系下服务标准执行参差', '县镇门店投诉被上升为品牌印象', '线下口碑反向污染线上 AI 答案'],
    },
    {
        tag: '三方 POP',
        title: '价格与信息错乱',
        points: ['非自营商家报价与口径不统一', '假货/劣质服务投诉牵连平台', '类似经销商乱价，传导至平台认知'],
    },
];

export default function Page_PainPoint3_Service() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10">

                {/* Header */}
                <div className="mb-3 lg:mb-4 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-2.5 lg:mb-3">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">04</span>
                    </div>
                    <h1 className="text-3xl lg:text-[40px] xl:text-[44px] font-black text-white tracking-widest mb-2.5 lg:mb-3 leading-tight">
                        服务履约口碑依赖第三方，负面易被 AI 放大
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        送装、售后、加盟店、三方商家的服务质量参差不齐；黑猫投诉与社媒吐槽被 AI 无差别抓取，单点事故极易放大成「苏宁服务差」的平台级负面。
                    </p>
                </div>

                {/* Amplification chain */}
                <div className="shrink-0 mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3 border border-[#004CE5]/35 bg-[#004CE5]/[0.08] rounded-2xl px-5 lg:px-6 py-3 lg:py-3.5">
                    {['第三方履约事故', '黑猫 / 社媒吐槽'].map((step, i) => (
                        <React.Fragment key={step}>
                            {i > 0 && (
                                <span className="text-[#004CE5] text-xl lg:text-2xl font-black shrink-0 leading-none">→</span>
                            )}
                            <div className="flex-1 min-w-0 text-center text-white text-[17px] lg:text-[20px] xl:text-[22px] font-bold tracking-wide leading-snug">
                                {step}
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                {/* 4 risk strips */}
                <div className="flex-1 flex flex-col gap-3 lg:gap-3.5 min-h-0 pb-1">
                    {channels.map((card, idx) => (
                        <div
                            key={card.tag}
                            className="flex-1 min-h-0 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-stretch overflow-hidden"
                        >
                            <div className="w-[72px] lg:w-[88px] xl:w-[100px] shrink-0 bg-[#004CE5]/10 border-r border-white/10 flex items-center justify-center">
                                <span className="text-[#004CE5] font-black text-[28px] lg:text-[34px] xl:text-[40px] tracking-wider leading-none">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="w-[240px] lg:w-[280px] xl:w-[320px] shrink-0 px-5 lg:px-6 xl:px-7 flex flex-col justify-center border-r border-white/10">
                                <div className="text-[#4B8BFF] text-[16px] lg:text-[17px] font-bold tracking-widest mb-1.5 lg:mb-2">
                                    {card.tag}
                                </div>
                                <div className="text-white text-[26px] lg:text-[30px] xl:text-[34px] font-black tracking-wider leading-tight">
                                    {card.title}
                                </div>
                            </div>

                            <div className="flex-1 min-w-0 px-5 lg:px-7 xl:px-8 py-2.5 lg:py-3 flex items-center">
                                <ul className="w-full grid grid-cols-1 gap-1.5 lg:gap-2">
                                    {card.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-center gap-3 text-zinc-200 text-[18px] lg:text-[20px] xl:text-[22px] leading-snug tracking-wide"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
