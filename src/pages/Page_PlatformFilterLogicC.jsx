import React from 'react';
import { ExcelShell, TitleBar, Cell } from '../components/PlatformFilterExcelTable';

/* ══════════════ 数据：换 C 组明细时只改这一段 ══════════════ */

/* C组参考品牌 = 行业头部竞品「新桥东先进制造产业园」（竞品命中数 TOP1），非自家品牌 */
const BRAND = '新桥东先进制造产业园';

const ROWS = [
    {
        rank: 1,
        site: '租天下',
        cites: 5,
        hits: 5,
        rate: '100.00%',
        deepseek: [0, 0],
        doubao: [5, 5],
        note: '豆包侧的厂房租赁垂直站，5 次引用全命中',
    },
    {
        rank: 2,
        site: '深圳外商投资企业协会',
        cites: 4,
        hits: 4,
        rate: '100.00%',
        deepseek: [0, 0],
        doubao: [4, 4],
        note: '本地招商政策权威站，4 次引用全命中',
    },
    {
        rank: 3,
        site: '360软件管家',
        cites: 4,
        hits: 4,
        rate: '100.00%',
        deepseek: [0, 0],
        doubao: [4, 4],
        note: '360 地图园区词条页，4 次引用全命中',
    },
    {
        rank: 4,
        site: '航城智谷（hangchengzhigu.cn）',
        cites: 3,
        hits: 3,
        rate: '100.00%',
        deepseek: [0, 0],
        doubao: [3, 3],
        note: '同区园区官网被豆包直接引用',
    },
    {
        rank: 5,
        site: '人民网健康',
        cites: 8,
        hits: 7,
        rate: '87.50%',
        deepseek: [2, 1],
        doubao: [6, 6],
        note: '央媒地方频道，8 次引用命中 7 次',
    },
];

const C = {
    title: '#7B2C2C',
    head: '#7B2C2C',
    zebra: '#FFF5F2',
    border: '#E8C8C4',
    headBorder: 'rgba(255,255,255,0.22)',
};

const COLS = '0.5fr 1.9fr 0.75fr 1.15fr 0.8fr 0.85fr 0.85fr 0.8fr 0.8fr 1.9fr';

const HEADERS = [
    '排名',
    '网站名称',
    '引用次数',
    `${BRAND}出现次数`,
    '命中率',
    'DeepSeek 引用',
    'DeepSeek 命中',
    '豆包 引用',
    '豆包 命中',
    '分析说明',
];

function TableC() {
    return (
        <ExcelShell>
            <TitleBar bg={C.title}>C组 — {BRAND} 品牌命中率最高的前5个平台</TitleBar>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: C.head,
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    height: 44,
                    flexShrink: 0,
                }}
            >
                {HEADERS.map((h, i) => (
                    <Cell
                        key={h}
                        border={i < HEADERS.length - 1 ? C.headBorder : undefined}
                        style={{
                            fontSize: 12,
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            lineHeight: 1.25,
                            padding: '4px 4px',
                            justifyContent: 'center',
                        }}
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
                            background: i % 2 === 0 ? C.zebra : '#fff',
                            borderBottom: `1px solid ${C.border}`,
                            fontSize: 13,
                        }}
                    >
                        <Cell border={C.border}>{r.rank}</Cell>
                        <Cell align="left" bold border={C.border} title={r.site}>
                            {r.site}
                        </Cell>
                        <Cell border={C.border}>{r.cites}</Cell>
                        <Cell border={C.border} bold>
                            {r.hits}
                        </Cell>
                        <Cell border={C.border} bold style={{ color: '#7B2C2C' }}>
                            {r.rate}
                        </Cell>
                        <Cell border={C.border}>{r.deepseek[0]}</Cell>
                        <Cell border={C.border}>{r.deepseek[1]}</Cell>
                        <Cell border={C.border}>{r.doubao[0]}</Cell>
                        <Cell border={C.border}>{r.doubao[1]}</Cell>
                        <Cell align="left" title={r.note} style={{ fontSize: 12.5 }}>
                            {r.note}
                        </Cell>
                    </div>
                ))}
            </div>
        </ExcelShell>
    );
}

export default function Page_PlatformFilterLogicC() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[10px] shrink-0 pointer-events-none" />

            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pt-4 pb-4 z-10 min-h-0 gap-5">
                <div className="w-full bg-white/[0.02] border border-[#004CE5]/20 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col gap-4 shadow-lg shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
                        <h2 className="text-2xl font-bold text-blue-100 tracking-widest">C组：高命中高频阵地</h2>
                    </div>

                    <div className="grid grid-cols-[1.5fr_3fr] gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选维度
                            </span>
                            <p className="text-white/90 text-[1.2rem] font-bold tracking-wide mt-1">
                                行业头部竞品收录偏好分析
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选逻辑动作
                            </span>
                            <p className="text-zinc-300 text-[1.15rem] leading-relaxed mt-1">
                                把行业头部竞品「新桥东先进制造产业园」单独深挖（竞品命中数 TOP1，全站命中率 49.3%，809
                                次引用中命中 399 次，覆盖 136 个平台），以命中率（品牌出现次数 / 该站总引用次数）为验证值，选出最高命中的
                                5 个平台（最低 3 次引用）。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-1 relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-0">
                    <TableC />
                </div>
            </div>
        </div>
    );
}
