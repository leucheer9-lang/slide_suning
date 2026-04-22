import React from 'react';

export default function Page_QA_Comp_2_3() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-6 text-[1.1rem] leading-relaxed">（3）传输加密实施标准</p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/3">链路界限</th>
                            <th className="p-3 text-left">执行加密方式</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">浏览器 ↔ AI 平台</td>
                            <td className="p-3">强制 HTTPS / TLS 1.2+，禁止明文降级</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">应用 ↔ 大模型 API（DashScope 等）</td>
                            <td className="p-3">HTTPS + Bearer Token 鉴权</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">应用 ↔ MySQL</td>
                            <td className="p-3">内网通信，支持开启 SSL 双向认证</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-3 border-r border-zinc-800 font-bold">截图 / 附件 ↔ 阿里云 OSS</td>
                            <td className="p-3">HTTPS + STS 临时凭证（最短有效期）</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-r border-zinc-800 font-bold">报表 / 看板 ↔ 客户</td>
                            <td className="p-3">HTTPS 站点 + 强制登录鉴权</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
