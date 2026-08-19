import React from 'react';

const cols = 'grid-cols-[148px_repeat(6,minmax(0,1fr))]';

function keepEnd(text, n = 3) {
    if (!text || text.length <= n) return text;
    return (
        <>
            {text.slice(0, -n)}
            <span className="whitespace-nowrap">{text.slice(-n)}</span>
        </>
    );
}

const brands = [
    { name: '创维创新谷', role: '实业链主 · 已投用', highlight: true },
    { name: '雪花科创城', role: '华润产城 · 新供给' },
    { name: '甲岸美生智谷', role: '工改工 · 待交付' },
    { name: ['新桥东', '先进制造产业园'], role: '工业上楼 · 标杆园' },
    { name: '全至科技创新园', role: '沙井 · 国家级孵化器' },
    { name: '汇智研发中心', role: '西乡 · 专精特新总部' },
];

const rows = [
    {
        zone: '心智',
        label: ['客户怎么', '认识它'],
        cells: [
            { highlight: true, line1: '创维总部所在地 · 5G+8K 主题园', line2: '常被搜成「创维电视 / 创维集团」' },
            { line1: '华润产城 · 啤酒总部南迁', line2: '尖岗山新地标，更靠近南山' },
            { line1: '72 区工改工 · 兴东地铁口', line2: '产品形态接近，没有链主故事' },
            { line1: '工业上楼标杆、宝安必推', line2: '政府通稿和名录托着认知' },
            { line1: '沙井工业上楼样板、孵化器', line2: '体量小，中小科技园印象' },
            { line1: '西乡专精特新总部、品质研发楼', line2: '偏办公，重生产接不住' },
        ],
    },
    {
        zone: '线上',
        label: ['房源与', '询盘入口'],
        cells: [
            { highlight: true, line1: '写字楼网 / 咚咚租 / 中介站为主', line2: '官网信息薄，询盘多停在比价' },
            { line1: '华润置地招商矩阵 + 项目官网', line2: '总部南迁新闻就能带客' },
            { line1: '写字楼网 / 咚咚租 / 中介站为主', line2: '品牌站弱，询盘停在面积和单价' },
            { line1: '政府名录 + 深投控 / 宝安实业招商', line2: '官方信源命中率最高' },
            { line1: '孵化器官网 + 沙井招商渠道', line2: '中小科技园询盘为主' },
            { line1: '专精特新基地官网', line2: '西乡总部楼询盘，很少进厂房比价' },
        ],
    },
    {
        zone: '渠道',
        label: ['获客结构'],
        cells: [
            { highlight: true, line1: '业主直签 + 中介分佣并行', line2: '产业链转介绍是暗线，线上看不见' },
            { line1: '业主直销 + 华润品牌带客', line2: '啤酒总部和工业上楼示范是钩子' },
            { line1: '集体业主 + 美生包租运营', line2: '中介分销铺量，转介绍尚未成势' },
            { line1: '国企共建 + 市区专项托底', line2: '名录和通稿就能带客' },
            { line1: '孵化器直招 + 辅导申报带客', line2: '体量小，靠政策和服务转化' },
            { line1: '准成本供给 + 专精特新折扣', line2: '小巨人 / 上市最高 5 折是钩子' },
        ],
    },
    {
        zone: '内容',
        label: ['公开内容', '长什么样'],
        cells: [
            { highlight: true, line1: '政府荣誉稿、本地新闻', line2: '缺选址对比、研产场景、租户故事' },
            { line1: '总部南迁、啤酒小镇、工业上楼', line2: '华润口径清晰，媒体稿充足' },
            { line1: '封顶 / 招商软文为主', line2: '租户故事和产业叙事都薄' },
            { line1: '政府通稿、工业上楼示范', line2: '市 20 大先进制造业园区反复出镜' },
            { line1: '孵化器认定、入驻率约 90%', line2: '中小科技孵化故事，不是总部叙事' },
            { line1: '专精特新培育、揭牌开园', line2: '研发总部口径清晰，不讲重生产' },
        ],
    },
    {
        zone: '搜索',
        label: ['搜索与 AI', '可见度'],
        cells: [
            { highlight: true, line1: '园区词条少，集团词条抢答案', line2: 'AI 容易把园区说成家电公司' },
            { line1: '品牌词独立，新产城出镜高', line2: '问「宝安工业上楼」时容易出现' },
            { line1: '品牌新、词条少', line2: '问宝安产业园时很少被单独点名' },
            { line1: 'C 端提及 54%、Top1 双第一', line2: 'AI 默认首选，官方信源托着' },
            { line1: 'C 端提及 36%，排第二', line2: '平均位次 NO. 7.0' },
            { line1: 'C 端提及 34%，排第三', line2: 'B 端 18%，也进前三' },
        ],
    },
];

