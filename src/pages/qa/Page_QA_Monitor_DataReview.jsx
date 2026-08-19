import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* 四张图取自慕思项目的阶段性 GEO 报告，每张都是「看到什么变化 → 定了什么动作」 */
const SHOTS = [
    {
        src: '/qa/shot-a-phase-summary.png',
        index: '01',
        caption: '这一阶段的目标做到了 → 下一步转去打高端词和长尾词',
    },
    {
        src: '/qa/shot-b-core-data.png',
        index: '02',
        caption: '三个时间点的数据放一起看 → 定下一步的重点',
    },
    {
        src: '/qa/shot-c-platform-gap.png',
        index: '03',
        caption: '一个平台一个平台看 → 找出还没做起来的平台',
    },
    {
        src: '/qa/shot-d-competitor-defense.png',
        index: '04',
        caption: '竞品三个月追上来了 → 马上定要守住的地方',
    },
];

const STEPS = [
    {
        tag: '定节点',
        title: '上线前取基线，之后每月一次复盘',
        desc: '基线是后面所有对比的锚点——没有优化前的数字，涨了多少就说不清。每月出一版数据，季度再做方向性回看。',
    },
    {
        tag: '看四项',
        title: '提及率、平均位次、Top1 率、竞品排名一起看',
        desc: '只看提及率会误判：被提到但排在第 6 位、或者竞品涨得比我们更快，都是必须改策略的信号。',
    },
    {
        tag: '调三件事',
        title: '词条权重、内容配比、平台预算',
        desc: '已经稳住的词降权、没起来的词加投；被引用多的内容类型加产；落后的平台把预算挪过去。',
    },
];

export default function Page_QA_Monitor_DataReview() {
    return (
        <SlideLayout
            title="数据监测怎么优化和迭代？"
            subtitle="按照月份和季度复盘数据、实时调整优化方向"
        >
            <div className="w-full h-full flex gap-6 animate-fadeIn font-['MiSans']">
                {/* ── 左：客户阶段性报告的四个复盘动作 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-4">
                        {SHOTS.map((shot) => (
                            <div key={shot.src} className="min-w-0 min-h-0 flex flex-col">
                                <div className="flex-1 min-h-0 rounded-[14px] overflow-hidden border border-white/[0.08] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
                                    <img src={shot.src} alt={shot.caption} className="w-full h-full object-contain" />
                                </div>
                                <div className="shrink-0 mt-2.5 flex items-baseline gap-2.5">
                                    <span className="shrink-0 text-[20px] font-bold text-[#4C8DFF] leading-[28px] font-['Montserrat']">
                                        {shot.index}
                                    </span>
                                    <span className="text-[20px] text-white leading-[28px]">{shot.caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 右：复盘到调策略的三步 ── */}
                <div className="w-[620px] shrink-0 h-full flex flex-col gap-4">
                    {STEPS.map((step) => (
                        <div
                            key={step.tag}
                            className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-5 flex flex-col justify-center"
                        >
                            <span className="self-start rounded-full bg-[#004CE5]/20 border border-[#4C8DFF]/40 px-4 py-1 text-[18px] font-bold text-[#4C8DFF] leading-none">
                                {step.tag}
                            </span>
                            <p className="mt-4 text-[31px] font-bold text-white leading-[42px]">{step.title}</p>
                            <p className="mt-3 text-[22px] text-white/85 leading-[34px]">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Monitor_DataReview.hideHeader = true;
