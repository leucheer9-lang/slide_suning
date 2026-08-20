import React from 'react';
import geoReport from '../data/geoReport.json';

// 苏宁易购①（project_id 377）· src/data/geoReport.json
const formatPct = (v) => (v === null || v === undefined ? '—' : `${Number(v)}%`);

const BRAND_OPT_STATS = {
    mentionRate: formatPct(geoReport.stats.brand_mention_rate),
};

const COLS = 'grid-cols-[9%_27%_29%_35%]';

function PhaseTag({ children, tone = 'neutral' }) {
    const cls =
        tone === 'kpi'
            ? 'bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40'
            : 'bg-white/10 text-zinc-200 border border-white/10';
    return (
        <span className={`inline-flex items-center justify-center text-[14px] font-black px-2 py-0.5 rounded shrink-0 ${cls}`}>
            {children}
        </span>
    );
}

function PhaseCell({ tag, tone, title, detail }) {
    return (
        <div className="h-full min-h-0 flex items-center gap-2 pr-3">
            <PhaseTag tone={tone}>{tag}</PhaseTag>
            <div className="min-w-0 leading-snug">
                <div className="text-[18px] text-white font-black">{title}</div>
                <div className="text-[16px] text-zinc-400 mt-0.5">{detail}</div>
            </div>
        </div>
    );
}

