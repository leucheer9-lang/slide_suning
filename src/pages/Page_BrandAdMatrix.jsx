import React from 'react';

const cols = 'grid-cols-[176px_1fr_1fr_1fr]';

const platforms = [
    { name: '太力科技', en: 'TAILI', color: '#F59E0B', highlight: true },
    { name: '3M', en: 'Command', color: '#F97316' },
    { name: '恒辉安防', en: 'Henghui', color: '#EC4899' },
];

const rows = [
    {
        zone: '心智',
        label: '客户怎么认识它',
        cells: [
            { line1: '真空压缩袋第一品牌 · 航天同款', line2: '常被记成收纳品牌，材料认知几乎为零' },
            { line1: '全球材料科技公司 · 无痕系列', line2: '材料能力与消费品牌互相加持' },
            { line1: '安防材料上市公司 · 机器人概念', line2: '不做 C 端，认知全部押在 B 端' },
        ],
    },
    {
        zone: '线上',
        label: '流量与销售入口',
        cells: [
            { line1: '天猫 / 抖音 / 京东 / 亚马逊多店', line2: '线上约占八成，流量成本持续走高' },
            { line1: '官网技术库 + 各平台旗舰店', line2: '产品页带承重、材质、适用面材参数' },
            { line1: '官网技术稿 + 投资者互动平台', line2: '受众是机构和产业客户，不是消费者' },
        ],
    },
    {
        zone: '渠道',
        label: '获客结构',
        cells: [
            { line1: '品牌电商 + 全球 ODM + 军警 B 端', line2: 'B 端链路最长，公开内容几乎看不见' },
            { line1: '全球分销 + 工业直销 + 品牌授权', line2: '消费端与工业端共用一套技术叙事' },
            { line1: '工业直销 + 出口 + 产业链配套', line2: '全部资源压在单一 B 端叙事上' },
        ],
    },
    {
        zone: '内容',
        label: '公开内容长什么样',
        cells: [
            { line1: '十大品牌榜、导购种草、财报新闻', line2: '缺技术参数页、认证明细和应用白皮书' },
            { line1: '技术白皮书、应用案例、标准参与', line2: '每个产品都有可直接引用的参数' },
            { line1: '公告、机构调研、行业报告点名', line2: '新进展一出现就有可检索的出处' },
        ],
    },
    {
        zone: '搜索',
        label: '搜索与 AI 可见度',
        cells: [
            { line1: '收纳类问题必答，防护类零出现', line2: 'AI 把太力定义为家居用品企业' },
            { line1: '问挂钩、问工业胶带都能被点名', line2: '材料公司身份在 AI 里非常稳固' },
            { line1: '问机器人防护材料稳定出现', line2: '同一个问题里太力完全不在场' },
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
                        主流品牌营销获客渠道对比
                    </h1>
                    <p className="mt-3 text-[20px] text-zinc-400 tracking-wide">
                        太力和 3M 都是「材料能力 + 消费品牌」的组合，但只有 3M 把这件事讲进了搜索结果
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
