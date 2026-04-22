import React from 'react';

export default function Page_QA_Tech_3_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <div className="text-[1.1rem] leading-relaxed mb-6">
                    问题：3. 技术人员实力：技术人员占比，是否有算法工程师
                </div>
                <p className="mb-4 text-[1.1rem] leading-relaxed">我司核心团队由全栈工程师、数据工程师、AI 算法工程师、运维工程师构成，技术人员占比 ≥ 80%。其中：</p>
                <ul className="text-[1.1rem] leading-relaxed list-disc pl-6 space-y-3 text-zinc-400">
                    <li>算法工程师：负责 Prompt Engineering、语义识别准确率优化、品牌别名学习机制；</li>
                    <li>数据工程师：负责采集流水线、ETL、看板与归因模型；</li>
                    <li>全栈工程师：负责调度引擎、平台适配层、前端看板；</li>
                    <li>运维工程师：负责数据库、监控告警、安全合规。</li>
                </ul>
            </div>
        </div>
    );
}
