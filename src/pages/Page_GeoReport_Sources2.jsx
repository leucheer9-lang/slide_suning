import React from 'react';

const RANKINGS = [
    { name: '腾讯新闻', value: '8.8%', pct: 100 },
    { name: '今日头条', value: '7.7%', pct: 88 },
    { name: '新浪新闻', value: '4.3%', pct: 49 },
    { name: '百度知道', value: '3.9%', pct: 44 },
    { name: '快递鸟', value: '3.9%', pct: 44 },
];

const INSIGHTS = [
    {
        title: '信源偏资讯与问答，权威产业内容不足',
        accent: '#004CE5',
        body: 'C 端引用池高度集中在腾讯新闻、今日头条、新浪新闻与百度知道。大模型更容易抓取大众测评与问答内容，京东物流需要在这些高权重渠道持续出现“可核验的场景证据”。',
    },
    {
        title: '高引用文章里本品露出偏弱',
        accent: '#F59E0B',
        body: 'Top 引用文章多为通用快递测评与顺丰官网，多篇并未稳定提及京东物流。若不对测评榜单与横向对比内容做主动布局，AI 会继续把“首选”写给顺丰。',
    },
];

export default function Page_GeoReport_Sources2() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 min-h-0">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        引用源健康度与诊断 · C端
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
                                    监测数据显示，决定<strong className="text-white font-semibold">京东物流</strong>在 C 端 AI
                                    问答中表现的最底层数据抓取来源，呈现出
                                    <strong className="text-white font-semibold">“资讯媒体 + UGC 问答”</strong>特点。
                                </p>
                                <p className="text-justify">
                                    排名前三的引用平台分别为：
                                    <strong className="text-white font-bold">腾讯新闻 (8.8%)</strong>、
                                    <strong className="text-white font-bold">今日头条 (7.7%)</strong>和
                                    <strong className="text-white font-bold">新浪新闻 (4.3%)</strong>。
                                </p>
                                <p className="text-justify border-t border-white/10 pt-3">
                                    这说明 C 端寄件决策高度依赖大众媒体测评与问答站点。若不能在这些渠道稳定输出对京东物流有利的横向对比内容，AI 推荐仍会偏向顺丰等既有强势品牌。
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
