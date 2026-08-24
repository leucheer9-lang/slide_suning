import React from 'react';

/** 末尾 2–3 字不单独掉行 */
function keepEnd(text, n = 6) {
    if (!text || text.length <= n) return text;
    return (
        <>
            {text.slice(0, -n)}
            <span className="whitespace-nowrap">{text.slice(-n)}</span>
        </>
    );
}

export default function Page_PainPoint3_Service_Solution() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8 pb-2.5 lg:pb-4 xl:pb-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">
                <div className="mb-4 lg:mb-6 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-[22px]">04</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 leading-tight">
                        把品牌事实从第三方口径里拿回来
                    </h1>
                    <p className="text-zinc-400 text-[20px] lg:text-[21px] leading-relaxed max-w-[1400px] tracking-wide text-justify [text-justify:inter-ideograph]">
                        公司性质、主体名称、检测认证、技术履历这几件事，不能继续只活在导购榜和旧百科里。需要一套能改错、能覆盖、能防再污染的口径治理。
                    </p>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 min-h-0 pb-2">
                    {[
                        {
                            step: '01',
                            title: '高频溯源',
                            desc: '持续监测榜单、百科、问答和 AI 答案里的太力错误：公司性质、主体名称、总部所在地、上市状态，每一条都记下出处和抓取时间。',
                        },
                        {
                            step: '02',
                            title: '物理拔除',
                            desc: '对旧主体名、「拟上市」、家庭用品制造这类过期表述推动更正或下架，同时收敛旧域名与英文站，切断可被反复抓取的源头。',
                        },
                        {
                            step: '03',
                            title: '高维压制',
                            desc: '在官网补齐技术参数页与认证明细，把授权专利、警标 A 类检测、航天履历写成结构化网页，让 AI 有官方出处可以直接引用。',
                        },
                        {
                            step: '04',
                            title: '长效防御',
                            desc: '建立品牌数据库，在售与在研分开维护。每次航天任务、新认证、新专利都同步到全部官方阵地，让各处口径始终保持一致。',
                        },
                    ].map((item) => (
                        <div key={item.step} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] px-10 py-8 lg:px-10 lg:py-10 xl:px-10 xl:py-12 flex flex-col relative overflow-hidden shadow-2xl">
                            <div className="text-[100px] lg:text-[120px] font-['AlimamaShuHeiTi'] text-white/[0.06] absolute -bottom-3 -right-1 pointer-events-none select-none leading-none">
                                {item.step}
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-1.5 bg-[#004CE5]"></div>
                                <h3 className="text-3xl lg:text-[2.2rem] xl:text-[2.5rem] font-bold text-white tracking-widest leading-tight my-6 lg:my-8">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-200 text-[22px] lg:text-[24px] xl:text-[26px] leading-[1.7] tracking-wide flex-1 text-justify [text-justify:inter-ideograph]">
                                    {keepEnd(item.desc)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-2 lg:mt-2.5 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-[16px] lg:text-[18px] font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-[20px] lg:text-[21px] font-bold leading-relaxed text-justify [text-justify:inter-ideograph] flex-1">
                        建立「高频溯源 — 物理拔除 — 高维压制 — 长效防御」四步走，把品牌事实从第三方口径里收回官方侧（对齐方案第四部分）。
                    </p>
                </div>
            </div>
        </div>
    );
}
