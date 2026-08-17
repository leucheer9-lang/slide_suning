import React from 'react';

/** 末尾 2–3 字不单独掉行 */
function keepEnd(text, n = 3) {
    if (!text || text.length <= n) return text;
    return (
        <>
            {text.slice(0, -n)}
            <span className="whitespace-nowrap">{text.slice(-n)}</span>
        </>
    );
}

const tocGroups = [
    {
        tag: '宝安高端产业园',
        accent: '#004CE5',
        keywords: [
            '宝安区高端产业园推荐',
            '宝安区高端产业园排行榜',
            '现成可入驻的宝安区高端产业园推荐',
            '配套齐全的宝安区高端产业园推荐',
            '有人才公寓的宝安区高端产业园推荐',
            '适合总部入驻的宝安区高端产业园推荐',
            '有大厂总部的宝安区高端产业园推荐',
            '能研发又能办公的宝安区高端产业园推荐',
            '口碑好的宝安区高端产业园推荐',
            '有政策补贴的宝安区高端产业园推荐',
            '面积能灵活分割的宝安区高端产业园推荐',
        ],
    },
    {
        tag: '宝安产业匹配',
        accent: '#3B82F6',
        keywords: [
            '宝安区科技产业园推荐',
            '宝安区电子信息产业园推荐',
            '宝安区新型显示产业园推荐',
        ],
    },
    {
        tag: '宝安企业选址',
        accent: '#22D3EE',
        keywords: [
            '宝安区适合科技企业入驻的产业园有哪些',
            '宝安区适合电子信息企业发展的产业园有哪些',
            '宝安区适合智能硬件企业的产业园有哪些',
        ],
    },
    {
        tag: '宝安一体化',
        accent: '#10B981',
        keywords: [
            '宝安区研发办公一体化园区推荐',
            '宝安区生产研发一体化园区推荐',
        ],
    },
    {
        tag: '宝安写字楼',
        accent: '#A78BFA',
        keywords: [
            '产业园里的宝安区写字楼推荐',
            '适合总部办公的宝安区写字楼推荐',
        ],
    },
    {
        tag: '扩展',
        accent: '#A1A1AA',
        keywords: [
            '宝安区产业园推荐',
            '宝安区产业园排行榜',
            '宝安区产业园有哪些',
            '口碑好的宝安区产业园推荐',
        ],
    },
];

const tobGroups = [
    {
        tag: '渠道合作',
        accent: '#F59E0B',
        keywords: [
            '适合中介带客的宝安区产业园推荐',
            '支持招商渠道合作的宝安区产业园推荐',
            '适合中介长期合作的宝安区产业园推荐',
            '值得中介主推的宝安区产业园推荐',
            '适合中介带客的宝安区高端产业园推荐',
            '支持招商渠道合作的宝安区高端产业园推荐',
            '适合中介带客的宝安区高端厂房推荐',
            '支持招商渠道合作的宝安区高端厂房推荐',
            '适合中介带客的宝安区写字楼推荐',
        ],
    },
    {
        tag: '房源货盘',
        accent: '#38BDF8',
        keywords: [
            '房源充足的宝安区产业园推荐',
            '有现成房源的宝安区产业园推荐',
            '有大面积房源的宝安区产业园推荐',
            '有整层房源的宝安区产业园推荐',
            '面积可灵活分割的宝安区产业园推荐',
            '有现成房源的宝安区高端产业园推荐',
            '有大面积房源的宝安区高端厂房推荐',
            '面积可灵活分割的宝安区高端厂房推荐',
            '有整层房源的宝安区写字楼推荐',
        ],
    },
    {
        tag: '佣金政策',
        accent: '#FB923C',
        keywords: [
            '中介佣金高的宝安区产业园推荐',
            '中介佣金结算快的宝安区产业园推荐',
            '中介佣金高的宝安区高端产业园推荐',
            '中介佣金高的宝安区写字楼推荐',
        ],
    },
    {
        tag: '成交效率',
        accent: '#34D399',
        keywords: [
            '渠道带客成交效率高的宝安区产业园推荐',
            '客户成交容易的宝安区产业园推荐',
        ],
    },
    {
        tag: '报备规则',
        accent: '#F472B6',
        keywords: ['中介报备流程简单的宝安区产业园推荐'],
    },
];

