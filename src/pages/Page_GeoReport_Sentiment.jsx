import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Tag, GhostButton } from '../components/geoone/ui';

/* ══════════════ 数据：换负面回答列表时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/negative-answers · 483 监测词-ToC / 484 监测词-ToB · 2026-08-15 */
/* C 端 7 条 + B 端 6 条共 13 条负面；此处取覆盖两类场景的 5 条 */

const TARGET = '创维创新谷';
const APP_H = 633;

const ROWS = [
    {
        term: '创维创新谷配套怎么样',
        type: '产品信息错误',
        color: 'orange',
        answer:
            '回答写「园区内部配套很强，短板主要是地铁较远」，完全漏掉 13 号线上盖这一事实；引用的招租页标题里明明写着「13 号线上盖」。',
    },
    {
        term: '创维创新谷写字楼质量怎么样',
        type: '产品信息错误',
        color: 'orange',
        answer:
            '两条回答分别称「园区无地铁直达」「13 号线仍在建」，把交通列为主要短板，直接压低了整体评价结论。',
    },
    {
        term: '创维创新谷物业怎么样',
        type: '负面回答',
        color: 'red',
        answer:
            '该词条 2 条回答均引用质量万里行、315 投诉平台的公寓投诉帖，归纳为「施工噪音扰民、物业推诿、不退押金」。',
    },
    {
        term: '创维创新谷口碑怎么样',
        type: '负面回答',
        color: 'red',
        answer:
            '承认产业与园区环境评价高，但顺势点出居住与消费体验负面不少，引用的仍是同一批公寓施工噪音与押金纠纷投诉。',
    },
    {
        term: '创维创新谷和甲岸美生智谷哪个好带客',
        type: '产品信息错误',
        color: 'orange',
        answer:
            'B 端带客对比题里以「园区没有地铁」为由把甲岸美生智谷判为更适合带外部客户来访，交通信息错误直接影响渠道推荐结论。',
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
                                        地铁信息严重滞后
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        13 条负面里有 9 条属于这一类，说法包括「园区无地铁直达」「应人石站仍在建」。13 号线上盖已是既成事实，但网上缺少可被抓取的权威更新。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        对比题里被判给竞品
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        「和甲岸美生智谷哪个好带客」「和雪花科创城哪个好合作」等 4 条对比词，模型都以交通不便为由把优势判给对方，直接影响中介推荐意愿。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col min-h-0 h-full">
                                <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                    <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        公寓投诉帖被摘成园区结论
                                    </h4>
                                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-zinc-200 leading-relaxed text-justify">
                                        问物业、问口碑时，模型直接引用质量万里行与 315 平台的公寓投诉帖，把「施工噪音、不退押金」这类居住侧个案归纳成整个园区的物业水平。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <GeoOneApp height={APP_H} active="正负面" title="正负面" target={TARGET} brand="创维创新谷(监测词)" brandSub="创维创新谷" avatar="创">
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
