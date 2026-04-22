import React from 'react';

export default function Page_QA_Tech_5_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <div className="text-[1.1rem] leading-relaxed mb-6">
                    问题：5. 多模态工程化：核查文本、图表、知识库等多模态优化能力，以及自动化部署、私有化部署的落地水平
                </div>
                <table className="w-full border-collapse border border-zinc-700 mb-8 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-1/4">维度</th>
                            <th className="p-3 text-left">当前能力</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">文本</td><td className="p-3">全量答案抓取、流式响应解析、引用链接提取、Markdown 结构化解析</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">图表</td><td className="p-3">答案中的图片自动下载存档；截图全量留存至对象存储，可追溯原始页面状态</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">引用文章</td><td className="p-3">引用文章正文抓取 + 段落级品牌识别</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">知识库</td><td className="p-3">支持客户上传品牌知识库（FAQ / 产品手册），用于 Prompt 上下文增强</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold">自动化部署</td><td className="p-3">一键启动，进程级守护，支持 macOS / Windows</td></tr>
                    </tbody>
                </table>
                <p className="mb-2 text-[1.1rem] leading-relaxed">部署模式：</p>
                <p className="text-[1.1rem] leading-relaxed text-zinc-400">
                    我司基于行业最佳实践，采用 「云端 SaaS + 多租户隔离」 的标准化部署模式，确保客户开箱即用、无运维负担、始终使用最新版本。
                </p>
            </div>
        </div>
    );
}
