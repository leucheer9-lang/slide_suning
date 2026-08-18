import React from 'react';

/* 来源：GEO ONE 项目 481 创维创新谷-ToC①，2026-08-14 */
/* pct 为条形长度，按占比相对第一名（宝安区政府在线 31.1%）归一 */

const RANKINGS = [
    { name: '宝安区政府在线', value: '31.1%', pct: 100 },
    { name: '深圳政府在线', value: '8.4%', pct: 27 },
    { name: '宝安湾', value: '7.0%', pct: 23 },
    { name: '顺企网', value: '4.3%', pct: 14 },
    { name: '今日头条', value: '4.0%', pct: 13 },
];

const INSIGHTS = [
    {
        title: '信源高度集中在政府门户，官方名录是入场券',
        accent: '#004CE5',
        body: '宝安区政府在线一家就占 31.1%，加上深圳政府在线 8.4%、宝安湾 7.0%，政府系信源合计 46.5%。这类内容多为产业布局指引、科技创新载体名录、物业清单，事实密度高、AI 采信权重也高。创维创新谷能否被推荐，很大程度取决于是否进入这些官方名录。',
    },
    {
        title: '高引用文章里只有名录榜单命中本品',
        accent: '#F59E0B',
        body: '引用量前十的文章中，只有买购网《宝安区十大产业园区》（12 次）提到了创维创新谷；《宝安集中推出独栋优质物业》10 次、《宝安区重点片区产业集群布局指引》9 次、《宝地兴业物业清单》8 次均未收录本品。补进这些政府文件与名录，是把 16 个 0 提及词打开的最短路径。',
    },
];

export default function Page_GeoReport_Sources2() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 min-h-0">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        引用源健康度与诊断 · 优化词 C 端
                    </h1>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-12 gap-6 pt-5">
                    {/* 左：评估 */}
                    <div className="col-span-12 lg:col-span-6 min-h-0 flex flex-col">
                        <div className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col gap-4">
                            <h3 className="shrink-0 text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                引用源健康度评估
                            </h3>

                            {/* 上半：文案铺满 */}
                            <div className="flex-[1.05] min-h-0 flex flex-col justify-between text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                <p className="text-justify">
                                    50 次 C 端对话中有 <strong className="text-white font-bold">92%</strong> 带引用，共计
                                    <strong className="text-white font-bold"> 718 次</strong>。决定
                                    <strong className="text-white font-semibold">创维创新谷</strong> 在 AI 问答中表现的最底层抓取来源，呈现出
                                    <strong className="text-white font-semibold">“政府门户 + 区域招商媒体”</strong>的特点。
                                </p>
                                <p className="text-justify">
                                    排名前三的引用平台分别为：
                                    <strong className="text-white font-bold">宝安区政府在线 (31.1%)</strong>、
                                    <strong className="text-white font-bold">深圳政府在线 (8.4%)</strong>和
                                    <strong className="text-white font-bold">宝安湾 (7.0%)</strong>，政府系信源合计
                                    <strong className="text-white font-bold"> 46.5%</strong>。
                                </p>
                                <p className="text-justify border-t border-white/10 pt-3">
                                    这意味着 AI 对宝安产业园的认知主要来自政府产业指引、载体名录和招商通稿。园区官网、招商手册这类自有渠道几乎不在引用池内，能否进入官方名录直接决定了是否被推荐。
                                </p>
                            </div>

                            {/* 下半：条形图铺满 */}
                            <div className="flex-1 min-h-0 bg-black/30 border border-white/5 rounded-xl px-4 py-3.5 flex flex-col">
                                <div className="shrink-0 text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-2">
                                    TOP 5 引用平台份额对比
                                </div>
                                <div className="flex-1 min-h-0 flex flex-col justify-evenly gap-1">
                                    {RANKINGS.map((item) => (
                                        <div key={item.name} className="flex items-center justify-between gap-4">
                                            <div className="w-36 text-[15px] lg:text-[16px] text-zinc-400 truncate font-medium">
                                                {item.name}
                                            </div>
                                            <div className="flex-1 bg-white/5 h-2.5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full"
                                                    style={{ width: `${item.pct}%` }}
                                                />
                                            </div>
                                            <div className="w-12 text-right text-[15px] lg:text-[16px] text-white font-bold">
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右：诊断 */}
                    <div className="col-span-12 lg:col-span-6 min-h-0 flex flex-col">
                        <div className="flex-1 min-h-0 bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl p-5 lg:p-6 flex flex-col gap-4 shadow-[0_0_25px_rgba(0,76,229,0.06)]">
                            <h3 className="shrink-0 text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                诊断与洞察
                            </h3>

                            <div className="flex-1 min-h-0 flex flex-col gap-4">
                                {INSIGHTS.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex-1 min-h-0 rounded-r-xl border border-white/5 bg-white/[0.03] px-5 py-4 lg:px-6 lg:py-5 flex flex-col justify-center"
                                        style={{ borderLeft: `4px solid ${item.accent}` }}
                                    >
                                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight mb-2.5">
                                            {item.title}
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                            {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
