import React from 'react';
import { CLASSIFY1_STYLE, CLASSIFY2_STYLE } from '../data/geoKeywordsClassify';
import { SORT_STYLE } from '../data/geoKeywordsConfirm';

function Tag({ text, map, className = '' }) {
    if (!text) return <span className="text-zinc-600">—</span>;
    const style = map[text] || { bg: 'rgba(161,161,170,0.15)', color: '#a1a1aa' };
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[14px] xl:text-[15px] font-semibold leading-tight whitespace-nowrap border border-white/5 ${className}`}
            style={{ backgroundColor: style.bg, color: style.color }}
        >
            {text}
        </span>
    );
}

/**
 * Dark-theme「词条确定及关联提示词」table.
 * @param {{ rows: Array, startIndex?: number }} props
 */
export default function FeishuKeywordsConfirmTable({ rows, startIndex = 1 }) {
    return (
        <div className="w-full h-full flex flex-col bg-[#0a0a0a] text-white overflow-hidden">
            <div className="shrink-0 h-9 px-3 flex items-center gap-3 border-b border-white/10 bg-white/[0.03] text-[12px] text-zinc-400">
                <span className="font-semibold text-zinc-100">全部词条</span>
                <span className="opacity-30">|</span>
                <span>三、词条确定及关联提示词 · 苏宁易购</span>
                <span className="ml-auto text-[#7aa2ff] font-mono font-bold">{rows.length} 条</span>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full border-collapse table-fixed">
                    <thead>
                        <tr className="bg-white/[0.04] text-[14px] xl:text-[15px] text-zinc-300 font-semibold">
                            <th className="w-[3.5%] px-1 py-2.5 border-b border-white/[0.12] text-center font-medium">#</th>
                            <th className="w-[16%] px-2 py-2.5 border-b border-white/[0.12] text-left">词条生成</th>
                            <th className="w-[8%] px-2 py-2.5 border-b border-white/[0.12] text-left">词条分类1</th>
                            <th className="w-[9%] px-2 py-2.5 border-b border-white/[0.12] text-left">词条分类2</th>
                            <th className="w-[6%] px-2 py-2.5 border-b border-white/[0.12] text-left">词条排序</th>
                            <th className="w-[11%] px-2 py-2.5 border-b border-white/[0.12] text-left">排序说明</th>
                            <th className="w-[46.5%] px-2 py-2.5 border-b border-white/[0.12] text-left">关联提示词</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr
                                key={`${startIndex + i}-${row.keyword}`}
                                className="bg-transparent even:bg-white/[0.015] hover:bg-white/[0.03] transition-colors"
                            >
                                <td className="px-1 py-2 xl:py-2.5 border-b border-white/[0.08] text-center text-[14px] text-zinc-500 align-middle">
                                    {startIndex + i}
                                </td>
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] text-[16px] xl:text-[17px] font-bold text-[#7aa2ff] leading-snug align-middle">
                                    {row.keyword}
                                </td>
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.cat1} map={CLASSIFY1_STYLE} />
                                </td>
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.cat2} map={CLASSIFY2_STYLE} />
                                </td>
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] align-middle">
                                    <Tag text={row.sort} map={SORT_STYLE} className="!rounded-full min-w-[1.75rem] justify-center" />
                                </td>
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] text-[15px] xl:text-[16px] font-semibold text-zinc-200 leading-snug align-middle">
                                    {row.sortNote}
                                </td>
                                <td className="px-2 py-2 xl:py-2.5 border-b border-white/[0.08] text-[15px] xl:text-[16px] text-zinc-300 leading-relaxed align-middle whitespace-pre-line">
                                    {row.prompts}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
