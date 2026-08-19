import React from 'react';
import geoReport from '../data/geoReport.json';

// 苏宁易购①（project_id 377）· src/data/geoReport.json
const formatPct = (v) => (v === null || v === undefined ? '—' : `${Number(v)}%`);
const formatAvgPos = (v) => (v === null || v === undefined ? '—' : `NO.${Number(v)}`);

const BRAND_OPT_STATS = {
    mentionRate: formatPct(geoReport.stats.brand_mention_rate),
    top3Rate: formatPct(geoReport.stats.top3_mention_rate),
    avgPosition: formatAvgPos(geoReport.stats.avg_position),
};

function PhaseTag({ children, tone = 'neutral' }) {
    const cls =
        tone === 'kpi'
            ? 'bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40'
            : 'bg-white/10 text-zinc-200 border border-white/10';
    return (
        <span className={`inline-flex items-center justify-center text-[15px] xl:text-[16px] font-black px-2.5 py-1 rounded shrink-0 ${cls}`}>
            {children}
        </span>
    );
}

function Page_GeoKpiAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-14 pt-2 pb-3 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-1.5 xl:gap-2">

                <div className="text-center shrink-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        KPI 及验收标准
                    </h1>
                </div>

                <div className="flex items-center shrink-0 pl-1">
                    <h3 className="text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        品牌当前现状
                    </h3>
                </div>

                <div className="grid grid-cols-12 gap-3 xl:gap-4 shrink-0">
                    <div className="col-span-5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-3 px-5 xl:py-3.5 xl:px-6 flex flex-col justify-center gap-2.5 shadow-xl">
                        <span className="text-[18px] xl:text-[20px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                            品牌优化词现状
                        </span>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[16px] font-medium">提及率</span>
                                <span className="text-[30px] xl:text-[34px] font-extrabold text-[#004CE5] leading-none mt-1.5">{BRAND_OPT_STATS.mentionRate}</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-3">
                                <span className="text-zinc-400 text-[16px] font-medium">TOP3 提及率</span>
                                <span className="text-[30px] xl:text-[34px] font-extrabold text-[#004CE5] leading-none mt-1.5">{BRAND_OPT_STATS.top3Rate}</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-3">
                                <span className="text-zinc-400 text-[16px] font-medium">平均位次</span>
                                <span className="text-[30px] xl:text-[34px] font-extrabold text-[#004CE5] leading-none mt-1.5">{BRAND_OPT_STATS.avgPosition}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-3 px-5 xl:py-3.5 xl:px-6 flex flex-col justify-center gap-2.5 shadow-xl">
                        <span className="text-[18px] xl:text-[20px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                            待突破词条现状
                        </span>
                        <div className="grid grid-cols-[auto_1fr] gap-x-5 items-center">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[16px] font-medium">零提及词条</span>
                                <span className="text-[30px] xl:text-[34px] font-extrabold text-[#004CE5] leading-none mt-1.5">8 个</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-5 min-w-0">
                                <span className="text-zinc-400 text-[16px] font-medium">覆盖场景</span>
                                <span className="text-[20px] xl:text-[22px] font-bold text-zinc-100 leading-snug mt-1.5">
                                    3C 选购 / 送装一体 / 国补与以旧换新
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-3 px-5 xl:py-3.5 xl:px-6 flex flex-col justify-center gap-2.5 shadow-xl">
                        <span className="text-[18px] xl:text-[20px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                            负面信息率
                        </span>
                        <div className="flex items-end gap-5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[16px] font-medium">负面信息率</span>
                                <span className="text-[30px] xl:text-[34px] font-extrabold text-[#004CE5] leading-none mt-1.5">2%</span>
                            </div>
                            <span className="text-[20px] xl:text-[22px] text-zinc-400 pb-0.5">
                                正向 <strong className="text-emerald-400 font-black">98%</strong>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/[0.08] shrink-0" />

                <div className="flex items-center shrink-0 pl-1">
                    <h3 className="text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        KPI 与交付标准
                    </h3>
                </div>

                <div className="w-full flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-3 px-4 xl:py-4 xl:px-5 shadow-2xl flex flex-col">
                    <div className="w-full flex-1 min-h-0 overflow-hidden">
                        <table className="w-full h-full text-left border-collapse table-fixed">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-300 text-[17px] xl:text-[18px] font-black">
                                    <th className="pb-2.5 pl-2 w-[9%]">词组分类</th>
                                    <th className="pb-2.5 w-[27%] pr-3">运营目标与两阶段演进策略</th>
                                    <th className="pb-2.5 w-[29%] pr-3">阶段性交付标准与 KPI 考核</th>
                                    <th className="pb-2.5 w-[35%] pl-4">动态展现权益及交付标准</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 优化词：阶段一 / 阶段二 各占一行，策略与考核横平对齐 */}
                                <tr className="h-[26%]">
                                    <td rowSpan={2} className="py-2 pl-2 align-middle border-b border-white/[0.22]">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[22px] xl:text-[24px] text-white font-extrabold">核心场景词</span>
                                            <div className="flex flex-col gap-1 text-[16px] xl:text-[17px] text-zinc-400 font-bold">
                                                <span>购买决策场景</span>
                                                <span>品类对比场景</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-3 align-middle">
                                        <div className="flex items-center gap-2.5">
                                            <PhaseTag>阶段一</PhaseTag>
                                            <div className="text-[18px] xl:text-[19px] leading-snug min-w-0">
                                                <div className="text-white font-black">稳提升｜2个月</div>
                                                <div className="text-zinc-400 mt-0.5">优势词持续拉升，常规词挤入核心推荐榜</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-3 align-middle">
                                        <div className="flex items-center gap-2.5">
                                            <PhaseTag tone="kpi">阶段一考核</PhaseTag>
                                            <div className="flex-1 min-w-0 text-[18px] xl:text-[20px] leading-snug text-zinc-200 font-semibold">
                                                整体提及率 ≥ <strong className="text-white font-black">65%</strong>，提升TOP3提及率 ≥ <strong className="text-white font-black">25%</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td rowSpan={2} className="py-2 pl-4 align-middle h-full border-b border-white/[0.22]">
                                        <div className="h-full flex flex-col justify-center gap-2.5 bg-[#004CE5]/5 border border-[#004CE5]/15 p-3.5 xl:p-4 rounded-xl">
                                            <p className="text-zinc-200 text-[17px] xl:text-[18px] leading-relaxed">
                                                在 <strong className="text-white font-bold">DeepSeek、豆包、元宝、通义千问</strong> 四大 AI 平台搜索约定词条时，AI 回答中应出现<strong className="text-white font-bold">苏宁易购</strong>品牌/渠道推荐、推荐理由及基于官方信息的服务与履约表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-2.5 text-zinc-400 text-[16px] xl:text-[17px] leading-relaxed">
                                                本次运营 <strong className="text-white font-bold">50 条核心词条</strong>（覆盖 500 种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 <strong className="text-white font-bold">16 条</strong>即视为有效交付；低于 16 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-[26%] border-b border-white/[0.22]">
                                    <td className="py-2 pr-3 align-middle">
                                        <div className="flex items-center gap-2.5">
                                            <PhaseTag>阶段二</PhaseTag>
                                            <div className="text-[18px] xl:text-[19px] leading-snug min-w-0">
                                                <div className="text-white font-black">占高位｜4个月</div>
                                                <div className="text-zinc-400 mt-0.5">优势词双指标达标，常规词全面拉升至目标线</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-3 align-middle">
                                        <div className="flex items-center gap-2.5">
                                            <PhaseTag tone="kpi">阶段二考核</PhaseTag>
                                            <div className="text-[18px] xl:text-[20px] leading-snug text-zinc-200 min-w-0">
                                                在阶段一成果稳住的基础上，继续向上冲刺首推与 Top3 占位
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                {/* 监测词：阶段一 / 阶段二 横平对齐；考核与交付跨两行 */}
                                <tr className="h-[24%]">
                                    <td rowSpan={2} className="py-2 pl-2 align-middle">
                                        <span className="text-[22px] xl:text-[24px] text-white font-extrabold">监测词</span>
                                    </td>
                                    <td className="py-2 pr-3 align-middle">
                                        <div className="flex items-center gap-2.5">
                                            <PhaseTag>阶段一</PhaseTag>
                                            <div className="text-[18px] xl:text-[19px] leading-snug min-w-0">
                                                <div className="text-white font-black">查问题｜1个月</div>
                                                <div className="text-zinc-400 mt-0.5">建立负面/错误信息监测，定制针对性策略</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td rowSpan={2} className="py-2 pr-3 align-middle h-full">
                                        <div className="h-full flex flex-col justify-center bg-[#004CE5]/5 border border-[#004CE5]/15 p-3.5 xl:p-4 rounded-xl text-[17px] xl:text-[18px] leading-relaxed">
                                            <p className="text-zinc-200">
                                                针对品牌询问，AI 生成内容的<strong className="text-white font-bold">核心事实准确率</strong>达到约定标准，
                                                <strong className="text-[#8cb1ff] font-bold">负面信息占比控制在 10% 红线以内</strong>，
                                                正向/中性情绪导向占比稳定在 <strong className="text-white font-bold">90% 以上</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td rowSpan={2} className="py-2 pl-4 align-middle h-full">
                                        <div className="h-full flex flex-col justify-center gap-2.5 bg-white/[0.015] border border-white/[0.04] p-3.5 xl:p-4 rounded-xl text-[17px] xl:text-[18px] leading-relaxed">
                                            <p className="text-zinc-200">
                                                围绕约定平台与家电 3C 核心购买场景，持续监测并纠偏<strong className="text-white font-bold">国补/价格误写、售后口碑攻击、零售云门店规模误写</strong>等问题，通过信源定位、官方口径强化和内容覆盖，降低 AI 引用错误信息的概率。
                                            </p>
                                            <p className="border-t border-white/10 pt-2.5 text-zinc-400 text-[16px] xl:text-[17px]">
                                                因 AI 平台升级、信源变化及回答随机性等不可控因素，项目以<strong className="text-white font-bold">核心错误压制</strong>、<strong className="text-white font-bold">正确信息占比提升</strong>作为交付标准。
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-[24%]">
                                    <td className="py-2 pr-3 align-middle">
                                        <div className="flex items-center gap-2.5">
                                            <PhaseTag>阶段二</PhaseTag>
                                            <div className="text-[18px] xl:text-[19px] leading-snug min-w-0">
                                                <div className="text-white font-black">解问题｜5个月</div>
                                                <div className="text-zinc-400 mt-0.5">分类处理错误信源，修正价格、口碑与门店等异常信息</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoKpiAcceptance;
