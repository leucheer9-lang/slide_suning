import React from 'react';

export default function Page_QA_Data_2_2() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-4 text-[1.1rem] leading-relaxed">（2）全量原始数据（可下载、可查证）</p>
                <p className="mb-4 text-[1.1rem] leading-relaxed text-zinc-400">
                    杜绝"只给数字、不给依据"的黑箱模式，所有原始证据均可追溯、可下载：
                </p>
                <table className="w-full border-collapse border border-zinc-700 text-[1.05rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-3 text-left border-r border-zinc-700 w-[20%]">证据类型</th>
                            <th className="p-3 text-left border-r border-zinc-700 w-[50%]">内容</th>
                            <th className="p-3 text-left w-[30%]">用途</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">AI 答案原文</td><td className="p-3 border-r border-zinc-800">每一次 AI 提问的完整回答文本</td><td className="p-3">复核品牌识别是否准确</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">提问截图</td><td className="p-3 border-r border-zinc-800">每一次提问的屏幕截图（永久存储于对象存储）</td><td className="p-3">还原 AI 平台当时的真实页面状态</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-3 border-r border-zinc-800 font-bold">引用文章</td><td className="p-3 border-r border-zinc-800">AI 答案引用的每一篇信源文章 URL + 标题 + 正文</td><td className="p-3">追溯品牌内容种草渗透情况</td></tr>
                        <tr><td className="p-3 border-r border-zinc-800 font-bold">品牌识别依据</td><td className="p-3 border-r border-zinc-800">每一次品牌识别的判定理由（命中的关键词、上下文片段）</td><td className="p-3">判断识别是否合理</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
