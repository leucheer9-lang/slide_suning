import React from 'react';

export default function Page_QA_Comp_1_2() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-6 text-[1.1rem] leading-relaxed">（2）AI 监管合规实施表（前 3 项）</p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/3">法规 / 规范</th>
                            <th className="p-3 text-left">我司合规措施</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">《生成式人工智能服务管理暂行办法》</td>
                            <td className="p-3">不向 AI 平台输入违法违规内容；不诱导生成虚假信息；尊重大模型服务商的使用条款</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">《互联网信息服务算法推荐管理规定》</td>
                            <td className="p-3">不利用算法漏洞操纵 AI 输出；不进行虚假流量、虚假评价等行为</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-r border-zinc-800 font-bold">《个人信息保护法》</td>
                            <td className="p-3">业务全流程不采集 C 端个人信息，从源头规避风险</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
