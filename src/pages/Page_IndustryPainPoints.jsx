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
        kicker: '「品牌隐身」',
        lines: ['园区在 AI 答案中', '被创维家电词淹没'],
        punch: '搜「创维」先出电视，搜园区却很难单独点到创新谷',
    },
    {
        no: '02',
        pos: 'top',
        kicker: '选址强比价',
        lines: ['同区租金同一梯度，', 'AI 只拿单价做答案'],
        punch: '跟雪花、甲岸同一价格带，中介页只剩面积和单价',
    },
    {
        no: '03',
        pos: 'bottom',
        kicker: '头部园区占位',
        lines: ['「宝安高端产业园」推荐', '被雪花科创城占满'],
        punch: '问宝安高端园 / 工业上楼，答案先落到尖岗山',
    },
    {
        no: '04',
        pos: 'bottom',
        kicker: '公开信息依赖第三方',
        lines: ['错误事实与刻板印象', '易被 AI 放大'],
        punch: '工厂身份、没地铁、距宝安中心一公里，都会进训练池',
    },
];

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-10 py-8 lg:px-14 lg:py-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1560px] mx-auto flex flex-col h-full relative z-10">
                <div className="w-full shrink-0 pt-1 pb-6">
                    <h1 className="text-[36px] font-black text-white tracking-widest mb-4 text-center">
                        主题产业园 GEO 难点解析
                    </h1>
                    <p className="text-zinc-400 text-[20px] lg:text-[22px] leading-[1.7] tracking-wide text-justify [text-justify:inter-ideograph]">
                        创维创新谷面向市场招租的是产业空间，不是家电。真正抢同一批客的，是宝安区内的雪花科创城和甲岸美生智谷。企业问的是
                        <strong className="text-[#004CE5]">
                            「宝安高端园去哪、能不能做中试、跟哪条链、租金和政策怎么算」
                        </strong>
                        。从同区比价和主题园特性出发，创新谷在 GEO 里会先撞上这四件事：
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
