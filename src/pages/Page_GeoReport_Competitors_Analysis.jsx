import React from 'react';
import RankPanel from '../components/geoone/RankPanel';

/* ══════════════ 数据：换竞品排名时只改这一段 ══════════════ */
/* 来源：GEO ONE 419 ToC · mention-rate / top1 / position 全量榜 */

const COLUMNS = [
    {
        title: '提及率排名',
        subtitle: '产品或品牌在AI生态中提及率排名',
        valueLabel: '提及率',
        rows: [
            { name: '顺丰', value: '85.8%' },
            { name: '京东物流', value: '72.5%', target: true },
            { name: '中通快递', value: '45.0%' },
            { name: '圆通快递', value: '38.3%' },
            { name: '申通快递', value: '37.5%' },
        ],
    },
    {
        title: 'Top1 提及率排名',
        subtitle: '产品或品牌在AI生态中Top1提及率排名',
        valueLabel: 'Top1提及率',
        rows: [
            { name: '顺丰', value: '47.5%' },
            { name: '京东物流', value: '7.5%', target: true },
            { name: '德邦快递', value: '5.0%' },
            { name: '申通快递', value: '5.0%' },
            { name: '闪送', value: '5.0%' },
        ],
    },
    {
        title: '平均提及位次排名',
        subtitle: '产品或品牌在AI生态中平均提及位次排名',
        valueLabel: '平均提及位次',
        rows: [
            { name: '顺丰', value: 'NO. 3.0' },
            { name: '京东物流', value: 'NO. 4.2', target: true },
            { name: '中通快递', value: 'NO. 4.7' },
            { name: '圆通快递', value: 'NO. 5.3' },
            { name: '申通快递', value: 'NO. 5.5' },
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
                        竞品横向对比 · C端
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
                                京东物流品牌提及率 72.5%，稳居第二，但落后顺丰（85.8%）约 13 个点；对中通、圆通、申通已形成明显断层优势。
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
                                Top 1 首推率仅 7.5%，顺丰高达 47.5%。C 端问答里“进清单容易、占首位很难”，首位红利几乎被顺丰锁定。
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
                                守住大件送装与服务口碑长板，同时用可引用的时效实测与对比测评内容攻坚 Top 1，缩小对顺丰的首位差距。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
