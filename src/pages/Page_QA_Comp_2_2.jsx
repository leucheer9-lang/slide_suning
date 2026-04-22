import React from 'react';

export default function Page_QA_Comp_2_2() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-6 text-[1.1rem] leading-relaxed">（2）数据采集合规</p>
                <ul className="text-[1.1rem] leading-relaxed list-disc pl-6 space-y-4 text-zinc-400">
                    <li>
                        <strong className="text-zinc-200">不采集 C 端个人信息：</strong>系统以"词条 × AI 平台"为最小粒度向公开生成式引擎提问，采集对象为 AI 公开生成的回答、引用链接与品牌提及，全流程不涉及任何终端用户的个人身份信息（PII）、设备信息、行为画像，从源头规避《个人信息保护法》《数据安全法》风险。
                    </li>
                    <li>
                        <strong className="text-zinc-200">采集对象去标识化：</strong>引用链接仅保留公开 URL 与文章标题，正文经摘要化与结构化处理后入库，不留存可识别个人的原始内容。
                    </li>
                    <li>
                        <strong className="text-zinc-200">频控与白名单：</strong>采集模块内置请求频控与平台白名单机制，避免对目标平台造成压力，符合《网络安全法》对网络爬取行为的合规要求。
                    </li>
                    <li>
                        <strong className="text-zinc-200">平台账号合法授权：</strong>用于登录 AI 平台的账号均由账号方书面授权，访问范围严格限定于平台服务条款允许的公开内容。
                    </li>
                </ul>
            </div>
        </div>
    );
}
