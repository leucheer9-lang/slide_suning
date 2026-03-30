import React from 'react';

export default function Page_SWOTAnalysisFotile() {
    const swotData = {
        S: [
            { id: 'S1', title: '跨代际的“主动制氮”保鲜科技底牌（高）', content: '搭载“主动气调”，从被动防御升级为构建微环境，具备极高技术壁垒。' },
            { id: 'S2', title: '降维打击的量化实测数据背书（高）', content: '首获TÜV认证，高达98.5%花青素留存率，重构冰洗功能评价标准。' },
            { id: 'S3', title: '纯粹技术口碑与细分AI心智统治力（高）', content: 'AI舆情0负面，细分高价值搜索词提及率67.9%，呈现技术统治地位。' },
            { id: 'S4', title: '优秀的物理空间嵌入设计基础（中）', content: '荣获iF设计金奖，成功解决全嵌难题，满足高端厨居基础美学要求。' },
        ],
        W: [
            { id: 'W1', title: '冰箱品类“资历尚浅”带来的认知摩擦（高）', content: '面临超高端定价时，作为赛道新人缺乏“老钱”品牌底蕴式溢价支撑。' },
            { id: 'W2', title: '全屋智能生态与品类横向广度的缺失（高）', content: '缺乏洗衣机等品类横向支撑，难以靠套系化总包分摊高昂价格感知。' },
            { id: 'W3', title: '泛流量入口与大众心智的严重断层（中/高）', content: '在“高端冰箱推荐”等大泛商业词条提及率偏低，舆论场先发劣势明显。' },
            { id: 'W4', title: '技术概念生僻导致市场教育成本过高（中）', content: '远洋气调等概念晦涩，若未转化为核心利益点易陷入孤芳自赏僵局。' },
        ],
        T: [
            { id: 'T1', title: '传统巨头对“行业评估标准”的强势绑架（高）', content: '传统竞品锁死物理外观与容量评估语境，若陷入此参数内卷将极其被动。' },
            { id: 'T2', title: '头部品牌的线下防守反击与物理封杀（高）', content: '传统巨头拥有深厚分销推力，极可能用平替降价绞杀其终端铺货空间。' },
            { id: 'T3', title: '消费者传统的“按件/按体积”比价思维（中）', content: '若未能建立“跨界替代”认知，极速与传统多门冰箱横向比价会产生价格抗拒。' },
        ],
        O: [
            { id: 'O1', title: '饮食精细化引发的品类升维风口（高）', content: '用户对“保鲜”升维至“细胞营养锁定”，与医疗级营养舱定位完美共振。' },
            { id: 'O2', title: '生成式AI带来决策路径弯道超车机遇（高）', content: '重度消费者极度依赖AI对比技术原理，利好方太凭核心技术数据破局。' },
            { id: 'O3', title: '高端全嵌市场的持续扩容与红利（中/高）', content: '随着高定整体厨房普及，高端深嵌市场的基本盘持续扩容，增量巨大。' },
        ]
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">


            {/* Header */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-4 sm:pt-6 shrink-0">
                <div className="flex items-center gap-3 pl-2">
                    <div className="w-1.5 h-8 sm:h-10 bg-rose-600 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.4)]" />
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-widest flex items-baseline">
                        SWOT<span className="text-2xl sm:text-3xl font-bold ml-3 text-white/70">方太冰箱分析</span>
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-16 pb-16 lg:pb-24 pt-2 flex items-center justify-center min-h-0">

                <div className="w-full max-w-[1500px] h-full relative">

                    {/* SVG Cross Lines */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 sm:gap-6 pt-0 pb-0">

                        {/* Top Left: Strengths */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-start items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-rose-400">优势</span>
                                    <span className="text-xl text-white/90">（Strengths）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-3 relative z-10 w-full">
                                {swotData.S.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-rose-400 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[0.9rem] lg:text-[1rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.85rem] lg:text-[0.9rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Right: Weaknesses */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-white/5 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-end items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-white/90">劣势</span>
                                    <span className="text-xl text-white/70">（Weaknesses）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-3 relative z-10 w-full">
                                {swotData.W.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-white/70 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[0.9rem] lg:text-[1rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.85rem] lg:text-[0.9rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Left: Threats */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-white/5 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-start items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-white/90">威胁</span>
                                    <span className="text-xl text-white/70">（Threats）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-3 relative z-10 w-full">
                                {swotData.T.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-white/70 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[0.9rem] lg:text-[1rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.85rem] lg:text-[0.9rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Right: Opportunities */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-end items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-2xl font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-rose-400">机遇</span>
                                    <span className="text-xl text-white/90">（Opportunities）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-3 relative z-10 w-full">
                                {swotData.O.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-rose-400 text-base font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[0.9rem] lg:text-[1rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.85rem] lg:text-[0.9rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Center Medal */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] z-20 flex items-center justify-center pointer-events-none drop-shadow-2xl">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-xl border-4 border-[#222] overflow-hidden">
                            {/* Colorful Segments matching reference */}
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-rose-600" />
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#555]" />
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#666]" />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-500" />
                        </div>
                        {/* Inner Ring Data Text */}
                        <div className="absolute inset-[15px] rounded-full bg-white flex items-center justify-center p-4">
                            <div className="grid grid-cols-2 grid-rows-2 w-full h-full text-center relative gap-1">
                                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/10 -translate-x-1/2" />
                                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 -translate-y-1/2" />

                                <div className="flex items-center justify-center text-4xl font-black text-rose-600 tracking-tighter">S</div>
                                <div className="flex items-center justify-center text-4xl font-black text-[#666] tracking-tighter">W</div>
                                <div className="flex items-center justify-center text-4xl font-black text-[#555] tracking-tighter">T</div>
                                <div className="flex items-center justify-center text-4xl font-black text-rose-600 tracking-tighter">O</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}} />
        </div>
    );
}