function Cell({ cell, isLast }) {
    return (
        <div
            className={`px-5 py-2.5 flex flex-col justify-center gap-1.5 min-h-0 ${
                !isLast ? 'border-r border-white/10' : ''
            } ${cell.highlight ? 'bg-[#004CE5]/12' : 'bg-white/[0.02]'}`}
        >
            <p className="text-[15px] font-semibold text-white leading-relaxed">{keepEnd(cell.line1)}</p>
            <p className="text-[14px] text-zinc-400 leading-relaxed">{keepEnd(cell.line2)}</p>
        </div>
    );
}

export default function Page_BrandAdMatrix() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="flex-1 min-h-0 w-full max-w-[1760px] mx-auto px-6 pb-2.5 relative z-10 flex flex-col gap-3">
                <div className="shrink-0 pt-2 text-center px-10">
                    <h1 className="text-[32px] font-black text-white tracking-widest leading-none">
                        主流园区招商获客渠道对比
                    </h1>
                    <p className="mt-2 text-[20px] text-zinc-400 tracking-wide">
                        六家园放在同一张表上：比的是心智、房源入口，以及搜索和 AI 里有没有被讲清楚
                    </p>
                </div>

                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        <div className="px-3 py-3.5 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest text-[16px]">对比维度</span>
                        </div>
                        {brands.map((b, i) => (
                            <div
                                key={b.role}
                                className={`px-4 py-3 flex flex-col items-center justify-center ${
                                    i < brands.length - 1 ? 'border-r border-white/10' : ''
                                } ${b.highlight ? 'bg-[#004CE5]/20 relative overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,76,229,0.45)]' : ''}`}
                            >
                                {b.highlight ? <div className="absolute top-0 left-0 w-full h-1.5 bg-[#004CE5]" /> : null}
                                {Array.isArray(b.name) ? (
                                    b.name.map((line) => (
                                        <span
                                            key={line}
                                            className="font-bold text-white text-[17px] tracking-wide leading-tight text-center"
                                        >
                                            {line}
                                        </span>
                                    ))
                                ) : (
                                    <span className="font-bold text-white text-[17px] tracking-wide leading-tight text-center whitespace-nowrap">
                                        {b.name}
                                    </span>
                                )}
                                <span
                                    className={`text-[13px] font-bold mt-1 text-center leading-tight ${
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
                        {rows.map((row) => (
                            <div
                                key={row.zone}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-3 py-2 flex flex-col items-center justify-center gap-1 border-r border-white/10 bg-black/40">
                                    <span className="text-[14px] text-zinc-500 tracking-widest">{row.zone}</span>
                                    {row.label.map((line) => (
                                        <span
                                            key={line}
                                            className="font-bold text-zinc-100 text-center text-[15px] leading-snug whitespace-nowrap"
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </div>
                                {row.cells.map((cell, ci) => (
                                    <Cell key={ci} cell={cell} isLast={ci === row.cells.length - 1} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="shrink-0 text-right text-zinc-500 text-[15px] leading-relaxed">
                    数据来源：各园区公开招商口径；GEO ONE 481 / 482（2026-08）；官方信源命中率为监测口径
                </p>
            </div>
        </div>
    );
}
