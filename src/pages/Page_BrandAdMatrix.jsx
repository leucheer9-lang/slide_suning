import React from 'react';

const cols = 'grid-cols-[176px_1fr_1fr_1fr_1fr_1fr]';

const platforms = [
    { name: '苏宁易购', en: 'Suning', color: '#F59E0B', highlight: true },
    { name: '京东', en: 'JD', color: '#EF4444' },
    { name: '天猫 / 淘宝', en: 'Alibaba', color: '#A78BFA' },
    { name: '拼多多', en: 'PDD', color: '#F97316' },
    { name: '唯品会', en: 'Vipshop', color: '#EC4899' },
];

const rows = [
    {
        zone: '站内',
        label: '平台定位与心智',
        cells: [
            { line1: '家电 3C 强势 · O2O 大店', line2: '中高端家庭与以旧换新' },
            { line1: '3C 家电快消 · 自营 + 物流', line2: '一二线白领高净值男性' },
            { line1: '全品类纯平台 · 数字基建', line2: '年轻女性高频核心买家' },
            { line1: '百亿补贴 · 价格力搅局', line2: '下沉市场与性价比人群' },
            { line1: '品牌特卖清仓', line2: '二三线中产女性' },
        ],
    },
    {
        zone: '站内',
        label: '站内工具与形式',
        cells: [
            { line1: '星象 DMP + 金控搜索', line2: 'O2O 线下智能屏零售媒体' },
            { line1: '京准通快车 / 触点', line2: '搜索竞价 + 全路径信息流' },
            { line1: '万相台无界 + AI 万相', line2: '百灵平台首页开屏曝光' },
            { line1: '全站营销 / 多多视频', line2: '拼团裂变 + 多多进宝 CPS' },
            { line1: '自营排期控量', line2: '唯享客 CPS 去中心化导购' },
        ],
    },
    {
        zone: '站内',
        label: '站内计费与定向',
        cells: [
            { line1: 'CPC / CPM / CPT', line2: '星象 DMP，借力天猫底层投放' },
            { line1: 'CPC / CPM / CPD', line2: '九数 DMP · PLUS 高净值精定向' },
            { line1: '智能出价全覆盖', line2: '达摩盘 + AI 意图 · 破圈能力最强' },
            { line1: 'CPC / ROI 目标出价', line2: '拼购人群 + 补贴场景定向' },
            { line1: 'CPT / CPM / CPS', line2: '历史品牌定向 · 尺码协同过滤' },
        ],
    },
    {
        zone: '站外',
        label: '站外渠道组合',
        cells: [
            { line1: '区域本地生活 + 百度品牌专区', line2: '出海 B 端垂直媒体' },
            { line1: '腾讯生态（朋友圈 / 视频号）', line2: '字节 / B 站 / 央视 / 分众常规采买' },
            { line1: 'UniDesk 全网（抖音 / 小红书 / 微信）', line2: '大促主流 APP 开屏垄断覆盖' },
            { line1: '微信关系链裂变获客', line2: '抖音 / 快手 / B 站高频种草' },
            { line1: '长视频 OTT 热播剧', line2: '抖音快手效果买量 + 私域社群' },
        ],
    },
    {
        zone: '站外',
        label: '站外代表性打法',
        cells: [
            { line1: '区域下沉 + 大节点事件流量', line2: '2026 加码出海 B 端招商' },
            { line1: '电竞 JDG + 顶级体育赛事', line2: '「8 点不用熬」· 春晚跨年联动' },
            { line1: 'S 级综艺冠名 + 红猫计划', line2: '全网种草到站内转化闭环' },
            { line1: '「拼公子」全网心智轰炸', line2: '家电 3C 补贴抢量搅局' },
            { line1: '影视剧魔性中插口播', line2: '下沉微商 CPS 朋友圈裂变' },
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
            <p className="text-[20px] font-semibold text-white leading-snug">{cell.line1}</p>
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
                        主流电商站内外广告投放对比矩阵
                    </h1>
                    <p className="mt-3 text-[20px] text-zinc-400 tracking-wide">
                        站内外广告投放核心差异化对比
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
                                    className="font-black text-[26px] tracking-wider leading-none"
                                    style={{ color: p.color }}
                                >
                                    {p.name}
                                </span>
                                <span className="text-[14px] uppercase tracking-widest mt-2 text-zinc-500">
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
