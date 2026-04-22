import React from 'react';

export default function Page_DeliveryStrategy_Combo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">媒体矩阵分配</h1>
                <p className="text-[1.1rem] lg:text-[1.2rem] text-rose-400 font-medium tracking-wide">
                    根据营销链路与内容属性精细化分配矩阵资源
                </p>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col justify-center px-4 lg:px-12 py-2 pb-16 min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto h-full items-start pt-10">

                    {/* Item 1: 70% */}
                    <div className="flex flex-col group relative">
                        <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400" style={{ width: '70%', boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)' }} />
                        </div>
                        <div className="flex items-baseline mb-6">
                            <span className="text-[5rem] lg:text-[7.5rem] leading-none font-bold tracking-tighter text-white transition-colors group-hover:text-orange-100">70</span>
                            <span className="text-3xl lg:text-4xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                        </div>
                        <h3 className="text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-orange-500/50 transition-colors leading-snug">小众专业垂直媒体</h3>
                        <p className="text-[1.05rem] lg:text-[1.15rem] font-medium text-orange-300 mb-6 tracking-wide leading-relaxed">博禾医生、妙手医生、妈妈网、有来医生、买购网</p>
                        <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">深度种草与口碑渗透。</strong>通过专业视角的长图文或深度测评，建立品牌技术壁垒与专业形象，精准触达高意向核心用户，以高信度、高密度的干货内容强力影响最终决策。
                        </p>
                    </div>

                    {/* Item 2: 20% */}
                    <div className="flex flex-col group relative">
                        <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: '20%', boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)' }} />
                        </div>
                        <div className="flex items-baseline mb-6">
                            <span className="text-[5rem] lg:text-[7.5rem] leading-none font-bold tracking-tighter text-white transition-colors group-hover:text-blue-100">20</span>
                            <span className="text-3xl lg:text-4xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                        </div>
                        <h3 className="text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-blue-500/50 transition-colors leading-snug">主流媒体平台</h3>
                        <p className="text-[1.05rem] lg:text-[1.15rem] font-medium text-blue-300 mb-6 tracking-wide leading-relaxed">百度知道、今日头条、QQ News、淘宝网</p>
                        <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">话题势能放大与泛人群覆盖。</strong>聚焦核心卖点，利用可视化短视频与场景化图文笔记，打造矩阵式爆款话题，提升品牌全域声量，实现目标圈层的高效破圈与认知普及。
                        </p>
                    </div>

                    {/* Item 3: 10% */}
                    <div className="flex flex-col group relative">
                        <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '10%', boxShadow: '0 0 15px rgba(16, 185, 129, 0.8)' }} />
                        </div>
                        <div className="flex items-baseline mb-6">
                            <span className="text-[5rem] lg:text-[7.5rem] leading-none font-bold tracking-tighter text-white transition-colors group-hover:text-emerald-100">10</span>
                            <span className="text-3xl lg:text-4xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                        </div>
                        <h3 className="text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-emerald-500/50 transition-colors leading-snug">权威官方媒体</h3>
                        <p className="text-[1.05rem] lg:text-[1.15rem] font-medium text-emerald-300 mb-6 tracking-wide leading-relaxed">新京报、中国报告大厅等央媒，及头部商业白皮书</p>
                        <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">信任背书与公信力构建。</strong>以行业报告、高管宏观访谈、技术升级发布等公关属性内容为主，夯实品牌头部地位，为全链路的营销转化奠定坚实的信任基础。
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
