import React from 'react';

/**
 * 客户视角下的 AI 品牌定位：
 * AI 偏向用户，所以园区自说自话的卖点如果与企业主真实关心的事冲突，
 * 内容发得越多，越容易加深 AI 对园区的误解。
 */

export default function Page_ClientPerspective() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute w-[680px] h-[680px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 -top-40 pointer-events-none z-0" />
            <div className="absolute w-[560px] h-[560px] rounded-full bg-blue-900/[0.05] blur-[150px] -left-24 bottom-10 pointer-events-none z-0" />

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    客户视角下的 AI 品牌定位
                </h1>
            </div>

            {/* 右下角倾斜印章 */}
            <div
                className="absolute z-20 select-none pointer-events-none"
                style={{ right: '40px', bottom: '30px', transform: 'rotate(-12deg)' }}
                aria-hidden
            >
                <svg viewBox="0 0 220 220" width="190" height="190" fill="none">
                    <circle cx="110" cy="110" r="102" stroke="#F59E0B" strokeWidth="3.5" strokeOpacity="0.6" />
                    <circle
                        cx="110"
                        cy="110"
                        r="86"
                        stroke="#F59E0B"
                        strokeWidth="1.6"
                        strokeOpacity="0.4"
                        strokeDasharray="7 6"
                    />
                    <text x="110" y="96" textAnchor="middle" fill="#FBBF24" fontSize="38" fontWeight="900">
                        极容易
                    </text>
                    <text x="110" y="144" textAnchor="middle" fill="#FBBF24" fontSize="38" fontWeight="900">
                        忽略
                    </text>
                </svg>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-between min-h-0">
                {/* 上：主张句 */}
                <div className="shrink-0">
                    <div className="w-[64px] h-[4px] bg-[#004CE5]/70 rounded-full mb-7" />
                    <p className="text-[42px] leading-[1.2]">
                        <strong className="text-white font-bold">AI 是中立的，甚至更偏向用户</strong>
                        <span className="text-zinc-500">，所以——</span>
                    </p>
                    <p className="text-[23px] text-white leading-relaxed mt-6 max-w-[1400px]">
                        如果我们反复讲的园区卖点，和企业主、中介真实关心的事是冲突的
                        <br />
                        那内容发得越多，反而越容易加深 AI 对创新谷的误解
                    </p>
                </div>

                {/* 中：公式 */}
                <div className="flex items-center gap-8 shrink-0">
                    <div className="px-10 py-8 rounded-[1.75rem] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
                        <span className="text-[40px] font-black text-white leading-none">客户视角</span>
                    </div>
                    <span className="text-[42px] font-black text-zinc-500 leading-none">＋</span>
                    <div className="px-10 py-8 rounded-[1.75rem] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
                        <span className="text-[40px] font-black text-white leading-none">AI 理解方式</span>
                    </div>
                    <span className="text-[36px] font-black text-zinc-600 leading-none mx-1">＝</span>
                    <span className="text-[28px] text-zinc-200 font-bold leading-tight">
                        园区在 AI 里
                        <br />
                        最适合传播的定位
                    </span>
                </div>

                {/* 下：两块定义 */}
                <div className="w-full border-t border-white/10 pt-7 flex gap-14 shrink-0 max-w-[1300px]">
                    <div className="flex-1">
                        <span className="text-[24px] font-black text-white">客户视角</span>
                        <p className="text-[20px] text-zinc-400 leading-relaxed mt-2.5">
                            不站在园区招商的角度，用企业主与中介的真实语言重新梳理园区信息
                        </p>
                    </div>
                    <div className="w-px bg-white/10 shrink-0" />
                    <div className="flex-1">
                        <span className="text-[24px] font-black text-white">AI 理解方式</span>
                        <p className="text-[20px] text-zinc-400 leading-relaxed mt-2.5">
                            适配大模型的采信与推荐逻辑，让定位更容易被抓取和引用
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
