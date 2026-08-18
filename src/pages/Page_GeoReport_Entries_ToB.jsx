import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton, PlatformDots, ShotThumb } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 482 创维创新谷-ToB①，2026-08-14 */

const TARGET = '创维创新谷';

const TOTAL_ENTRIES = 25;

const ROWS = [
    { term: '有现成房源的宝安区高端产业园推荐', rate: '50.0%', rank: 'NO. 4.5', shot: 'https://app.geoindexfuture.com/screenshots/20260813/fcaf32d73cda4a09bfc1aa37509d4ff0.png', time: '2026/8/14' },
    { term: '适合中介带客的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/4f442e6046af4391b47e8c4f453acf17.png', time: '2026/8/14' },
    { term: '支持招商渠道合作的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/900e4bc7efa64d2ab170e4db5d249864.png', time: '2026/8/14' },
    { term: '适合中介长期合作的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/043987b214704e6283e70f4977d13bc3.png', time: '2026/8/14' },
    { term: '值得中介主推的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/4d06df39305049888d8e68b11d92c394.png', time: '2026/8/14' },
    { term: '中介佣金高的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/9ba76632d2954cf2ac7289455fcad6a3.png', time: '2026/8/14' },
    { term: '中介佣金结算快的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/d4bcd68b3b6f4ae08097db7456c62103.png', time: '2026/8/14' },
    { term: '中介报备流程简单的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/7edb42788f644c64a8f82eb235a8d92a.png', time: '2026/8/14' },
    { term: '渠道带客成交效率高的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/b616c8dd128547858bc7394f2e89b336.png', time: '2026/8/14' },
    { term: '客户成交容易的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/33f5b072786b4e3e81f481ce88ef30cd.png', time: '2026/8/14' },
    { term: '房源充足的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/9c5c4ba7c1d54c46897489c7d19c73e6.png', time: '2026/8/14' },
    { term: '有大面积房源的宝安区产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/956fdb624b4d427193ae80df2ad39dfd.png', time: '2026/8/14' },
];

const COLS = [
    { key: 'check', w: 44, label: '' },
    { key: 'idx', w: 48, label: '#' },
    { key: 'term', w: 420, label: '词条' },
    { key: 'rate', w: 110, label: '提及率' },
    { key: 'rank', w: 150, label: '平均提及位次' },
    { key: 'plats', w: 150, label: '监测平台' },
    { key: 'shot', w: 110, label: '会话截图' },
    { key: 'time', w: 140, label: '最近更新时间' },
];

const ROW_H = 56;
const HEAD_H = 44;

export default function Page_GeoReport_Entries_ToB() {
    return (
        <Frame title="词条表现分析 · 优化词 B 端" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
                brand="创维创新谷(优化词B端)"
                brandSub="创维创新谷"
                avatar="创"
                toolbarRight={
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <Toggle on={false} size={1.1} />
                            <span style={{ fontSize: 16, color: C.text }}>平台对比</span>
                        </div>
                        <GhostButton iconLeft="columns" height={33} fontSize={15}>
                            管理列
                        </GhostButton>
                    </>
                }
            >
                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: 140,
                        width: MAIN_W,
                        bottom: 24,
                        border: `1px solid ${C.border}`,
                        borderRadius: 12,
                        overflow: 'hidden',
                        background: C.white,
                    }}
                >
                    {/* 表头 */}
                    <div
                        style={{
                            height: HEAD_H,
                            display: 'flex',
                            alignItems: 'center',
                            background: C.headBg,
                            borderBottom: `1px solid ${C.border}`,
                            paddingLeft: 8,
                            boxSizing: 'border-box',
                        }}
                    >
                        {COLS.map((c) => (
                            <div
                                key={c.key}
                                style={{
                                    width: c.w,
                                    flexShrink: 0,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: C.muted,
                                    paddingLeft: c.key === 'check' ? 10 : 8,
                                }}
                            >
                                {c.key === 'check' ? <Checkbox /> : c.label}
                            </div>
                        ))}
                    </div>

                    {/* 行 */}
                    {ROWS.map((r, i) => (
                        <div
                            key={i}
                            style={{
                                height: ROW_H,
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: `1px solid ${C.border}`,
                                paddingLeft: 8,
                                boxSizing: 'border-box',
                            }}
                        >
                            <div style={{ width: COLS[0].w, flexShrink: 0, paddingLeft: 10 }}>
                                <Checkbox />
                            </div>
                            <div style={{ width: COLS[1].w, flexShrink: 0, paddingLeft: 8, fontSize: 14, color: C.muted }}>
                                {i + 1}
                            </div>
                            <div
                                style={{
                                    width: COLS[2].w,
                                    flexShrink: 0,
                                    paddingLeft: 8,
                                    paddingRight: 12,
                                    fontSize: 14.5,
                                    color: C.text,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {r.term}
                            </div>
                            <div style={{ width: COLS[3].w, flexShrink: 0, paddingLeft: 8, fontSize: 15, fontWeight: 600 }}>
                                {r.rate}
                            </div>
                            <div style={{ width: COLS[4].w, flexShrink: 0, paddingLeft: 8, fontSize: 15, fontWeight: 600 }}>
                                {r.rank}
                            </div>
                            <div style={{ width: COLS[5].w, flexShrink: 0, paddingLeft: 8 }}>
                                <PlatformDots />
                            </div>
                            <div style={{ width: COLS[6].w, flexShrink: 0, paddingLeft: 8 }}>
                                <ShotThumb src={r.shot} />
                            </div>
                            <div style={{ width: COLS[7].w, flexShrink: 0, paddingLeft: 8, fontSize: 14, color: C.muted }}>
                                {r.time}
                            </div>
                        </div>
                    ))}

                    {/* 合计：本页展示 12 条，B 端优化词共 25 条 */}
                    <div
                        style={{
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingRight: 16,
                            fontSize: 13,
                            color: C.muted,
                        }}
                    >
                        共 {TOTAL_ENTRIES} 条词条，当前展示前 {ROWS.length} 条；{TOTAL_ENTRIES} 条中仅 1 条有提及，其余 24 条提及率均为 0.0%
                    </div>
                </div>
            </GeoOneApp>
        </Frame>
    );
}
