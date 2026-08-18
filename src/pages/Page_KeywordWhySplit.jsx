import React from 'react';

/**
 * 分类只看一件事：用户问法里「创维创新谷」一定会出现吗？
 *   不一定出现 → 优化词（要靠优化去争取被推荐）→ 看提及率 / 出现位置
 *   一定会出现 → 监测词（品牌必然在场）→ 看信息准确 / 有无负面
 * 两类混在一起算，监测词天然接近 100% 提及，会把整体提及率虚高。
 */

const OPT_ACCENT = '#004CE5';
const MON_ACCENT = '#F5A623';

const ROWS = [
    {
        name: '优化词',
        tag: '主动争取被推荐',
        example: '「宝安高端产业园推荐」',
        purpose: '答案里不一定有创新谷，要靠优化去争取',
        focus: ['提及率', '出现位置'],
        accent: OPT_ACCENT,
        accentText: '#7FA6FF',
        mark: '✕',
        answer: '不一定出现',
    },
    {
        name: '监测词',
        tag: '守住信息底线',
        example: '「创维创新谷和雪花科创城哪个好」',
        purpose: '问法里已带品牌名，创新谷必然在场',
        focus: ['信息是否准确', '是否有负面'],
        accent: MON_ACCENT,
        accentText: '#F5C574',
        mark: '✓',
        answer: '一定会出现',
    },
];

function Row({ d }) {
    return (
        <div
            className="flex-1 min-h-0 rounded-[1.75rem] flex items-stretch px-10 gap-8 py-7"
            style={{ border: `1px solid ${d.accent}55`, background: `${d.accent}0F` }}
        >
            <div className="w-[620px] shrink-0 flex flex-col justify-center">
                <span className="text-[16px] text-zinc-500 tracking-wider">用户会这么问</span>
                <div className="text-[34px] font-black text-white leading-tight mt-2">{d.example}</div>
                <div className="text-[17px] text-zinc-500 mt-2.5">{d.purpose}</div>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center gap-1.5">
                <span className="text-[15px] text-zinc-500">归为</span>
                <span className="text-[28px] leading-none" style={{ color: d.accent }}>
                    →
                </span>
            </div>

            <div className="shrink-0 w-[210px] flex flex-col items-center justify-center gap-3">
                <span
                    className="px-7 py-3 rounded-2xl text-[30px] font-black leading-none whitespace-nowrap"
                    style={{
                        background: `${d.accent}26`,
                        border: `1.5px solid ${d.accent}80`,
                        color: d.accentText,
                    }}
                >
                    {d.name}
                </span>
                <span className="text-[16px] text-zinc-500">{d.tag}</span>
            </div>

            <div className="w-px self-stretch bg-white/10" />

            <div className="flex-1 min-w-0 flex flex-col justify-center">
                <span className="text-[16px] text-zinc-500 tracking-wider">主要看</span>
                <div className="flex flex-wrap gap-3 mt-3">
                    {d.focus.map((f) => (
                        <span
                            key={f}
                            className="px-6 py-3 rounded-xl text-[22px] font-bold leading-none"
                            style={{
                                background: `${d.accent}26`,
                                border: `1px solid ${d.accent}66`,
                                color: d.accentText,
                            }}
                        >
                            {f}
                        </span>
                    ))}
                </div>
                <div
                    className="inline-flex items-center gap-2 mt-4 self-start px-4 py-1.5 rounded-full text-[16px] font-bold leading-none"
                    style={{ background: `${d.accent}1A`, color: d.accentText }}
                >
                    <span className="text-[17px] leading-none">{d.mark}</span> 品牌名{d.answer}
                </div>
            </div>
        </div>
    );
}

export default function Page_KeywordWhySplit() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    监测词与优化词怎么分
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col min-h-0">
                <p className="shrink-0 text-[24px] text-zinc-300 leading-snug mb-5">
                    分类只看一件事：用户的搜索问法里，
                    <strong className="font-bold" style={{ color: OPT_ACCENT }}>
                        「创维创新谷」
                    </strong>
                    <strong className="text-white font-bold">一定会出现吗？</strong>
                    答案不同，归类不同，盯的指标也完全不同。
                </p>

                <div className="flex-1 min-h-0 flex flex-col gap-6">
                    {ROWS.map((d) => (
                        <Row key={d.name} d={d} />
                    ))}
                </div>

                <div className="shrink-0 mt-5 rounded-2xl border border-white/10 bg-zinc-900/40 px-8 py-5 flex items-center gap-5">
                    <span className="shrink-0 w-[38px] h-[38px] rounded-full border-2 border-zinc-600 flex items-center justify-center text-[22px] font-black text-zinc-400 leading-none">
                        !
                    </span>
                    <p className="text-[20px] text-zinc-400 leading-snug">
                        为什么要拆开算：混在一起，监测词天然
                        <strong className="text-white font-bold">「100% 提及」</strong>
                        ，会把整体
                        <strong className="text-white font-bold">提及率虚高</strong>
                        ，数据就失去意义。所以词条数据只统计优化词，监测词单独用来体检舆情。
                    </p>
                </div>
            </div>
        </div>
    );
}
