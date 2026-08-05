import React from 'react';
import {
    ExcelShell,
    TitleBar,
    MetaLine,
    LogicLine,
    SubBanner,
    Cell,
    Stars,
} from '../components/PlatformFilterExcelTable';

/* ══════════════ 数据：换 A 组明细时只改这一段 ══════════════ */

const META = {
    source: 'geo-one',
    platforms: 'DeepSeek、豆包、元宝、通义千问',
    dateRange: '2026-06-07 ~ 2026-06-07',
    exportDate: '2026-06-08',
};

const LOGIC =
    '筛选逻辑: 查询四个AI平台引用来源中出现得最多的前10个网站，交叉合并统计，筛选出在≥2个平台Top10中都出现的前5个共性高频引用网站';

const ROWS = [
    {
        rank: 1,
        site: '新京报',
        total: 284,
        coverCount: 4,
        cover: 'DeepSeek、豆包、元宝、通义千问',
        deepseek: 19,
        doubao: 59,
        yuanbao: 78,
        tongyi: 128,
        stars: 5,
    },
    {
        rank: 2,
        site: '今日头条',
        total: 73,
        coverCount: 3,
        cover: '豆包、元宝、通义千问',
        deepseek: 0,
        doubao: 30,
        yuanbao: 35,
        tongyi: 8,
        stars: 4,
    },
    {
        rank: 3,
        site: 'QQ News',
        total: 113,
        coverCount: 2,
        cover: 'DeepSeek、元宝',
        deepseek: 14,
        doubao: 0,
        yuanbao: 99,
        tongyi: 0,
        stars: 3,
    },
    {
        rank: 4,
        site: '什么值得买社区频道',
        total: 104,
        coverCount: 2,
        cover: 'DeepSeek、豆包',
        deepseek: 55,
        doubao: 49,
        yuanbao: 0,
        tongyi: 0,
        stars: 3,
    },
    {
        rank: 5,
        site: '39健康网',
        total: 66,
        coverCount: 2,
        cover: '豆包、通义千问',
        deepseek: 0,
        doubao: 10,
        yuanbao: 0,
        tongyi: 56,
        stars: 3,
    },
];

const C = {
    title: '#1F4E79',
    head: '#1F4E79',
    sub: '#EBF3FB',
    subText: '#1F4E79',
    zebra: '#F7FBFF',
    border: '#C8D7E8',
    headBorder: 'rgba(255,255,255,0.22)',
    logic: '#1D6FBF',
};

const COLS = '0.55fr 1.35fr 0.85fr 0.95fr 2.1fr 0.85fr 0.7fr 0.7fr 0.85fr 0.95fr';
const HEADERS = [
    '排名',
    '网站名称',
    '总引用次数',
    '覆盖AI平台数',
    '覆盖平台',
    'DeepSeek',
    '豆包',
    '元宝',
    '通义千问',
    '建议权重',
];

function TableA() {
    return (
        <ExcelShell>
            <TitleBar bg={C.title}>【A组】所有 AI 平台普遍认可的平台</TitleBar>
            <MetaLine>
                数据来源: {META.source}　|　AI平台: {META.platforms}　|　数据日期: {META.dateRange}　|　导出日期:{' '}
                {META.exportDate}
            </MetaLine>
            <LogicLine color={C.logic}>{LOGIC}</LogicLine>
            <SubBanner bg={C.sub} color={C.subText}>
                交叉合并结果：A组 — 前5个共性高频引用网站
            </SubBanner>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: C.head,
                    color: '#fff',
                    fontSize: 13.5,
                    fontWeight: 700,
                    height: 40,
                    flexShrink: 0,
                }}
            >
                {HEADERS.map((h, i) => (
                    <Cell
                        key={h}
                        border={i < HEADERS.length - 1 ? C.headBorder : undefined}
                        style={{ fontSize: 13.5 }}
                    >
                        {h}
                    </Cell>
                ))}
            </div>

            <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                {ROWS.map((r, i) => (
                    <div
                        key={r.rank}
                        style={{
                            flex: 1,
                            minHeight: 0,
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            background: i % 2 === 1 ? C.zebra : '#fff',
                            borderBottom: `1px solid ${C.border}`,
                            fontSize: 14.5,
                        }}
                    >
                        <Cell border={C.border}>{r.rank}</Cell>
                        <Cell align="left" bold border={C.border} title={r.site}>
                            {r.site}
                        </Cell>
                        <Cell border={C.border} bold>
                            {r.total}
                        </Cell>
                        <Cell border={C.border}>{r.coverCount}</Cell>
                        <Cell align="left" border={C.border} title={r.cover} style={{ fontSize: 13 }}>
                            {r.cover}
                        </Cell>
                        <Cell border={C.border}>{r.deepseek}</Cell>
                        <Cell border={C.border}>{r.doubao}</Cell>
                        <Cell border={C.border}>{r.yuanbao}</Cell>
                        <Cell border={C.border}>{r.tongyi}</Cell>
                        <Cell>
                            <Stars n={r.stars} />
                        </Cell>
                    </div>
                ))}
            </div>
        </ExcelShell>
    );
}

export default function Page_PlatformFilterLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[10px] shrink-0 pointer-events-none" />

            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pt-4 pb-4 z-10 min-h-0 gap-5">
                <div className="w-full bg-white/[0.02] border border-[#004CE5]/20 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col gap-4 shadow-lg shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
                        <h2 className="text-2xl font-bold text-blue-100 tracking-widest">A组：共性白名单</h2>
                    </div>

                    <div className="grid grid-cols-[1.5fr_3fr] gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选维度
                            </span>
                            <p className="text-white/90 text-[1.2rem] font-bold tracking-wide mt-1">
                                所有 AI 平台普遍认可的信源平台
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选逻辑动作
                            </span>
                            <p className="text-zinc-300 text-[1.15rem] leading-relaxed mt-1">
                                查询三个 AI 平台引用来源中出现得最多的前 10 个网站，对其进行交叉合并统计，筛选出前 5
                                个共性高频引用网站（即所有平台赋予权重均较高的核心阵地）。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-1 relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-0">
                    <TableA />
                </div>
            </div>
        </div>
    );
}
