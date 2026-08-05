import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT } from '../components/geoone/GeoOneApp';
import {
    C, Card, Icon, Toggle, Checkbox, SoftTag, GhostButton,
    IconDeepSeek, IconDoubao, IconQwen, IconZgswcn, IconSite,
} from '../components/geoone/ui';
import { LineChart, BarChart, BarAxisLabels } from '../components/geoone/charts';

/* ══════════════ 数据：换成新的监测结果时只改这一段 ══════════════ */

const TARGET = '桃李面包';

const KPI = [
    { label: '提及率', value: '81.1%' },
    { label: '平均提及位次', value: 'NO. 3.4' },
    { label: '行业影响力排名', value: 'NO. 1' },
    {
        label: 'Top引用来源',
        icons: [<IconZgswcn key="a" size={26} />, <IconSite key="b" size={22} />, <IconSite key="c" size={22} />],
    },
];

const RATE = '81.1%';

const LINE_TICKS = ['86.1%', '83.6%', '81.1%', '78.6%', '76.1%'];
const LINE_POINT = { x: 0.5, tick: 2 };
const LINE_DATES = ['6月17日'];

const BAR_TICKS = [
    { label: '92%', v: 92 },
    { label: '86%', v: 86 },
    { label: '80%', v: 80 },
    { label: '74%', v: 74 },
    { label: '68%', v: 68 },
];
const BARS = [
    { label: 'DeepSeek', value: 83.3, icon: <IconDeepSeek size={24} /> },
    { label: '豆包', value: 89.6, icon: <IconDoubao size={24} /> },
    { label: '通义千问', value: 70.2, icon: <IconQwen size={24} /> },
];

/* ══════════════ 版式常量（取自截图像素采样） ══════════════ */

const KPI_TOP = 162;
const KPI_H = 131;
const KPI_W = 300;
const GAP = 19;
const CARD_TOP = 402;
const CARD_H = 481;
const CARD_W = 619;

function KpiCard({ item, left }) {
    return (
        <Card
            style={{
                position: 'absolute',
                left,
                top: KPI_TOP,
                width: KPI_W,
                height: KPI_H,
                padding: '22px 24px 0',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 600, color: C.text }}>{item.label}</span>
                <Icon.help size={15} style={{ color: C.faint }} />
            </div>
            {item.value ? (
                <div style={{ marginTop: 14, fontSize: 32, fontWeight: 800, letterSpacing: '-0.3px' }}>
                    {item.value}
                </div>
            ) : (
                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 9 }}>
                    {item.icons.map((ic, i) => (
                        <div
                            key={i}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: '50%',
                                background: i === 0 ? 'transparent' : C.soft,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {ic}
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
}

function ChartCardHead({ children }) {
    return (
        <>
            <div style={{ fontSize: 15, color: '#8b98a9' }}>目标产品提及率</div>
            <div style={{ marginTop: 2, fontSize: 34, fontWeight: 800, letterSpacing: '-0.5px' }}>
                {RATE}
            </div>
            {children}
        </>
    );
}

export default function Page_GeoReport_Dashboard() {
    return (
        <Frame title="核心指标定义与表现概览" aspect="1586/892.5">
            <GeoOneApp active="总览" title="总览" target={TARGET}>
                {KPI.map((k, i) => (
                    <KpiCard key={i} item={k} left={MAIN_LEFT + i * (KPI_W + GAP)} />
                ))}

                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: 322,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                    }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 20, fontWeight: 700 }}>
                        提及率
                        <Icon.help size={15} style={{ color: C.faint }} />
                    </span>
                    <GhostButton icon="arrowUpRight" height={31} fontSize={16}>
                        查看明细
                    </GhostButton>
                </div>

                <div style={{ position: 'absolute', left: MAIN_LEFT, top: 371, fontSize: 16, color: C.muted }}>
                    提及率随时间的变化趋势
                </div>
                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT + CARD_W + GAP,
                        top: 371,
                        fontSize: 16,
                        color: C.muted,
                    }}
                >
                    提及率在不同AI平台的对比
                </div>

                <Card
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: CARD_TOP,
                        width: CARD_W,
                        height: CARD_H,
                        padding: '26px 31px',
                    }}
                >
                    <div style={{ position: 'absolute', right: 28, top: 26, display: 'flex', alignItems: 'center', gap: 11 }}>
                        <Toggle on={false} size={1.15} />
                        <span style={{ fontSize: 17, color: C.text }}>竞品对比</span>
                    </div>
                    <ChartCardHead />
                    <div style={{ marginTop: 26 }}>
                        <LineChart
                            width={CARD_W - 62}
                            height={295}
                            ticks={LINE_TICKS}
                            points={[LINE_POINT]}
                            xLabels={LINE_DATES}
                        />
                    </div>
                    <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 32 }}>
                        <Checkbox checked size={19} />
                        <span style={{ fontSize: 17, color: C.text }}>{TARGET}</span>
                        <SoftTag>目标产品</SoftTag>
                    </div>
                </Card>

                <Card
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT + CARD_W + GAP,
                        top: CARD_TOP,
                        width: CARD_W,
                        height: CARD_H,
                        padding: '26px 31px',
                    }}
                >
                    <ChartCardHead />
                    <div style={{ marginTop: 26 }}>
                        <BarChart width={CARD_W - 62} height={295} ticks={BAR_TICKS} bars={BARS} />
                        <BarAxisLabels width={CARD_W - 62} bars={BARS} />
                    </div>
                </Card>
            </GeoOneApp>
        </Frame>
    );
}
