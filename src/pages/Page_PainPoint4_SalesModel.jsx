import React from 'react';

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">
                <div className="mb-4 lg:mb-5 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">02</span>
                    </div>
                    <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        选址强比价：同区租金同一梯度，AI 只拿单价做答案
                    </h1>
                    <p className="text-zinc-400 text-[20px] lg:text-[21px] leading-relaxed max-w-[1400px] tracking-wide">
                        创新谷、雪花科创城、甲岸美生智谷公开挂牌都在同一价格带。企业问「宝安高端产业园哪家划算」时，AI 几乎只比单价。中介页以面积和租金为主，层高、地铁、补贴、配套各写各的；挂牌价从约 35 元写到 98 元，软文甚至出现 86–138 元。抓到哪一条，就会把哪一条当成事实。
                    </p>
                </div>

                <div className="flex-1 flex flex-col min-h-0 pb-3">
                    <div className="w-full h-full overflow-hidden border border-white/10 rounded-2xl bg-[#0a0a0a] shadow-2xl flex flex-col">
                        <table className="w-full h-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-[18px] lg:text-[20px] font-bold text-zinc-200 tracking-wider">
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[22%]">企业典型提问</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[28%]">AI 易给出的错误结论</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[22%]">混乱从哪来</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[28%]">对创新谷的直接伤害</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[18px] lg:text-[20px]">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">创维创新谷租金多少一平？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">拿 35 元或 138 元当官方价</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">中介挂牌跨度大，软文报价更夸张</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">被看成「报价不靠谱」，或比成贵厂房</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">宝安高端产业园哪家划算？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">只按单价把三家列成同一档，或直接推雪花</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">雪花 60–100、甲岸 65–85，房源页不写配套和政策</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">50–72 元其实最低，却被说成偏贵或进不了推荐</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">石岩通地铁了吗？招人难不难？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">仍按通车前口径说石岩偏远、没地铁</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">13 号线应人石站 2025 年 12 月才开通</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">同区比价时，第一轮就被兴东站上盖劝退</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">入驻有没有租金补贴？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">把「可申报」写成「入园必给三年补贴」</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">中介软文把园区身份夸成到账政策</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">预期落空；省级园身份也没写进比价</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">这是写字楼还是厂房？能做中试吗？</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">按百科写成「创维总工厂」，或按房源网写成普通甲级办公</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">工业园、写字楼、产城综合体各写各的</td>
                                    <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">研产客找不到，纯办公客以为是工厂</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-[16px] lg:text-[18px] font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-[20px] lg:text-[21px] font-bold leading-relaxed text-justify flex-1">
                        建立可溯源的官方口径：租金区间、层高货梯、地铁站点、政策身份、公寓商场配套分开写清楚。向 AI 输出结构化事实，让同区比价从「只比单价」变成比总持有成本，同时压制中介页里的过期报价和夸大补贴。
                    </p>
                </div>
            </div>
        </div>
    );
}
