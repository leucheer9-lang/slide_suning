import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Tag, GhostButton } from '../components/geoone/ui';

/* ══════════════ 数据：换负面回答列表时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/negative-answers · 419 ToC + 420 ToB · 2026-08-04 */

const TARGET = '京东物流';
const APP_H = 633;

const ROWS = [
    {
        term: '能寄洗衣服被子的快递推荐',
        type: '价格错误',
        color: 'blue',
        answer:
            '回答点名「顺丰标快、京东标快不推荐」寄被子等轻泡货，称按小件首重续重会贵一倍；答案据此贬抑京东标快价格。',
    },
    {
        term: '网购退货上门取件方便的快递推荐',
        type: '价格错误',
        color: 'blue',
        answer:
            '回答给出京东退货小件/大件价，并称非京东场景散客价不如顺丰与通达系，构成价格错误叙事。',
    },
    {
        term: '当日达快递推荐',
        type: '负面回答',
        color: 'red',
        answer:
            '回答称达达快送等仅适 3–5 公里短途、跨区长途急件不推荐，把当日达能力窄化为商圈短途。',
    },
    {
        term: '性价比高的物流公司推荐',
        type: '负面回答',
        color: 'red',
        answer:
            'B端问答称京东快递（非会员）偏贵、该重量段不划算，强化“价格偏高 / 性价比低”印象。',
    },
    {
        term: '一体化供应链服务商推荐',
        type: '负面回答',
        color: 'red',
        answer:
            '回答将京东物流表述为「品牌溢价高」；对应研报实为正面评价「赢得品牌溢价」，属误读引用。',
    },
];

const COLS = [
    { key: 'term', w: 280, label: '词条' },
    { key: 'type', w: 120, label: '类型' },
    { key: 'answer', w: 680, label: '具体回答' },
    { key: 'action', w: 90, label: '操作' },
];

export default function Page_GeoReport_Sentiment() {
    return (
        <Frame
            title="正负面分析"
            aspect={`1586/${APP_H}`}
            footer={
                <div className="h-[28%] min-h-[170px] max-h-[220px] shrink-0 w-full">
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 lg:p-3.5 flex flex-col h-full justify-between gap-2 shadow-2xl">
                        <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white flex items-center gap-2 shrink-0 pl-0.5">
                            <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                            负面回答类型解析
                        </h3>

                        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        轻泡件 / 退货资费被标贵
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        AI 在寄被子洗衣、网购退货等场景把京东标快写成“按体积重会贵一倍 / 散客不如通达系”，容易把体积重计费机制放大成品牌价格劣势。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        当日达被窄化为短途
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        在「当日达」提问下，达达/京东秒送常被写成仅适 3–5 公里商圈，跨区急件不推荐，削弱「当日达 / 211」心智。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        「贵 / 溢价高」标签固化
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        B 端性价比、一体化供应链问答里反复出现“偏贵、性价比低、品牌溢价高”，需用可核验报价口径与场景选型表对冲。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <GeoOneApp height={APP_H} active="正负面" title="正负面" target={TARGET} brand="京东物流" brandSub="京东物流">
                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: 136,
                        width: MAIN_W,
                        bottom: 18,
                        border: `1px solid ${C.border}`,
                        borderRadius: 12,
                        overflow: 'hidden',
                        background: C.white,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 18px',
                            borderBottom: `1px solid ${C.border}`,
                        }}
                    >
                        <span style={{ fontSize: 17, fontWeight: 700 }}>负面回答列表</span>
                        <GhostButton iconLeft="coin" height={30} fontSize={14}>
                            设置价格范围
                        </GhostButton>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            height: 40,
                            alignItems: 'center',
                            background: C.headBg,
                            borderBottom: `1px solid ${C.border}`,
                            paddingLeft: 16,
                            fontSize: 13.5,
                            color: C.muted,
                            fontWeight: 600,
                        }}
                    >
                        {COLS.map((c) => (
                            <div key={c.key} style={{ width: c.w, flexShrink: 0, paddingRight: 12 }}>
                                {c.label}
                            </div>
                        ))}
                    </div>

                    <div style={{ flex: 1, overflow: 'hidden' }}>
                        {ROWS.map((r, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 72,
                                    borderBottom: `1px solid ${C.border}`,
                                    paddingLeft: 16,
                                }}
                            >
                                <div
                                    style={{
                                        width: COLS[0].w,
                                        flexShrink: 0,
                                        fontSize: 14.5,
                                        fontWeight: 600,
                                        paddingRight: 12,
                                        lineHeight: '20px',
                                        wordBreak: 'keep-all',
                                        overflowWrap: 'break-word',
                                        textWrap: 'pretty',
                                    }}
                                >
                                    {r.term}
                                </div>
                                <div style={{ width: COLS[1].w, flexShrink: 0, paddingRight: 12 }}>
                                    <Tag color={r.color}>{r.type}</Tag>
                                </div>
                                <div
                                    style={{
                                        width: COLS[2].w,
                                        flexShrink: 0,
                                        fontSize: 13.5,
                                        color: C.muted,
                                        paddingRight: 16,
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        whiteSpace: 'pre-wrap',
                                        lineHeight: '18px',
                                    }}
                                >
                                    {r.answer}
                                </div>
                                <div style={{ width: COLS[3].w, flexShrink: 0 }}>
                                    <GhostButton height={28} fontSize={13}>
                                        查看
                                    </GhostButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </GeoOneApp>
        </Frame>
    );
}
