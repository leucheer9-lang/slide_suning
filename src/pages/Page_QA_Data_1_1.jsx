import React from 'react';

export default function Page_QA_Data_1_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-8">2、实战效果与数据</h1>
                <div className="text-[1.1rem] leading-relaxed mb-6">
                    问题：1. 核心效果指标：评估意图占位、内容修正等核心优化成果，验证GEO 实际业务价值；同时对考核标准的有效性、稳定性，有明确且高标准的承诺
                </div>
                <p className="mb-4 text-[1.1rem] leading-relaxed">
                    我司基于自研的 GEO 监测体系，建立了一套简洁、可复核、行业通用的效果指标，所有指标均可量化、可追溯、可承诺：
                </p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-[15%]">指标</th>
                            <th className="p-3 text-left border-r border-zinc-700 w-[30%]">定义</th>
                            <th className="p-3 text-left border-r border-zinc-700 w-[25%]">计算方式</th>
                            <th className="p-3 text-left w-[30%]">默认承诺</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">提及率</td><td className="p-3 border-r border-zinc-800">在目标词条下，AI 答案中是否出现目标品牌的比例</td><td className="p-3 border-r border-zinc-800">提及次数 ÷ 总查询次数</td><td className="p-3">阶段性提升，对标行业基线 +30% 以上</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">提及位次</td><td className="p-3 border-r border-zinc-800">目标品牌在 AI 答案品牌列表中的排名位置（第 1、第 2、第 3…）</td><td className="p-3 border-r border-zinc-800">取每次提及的具体位次</td><td className="p-3">持续向前推进，Top3 占比逐月提升</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold">首位提及率</td><td className="p-3 border-r border-zinc-800">目标品牌排在第 1 位的次数 / 总提及次数</td><td className="p-3 border-r border-zinc-800">首位次数 ÷ 总查询次数</td><td className="p-3">持续提升，重点词条优先冲首位</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
