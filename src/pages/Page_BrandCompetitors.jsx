import React from 'react';

const cols = 'grid-cols-[148px_1fr_1fr_1fr]';

const brands = [
    { name: '创维创新谷', en: 'SKYWORTH', role: '实业链主 · 已投用', highlight: true },
    { name: '雪花科创城', en: 'CR SNOW', role: '华润产城 · 新供给' },
    { name: '甲岸美生智谷', en: 'JIAAN', role: '工改工 · 待交付' },
];

const rows = [
    {
        label: '地缘圈层',
        cells: [
            { highlight: true, primary: '宝安石岩 · 西部制造带', secondary: '与另外两家抢同一批宝安客' },
            { primary: '宝安新安 / 尖岗山', secondary: '更近南山，同区横向比价' },
            { primary: '宝安新安 72 区', secondary: '西乡—新安，同片区替代' },
        ],
    },
    {
        label: '交通可达',
        cells: [
            { highlight: true, primary: '地铁 13 号线应人石站已通', secondary: '石岩到南山仍有通勤差' },
            { primary: '地铁 5 号线兴东站上盖', secondary: '区位是它招商时的主攻点' },
            { primary: '兴东站步行约 250 米', secondary: '交通条件接近雪花科创城' },
        ],
    },
    {
        label: '物业形态',
        cells: [
            { highlight: true, primary: '工业上楼 + 甲级办公 + 总部', secondary: '楼上研发、楼下中试，M1+M0' },
            { primary: 'M1 厂房超 21 万㎡ + M0 研发', secondary: '拼承重、卸货平台、工业用电' },
            { primary: '研发楼 + 高标准厂房 + 宿舍', secondary: '工改工，形态接近但体量小' },
        ],
    },
    {
        label: '体量交付',
        cells: [
            { highlight: true, stat: '45 万㎡', primary: '一期 2016 年投用，现在就能入驻' },
            { stat: '115 万㎡', primary: '总部刚迁入，电子信息集聚还在形成' },
            { stat: '17.5 万㎡', primary: '预计 2026 年中交付，现在搬不进去' },
        ],
    },
    {
        label: '产业基因',
        cells: [
            { highlight: true, primary: '创维链主：5G+8K / 电子信息', secondary: '同链近 90 家，彩电全球总部在园' },
            { primary: '华润啤酒总部 + 智能装备', secondary: '圈层对不上电子配套商' },
            { primary: '智能制造 / 电子信息', secondary: '无链主，也还没有存量租户生态' },
        ],
    },
    {
        label: '租金梯度',
        cells: [
            { highlight: true, stat: '50–72 元', statAccent: true, primary: '公开挂牌 /㎡·月，三家最低' },
            { stat: '60–100 元', primary: '同一价格带；客户拿这张单来压价' },
            { stat: '65–85 元', primary: '研发楼报价；单价接近，配套更薄' },
        ],
    },
    {
        label: '配套留人',
        cells: [
            { highlight: true, primary: '商场 + 1,500 套公寓 + 亚朵', secondary: '石岩少有的办住商酒闭环' },
            { primary: '啤酒小镇 + 产业宿舍 + 华润运营', secondary: '配套在，电子信息氛围还没起来' },
            { primary: '人才公寓约 181 套 + 商业约 2,000㎡', secondary: '能住，接待和留人体量差一截' },
        ],
    },
    {
        label: '政策身份',
        cells: [
            { highlight: true, primary: '省级特色产业园 + 科技桃花源', secondary: '2023 年当年深圳唯一，补贴可申报' },
            { primary: '华润品牌招商，无省级园身份', secondary: '靠央企背书，不靠可申报名额' },
            { primary: '工改工综合体，无省级园身份', secondary: '租金补贴和落户奖励叠不上' },
        ],
    },
];

function Cell({ cell, isLast }) {
    return (
        <div
            className={`px-6 py-2.5 flex flex-col justify-center gap-1 min-h-0 ${!isLast ? 'border-r border-white/10' : ''} ${
                cell.highlight ? 'bg-[#004CE5]/10' : ''
            }`}
        >
            {cell.stat ? (
                <div
                    className={`text-[24px] font-black leading-none ${
                        cell.statAccent ? 'text-[#4B8BFF]' : 'text-white'
                    }`}
                >
                    {cell.stat}
                </div>
            ) : null}
            <p
                className={`leading-snug ${
                    cell.stat
                        ? 'text-[16px] text-zinc-400 font-medium'
                        : 'text-[18px] text-zinc-100 font-semibold'
                }`}
            >
                {cell.primary}
            </p>
            {cell.secondary ? (
                <p className="text-[15px] text-zinc-500 font-medium leading-snug">{cell.secondary}</p>
            ) : null}
        </div>
    );
}

export default function Page_BrandCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-2 pb-2 relative z-10 px-8">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none mb-1.5">
                    核心竞品对比分析
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    竞品不是谁名气大，而是谁在抢同一批宝安硬科技租户
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-2.5 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        <div className="px-3 py-3.5 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest text-[16px]">比较维度</span>
                        </div>
                        {brands.map((b, i) => (
                            <div
                                key={b.name}
                                className={`px-3 py-3.5 flex flex-col items-center justify-center ${
                                    i < brands.length - 1 ? 'border-r border-white/10' : ''
                                } ${b.highlight ? 'bg-[#004CE5]/15 relative overflow-hidden' : ''}`}
                            >
                                {b.highlight ? <div className="absolute top-0 left-0 w-full h-1.5 bg-[#004CE5]" /> : null}
                                <span className="font-bold text-white text-[28px] tracking-wider leading-tight text-center">
                                    {b.name}
                                </span>
                                <span
                                    className={`text-[16px] font-bold mt-1 ${
                                        b.highlight ? 'text-[#4B8BFF]' : 'text-zinc-400'
                                    }`}
                                >
                                    {b.role}
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
                                key={row.label}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-3 py-2 flex items-center justify-center border-r border-white/10 bg-black/40">
                                    <span className="font-bold text-zinc-100 text-center text-[18px] leading-snug">
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

                <div className="shrink-0 mt-2 bg-[#004CE5]/10 border border-[#004CE5]/30 rounded-xl px-5 py-2 flex items-center gap-4">
                    <span className="text-[#4B8BFF] text-[16px] font-black tracking-widest shrink-0">招商含义</span>
                    <p className="text-zinc-200 text-[20px] font-semibold leading-snug">
                        三家抢的是同一客群：要宝安政策、要研产一体、对成本敏感的硬科技企业。后页拆开看雪花、甲岸怎么截流，以及创新谷怎么对位。
                    </p>
                </div>
                <p className="shrink-0 pt-1.5 text-right text-zinc-500 text-[15px] leading-relaxed">
                    数据来源：广东省工信厅 2023 特色产业园名单、华润置地公开信息、深圳房地产信息网及各园区公开招商信息；租金为市场挂牌区间，非合同成交价
                </p>
            </div>
        </div>
    );
}
