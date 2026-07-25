import React from 'react';

const METRICS = [
    {
        name: '提及率',
        def: '在测试的词条中，AI 回复包含「苏宁易购」的概率。',
        data: (
            <>
                <span className="text-blue-400 font-bold">47%</span>
                （家电购买场景有覆盖，但整体仍明显低于京东、天猫）
            </>
        ),
    },
    {
        name: '平均提及位次',
        def: '品牌被提及时，在 AI 生成文本中出现的排位，越靠前权重越高。',
        data: (
            <>
                <span className="text-blue-400 font-bold">NO. 5.1</span>
                （位次偏后，通常排在京东、天猫之后，接近陪跑位）
            </>
        ),
    },
    {
        name: '行业影响力排名',
        def: '在 AI 生态中各品牌的综合排名。排名越高，说明 AI 认可度越高。',
        data: (
            <>
                <span className="text-blue-400 font-bold">NO.3</span>
                （榜上第三，但影响力分 51.8，与京东 94.9、天猫 77.8 差距明显）
            </>
        ),
    },
    {
        name: 'Top 引用来源',
        def: 'AI 生成当前结果时，最底层的数据抓取来源平台。',
        data: '前三：今日头条（12.9%）、新浪新闻（8.3%）、抖音（6.9%）。',
    },
];

const FEATURES = [
    {
        num: '01',
        title: '整体提及率居中，但平台间认知严重不均衡。',
        detail:
            '苏宁易购整体提及率 47%。元宝端达 80%，豆包 52%，而 DeepSeek 仅 30%、通义千问仅 26%。同样家电购买提问，不同大模型对苏宁的「默认可见度」差出近 3 倍。',
    },
    {
        num: '02',
        title: '线下与配送场景有优势，3C / 送装场景仍失语。',
        detail:
            '「线上买线下提货」提及率 100%（位次 NO.2）、「线下看实物」「配送快」等词条表现突出；但「送装一体」、手机/电脑选购、以旧换新、国补等 8 个词条提及率均为 0%。AI 尚未把苏宁与全品类 3C 决策强绑定。',
    },
    {
        num: '03',
        title: '与竞品在「首推权」上存在断崖式差距。',
        detail:
            '京东提及率 93.5%、天猫 77%，并主导首推；京东 Top1 首推率高达 81.5%。苏宁平均位次仅 NO.5.1，Top1 首推率仅 0.5%，多数对话中只作为陪跑选项出现。',
    },
];

function Page_GeoReportDashboard2() {
    // 苏宁易购①（project_id 377）· 2026-07-25～2026-07-25 · src/data/geoReport.json
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-14 pt-2 lg:pt-3 pb-3 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full min-h-0 relative z-10 gap-3">
                {/* Header */}
                <div className="text-center shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-tight">
                        核心指标定义与表现概览
                    </h1>
                </div>

                {/* Main: two columns */}
                <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
                    {/* Left: metrics */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl px-5 py-4 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0">
                            <h3 className="text-[22px] lg:text-[26px] font-bold text-white mb-3 shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                关键数据指标定义与表现
                            </h3>

                            {/* Header row */}
                            <div className="grid grid-cols-[22%_39%_39%] rounded-t-xl border border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                                <div className="py-2 px-3 text-[16px] lg:text-[18px] font-semibold text-zinc-200">关键指标</div>
                                <div className="py-2 px-3 text-[16px] lg:text-[18px] font-semibold text-zinc-200">定义</div>
                                <div className="py-2 px-3 text-[16px] lg:text-[18px] font-semibold text-zinc-200">表现说明</div>
                            </div>

                            {/* Rows fill remaining height — no clip */}
                            <div className="flex-1 flex flex-col min-h-0 rounded-b-xl border border-t-0 border-[#004CE5]/20 bg-[#020202]/60">
                                {METRICS.map((row, i) => (
                                    <div
                                        key={row.name}
                                        className={`flex-1 grid grid-cols-[22%_39%_39%] min-h-0 items-center ${
                                            i < METRICS.length - 1 ? 'border-b border-white/10' : ''
                                        }`}
                                    >
                                        <div className="py-1.5 px-3 text-[20px] font-bold text-white leading-snug">
                                            {row.name}
                                        </div>
                                        <div className="py-1.5 px-3 text-[20px] text-zinc-300 leading-snug">
                                            {row.def}
                                        </div>
                                        <div className="py-1.5 px-3 text-[20px] text-zinc-100 leading-snug">
                                            {row.data}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: features */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-2.5">
                            <h3 className="text-[20px] lg:text-[24px] font-bold text-white shrink-0 flex items-start gap-2 leading-snug">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)] mt-1.5 shrink-0" />
                                结合本次数据，苏宁易购在 AI 问答里的表现呈现以下特征：
                            </h3>

                            <div className="flex-1 flex flex-col gap-2.5 min-h-0">
                                {FEATURES.map((f) => (
                                    <div
                                        key={f.num}
                                        className="flex-1 min-h-0 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl px-3 py-2.5 flex gap-3 transition-colors duration-300 items-center"
                                    >
                                        <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none shrink-0 leading-none">
                                            {f.num}
                                        </div>
                                        <div className="min-w-0 flex flex-col justify-center gap-0.5">
                                            <h4 className="text-[22px] lg:text-[26px] font-bold text-white leading-snug">
                                                {f.title}
                                            </h4>
                                            <p className="text-[20px] text-zinc-300 leading-snug text-justify">
                                                {f.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: action */}
                <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl px-5 py-3.5 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0">
                    <h3 className="text-[24px] lg:text-[28px] font-bold text-white mb-1.5 leading-tight">
                        核心行动建议
                    </h3>
                    <p className="font-bold text-white mb-1 text-[20px] lg:text-[24px] leading-snug">
                        急需进行系统化的 GEO 优化。
                    </p>
                    <p className="text-[20px] text-zinc-300 leading-snug text-justify">
                        当前 AI 对苏宁易购在「线下看实物 / 线上买线下提货 / 配送」等全渠道场景已有初步认知，但在 3C 选购、送装一体与首推场景中权重严重不足。必须立即干预并喂养高质量品牌语料，重塑苏宁「家电 3C 全渠道零售」「送装一体」「国补与以旧换新」等决策标签，从而在 AI 搜索与问答截流中建立正确品牌认知并冲击首推权。
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page_GeoReportDashboard2;
