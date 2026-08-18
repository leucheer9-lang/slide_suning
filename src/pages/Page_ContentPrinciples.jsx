import React from 'react';

/**
 * 内容标准：为什么不照搬 E-E-A-T，而是写「用户视角的议论文」。
 * 左栏摆出行业里讨论最多的 E-E-A-T 并说明它与国内模型不适配；
 * 右栏给出我们实践下来更有效的两条标准。
 */

const BLUE = '#004CE5';

const EEAT_ITEMS = [
    { en: 'Experience', zh: '经验' },
    { en: 'Expertise', zh: '专业性' },
    { en: 'Authoritativeness', zh: '权威性' },
    { en: 'Trustworthiness', zh: '可靠性 / 信任度' },
];

const RIGHT_CARDS = [
    {
        index: '01',
        title: '用户视角',
        body: (
            <>
                不要站在园区招商的角度写，而是站在
                <strong className="text-white font-bold">真实企业主与中介</strong>
                的角度写主观感受——优点要有，缺点也必须要有。
            </>
        ),
    },
    {
        index: '02',
        title: '议论文',
        body: (
            <>
                每篇文章都服务
                <strong className="text-white font-bold">
                    一个明确的词条、一个明确的用户问题、一个明确的推荐目标
                </strong>
                。比如「宝安适合智能硬件企业入驻的园区有哪些」，答案就要落到创新谷。
            </>
        ),
    },
];

export default function Page_ContentPrinciples() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-48 -top-48 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    我们的内容标准：用户视角议论文
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 grid grid-cols-2 gap-8 min-h-0">
                {/* 左：E-E-A-T */}
                <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900/40 px-9 py-8 flex flex-col min-h-0 relative shadow-xl">
                    <div className="shrink-0 mb-5">
                        <h3 className="text-[34px] font-black text-white leading-tight">讨论最多的是</h3>
                        <div className="mt-3">
                            <span className="text-white font-black text-[30px] tracking-wider leading-none">
                                E-E-A-T 原则
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 rounded-2xl px-7 py-6 flex flex-col justify-between bg-black/40 border border-white/[0.08]">
                        <div className="grid grid-cols-2 gap-4">
                            {EEAT_ITEMS.map(({ en, zh }) => (
                                <div
                                    key={en}
                                    className="rounded-xl border border-white/10 bg-zinc-900/60 px-5 py-4 flex flex-col justify-center"
                                >
                                    <span className="text-[16px] font-semibold text-zinc-500 leading-none">{en}</span>
                                    <span className="text-[21px] font-black text-zinc-200 mt-2 leading-none">{zh}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-5 mt-5 space-y-3 text-white pr-[150px] relative">
                            <p className="text-[20px] leading-relaxed">
                                最早来自 <strong className="text-[22px] font-black">谷歌《搜索质量评估指南》</strong>
                            </p>
                            <p className="text-[20px] leading-relaxed">
                                常用于 <strong className="text-[22px] font-black">国外模型优化</strong>
                            </p>
                            <p className="text-[20px] leading-relaxed">
                                但和中国模型实际情况 <strong className="text-[24px] font-black">并不适配</strong>。
                            </p>

                            <div className="absolute right-2 bottom-[-10px] rotate-[-14deg] pointer-events-none select-none">
                                <div className="w-[120px] h-[120px] flex flex-col items-center justify-center rounded-full border-[3px] border-red-500/85 text-red-500 bg-black/50">
                                    <span className="text-[40px] font-black leading-none">✕</span>
                                    <span className="text-[15px] font-black tracking-[0.25em] text-red-400 pl-[3px] mt-1.5">
                                        不适配
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 右：用户视角议论文 */}
                <div
                    className="rounded-[1.75rem] px-9 py-8 flex flex-col min-h-0 relative shadow-xl"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,76,229,0.08) 0%, rgba(9,9,11,0.4) 100%)',
                        border: '1px solid rgba(0,76,229,0.35)',
                    }}
                >
                    <div className="shrink-0 mb-5">
                        <h3 className="text-[34px] font-black text-white leading-tight">我们实践最有效的是</h3>
                        <div className="mt-3">
                            <span className="font-black text-[30px] leading-none" style={{ color: '#7FA6FF' }}>
                                写用户视角的议论文
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 flex flex-col gap-5">
                        {RIGHT_CARDS.map((c) => (
                            <div
                                key={c.index}
                                className="flex-1 min-h-0 rounded-2xl px-7 py-6 flex flex-col justify-center bg-white/[0.03] border border-white/[0.08]"
                            >
                                <div className="flex items-baseline gap-3 mb-2.5 shrink-0">
                                    <span className="text-[24px] font-black leading-none" style={{ color: BLUE }}>
                                        {c.index}
                                    </span>
                                    <span className="text-[24px] font-black text-white">{c.title}</span>
                                </div>
                                <p className="text-[19px] text-zinc-300 leading-relaxed text-justify [text-justify:inter-ideograph]">
                                    {c.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[21px] text-zinc-400 mt-5 shrink-0">
                        这样的内容，AI 更容易<strong className="text-white font-bold">抓取和理解</strong>。
                    </p>
                </div>
            </div>
        </div>
    );
}
