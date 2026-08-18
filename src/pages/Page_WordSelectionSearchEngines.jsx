import React from 'react';

/**
 * 模拟搜索引擎：各 AI 产品接入的底层检索来源不同，且部分不对外披露。
 * 我们逐个模型复现其检索路径，才能知道每个平台真正会读到什么。
 */

const ROWS = [
    { model: 'ChatGPT', source: 'Bing', degree: '较明确', confirmed: true },
    { model: 'Google Gemini', source: 'Google Search', degree: '明确', confirmed: true },
    { model: 'Perplexity', source: 'Perplexity 自有搜索索引', degree: '明确', confirmed: true },
    {
        model: 'DeepSeek',
        source: '官方已上线联网搜索，但未见官方明确公开具体外部搜索引擎名称',
        degree: '只能确认有联网搜索，不能确认具体引擎',
        confirmed: false,
    },
    {
        model: '豆包',
        source: '官方可确认有 AI 搜索 / 联网检索，但未见官方明确公开具体外部搜索引擎名称',
        degree: '只能确认有联网检索，不能确认具体引擎',
        confirmed: false,
    },
    {
        model: '腾讯元宝',
        source: '可确认整合腾讯生态内容源；未见官方明确公开统一外部搜索引擎名称',
        degree: '能确认内容源类型，不能完全确认统一搜索引擎品牌',
        confirmed: false,
    },
    {
        model: '阿里通义千问',
        source: '阿里云自家的联网搜索 / UnifiedSearch (IQS) 体系',
        degree: '较明确',
        confirmed: true,
    },
    { model: '百度文心', source: '百度搜索', degree: '明确', confirmed: true },
];

export default function Page_WordSelectionSearchEngines() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    模拟搜索引擎
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col min-h-0">
                <div className="shrink-0 bg-zinc-900/40 border border-white/10 rounded-2xl px-7 py-5 mb-5">
                    <p className="text-[21px] leading-relaxed text-zinc-300">
                        <strong className="font-extrabold text-[23px] mr-2" style={{ color: '#7FA6FF' }}>
                            核心机理：
                        </strong>
                        AI 模型同样依赖搜索引擎，但它们不经过网页，而是
                        <strong className="text-white font-bold">直接调用底层 Search API</strong>
                        ，从而实现远超人工的检索抓取速度。由于各家 AI 公司的技术与商业战略不同，接入的底层搜索引擎也不一样，且部分不向公众披露细节——所以只能逐个复现。
                    </p>
                </div>

                <div className="flex-1 min-h-0 bg-zinc-900/40 border border-white/10 rounded-[1.5rem] overflow-hidden shadow-2xl px-7 py-5">
                    <table className="w-full h-full border-collapse table-fixed">
                        <thead>
                            <tr className="border-b border-white/15 text-left">
                                <th className="pb-4 pl-3 text-[21px] font-black text-white w-[240px]">模型 / 产品</th>
                                <th className="pb-4 text-[21px] font-black text-white">公开可确认的搜索来源</th>
                                <th className="pb-4 text-[21px] font-black text-white w-[520px]">能确认的程度</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row) => (
                                <tr key={row.model} className="border-b border-white/[0.07]">
                                    <td className="py-2.5 pl-3 text-[20px] font-bold text-white">{row.model}</td>
                                    <td className="py-2.5 pr-10 text-[18px] text-zinc-300 font-medium leading-relaxed">
                                        {row.source}
                                    </td>
                                    <td className="py-2.5 text-[18px]">
                                        {row.confirmed ? (
                                            <span className="font-bold text-[20px]" style={{ color: '#7FA6FF' }}>
                                                {row.degree}
                                            </span>
                                        ) : (
                                            <span className="text-zinc-500 font-medium">{row.degree}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
