import React from 'react';

/**
 * 我们到底用 AI 还是用人写内容：
 * 用某客户 5 月投放文章的引用率 TOP10 说明——2026 年 3 月起从 70% Agent 创作转为 70% 人工创作，
 * 表格里「作者」一列是重点：引用数最高的那批文章基本都出自真人。
 */

const TOP_ARTICLES = [
    { rank: 1, title: '拒绝智商税：2026年知名品牌质量好的AI床垫推荐清单', author: '佳妮', platform: 'IT之家', date: '2026-05-13', total: 264, deepseek: 0, doubao: 117, yuanbao: 0, wenxin: 18, tongyi: 75, kimi: 54 },
    { rank: 2, title: '2026年最新2万左右口碑好的AI床垫推荐：口碑和服务一起查', author: '佳妮', platform: '什么值得买', date: '2026-05-24', total: 183, deepseek: 29, doubao: 67, yuanbao: 0, wenxin: 56, tongyi: 0, kimi: 31 },
    { rank: 3, title: '别花 2 万块买个电动排骨架！2026 年 AI 床垫品牌前十名指南', author: '外部专业撰稿人', platform: '百家号(日照新闻网)', date: '2026-05-12', total: 182, deepseek: 0, doubao: 0, yuanbao: 0, wenxin: 162, tongyi: 20, kimi: 0 },
    { rank: 4, title: '2026买床垫注意：腰疼别乱买硬垫，6款动态护脊AI床垫清单', author: '佳妮', platform: 'IT之家', date: '2026-05-25', total: 116, deepseek: 26, doubao: 22, yuanbao: 2, wenxin: 19, tongyi: 33, kimi: 14 },
    { rank: 5, title: '别花 2 万块买个电动排骨架！2026 年 AI 床垫品牌前十名指南', author: '佳妮', platform: '搜狐号(随机账号)', date: '2026-05-15', total: 113, deepseek: 0, doubao: 60, yuanbao: 17, wenxin: 13, tongyi: 0, kimi: 23 },
    { rank: 6, title: '当床开始“思考”：2026年2万左右高端智能床品牌推荐与选购逻辑', author: '佳妮', platform: 'IT之家', date: '2026-04-25', total: 108, deepseek: 8, doubao: 37, yuanbao: 24, wenxin: 8, tongyi: 31, kimi: 0 },
    { rank: 7, title: '2026买床垫只看材质就输了！知名品牌质量好的AI床垫推荐指南', author: 'Agent', platform: '新浪', date: '2026-06-08', total: 106, deepseek: 0, doubao: 27, yuanbao: 22, wenxin: 15, tongyi: 11, kimi: 31 },
    { rank: 8, title: '2026年高端AI床垫大洗牌：知名品牌质量好的AI床垫推荐清单', author: '佳妮', platform: '什么值得买', date: '2026-05-13', total: 94, deepseek: 3, doubao: 17, yuanbao: 0, wenxin: 29, tongyi: 0, kimi: 45 },
    { rank: 9, title: '夫妻睡感不统一？可以左右分区调节的AI床垫推荐，终结睡眠迁就', author: '佳妮', platform: 'IT之家', date: '2026-05-06', total: 93, deepseek: 8, doubao: 37, yuanbao: 19, wenxin: 4, tongyi: 25, kimi: 0 },
    { rank: 10, title: '2026年高端AI床垫品牌推荐：这几款口碑好的高端AI床垫才值得看', author: 'Agent', platform: '新浪', date: '2026-04-21', total: 88, deepseek: 1, doubao: 28, yuanbao: 0, wenxin: 0, tongyi: 0, kimi: 59 },
];

const TOTALS = { total: 2595, deepseek: 154, doubao: 689, yuanbao: 260, wenxin: 832, tongyi: 245, kimi: 415 };

const NUM = '#7FA6FF';

function AuthorTag({ author }) {
    const isAgent = author === 'Agent';
    return (
        <span
            className={`inline-block text-center rounded-md text-[13px] font-bold py-0.5 ${
                author === '外部专业撰稿人' ? 'px-2.5' : 'w-[72px]'
            } ${
                isAgent
                    ? 'bg-white text-zinc-950 border border-zinc-300'
                    : 'bg-emerald-600 text-white border border-emerald-500'
            }`}
        >
            {author}
        </span>
    );
}

const AUTHOR_CELL = 'border-l-2 border-r-2 border-dashed border-amber-400/80 bg-amber-400/[0.06]';

