import React from 'react';
import { CATEGORY_STYLE, TAG_STYLE } from '../data/geoKeywordsExhaust';

function Tag({ text, map }) {
    if (!text) return <span className="text-zinc-600">—</span>;
    const style = map[text] || { bg: 'rgba(161,161,170,0.15)', color: '#a1a1aa' };
    return (
        <span
            className="inline-flex items-center px-2 py-0.5 rounded-md text-[13px] xl:text-[14px] font-semibold leading-tight whitespace-nowrap border border-white/5"
            style={{ backgroundColor: style.bg, color: style.color }}
        >
            {text}
        </span>
    );
}

/**
 * Dark-theme「词条穷举及清洗」table — matches surrounding slide chrome.
 * @param {{ rows: Array, startIndex?: number }} props
 */
export default function FeishuKeywordsExhaustTable({ rows, startIndex = 1 }) {
    const track = rows[0]?.track || '创维创新谷';
    return (
        <div className="w-full h-full flex flex-col bg-[#0a0a0a] text-white overflow-hidden">
            <div className="shrink-0 h-9 px-3 flex items-center gap-3 border-b border-white/10 bg-white/[0.03] text-[12px] text-zinc-400">
                <span className="font-semibold text-zinc-100">全部词条</span>
                <span className="opacity-30">|</span>
                <span>一、词条穷举及清洗 · {track}</span>
                <span className="ml-auto text-[#7aa2ff] font-mono font-bold">{rows.length} 条</span>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full border-collapse table-fixed">
                    <thead>
                        <tr className="bg-white/[0.04] text-[13px] xl:text-[14px] text-zinc-300 font-semibold">
                            <th className="w-[3.2%] px-1 py-2 border-b border-white/[0.12] text-center font-medium">#</th>
                            <th className="w-[12%] px-2 py-2 border-b border-white/[0.12] text-left">类别</th>
                            <th className="w-[12%] px-2 py-2 border-b border-white/[0.12] text-left">名称</th>
                            <th className="w-[26%] px-2 py-2 border-b border-white/[0.12] text-left">名称解释</th>
                            <th className="w-[20%] px-2 py-2 border-b border-white/[0.12] text-left">词条生成</th>
                            <th className="w-[10%] px-2 py-2 border-b border-white/[0.12] text-left">词条清洗打标</th>
                            <th className="w-[16.8%] px-2 py-2 border-b border-white/[0.12] text-left">清洗打标说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr
                                key={`${startIndex + i}-${row.keyword}`}
                                className="bg-transparent even:bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
                            >
                                <td className="px-1 py-1.5 xl:py-2 border-b border-white/[0.08] text-center text-[13px] text-zinc-500 align-middle">
                                    {startIndex + i}
                                </td>
                                <td className="px-2 py-1.5 xl:py-2 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.category} map={CATEGORY_STYLE} />
                                </td>
                                <td className="px-2 py-1.5 xl:py-2 border-b border-white/[0.08] text-[14px] xl:text-[15px] font-semibold text-zinc-100 leading-snug align-middle">
                                    {row.name}
                                </td>
                                <td className="px-2 py-1.5 xl:py-2 border-b border-white/[0.08] text-[13px] xl:text-[14px] text-zinc-400 leading-snug align-middle">
                                    {row.explain}
                                </td>
                                <td className="px-2 py-1.5 xl:py-2 border-b border-white/[0.08] text-[14px] xl:text-[15px] font-bold text-[#7aa2ff] leading-snug align-middle">
                                    {row.keyword}
                                </td>
                                <td className="px-2 py-1.5 xl:py-2 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.tag} map={TAG_STYLE} />
                                </td>
                                <td className="px-2 py-1.5 xl:py-2 border-b border-white/[0.08] text-[12px] xl:text-[13px] text-zinc-500 leading-snug align-middle">
                                    {row.note || ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
