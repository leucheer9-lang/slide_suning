import React from 'react';
import RankPanel from '../components/geoone/RankPanel';

/* ══════════════ 数据：换竞品排名时只改这一段 ══════════════ */
/* 来源：GEO ONE 420 ToB · mention-rate / top1 / position 全量榜 */

const COLUMNS = [
    {
        title: '提及率排名',
        subtitle: '产品或品牌在AI生态中提及率排名',
        valueLabel: '提及率',
        rows: [
            { name: '顺丰', value: '72.5%' },
            { name: '京东物流', value: '58.3%', target: true },
            { name: '菜鸟', value: '23.3%' },
            { name: '安能物流', value: '22.5%' },
            { name: '圆通', value: '20.0%' },
        ],
    },
    {
        title: 'Top1 提及率排名',
        subtitle: '产品或品牌在AI生态中Top1提及率排名',
        valueLabel: 'Top1提及率',
        rows: [
            { name: '顺丰', value: '20.0%' },
            { name: '京东物流', value: '15.8%', target: true },
            { name: '德邦快递', value: '5.8%' },
            { name: '安能物流', value: '5.0%' },
            { name: '申通快递', value: '3.3%' },
        ],
    },
    {
        title: '平均提及位次排名',
        subtitle: '产品或品牌在AI生态中平均提及位次排名',
        valueLabel: '平均提及位次',
        rows: [
            { name: '顺丰', value: 'NO. 5.1' },
            { name: '京东物流', value: 'NO. 6.1', target: true },
            { name: '圆通', value: 'NO. 9.0' },
            { name: '菜鸟', value: 'NO. 9.0' },
            { name: '安能物流', value: 'NO. 9.1' },
        ],
    },
];

export default function Page_GeoReport_Competitors_Analysis_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 pt-0 gap-3">
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        竞品横向对比 · B端
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
                                京东物流 B 端品牌提及率 58.3%，稳居第二，但落后顺丰（72.5%）约 14 个点；对菜鸟、安能、圆通已形成明显断层优势。
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
                                Top 1 首推率 15.8%，顺丰 20%，差距仅 4.2 个点。B 端首推权争夺比 C 端更胶着，但平均位次 NO. 6.1 仍偏后。
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
                                守住仓配一体与分仓履约长板，同时用可引用的 B 端案例与行业报告攻坚跨境出海、医药冷链等短板，缩小与顺丰的首推与位次差距。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
