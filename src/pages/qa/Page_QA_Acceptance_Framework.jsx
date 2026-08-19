import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3-2 验收怎么设计
   框架：最终效果目标（提及率 / 推荐率）为第一要义，
   叠加五个模块的阶段过程指标，形成「结果 + 过程」组合验收。
   ============================================================ */

const STAGES = [
    { month: '第 3 月', check: '验过程指标' },
    { month: '第 9 月', check: '验效果爬坡' },
    { month: '第 12 月', check: '验最终目标' },
];

const MODULES = [
    {
        name: '数据监测',
        items: ['体检报告与月度数据报告按时交付', '词条库覆盖约定规模并持续迭代'],
    },
    {
        name: '内容生产',
        items: ['月度稿件产出量达标', '医学审核全量通过，全年合规零事故'],
    },
    {
        name: '信源与投放',
        items: ['药品数据库与垂直平台收录条数', '高权重账号发布量与内容存活率'],
    },
    {
        name: '官网优化',
        items: ['诊断问题整改完成率', '结构化数据与 FAQ 如期上线'],
    },
    {
        name: '负面纠偏',
        items: ['负面与错误信息占比压降至约定阈值', '核心事实表述准确率达标'],
    },
];

export default function Page_QA_Acceptance_Framework() {
    return (
        <SlideLayout
            title="验收怎么设计"
            subtitle="最终效果目标 ＋ 阶段过程指标的组合：结果可复测，过程可追责"
        >
            <div className="w-full h-full flex flex-col gap-5 animate-fadeIn font-['MiSans']">
                {/* ── 顶部：第一要义 ── */}
                <div className="shrink-0 rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/10 px-9 py-6 flex items-center gap-8 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />

                    <div className="w-[380px] shrink-0 flex flex-col gap-3">
                        <span className="text-[24px] font-bold text-[#2E6DFF] leading-none whitespace-nowrap">
                            第一要义 · 最终效果目标
                        </span>
                        <span className="text-[42px] font-bold text-white leading-[52px] whitespace-nowrap">
                            提及率 ＋ 推荐率
                        </span>
                    </div>

                    <div className="w-px h-[92px] bg-white/15 shrink-0" />

                    <p className="flex-1 min-w-0 text-[23px] text-white leading-[36px] text-justify">
                        胃泰在各 AI 平台的<span className="font-bold">提及率与推荐率（Top1 提及）</span>持续提升——
                        以进场体检的基线为起点，分三阶段约定目标值，用可复测的第三方监测口径验收，
                        <span className="font-bold">未达标部分按比例退款</span>。
                    </p>

                    <div className="shrink-0 flex items-center gap-3.5">
                        {STAGES.map((s) => (
                            <div
                                key={s.month}
                                className="flex flex-col items-center gap-2 rounded-[14px] border border-white/15 bg-[#0B0D19]/50 px-5 py-3.5"
                            >
                                <span className="text-[27px] font-black text-[#2E6DFF] leading-none font-['Montserrat'] tabular-nums whitespace-nowrap">
                                    {s.month}
                                </span>
                                <span className="text-[19px] font-bold text-white leading-none whitespace-nowrap">
                                    {s.check}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 中部：五个模块的过程指标 ── */}
                <div className="flex-1 min-h-0 flex flex-col gap-3.5">
                    <div className="shrink-0 flex items-center gap-3 pl-1">
                        <span className="w-[8px] h-[24px] rounded-full bg-[#004CE5]" />
                        <span className="text-[27px] font-bold text-white leading-none">模块化阶段过程指标</span>
                    </div>

                    <div className="flex-1 min-h-0 flex gap-4">
                        {MODULES.map((m, i) => (
                            <div
                                key={m.name}
                                className="flex-1 min-w-0 h-full rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-6 py-6 flex flex-col"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[36px] font-black text-[#2E6DFF] leading-none font-['Montserrat']">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[27px] font-bold text-white leading-none whitespace-nowrap">
                                        {m.name}
                                    </span>
                                </div>

                                <div className="w-full h-px bg-white/10 my-4" />

                                <div className="flex flex-col gap-3.5">
                                    {m.items.map((it) => (
                                        <div key={it} className="flex items-start gap-2.5">
                                            <span className="w-[7px] h-[7px] rounded-full bg-[#2E6DFF] shrink-0 mt-[12px]" />
                                            <span className="text-[22px] text-white leading-[31px]">{it}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 底部说明 ── */}
                <div className="shrink-0 rounded-[16px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-4 flex items-center gap-4">
                    <span className="shrink-0 px-3.5 py-2 rounded-[8px] bg-[#004CE5] text-[20px] font-bold text-white leading-none">
                        组合原则
                    </span>
                    <p className="text-[22px] text-white leading-[32px]">
                        模块指标只作过程管控，<span className="font-bold">不能替代最终效果</span>——
                        任何供应商都不应只用「发了多少稿」交差；反过来，过程指标也让效果爬坡有迹可查、可提前预警。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Acceptance_Framework.hideHeader = true;
