import React from 'react';

export default function Page_PainPoint2_Industry() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-5 xl:p-6">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-3 lg:mb-4 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-2 lg:mb-3">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">03</span>
                    </div>
                    <h1 className="text-3xl lg:text-[38px] font-black text-white tracking-widest mb-2 lg:mb-3 leading-tight">
                        双巨头声量垄断：苏宁在 AI 引用源中被稀释
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        家电 3C 线上，京东是 AI 的「默认答案」，语料库中京东相关的评测、榜单、问答占压倒性比例；天猫紧随其后。<br />
                        「哪里买家电」类高权重内容几乎被双巨头占据引用源，苏宁的差异化优势在 AI 中声量严重不足。
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 min-h-0 pb-4 items-stretch">

                    {/* Left: Citation Dominance Table */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-5 xl:p-6 flex flex-col justify-start gap-2.5 xl:gap-3 relative overflow-hidden shadow-2xl">
                        <div className="text-zinc-200 font-bold text-lg xl:text-xl mb-0 tracking-wider flex items-center gap-2">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                            AI 渠道推荐场景中的声量格局
                        </div>
                        <div className="w-full border border-white/5 rounded-xl bg-black/40 overflow-hidden flex-1 flex flex-col">
                            <table className="w-full h-full text-left border-collapse text-sm sm:text-base xl:text-lg leading-normal">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10 text-zinc-400 font-semibold tracking-wide">
                                        <th className="py-2.5 px-4 xl:py-3.5 xl:px-6 w-[34%] border-r border-white/5">决策场景</th>
                                        <th className="py-2.5 px-4 xl:py-3.5 xl:px-6 w-[33%] text-center border-r border-white/5">AI 默认倾向</th>
                                        <th className="py-2.5 px-4 xl:py-3.5 xl:px-6 w-[33%]">苏宁处境</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.04] transition-colors">
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-[13px] sm:text-[14px] xl:text-[15.5px] text-zinc-200 border-r border-white/5 font-semibold leading-snug">哪里买家电靠谱？</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">京东 / 天猫</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-zinc-400 text-xs sm:text-sm xl:text-[0.95rem] leading-relaxed">渠道推荐位被双巨头占满，苏宁极少被主动召回</td>
                                    </tr>
                                    <tr className="border-b border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-[13px] sm:text-[14px] xl:text-[15.5px] text-zinc-200 border-r border-white/5 font-semibold leading-snug">家电评测 / 购买榜单</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">京东导向</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-zinc-400 text-xs sm:text-sm xl:text-[0.95rem] leading-relaxed">评测、知乎/小红书问答引用源被京东相关内容主导</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.04] transition-colors">
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-[13px] sm:text-[14px] xl:text-[15.5px] text-zinc-200 border-r border-white/5 font-semibold leading-snug">综合大词正面硬拼</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">双巨头垄断</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-zinc-400 text-xs sm:text-sm xl:text-[0.95rem] leading-relaxed">语料体量差距悬殊，正面硬拼投入产出极低</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.04] transition-colors">
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-[13px] sm:text-[14px] xl:text-[15.5px] text-zinc-200 border-r border-white/5 font-semibold leading-snug">细分决策场景</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-center border-r border-white/5 text-[#004CE5] font-black text-base xl:text-lg tracking-wider">尚有空位</td>
                                        <td className="py-[11px] lg:py-[14px] xl:py-[18px] px-4 xl:px-6 text-zinc-400 text-xs sm:text-sm xl:text-[0.95rem] leading-relaxed">以旧换新、送装一体、县镇下沉等场景声量仍严重不足</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right: Differentiation Being Diluted */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="text-zinc-200 font-bold text-lg xl:text-xl mb-4 tracking-wider flex items-center gap-2 shrink-0">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                            苏宁差异化优势 vs AI 声量缺口
                        </div>
                        <div className="flex-1 grid grid-cols-1 gap-3 min-h-0">
                            {[
                                { title: '以旧换新主阵地', desc: '政策与履约经验领先，但 AI 很少把它与苏宁强绑定' },
                                { title: '送装一体服务', desc: '家电履约核心卖点，语料中被京东物流叙事覆盖' },
                                { title: '线下体验 + 零售云下沉', desc: '万店触达县镇的独特能力，在「哪里买」答案中几乎缺席' },
                                { title: '全渠道家电 3C 零售', desc: '平台身份清晰，却在 AI 默认渠道名单中排名靠后' },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 flex items-start gap-4">
                                    <div className="text-[#004CE5] font-black text-xl shrink-0 w-8">{String(idx + 1).padStart(2, '0')}</div>
                                    <div>
                                        <div className="text-white font-bold text-base xl:text-lg tracking-wide mb-1">{item.title}</div>
                                        <div className="text-zinc-400 text-sm xl:text-[0.95rem] leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Solution Section */}
                <div className="mt-2 xl:mt-3 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        用高质量的差异化语料突破头部声量壁垒，在「以旧换新 / 送装一体 / 县镇下沉 / 线下体验」等细分决策场景先取得 AI 推荐优势，避开与双巨头在综合大词上的正面硬拼。
                    </p>
                </div>
            </div>
        </div>
    );
}
