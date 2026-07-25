import React from 'react';

export default function Page_PainPoint3_Service_Solution() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8 pb-2.5 lg:pb-4 xl:pb-5">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4 lg:mb-6 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">04</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 leading-tight">
                        服务履约口碑依赖第三方，负面易被 AI 放大
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        要把服务口碑主动权从第三方履约与散落的社媒吐槽中拿回平台手中，需要一套可落地的负面治理闭环。
                    </p>
                </div>

                {/* Main Content: 4-step mechanism */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 min-h-0 pb-2">
                    {[
                        {
                            step: '01',
                            title: '高频溯源',
                            desc: '持续监测黑猫投诉、社媒、问答与 AI 答案中的苏宁服务负面，定位来源页面与传播路径。',
                        },
                        {
                            step: '02',
                            title: '物理拔除',
                            desc: '对错误事实、过期投诉、虚假信息推动下架或更正，切断可被爬虫持续抓取的负面源。',
                        },
                        {
                            step: '03',
                            title: '高维压制',
                            desc: '投放高质量正向服务语料（送装标准、售后时效、官方口径），在权威源上形成覆盖与压制。',
                        },
                        {
                            step: '04',
                            title: '长效防御',
                            desc: '建立品牌数据库与服务口径更新机制，防止加盟店/三方商家信息不一致再次污染 AI 认知。',
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] px-6 py-8 lg:px-7 lg:py-10 xl:px-8 xl:py-12 flex flex-col relative overflow-hidden shadow-2xl">
                            <div className="text-[100px] lg:text-[120px] font-['AlimamaShuHeiTi'] text-white/[0.06] absolute -bottom-3 -right-1 pointer-events-none select-none leading-none">
                                {item.step}
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-1.5 bg-[#004CE5]"></div>
                                <h3 className="text-3xl lg:text-[2.2rem] xl:text-[2.5rem] font-bold text-white tracking-widest leading-tight my-6 lg:my-8">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-200 text-lg lg:text-xl xl:text-[1.35rem] leading-[1.7] tracking-wide flex-1">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Solution Section */}
                <div className="mt-2 lg:mt-2.5 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        建立「高频溯源 — 物理拔除 — 高维压制 — 长效防御」四步走的负面处理机制（对齐方案第四部分），把服务口碑主动权拿回平台手中。
                    </p>
                </div>

            </div>
        </div>
    );
}
