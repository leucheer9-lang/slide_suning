import React from 'react';

const cols = 'grid-cols-[108px_repeat(6,minmax(0,1fr))]';

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
        label: '产业定位',
        cells: [
            { highlight: true, lines: ['5G+8K / 电子信息主题园', '招链主配套，不是谁来都行'] },
            { lines: ['华润产城、啤酒总部', '圈层偏装备，电子配套对不上'] },
            { lines: ['智能制造 / 电子信息', '无链主，租户生态还没起来'] },
            { lines: ['工业母机、机器人、精密仪器', '先进制造总部 + 专精特新'] },
            { lines: ['机器人、智能装备孵化', '沙井中小科技主题园'] },
            { lines: ['专精特新总部基地', '研发办公，不接重生产'] },
        ],
    },
    {
        label: '载体能力',
        cells: [
            { highlight: true, lines: ['工业上楼 + 甲级办公 + 总部', '楼上研发、楼下中试'] },
            { lines: ['M1 厂房 + M0 研发', '拼承重、卸货、工业用电'] },
            { lines: ['研发楼 + 厂房 + 宿舍', '工改工，形态近但体量小'] },
            { lines: ['立体工厂 + 产研综合体', '承重 750kg，层高达 7.8 米'] },
            { lines: ['甲级办公 + 高层厂房', '产办合一，荷载 750kg'] },
            { lines: ['14 万㎡纯研发办公', '品质总部楼，重生产接不住'] },
        ],
    },
    {
        label: '交付节点',
        cells: [
            { highlight: true, lines: ['2016 年投用，现在就能住', '2023 省特色园，深圳当年唯一'] },
            { lines: ['啤酒总部已迁入尖岗山', '电子信息集聚还在形成'] },
            { lines: ['预计 2026 年中才交付', '现在带客也搬不进去'] },
            { lines: ['全市首个平方公里级工业上楼', '一号园满园，整体建成在 2031'] },
            { lines: ['茅洲山旧改，2019 获孵化器', '已运营，入驻率约 90%'] },
            { lines: ['2022 揭牌，2023 正式开园', '广东首个专精特新总部基地'] },
        ],
    },
    {
        label: '租金政策',
        cells: [
            { highlight: true, lines: ['挂牌 50–72 元，同带最低', '省级园身份，补贴可申报'] },
            { lines: ['挂牌 60–100 元 /㎡·月', '无省级园，靠华润品牌招商'] },
            { lines: ['研发楼 65–85 元 /㎡·月', '工改工，补贴落户叠不上'] },
            { lines: ['工业上楼均价不超过 35 元', '市区专项政策托住租金'] },
            { lines: ['租金约 35 元 /㎡·月起', '孵化器补贴约 5–30 元'] },
            { lines: ['挂牌约 35–59 元 /㎡·月', '小巨人 / 上市最高 5 折'] },
        ],
    },
    {
        label: '市场占位',
        cells: [
            { highlight: true, lines: ['C 端提及 24%，排第 4', 'B 端仅 2%，进不了首选'] },
            { lines: ['问宝安工业上楼时出镜高', '品牌声量大，GEO 榜落后'] },
            { lines: ['品牌新、词条少', 'AI 很少单独点名'] },
            { lines: ['C 端 54%、Top1 双第一', 'B 端 42% 第一，AI 默认首选'] },
            { lines: ['C 端提及 36%，排第二', '平均位次 NO. 7.0'] },
            { lines: ['C 端提及 34%，排第三', 'B 端 18%，也进前三'] },
        ],
    },
    {
        label: '客户认知',
        cells: [
            { highlight: true, lines: ['创维总部园 / 5G+8K 主题园', '常被搜成家电，石岩显偏远'] },
            { lines: ['华润产城新地标，更近南山', '电子圈层还没立住'] },
            { lines: ['兴东口工改工，看起来能换', '没有链主故事'] },
            { lines: ['工业上楼标杆、宝安必推', '政府通稿和名录托着认知'] },
            { lines: ['沙井工业上楼样板、孵化器', '体量小，中小科技园印象'] },
            { lines: ['西乡专精特新总部、品质研发楼', '偏办公，重生产接不住'] },
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
            {cell.lines.map((line) => (
                <p key={line} className="text-[14px] text-zinc-200 font-medium leading-relaxed">
                    {keepEnd(line)}
                </p>
            ))}
        </div>
    );
}

export default function Page_BrandCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-2 pb-2 relative z-10 px-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none mb-1.5">
                    核心竞品对比分析
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    雪花、甲岸在同一张选址表上截流；新桥东、全至、汇智在 AI 推荐里占位
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1760px] mx-auto px-6 pb-2.5 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        <div className="px-3 py-3.5 flex items-center justify-center border-r border-white/10">
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
                                <div className="px-3 py-2 flex items-center justify-center border-r border-white/10 bg-black/40">
                                    <span className="font-bold text-zinc-100 text-center text-[15px] leading-snug whitespace-nowrap">
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

                <div className="shrink-0 mt-2 bg-[#004CE5]/10 border border-[#004CE5]/30 rounded-xl px-10 py-2 flex items-center gap-4">
                    <span className="text-[#4B8BFF] text-[16px] font-black tracking-widest shrink-0">招商含义</span>
                    <p className="text-zinc-200 text-[20px] font-semibold leading-snug text-justify [text-justify:inter-ideograph]">
                        {keepEnd(
                            '雪花、甲岸是同一张选址表上的截流客；新桥东、全至、汇智是 AI 把创新谷挤出首选的名录竞品。物理竞争和算法占位，要分开打。',
                        )}
                    </p>
                </div>
                <p className="shrink-0 pt-1.5 text-right text-zinc-500 text-[15px] leading-relaxed">
                    数据来源：广东省工信厅、华润置地、深投控 / 宝安实业、全至科创园、汇智研发中心公开信息；GEO ONE 481 / 482（2026-08）；租金为市场挂牌或政策口径，非合同成交价
                </p>
            </div>
        </div>
    );
}
