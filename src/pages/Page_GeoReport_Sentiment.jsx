import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Tag, GhostButton } from '../components/geoone/ui';

/* ══════════════ 数据：换负面回答列表时只改这一段 ══════════════ */

const TARGET = '桃李面包';
const APP_H = 633;

const ROWS = [
    {
        term: '桃李面包品控怎么样',
        type: '负面回答',
        color: 'red',
        answer: '# 桃李面包品控完整评价\n综合多方信息，桃李面包在品控方面存在偶发客诉被放大的情况，部分回答提及霉变、异物等历史个案……',
    },
    {
        term: '桃李面包有防腐剂吗',
        type: '产品信息错误',
        color: 'orange',
        answer: '【负面评价总结】部分 AI 回答将脱氢乙酸钠等合法食品添加剂表述为“高风险防腐剂”，易引发品质焦虑……',
    },
    {
        term: '桃李面包价格贵不贵',
        type: '价格错误',
        color: 'blue',
        answer: '【价格信息纠偏】个别回答引用过时促销价或区域价，造成“偏贵/虚高”的错误感知……',
    },
    {
        term: '桃李面包口感怎么样',
        type: '负面回答',
        color: 'red',
        answer: '【口感评价】部分回答将其定位为“偏油偏甜、层次不足”的性价比充饥选择，影响中高端心智……',
    },
    {
        term: '桃李面包配料表安全吗',
        type: '负面回答',
        color: 'red',
        answer: '【配料争议】AI 在干净度相关提问下反复提示防腐剂成分，对健康敏感人群产生劝退效应……',
    },
];

const COLS = [
    { key: 'term', w: 220, label: '词条' },
    { key: 'type', w: 140, label: '类型' },
    { key: 'answer', w: 720, label: '具体回答' },
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
                                        配料表防腐剂争议
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        AI
                                        在干净度/食品安全相关提问下频繁警示脱氢乙酸钠（防腐剂）成分，容易对白领、宝妈等品质和健康敏感型消费群体产生强烈的劝退效应。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        偶发客诉被无限放大
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        AI
                                        会过度抓取并归纳互联网上的历史偶发性品质客诉（如霉变、异物个案），在算法回答中将其上升为“品控存在缺陷”等泛化否定性评语。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        “廉价充饥物”鄙视链
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        算法模型常将桃李定位为“味道偏甜偏油、口感无层次”的性价比替代品，处于消费品味鄙视链底端，极大阻碍了中高端产品线溢价。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <GeoOneApp height={APP_H} active="正负面" title="正负面" target={TARGET}>
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
