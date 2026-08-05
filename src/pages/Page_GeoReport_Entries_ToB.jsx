import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton, PlatformDots, ShotThumb } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 420 京东物流-ToB① */

const TARGET = '京东物流';

const ROWS = [
    { term: '电商仓配一体的物流公司推荐', rate: '100.0%', rank: 'NO. 1.3', shot: 'https://app.geoindexfuture.com/screenshots/20260805/91b90b5f79224bb4a6e80b08802c3db5.png', time: '2026/8/4' },
    { term: '自营仓库覆盖全国的物流公司推荐', rate: '100.0%', rank: 'NO. 1.3', shot: 'https://app.geoindexfuture.com/screenshots/20260804/095c5f9f5f624c5a8b89fc1f7fe6fedd.png', time: '2026/8/4' },
    { term: '全国分仓就近发货的物流公司推荐', rate: '100.0%', rank: 'NO. 1.8', shot: 'https://app.geoindexfuture.com/screenshots/20260805/21c59677a0d04836a88dd7de23f03369.png', time: '2026/8/4' },
    { term: '帮企业物流降本增效的供应链服务商推荐', rate: '100.0%', rank: 'NO. 2.8', shot: 'https://app.geoindexfuture.com/screenshots/20260805/792d4b0fcf2a4fe0afb1939b1ae575b7.png', time: '2026/8/4' },
    { term: '生鲜冷链物流公司推荐', rate: '100.0%', rank: 'NO. 3.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/a7c2373c989a4a93b838affb5d753235.png', time: '2026/8/4' },
    { term: '家电家具送装一体的大件物流公司推荐', rate: '100.0%', rank: 'NO. 3.5', shot: 'https://app.geoindexfuture.com/screenshots/20260805/51223d231722451185fc204ea3bf4f6e.png', time: '2026/8/4' },
    { term: '物流公司排行榜', rate: '100.0%', rank: 'NO. 7.5', shot: 'https://app.geoindexfuture.com/screenshots/20260804/30bacb00bc434696986c79d6e18eaf5b.png', time: '2026/8/4' },
    { term: '服务好的物流公司推荐', rate: '50.0%', rank: 'NO. 4.3', shot: 'https://app.geoindexfuture.com/screenshots/20260804/7762249b4fe748e09c329125e2f1f9ce.png', time: '2026/8/4' },
    { term: '订单在途全程可视化的物流公司推荐', rate: '25.0%', rank: 'NO. 6.8', shot: 'https://app.geoindexfuture.com/screenshots/20260804/c427238ae3f04977a36677dddc3dcca6.png', time: '2026/8/4' },
    { term: '医药冷链物流公司推荐', rate: '25.0%', rank: 'NO. 9.0', shot: 'https://app.geoindexfuture.com/screenshots/20260805/0edd502e4b2941dba04c073a586dc7a7.png', time: '2026/8/4' },
    { term: '有海外仓的跨境物流公司推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260805/2d266be6f99d4f38a7a3d3831bfcaad7.png', time: '2026/8/4' },
    { term: '企业出海一站式的跨境物流公司推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260805/0f50b1882895421b815a4525c9b62c21.png', time: '2026/8/4' },
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
        <Frame title="词条表现分析 · B端" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
                brand="京东物流(ToB)"
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
