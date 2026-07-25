import React from 'react';

export default function Page_BrandInfo() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 lg:pt-5 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">品牌基础信息</h1>
            </div>

            <div className="flex-1 w-full max-w-[1500px] mx-auto px-8 lg:px-12 pb-5 relative z-10 flex flex-col justify-start gap-4 min-h-0">

                {/* 核心数据 Metrics */}
                <div className="grid grid-cols-4 gap-5 lg:gap-6 w-full shrink-0">
                    {[
                        { label: '成立时间', value: '35+', sub: '年' },
                        { label: 'A股上市', value: '002024', sub: '2004深交所' },
                        { label: '零售云加盟店', value: '9,401', sub: '家' },
                        { label: '2025营收', value: '489.6', sub: '亿元' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111] border border-white/10 border-t-[6px] border-t-zinc-600 rounded-2xl px-5 py-4 shadow-2xl flex flex-col items-center justify-center relative group hover:border-white/30 hover:border-t-[#004CE5] transition-colors text-center"
                        >
                            <span className="text-zinc-400 text-[1rem] tracking-widest mb-1.5 font-bold">{item.label}</span>
                            <div className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
                                {item.value} <span className="text-lg lg:text-xl text-zinc-500 font-normal">{item.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 基础信息 & 核心定位 */}
                <div className="grid grid-cols-2 gap-5 lg:gap-6 w-full shrink-0">
                    <div className="bg-[#111] border border-white/10 border-l-[6px] border-l-zinc-600 rounded-2xl px-6 py-5 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-widest mb-2.5 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            品牌基础简介
                        </h3>
                        <p className="text-zinc-300 text-[1.05rem] lg:text-[1.1rem] leading-[1.7] text-justify tracking-wide">
                            苏宁易购创立于 <strong className="text-white">1990 年</strong>，由家电专营连锁起家，历经<strong className="text-white">「线下连锁 → 线上电商 → 全场景智慧零售」</strong>三次转型，现为国内头部家电 3C 全渠道零售商。经历 2021 年流动性危机后大幅收缩，目前聚焦家电 3C 主业，2024、2025 连续两年盈利（2025 归母净利 5,814 万）。
                        </p>
                    </div>

                    <div className="bg-[#111] border border-white/10 border-l-[6px] border-l-[#004CE5] rounded-2xl px-6 py-5 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-widest mb-2.5 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            品牌核心定位
                        </h3>
                        <p className="text-zinc-300 text-[1.05rem] lg:text-[1.1rem] leading-[1.7] text-justify tracking-wide">
                            <strong className="text-white text-[1.1rem] lg:text-[1.15rem]">「家电 3C 全渠道零售服务商」</strong>，2026 年起升级为<strong className="text-[#004ce5]">「智慧生活服务商 / 家庭生活管家」</strong>。以家电 3C 为基本盘，AI 技术为驱动，场景体验为内核，<strong className="text-white">「供应链 + 即时服务」</strong>为两翼。
                        </p>
                    </div>
                </div>

                {/* 目标客群 */}
                <div className="flex-1 min-h-0 bg-[#111] border border-white/10 border-t-[3px] border-t-zinc-600 rounded-2xl px-6 py-5 lg:px-8 lg:py-6 shadow-2xl w-full relative hover:border-white/30 transition-colors flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-widest mb-4 flex items-center gap-3 shrink-0">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        目标客群
                    </h3>

                    <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 p-5 lg:p-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第一类：C 端家庭消费者</h4>
                            <p className="text-[1.05rem] lg:text-[1.15rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                家电换新 / 以旧换新主力人群，看重<strong className="text-zinc-200">一站式购买、送装一体与本地化服务</strong>。
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 p-5 lg:p-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第二类：县镇 / 社区下沉用户</h4>
                            <p className="text-[1.05rem] lg:text-[1.15rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                通过零售云加盟店触达，看重<strong className="text-zinc-200">就近体验、性价比与售后</strong>。
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 p-5 lg:p-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第三类：B 端政企客户</h4>
                            <p className="text-[1.05rem] lg:text-[1.15rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                通过<strong className="text-zinc-200">「易采云」数字化采购平台</strong>服务，2025 年该业务收入同比 +23.18%。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
