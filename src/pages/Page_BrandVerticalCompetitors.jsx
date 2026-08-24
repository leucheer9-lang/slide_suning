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
        title: '榜单锁定身份',
        hook: '导购站就是标准答案',
        platforms: ['十大品牌榜', 'CNPP / 买购', '中国品牌网'],
        accent: '#F97316',
        accentSoft: 'rgba(249,115,22,0.15)',
        playPunch: '收纳榜稳居第一\n代价是被写成「家庭用品企业」',
        playDetail:
            '这类榜单互相抄写、覆盖极广，而页面上挂靠的主体介绍一律是「塑料家庭用品」。材料与防护的新身份，在这里完全没有位置。',
        threatPunch: '想被认成材料公司\n榜单先把你钉回收纳',
        threatDetail:
            '第一名是真实的，但它锁定的正是太力要摆脱的那个身份。AI 抓到的第一批语料，几乎全部出自这里。',
    },
    {
        no: '02',
        title: '白牌低价比价',
        hook: '同一页里只剩单价',
        platforms: ['工厂店 / 白牌', '抖音低价链接', '同规格比价'],
        accent: '#EC4899',
        accentSoft: 'rgba(236,72,153,0.15)',
        playPunch: '同规格价格腰斩\nAI 只拿单价做推荐',
        playDetail:
            '收纳类目高度同质化，详情页能讲的只有尺寸和价格。航天级材料、行业标准、4 倍抗穿刺，都进不了比价这张表。',
        threatPunch: '贵在哪里说不清\n就会被当成溢价',
        threatDetail:
            '消费者真正在意的是漏不漏气、能不能反复用。这些恰好是太力的强项，却没被写成可被引用的结构化事实。',
    },
    {
        no: '03',
        title: '赛道答案被占',
        hook: '问了也点不到太力',
        platforms: ['恒辉安防', '中科力信', '安思尔 / 霍尼韦尔'],
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        playPunch: '机器人防护已交付\nSTF 有中科院背书',
        playDetail:
            '对手把「已落地」和「有出身」写成了可检索的事实。问机器人防护材料、问 STF 产业化，答案稳定落在他们身上。',
        threatPunch: '太力在同类问题里\n一次都不会被点名',
        threatDetail:
            '不是能力不够，是证据没上线。防刺割已达国标美标顶级、纳米粒子已自主合成，这些话在公开网上找不到出处。',
    },
];

export default function Page_BrandVerticalCompetitors() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-3 pb-2 relative z-10 px-8">
                <h1 className="text-[40px] font-black text-white tracking-widest leading-none mb-1.5">
                    同一批客户，谁在截流？
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug max-w-[1100px] mx-auto">
                    榜单、比价页和赛道答案三处同时发力——不是三场比赛，是同一条决策路径
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
                                对太力的威胁
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
