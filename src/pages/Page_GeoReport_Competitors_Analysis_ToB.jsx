import React from 'react';
import RankPanel from '../components/geoone/RankPanel';

/* ══════════════ 数据：换竞品排名时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 482 创维创新谷-ToB①，2026-08-14 · mention-rate / top1 / position 全量榜 */
/* 三栏均取全量榜前四名 + 本品，本品行带真实 rank（未进前五，不能按行号显示名次）*/

const COLUMNS = [
    {
        title: '提及率排名',
        subtitle: '产品或品牌在AI生态中提及率排名',
        valueLabel: '提及率',
        rows: [
            { name: '新桥东先进制造产业园', value: '42.0%' },
            { name: '燕罗智能网联汽车产业园', value: '26.0%' },
            { name: '汇智研发中心', value: '18.0%' },
            { name: '中粮', value: '16.0%' },
            { name: '创维创新谷', value: '2.0%', rank: 72, target: true },
        ],
    },
    {
        title: 'Top1 提及率排名',
        subtitle: '产品或品牌在AI生态中Top1提及率排名',
        valueLabel: 'Top1提及率',
        rows: [
            { name: '新桥东先进制造产业园', value: '22.0%' },
            { name: '壹方中心', value: '6.0%' },
            { name: '汇智研发中心', value: '6.0%' },
            { name: '泰华梧桐岛', value: '6.0%' },
            { name: '创维创新谷', value: '0.0%', rank: '—', target: true },
        ],
    },
    {
        title: '平均提及位次排名',
        subtitle: '产品或品牌在AI生态中平均提及位次排名',
        valueLabel: '平均提及位次',
        rows: [
            { name: '新桥东先进制造产业园', value: 'NO. 5.3' },
            { name: '燕罗智能网联汽车产业园', value: 'NO. 6.6' },
            { name: '汇智研发中心', value: 'NO. 6.9' },
            { name: '泰华梧桐岛', value: 'NO. 7.0' },
            { name: '创维创新谷', value: 'NO. 7.9', rank: 70, target: true },
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
                        竞品横向对比 · 优化词 B 端
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
                                同一批 B 端优化词下，新桥东先进制造产业园提及率 42.0% 排第一，燕罗智能网联汽车产业园 26.0%，汇智研发中心 18.0%；创维创新谷只有 2.0%，在 175 家竞品的全量提及率榜排第 72，行业影响力第 85。
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
                                新桥东先进制造产业园 Top1 首推率 22.0%，是第二名壹方中心（6.0%）的近四倍。创维创新谷首推率 0.0%（未进 Top1 榜）、平均位次 NO. 7.9（第 70），即使被提及也落在清单末段。
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
                                短期不与新桥东在"宝安区产业园推荐"这类通用词上硬碰，先把已有 50% 提及的"高端 + 现成房源"类窄词做实位次，并把房源参数补进宝安区政府在线、宝安湾等官方信源；再以名录榜单与渠道合作指南形态的内容切入 24 个 0 提及的中介渠道词。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
