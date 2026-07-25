import React from 'react';

// 苏宁易购①（project_id 377）· 2026-07-25～2026-07-25 · src/data/geoReport.json
const MENTION_RANKING = [
    { rank: 1, name: '京东', value: '93.5%', highlight: false },
    { rank: 2, name: '天猫', value: '77%', highlight: false },
    { rank: 3, name: '苏宁易购', value: '47%', highlight: true },
    { rank: 4, name: '拼多多', value: '45.5%', highlight: false },
    { rank: 5, name: '淘宝', value: '39%', highlight: false },
];

const TOP1_RANKING = [
    { rank: 1, name: '京东', value: '81.5%', highlight: false },
    { rank: 2, name: '海尔', value: '6.5%', highlight: false },
    { rank: 3, name: '抖音', value: '2%', highlight: false },
    { rank: 4, name: '天猫优品', value: '1%', highlight: false },
    { rank: 5, name: '拼多多', value: '1%', highlight: false },
    { rank: 11, name: '苏宁易购', value: '0.5%', highlight: true },
];

const POSITION_RANKING = [
    { rank: 1, name: '京东', value: 'NO. 1.3', highlight: false },
    { rank: 2, name: '天猫', value: 'NO. 3.1', highlight: false },
    { rank: 3, name: '淘宝', value: 'NO. 4.8', highlight: false },
    { rank: 4, name: '拼多多', value: 'NO. 4.9', highlight: false },
    { rank: 5, name: '苏宁易购', value: 'NO. 5.1', highlight: true },
];

function RankBadge({ rank, highlight }) {
    if (rank === 1) {
        return (
            <span className="w-7 h-7 rounded-full bg-amber-400/90 text-black text-[14px] font-black flex items-center justify-center shrink-0">
                {rank}
            </span>
        );
    }
    if (rank === 2 || rank === 3) {
        return (
            <span className="w-7 h-7 rounded-full bg-orange-400/80 text-black text-[14px] font-black flex items-center justify-center shrink-0">
                {rank}
            </span>
        );
    }
    return (
        <span
            className={`w-7 h-7 rounded-full text-[13px] font-bold flex items-center justify-center shrink-0 ${
                highlight ? 'bg-[#004CE5]/30 text-blue-200 border border-[#004CE5]/50' : 'bg-white/5 text-zinc-400'
            }`}
        >
            {rank}
        </span>
    );
}

