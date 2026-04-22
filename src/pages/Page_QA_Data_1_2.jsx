import React from 'react';

export default function Page_QA_Data_1_2() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-4 text-[1.1rem] leading-relaxed">（1）指标体系的核心特征</p>
                <ul className="mb-8 text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>二维度衡量：「提及率」反映品牌有没有被提到（广度），「提及位次」反映品牌被提得是不是靠前（深度），两个维度组合形成完整的 GEO 效果画像；</li>
                    <li>多平台对比：所有指标均按 AI 平台维度独立统计（DeepSeek / 豆包 / 千问 / 百度 AI / 元宝），客户可清晰看到每个平台的 GEO 表现差异；</li>
                    <li>多时间维度：日 / 周 / 月维度自动汇总；</li>
                    <li>多角色视图：项目维度（横向品牌竞品对比）、词条维度（深入到每个查询）、品牌维度（追踪自身品牌成长）。</li>
                </ul>

                <p className="mb-4 text-[1.1rem] leading-relaxed">（2）考核标准的有效性与稳定性承诺</p>
                <ul className="text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>所有指标基于项目维度独立统计，统计口径合同前书面确认、数据可复核；</li>
                    <li>定期出具复盘报告；</li>
                    <li>数据采集使用真实 AI 平台抓取（非模拟数据），所有原始证据（提问截图、答案文本、引用链接）均留存可查；</li>
                    <li>提供复测机制：交付前自动对识别结果做二次确认，支持「全量重检」「未提及重检」等多种模式，保障数据真实性。</li>
                </ul>
            </div>
        </div>
    );
}
