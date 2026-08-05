import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton, PlatformDots, ShotThumb } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 419 京东物流-ToC① */

const TARGET = '京东物流';

const ROWS = [
    { term: '寄家具家电的快递推荐', rate: '100.0%', rank: 'NO. 1.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/fc76be65dc8a4266ac6b168eb7748fed.png', time: '2026/8/4' },
    { term: '寄家电能送装的快递推荐', rate: '100.0%', rank: 'NO. 1.8', shot: 'https://app.geoindexfuture.com/screenshots/20260805/2ce56064a53b4725829eccdb75dbdbdb.png', time: '2026/8/4' },
    { term: '服务好的快递推荐', rate: '100.0%', rank: 'NO. 2.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/1c982cd071204ef6a31c7604b6b42652.png', time: '2026/8/4' },
    { term: '口碑好的快递推荐', rate: '100.0%', rank: 'NO. 2.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/4d2905eae89743dfbbab1d36993d694b.png', time: '2026/8/4' },
    { term: '寄东西丢了好理赔的快递推荐', rate: '100.0%', rank: 'NO. 2.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/243da884b1074c2b99dc9e1531ab52c1.png', time: '2026/8/4' },
    { term: '快递员服务态度好的快递推荐', rate: '100.0%', rank: 'NO. 2.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/eb7837e06095459aae97cf1a0f84f512.png', time: '2026/8/4' },
    { term: '速度快的快递排行榜', rate: '100.0%', rank: 'NO. 2.3', shot: 'https://app.geoindexfuture.com/screenshots/20260805/b37e2651d7554bec9c7d0b79a4e13eaf.png', time: '2026/8/4' },
    { term: '寄手机电脑安全的快递推荐', rate: '100.0%', rank: 'NO. 2.3', shot: 'https://app.geoindexfuture.com/screenshots/20260805/f2c4cee3f9ce4fc49d88a90a19358e72.png', time: '2026/8/4' },
    { term: '寄生鲜水果不怕坏的快递推荐', rate: '100.0%', rank: 'NO. 2.5', shot: 'https://app.geoindexfuture.com/screenshots/20260805/2b99b21587f04aadb6594d9a0472437b.png', time: '2026/8/4' },
    { term: '寄快递哪家快递最快', rate: '50.0%', rank: 'NO. 4.8', shot: 'https://app.geoindexfuture.com/screenshots/20260805/ffa37c7e624a4f45bc0fd0cdad0f7211.png', time: '2026/8/4' },
    { term: '学生开学寄被子行李箱的快递推荐', rate: '25.0%', rank: 'NO. 4.3', shot: 'https://app.geoindexfuture.com/screenshots/20260805/b7f276cfa48a4028b09976838f1530c4.png', time: '2026/8/4' },
    { term: '服务丰富的一站式快递平台推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260805/68bebdc7b98944d398a2d78fdb17717a.png', time: '2026/8/4' },
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

export default function Page_GeoReport_Entries() {
    return (
        <Frame title="词条表现分析 · C端" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
                brand="京东物流(ToC)"
                brandSub="京东物流"
                avatar="京"
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
                </div>
            </GeoOneApp>
        </Frame>
    );
}
