import React from 'react';

const cols = 'grid-cols-[120px_1.2fr_1fr_1fr_1fr_1fr]';

const brands = [
    { name: '苏宁易购', en: 'SUNING', highlight: true },
    { name: '京东', en: 'JD' },
    { name: '天猫(阿里)', en: 'TMALL' },
    { name: '拼多多', en: 'PDD' },
    { name: '唯品会', en: 'VIP' },
];

const rows = [
    {
        label: <>财务体量<br />(2025)</>,
        cells: [
            { highlight: true, primary: '营收 489.6 亿，归母净利 5,814 万', secondary: '连续两年盈利', secondaryTone: 'emerald' },
            { primary: '家电 3C 绝对龙头，体量远超苏宁' },
            { primary: '平台 GMV 巨大，家电为重要类目' },
            { primary: '主站高增长，家电靠百亿补贴' },
            { primary: '营收 1,059 亿，归母净利 72 亿', secondary: 'GMV 2,135 亿', secondaryTone: 'muted' },
        ],
    },
    {
        label: '渠道特征',
        cells: [
            { highlight: true, primary: '线上+线下、城市+县镇、自营+加盟', secondary: '线下约占 ~45%', secondaryTone: 'muted' },
            { primary: '自营为主 + 强物流', secondary: '另有线下家电专卖店', secondaryTone: 'muted' },
            { primary: '纯平台 / 第三方为主', secondary: '品牌旗舰店生态', secondaryTone: 'muted' },
            { primary: '纯平台', secondary: '下沉 + 低价心智', secondaryTone: 'muted' },
            { primary: '纯线上特卖', secondary: '会员制 (SVIP)，无线下', secondaryTone: 'muted' },
        ],
    },
    {
        label: <>家电 3C<br />打法</>,
        cells: [
            { highlight: true, primary: '全渠道 + 以旧换新 + 专供商品' },
            { primary: '自营正品 + 次日达 + 服务标杆' },
            { primary: '品牌旗舰店 + 大促' },
            { primary: '百亿补贴低价心智' },
            { primary: '非主力（服饰美妆特卖为核心，服饰约占 GMV ~75%）' },
        ],
    },
    {
        label: '服务 / 履约',
        cells: [
            { highlight: true, primary: '2 小时即装、送新拖旧、自有物流' },
            { primary: '京东物流 + 安装领先' },
            { primary: '依赖菜鸟 / 第三方' },
            { primary: '平台化，服务较弱' },
            { primary: '正品折扣 + 第三方物流（顺丰）' },
        ],
    },
    {
        label: '核心定位',
        cells: [
            { highlight: true, primary: '智慧生活服务商 / 家庭生活管家', bold: true },
            { primary: '品质自营零售', bold: true },
            { primary: '品牌电商平台', bold: true },
            { primary: '极致性价比', bold: true },
            { primary: '品牌折扣特卖', bold: true },
        ],
    },
    {
        label: '相对态势',
        cells: [
            { highlight: true, accentBorder: true, title: '聚焦主业突围', primary: '薄利扭亏、AI + 下沉突围', titleAccent: true },
            { title: '赛道领跑者', primary: '家电赛道绝对领先' },
            { title: '流量入口', primary: '综合平台流量入口' },
            { title: '价格搅局者', primary: '下沉与价格战搅局' },
            { title: '垂直特卖王者', primary: '家电正面竞争弱，但争同一线上消费预算' },
        ],
    },
];

function Cell({ cell, isLast }) {
    const tone =
        cell.secondaryTone === 'emerald'
            ? 'text-emerald-400'
            : cell.secondaryTone === 'muted'
              ? 'text-zinc-400'
              : 'text-zinc-300';

    return (
        <div
            className={`px-4 py-4 flex flex-col justify-center ${!isLast ? 'border-r border-white/10' : ''} ${
                cell.highlight ? 'bg-[#004CE5]/10' : ''
            } ${cell.accentBorder ? 'border-b-2 border-b-[#004CE5]' : ''}`}
        >
            {cell.title ? (
                <strong className={`text-[18px] mb-2 leading-snug ${cell.titleAccent ? 'text-[#4B8BFF]' : 'text-white'}`}>
                    {cell.title}
                </strong>
            ) : null}
            <p
                className={`leading-[1.6] ${cell.bold ? 'font-bold text-white text-[18px]' : 'text-zinc-100 text-[17px]'}`}
            >
                {cell.primary}
            </p>
            {cell.secondary ? (
                <p className={`text-[16px] mt-2 font-semibold ${tone}`}>{cell.secondary}</p>
            ) : null}
        </div>
    );
}

export default function Page_BrandCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-2 pb-3 relative z-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none">核心竞品对比分析</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-3 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">

                    {/* Header */}
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        <div className="px-3 py-5 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest text-[16px]">比较维度</span>
                        </div>
                        {brands.map((b, i) => (
                            <div
                                key={b.name}
                                className={`px-3 py-5 flex flex-col items-center justify-center ${i < brands.length - 1 ? 'border-r border-white/10' : ''} ${
                                    b.highlight ? 'bg-[#004CE5]/15 relative overflow-hidden' : ''
                                }`}
                            >
                                {b.highlight ? <div className="absolute top-0 left-0 w-full h-1.5 bg-[#004CE5]" /> : null}
                                <span className="font-bold text-white text-[22px] tracking-wider leading-none">{b.name}</span>
                                <span className={`text-[13px] uppercase tracking-widest mt-2 ${b.highlight ? 'text-[#4B8BFF] font-bold' : 'text-zinc-500'}`}>
                                    {b.en}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Body — rows stretch to fill */}
                    <div className="flex-1 min-h-0 grid" style={{ gridTemplateRows: `repeat(${rows.length}, minmax(0, 1fr))` }}>
                        {rows.map((row, ri) => (
                            <div
                                key={ri}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-3 py-4 flex items-center justify-center border-r border-white/10 bg-black/40">
                                    <span className="font-bold text-zinc-100 text-center text-[16px] leading-snug">
                                        {row.label}
                                    </span>
                                </div>
                                {row.cells.map((cell, ci) => (
                                    <Cell key={ci} cell={cell} isLast={ci === row.cells.length - 1} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="shrink-0 pt-2.5 text-right">
                    <p className="text-zinc-500 text-[13px] leading-relaxed">
                        数据来源：苏宁易购 2025 年度报告（002024）、各竞品 2025 年报；京东 / 天猫 / 拼多多未列具体金额（体量远大于苏宁且口径不同）
                    </p>
                </div>
            </div>
        </div>
    );
}
