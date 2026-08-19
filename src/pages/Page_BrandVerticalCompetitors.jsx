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

function DetailLines({ lines, className }) {
    return (
        <p className={className}>
            {lines.map((line, i) => (
                <span key={line}>
                    {i > 0 ? <br /> : null}
                    {keepEnd(line)}
                </span>
            ))}
        </p>
    );
}

const competitors = [
    {
        no: '01',
        title: '品牌与名录截流',
        hook: '新闻和名录就能带客上门',
        platforms: ['雪花科创城', '新桥东先进制造', '华润 / 政府名录'],
        accent: '#F97316',
        accentSoft: 'rgba(249,115,22,0.15)',
        playPunch: '总部南迁 + 工业上楼通稿\n先占住「宝安产业园」',
        playLines: [
            '雪花靠华润报道，新桥东靠政府名录和示范园通稿。',
            '客户还没比链主和交付，搜索和 AI 里先看到了尖岗山和新桥东。',
        ],
        threatPunch: '电子配套客\n也被写进别人的名单',
        threatLines: [
            '问工业上楼或宝安园推荐，雪花和新桥东先出镜。',
            '创新谷 C 端提及 24% 排第 4，B 端只有 2%，变成后补选项。',
        ],
    },
    {
        no: '02',
        title: '同形态替代截流',
        hook: '在中介页和名单里做成可换',
        platforms: ['甲岸美生智谷', '全至科技创新园', '汇智研发中心'],
        accent: '#EC4899',
        accentSoft: 'rgba(236,72,153,0.15)',
        playPunch: '研发楼 + 厂房 + 总部楼\n看起来就能换',
        playLines: [
            '甲岸工改工、全至产办合一、汇智纯研发楼。',
            '写字楼网和 AI 名单只露出面积、单价和业态，链主、交付和配套都看不出来。',
        ],
        threatPunch: '同片区名单里\n它们先被写成下一站',
        threatLines: [
            '创新谷若同样只露出报价，就会被比成石岩那一栋，而不是创维总部园。',
            '选址表会先写上甲岸、全至或汇智。',
        ],
    },
    {
        no: '03',
        title: '同一价格带压价',
        hook: '用报价单和政策租金来谈',
        platforms: ['新桥东 ≤35 元', '全至 / 汇智 35 元带', '雪花 / 甲岸同梯度'],
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        playPunch: '低价园拿政策租金压\n同价园拿报价单压',
        playLines: [
            '新桥东均价不超过 35 元，全至约 35 元起，汇智 35–59 元；',
            '雪花、甲岸又和创新谷同一梯度。公开渠道几乎只比单价。',
        ],
        threatPunch: '只比单价时\n配套和政策都看不见',
        threatLines: [
            '50–72 元在同形态里不算贵，但在名录园面前显得偏高。',
            '不把留人、补贴和链主协同算进总账，创新谷就会被说成偏贵。',
        ],
    },
];

const detailClass = 'text-[20px] leading-[1.65]';

export default function Page_BrandVerticalCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2 relative z-10 px-8">
                <h1 className="text-[40px] font-black text-white tracking-widest leading-none mb-1.5">
                    同一批宝安客，谁在截流？
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug max-w-[1280px] mx-auto">
                    雪花、甲岸在选址表上截流，新桥东、全至、汇智用名录和低价来抢——品牌、房源、报价三刀，还是同一场
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1760px] mx-auto px-6 pb-3 relative z-10 flex flex-col gap-2.5">
                {competitors.map((c) => (
                    <div
                        key={c.no}
                        className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex overflow-hidden"
                        style={{ borderLeftWidth: 5, borderLeftColor: c.accent }}
                    >
                        <div className="w-[400px] shrink-0 px-10 py-3 border-r border-white/10 bg-black/40 flex flex-col justify-center gap-2">
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

                        <div className="flex-1 min-w-0 px-10 py-3 border-r border-white/10 flex flex-col justify-center gap-1.5">
                            <div className="text-[16px] font-bold tracking-widest text-zinc-500">
                                核心打法
                            </div>
                            <div className="text-[28px] font-black text-white leading-snug whitespace-pre-line">
                                {c.playPunch}
                            </div>
                            <DetailLines lines={c.playLines} className={`${detailClass} text-zinc-300`} />
                        </div>

                        <div
                            className="flex-1 min-w-0 px-10 py-3 flex flex-col justify-center gap-1.5"
                            style={{ backgroundColor: c.accentSoft }}
                        >
                            <div
                                className="text-[16px] font-black tracking-widest"
                                style={{ color: c.accent }}
                            >
                                对创新谷的威胁
                            </div>
                            <div className="text-[28px] font-black text-white leading-snug whitespace-pre-line">
                                {c.threatPunch}
                            </div>
                            <DetailLines lines={c.threatLines} className={`${detailClass} text-zinc-200`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
