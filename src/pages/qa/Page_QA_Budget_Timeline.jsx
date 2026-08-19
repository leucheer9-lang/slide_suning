import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q2-3 12 个月项目节奏
   三阶段投放：打地基 40% → 稳提升 45% → 占高位 15%
   一次性投入前置，内容投放按月滚动，验收节点设在第 3 / 9 / 12 月
   ============================================================ */

const PHASES = [
    {
        stage: '阶段一',
        name: '打地基',
        months: '第 1 – 3 月',
        pct: 40,
        amount: 120,
        accent: true,
        focus: '一次性投入集中前置',
        items: [
            'GEO 体检报告与词条库搭建',
            '官网诊断与 GEO 改造启动',
            '药品数据库、垂直信源集中收录',
            '负面与错误信息全面排查',
        ],
    },
    {
        stage: '阶段二',
        name: '稳提升',
        months: '第 4 – 9 月',
        pct: 45,
        amount: 135,
        accent: true,
        focus: '内容与投放按月滚动',
        items: [
            '五类专业内容按月生产与投放',
            '月度数据复盘，词条与策略迭代',
            '负面纠偏内容持续跟进',
            '跟进平台算法变化，及时调整打法',
        ],
    },
    {
        stage: '阶段三',
        name: '占高位',
        months: '第 10 – 12 月',
        pct: 15,
        amount: 45,
        focus: '冲刺、验收与复制',
        items: [
            '冲击核心词条 Top1 推荐位',
            '年度效果验收与全案复盘',
            '沉淀方法论，输出多产品线扩展方案',
        ],
    },
];

export default function Page_QA_Budget_Timeline() {
    return (
        <SlideLayout
            title="300 万怎么花：12 个月节奏"
            subtitle="打地基 40% → 稳提升 45% → 占高位 15%，一次性投入前置、内容投放滚动"
        >
            <div className="w-full h-full flex flex-col gap-5 animate-fadeIn font-['MiSans']">
                {/* ── 顶部：时间轴比例条 ── */}
                <div className="shrink-0 h-[64px] w-full flex rounded-[16px] overflow-hidden border border-white/[0.08]">
                    {PHASES.map((p, i) => (
                        <div
                            key={p.stage}
                            className="h-full flex items-center justify-center gap-4"
                            style={{
                                width: `${(i === 0 ? 3 : i === 1 ? 6 : 3) / 12 * 100}%`,
                                background:
                                    i === 1
                                        ? 'linear-gradient(90deg, #004CE5, #2E6DFF)'
                                        : i === 0
                                        ? 'linear-gradient(90deg, rgba(0,76,229,0.55), rgba(46,109,255,0.55))'
                                        : 'rgba(255,255,255,0.12)',
                                borderLeft: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.35)',
                            }}
                        >
                            <span className="text-[22px] font-bold text-white leading-none whitespace-nowrap">
                                {p.months}
                            </span>
                            <span className="text-[24px] font-black text-white leading-none font-['Montserrat'] tabular-nums">
                                {p.pct}%
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── 中部：三阶段卡片 ── */}
                <div className="flex-1 min-h-0 flex gap-5">
                    {PHASES.map((p) => (
                        <div
                            key={p.stage}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 pt-7 pb-6 flex flex-col relative overflow-hidden"
                        >
                            {p.accent && <span className="absolute left-0 top-0 w-full h-[4px] bg-[#004CE5]" />}

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1.5 rounded-[8px] bg-white/10 text-[18px] font-bold text-white leading-none">
                                        {p.stage}
                                    </span>
                                    <span className="text-[34px] font-bold text-white leading-none">{p.name}</span>
                                </div>
                                <span className="text-[20px] font-bold text-white leading-none font-['Montserrat']">
                                    {p.months}
                                </span>
                            </div>

                            <div className="mt-5 flex items-end gap-3">
                                <span
                                    className={`text-[64px] font-black leading-none font-['Montserrat'] tabular-nums ${
                                        p.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    {p.pct}%
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none mb-1.5 font-['Montserrat'] tabular-nums">
                                    ≈ {p.amount} 万元
                                </span>
                            </div>
                            <span className="mt-2.5 text-[19px] font-bold text-white leading-none">{p.focus}</span>

                            <div className="w-full h-px bg-white/10 my-5" />

                            <div className="flex flex-col gap-3">
                                {p.items.map((it) => (
                                    <div key={it} className="flex items-start gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full bg-[#2E6DFF] shrink-0 mt-[12px]" />
                                        <span className="text-[21px] text-white leading-[30px]">{it}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── 底部：验收节点 ── */}
                <div className="shrink-0 rounded-[16px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-4 flex items-center gap-4">
                    <span className="shrink-0 px-3 py-1.5 rounded-[8px] bg-[#004CE5] text-[18px] font-bold text-white leading-none">
                        验收节点
                    </span>
                    <p className="text-[20px] text-white leading-[30px]">
                        建议设在<span className="font-bold">第 3 / 9 / 12 月</span>：第 3 月验过程指标，第 9 月验效果爬坡，
                        第 12 月验最终目标——与 Q3 的验收设计直接衔接。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Budget_Timeline.hideHeader = true;
