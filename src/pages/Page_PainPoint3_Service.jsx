import React from 'react';

const channels = [
    {
        tag: '中介房源页',
        title: '区位租金乱写',
        points: ['挂牌价从约 35 元写到 98 元，软文更高', '「距宝安中心 1 公里」与事实不符', '层高、车位、竣工年份互相打架'],
        example: '咚咚租楼盘简介仍写「临近南关高速、距宝安中心只需 1 公里」；同站挂牌既有 35 元，也有 75 元。雪花、甲岸的单常被拿来压价，配套却写不进同一张表。',
    },
    {
        tag: '招商软文',
        title: '政策口径被夸大',
        points: ['把「可申报」写成入园必到账', '税收返还、三年补贴、产业基金混为一谈', '企业按软文预期看房，落地后对不上'],
        example: '部分招商稿把省级园、桃花源身份直接写成「初创企业最高可获 3 年租金补贴，年补贴可达百万元」。',
    },
    {
        tag: '百科 / 点评',
        title: '身份被写成工厂',
        points: ['维基等条目仍称石岩园为「创维总工厂」', '写字楼网又只按甲级办公收录', '研产一体、产城配套在公开条目里几乎看不见'],
        example: '公开百科把创新谷写成创维集团总工厂；房源站则按写字楼出租，两套身份同时进入 AI 训练池。',
    },
    {
        tag: '片区旧印象',
        title: '交通认知停在通车前',
        points: ['石岩长期被写成偏远工业区、招人难', '13 号线应人石站 2025 年 12 月才开通', '旧帖比新通车新闻更容易被反复抓取'],
        example: '通车前「石岩没地铁、去南山要一小时」的讨论仍大量在线；地铁已通，答案却经常还停在旧口径。',
    },
];

const COLS = 'grid-cols-[72px_320px_minmax(0,1.2fr)_minmax(0,1fr)]';

export default function Page_PainPoint3_Service() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-6 py-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1760px] mx-auto flex flex-col h-full min-h-0 relative z-10">
                <div className="mb-2.5 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-1.5 mb-2">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">04</span>
                    </div>
                    <h1 className="text-[32px] lg:text-[36px] font-black text-white tracking-widest mb-1.5 leading-tight">
                        公开信息依赖第三方，错误事实与刻板印象易被 AI 放大
                    </h1>
                    <p className="text-zinc-400 text-[20px] leading-snug tracking-wide">
                        创新谷在公开网上出现最多的地方，是中介站和转载稿，不是业主官网。雪花科创城有华润置地招商矩阵和总部南迁报道托着口径；创新谷的租金、区位、身份、地铁一旦写错，就会被 AI 无差别抓取，放大成「石岩偏远、创新谷就是工厂」。
                    </p>
                </div>

                <div className={`shrink-0 mb-2.5 grid ${COLS} items-center border border-[#004CE5]/35 bg-[#004CE5]/[0.08] rounded-2xl overflow-hidden`}>
                    <div className="col-span-2 px-5 py-2.5 text-center text-white text-[20px] font-bold tracking-wide">
                        错误从哪来
                    </div>
                    <div className="px-5 py-2.5 text-center text-white text-[20px] font-bold tracking-wide border-l border-[#004CE5]/25">
                        第三方错误口径
                    </div>
                    <div className="px-5 py-2.5 text-center text-white text-[20px] font-bold tracking-wide border-l border-[#004CE5]/25">
                        中介页 / 软文 / 旧帖
                    </div>
                </div>

                <div className="flex-1 min-h-0 grid grid-rows-4 gap-2.5">
                    {channels.map((card, idx) => (
                        <div
                            key={card.tag}
                            className={`min-h-0 grid ${COLS} bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden`}
                        >
                            <div className="bg-[#004CE5]/10 border-r border-white/10 flex items-center justify-center">
                                <span className="text-[#004CE5] font-black text-[32px] tracking-wider leading-none">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="px-4 flex flex-col justify-center border-r border-white/10 min-w-0">
                                <div className="text-[#4B8BFF] text-[16px] font-bold tracking-widest mb-1">
                                    {card.tag}
                                </div>
                                <div className="text-white text-[28px] font-black tracking-wide leading-tight whitespace-nowrap">
                                    {card.title}
                                </div>
                            </div>

                            <div className="min-w-0 px-5 flex flex-col justify-center gap-1.5 border-r border-white/10">
                                {card.points.map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-start gap-2.5 text-zinc-200 text-[20px] leading-[1.45] tracking-normal"
                                    >
                                        <span className="mt-[0.55em] w-2 h-2 rounded-full bg-[#004CE5] shrink-0" />
                                        <span className="min-w-0">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="min-w-0 bg-[#004CE5]/[0.06] px-5 flex flex-col justify-center gap-1">
                                <div className="text-[#4B8BFF] text-[16px] font-bold tracking-widest">
                                    公开出处
                                </div>
                                <p className="text-zinc-100 text-[20px] font-medium leading-[1.45] tracking-normal">
                                    {card.example}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
