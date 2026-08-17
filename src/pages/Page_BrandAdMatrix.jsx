import React from 'react';

const cols = 'grid-cols-[176px_1fr_1fr_1fr]';

const platforms = [
    { name: '创维创新谷', en: 'Skyworth', color: '#F59E0B', highlight: true },
    { name: '雪花科创城', en: 'CR Snow', color: '#F97316' },
    { name: '甲岸美生智谷', en: 'Jiaan', color: '#EC4899' },
];

const rows = [
    {
        zone: '心智',
        label: '客户怎么认识它',
        cells: [
            { line1: '创维总部所在地 · 5G+8K 主题园', line2: '常被搜成「创维电视 / 创维集团」' },
            { line1: '华润产城 · 啤酒总部南迁', line2: '尖岗山新地标，更靠近南山' },
            { line1: '72 区工改工 · 兴东地铁口', line2: '产品形态接近，没有链主故事' },
        ],
    },
    {
        zone: '线上',
        label: '房源与询盘入口',
        cells: [
            { line1: '写字楼网 / 咚咚租 / 中介站为主', line2: '官网信息薄，询盘多停在比价' },
            { line1: '华润置地招商矩阵 + 项目官网', line2: '总部南迁新闻就能带客' },
            { line1: '写字楼网 / 咚咚租 / 中介站为主', line2: '品牌站弱，询盘停在面积和单价' },
        ],
    },
    {
        zone: '渠道',
        label: '获客结构',
        cells: [
            { line1: '业主直签 + 中介分佣并行', line2: '产业链转介绍是暗线，线上看不见' },
            { line1: '业主直销 + 华润品牌带客', line2: '啤酒总部和工业上楼示范是钩子' },
            { line1: '集体业主 + 美生包租运营', line2: '中介分销铺量，转介绍尚未成势' },
        ],
    },
    {
        zone: '内容',
        label: '公开内容长什么样',
        cells: [
            { line1: '政府荣誉稿、本地新闻', line2: '缺选址对比、研产场景、租户故事' },
            { line1: '总部南迁、啤酒小镇、工业上楼', line2: '华润口径清晰，媒体稿充足' },
            { line1: '封顶 / 招商软文为主', line2: '租户故事和产业叙事都薄' },
        ],
    },
    {
        zone: '搜索',
        label: '搜索与 AI 可见度',
        cells: [
            { line1: '园区词条少，集团词条抢答案', line2: 'AI 容易把园区说成家电公司' },
            { line1: '品牌词独立，新产城出镜高', line2: '问「宝安工业上楼」时容易出现' },
            { line1: '品牌新、词条少', line2: '问宝安产业园时很少被单独点名' },
        ],
    },
];

function Cell({ cell, isLast, highlight }) {
    return (
        <div
            className={`px-4 py-3 flex flex-col justify-center gap-1.5 min-h-0 ${
                !isLast ? 'border-r border-white/10' : ''
            } ${highlight ? 'bg-[rgba(245,158,11,0.06)]' : ''}`}
        >
            <p className="text-[22px] font-semibold text-white leading-snug">{cell.line1}</p>
            <p className="text-[20px] text-zinc-400 leading-snug">{cell.line2}</p>
        </div>
    );
}

export default function Page_BrandAdMatrix() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-4 relative z-10 flex flex-col gap-4">
                <div className="shrink-0 pt-1">
                    <h1 className="text-[32px] font-black text-white tracking-widest leading-none">
                        主流园区招商获客渠道对比
                    </h1>
                    <p className="mt-3 text-[20px] text-zinc-400 tracking-wide">
                        产业园区不靠电商广告获客，比的是心智、房源入口，以及搜索和 AI 里有没有被讲清楚
                    </p>
                </div>

                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        <div className="px-3 py-4 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest text-[16px]">对比维度</span>
                        </div>
                        {platforms.map((p, i) => (
                            <div
                                key={p.name}
                                className={`px-3 py-4 flex flex-col items-center justify-center ${
                                    i < platforms.length - 1 ? 'border-r border-white/10' : ''
                                } ${p.highlight ? 'bg-[rgba(245,158,11,0.1)] relative overflow-hidden' : ''}`}
                            >
                                {p.highlight ? (
                                    <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: p.color }} />
                                ) : null}
                                <span
                                    className="font-black text-[28px] tracking-wider leading-tight text-center"
                                    style={{ color: p.color }}
                                >
                                    {p.name}
                                </span>
                                <span className="text-[16px] uppercase tracking-widest mt-2 text-zinc-500">
                                    {p.en}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex-1 min-h-0 grid"
                        style={{ gridTemplateRows: `repeat(${rows.length}, minmax(0, 1fr))` }}
                    >
                        {rows.map((row, ri) => (
                            <div
                                key={ri}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-3 py-3 flex flex-col items-center justify-center gap-1.5 border-r border-white/10 bg-black/40">
                                    <span className="text-[16px] text-zinc-500 tracking-widest">{row.zone}</span>
                                    <span className="font-bold text-zinc-100 text-center text-[18px] leading-snug whitespace-nowrap">
                                        {row.label}
                                    </span>
                                </div>
                                {row.cells.map((cell, ci) => (
                                    <Cell
                                        key={ci}
                                        cell={cell}
                                        isLast={ci === row.cells.length - 1}
                                        highlight={ci === 0}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
