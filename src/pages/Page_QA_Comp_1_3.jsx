import React from 'react';

export default function Page_QA_Comp_1_3() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-6 text-[1.1rem] leading-relaxed">（2）AI 监管合规实施表（后 3 项）</p>
                <table className="w-full border-collapse border border-zinc-700 mb-8 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/3">法规 / 规范</th>
                            <th className="p-3 text-left">我司合规措施</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">《数据安全法》</td>
                            <td className="p-3">数据采集、存储、使用、传输全流程符合法规要求</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">《网络安全法》</td>
                            <td className="p-3">采集行为遵守频控、Robots 协议、平台服务条款，避免对目标平台造成负担</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-r border-zinc-800 font-bold">知乎等平台社区公约 / 服务协议</td>
                            <td className="p-3">严格遵守内容平台的发布规范、UGC 真实性要求、商业内容标识规范</td>
                        </tr>
                    </tbody>
                </table>
                
                <p className="mb-2 text-[1.1rem] leading-relaxed">（3）优化手段合规（白帽 GEO）</p>
                <p className="text-[1.1rem] leading-relaxed text-zinc-400">我司坚定走"白帽 GEO"路线，所有优化手段均建立在真实、合规、可持续的基础上，规范列表与上述AI监管执行动作相同。</p>
            </div>
        </div>
    );
}
