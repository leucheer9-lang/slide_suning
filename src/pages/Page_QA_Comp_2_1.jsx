import React from 'react';

export default function Page_QA_Comp_2_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <div className="text-[1.1rem] leading-relaxed mb-6">
                    问题：2. 数据安全保障：客户数据加密、保密协议、数据防泄露等安全管控措施；能够提交合规证明材料
                </div>
                <p className="mb-6 text-[1.1rem] leading-relaxed text-zinc-400">
                    我司将客户数据安全视为 GEO 服务交付的生命线，围绕 "采集合规、传输加密、存储隔离、访问可控、全程审计、生命周期管理" 六个维度构建端到端防护体系，并辅以制度与应急预案，确保客户数据在全链路中"可用不可见、可控不可漏"。
                </p>
                
                <p className="mb-4 text-[1.1rem] leading-relaxed">（1）数据分级分类</p>
                <p className="mb-4 text-[1.1rem] leading-relaxed text-zinc-400">我们首先对 GEO 业务涉及的数据按敏感度分级，分级决定后续的加密、权限与留存策略：</p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700">等级</th>
                            <th className="p-3 text-left border-r border-zinc-700">数据类型</th>
                            <th className="p-3 text-left border-r border-zinc-700">典型内容</th>
                            <th className="p-3 text-left">防护强度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold text-rose-300">L4 机密</td><td className="p-3 border-r border-zinc-800">客户业务数据、AI平台账号凭证</td><td className="p-3 border-r border-zinc-800">品牌策略、未公开产品、Cookie...</td><td className="p-3">加密存储 + 双人复核 + 审计</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold text-amber-300">L3 敏感</td><td className="p-3 border-r border-zinc-800">采集结果、交付报表</td><td className="p-3 border-r border-zinc-800">AI 对话原文、引用链接、品牌情感</td><td className="p-3">加密传输 + 项目级隔离</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold text-blue-300">L2 内部</td><td className="p-3 border-r border-zinc-800">关键词统计、任务日志</td><td className="p-3 border-r border-zinc-800">keyword_stats、task_logs</td><td className="p-3">内网访问 + 权限管控</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold text-emerald-300">L1 公开</td><td className="p-3 border-r border-zinc-800">平台公开内容、行业资料</td><td className="p-3 border-r border-zinc-800">公开 URL、公开知识库</td><td className="p-3">常规管控</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
