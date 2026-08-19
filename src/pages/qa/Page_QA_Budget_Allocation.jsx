import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q2-1 单品 300 万预算初步分配
   口径：单个重点产品（胃泰·养胃舒颗粒）年度预算 300 万元，
   比例为基于本册各模块的初步建议，签约前按 GEO 体检基线校准。
   ============================================================ */

const MODULES = [
    {
        name: '信源与投放资源',
        pct: 35,
        amount: 105,
        accent: true,
        items: ['药品数据库与百科收录', '医药垂直平台信源合作', '高权重账号长期投放'],
    },
    {
        name: '内容生产与专业审核',
        pct: 30,
        amount: 90,
        accent: true,
        items: ['医学背景撰写团队', '五类专业稿件持续产出', '医生与专业机构审核'],
    },
    {
        name: '数据监测与词条策略',
        pct: 15,
        amount: 45,
        items: ['GEO ONE 全年监测', '词条库搭建与月度迭代', '量化竞争模型归因'],
    },
    {
        name: '官网与自有阵地',
        pct: 10,
        amount: 30,
        items: ['官网 GEO 诊断与改造', '结构化数据与抓取权限', '产品页与 FAQ 建设'],
    },
    {
        name: '负面纠偏与舆情',
        pct: 10,
        amount: 30,
        items: ['负面与错误信息排查', '纠偏内容定向投放', '全年舆情盯防'],
    },
];

const SEGMENT_BG = [
    'linear-gradient(90deg, #004CE5, #2E6DFF)',
    'linear-gradient(90deg, rgba(0,76,229,0.55), rgba(46,109,255,0.55))',
    'rgba(255,255,255,0.22)',
    'rgba(255,255,255,0.14)',
    'rgba(255,255,255,0.08)',
];

export default function Page_QA_Budget_Allocation() {
    return (
        <SlideLayout
            title="单品 300 万，怎么分"
            subtitle="以胃泰·养胃舒颗粒为例的年度预算初步分配，65% 集中投向信源与内容"
        >
            <div className="w-full h-full flex flex-col gap-5 animate-fadeIn font-['MiSans']">
                {/* ── 顶部：预算比例条 ── */}
                <div className="shrink-0 h-[96px] w-full flex rounded-[18px] overflow-hidden border border-white/[0.08]">
                    {MODULES.map((m, i) => (
                        <div
                            key={m.name}
                            className="h-full flex flex-col items-center justify-center gap-1.5 px-2"
                            style={{
                                width: `${m.pct}%`,
                                background: SEGMENT_BG[i],
                                borderLeft: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.35)',
                            }}
                        >
                            <span className="text-[36px] font-black text-white leading-none font-['Montserrat'] tabular-nums">
                                {m.pct}%
                            </span>
                            <span className="text-[20px] font-bold text-white leading-none whitespace-nowrap">
                                {m.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── 中部：五个模块卡片 ── */}
                <div className="flex-1 min-h-0 flex gap-4">
                    {MODULES.map((m) => (
                        <div
                            key={m.name}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-6 pt-6 pb-5 flex flex-col relative overflow-hidden"
                        >
                            {m.accent && <span className="absolute left-0 top-0 w-full h-[4px] bg-[#004CE5]" />}

                            <div className="flex items-end gap-2">
                                <span
                                    className={`text-[72px] font-black leading-none font-['Montserrat'] tabular-nums ${
                                        m.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    {m.pct}
                                </span>
                                <span
                                    className={`text-[34px] font-black leading-none mb-1 font-['Montserrat'] ${
                                        m.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    %
                                </span>
                            </div>

                            <span className="mt-3.5 text-[28px] font-bold text-white leading-[36px] whitespace-nowrap">
                                {m.name}
                            </span>
                            <span className="mt-2 text-[23px] font-bold text-white leading-none font-['Montserrat'] tabular-nums">
                                ≈ {m.amount} 万元 / 年
                            </span>

                            <div className="w-full h-px bg-white/10 my-4" />

                            <div className="flex flex-col gap-3">
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

                {/* ── 底部说明 ── */}
                <div className="shrink-0 rounded-[16px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-4 flex items-center gap-4">
                    <span className="shrink-0 px-3.5 py-2 rounded-[8px] bg-[#004CE5] text-[20px] font-bold text-white leading-none">
                        口径说明
                    </span>
                    <p className="text-[22px] text-white leading-[32px]">
                        整体预算为百万到千万级；此处以单个重点产品「胃泰·养胃舒颗粒」<span className="font-bold">300 万元 / 年</span>
                        为例做初步分配，正式比例以进场后 GEO 体检报告的基线数据校准。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Budget_Allocation.hideHeader = true;
