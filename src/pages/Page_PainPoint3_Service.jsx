import React from 'react';

const channels = [
    {
        tag: '导购榜单',
        title: '身份锁在旧主体',
        points: ['榜单挂的仍是「太力家庭用品」旧公司名', '介绍语一律写「塑料家庭用品企业」', '同一批站点在防护品类里不收录太力'],
        example: 'CNPP、买购、中国品牌网把太力排在真空压缩袋第一，但主体写的是已废弃的中山市太力家庭用品制造有限公司。',
    },
    {
        tag: '百科词条',
        title: '主体词条是空壳',
        points: ['「广东太力科技集团」词条几乎只有经营范围', '旧主体词条更完整，定义却是塑料企业', '索引快照与实际页面内容不一致'],
        example: '搜索快照里有航天、专利、上市信息，实际抓取到的页面只剩经营范围和一条荣誉——两次抓取会得到两个答案。',
    },
    {
        tag: '旧站与旧品牌名',
        title: '旧语料还在供货',
        points: ['tailigo.com 旧站仍在线，关键词全是压缩袋、收纳袋', '英文站内容停留在多年前的家居收纳叙事', '零售端一律用「太力家居」，与「太力科技」不互通'],
        example: '新官网讲的是纳米材料与安全防护，旧站和英文站却仍在输出收纳品牌口径。AI 抓到哪一个，都会当成官方说法。',
    },
    {
        tag: '行业分类',
        title: '被归进轻工制造',
        points: ['同花顺申万分类：轻工制造—家居用品', '工商库归入电气机械和器材制造业', '金融数据平台正是 AI 的高频引用源'],
        example: '任何按「新材料」「航天」「机器人产业链」筛选出来的名单，从数据源头就不会包含太力。',
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
                        公开信息依赖第三方，过时口径持续被 AI 放大
                    </h1>
                    <p className="text-zinc-400 text-[20px] leading-snug tracking-wide text-justify [text-justify:inter-ideograph]">
                        太力在公开网上出现最多的地方，是导购榜单、旧百科和第三方数据库，不是自己的官网。官网目前没有技术白皮书，也没有产品参数页，新闻列表页甚至打不开——技术能力讲得再清楚，也没有一个可被引用的落点。结果是：最容易被 AI 抓取的那批内容，恰好全是过时定位。
                    </p>
                </div>

                <div className={`shrink-0 mb-2.5 grid ${COLS} items-center border border-[#004CE5]/35 bg-[#004CE5]/[0.08] rounded-2xl overflow-hidden`}>
                    <div className="col-span-2 px-5 py-2.5 text-center text-white text-[20px] font-bold tracking-wide">
                        错误从哪来
                    </div>
                    <div className="px-5 py-2.5 text-center text-white text-[20px] font-bold tracking-wide border-l border-[#004CE5]/25">
                        具体表现
                    </div>
                    <div className="px-5 py-2.5 text-center text-white text-[20px] font-bold tracking-wide border-l border-[#004CE5]/25">
                        公开出处
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

                            <div className="px-6 flex flex-col justify-center border-r border-white/10 min-w-0">
                                <div className="text-[#4B8BFF] text-[16px] font-bold tracking-widest mb-1">
                                    {card.tag}
                                </div>
                                <div className="text-white text-[28px] font-black tracking-wide leading-tight whitespace-nowrap">
                                    {card.title}
                                </div>
                            </div>

                            <div className="min-w-0 px-6 flex flex-col justify-center gap-1.5 border-r border-white/10">
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

                            <div className="min-w-0 bg-[#004CE5]/[0.06] px-6 flex flex-col justify-center gap-1">
                                <div className="text-[#4B8BFF] text-[16px] font-bold tracking-widest">
                                    实际例子
                                </div>
                                <p className="text-zinc-100 text-[20px] font-medium leading-[1.45] tracking-normal text-justify [text-justify:inter-ideograph]">
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
