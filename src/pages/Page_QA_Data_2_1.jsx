import React from 'react';

export default function Page_QA_Data_2_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <div className="text-[1.1rem] leading-relaxed mb-6">
                    问题：2. 数据监测可视性：核查数据看板、实时监测、回溯归因、效果核验的可视性，杜绝数据黑箱
                </div>
                <p className="mb-6 text-[1.1rem] leading-relaxed">
                    我司提供 「数据看板 + 全量原始数据 + 任务审计日志」 三层可视化体系，确保每一个指标都可下钻到原始证据，每一次任务都可复核。
                </p>
                
                <p className="mb-4 text-[1.1rem] leading-relaxed">（1）数据看板：围绕核心指标 「提及率 × 提及位次」 构建多维度可视化看板：</p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/4">视图维度</th>
                            <th className="p-3 text-left">看板内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">项目总览</td><td className="p-3">提及率趋势、提及位次分布、首位提及率、Top3 提及率、行业影响力排名、被重点引用文章等， 一屏掌握项目整体表现</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">平台对比</td><td className="p-3">跨 AI 平台横向对比（DeepSeek / 豆包 / 千问 / 百度 AI / 元宝 …）—— 清晰看到每个平台的 GEO 表现差异</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">品牌对比</td><td className="p-3">目标品牌 vs 主要竞品 在提及率、提及位次上的对比，识别竞品优劣势</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">词条详情</td><td className="p-3">下钻到每一个查询词，可查看 AI 答案原文、品牌提及位置、排名、引用文章列表</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold">趋势分析</td><td className="p-3">日 / 周 / 月维度趋势图，优化效果一目了然</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
