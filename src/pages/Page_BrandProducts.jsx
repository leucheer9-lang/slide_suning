import React from 'react';

const cols = 'grid-cols-[120px_repeat(6,minmax(0,1fr))]';

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
        label: '空间产品',
        accent: '#004CE5',
        cells: [
            { highlight: true, lines: ['工业上楼 + 甲级办公 + 总部', '三期约 45 万㎡，现在就能租'] },
            { lines: ['M1 厂房 + M0 研发', '约 115 万㎡，荷载最高 1.5 吨'] },
            { lines: ['研发楼 + 厂房 + 宿舍', '约 17.5 万㎡，2026 年中才交'] },
            { lines: ['立体工厂 + 产研综合体', '承重 750kg，层高达 7.8 米'] },
            { lines: ['甲级办公 + 高层厂房', '约 16.8 万㎡，产办合一'] },
            { lines: ['4 栋纯研发办公塔楼', '约 14 万㎡，重生产接不住'] },
        ],
    },
    {
        label: '产城配套',
        accent: '#3B82F6',
        cells: [
            { highlight: true, lines: ['6 万㎡商场，含 IMAX 影院', '1,500 套公寓 + 商务酒店'] },
            { lines: ['约 4.8 万㎡啤酒小镇', '产业宿舍，偏年轻社交'] },
            { lines: ['37 层宿舍，约 181 套', '商业约 2,000㎡，配套更薄'] },
            { lines: ['规划 160 万㎡居住商业', '甘霖苑先开，整体要到 2031'] },
            { lines: ['公寓、食堂、商业街', '体量小，园内自循环'] },
            { lines: ['1 栋宿舍 + 裙楼商业', '有公园，没有家庭级商场'] },
        ],
    },
    {
        label: '产业服务',
        accent: '#10B981',
        cells: [
            { highlight: true, lines: ['13 家产业公司在园协同', '省级园身份，补贴可申报'] },
            { lines: ['华润品牌 + 总部南迁带客', '没有创维式链主协同'] },
            { lines: ['PLUS 产业运营平台', '无链主，租户生态还没起来'] },
            { lines: ['一站式政务 + 产业基金', '圈层是工业母机，不是电子'] },
            { lines: ['国家级孵化器辅导申报', '中小科技孵化，不是总部园'] },
            { lines: ['专精特新培育 + 投融资', '准成本供给，不接重生产'] },
        ],
    },
];

function Cell({ cell, isLast }) {
    return (
        <div
            className={`px-5 py-4 flex flex-col justify-center gap-2 min-h-0 ${
                !isLast ? 'border-r border-white/10' : ''
            } ${cell.highlight ? 'bg-[#004CE5]/12' : 'bg-white/[0.02]'}`}
        >
            {cell.lines.map((line) => (
                <p key={line} className="text-[16px] text-zinc-200 font-medium leading-relaxed">
                    {keepEnd(line)}
                </p>
            ))}
        </div>
    );
}

export default function Page_BrandProducts() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2.5 relative z-10 px-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none mb-1.5">
                    园区产品与业态矩阵
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    空间、配套、产业服务三件事，六家园放在同一张表上看
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1760px] mx-auto px-6 pb-3 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        <div className="px-4 py-3.5 flex items-center justify-center border-r border-white/10">
                            <span className="font-bold text-zinc-400 tracking-widest text-[16px]">对比项</span>
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
                                key={row.label}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-3 py-3 flex items-center justify-center border-r border-white/10 bg-black/40 relative">
                                    <div
                                        className="absolute top-0 left-0 w-1.5 h-full"
                                        style={{ backgroundColor: row.accent }}
                                    />
                                    <span className="font-bold text-zinc-100 text-center text-[18px] leading-snug whitespace-nowrap">
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

                <p className="shrink-0 pt-2 text-right text-zinc-500 text-[15px] leading-relaxed">
                    依据：各园区公开招商口径；雪花、甲岸、新桥东部分配套仍在建设或分期交付
                </p>
            </div>
        </div>
    );
}
