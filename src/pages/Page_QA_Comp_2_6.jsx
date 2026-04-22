import React from 'react';

export default function Page_QA_Comp_2_6() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-4 text-[1.1rem] leading-relaxed">（8）制度与合规承诺</p>
                <ul className="mb-8 text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li><strong>法律资质：</strong>持有合法营业执照与 ICP 备案，不涉及任何禁止性暗面产业。</li>
                    <li><strong>保密协议（NDA）：</strong>签署规范双向保密；对内严签全员连带责任协议；对外包云厂商全签署背靠背保密条款延伸覆盖面。</li>
                    <li><strong>核心履约金线：</strong>客户始发数据坚决不出境，绝不跨越租户投喂其他模型池，兜底担责并迎接合法驻点审计。</li>
                </ul>

                <p className="mb-4 text-[1.1rem] leading-relaxed">（9）应急响应</p>
                <ul className="text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li><strong>事件分级网络：</strong>严格依照预规案划清 P0–P3 灾难响应界限等级。</li>
                    <li><strong>第一性止损线：</strong>阻断一切流血通道隔离集群先于故障究责排查，并在最快阈值内合法知会客户不设遮掩防备。</li>
                    <li><strong>闭合归因溯源：</strong>出具完档无损的事件复盘与流水分段切片报告交办。</li>
                </ul>
            </div>
        </div>
    );
}
