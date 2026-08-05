import React from 'react';
import { ExcelShell, TitleBar, Cell } from '../components/PlatformFilterExcelTable';

/* ══════════════ 数据：换 B 组明细时只改这一段 ══════════════ */

const GROUPS = [
    {
        platform: 'DeepSeek',
        rows: [
            { rank: 1, site: '百度知道', self: 128, other: 8, trait: '显著偏好 (>3倍于其他平台)', tip: '在DeepSeek上重点投放' },
            { rank: 2, site: '淘宝网', self: 35, other: 15, trait: '明显偏好', tip: '在DeepSeek上重点投放' },
            { rank: 3, site: '首都医科大学附属北京儿童医院', self: 23, other: 0, trait: '该平台独有', tip: '在DeepSeek上重点投放' },
            { rank: 4, site: '宝宝树', self: 15, other: 1, trait: '显著偏好 (>3倍于其他平台)', tip: '在DeepSeek上重点投放' },
            { rank: 5, site: 'Dermatest', self: 12, other: 0, trait: '该平台独有', tip: '在DeepSeek上重点投放' },
        ],
    },
    {
        platform: '豆包',
        rows: [
            { rank: 1, site: '抖音', self: 80, other: 0, trait: '该平台独有', tip: '在豆包上重点投放' },
            { rank: 2, site: '界面新闻', self: 41, other: 36, trait: '明显偏好', tip: '在豆包上重点投放' },
            { rank: 3, site: '妈妈网', self: 37, other: 21, trait: '明显偏好', tip: '在豆包上重点投放' },
            { rank: 4, site: '新浪新闻', self: 35, other: 4, trait: '显著偏好 (>3倍于其他平台)', tip: '在豆包上重点投放' },
            { rank: 5, site: '买购网', self: 19, other: 11, trait: '明显偏好', tip: '在豆包上重点投放' },
        ],
    },
    {
        platform: '元宝',
        rows: [
            { rank: 1, site: '品牌加盟网', self: 23, other: 5, trait: '显著偏好 (>3倍于其他平台)', tip: '在元宝上重点投放' },
            { rank: 2, site: '京东', self: 23, other: 11, trait: '明显偏好', tip: '在元宝上重点投放' },
            { rank: 3, site: 'product.01baby.com', self: 17, other: 0, trait: '该平台独有', tip: '在元宝上重点投放' },
            { rank: 4, site: '淘宝网', self: 13, other: 37, trait: '其他平台引用较多', tip: '在元宝上重点投放' },
            { rank: 5, site: '博禾医生', self: 11, other: 3, trait: '显著偏好 (>3倍于其他平台)', tip: '在元宝上重点投放' },
        ],
    },
    {
        platform: '通义千问',
        rows: [
            { rank: 1, site: '夸克', self: 48, other: 0, trait: '该平台独有', tip: '在通义千问上重点投放' },
            { rank: 2, site: '界面新闻', self: 21, other: 56, trait: '其他平台引用较多', tip: '在通义千问上重点投放' },
            { rank: 3, site: '哔哩哔哩', self: 16, other: 0, trait: '该平台独有', tip: '在通义千问上重点投放' },
            { rank: 4, site: '大众网', self: 6, other: 2, trait: '显著偏好 (>3倍于其他平台)', tip: '在通义千问上重点投放' },
            { rank: 5, site: '搜狐网', self: 6, other: 18, trait: '其他平台引用较多', tip: '在通义千问上重点投放' },
        ],
    },
];

const C = {
    title: '#375623',
    head: '#548235',
    zebra: '#EAF4E8',
    row: '#F4FAF2',
    border: '#C5D9B8',
    headBorder: 'rgba(255,255,255,0.22)',
    groupBg: '#DDEED6',
};

const COLS = '0.95fr 0.55fr 1.6fr 1.05fr 1.15fr 1.7fr 1.4fr';
const HEADERS = [
    'AI平台',
    '排名',
    '网站名称',
    '该平台引用次数',
    '其他平台引用次数',
    '差异化特征',
    '建议',
];

function TableB() {
    return (
        <ExcelShell>
            <TitleBar bg={C.title}>B组 — 各AI平台差异化独有高频引用网站 (每平台5个)</TitleBar>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: C.head,
                    color: '#fff',
                    fontSize: 13.5,
                    fontWeight: 700,
                    height: 38,
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
                {GROUPS.map((g) => (
                    <div
                        key={g.platform}
                        style={{
                            flex: 1,
                            minHeight: 0,
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            borderBottom: `1px solid ${C.border}`,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: C.groupBg,
                                borderRight: `1px solid ${C.border}`,
                                fontWeight: 800,
                                fontSize: 14.5,
                                color: '#2F4A1E',
                                letterSpacing: '0.04em',
                            }}
                        >
                            {g.platform}
                        </div>

                        <div style={{ gridColumn: '2 / -1', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                            {g.rows.map((r, i) => (
                                <div
                                    key={`${g.platform}-${r.rank}`}
                                    style={{
                                        flex: 1,
                                        minHeight: 0,
                                        display: 'grid',
                                        gridTemplateColumns: '0.55fr 1.6fr 1.05fr 1.15fr 1.7fr 1.4fr',
                                        background: i % 2 === 1 ? C.zebra : C.row,
                                        borderBottom: i < g.rows.length - 1 ? `1px solid ${C.border}` : 'none',
                                        fontSize: 14,
                                    }}
                                >
                                    <Cell border={C.border}>{r.rank}</Cell>
                                    <Cell align="left" bold border={C.border} title={r.site}>
                                        {r.site}
                                    </Cell>
                                    <Cell border={C.border} bold>
                                        {r.self}
                                    </Cell>
                                    <Cell border={C.border}>{r.other}</Cell>
                                    <Cell align="left" border={C.border} title={r.trait} style={{ fontSize: 13 }}>
                                        {r.trait}
                                    </Cell>
                                    <Cell align="left" title={r.tip} style={{ fontSize: 13 }}>
                                        {r.tip}
                                    </Cell>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ExcelShell>
    );
}

export default function Page_PlatformFilterLogicB() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[10px] shrink-0 pointer-events-none" />

            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pt-4 pb-4 z-10 min-h-0 gap-5">
                <div className="w-full bg-white/[0.02] border border-[#004CE5]/20 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col gap-4 shadow-lg shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
                        <h2 className="text-2xl font-bold text-blue-100 tracking-widest">B组：平台特异性</h2>
                    </div>

                    <div className="grid grid-cols-[1.5fr_3fr] gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选维度
                            </span>
                            <p className="text-white/90 text-[1.2rem] font-bold tracking-wide mt-1">
                                每个 AI 平台偏好的特定信源平台
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选逻辑动作
                            </span>
                            <p className="text-zinc-300 text-[1.15rem] leading-relaxed mt-1">
                                针对不同 AI 平台偏好，每个平台筛选出1个特定网站，最能体现该 AI
                                平台差异化特征和信息抓取习惯。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-1 relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-0">
                    <TableB />
                </div>
            </div>
        </div>
    );
}
