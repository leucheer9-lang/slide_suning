import React from 'react';
import { CLASSIFY1_STYLE, CLASSIFY2_STYLE } from '../data/geoKeywordsClassify';

function Tag({ text, map }) {
    if (!text) return <span className="text-zinc-600">—</span>;
    const style = map[text] || { bg: 'rgba(161,161,170,0.15)', color: '#a1a1aa' };
    return (
        <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[14px] xl:text-[15px] font-semibold leading-tight whitespace-nowrap border border-white/5"
            style={{ backgroundColor: style.bg, color: style.color }}
        >
            {text}
        </span>
    );
}

/**
 * Dark-theme「词条分类及扩展」table.
 * @param {{ rows: Array, startIndex?: number }} props
 */
export default function FeishuKeywordsClassifyTable({ rows, startIndex = 1 }) {
    const track = rows[0]?.track || '创维创新谷';
    return (
        <div className="w-full h-full flex flex-col bg-[#0a0a0a] text-white overflow-hidden">
            <div className="shrink-0 h-9 px-3 flex items-center gap-3 border-b border-white/10 bg-white/[0.03] text-[12px] text-zinc-400">
                <span className="font-semibold text-zinc-100">全部词条</span>
                <span className="opacity-30">|</span>
                <span>二、词条分类及扩展 · {track}</span>
                <span className="ml-auto text-[#7aa2ff] font-mono font-bold">{rows.length} 条</span>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full border-collapse table-fixed">
                    <thead>
                        <tr className="bg-white/[0.04] text-[14px] xl:text-[15px] text-zinc-300 font-semibold">
                            <th className="w-[5%] px-2 py-2.5 border-b border-white/[0.12] text-center font-medium">#</th>
                            <th className="w-[48%] px-3 py-2.5 border-b border-white/[0.12] text-left">词条生成</th>
                            <th className="w-[18%] px-3 py-2.5 border-b border-white/[0.12] text-left">词条分类1</th>
                            <th className="w-[29%] px-3 py-2.5 border-b border-white/[0.12] text-left">词条分类2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr
                                key={`${startIndex + i}-${row.keyword}`}
                                className="bg-transparent even:bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
                            >
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] text-center text-[14px] text-zinc-500 align-middle">
                                    {startIndex + i}
                                </td>
                                <td className="px-3 py-2 xl:py-2.5 border-b border-white/[0.08] text-[16px] xl:text-[17px] font-bold text-[#7aa2ff] leading-snug align-middle">
                                    {row.keyword}
                                </td>
                                <td className="px-3 py-2 xl:py-2.5 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.cat1} map={CLASSIFY1_STYLE} />
                                </td>
                                <td className="px-3 py-2 xl:py-2.5 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.cat2} map={CLASSIFY2_STYLE} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
