import React from 'react';

// 同一色相的蓝，越靠近成交越亮
const STAGES = [
    {
        no: '01',
        name: '曝光',
        accent: '#6E93CC',
        ask: '靠谱的家电购买平台推荐',
        core: 'AI 给出的名单里\n必须有苏宁易购',
        detail:
            '消费者问 AI 的那一刻，苏宁要出现在答案里。没被提到，后面三步都不成立，所以先用泛搜词把苏宁铺进 AI 的候选名单。',
        metric: '提及率 / TOP3 提及率',
    },
    {
        no: '02',
        name: '决策',
        accent: '#3D7BE0',
        ask: '买电视哪个平台包安装',
        core: 'AI 要说得出\n为什么该选苏宁',
        detail:
            '光被提到还不够。送装一体、上门拆旧、国补、门店能看实物，这些理由要写成 AI 可直接引用的事实，跟着品牌一起讲出来。',
        metric: '推荐理由带出核心卖点',
    },
    {
        no: '03',
        name: '对比',
        accent: '#2E8DF5',
        ask: '苏宁和京东买家电哪个好',
        core: '对比里不出短板\n只留长板',
        detail:
            '被拿去和京东、国美横评时，预埋客观对比事实并纠偏负面，把线下体验、送装拆旧一次到位、县域覆盖摆到前面。',
        metric: '负面信息率 ≤ 10%',
    },
    {
        no: '04',
        name: '转化',
        accent: '#7FC0FF',
        ask: '国补买冰箱的平台推荐',
        core: '问完 AI\n直接去苏宁下单',
        detail:
            '线上进苏宁易购 App 或商城，线下直接去附近门店。答案末端带出活动会场与门店引导，整条链路在这一步完成收口。',
        metric: 'AI 带来的到店与下单增量',
    },
];

// 四列共用同一套网格行，保证卡片内各区块横向对齐；富余高度均摊到行间距
const GRID_ROWS = 'auto auto auto auto';

export default function Page_GeoConversionChain() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-14 pt-1 pb-3 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1740px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">

                <div className="text-center shrink-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        四级链路：曝光 → 决策 → 对比 → 转化
                    </h1>
                </div>

                <div
                    className="flex-1 min-h-0 grid grid-cols-4 gap-x-5"
                    style={{ gridTemplateRows: GRID_ROWS, rowGap: '20px', alignContent: 'space-between' }}
                >
                    {STAGES.map((s, i) => {
                        const col = i + 1;
                        return (
                            <React.Fragment key={s.no}>
                                <div
                                    className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.01] overflow-hidden relative"
                                    style={{ gridColumn: col, gridRow: '1 / -1', borderTopWidth: 3, borderTopColor: s.accent }}
                                >
                                    <span
                                        className="absolute right-3 -top-4 text-[112px] font-black leading-none select-none"
                                        style={{ color: s.accent, opacity: 0.09 }}
                                    >
                                        {s.no}
                                    </span>
                                </div>

                                <div className="relative px-6 pt-6" style={{ gridColumn: col, gridRow: 1 }}>
                                    <span
                                        className="text-[54px] font-black leading-none tracking-wide"
                                        style={{ color: s.accent }}
                                    >
                                        {s.name}
                                    </span>
                                </div>

                                <div className="relative px-6" style={{ gridColumn: col, gridRow: 2 }}>
                                    <div
                                        className="h-full rounded-lg px-4 py-4 flex flex-col justify-center"
                                        style={{ background: `${s.accent}14`, borderLeft: `4px solid ${s.accent}` }}
                                    >
                                        <div
                                            className="text-[17px] font-black tracking-[0.22em] mb-2"
                                            style={{ color: s.accent }}
                                        >
                                            用户在问
                                        </div>
                                        <div className="text-[26px] font-bold text-white leading-snug text-balance">
                                            {s.ask}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative px-6" style={{ gridColumn: col, gridRow: 3 }}>
                                    <div className="text-[44px] font-black text-white leading-[1.24] whitespace-pre-line">
                                        {s.core}
                                    </div>
                                    <p className="mt-5 text-[29px] text-zinc-400 leading-[1.45] text-pretty">
                                        {s.detail}
                                    </p>
                                </div>

                                <div className="relative px-6 pb-6" style={{ gridColumn: col, gridRow: 4 }}>
                                    <div className="border-t border-white/10 pt-4">
                                        <div className="text-[17px] font-bold text-zinc-600 tracking-widest mb-1.5">
                                            怎么衡量
                                        </div>
                                        <div className="text-[30px] font-black leading-snug" style={{ color: s.accent }}>
                                            {s.metric}
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
