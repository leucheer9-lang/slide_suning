import React from 'react';
import RankPanel from '../components/geoone/RankPanel';

/* ══════════════ 数据：换竞品排名时只改这一段 ══════════════ */

const COLUMNS = [
    {
        title: '提及率排名',
        subtitle: '产品或品牌在AI生态中提及率排名',
        valueLabel: '提及率',
        rows: [
            { name: '桃李', value: '81.1%', target: true },
            { name: '曼可顿', value: '42.2%' },
            { name: '豪士', value: '42.2%' },
            { name: '宾堡', value: '37.8%' },
            { name: '卡尔顿', value: '33.3%' },
        ],
    },
    {
        title: 'Top1 提及率排名',
        subtitle: '产品或品牌在AI生态中Top1提及率排名',
        valueLabel: 'Top1提及率',
        rows: [
            { name: '桃李', value: '63.3%', target: true },
            { name: '达利园', value: '4.4%' },
            { name: '北京贝儿食品', value: '2.2%' },
            { name: '宾堡', value: '2.2%' },
            { name: '小白心里软', value: '2.2%' },
        ],
    },
    {
        title: '平均提及位次排名',
        subtitle: '产品或品牌在AI生态中平均提及位次排名',
        valueLabel: '平均提及位次',
        rows: [
            { name: '桃李', value: 'NO. 3.4', target: true },
            { name: '曼可顿', value: 'NO. 6.9' },
            { name: '达利园', value: 'NO. 7.3' },
            { name: '美焙辰', value: 'NO. 7.4' },
            { name: '盼盼', value: 'NO. 7.8' },
        ],
    },
];

export default function Page_GeoReport_Competitors_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 pt-0 gap-3">
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        竞品横向对比
                    </h1>
                </div>

                <div className="flex-1 w-full max-h-[46vh] min-h-0 mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-white">
                    <RankPanel columns={COLUMNS} />
                </div>

                <div className="h-[32%] min-h-[180px] max-h-[240px] shrink-0 grid grid-cols-12 gap-5">
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                核心发现
                            </h3>
                            <div className="flex-grow text-[16px] lg:text-[18px] xl:text-[20px] text-zinc-200 leading-relaxed text-justify">
                                桃李的整体提及率达 81.1%，对曼可顿（42.2%）、豪士（42.2%）和宾堡（37.8%）形成了近乎翻倍的声量压制。
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                竞争格局总结
                            </h3>
                            <div className="flex-grow text-[16px] lg:text-[18px] xl:text-[20px] text-zinc-200 leading-relaxed text-justify">
                                桃李的 Top 1 首推率高达 63.3%，而达利园仅为 4.4%。这意味着当商户咨询供货源时，竞品几乎无法成为“首选答案”。
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                行动建议
                            </h3>
                            <div className="flex-grow text-[16px] lg:text-[18px] xl:text-[20px] text-zinc-200 leading-relaxed text-justify">
                                供应链基本盘稳固。策略应是守住核心大词，利用高周转优势强行绑定“高回报/高收益利润词”，对冲单件毛利偏低的痛点。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
