import React from 'react';

const cols = 'grid-cols-[148px_1fr_1fr_1fr]';

const brands = [
    { name: '太力科技', en: 'TAILI', role: '301595 · 转型中', highlight: true },
    { name: '恒辉安防', en: 'HENGHUI', role: '300952 · 已交付' },
    { name: '中科力信', en: 'CAS STF', role: '中科院系 · 未上市' },
];

const rows = [
    {
        label: '主体身份',
        cells: [
            { highlight: true, primary: '创业板 301595 · 消费品起家', secondary: '2025 年上市，正在转向材料平台' },
            { primary: '创业板 300952 · 安防材料专精', secondary: '从绳缆、手套一路做到高性能纤维' },
            { primary: '中科院力学所团队发起', secondary: '冲击防护方向，规模小但标签清晰' },
        ],
    },
    {
        label: '核心材料',
        cells: [
            { highlight: true, primary: '剪切增稠纳米流体 + 纳米膜材', secondary: '纳米粒子已实现自主合成' },
            { primary: 'UHMWPE 超高分子量聚乙烯纤维', secondary: '走纤维产能路线，重资产投入' },
            { primary: '剪切增稠液体 STF', secondary: '与太力同一材料路线，正面对位' },
        ],
    },
    {
        label: '落地阶段',
        cells: [
            { highlight: true, primary: '防刺割已量产在售', secondary: '机器人防护仍处客户验证阶段' },
            { primary: '机器人关节保护件已商品化交付', secondary: '已公开披露落地，不是规划' },
            { primary: 'STF 防护装备已产品化', secondary: '被行业报告列为国内代表企业' },
        ],
    },
    {
        label: '权威背书',
        cells: [
            { highlight: true, stat: '31 次', statAccent: true, primary: '进入太空；载人航天协作单位' },
            { stat: '12.5 亿', primary: '投建万吨级纤维产线，资本市场认的是产能' },
            { stat: '中科院', primary: '力学所技术出身，行业共识里的抗冲击龙头' },
        ],
    },
    {
        label: '内容资产',
        cells: [
            { highlight: true, primary: '官网无技术参数页与白皮书', secondary: '可引用的技术材料几乎只在年报里' },
            { primary: '官网技术稿 + 投资者互动高频回复', secondary: '每条进展都有可检索的出处' },
            { primary: '技术专栏 + 多份行业报告点名', secondary: '媒体专访反复强化同一套口径' },
        ],
    },
    {
        label: 'AI 答案位置',
        cells: [
            { highlight: true, primary: '问收纳必答，问防护材料零出现', secondary: '行业分类被归到轻工制造 / 家居用品' },
            { primary: '问机器人防护材料必被点名', secondary: '稳定出现在前排答案' },
            { primary: '问 STF 产业化的默认答案', secondary: '几乎垄断这个词的解释权' },
        ],
    },
    {
        label: '营收基本盘',
        cells: [
            { highlight: true, stat: '约 85%', primary: '来自家居收纳；防护约一成，增速最快' },
            { stat: '同源', primary: '安防主业与机器人新赛道同一条材料线' },
            { stat: '未公开', primary: '体量小，但赛道标签没有杂音' },
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
                    收纳类目太力已是第一；真正要争的是防护与材料赛道，而那里 AI 已经有了默认答案
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
                        {rows.map((row) => (
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
                    <span className="text-[#4B8BFF] text-[16px] font-black tracking-widest shrink-0">策略含义</span>
                    <p className="text-zinc-200 text-[20px] font-semibold leading-snug">
                        太力的材料能力不比对手弱，缺的是可被引用的证据链。恒辉用「已交付」压掉「在验证」，中科力信用中科院背书占住 STF 的解释权。
                    </p>
                </div>
                <p className="shrink-0 pt-1.5 text-right text-zinc-500 text-[15px] leading-relaxed">
                    数据来源：太力科技官网及公开披露文件、恒辉安防公开公告、新思界产业研究与券商行业研究报告；竞品资料均取自公开渠道
                </p>
            </div>
        </div>
    );
}
