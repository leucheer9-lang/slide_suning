import React from 'react';

export default function Page_QA_Comp_1_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-8">4、合规与安全</h1>
                <div className="text-[1.1rem] leading-relaxed mb-6">
                    问题：1. 资质合规操作：经营资质、AI 监管合规性、优化手段合规性，严禁黑帽违规操作
                </div>
                <p className="mb-6 text-[1.1rem] leading-relaxed text-zinc-400">
                    我司严守经营资质合规、AI 监管合规、优化手段合规三条底线，严禁任何黑帽手段，确保 GEO 业务长期、健康、可审计运营。
                </p>
                
                <p className="mb-4 text-[1.1rem] leading-relaxed">（1）经营资质合规</p>
                <ul className="mb-8 text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>持有合法 营业执照 与 ICP 备案；</li>
                    <li>经营范围合法合规，不涉及任何禁止性业务；</li>
                    <li>财务、税务、社保等合规手续齐全，接受甲方对资质的审查与核验。</li>
                </ul>

                <p className="mb-4 text-[1.1rem] leading-relaxed">（2）AI 监管合规</p>
                <p className="text-[1.1rem] leading-relaxed text-zinc-400">严格遵守国家及行业 AI 相关法律法规与监管要求（详情见下页法规匹配表）。</p>
            </div>
        </div>
    );
}