const tocCount = tocGroups.reduce((n, g) => n + g.keywords.length, 0);
const tobCount = tobGroups.reduce((n, g) => n + g.keywords.length, 0);

function KeywordRow({ text, accent }) {
    return (
        <div className="flex items-start gap-2 min-w-0">
            <span
                className="w-2 h-2 rounded-full shrink-0 mt-[9px]"
                style={{ backgroundColor: accent }}
            />
            <span className="text-[20px] font-bold leading-[1.4] tracking-normal text-zinc-200">
                {keepEnd(text)}
            </span>
        </div>
    );
}

function GroupBlock({ group, columns = 1 }) {
    return (
        <div className="shrink-0 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[16px] font-extrabold tracking-wider text-zinc-200">
                    {group.tag}
                </span>
                <span
                    className="text-[13px] font-black font-mono px-2 py-0.5 rounded-full border shrink-0"
                    style={{
                        color: group.accent,
                        backgroundColor: `${group.accent}22`,
                        borderColor: `${group.accent}55`,
                    }}
                >
                    {group.keywords.length}
                </span>
            </div>
            <div className={`grid gap-x-5 gap-y-1.5 ${columns > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {group.keywords.map((kw) => (
                    <KeywordRow key={kw} text={kw} accent={group.accent} />
                ))}
            </div>
        </div>
    );
}

function SideCard({ kicker, title, count, accent, children }) {
    return (
        <div className="relative bg-[#0a0a0a]/90 border border-white/10 rounded-3xl flex flex-col overflow-hidden h-full min-h-0 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[4px]" style={{ backgroundColor: accent }} />
            <div className="relative px-10 pt-5 pb-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                <div className="min-w-0 pr-6">
                    <div className="text-[16px] font-bold tracking-widest text-zinc-400 mb-1">{kicker}</div>
                    <h2 className="text-[28px] font-black text-white tracking-wide leading-none">{title}</h2>
                </div>
                <span
                    className="text-[15px] font-black px-3.5 py-1 rounded-full font-mono border shrink-0"
                    style={{
                        color: accent,
                        backgroundColor: `${accent}22`,
                        borderColor: `${accent}55`,
                    }}
                >
                    {count}
                </span>
            </div>
            <div className="relative flex-1 min-h-0 px-10 py-5 flex flex-col justify-between gap-4 overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default function Page_KeywordGroupingConclusion() {
    const [tocCore, tocMatch, tocSite, tocIntegrate, tocOffice, tocExtra] = tocGroups;
    const [tobChannel, tobStock, tobCommission, tobClose, tobReport] = tobGroups;

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-8 py-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1760px] mx-auto flex flex-col h-full relative z-10 min-h-0 gap-4">
                <div className="shrink-0">
                    <h1 className="text-[40px] font-black text-white tracking-widest leading-none mb-2">
                        词条分组结论
                    </h1>
                    <p className="text-zinc-400 text-[20px] leading-snug text-justify [text-justify:inter-ideograph] max-w-[1480px]">
                        按飞书已定词库拆成两端：C 端锁企业选址问法，B 端锁中介带客问法。共 {tocCount + tobCount} 条优化词，先占「宝安高端产业园」与「渠道合作 / 房源货盘」。
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
                    <SideCard kicker="ToC" title="C端 · 企业选址" count={tocCount} accent="#004CE5">
                        <GroupBlock group={tocCore} columns={2} />
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <GroupBlock group={tocMatch} />
                            <GroupBlock group={tocSite} />
                            <GroupBlock group={tocIntegrate} />
                            <GroupBlock group={tocOffice} />
                        </div>
                        <GroupBlock group={tocExtra} columns={2} />
                    </SideCard>

                    <SideCard kicker="ToB" title="B端 · 渠道中介" count={tobCount} accent="#F59E0B">
                        <div className="grid grid-cols-2 gap-x-8">
                            <GroupBlock group={tobChannel} />
                            <GroupBlock group={tobStock} />
                        </div>
                        <div className="grid grid-cols-2 gap-x-8">
                            <GroupBlock group={tobCommission} />
                            <div className="flex flex-col gap-4">
                                <GroupBlock group={tobClose} />
                                <GroupBlock group={tobReport} />
                            </div>
                        </div>
                    </SideCard>
                </div>
            </div>
        </div>
    );
}
