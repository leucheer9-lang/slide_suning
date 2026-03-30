import React from 'react';

export default function Page_GeoReportAnalysis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-zinc-900 pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Container mapping the exactly 1792px navigation width */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-center pt-2 pb-6 min-h-0">
                <div className="w-[1792px] max-w-[95%] mx-auto h-full bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
                    
                    {/* Header with dividing line */}
                    <div className="w-full pt-5 pb-3 flex flex-col items-center justify-center border-b border-zinc-200 shrink-0">
                        <h1 className="text-[1.6rem] lg:text-[2rem] font-bold text-black tracking-widest text-center">
                            方太冰箱 GEO近期监测深度诊断与推演报告
                        </h1>
                    </div>

                    {/* Main Content: 3 Columns without scrolling */}
                    <div className="flex-1 w-full p-2 lg:px-8 lg:py-2 min-h-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14 w-full h-full">
                            
                            {/* Column 1: Abstract & Overview */}
                            <div className="flex flex-col gap-2">
                                {/* Section 1 */}
                                <div className="mt-2">
                                    <h2 className="text-[1.4rem] font-bold text-black mb-1.5">一、 核心摘要</h2>
                                    <p className="text-[1.25rem] leading-[1.5] text-black mb-1.5 text-justify">
                                        综合各项数据指标，方太冰箱在目前的AI大模型认知中呈现出“极度偏科的技术特长生”画像。
                                    </p>
                                    <p className="text-[1.25rem] leading-[1.5] text-black mb-1.5 text-justify">
                                        品牌凭借差异化的<strong className="text-[#004CE5]">“原鲜/远洋级氮气保鲜”</strong>技术，在特定细分维度的提问中打穿了AI的认知壁垒，具备不可替代性；但受限于跨界新入局的身份，方太在“大众通用需求”、“综合排行榜”以及“精准高预算选购”等核心导购场景中面临大面积失语。
                                    </p>
                                    <blockquote className="border-l-[4px] border-[#004CE5] pl-3 py-1 mt-1 bg-zinc-50">
                                        <p className="text-[1.25rem] leading-[1.5] text-zinc-800 text-justify">
                                            目前，AI大模型对方太的定调非常客观且犀利：“技术极其硬核的高端玩家，但在冰箱领域资历尚浅、性价比与传统巨头相比不占优”。
                                        </p>
                                    </blockquote>
                                </div>

                                {/* Section 2 */}
                                <div className="mt-1">
                                    <h2 className="text-[1.4rem] font-bold text-black mt-2 mb-1.5">二、整体大盘画像：极端分化的“偏科型高端新锐”</h2>
                                    <p className="text-[1.25rem] leading-[1.5] text-black mb-1.5 text-justify">
                                        基于近7天（截至3月27日）主流AI大模型及生成式搜索平台的监测数据，方太冰箱在AI生态中的表现呈现出极其显著的“非对称分布”。
                                    </p>
                                    <p className="text-[1.25rem] leading-[1.5] text-black mb-1.5 text-justify">
                                        一方面，方太整体提及率仅为 <strong>13.8%</strong>（行业影响力排名第14位），相较于卡萨帝（70.3%）、海尔（51.5%）等传统白电寡头，基础声量存在明显断层。
                                    </p>
                                    <p className="text-[1.25rem] leading-[1.5] text-black text-justify">
                                        但另一方面，在方太具备竞争优势的特定提问下，其 Top 1（首位推荐）提及率却能逆势拉升至 <strong className="text-[#004CE5]">8.8%</strong>（超越部分传统品牌，容声（4.6%））。
                                    </p>
                                </div>
                            </div>

                            {/* Column 2: Keyword Insights */}
                            <div className="flex flex-col gap-2">
                                <div className="mt-2">
                                    <h2 className="text-[1.4rem] font-bold text-black mb-1.5">三、搜索词洞察：谁在贡献流量，谁在导致漏斗流失？</h2>
                                    <p className="text-[1.25rem] leading-[1.5] text-black mb-1.5 text-justify">
                                        通过对9个核心监测词条的下钻分析，我们可以清晰看到AI是如何给方太“划定能力边界”的。品牌目前的流量分布呈现出明显的断层：
                                    </p>
                                    
                                    <div className="mb-2.5 mt-2">
                                        <p className="text-[1.25rem] font-bold text-black mb-1">1. 绝对护城河（技术与细分场景标签）：</p>
                                        <ul className="list-disc pl-5 space-y-1 text-[1.25rem] leading-[1.5] text-black mb-1">
                                            <li><strong>原鲜冰箱推荐：</strong>提及率高达 67.9%，位次高居 NO. 1.9</li>
                                            <li><strong>保鲜效果好的冰箱推荐：</strong>提及率21.4%，位列4.8</li>
                                            <li><strong>嵌入式冰箱品牌推荐：</strong>提及率14.3%，位列6.6</li>
                                        </ul>
                                        <blockquote className="border-l-[4px] border-[#004CE5] pl-3 py-1">
                                            <p className="text-[1.25rem] leading-[1.5] text-zinc-800 text-justify">
                                                <strong>洞察：</strong>方太的“远洋级氮气保鲜”和“平嵌”概念在底层PR铺设上非常成功。大模型已经深度学习并认可了这一硬实力，将“原鲜”与方太进行了深度绑定。
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-[1.25rem] font-bold text-black mb-1">2. 致命的转化盲区（预算与通用导购标签）：</p>
                                        <ul className="list-disc pl-5 space-y-1 text-[1.25rem] leading-[1.5] text-black mb-1">
                                            <li><strong>2w预算冰箱品牌推荐：</strong>提及率 0.0%</li>
                                            <li><strong>冰箱排行榜前十 / 家用冰箱推荐：</strong>提及率 0.0%</li>
                                            <li><strong>高端冰箱品牌推荐：</strong>提及率仅 7.1%（且排在第7.0位）</li>
                                        </ul>
                                        <blockquote className="border-l-[4px] border-[#004CE5] pl-3 py-1 mt-1.5">
                                            <p className="text-[1.25rem] leading-[1.5] text-zinc-800 text-justify">
                                                <strong>洞察（核心痛点）：</strong>这是本组数据中最危险的漏斗断层。AI的认知语料库显示，方太主攻2万-4万元的高端赛道。然而，当目标受众真正拿着“2万预算”或询问“高端排行榜”时，AI却完美避开了方太。产品的高端定价/定位与AI视角下的“导购推荐逻辑”发生了严重脱节。
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Attribution Diagnosis */}
                            <div className="flex flex-col gap-2">
                                <div className="mt-2">
                                    <h2 className="text-[1.4rem] font-bold text-black mb-1.5">四、 归因诊断：为何在主流榜单中“查无此人”？</h2>
                                    <p className="text-[1.25rem] leading-[1.5] text-black mb-3 text-justify">
                                        AI大模型的回答机制是检索增强生成（RAG），即依赖全网优质内容库进行归纳。溯源数据直接揭示了方太在通用词条下提及率为0的根本原因：
                                    </p>
                                    
                                    <div className="space-y-3 mt-2">
                                        <div>
                                            <p className="text-[1.25rem] font-bold text-black mb-1">1. 高权重引源平台依赖：</p>
                                            <p className="text-[1.25rem] leading-[1.5] text-black text-justify pl-1">
                                                驱动AI生成冰箱回答的核心知识源依次为：抖音 (10.2%)、搜狐网 (9.9%)、新浪新闻 (8.5%)、今日头条 (7.2%)、什么值得买 (6.5%)。
                                            </p>
                                        </div>

                                        <div className="mt-1">
                                            <p className="text-[1.25rem] font-bold text-black mb-1">2. 致命的底层语料缺席：</p>
                                            <p className="text-[1.25rem] leading-[1.5] text-black text-justify pl-1">
                                                在系统抓取到的、被AI引用次数最高的Top 10文章（如《十大公认最好冰箱品牌》、《2026年冰箱选购指南》等）中，“目标产品是否提及”一栏全线飘红，全部为<strong>“否”</strong>。
                                            </p>
                                        </div>

                                        <blockquote className="border-l-[4px] border-[#004CE5] pl-3 py-2 mt-2">
                                            <p className="text-[1.25rem] leading-[1.5] text-zinc-800 text-justify">
                                                <strong>洞察：</strong>传统巨头在各大门户和社区沉淀了海量的“年度盘点”、“横评榜单”公关资产。方太由于在这些源头语料中处于真空状态，AI在遇到泛人群提问时遭遇了“无米之炊”，自然无法在排行榜或通用导购中生成方太的信息。
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
