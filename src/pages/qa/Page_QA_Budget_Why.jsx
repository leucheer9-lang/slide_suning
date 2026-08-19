import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q2-2 重点投在哪里、为什么
   把五个模块归并为三笔钱：拉提及 65% / 保方向 15% / 守底线 20%
   ============================================================ */

const GROUPS = [
    {
        label: '拉提及',
        pct: 65,
        accent: true,
        compose: '信源与投放 35% ＋ 内容与审核 30%',
        why: '医药行业 AI 回答的引用高度集中在药品数据库、医生问答、学术内容等专业信源——进不去这些信源，写再多内容也换不来推荐；而内容的专业性与医生审核背书，决定 AI 敢不敢引用你。提及率的天花板由这两块共同决定，预算优先砸在这里。',
    },
    {
        label: '保方向',
        pct: 15,
        compose: '数据监测 ＋ 词条策略 ＋ 量化模型',
        why: '豆包改版、千问检索 Agent 化——平台算法几个月一变；词条一旦选错方向，其余 85% 的预算会整体打水漂。监测和策略花的是小钱，握的是全部预算的方向盘。',
    },
    {
        label: '守底线',
        pct: 20,
        compose: '官网自有阵地 10% ＋ 负面纠偏 10%',
        why: '医疗是官网引用率最高的行业之一，官网不合格等于主动放弃一个刚需信源；负面与错误信息一旦被 AI 学走，会长期固化在回答里。这两块平时看不见，出事时最贵。',
    },
];

export default function Page_QA_Budget_Why() {
    return (
        <SlideLayout
            title="重点投在哪里，为什么"
            subtitle="300 万拆成三笔钱：65% 拉提及、15% 保方向、20% 守底线"
        >
            <div className="w-full h-full flex flex-col gap-4 animate-fadeIn font-['MiSans']">
                {GROUPS.map((g) => (
                    <div
                        key={g.label}
                        className="flex-1 min-h-0 flex gap-4 rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden relative"
                    >
                        {g.accent && <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />}

                        {/* 左：这笔钱是什么 */}
                        <div className="w-[560px] shrink-0 h-full flex items-center gap-7 pl-10">
                            <div className="flex items-end">
                                <span
                                    className={`text-[92px] font-black leading-none font-['Montserrat'] tabular-nums ${
                                        g.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    {g.pct}
                                </span>
                                <span
                                    className={`text-[40px] font-black leading-none mb-2 font-['Montserrat'] ${
                                        g.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    %
                                </span>
                            </div>
                            <div className="flex flex-col gap-2.5 min-w-0">
                                <span className="text-[38px] font-bold text-white leading-none tracking-wide">
                                    {g.label}
                                </span>
                                <span className="text-[20px] font-bold text-white leading-[28px]">{g.compose}</span>
                            </div>
                        </div>

                        {/* 分隔线 */}
                        <div className="w-px h-full bg-white/10 shrink-0" />

                        {/* 右：为什么 */}
                        <div className="flex-1 min-w-0 h-full flex items-center pr-9 py-5">
                            <p className="text-[22px] text-white leading-[34px] text-justify">{g.why}</p>
                        </div>
                    </div>
                ))}

                {/* ── 底部：从单品到千万级怎么扩 ── */}
                <div className="shrink-0 rounded-[16px] border border-[#004CE5]/40 bg-[#004CE5]/10 px-7 py-4 flex items-center gap-4">
                    <span className="shrink-0 px-3 py-1.5 rounded-[8px] bg-[#004CE5] text-[18px] font-bold text-white leading-none">
                        向千万级扩展
                    </span>
                    <p className="text-[20px] text-white leading-[30px]">
                        整体预算上到百万—千万级时，按这套骨架横向复制：重点单品全配置，腰部产品做「监测＋内容」，
                        监测系统与信源资源全产品线共用，<span className="font-bold">边际成本逐级递减</span>。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Budget_Why.hideHeader = true;