function Page_GeoKpiAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-12 pt-1.5 pb-2.5 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-1.5">

                <div className="text-center shrink-0">
                    <h1 className="text-[30px] font-extrabold text-white tracking-widest leading-none">
                        KPI 及验收标准
                    </h1>
                </div>

                <div className="flex items-center shrink-0 pl-1">
                    <h3 className="text-[18px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        品牌当前现状
                    </h3>
                </div>

                <div className="grid grid-cols-12 gap-3 shrink-0">
                    <div className="col-span-5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-5 flex flex-col justify-center gap-1.5 shadow-xl">
                        <span className="text-[18px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="w-2 h-3.5 bg-[#004CE5] rounded-full" />
                            品牌优化词现状
                        </span>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[15px] font-medium">提及率</span>
                                <span className="text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">{BRAND_OPT_STATS.mentionRate}</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-3">
                                <span className="text-zinc-400 text-[15px] font-medium">TOP1 提及率</span>
                                <span className="text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">0.3%</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-3">
                                <span className="text-zinc-400 text-[15px] font-medium">竞品排名</span>
                                <span className="text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">NO.3</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-5 flex flex-col justify-center gap-1.5 shadow-xl">
                        <span className="text-[18px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="w-2 h-3.5 bg-[#004CE5] rounded-full" />
                            待突破词条现状
                        </span>
                        <div className="grid grid-cols-[auto_1fr] gap-x-5 items-center">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[15px] font-medium">零提及词条</span>
                                <span className="text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">8 个</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-5 min-w-0">
                                <span className="text-zinc-400 text-[15px] font-medium">覆盖场景</span>
                                <span className="text-[18px] font-bold text-zinc-100 leading-snug mt-1">
                                    3C 选购 / 送装一体 / 国补与以旧换新
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-5 flex flex-col justify-center gap-1.5 shadow-xl">
                        <span className="text-[18px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="w-2 h-3.5 bg-[#004CE5] rounded-full" />
                            负面信息率
                        </span>
                        <div className="flex items-end gap-5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[15px] font-medium">负面信息率</span>
                                <span className="text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">2%</span>
                            </div>
                            <span className="text-[18px] text-zinc-400 pb-0.5">
                                正向 <strong className="text-emerald-400 font-black">98%</strong>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/[0.08] shrink-0" />

                <div className="flex items-center shrink-0 pl-1">
                    <h3 className="text-[18px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        KPI 与交付标准
                    </h3>
                </div>

                <div className="w-full flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-2.5 shadow-2xl flex flex-col">
                    <div className={`grid ${COLS} shrink-0 pb-2 border-b-2 border-white/[0.22] text-zinc-300 text-[16px] font-black`}>
                        <div className="pl-2">词组分类</div>
                        <div className="pr-3">运营目标与一年三阶段演进策略</div>
                        <div className="pr-3">阶段性交付标准与 KPI 考核</div>
                        <div className="pl-3">动态展现权益及交付标准</div>
                    </div>

                    {/* 核心场景词：一年三阶段 */}
                    <div className={`grid ${COLS} grid-rows-3 flex-[1.08] min-h-0 border-b border-white/[0.22]`}>
                        <div className="row-span-3 pl-2 flex flex-col justify-center gap-1.5">
                            <span className="text-[20px] text-white font-extrabold leading-none">核心场景词</span>
                            <div className="flex flex-col gap-0.5 text-[15px] text-zinc-400 font-bold">
                                <span>购买决策场景</span>
                                <span>品类对比场景</span>
                            </div>
                        </div>

                        <PhaseCell tag="阶段一" title="稳提升｜3个月" detail="优势词持续拉升，常规词挤入核心推荐榜" />
                        <PhaseCell
                            tag="阶段一考核"
                            tone="kpi"
                            title="保持前三｜缩短与第 2 的差距"
                            detail={<>提及率 <strong className="text-white font-black">67%</strong>，TOP1 提及率提升至 <strong className="text-white font-black">2.3%</strong></>}
                        />
                        <div className="row-span-3 pl-3 py-1.5 min-h-0">
                            <div className="h-full min-h-0 flex flex-col justify-center gap-1.5 bg-[#004CE5]/5 border border-[#004CE5]/15 px-3 py-2 rounded-xl">
                                <p className="text-zinc-200 text-[16px] leading-snug">
                                    在 <strong className="text-white font-bold">DeepSeek、豆包、元宝、通义千问</strong> 四大 AI 平台搜索约定词条时，AI 回答中应出现<strong className="text-white font-bold">苏宁易购</strong>品牌/渠道推荐、推荐理由及基于官方信息的服务与履约表述。
                                </p>
                                <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[15px] leading-snug">
                                    本次运营 <strong className="text-white font-bold">50 条核心词条</strong>（覆盖 500 种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 <strong className="text-white font-bold">16 条</strong>即视为有效交付；低于 16 条的，按未达标比例退款。
                                </p>
                            </div>
                        </div>

                        <PhaseCell tag="阶段二" title="占高位｜6个月" detail="优势词双指标达标，常规词全面拉升至目标线" />
                        <PhaseCell
                            tag="阶段二考核"
                            tone="kpi"
                            title="冲击第二｜力争超过天猫 / 海尔"
                            detail={<>提及率 <strong className="text-white font-black">78%</strong>，TOP1 提及率提升至 <strong className="text-white font-black">6%</strong></>}
                        />

                        <PhaseCell tag="阶段三" title="锁优势｜3个月" detail="高位成果固化，核心词条稳定进入首推梯队" />
                        <PhaseCell
                            tag="阶段三考核"
                            tone="kpi"
                            title="冲击第一｜缩短与京东的差距"
                            detail={<>提及率 <strong className="text-white font-black">80%</strong></>}
                        />
                    </div>

                    {/* 监测词：一年三阶段 */}
                    <div className={`grid ${COLS} grid-rows-3 flex-1 min-h-0`}>
                        <div className="row-span-3 pl-2 flex items-center">
                            <span className="text-[20px] text-white font-extrabold leading-none">监测词</span>
                        </div>

                        <PhaseCell tag="阶段一" title="查问题｜3个月" detail="建立负面/错误信息监测，定制针对性策略" />
                        <div className="row-span-3 pr-3 py-1.5 min-h-0">
                            <div className="h-full min-h-0 flex flex-col justify-center bg-[#004CE5]/5 border border-[#004CE5]/15 px-3 py-2 rounded-xl">
                                <p className="text-zinc-200 text-[16px] leading-snug">
                                    针对品牌询问，AI 生成内容的<strong className="text-white font-bold">核心事实准确率</strong>达到约定标准，
                                    <strong className="text-[#8cb1ff] font-bold">负面信息占比控制在 10% 红线以内</strong>，
                                    正向/中性情绪导向占比稳定在 <strong className="text-white font-bold">90% 以上</strong>。
                                </p>
                            </div>
                        </div>
                        <div className="row-span-3 pl-3 py-1.5 min-h-0">
                            <div className="h-full min-h-0 flex flex-col justify-center gap-1.5 bg-white/[0.015] border border-white/[0.04] px-3 py-2 rounded-xl">
                                <p className="text-zinc-200 text-[16px] leading-snug">
                                    围绕约定平台与家电 3C 核心购买场景，持续监测并纠偏<strong className="text-white font-bold">国补/价格误写、售后口碑攻击、零售云门店规模误写</strong>等问题，通过信源定位、官方口径强化和内容覆盖，降低 AI 引用错误信息的概率。
                                </p>
                                <p className="border-t border-white/10 pt-1.5 text-zinc-400 text-[15px] leading-snug">
                                    因 AI 平台升级、信源变化及回答随机性等不可控因素，项目以<strong className="text-white font-bold">核心错误压制</strong>、<strong className="text-white font-bold">正确信息占比提升</strong>作为交付标准。
                                </p>
                            </div>
                        </div>

                        <PhaseCell tag="阶段二" title="解问题｜6个月" detail="分类处理错误信源，修正价格、口碑与门店等异常信息" />
                        <PhaseCell tag="阶段三" title="守底线｜3个月" detail="纠偏成果固化，错误口径防复发，正向叙事持续覆盖" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoKpiAcceptance;
