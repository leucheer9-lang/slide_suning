import React from 'react';
import RankPanel from '../components/geoone/RankPanel';

/* ══════════════ 数据：换竞品排名时只改这一段 ══════════════ */
/* 来源：GEO ONE 481 创维创新谷-ToC① · mention-rate / top1 / position 全量榜，2026-08-14 */
/* 本品未进前五的两栏取前四名 + 本品，本品行带真实 rank */

const COLUMNS = [
    {
        title: '提及率排名',
        subtitle: '产品或品牌在AI生态中提及率排名',
        valueLabel: '提及率',
        rows: [
            { name: '新桥东先进制造产业园', value: '54.0%' },
            { name: '全至科技创新园', value: '36.0%' },
            { name: '汇智研发中心', value: '34.0%' },
            { name: '创维创新谷', value: '24.0%', target: true },
            { name: '宝安桃花源科技创新园', value: '24.0%' },
        ],
    },
    {
        title: 'Top1 提及率排名',
        subtitle: '产品或品牌在AI生态中Top1提及率排名',
        valueLabel: 'Top1提及率',
        rows: [
            { name: '新桥东先进制造产业园', value: '26.0%' },
            { name: '腾讯', value: '6.0%' },
            { name: '前海科兴科学园', value: '4.0%' },
            { name: '北大科创园', value: '4.0%' },
            { name: '创维创新谷', value: '2.0%', rank: 10, target: true },
        ],
    },
    {
        title: '平均提及位次排名',
        subtitle: '产品或品牌在AI生态中平均提及位次排名',
        valueLabel: '平均提及位次',
        rows: [
            { name: '新桥东先进制造产业园', value: 'NO. 6.0' },
            { name: '全至科技创新园', value: 'NO. 7.0' },
            { name: '汇智研发中心', value: 'NO. 7.6' },
            { name: '宝安桃花源科技创新园', value: 'NO. 8.0' },
            { name: '创维创新谷', value: 'NO. 8.8', rank: 17, target: true },
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
                        竞品横向对比 · 优化词 C 端
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
C 端选址场景下新桥东先进制造产业园提及率 54% 排第一，全至科技创新园 36%，汇智研发中心 34%；创维创新谷 24%，在 166 家竞品中排第 4、行业影响力第 8，已经进入第一梯队的边缘。
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
                                新桥东 Top1 首推率 26%，是第二名腾讯（6%）的四倍多；创维创新谷首推率 2%（第 10）、平均位次 NO. 8.8（第 17）。能进榜，但基本落在长列表中后段，很难成为首选答案。
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
                                提及率已经站住第 4，下一步是把位次从 NO. 8.8 往前推：强化新型显示、电子信息这类差异化产业标签，同时补齐政策补贴、人才公寓、配套等 0 提及的软条件内容。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
