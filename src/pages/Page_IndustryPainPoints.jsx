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

const cards = [
    {
        no: '01',
        pos: 'top',
        kicker: '「身份错位」',
        lines: ['AI 把太力答成', '塑料家居用品公司'],
        punch: '官网写纳米材料，百科和金融平台都写家居用品',
    },
    {
        no: '02',
        pos: 'top',
        kicker: '品牌名歧义',
        lines: ['「太力科技」被答成', '北京的工业软件公司'],
        punch: '同名主体、台湾同名商标、太龙药业都会混进来',
    },
    {
        no: '03',
        pos: 'bottom',
        kicker: '头部问题占位',
        lines: ['防护、纳米材料、机器人、', '航天，四张名单全缺席'],
        punch: '有真实履历，却进不了任何一份推荐名单',
    },
    {
        no: '04',
        pos: 'bottom',
        kicker: '官方口径自相矛盾',
        lines: ['专利数、上太空次数、', '防弹表述互相打架'],
        punch: '同一个页面写了两个专利数，AI 只会退回旧语料',
    },
];

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-10 py-8 lg:px-14 lg:py-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1560px] mx-auto flex flex-col h-full relative z-10">
                <div className="w-full shrink-0 pt-1 pb-6">
                    <h1 className="text-[36px] font-black text-white tracking-widest mb-4 text-center">
                        转型期品牌 GEO 难点解析
                    </h1>
                    <p className="text-zinc-400 text-[20px] lg:text-[22px] leading-[1.7] tracking-wide text-justify [text-justify:inter-ideograph]">
                        太力要对外讲的是纳米材料与安全防护，但公开语料里它只有一个身份——真空压缩袋第一名。客户真正在问的是
                        <strong className="text-[#004CE5]">
                            「防刺服哪家能过警标、机器人防护材料找谁、这家公司到底做什么」
                        </strong>
                        。从身份、名称、名单和口径四个角度看，太力在 GEO 里会先撞上这四件事：
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 flex-1 min-h-0">
                    {cards.map((card) => (
                        <div
                            key={card.no}
                            className="bg-[#0a0a0a] border border-white/30 rounded-[2rem] px-12 py-9 lg:px-14 lg:py-10 flex flex-col relative overflow-hidden shadow-2xl"
                        >
                            <div
                                className={`text-[100px] lg:text-[140px] font-['AlimamaShuHeiTi'] text-white/10 absolute pointer-events-none right-8 ${
                                    card.pos === 'top' ? '-top-2 lg:-top-6' : '-bottom-8 lg:-bottom-12'
                                }`}
                            >
                                {card.no}
                            </div>
                            {card.pos === 'top' ? <div className="w-12 h-1 bg-white mb-auto shrink-0"></div> : null}

                            <div className="relative z-10 pr-16 flex flex-col justify-center flex-1 min-h-0">
                                <h3 className="text-[28px] lg:text-[30px] font-bold text-white leading-[1.45] tracking-wide">
                                    <div>{card.kicker}</div>
                                    {card.lines.map((line) => (
                                        <div key={line}>{line}</div>
                                    ))}
                                </h3>
                                <p className="text-[20px] lg:text-[22px] text-zinc-400 leading-[1.55] tracking-wide mt-4 text-justify [text-justify:inter-ideograph]">
                                    {keepEnd(card.punch)}
                                </p>
                            </div>

                            {card.pos === 'bottom' ? <div className="w-12 h-1 bg-white mt-auto shrink-0"></div> : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
