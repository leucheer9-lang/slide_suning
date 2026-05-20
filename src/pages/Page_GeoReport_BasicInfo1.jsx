import React from 'react';

export default function Page_GeoReport_BasicInfo1() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-10 lg:pt-14 pb-6 lg:pb-8 relative z-10 shrink-0">
                <h1 className="text-4xl font-black text-white tracking-widest mb-3">报告说明</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    构建具备高置信度与溯源性的客观数据基准
                </p>
            </div>

            <div className="flex-1 w-full max-w-[1300px] mx-auto px-8 pb-6 relative z-10 flex flex-col justify-center gap-5 min-h-0">

                {/* 第一行：项目与产品信息 */}
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-center relative group hover:border-white/30 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-zinc-600"></div>
                        <span className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] tracking-widest mb-1 font-bold">
                            品牌名称
                        </span>
                        <div className="text-2xl lg:text-3xl font-bold text-white tracking-wide mt-1">萨米特</div>
                    </div>

                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col justify-center relative group hover:border-white/30 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-zinc-600"></div>
                        <span className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] tracking-widest mb-1 font-bold">
                            目标产品
                        </span>
                        <div className="text-2xl lg:text-3xl font-bold text-white tracking-wide mt-1">萨米特瓷砖</div>
                    </div>
                </div>

                {/* 第二行：词条配置 */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl w-full relative hover:border-white/30 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-zinc-600"></div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] tracking-widest mb-1 font-bold">
                                监测词条
                            </span>
                            <div className="flex items-end gap-3 mt-1">
                                <span className="text-2xl lg:text-3xl font-bold text-white tracking-wide">共计 20 项核心词条</span>
                                <span className="text-zinc-500 text-[1.05rem] lg:text-lg font-medium mb-1 tracking-wider">/ 每日全频提问一次</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-t-white/5 text-zinc-500 text-[0.95rem] tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block"></span>
                        已针对本产品自动生成监测项采集逻辑，实时覆盖全链路核心表现。
                    </div>
                </div>

                {/* 第三行：数据汇报摘要 */}
                <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl w-full relative overflow-hidden flex flex-col hover:border-white/30 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-600"></div>
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <span className="text-zinc-300 text-[1.2rem] lg:text-[1.3rem] font-bold tracking-widest leading-none">数据汇报总摘要</span>
                        </div>

                        <p className="text-[1.1rem] lg:text-[1.15rem] text-zinc-300 leading-relaxed mb-4 text-justify tracking-wide">
                            从5月19日～5月19日，围绕 <strong className="text-white font-bold px-1">萨米特</strong> 品牌负面评价数据监测工作按计划持续推进。<br />
                            累计执行周期 1 天，覆盖 3 个主流 AI 平台（DeepSeek、豆包、通义千问）。
                        </p>

                        <div className="bg-black/40 border border-white/5 p-5 rounded-xl relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-700/60 rounded-l-xl"></div>
                            <p className="text-[1.0rem] lg:text-[1.05rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                本周共监测 20 个关键词条，在 3 个平台完成 1 天连续查询，合计执行查询 <strong className="text-white font-bold font-mono text-[1.15rem]">60</strong> 次，
                                抓取并识别引用文章 <strong className="text-white font-bold font-mono text-[1.15rem]">659</strong> 篇，同期识别竞品品牌 <strong className="text-white font-bold font-mono text-[1.15rem]">17</strong> 家，
                                截图覆盖率达 <strong className="text-white font-bold font-mono text-[1.15rem]">100%</strong>。各项数据指标均在预期执行范围内，整体运行稳定。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