export default function Page_ContentHumanAiRatio() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 flex items-end justify-between gap-8">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    我们到底用 AI 还是用人写内容
                </h1>
                <div className="flex items-center gap-4 shrink-0 pb-0.5">
                    <span className="px-3.5 py-1 rounded-md text-[15px] font-bold bg-emerald-600 text-white border border-emerald-500">
                        ■ 人工主导创作
                    </span>
                    <span className="px-3.5 py-1 rounded-md text-[15px] font-bold bg-white text-zinc-950 border border-zinc-300">
                        ■ Agent 创作
                    </span>
                </div>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-5 pt-1 relative z-10 flex flex-col min-h-0">
                {/* 策略转变横幅 */}
                <div className="shrink-0 flex flex-col gap-2.5 bg-zinc-900/50 border border-white/15 rounded-2xl p-4">
                    <div className="flex justify-center items-center gap-14 bg-black/50 border border-white/[0.08] rounded-xl py-2.5">
                        <div className="flex items-baseline gap-3.5">
                            <span className="text-[30px] text-zinc-500 font-black">2026年3月以前</span>
                            <span className="text-zinc-200 text-[52px] font-black tracking-tight leading-none">
                                70% Agent 创作
                            </span>
                        </div>

                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#004CE5]/40 bg-[#004CE5]/10 shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke={NUM} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>

                        <div className="flex items-baseline gap-3.5">
                            <span className="text-[30px] font-black" style={{ color: NUM }}>
                                2026年3月以后
                            </span>
                            <span className="text-[52px] font-black tracking-tight leading-none" style={{ color: NUM }}>
                                70% 人工创作
                            </span>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 px-1">
                        <span className="text-[21px] text-zinc-400 font-black tracking-wider shrink-0">原因：</span>
                        <p className="text-[21px] text-white font-bold leading-snug">
                            AI 内容越来越多，平台算法做了调整，导致
                            <span className="font-black" style={{ color: NUM }}>
                                AI 生成的文章引用率在下降
                            </span>
                            。反而是真实感强、有观点、有信息增量的
                            <span className="font-black" style={{ color: NUM }}>
                                真人写的文章，效果越来越稳定
                            </span>
                            。
                        </p>
                    </div>
                </div>

                {/* 引用率 TOP10 明细 */}
                <table className="w-full text-left border-collapse table-fixed mt-4 shrink-0">
                    <thead>
                        <tr className="border-b-2 border-zinc-800 text-[15px] font-extrabold text-zinc-400">
                            <th className="py-2 px-2 w-[5%] text-center">排序</th>
                            <th className="py-2 px-2 w-[37%]">文章标题</th>
                            <th className={`py-2 px-2 w-[11%] text-center border-t-2 text-amber-300 ${AUTHOR_CELL}`}>
                                作者
                            </th>
                            <th className="py-2 px-2 w-[11%]">发布平台</th>
                            <th className="py-2 px-2 text-center w-[10%]">发布时间</th>
                            <th className="py-2 px-2 text-center w-[6%]">总引用数</th>
                            <th className="py-2 px-2 text-center w-[5%]">DeepSeek</th>
                            <th className="py-2 px-2 text-center w-[5%]">豆包</th>
                            <th className="py-2 px-2 text-center w-[5%]">元宝</th>
                            <th className="py-2 px-2 text-center w-[5%]">文心</th>
                            <th className="py-2 px-2 text-center w-[5%]">通义</th>
                            <th className="py-2 px-2 text-center w-[5%]">Kimi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/40 text-[15px] font-bold text-zinc-300">
                        <tr className="bg-white/[0.03] font-extrabold text-white">
                            <td className="py-[7px] px-2 text-center text-zinc-600">—</td>
                            <td className="py-[7px] px-2 text-[16px]">【总计汇总】</td>
                            <td className={`py-[7px] px-2 text-center text-zinc-400 ${AUTHOR_CELL}`}>—</td>
                            <td className="py-[7px] px-2 text-zinc-600">—</td>
                            <td className="py-[7px] px-2 text-zinc-600 text-center">—</td>
                            <td className="py-[7px] px-2 text-[18px] font-black text-center" style={{ color: NUM }}>
                                {TOTALS.total}
                            </td>
                            <td className="py-[7px] px-2 text-center">{TOTALS.deepseek}</td>
                            <td className="py-[7px] px-2 text-center">{TOTALS.doubao}</td>
                            <td className="py-[7px] px-2 text-center">{TOTALS.yuanbao}</td>
                            <td className="py-[7px] px-2 text-center">{TOTALS.wenxin}</td>
                            <td className="py-[7px] px-2 text-center">{TOTALS.tongyi}</td>
                            <td className="py-[7px] px-2 text-center">{TOTALS.kimi}</td>
                        </tr>

                        {TOP_ARTICLES.map((row) => (
                            <tr key={row.rank}>
                                <td className="py-[6px] px-2 text-center text-zinc-500">{row.rank}</td>
                                <td className="py-[6px] px-2 truncate max-w-0 text-white font-medium" title={row.title}>
                                    {row.title}
                                </td>
                                <td
                                    className={`py-[6px] px-2 text-center ${AUTHOR_CELL} ${
                                        row.rank === 10 ? 'border-b-2' : ''
                                    }`}
                                >
                                    <AuthorTag author={row.author} />
                                </td>
                                <td className="py-[6px] px-2 text-zinc-400 truncate" title={row.platform}>
                                    {row.platform}
                                </td>
                                <td className="py-[6px] px-2 text-zinc-500 text-center">{row.date}</td>
                                <td className="py-[6px] px-2 text-[18px] font-black text-center" style={{ color: NUM }}>
                                    {row.total}
                                </td>
                                <td className="py-[6px] px-2 text-center text-zinc-400">{row.deepseek}</td>
                                <td className="py-[6px] px-2 text-center text-zinc-400">{row.doubao}</td>
                                <td className="py-[6px] px-2 text-center text-zinc-400">{row.yuanbao}</td>
                                <td className="py-[6px] px-2 text-center text-zinc-400">{row.wenxin}</td>
                                <td className="py-[6px] px-2 text-center text-zinc-400">{row.tongyi}</td>
                                <td className="py-[6px] px-2 text-center text-zinc-400">{row.kimi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex-1 flex items-center justify-center min-h-0">
                    <span className="text-[22px] text-white font-extrabold">
                        某客户 5 月投放文章引用率 TOP10 类型分布
                    </span>
                </div>
            </div>
        </div>
    );
}
