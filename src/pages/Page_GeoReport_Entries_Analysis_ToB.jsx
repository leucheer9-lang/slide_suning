import React from 'react';

const FINDINGS = [
    {
        title: '仓配一体与分仓履约构筑核心长板',
        metric: '提及率 100%',
        tone: 'strong',
        body: '在"电商仓配一体"、"自营仓库覆盖全国"、"全国分仓就近发货"等 B 端核心场景词下，提及率全部拉满至 100%，排位多落在 NO. 1.3 - 1.8。AI 高度认可京东物流在仓配一体化与分仓履约上的供应链优势。',
    },
    {
        title: '跨境出海场景全面掉队',
        metric: '提及率 0%',
        tone: 'warn',
        body: '"有海外仓的跨境物流公司推荐"、"企业出海一站式的跨境物流公司推荐"提及率均为 0%。B 端出海物流心智尚未建立，AI 在跨境场景几乎不会主动推荐京东物流。',
    },
    {
        title: '有提及但位次偏后，首推权待突破',
        metric: '提及率 65% · 位次 NO. 5.4',
        tone: 'warn',
        body: 'B 端整体提及率 65%，但平均位次 NO. 5.4，略落后于顺丰 NO. 5.1。Top 1 首推率 15.8% 虽与顺丰 20% 差距收窄，但"进清单"到"占首位"的转化仍需重点攻坚。',
    },
];

const STRATEGIES = [
    {
        title: '长板词（仓配 / 分仓 / 冷链 / 大件）',
        tag: '守擂防守',
        show: '"电商仓配一体"、"自营仓库覆盖全国"、"全国分仓就近发货"、"生鲜冷链"、"家电家具送装一体"均为 100%。',
        advice:
            '已拿到高曝光，策略转为"场景证据维护"：持续输出仓配一体、分仓履约、冷链温控、大件送装类可被引用的 B 端案例与白皮书，巩固供应链长板，防止顺丰、菜鸟反向侵蚀。',
    },
    {
        title: '短板词（跨境 / 医药冷链 / 可视化）',
        tag: '痛点攻坚',
        show: '跨境出海 0%；"医药冷链"、"订单在途全程可视化"仅 25%。',
        advice:
            '这是 B 端差异化突破线。需围绕"海外仓布局、跨境一站式方案、医药 GSP 合规、供应链可视化平台"铺设可被大模型抓取的行业报告与标杆案例，补齐场景短板。',
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
                        词条表现诊断与策略规划 · B端
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
