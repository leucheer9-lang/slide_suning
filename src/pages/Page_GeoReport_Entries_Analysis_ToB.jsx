import React from 'react';

const FINDINGS = [
    {
        title: '25 个 B 端词里只有 1 个能被提及',
        metric: '整体提及率 2.0%',
        tone: 'warn',
        body: '50 次对话中提到创维创新谷的只有 1 次。唯一被提及的词是"有现成房源的宝安区高端产业园推荐"50%（NO. 4.5），这个词同时限定了"高端"与"现成房源"，正好对上创维创新谷可即时交付的整栋物业。',
    },
    {
        title: '中介带客、佣金、报备类词全部 0 提及',
        metric: '24 个词提及率 0%',
        tone: 'warn',
        body: '"适合中介带客的宝安区产业园推荐""中介佣金高的宝安区产业园推荐""中介报备流程简单的宝安区产业园推荐""渠道带客成交效率高的宝安区产业园推荐"这类最贴近渠道成交决策的词，创维创新谷一次都没出现，位置被政府招商通稿和中介平台内容占着。',
    },
    {
        title: '模型认识园区，但只在条件足够具体时',
        metric: '窄词最高 50%',
        tone: 'strong',
        body: '能进答案的词带"高端 + 现成房源"双重限定；问题一旦回到"宝安区产业园推荐"这种宽口径，提及就归零。B 端场景下，可核验的硬条件（面积、层高、交付状态、租金区间）是目前唯一有效的入口。',
    },
];

const STRATEGIES = [
    {
        title: '窄词（高端园区 / 现成房源 / 大面积整层）',
        tag: '先做实',
        show: '"有现成房源的宝安区高端产业园推荐"50%、位次 NO. 4.5；其余房源条件类词（大面积、整层、可灵活分割）均为 0%。',
        advice:
            '这类词只要有结构化、可核验的房源参数就能被召回。把创维创新谷的在租面积段、层高、荷载、可分割方案、交付时间做成标准化表格内容，同步铺到宝安区政府在线的物业清单、宝安湾招商稿以及顺企网、安居客等高引用平台，先把 50% 的词稳到首位，再把大面积、整层、可分割三类词从 0 拉起来。',
    },
    {
        title: '渠道词（中介带客 / 佣金 / 报备流程）',
        tag: '再上攻',
        show: '"适合中介带客""中介佣金高""佣金结算快""报备流程简单""渠道带客成交效率高"等 24 个词提及率 0%。',
        advice:
            '这些词模型没有可引用的事实来源，硬投无效。做法是把渠道政策本身内容化：公开佣金比例区间、结算周期、线上报备流程与带看规则，做成"宝安区产业园渠道合作指南"类文章，并进入"宝安区十大产业园区"这类已被高频引用的名录榜单，让创维创新谷先出现在候选清单里，再争排序。',
    },
];

function SectionShell({ title, children }) {
    return (
        <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/70 to-transparent" />
            <div className="absolute -top-24 right-0 w-56 h-56 rounded-full bg-[#004CE5]/10 blur-3xl pointer-events-none" />

            <div className="relative px-6 pt-5 pb-4 border-b border-white/[0.08]">
                <h3 className="text-[24px] lg:text-[27px] font-bold text-white tracking-wide">{title}</h3>
            </div>

            <div className="relative flex-1 min-h-0 p-5 flex flex-col gap-3.5">{children}</div>
        </div>
    );
}

function MetricChip({ children, tone = 'strong' }) {
    const styles =
        tone === 'warn'
            ? 'bg-white/[0.04] border-white/15 text-zinc-200'
            : 'bg-[#004CE5]/12 border-[#004CE5]/35 text-[#9CBCFF]';
    return (
        <span
            className={`shrink-0 px-3 py-1 rounded-full border text-[14px] lg:text-[15px] font-semibold tracking-wide ${styles}`}
        >
            {children}
        </span>
    );
}

function FindingCard({ index, title, metric, tone, body }) {
    return (
        <div className="group flex-1 min-h-0 rounded-xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] hover:border-[#004CE5]/25 transition-colors px-4 py-3.5 flex flex-col gap-2.5">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                    <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#004CE5]/15 border border-[#004CE5]/25 text-[#9CBCFF] text-[14px] font-bold flex items-center justify-center shrink-0">
                        {String(index).padStart(2, '0')}
                    </span>
                    <h4 className="text-[18px] lg:text-[20px] xl:text-[21px] font-bold text-white leading-snug pt-0.5">
                        {title}
                    </h4>
                </div>
                <MetricChip tone={tone}>{metric}</MetricChip>
            </div>
            <p className="pl-11 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                {body}
            </p>
        </div>
    );
}

function StrategyCard({ title, tag, show, advice }) {
    return (
        <div className="flex-1 min-h-0 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#004CE5]/10 to-white/[0.02] hover:border-[#004CE5]/30 transition-colors px-5 py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
                <h4 className="text-[20px] lg:text-[22px] xl:text-[23px] font-bold text-white tracking-wide">
                    {title}
                </h4>
                <MetricChip>{tag}</MetricChip>
            </div>

            <div className="flex flex-col gap-2.5 text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed text-zinc-300">
                <div className="rounded-lg bg-black/20 border border-white/[0.05] px-3.5 py-2.5">
                    <span className="text-[#9CBCFF] font-semibold mr-1.5">表现</span>
                    <span className="text-justify">{show}</span>
                </div>
                <div className="rounded-lg bg-black/20 border border-white/[0.05] px-3.5 py-2.5">
                    <span className="text-[#9CBCFF] font-semibold mr-1.5">诊断与建议</span>
                    <span className="text-justify">{advice}</span>
                </div>
            </div>
        </div>
    );
}

export default function Page_GeoReport_Entries_Analysis_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full bg-[#004CE5]/10 blur-3xl pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        词条表现诊断与策略规划 · 优化词 B 端
                    </h1>
                </div>

                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">
                    <div className="col-span-6 min-h-0">
                        <SectionShell title="监测词条核心发现">
                            {FINDINGS.map((item, i) => (
                                <FindingCard key={item.title} index={i + 1} {...item} />
                            ))}
                        </SectionShell>
                    </div>

                    <div className="col-span-6 min-h-0">
                        <SectionShell title="长短板诊断与词条策略">
                            {STRATEGIES.map((item) => (
                                <StrategyCard key={item.title} {...item} />
                            ))}
                        </SectionShell>
                    </div>
                </div>
            </div>
        </div>
    );
}
