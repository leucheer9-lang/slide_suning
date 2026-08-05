import React from 'react';
import { C, Tag, GhostButton, Icon, ShotThumb } from '../components/geoone/ui';
import { NEGATIVE_CASES } from './painpointNegatives.js';

/** 按 GEO ONE 真实截图还原：词条 / 类型 / 问题总结 / 会话截图 / 操作 + 底栏分页 */
function NegativeListTable({ rows = NEGATIVE_CASES }) {
    const cols = [
        { key: 'term', w: 260, label: '词条' },
        { key: 'type', w: 120, label: '类型', filter: true },
        { key: 'summary', flex: 1, label: '问题总结' },
        { key: 'shot', w: 100, label: '会话截图' },
        { key: 'action', w: 90, label: '操作' },
    ];

    return (
        <div
            className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white shadow-sm"
            style={{ border: `1px solid ${C.border}`, fontFamily: 'inherit' }}
        >
            <div
                className="shrink-0 flex items-center px-5"
                style={{ height: 52, borderBottom: `1px solid ${C.border}` }}
            >
                <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>负面回答列表</span>
            </div>

            <div
                className="shrink-0 flex items-center px-4"
                style={{
                    height: 42,
                    background: C.headBg,
                    borderBottom: `1px solid ${C.border}`,
                    fontSize: 13.5,
                    color: C.muted,
                    fontWeight: 600,
                }}
            >
                {cols.map((c) => (
                    <div
                        key={c.key}
                        style={{
                            width: c.w,
                            flex: c.flex || 'none',
                            flexShrink: c.flex ? 1 : 0,
                            paddingRight: 12,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                        }}
                    >
                        {c.label}
                        {c.filter ? <Icon.filter size={14} style={{ color: C.faint }} /> : null}
                    </div>
                ))}
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                {rows.map((r, i) => (
                    <div
                        key={i}
                        className="flex items-center px-4"
                        style={{
                            height: 76,
                            borderBottom: `1px solid ${C.border}`,
                        }}
                    >
                        <div
                            style={{
                                width: cols[0].w,
                                flexShrink: 0,
                                fontSize: 14.5,
                                fontWeight: 600,
                                color: C.text,
                                paddingRight: 12,
                                lineHeight: '20px',
                                wordBreak: 'keep-all',
                                overflowWrap: 'break-word',
                            }}
                        >
                            {r.term}
                        </div>
                        <div style={{ width: cols[1].w, flexShrink: 0, paddingRight: 12 }}>
                            <Tag color={r.color}>{r.type}</Tag>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                minWidth: 0,
                                fontSize: 14.5,
                                fontWeight: 500,
                                color: '#1e293b',
                                paddingRight: 16,
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                lineHeight: '20px',
                            }}
                        >
                            {r.summary}
                        </div>
                        <div
                            style={{
                                width: cols[3].w,
                                flexShrink: 0,
                                paddingRight: 12,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <ShotThumb src={r.screenshot} width={52} height={38} />
                        </div>
                        <div style={{ width: cols[4].w, flexShrink: 0 }}>
                            {r.screenshot ? (
                                <GhostButton height={28} fontSize={13}>
                                    查看
                                </GhostButton>
                            ) : (
                                <span style={{ color: C.faint, fontSize: 14, paddingLeft: 8 }}>—</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* 底栏：共 N 条 + 每页行数 + 分页 */}
            <div
                className="shrink-0 flex items-center justify-between px-5"
                style={{
                    height: 48,
                    borderTop: `1px solid ${C.border}`,
                    color: C.muted,
                    fontSize: 13,
                }}
            >
                <div className="flex items-center gap-4">
                    <span>共 {rows.length} 条数据</span>
                    <div className="flex items-center gap-2">
                        <span>每页行数</span>
                        <div
                            style={{
                                height: 28,
                                minWidth: 52,
                                padding: '0 8px',
                                border: `1px solid ${C.border}`,
                                borderRadius: 6,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 6,
                                color: C.text,
                                background: C.white,
                            }}
                        >
                            <span>10</span>
                            <Icon.chevronDown size={14} style={{ color: C.faint }} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1.5">
                    {[
                        { label: '«', disabled: true },
                        { label: '‹', disabled: true },
                        { label: '1', active: true },
                        { label: '›', disabled: true },
                        { label: '»', disabled: true },
                    ].map((b, i) => (
                        <div
                            key={i}
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: 6,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 13,
                                fontWeight: b.active ? 700 : 500,
                                background: b.active ? C.text : 'transparent',
                                color: b.active ? '#fff' : b.disabled ? C.faint : C.muted,
                                border: b.active ? 'none' : `1px solid transparent`,
                            }}
                        >
                            {b.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">02</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    偶发性服务事故极易被AI抓取放大
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed tracking-wide mb-4 shrink-0 text-justify">
                    物流服务发生在每天数千万次的线下交付中，破损、延误、丢件、派送纠纷这类个案在任何体量下都不可能归零。这类内容自带情绪和画面，在社交平台的传播效率远高于正常履约。而大模型抓取时并不区分“偶发个案”与“系统性问题”，容易把零星投诉归纳成“这家爱丢件、服务差”，在“哪家快递更靠谱”这类推荐问题上直接扣分。
                </p>

                <div className="flex-1 flex items-center justify-center min-h-0 pb-0">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="w-full h-full max-w-full max-h-full rounded-lg overflow-hidden bg-[#f4f6f9] p-3">
                            <NegativeListTable rows={NEGATIVE_CASES} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
