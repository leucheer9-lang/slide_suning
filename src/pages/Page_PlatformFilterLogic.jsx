import React from 'react';

export default function Page_PlatformFilterLogic() {
    const dimension1Data = [
        {
            group: "A组：共性白名单",
            motive: "所有 AI 平台普遍认可的平台",
            subtext: "查询四个AI平台引用来源中出现得最多的前10个网站，对其进行交叉合并统计，筛选出前5个共性高频引用网站（权重均较高）。",
            platforms: {
                type: 'simple',
                tags: ["搜狐网", "新浪新闻", "网易新闻", "知乎", "百家号"]
            }
        },
        {
            group: "B组：平台特异性",
            motive: "每个 AI 平台偏好的特定平台",
            subtext: "除共性网站外，针对不同AI平台偏好，每个平台筛选出2个特定网站，最能体现该AI平台差异化特征和信息抓取习惯，共计8个网站。",
            platforms: {
                type: 'grouped',
                groups: [
                    { label: "DeepSeek", tags: ["IT之家", "少数派"] },
                    { label: "豆包", tags: ["抖音", "今日头条"] },
                    { label: "Kimi", tags: ["小红书", "微信公众号"] },
                    { label: "文心", tags: ["百度知道", "贴吧"] },
                ]
            }
        }
    ];

    const dimension2Data = [
        {
            category: "C组：高命中高频",
            description: "把行业头部竞品（如卡萨帝）单独进行深挖分析，将命中率（出现品牌/总引用次数）作为一个重要数值。在关联紧密的垂直和综合矩阵中选出最高的5个网站。",
            platforms: ["太平洋科技", "什么值得买", "中关村在线", "天极网", "家电消费网"]
        }
    ];

    const renderTags = (tags) => (
        <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/[0.08] rounded-lg text-[1.05rem] text-white/90 border border-white/10 whitespace-nowrap shadow-sm">
                    {t}
                </span>
            ))}
        </div>
    );

    const renderGroupedTags = (groups) => (
        <div className="flex flex-col gap-2.5">
            {groups.map((g, i) => (
                <div key={i} className="flex flex-wrap items-center gap-2">
                    <span className="text-zinc-400 text-[1.05rem] font-bold mr-1">{g.label}:</span>
                    {g.tags.map((t, j) => (
                        <span key={j} className="px-3 py-1.5 bg-white/[0.08] rounded-lg text-[1.05rem] text-white/90 border border-white/10 whitespace-nowrap shadow-sm">
                            {t}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            {/* 顶部占位尽可能缩小 */}
            <div className="h-[10px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-4 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">文章投放平台筛选逻辑</h1>
                <p className="text-zinc-400 text-[1.1rem] font-medium tracking-wide">
                    通过量化主流 AI 平台的引用数据，构建科学的文章投放矩阵。筛选逻辑分为三大核心维度：
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start pb-4 min-h-0 container mx-auto gap-4 overflow-hidden">
                {/* Table 1: 维度一 */}
                <div className="w-full max-w-[1792px] h-fit flex flex-col overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shrink-0">
                    <div className="px-6 py-3 border-b border-white/10 bg-white/[0.02]">
                        <h2 className="text-[1.25rem] font-bold text-white/90">维度一：平台引用频次共性与差异性分析</h2>
                        <p className="text-[1.05rem] text-zinc-400 mt-1.5 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                            从四大AI大模型的信源库中找出普适性最高的“基本盘”以及各大模型偏好的“特征盘”。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[160px_1fr_1.8fr_1.7fr] xl:grid-cols-[180px_1fr_1.8fr_1.8fr] bg-white/[0.01] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider text-center">分组标记</div>
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider">筛选维度</div>
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider">筛选逻辑动作</div>
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider">代表性平台展示 (示例)</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full z-0 overflow-hidden">
                        <div className="flex flex-col">
                            {dimension1Data.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[160px_1fr_1.8fr_1.7fr] xl:grid-cols-[180px_1fr_1.8fr_1.8fr] group ${idx !== dimension1Data.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full`}>
                                    <div className="py-4 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-white/80 text-[1.15rem] leading-snug whitespace-nowrap">{item.group}</div>
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-white/90 font-bold text-[1.15rem]">
                                        {item.motive}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 text-zinc-300/90 leading-relaxed text-[1.1rem] font-medium flex items-center">
                                        {item.subtext}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center">
                                        {item.platforms.type === 'simple'
                                            ? renderTags(item.platforms.tags)
                                            : renderGroupedTags(item.platforms.groups)
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table 2: 维度二 */}
                <div className="w-full max-w-[1792px] h-fit flex flex-col overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shrink-0">
                    <div className="px-6 py-3 border-b border-white/10 bg-white/[0.02] shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-white/90">维度二：行业头部品牌收录偏好分析</h2>
                        <p className="text-[1.05rem] text-zinc-400 mt-1.5 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                            参考卡萨帝等主要竞品的高频命中阵地，反推有效抓取平台，保证行业信息的精准曝光。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[160px_3fr_1.5fr] xl:grid-cols-[180px_3fr_1.8fr] bg-white/[0.01] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider text-center">分组标记</div>
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider">命中率量化逻辑模型</div>
                        <div className="py-3 px-4 sm:px-5 text-[1.1rem] font-bold text-zinc-300 tracking-wider">提取结果与执行动作</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full z-0 overflow-hidden">
                        <div className="flex flex-col">
                            {dimension2Data.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[160px_3fr_1.5fr] xl:grid-cols-[180px_3fr_1.8fr] group ${idx !== dimension2Data.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-5 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-white/80 text-[1.15rem] leading-snug whitespace-nowrap">{item.category}</div>
                                    </div>
                                    <div className="py-5 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300/90 leading-relaxed font-medium text-[1.1rem]">
                                        {item.description}
                                    </div>
                                    <div className="py-5 px-4 sm:px-5 border-l border-white/5 flex items-center">
                                        {renderTags(item.platforms)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
