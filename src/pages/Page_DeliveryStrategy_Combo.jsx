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
        sites: '东莞2233厂房网、1233厂房网、租天下、咚咚租、安居客、中原地产、顺企网（11467）',
        lead: '垂直深耕，抢竞品的高命中位。',
        body: '这批厂房与商办租赁垂直站被引用时几乎都在讲竞品：租天下 5 次引用被新桥东先进制造产业园 100% 命中，1233厂房网 60.0%、安居客 56.3%、东莞2233厂房网 52.6%、顺企网 50.6%；而创维创新谷在东莞2233厂房网、咚咚租、中原地产上全部为 0 次，安居客也只有 4.2%。用可租面积、租金区间、配套与落户政策的结构化内容持续供给，是拿下「宝安厂房怎么选」这类问答的基本盘。',
    },
    {
        pct: 20,
        bar: 'from-blue-600 to-blue-400',
        glow: 'rgba(59, 130, 246, 0.8)',
        hoverNum: 'group-hover:text-blue-100',
        hoverBorder: 'group-hover:border-blue-500/50',
        sitesColor: 'text-blue-300',
        title: '主流媒体平台',
        sites: '抖音、58同城、今日头条、网易、搜狐网、百度知道',
        lead: '跨模型铺量，补齐可见面。',
        body: '这几个站撑起了豆包侧的引用大盘：抖音 37 次是豆包独有的第一梯队信源，58同城 31 次、今日头条 20 次、网易 14 次。但新桥东在今日头条命中 72.7%、抖音 64.9%、58同城 56.3%，创维创新谷在抖音、今日头条、搜狐网、百度知道上均为 0 次，58同城仅 6.3%、网易 5.6%，铺量空间最大。',
    },
    {
        pct: 10,
        bar: 'from-emerald-600 to-emerald-400',
        glow: 'rgba(16, 185, 129, 0.8)',
        hoverNum: 'group-hover:text-emerald-100',
        hoverBorder: 'group-hover:border-emerald-500/50',
        sitesColor: 'text-emerald-300',
        title: '权威官方媒体',
        sites: '宝安区政府在线、深圳政府在线、宝安湾、深圳外商投资企业协会、人民网健康',
        lead: '名录与政策背书，定调可信度。',
        body: '政府门户与央媒站点是模型回答「宝安有哪些产业园」时的直接依据，也是引用体量最大的一档：宝安区政府在线 119 次、深圳政府在线 44 次、宝安湾 41 次。新桥东在这三站命中率为 67.2%、59.1%、46.3%，深圳外商投资企业协会 100%、人民网健康 87.5%；创维创新谷在宝安区政府在线仅 2.5%、深圳政府在线 2.3%、宝安湾 0 次。这类阵地不做铺量，靠政策解读、园区名录收录与官方活动露出定点进入。',
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
                    把 A / B / C 三组筛出的站点按媒体属性重新分配预算：垂直深耕为主、主流铺量为辅、权威背书定调（数据日期 2026-08-14）。
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
