import React from 'react';

const TIERS = [
    {
        pct: 70,
        bar: 'from-orange-600 to-orange-400',
        glow: 'rgba(249, 115, 22, 0.8)',
        hoverNum: 'group-hover:text-orange-100',
        hoverBorder: 'group-hover:border-orange-500/50',
        sitesColor: 'text-orange-300',
        title: '小众专业垂直媒体',
        sites: '快递鸟、物流指闻、快递查询网、网经社、列表网',
        lead: '垂直深耕与行业语料沉淀。',
        body: '把主要预算投向快递/物流垂直站与专业问答池，用场景化、可核验的行业内容持续供给大模型，夯实「寄什么、选哪家」类问题的引用基本盘。',
    },
    {
        pct: 20,
        bar: 'from-blue-600 to-blue-400',
        glow: 'rgba(59, 130, 246, 0.8)',
        hoverNum: 'group-hover:text-blue-100',
        hoverBorder: 'group-hover:border-blue-500/50',
        sitesColor: 'text-blue-300',
        title: '主流媒体平台',
        sites: '今日头条、新浪新闻、QQ News、抖音、咸宁新闻网',
        lead: '主流曝光与跨模型铺量。',
        body: '在综合资讯与内容分发平台做矩阵式覆盖，对齐头条、新闻门户与短视频/社区类信源，扩大品牌在多模型检索中的可见面，避免只押单一垂直池。',
    },
    {
        pct: 10,
        bar: 'from-emerald-600 to-emerald-400',
        glow: 'rgba(16, 185, 129, 0.8)',
        hoverNum: 'group-hover:text-emerald-100',
        hoverBorder: 'group-hover:border-emerald-500/50',
        sitesColor: 'text-emerald-300',
        title: '权威官方媒体',
        sites: '山东省邮政管理局、凤凰网',
        lead: '权威背书与公信力定调。',
        body: '少量高权重官媒/权威门户定点投放，用于关键节点背书与合规表述校准，抬升整体信源可信度，并为竞品高命中阵地做对冲覆盖。',
    },
];

export default function Page_DeliveryStrategy_Combo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">按权分发</h1>
                <p className="text-[1.1rem] lg:text-[1.2rem] text-rose-400 font-medium tracking-wide max-w-[1200px] text-center px-4 leading-relaxed">
                    杜绝单一平台依赖风险，按媒体属性黄金比例全网矩阵投放：垂直深耕为主、主流铺量为辅、权威背书定调。
                </p>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col justify-center px-4 lg:px-12 py-2 pb-16 min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto h-full items-start pt-10">
                    {TIERS.map((t) => (
                        <div key={t.pct} className="flex flex-col group relative">
                            <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                                <div
                                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${t.bar}`}
                                    style={{ width: `${t.pct}%`, boxShadow: `0 0 15px ${t.glow}` }}
                                />
                            </div>
                            <div className="flex items-baseline mb-6">
                                <span
                                    className={`text-[5rem] lg:text-[7.5rem] leading-none font-bold tracking-tighter text-white transition-colors ${t.hoverNum}`}
                                >
                                    {t.pct}
                                </span>
                                <span className="text-3xl lg:text-4xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                            </div>
                            <h3
                                className={`text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 ${t.hoverBorder} transition-colors leading-snug`}
                            >
                                {t.title}
                            </h3>
                            <p
                                className={`text-[1.05rem] lg:text-[1.15rem] font-medium ${t.sitesColor} mb-6 tracking-wide leading-relaxed`}
                            >
                                {t.sites}
                            </p>
                            <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                                <strong className="text-zinc-300 font-medium tracking-wide">{t.lead}</strong>
                                {t.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
