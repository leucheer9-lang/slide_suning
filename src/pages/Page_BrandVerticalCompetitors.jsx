import React from 'react';

/** 避免中文标题最后一个字单独掉行 */
function keepEnd(text, n = 3) {
    if (!text || text.length <= n) return text;
    return (
        <>
            {text.slice(0, -n)}
            <span className="whitespace-nowrap">{text.slice(-n)}</span>
        </>
    );
}

const competitors = [
    {
        no: '01',
        title: '华润产城品牌截流',
        hook: '新闻就能带客上门',
        platforms: ['雪花科创城', '华润置地招商'],
        accent: '#F97316',
        accentSoft: 'rgba(249,115,22,0.15)',
        playPunch: '总部南迁报道\n先占住「宝安工业上楼」',
        playDetail: '华润啤酒总部刚迁入，媒体和官网口径清晰。客户还没比链主和交付，搜索和 AI 里先看到了尖岗山。',
        threatPunch: '电子配套客\n也被它截进比价',
        threatDetail: '圈层是啤酒和智能装备，对不上创维链。但品牌声量更大，问工业上楼时它先出镜，创新谷变成后补选项。',
    },
    {
        no: '02',
        title: '工改工同形态截流',
        hook: '在中介页做成替代',
        platforms: ['甲岸美生智谷', '新安 72 区'],
        accent: '#EC4899',
        accentSoft: 'rgba(236,72,153,0.15)',
        playPunch: '研发楼 + 厂房 + 宿舍\n看起来就能换',
        playDetail: '写字楼网只露出面积、单价和兴东站 250 米。没有链主、2026 年中才交、配套更薄，房源页上都看不出来。',
        threatPunch: '同片区名单里\n它先被写成下一站',
        threatDetail: '创新谷若同样只露出报价，就会被比成石岩那一栋，而不是创维总部园。选址表会先把它写上。',
    },
    {
        no: '03',
        title: '同一价格带压价',
        hook: '用报价单来谈创新谷',
        platforms: ['雪花 60–100 元', '甲岸 65–85 元'],
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        playPunch: '三家租金同一梯度\n拿另外两家的单就能压价',
        playDetail: '公开渠道几乎只比单价。工业上楼、1,500 套公寓、商场和省级园身份，很少被写进房源页。',
        threatPunch: '只比单价时\n配套和政策都看不见',
        threatDetail: '50–72 元其实是三家最低。如果不把留人和补贴算进总持有成本，创新谷就会被说成偏贵。',
    },
];

export default function Page_BrandVerticalCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2 relative z-10 px-8">
                <h1 className="text-[40px] font-black text-white tracking-widest leading-none mb-1.5">
                    同一批宝安客，谁在截流？
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug max-w-[1100px] mx-auto">
                    雪花科创城和甲岸美生智谷，用品牌、房源和报价三刀来抢——不是三场比赛，是同一张选址表
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-3 relative z-10 flex flex-col gap-2.5">
                {competitors.map((c) => (
                    <div
                        key={c.no}
                        className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex overflow-hidden"
                        style={{ borderLeftWidth: 5, borderLeftColor: c.accent }}
                    >
                        <div className="w-[400px] shrink-0 px-6 py-3 border-r border-white/10 bg-black/40 flex flex-col justify-center gap-2">
                            <div className="flex items-center gap-3.5">
                                <span
                                    className="w-14 h-14 rounded-xl flex items-center justify-center text-[24px] font-black shrink-0"
                                    style={{ backgroundColor: c.accentSoft, color: c.accent }}
                                >
                                    {c.no}
                                </span>
                                <div className="min-w-0">
                                    <h2 className="text-[28px] font-black text-white leading-tight whitespace-nowrap">
                                        {c.title}
                                    </h2>
                                    <p className="text-[19px] font-bold mt-1 whitespace-nowrap" style={{ color: c.accent }}>
                                        {c.hook}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-[70px]">
                                {c.platforms.map((p) => (
                                    <span
                                        key={p}
                                        className="text-[16px] font-semibold text-zinc-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 min-w-0 px-7 py-3 border-r border-white/10 flex flex-col justify-center gap-1.5">
                            <div className="text-[16px] font-bold tracking-widest text-zinc-500">
                                核心打法
                            </div>
                            <div className="text-[28px] font-black text-white leading-snug whitespace-pre-line break-keep">
                                {c.playPunch}
                            </div>
                            <p className="text-[20px] text-zinc-300 leading-snug break-keep">{keepEnd(c.playDetail)}</p>
                        </div>

                        <div
                            className="w-[500px] shrink-0 px-7 py-3 flex flex-col justify-center gap-1.5"
                            style={{ backgroundColor: c.accentSoft }}
                        >
                            <div
                                className="text-[16px] font-black tracking-widest"
                                style={{ color: c.accent }}
                            >
                                对创新谷的威胁
                            </div>
                            <div className="text-[28px] font-black text-white leading-snug whitespace-pre-line break-keep">
                                {c.threatPunch}
                            </div>
                            <p className="text-[20px] text-zinc-200 leading-snug break-keep">{keepEnd(c.threatDetail)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
