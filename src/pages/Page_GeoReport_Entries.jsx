import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */

const TARGET = '桃李面包';

const ROWS = [
    { term: '适合便利店长期铺货、口味多上新快的面包品牌推荐', rate: '66.7%', rank: 'NO. 4.3' },
    { term: '适合连锁超市供货的面包品牌推荐', rate: '100.0%', rank: 'NO. 3.0' },
    { term: '毛利高的面包批发品牌推荐', rate: '33.3%', rank: 'NO. 7.0' },
    { term: '适合便利店进货的面包品牌推荐', rate: '100.0%', rank: 'NO. 1.0' },
    { term: '适合商超长期合作的短保面包供应商推荐', rate: '66.7%', rank: 'NO. 2.5' },
    { term: '周转快、退货少的面包供货品牌有哪些', rate: '100.0%', rank: 'NO. 1.7' },
    { term: '适合夫妻店铺货的面包品牌怎么选', rate: '33.3%', rank: 'NO. 5.0' },
    { term: '批发价稳定、送货及时的面包品牌推荐', rate: '66.7%', rank: 'NO. 3.3' },
    { term: '适合便利店陈列的短保面包品类推荐', rate: '100.0%', rank: 'NO. 2.0' },
    { term: '高复购的批发面包品牌有哪些', rate: '66.7%', rank: 'NO. 4.0' },
    { term: '适合校园店进货的面包品牌推荐', rate: '33.3%', rank: 'NO. 6.0' },
    { term: '适合县城商超铺货的面包品牌推荐', rate: '66.7%', rank: 'NO. 3.7' },
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

function PlatformDots() {
    const colors = ['#4D6BFE', '#22C55E', '#F97316'];
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {colors.map((c, i) => (
                <div
                    key={i}
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        background: c,
                        border: '2px solid #fff',
                        marginLeft: i === 0 ? 0 : -6,
                        boxShadow: '0 0 0 1px #e2e8f0',
                    }}
                />
            ))}
        </div>
    );
}

function ShotThumb() {
    return (
        <div
            style={{
                width: 28,
                height: 38,
                borderRadius: 4,
                border: `1px solid ${C.border}`,
                background: 'linear-gradient(180deg,#f8fafc 0%,#e2e8f0 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
            }}
        >
            <div style={{ width: 14, height: 2, background: '#94a3b8', borderRadius: 1 }} />
            <div style={{ width: 14, height: 2, background: '#cbd5e1', borderRadius: 1 }} />
            <div style={{ width: 10, height: 2, background: '#cbd5e1', borderRadius: 1 }} />
        </div>
    );
}

export default function Page_GeoReport_Entries() {
    return (
        <Frame title="词条表现分析" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
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
                                <ShotThumb />
                            </div>
                            <div style={{ width: COLS[7].w, flexShrink: 0, paddingLeft: 8, fontSize: 14, color: C.muted }}>
                                2026/6/17
                            </div>
                        </div>
                    ))}
                </div>
            </GeoOneApp>
        </Frame>
    );
}
