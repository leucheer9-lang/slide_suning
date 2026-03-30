import React from 'react';

export default function Page_Brands() {
    const brandsData = [
        {
            category: "全球领导者",
            list: [
                { rank: "1", name: "海尔（Haier）", dynamic: "全球第一（约20%+全球份额）", advantage: "【全球白电领导者】覆盖全球市场，产品线从入门到高端齐全，智慧家电生态完善，渠道与制造规模优势明显。" },
                { rank: "2", name: "三星（Samsung）", dynamic: "全球高端份额领先", advantage: "【智能冰箱领导者】主打 AI 家电与智能屏幕冰箱，SmartThings 生态连接能力强，在高端市场影响力突出。" },
                { rank: "3", name: "LG", dynamic: "全球高端技术品牌", advantage: "【变频压缩机技术领先】Linear Inverter 技术以节能和低噪音著称，高端设计与可靠性强。" },
                { rank: "4", name: "博世 / 西门子（BSH）", dynamic: "欧洲高端市场领先", advantage: "【德系高端家电】嵌入式厨房生态完善，制造工艺与品质口碑强，高端家庭用户占比高。" },
                { rank: "5", name: "惠而浦（Whirlpool）", dynamic: "北美市场龙头", advantage: "【北美传统家电巨头】产品耐用性强，渠道与品牌历史优势明显。" }
            ]
        },
        {
            category: "中国巨头",
            list: [
                { rank: "1", name: "海尔", dynamic: "中国市场长期第一", advantage: "【高端与智能化双线布局】卡萨帝高端品牌带动高端市场，智慧家庭生态持续扩张。" },
                { rank: "2", name: "美的（Midea）", dynamic: "中国市场第二", advantage: "【制造与供应链优势】规模化制造与成本控制能力强，产品覆盖全价位市场。" },
                { rank: "3", name: "容声（Ronshen）", dynamic: "中国老牌冰箱品牌", advantage: "【制冷技术口碑强】长期深耕冰箱领域，在节能与保鲜技术上积累深厚。" },
                { rank: "4", name: "美菱（Meiling）", dynamic: "国内传统品牌", advantage: "【性价比优势】主打稳定制冷技术与大众价格区间，在下沉市场占有率高。" },
                { rank: "5", name: "TCL冰箱", dynamic: "新晋综合家电品牌", advantage: "【渠道扩张能力强】依托电视品牌渠道和海外市场快速扩张。" }
            ]
        },
        {
            category: "“新势力”",
            list: [
                { rank: "1", name: "米家（MIJIA）", dynamic: "线上增长最快", advantage: "【互联网家电代表】高性价比与智能生态连接能力强，年轻消费群体接受度高。" },
                { rank: "2", name: "云米（VIOMI）", dynamic: "智能家电新品牌", advantage: "【IoT智能家电】主打全屋智能家电系统，与互联网平台生态结合。" },
                { rank: "3", name: "COLMO", dynamic: "高端 AI 家电", advantage: "【美的高端品牌】主打 AI 智能控制与高端设计，定位高端智能厨房。" },
                { rank: "4", name: "奥马（Homa）", dynamic: "全球ODM龙头", advantage: "【出口制造优势】长期为国际品牌代工，在欧洲市场销量较大。" },
                { rank: "5", name: "康佳（Konka）", dynamic: "综合家电品牌", advantage: "【价格与渠道优势】在三四线城市及线上渠道具有较高渗透率。" }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-6 min-h-0 container mx-auto mt-2 overflow-hidden">
                {/* Centered Title */}
                <h1 className="text-3xl sm:text-[2.2rem] font-bold text-white tracking-widest text-center mb-5 font-['AlimamaShuHeiTi'] shrink-0">
                    冰箱的主要品牌
                </h1>

                {/* Table Container */}
                <div className="w-full max-w-[1600px] flex-1 flex flex-col bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] overflow-hidden">
                    {/* Table Body */}
                    <div className="w-full h-full flex flex-col z-0">
                        {brandsData.map((tier, tIdx) => (
                            <div key={tIdx} className={`flex w-full flex-1 ${tIdx !== brandsData.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                                {/* Merged First Column (Category) */}
                                <div className="w-[160px] xl:w-[180px] shrink-0 flex items-center justify-center px-4 border-r border-white/5 bg-white/[0.015]">
                                    <div className="font-bold text-blue-300 tracking-widest text-[1.15rem] leading-snug text-center">{tier.category}</div>
                                </div>
                                
                                {/* Right Side: The 5 Brand Rows */}
                                <div className="flex-1 flex flex-col">
                                    {tier.list.map((brand, bIdx) => (
                                        <div key={bIdx} className={`grid grid-cols-[200px_1fr_1.6fr] xl:grid-cols-[240px_1fr_1.8fr] group ${bIdx !== tier.list.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.04] transition-colors w-full flex-1`}>
                                            <div className="py-2 px-3 sm:px-5 flex items-center text-white/90 font-bold text-[0.95rem] lg:text-[1.05rem]">
                                                <span className="text-[#004CE5] mr-2">{brand.rank}.</span> {brand.name}
                                            </div>
                                            <div className="py-2 px-3 sm:px-5 border-l border-white/5 text-zinc-300 leading-snug font-medium flex items-center text-[0.9rem] lg:text-[0.95rem]">
                                                {brand.dynamic}
                                            </div>
                                            <div className="py-2 px-3 sm:px-5 border-l border-white/5 text-blue-100/90 leading-snug flex items-center text-[0.85rem] lg:text-[0.9rem] pr-6">
                                                <div>
                                                    {brand.advantage.split(/(【.*?】)/).map((segment, index) => {
                                                        if (segment.startsWith('【') && segment.endsWith('】')) {
                                                            return <span key={index} className="text-[#004CE5] font-bold">{segment}</span>;
                                                        }
                                                        return segment;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
