import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton, PlatformDots, ShotThumb } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 481 创维创新谷-ToC①，2026-08-14 */

const TARGET = '创维创新谷';

const TOTAL_ENTRIES = 25;

const ROWS = [
    { term: '宝安区高端产业园排行榜', rate: '100.0%', rank: 'NO. 9.5', shot: 'https://app.geoindexfuture.com/screenshots/20260814/0a0a483742254277a3f230f9d86bb123.png', time: '2026/8/14' },
    { term: '宝安区新型显示产业园推荐', rate: '100.0%', rank: 'NO. 3.0', shot: 'https://app.geoindexfuture.com/screenshots/20260807/4fd36aefcd914c6681ce05f06ce692fe.png', time: '2026/8/14' },
    { term: '宝安区产业园排行榜', rate: '100.0%', rank: 'NO. 10.0', shot: 'https://app.geoindexfuture.com/screenshots/20260813/45c11e08d314417a9e45f763ed57853e.png', time: '2026/8/14' },
    { term: '能研发又能办公的宝安区高端产业园推荐', rate: '50.0%', rank: 'NO. 6.5', shot: 'https://app.geoindexfuture.com/screenshots/20260807/0e0cb3b4212a4885b2a0cf7b503fcb9a.png', time: '2026/8/14' },
    { term: '宝安区科技产业园推荐', rate: '50.0%', rank: 'NO. 16.0', shot: 'https://app.geoindexfuture.com/screenshots/20260814/98e300ff02154e0581755a794ab02ad4.png', time: '2026/8/14' },
    { term: '宝安区电子信息产业园推荐', rate: '50.0%', rank: 'NO. 5.5', shot: 'https://app.geoindexfuture.com/screenshots/20260807/fd864f9b7c2f4cd2b612bfc147a5c0f2.png', time: '2026/8/14' },
    { term: '宝安区适合电子信息企业发展的产业园有哪些', rate: '50.0%', rank: 'NO. 5.5', shot: 'https://app.geoindexfuture.com/screenshots/20260814/15cf1d626431413ebb5f1be01c10f055.png', time: '2026/8/14' },
    { term: '宝安区研发办公一体化园区推荐', rate: '50.0%', rank: 'NO. 9.0', shot: 'https://app.geoindexfuture.com/screenshots/20260813/91640d10e5c4470aaa54bd36b8f92735.png', time: '2026/8/14' },
    { term: '宝安区生产研发一体化园区推荐', rate: '50.0%', rank: 'NO. 5.5', shot: 'https://app.geoindexfuture.com/screenshots/20260813/31111b453a4b40d48e8de5a2ceae0101.png', time: '2026/8/14' },
    { term: '宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/ee7226d5ba0c4b2f83a6933ff4ce0c79.png', time: '2026/8/14' },
    { term: '口碑好的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260814/d7c15de3c3e84c46bc019363451bd07b.png', time: '2026/8/14' },
    { term: '现成可入驻的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260814/b15ff428a1374781bb9fff35724e439b.png', time: '2026/8/14' },
    { term: '配套齐全的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/3243b8d6fca94060be2f2274947bd00a.png', time: '2026/8/14' },
    { term: '有人才公寓的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260814/ae5a004ba5064f98862fa2e780dd0248.png', time: '2026/8/14' },
    { term: '适合总部入驻的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/aecfeb9b644e4e8298ae6ac9271d2633.png', time: '2026/8/14' },
    { term: '有大厂总部的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260814/e2339f56f3654c38b4a15212e31a9e68.png', time: '2026/8/14' },
    { term: '有政策补贴的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/28b539bb8e68448687775c7214b3985c.png', time: '2026/8/14' },
    { term: '面积能灵活分割的宝安区高端产业园推荐', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260807/8cd1bd9d16864c389cf77d76281ead37.png', time: '2026/8/14' },
    { term: '宝安区适合科技企业入驻的产业园有哪些', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/8f432ebdd39347b992bc6752074eb00b.png', time: '2026/8/14' },
    { term: '宝安区适合智能硬件企业的产业园有哪些', rate: '0.0%', rank: '—', shot: 'https://app.geoindexfuture.com/screenshots/20260813/4f223d3d3af34fa9ae9dac5b24bdc8fc.png', time: '2026/8/14' },
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

/* 20 条词条 + 合计行要在 912.5-140-24 的表格区内不裁切：44 + 20×33 + 28 = 732 */
const ROW_H = 33;
const HEAD_H = 44;
const SHOT_W = 20;
const SHOT_H = 27;

export default function Page_GeoReport_Entries() {
    return (
        <Frame title="词条表现分析 · 优化词 C 端" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
                brand="创维创新谷(优化词C端)"
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
                                <PlatformDots size={20} />
                            </div>
                            <div style={{ width: COLS[6].w, flexShrink: 0, paddingLeft: 8 }}>
                                <ShotThumb src={r.shot} width={SHOT_W} height={SHOT_H} />
                            </div>
                            <div style={{ width: COLS[7].w, flexShrink: 0, paddingLeft: 8, fontSize: 14, color: C.muted }}>
                                {r.time}
                            </div>
                        </div>
                    ))}

                    <div
                        style={{
                            height: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingRight: 16,
                            fontSize: 13,
                            color: C.muted,
                        }}
                    >
                        共 {TOTAL_ENTRIES} 条词条，当前展示前 {ROWS.length} 条；{TOTAL_ENTRIES} 条中 9 条有提及，其余 16 条提及率均为 0.0%
                    </div>
                </div>
            </GeoOneApp>
        </Frame>
    );
}
