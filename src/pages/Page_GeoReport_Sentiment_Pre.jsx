import React from 'react';
import Frame from '../components/geoone/Frame';
import { GeoOneStage } from '../components/geoone/GeoOneApp';
import { C, Card } from '../components/geoone/ui';
import { LineChart, SentimentBar } from '../components/geoone/charts';

/* ══════════════ 数据：换正负面基本情况时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/stats · 项目 419 ToC · 2026-08-04 */

const WIDTH = 1608;
const HEIGHT = 574.5;
const POSITIVE = 97.5;
const POS_KEYWORDS = '时效快、服务规范、服务体验好';
const NEG_KEYWORDS = '不推荐、适用场景有限、价格偏高、性价比低、价格偏贵';
const LINE_TICKS = ['100%', '80%', '60%', '40%', '20%'];
/** tick：0=100%，每格 20%；97.5% → (100-97.5)/20 = 0.125 */
const LINE_POINTS = [{ x: 0.5, tick: 0.125 }];
const LINE_LABELS = ['8月4日'];

export default function Page_GeoReport_Sentiment_Pre() {
    return (
        <Frame
            title="正负面分析"
            aspect={`${WIDTH}/${HEIGHT}`}
            footer={
                <div className="h-[26%] min-h-[145px] max-h-[190px] shrink-0 w-full">
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3.5 lg:px-6 lg:py-4 flex flex-col h-full justify-center">
                        <h3 className="text-[21px] lg:text-[23px] xl:text-[24.5px] font-bold text-white flex items-center gap-2.5 shrink-0 mb-3">
                            <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                            基本情况概述
                        </h3>
                        <div className="pl-[14px] text-[15px] lg:text-[16px] xl:text-[17.5px] text-zinc-300 leading-relaxed font-normal flex flex-col gap-2.5">
                            <p>
                                在针对京东物流的定向监测中，C 端正面回答率达 {POSITIVE}%（B 端 98.3%），主流正向标签高度统一：“{POS_KEYWORDS}”，被 AI
                                视为时效与服务体验兼备的优选快递。
                            </p>
                            <p>
                                负面声量仅 {100 - POSITIVE}
                                %，但焦点集中在“{NEG_KEYWORDS}”——多出现在轻泡件计费、退货散客价、当日达适用半径等场景。声量虽低，仍需在比价与场景边界类问答中持续纠偏，避免被固化为“贵 / 不划算”的默认印象。
                            </p>
                        </div>
                    </div>
                </div>
            }
        >
            <GeoOneStage width={WIDTH} height={HEIGHT} align="center">
                <div
                    style={{
                        position: 'absolute',
                        left: 36,
                        top: 28,
                        fontSize: 24,
                        fontWeight: 800,
                    }}
                >
                    正负面分析
                </div>

                <Card
                    style={{
                        position: 'absolute',
                        left: 36,
                        top: 80,
                        width: 760,
                        height: 460,
                        padding: '24px 28px',
                    }}
                >
                    <div style={{ fontSize: 15, color: C.muted, marginBottom: 14 }}>
                        目标产品正面回答率随时间的变化趋势
                    </div>
                    <div style={{ fontSize: 14, color: C.muted }}>正面回答率</div>
                    <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 18 }}>{POSITIVE}%</div>
                    <LineChart
                        width={700}
                        height={300}
                        ticks={LINE_TICKS}
                        points={LINE_POINTS}
                        xLabels={LINE_LABELS}
                    />
                </Card>

                <Card
                    style={{
                        position: 'absolute',
                        left: 816,
                        top: 80,
                        width: 756,
                        height: 460,
                        padding: '24px 32px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{ fontSize: 15, color: C.muted, marginBottom: 28 }}>
                        目标产品正负面回答分布
                    </div>

                    <div style={{ marginBottom: 22 }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: C.green, marginBottom: 8 }}>
                            {POSITIVE}% 正面
                        </div>
                        <div style={{ fontSize: 17, color: C.text }}>{POS_KEYWORDS}</div>
                    </div>

                    <div style={{ height: 1, background: C.border, margin: '8px 0 22px' }} />

                    <div style={{ marginBottom: 28 }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: C.red, marginBottom: 8 }}>
                            {(100 - POSITIVE).toFixed(1)}% 负面
                        </div>
                        <div style={{ fontSize: 17, color: C.text }}>{NEG_KEYWORDS}</div>
                    </div>

                    <div style={{ height: 1, background: C.border, margin: '4px 0 28px' }} />

                    <div style={{ marginTop: 'auto' }}>
                        <SentimentBar width={690} positive={POSITIVE} height={28} />
                    </div>
                </Card>
            </GeoOneStage>
        </Frame>
    );
}
