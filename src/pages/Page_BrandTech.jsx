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
        no: '01',
        label: ['链主在场', '产业就近配套'],
        cells: [
            { highlight: true, lines: ['彩电全球总部在园带着走', '5G+8K 上下游近 90 家'] },
            { lines: ['华润啤酒总部在，圈层散', '电子配套企业对不上'] },
            { lines: ['没有制造巨头带着走', '偏初创和轻量 5G'] },
            { lines: ['国企共建，无实业链主', '招的是工业母机、机器人'] },
            { lines: ['无链主总部在园', '机器人中小企业扎堆'] },
            { lines: ['无实业链主', '专精特新总部，不是供货圈'] },
        ],
    },
    {
        no: '02',
        label: ['研产办住一体', '产城闭环'],
        cells: [
            { highlight: true, lines: ['上楼生产 + 办公 + 商场公寓', '现在就能住的产城闭环'] },
            { lines: ['厂房研发宿舍商业都有', '2026 全面投用，闭环在建'] },
            { lines: ['形态近：研发厂房宿舍', '体量小、商业薄、还没交付'] },
            { lines: ['规划学校酒店宿舍商业', '一号园先开，整体到 2031'] },
            { lines: ['研产办 + 公寓食堂商业', '闭环在，体量只有 16.8 万㎡'] },
            { lines: ['研发办公 + 宿舍 + 商业', '没有工业上楼，重产线接不住'] },
        ],
    },
    {
        no: '03',
        label: ['政策身份', '可以叠加使用'],
        cells: [
            { highlight: true, lines: ['2023 省特色园，深圳唯一', '桃花源 + 专业园可叠加申报'] },
            { lines: ['没有省级特色园身份', '靠华润品牌和上楼示范招商'] },
            { lines: ['工改工，园方身份薄', '补贴落户叠不上'] },
            { lines: ['市 20 大先进制造业园区', '市区专项，租金均价 ≤35 元'] },
            { lines: ['国家级科技企业孵化器', '孵化器补贴约 5–30 元'] },
            { lines: ['广东首个专精特新基地', '小巨人 / 上市最高租金 5 折'] },
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

export default function Page_BrandTech() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2.5 relative z-10 px-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none mb-1.5">
                    园区核心能力壁垒
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    链主、闭环、政策身份，六家园用同一把尺子量
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
                                key={row.no}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-4 py-3 flex flex-col items-center justify-center gap-1 border-r border-white/10 bg-black/40">
                                    <span className="text-[15px] font-black tracking-widest text-[#4B8BFF]">
                                        {row.no}
                                    </span>
                                    {row.label.map((line) => (
                                        <span
                                            key={line}
                                            className="font-bold text-zinc-100 text-center text-[17px] leading-snug whitespace-nowrap"
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

                <p className="shrink-0 pt-2 text-right text-zinc-500 text-[15px] leading-relaxed">
                    依据：广东省特色产业园名单、华润置地、深投控 / 宝安实业、全至科创园、汇智研发中心公开信息
                </p>
            </div>
        </div>
    );
}
