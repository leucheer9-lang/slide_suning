import React from 'react';

const RANKINGS = [
    { name: '宝安区政府在线', value: '14.7%', pct: 100 },
    { name: '顺企网', value: '10.5%', pct: 71 },
    { name: '安居客', value: '5.9%', pct: 40 },
    { name: '深圳政府在线', value: '5.4%', pct: 37 },
    { name: '宝安湾', value: '5.1%', pct: 35 },
];

const INSIGHTS = [
    {
        title: '信源集中在政府招商与产业地产平台',
        accent: '#004CE5',
        body: '宝安区政府在线 14.7%、顺企网 10.5%、安居客 5.9%，再加上深圳政府在线 5.4%、宝安湾 5.1%，前五家合计逾四成引用量，形态以物业清单、招商通稿、房源信息为主。创维创新谷要被抓取，就得把在租面积、层高、荷载、交付时间等可核验参数做进这些渠道，而不是只靠园区官网。',
    },
    {
        title: '引用最多的 10 篇文章里只有 1 篇提到本品',
        accent: '#F59E0B',
        body: '"宝安集中推出独栋优质物业"被引用 16 次、"宝地兴业产业空间对接会物业清单"11 次、"知名集团物业齐亮相"9 次，均未提及创维创新谷；唯一命中的是买购网《宝安区十大产业园区》（6 次）。这正是 24 个渠道词 0 提及的直接原因——模型读的资料里几乎没有它。',
    },
];

export default function Page_GeoReport_Sources2_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 min-h-0">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        引用源健康度与诊断 · 优化词 B 端
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
                                    50 次对话中有 <strong className="text-white font-bold">100%</strong> 带引用、累计引用
                                    <strong className="text-white font-bold"> 809 </strong>次。决定
                                    <strong className="text-white font-semibold">创维创新谷</strong>在 B 端渠道招商优化词下表现的抓取来源，呈现出
                                    <strong className="text-white font-semibold">"政府门户 + 企业名录 + 产业地产平台"</strong>特点。
                                </p>
                                <p className="text-justify">
                                    排名前三的引用平台分别为：
                                    <strong className="text-white font-bold">宝安区政府在线 (14.7%)</strong>、
                                    <strong className="text-white font-bold">顺企网 (10.5%)</strong>和
                                    <strong className="text-white font-bold">安居客 (5.9%)</strong>。
                                </p>
                                <p className="text-justify border-t border-white/10 pt-3">
                                    也就是说，模型回答"宝安区哪个产业园适合中介带客"时读的是政府招商通稿、物业清单 PDF 和房源平台页。这些渠道里目前几乎没有创维创新谷的可引用条目，AI 的推荐自然停留在新桥东先进制造产业园等已有园区。
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
