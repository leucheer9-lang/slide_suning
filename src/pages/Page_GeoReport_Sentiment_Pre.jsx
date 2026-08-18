import React from 'react';
import Frame from '../components/geoone/Frame';
import { GeoOneStage } from '../components/geoone/GeoOneApp';
import { C, Card } from '../components/geoone/ui';
import { LineChart, SentimentBar } from '../components/geoone/charts';

/* ══════════════ 数据：换正负面基本情况时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/stats · 483 创维创新谷-监测词-ToC / 484 监测词-ToB · 2026-08-15 */

const WIDTH = 1608;
const HEIGHT = 574.5;
/** 图表以 C 端监测词（项目 483）为主展示；B 端监测词见页脚概述 */
const POSITIVE = 82.5;
const NEGATIVE = 17.5;
const POSITIVE_TOB = 85;
const POS_KEYWORDS = '配套完善、性价比高、交通便利';
const NEG_KEYWORDS = '地铁未通、物业推诿、噪音扰民、押金纠纷';
const LINE_TICKS = ['100%', '80%', '60%', '40%', '20%'];
/** tick：0=100%，每格 20%；82.5% → (100-82.5)/20 = 0.875 */
const LINE_POINTS = [{ x: 0.5, tick: 0.875 }];
const LINE_LABELS = ['8月15日'];

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
                                C 端监测词（20 个词条 / 40 次问答）正面回答率 {POSITIVE}%，正向标签集中在“{POS_KEYWORDS}”，与 45 万㎡产城综合体的配套定位一致；B 端监测词（20 个渠道合作词 / 40
                                次问答）正面率 {POSITIVE_TOB}%，正向标签为“配套成熟、政策支持、性价比高”。
                            </p>
                            <p>
                                负面共 13 条（C 端 7 条 {NEGATIVE}%、B 端 6 条 15%），关键词是“{NEG_KEYWORDS}”。其中 9 条属于产品信息错误——模型仍在说“园区无地铁直达”“应人石站仍在建”，没读到 13 号线已开通上盖的事实；另外 4 条来自公寓投诉帖。只有用户明确问“创维创新谷怎么样 /
                                物业怎么样”时模型才会去翻这些内容，这正是单独设 40 条监测词的用途——只看优化词，这部分风险根本不会暴露。
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
                            {NEGATIVE}% 负面
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
