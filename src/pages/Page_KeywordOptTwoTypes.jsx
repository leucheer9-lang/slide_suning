import React from 'react';

/**
 * 优化词往下拆两类，命中标准是两把不同的尺子：
 *   · 大类词（选址品类阶段）：问法只圈品类，AI 端出创新谷任意一种承接口径就算赢 → 看有没有被推进来
 *   · 专属词（框定空间 / 渠道诉求）：问法已锁定具体诉求，必须端出对应的那种承接才算数 → 看有没有被推准
 */

const POOL = [
    { name: '雪花科创城', cx: false },
    { name: '创新谷 · 整层可分割研发办公', cx: true, key: 'floor' },
    { name: '甲岸美生智谷', cx: false },
    { name: '创新谷 · 独栋总部', cx: true, key: 'hq' },
    { name: '宝安智谷', cx: false },
    { name: '创新谷 · 小面积孵化工位', cx: true, key: 'small' },
    { name: '桃花源科技创新园', cx: false },
    { name: '创新谷 · 厂房与中试空间', cx: true, key: 'plant' },
    { name: '深圳湾科技生态园', cx: false },
    { name: '智慧家园区', cx: false },
    { name: '宝安中心科技园', cx: false },
    { name: '尖岗山产业社区', cx: false },
];

const TARGET = 'floor';

const BROAD = {
    name: '大类词',
    stage: '选址品类阶段',
    accent: '#004CE5',
    accentText: '#7FA6FF',
    key: '有没有被推进来',
    examples: [{ q: '「宝安高端产业园推荐」' }, { q: '「深圳工业上楼园区怎么选」' }],
    exNote: '问法只圈定「区域 + 品类」，没锁具体空间——只要 AI 端出创新谷，这一问就算赢。',
    hitBadge: '命中任意 1 项 · 都计入',
    note: '',
};

const EXACT = {
    name: '专属词',
    stage: '框定空间 / 渠道诉求',
    accent: '#2DD4BF',
    accentText: '#5EEAD4',
    key: '有没有被推准',
    examples: [
        { q: '「宝安可分割的整层研发办公」', m: '整层可分割研发办公' },
        { q: '「产业园中介带客佣金怎么结」', m: '渠道合作政策' },
    ],
    exNote: '问法已锁定「面积 / 业态 / 合作方式」，指向唯一那种承接——AI 端出创新谷别的房源，也算没推准。',
    hitBadge: '命中 1 项 · 另 3 项不算',
    note: '虚线框：是创新谷、但不是问法框定的那种承接，不算推准',
};

function chipState(p, mode) {
    if (!p.cx) return 'other';
    if (mode === 'broad') return 'hit';
    return p.key === TARGET ? 'hit' : 'cx';
}

function Chip({ label, state, accent, accentText }) {
    const base = 'px-4 py-2.5 rounded-xl text-[18px] font-bold leading-none text-center truncate';
    if (state === 'hit') {
        return (
            <span
                className={base}
                style={{ background: accent, color: '#04070D', boxShadow: `0 0 20px ${accent}66` }}
            >
                {label}
            </span>
        );
    }
    if (state === 'cx') {
        return (
            <span
                className={base}
                style={{ background: 'transparent', border: `1px dashed ${accent}99`, color: accentText }}
            >
                {label}
            </span>
        );
    }
    return <span className={`${base} bg-zinc-900/50 text-zinc-600`}>{label}</span>;
}

function Card({ d, mode }) {
    return (
        <div className="h-full rounded-[1.75rem] border border-white/10 bg-zinc-900/40 overflow-hidden flex flex-col shadow-xl">
            <div className="shrink-0 px-9 pt-7 pb-5" style={{ borderTop: `5px solid ${d.accent}` }}>
                <div className="flex items-baseline justify-between">
                    <span className="text-[32px] font-black text-white leading-none tracking-wide">{d.name}</span>
                    <span className="text-[17px] text-zinc-500">{d.stage}</span>
                </div>
                <div className="mt-3.5 text-[22px] text-zinc-300 leading-none">
                    看创新谷
                    <strong className="font-black" style={{ color: d.accentText }}>
                        「{d.key}」
                    </strong>
                </div>
            </div>

            <div className="flex-1 min-h-0 px-9 pt-7 pb-4 flex flex-col justify-start">
                <span className="text-[16px] text-zinc-500 mb-3">用户会这么问</span>
                <div className="flex flex-col gap-3">
                    {d.examples.map((e) => (
                        <div key={e.q} className="text-[25px] text-white font-black leading-tight">
                            {e.q}
                            {e.m && <span style={{ color: d.accentText }}> → {e.m}</span>}
                        </div>
                    ))}
                </div>
                <p className="text-[17px] text-zinc-400 leading-snug mt-4 text-justify [text-justify:inter-ideograph]">
                    {d.exNote}
                </p>
            </div>

            <div className="shrink-0 px-9 py-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[16px] text-zinc-500">这批 AI 结果里，谁算命中</span>
                    <span
                        className="px-4 py-1.5 rounded-full text-[16px] font-bold leading-none"
                        style={{ background: `${d.accent}26`, color: d.accentText }}
                    >
                        {d.hitBadge}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                    {POOL.filter((p) => p.cx).map((p) => (
                        <Chip
                            key={p.key}
                            label={p.name}
                            state={chipState(p, mode)}
                            accent={d.accent}
                            accentText={d.accentText}
                        />
                    ))}
                </div>
                <p className="text-[15px] text-zinc-600 mt-3 min-h-[20px]">{d.note || '\u00A0'}</p>
            </div>
        </div>
    );
}

export default function Page_KeywordOptTwoTypes() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    优化词分为大类词和专属词
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col min-h-0">
                <p className="shrink-0 text-[24px] text-zinc-300 leading-snug mb-5">
                    大类词看<strong className="text-white font-bold">创新谷有没有被推进来</strong>
                    ；专属词看<strong className="text-white font-bold">框定的那种承接有没有被推准</strong>
                    。同一批 AI 推荐结果，两类词用两把不同的尺子判命中。
                </p>

                <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
                    <Card d={BROAD} mode="broad" />
                    <Card d={EXACT} mode="exact" />
                </div>
            </div>
        </div>
    );
}
