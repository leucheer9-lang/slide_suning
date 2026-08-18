import React from 'react';

/* 来源：GEO ONE 项目 481 创维创新谷-ToC①，2026-08-14 */

const FINDINGS = [
    {
        title: '榜单词与产业属性词已经能进答案',
        metric: '9/25 条有提及',
        tone: 'strong',
        body: '“宝安区高端产业园排行榜”“宝安区新型显示产业园推荐”“宝安区产业园排行榜”三条提及率 100%，其中新型显示产业园位次 NO. 3；另有电子信息、科技产业园、研发办公一体化等 6 条为 50%。整体提及率 24%，在 166 家竞品中排第 4。',
    },
    {
        title: '进得去榜单，但排位普遍靠后',
        metric: '平均位次 NO. 8.8',
        tone: 'warn',
        body: '平均提及位次 NO. 8.8，全量位次榜只排第 17，明显落后于新桥东先进制造产业园（NO. 6.0）、全至科技创新园（NO. 7.0）、汇智研发中心（NO. 7.6）。“宝安区科技产业园推荐”甚至排到 NO. 16，基本处在长列表末尾。',
    },
    {
        title: '配套、补贴、口碑这类软条件完全没有素材',
        metric: '16 条词 0 提及',
        tone: 'warn',
        body: '“宝安区产业园推荐”“宝安区产业园有哪些”“口碑好的”“配套齐全的”“有政策补贴的”“有人才公寓的”“适合总部入驻的”等 16 条词提及率为 0%。这些词最贴近企业实际选址决策，但引用池里没有可支撑创维创新谷的事实内容。',
    },
];

const STRATEGIES = [
    {
        title: '产业属性词（新型显示 / 电子信息 / 研发办公一体化）',
        tag: '守住并前移',
        show: '“宝安区新型显示产业园推荐”100%、NO. 3；电子信息、生产研发一体化各 50%、NO. 5.5。',
        advice:
            '这批词是创维主业的天然优势区，已能被召回，问题是覆盖不稳、位次偏后。把园区的产业定位、已入驻企业结构、研发办公一体化物业形态写成结构清晰、可被直接引用的官方口径，并推进宝安区政府在线科技创新载体名录的收录，把 50% 的词拉到稳定命中、把位次从 NO. 8.8 往前推。',
    },
    {
        title: '通用推荐词与配套条件词（补贴 / 人才公寓 / 配套 / 口碑）',
        tag: '重点突破',
        show: '“宝安区产业园推荐”“有政策补贴的”“有人才公寓的”“配套齐全的”等 16 条词提及率 0%。',
        advice:
            '这些词由政府通稿和名录榜单占位，硬投无效。做法是把园区可核验的配套事实内容化——人才公寓房源数、餐饮商业配套、通勤接驳、可申领的区级产业扶持政策清单，做成选址指南与横向对比内容，并进入买购网《宝安区十大产业园区》这类已被高频引用的名录，让创维创新谷先出现在候选清单里，再争排序。',
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

export default function Page_GeoReport_Entries_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full bg-[#004CE5]/10 blur-3xl pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        词条表现诊断与策略规划 · 优化词 C 端
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
