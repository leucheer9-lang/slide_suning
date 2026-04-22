import React from 'react';

export default function Page_QA_Tech_1_2() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-8 opacity-0 pointer-events-none">1、技术实力 (续)</h1>
                <table className="w-full border-collapse border border-zinc-700 mb-6 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/4">模块</th>
                            <th className="p-3 text-left">自研内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">数据中台</td><td className="p-3">自研多阶段任务中间存储层 + 完整状态机，支持任意环节独立重跑、定时发布、增量计算</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">品牌 / 产品别名服务</td><td className="p-3">自研别名词典 + 增量学习机制，自动归一化「同一品牌不同写法」，支持按项目维度独立维护，提升品牌识别准确率</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold">任务审计与监控</td><td className="p-3">自研审计日志体系，记录全量任务执行轨迹（操作人 / 参数 / 时间 / 影响范围），异常事件实时告警</td></tr>
                    </tbody>
                </table>
                <p className="text-[1.1rem] leading-relaxed">
                    代码与技术资产 100% 自有，使用 Git 进行版本管理与 Code Review，无第三方代码授权风险。
                </p>
            </div>
        </div>
    );
}