function RankingCard({ title, subtitle, rows, valueLabel }) {
    return (
        <div className="flex-1 min-w-0 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3.5 flex flex-col min-h-0">
            <div className="shrink-0 mb-2.5">
                <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">{title}</h4>
                {subtitle && (
                    <p className="text-[14px] lg:text-[15px] text-zinc-400 mt-0.5 leading-snug">{subtitle}</p>
                )}
            </div>
            <div className="grid grid-cols-[1fr_auto] text-[13px] lg:text-[14px] text-zinc-500 font-semibold pb-1.5 border-b border-white/10 shrink-0">
                <span>产品名称</span>
                <span>{valueLabel}</span>
            </div>
            <div className="flex-1 flex flex-col justify-evenly min-h-0">
                {rows.map((row) => (
                    <div
                        key={`${row.rank}-${row.name}`}
                        className={`grid grid-cols-[1fr_auto] items-center gap-2 py-1.5 border-b border-white/[0.04] last:border-0 ${
                            row.highlight ? 'bg-[#004CE5]/10 -mx-2 px-2 rounded-lg' : ''
                        }`}
                    >
                        <div className="flex items-center gap-2.5 min-w-0">
                            <RankBadge rank={row.rank} highlight={row.highlight} />
                            <span className={`text-[16px] lg:text-[18px] font-bold truncate ${row.highlight ? 'text-white' : 'text-zinc-200'}`}>
                                {row.name}
                            </span>
                            {row.highlight && (
                                <span className="shrink-0 text-[12px] lg:text-[13px] font-bold text-blue-300 bg-[#004CE5]/20 border border-[#004CE5]/40 px-1.5 py-0.5 rounded">
                                    目标产品
                                </span>
                            )}
                        </div>
                        <span className={`text-[16px] lg:text-[18px] font-black tabular-nums ${row.highlight ? 'text-blue-300' : 'text-white'}`}>
                            {row.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Page_GeoReportCompetitors_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-3">

                <div className="text-center shrink-0 mb-1">
                    <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                        竞品横向对比
                    </h1>
                </div>

                {/* Top: three ranking boards from geoReport.json compare */}
                <div className="flex-1 flex gap-3 min-h-0 mb-1">
                    <RankingCard
                        title="提及率排名"
                        subtitle="AI 生态中被提及的概率"
                        valueLabel="提及率"
                        rows={MENTION_RANKING}
                    />
                    <RankingCard
                        title="Top1 提及率排名"
                        subtitle="目标产品 Top1 提及率 0.5%"
                        valueLabel="Top1 提及率"
                        rows={TOP1_RANKING}
                    />
                    <RankingCard
                        title="平均提及位次排名"
                        subtitle="被提及时的平均排位（越小越好）"
                        valueLabel="平均提及位次"
                        rows={POSITION_RANKING}
                    />
                </div>

                {/* Bottom: analysis */}
                <div className="h-[36%] min-h-[240px] max-h-[340px] shrink-0 grid grid-cols-12 gap-5">

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3.5 px-5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[22px] lg:text-[24px] font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                核心发现
                            </h3>

                            <div className="flex-grow flex flex-col gap-2.5 text-[18px] lg:text-[20px] text-zinc-300 leading-snug font-normal text-justify min-h-0">
                                <p>
                                    <strong className="text-white font-bold">头部平台断层领先：</strong>
                                    京东提及率 93.5%、天猫 77%，远高于苏宁易购的 47%。在家电购买类提问中，京东几乎必现，天猫稳居第二梯队，苏宁仅以微弱优势压过拼多多（45.5%）。
                                </p>
                                <p className="border-t border-white/5 pt-2">
                                    <strong className="text-white font-bold">首位推荐权严重缺失：</strong>
                                    京东 Top1 提及率高达 81.5%，海尔以 6.5% 位列第二；苏宁 Top1 仅 0.5%，排在第 11 位，尚不具备作为「首选答案」稳定输出的能力。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3.5 px-5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[22px] lg:text-[24px] font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                竞争格局总结
                            </h3>

                            <div className="flex-grow flex flex-col gap-2.5 text-[18px] lg:text-[20px] text-zinc-300 leading-snug font-normal text-justify min-h-0">
                                <p>
                                    在 AI 的认知图谱中，京东已被默认为
                                    <strong className="text-white font-semibold">「家电购买的绝对正确共识答案」</strong>
                                    ，天猫紧随其后把控泛需求推荐位；苏宁虽影响力榜排第 3（分值 51.8），但与京东 94.9、天猫 77.8 差距明显。
                                </p>
                                <p className="border-t border-white/5 pt-2">
                                    苏宁平均位次 NO.5.1，落在淘宝、拼多多之后，多数对话中只作为陪跑选项。全渠道履约场景已有提及基础，但在首推权与 3C / 送装主战场仍
                                    <strong className="text-red-400 font-semibold">明显失声</strong>。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-4 pb-3.5 px-5 sm:px-6 flex flex-col h-full justify-start gap-2 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                            <h3 className="text-[22px] lg:text-[24px] font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                行动建议
                            </h3>

                            <div className="flex-grow flex flex-col gap-2.5 text-[18px] lg:text-[20px] text-zinc-300 leading-snug font-normal text-justify min-h-0">
                                <p>
                                    苏宁不宜与京东在「买家电哪个平台好」等通用大词上硬碰硬抢首推。
                                </p>
                                <p className="border-t border-white/5 pt-2">
                                    而应
                                    <strong className="text-white font-semibold">集中资源巩固</strong>
                                    「线上买线下提货」「线下看实物」「配送快」「有实体店」等已有高提及词条，同步补齐手机 / 电脑选购与送装一体零提及盲区，
                                    <strong className="text-blue-300 font-semibold">先稳全渠道细分、再冲击首推权</strong>。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page_GeoReportCompetitors_Analysis;
