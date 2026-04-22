import React from 'react';

export default function Page_QA_Comp_2_5() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-6 text-[1.1rem] leading-relaxed">（7）数据生命周期管理</p>
                <p className="mb-6 text-[1.1rem] leading-relaxed text-zinc-400">我司将客户数据的生命周期划分为起止五个阶段，每一阶段均有对应的安全控制措施，并以书面指令为准：</p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/5">阶段</th>
                            <th className="p-3 text-left">安全措施</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">① 接入前</td><td className="p-3 text-zinc-400">签署保密协议（NDA），书面约定数据范围、用途、保留期限与处置方式；完成标记分级。</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">② 采集中</td><td className="p-3 text-zinc-400">任务通过状态机流式统一调度，每一步操作写入审计日志，全程可追溯。</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">③ 使用中</td><td className="p-3 text-zinc-400">按 project_id 多租户隔离，中间表作业完成后按时归档。</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">④ 归档</td><td className="p-3 text-zinc-400">MySQL 增量备份支持 PITR；备份文件加密访问强需双人验证复查。</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold">⑤ 合作终止处置</td><td className="p-3 text-zinc-400">定向返还客户端导出数据、或入死库隔离封存、或作不可逆的匿名化处理彻底归零隐私。</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
