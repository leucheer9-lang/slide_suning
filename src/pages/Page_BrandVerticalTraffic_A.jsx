import React from 'react';
import { trafficRows } from './data/verticalCompetitorTraffic';

/** 竞品流量获取链路 × 苏宁应对 — 经典对比矩阵表 */
export default function Page_BrandVerticalTraffic_A() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2 relative z-10 px-8">
                <h1 className="text-[38px] font-black text-white tracking-widest leading-none mb-1.5">
                    竞品流量获取链路 × 苏宁应对策略
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    三类垂直截流者如何拿流量，以及苏宁的对位打法
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-3 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 border border-white/10 rounded-2xl overflow-hidden bg-[#111] flex flex-col">
                    {/* Header */}
                    <div className="grid grid-cols-[360px_1fr_1fr] shrink-0 bg-black/70 border-b border-white/10">
                        <div className="px-5 py-3.5 flex items-center border-r border-white/10">
                            <span className="text-[18px] font-bold text-zinc-400 tracking-widest">竞品类型</span>
                        </div>
                        <div className="px-6 py-3.5 flex items-center border-r border-white/10">
                            <span className="text-[18px] font-bold text-zinc-400 tracking-widest">流量获取链路</span>
                        </div>
                        <div className="px-6 py-3.5 flex items-center bg-[rgba(245,158,11,0.08)]">
                            <span className="text-[18px] font-black text-[#F59E0B] tracking-widest">苏宁应对策略</span>
                        </div>
                    </div>

                    {/* Rows */}
                    <div
                        className="flex-1 min-h-0 grid"
                        style={{ gridTemplateRows: `repeat(${trafficRows.length}, minmax(0, 1fr))` }}
                    >
                        {trafficRows.map((row, i) => (
                            <div
                                key={row.no}
                                className={`grid grid-cols-[360px_1fr_1fr] min-h-0 ${
                                    i < trafficRows.length - 1 ? 'border-b border-white/10' : ''
                                }`}
                            >
                                {/* Type */}
                                <div
                                    className="px-5 py-3 border-r border-white/10 flex flex-col justify-center gap-2"
                                    style={{ borderLeftWidth: 5, borderLeftColor: row.accent }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="w-11 h-11 rounded-lg flex items-center justify-center text-[20px] font-black shrink-0"
                                            style={{ backgroundColor: row.accentSoft, color: row.accent }}
                                        >
                                            {row.no}
                                        </span>
                                        <div className="min-w-0">
                                            <div className="text-[26px] font-black leading-tight whitespace-nowrap">
                                                {row.type}
                                            </div>
                                            <div
                                                className="text-[17px] font-bold mt-0.5 whitespace-nowrap"
                                                style={{ color: row.accent }}
                                            >
                                                {row.hook}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pl-[56px]">
                                        {row.platforms.map((p) => (
                                            <span
                                                key={p}
                                                className="text-[15px] font-semibold text-zinc-200 bg-white/5 border border-white/10 px-2 py-0.5 rounded whitespace-nowrap"
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Chain */}
                                <div className="px-6 py-3 border-r border-white/10 flex flex-col justify-center gap-1.5">
                                    <div className="text-[26px] font-black text-white leading-snug">
                                        {row.chainPunch}
                                    </div>
                                    <p className="text-[20px] text-zinc-300 leading-snug">{row.chainDetail}</p>
                                </div>

                                {/* Suning */}
                                <div
                                    className="px-6 py-3 flex flex-col justify-center gap-1.5"
                                    style={{ backgroundColor: 'rgba(245,158,11,0.06)' }}
                                >
                                    <div className="text-[26px] font-black text-[#F59E0B] leading-snug">
                                        {row.suningPunch}
                                    </div>
                                    <p className="text-[20px] text-zinc-200 leading-snug">{row.suningDetail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
