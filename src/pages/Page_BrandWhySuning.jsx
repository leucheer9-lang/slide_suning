import React from 'react';

const cols = 'grid-cols-[1.2fr_1.15fr_1.35fr_1.3fr]';

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

const rows = [
    {
        no: '01',
        accent: '#004CE5',
        who: ['换季收纳、租房搬家', '的家庭用户'],
        tag: '要真的不漏气',
        needPunch: '抽完能撑住，别三天回弹',
        needDetail: '买的是「省出一个柜子」，不是一张塑料袋。',
        ours: [
            '天猫真空收纳袋市占率连续多年第一',
            '牵头制定《真空压缩收纳袋》行业标准',
            '航天同款材料，抗穿刺达普通材料 4 倍以上',
        ],
        theirs: [
            { name: '白牌', text: '价格低，但漏气和退货问题反复出现' },
            { name: '国际', text: '收纳箱线更强，压缩袋一直做得不深' },
        ],
    },
    {
        no: '02',
        accent: '#3B82F6',
        who: ['宜家、沃尔玛这类', '全球零售客户'],
        tag: '要材料稳定可控',
        needPunch: '批次一致，供货不断',
        needDetail: '大批量上架，最怕不同批次的手感和性能不一样。',
        ours: [
            '宜家真空吸盘的指定专用材料',
            '沃尔玛、利德尔的战略供应商',
            '合作已从成品供应升级为材料供应',
        ],
        theirs: [
            { name: '代工', text: '能做成品，给不出材料层面的方案' },
            { name: '材料', text: '有材料，接不住零售端的量产节奏' },
        ],
    },
    {
        no: '03',
        accent: '#10B981',
        who: ['公安、应急救援等', '军警与安防用户'],
        tag: '要防护等级达标',
        needPunch: '认证要过，穿着得能干活',
        needDetail: '硬质防护板穿不住，穿戴率低就等于没有防护。',
        ours: [
            '防刺防割达国标、美标、欧标顶级水平',
            '杭州公安「警企学研用」试点单位',
            '与公安部第三研究所共同推进',
        ],
        theirs: [
            { name: '传统', text: '硬质厚重，实际穿戴率一直上不去' },
            { name: '进口', text: '性能够用，但成本和交期都受制于人' },
        ],
    },
    {
        no: '04',
        accent: '#F59E0B',
        who: ['机器人、新能源等', '工业与制造客户'],
        tag: '要材料配进产线',
        needPunch: '极端温度和反复弯折都要撑住',
        needDetail: '材料要能进产线，还要有稳定供应和可控成本。',
        ours: [
            '机器人防护纺织材料覆盖 −40℃ 至 380℃',
            '纳米粒子自主合成，单位成本降低 90% 以上',
            '仿生腱绳、电池包防护已在客户验证中',
        ],
        theirs: [
            { name: '纤维', text: '只提供原料，不做整体防护方案' },
            { name: '国外', text: '进口粒子每克 5 至 7 美元，成本压不下来' },
        ],
    },
];

const headers = ['谁会选', '他们要什么', '太力为什么对得上', '对手对不上什么'];

export default function Page_BrandWhySuning() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-4 pb-2.5 relative z-10 px-8">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none mb-2">
                    什么客户会选太力，而不去找传统防护品牌或纯材料商？
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    四类客户看的不是谁名气大，是谁能同时给出材料、认证和量产交付
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-3 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        {headers.map((h, i) => (
                            <div
                                key={h}
                                className={`px-5 py-3 flex items-center ${
                                    i < headers.length - 1 ? 'border-r border-white/10' : ''
                                } ${i === 2 ? 'bg-[#004CE5]/15' : ''}`}
                            >
                                <span
                                    className={`font-black tracking-widest text-[18px] ${
                                        i === 2 ? 'text-[#4B8BFF]' : 'text-zinc-400'
                                    }`}
                                >
                                    {h}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex-1 min-h-0 grid"
                        style={{ gridTemplateRows: `repeat(${rows.length}, minmax(0, 1fr))` }}
                    >
                        {rows.map((row) => (
                            <div
                                key={row.no}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-5 py-3 flex flex-col justify-center gap-1.5 border-r border-white/10 bg-black/40">
                                    <span
                                        className="self-start text-[15px] font-black tracking-widest px-2 py-0.5 rounded-md"
                                        style={{
                                            backgroundColor: `${row.accent}26`,
                                            color: row.accent,
                                        }}
                                    >
                                        {row.no}
                                    </span>
                                    <div className="text-[22px] font-black text-white leading-snug">
                                        {row.who.map((line) => (
                                            <div key={line} className="whitespace-nowrap">
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="text-[16px] font-bold leading-none whitespace-nowrap"
                                        style={{ color: row.accent }}
                                    >
                                        {row.tag}
                                    </div>
                                </div>

                                <div className="px-5 py-3 flex flex-col justify-center gap-1.5 border-r border-white/10">
                                    <div className="text-[22px] font-black text-white leading-snug whitespace-nowrap">
                                        {row.needPunch}
                                    </div>
                                    <p className="text-[18px] text-zinc-400 leading-snug">
                                        {keepEnd(row.needDetail)}
                                    </p>
                                </div>

                                <div className="px-5 py-3 flex flex-col justify-center gap-1.5 border-r border-white/10 bg-[#004CE5]/10">
                                    {row.ours.map((line) => (
                                        <div key={line} className="flex items-start gap-2">
                                            <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-[#4B8BFF] shrink-0" />
                                            <p className="text-[18px] font-semibold text-zinc-100 leading-snug">
                                                {keepEnd(line)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="px-5 py-3 flex flex-col justify-center gap-2">
                                    {row.theirs.map((item) => (
                                        <div key={item.name} className="flex items-start gap-2.5">
                                            <span className="shrink-0 w-[40px] text-[18px] font-black text-zinc-300 leading-snug">
                                                {item.name}
                                            </span>
                                            <p className="text-[18px] text-zinc-400 leading-snug">
                                                {keepEnd(item.text)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="shrink-0 pt-2 text-right text-zinc-500 text-[15px] leading-relaxed">
                    依据：太力科技官网与公开披露文件、公安及航天领域公开合作信息、券商行业研究报告
                </p>
            </div>
        </div>
    );
}
