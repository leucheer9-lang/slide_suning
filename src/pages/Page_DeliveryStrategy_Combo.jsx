import React from 'react';

export default function Page_DeliveryStrategy_Combo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">按权分发</h1>
                <p className="text-[1.1rem] lg:text-[1.2rem] text-rose-400 font-medium tracking-wide max-w-[1200px] text-center px-4 leading-relaxed">
                    杜绝单一平台依赖风险，我们将基于大模型引用分布的健康度要求，按照黄金比例进行全网矩阵式投放。根据前期锁定的平台引用率，按比例分配投放资源。
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
                        <h3 className="text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-orange-500/50 transition-colors leading-snug">共性高频与行业权威门户</h3>
                        <p className="text-[1.05rem] lg:text-[1.15rem] font-medium text-orange-300 mb-6 tracking-wide leading-relaxed">今日头条、新浪新闻、百度知道、快递鸟、咸宁新闻网</p>
                        <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">多平台共性收录与基本盘构建。</strong>通过共性高频网站和行业权威媒体进行全方位覆盖，对齐各大模型底层的基本信息，为品牌在 AI 检索中构建高可信度的基础语料，构筑 AI 抓取的基本盘。
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
                        <h3 className="text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-blue-500/50 transition-colors leading-snug">差异化场景与特异偏好引导</h3>
                        <p className="text-[1.05rem] lg:text-[1.15rem] font-medium text-blue-300 mb-6 tracking-wide leading-relaxed">列表网、QQ News、抖音、哔哩哔哩</p>
                        <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">差异化破圈与特异平台深耕。</strong>针对不同 AI 平台的特异性收录偏好，在列表网（DeepSeek）、QQ News（元宝）、抖音、B站等进行差异化内容布局，破除流量死角。
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
                        <h3 className="text-xl lg:text-2.5xl font-bold text-white mb-4 pt-5 border-t border-white/10 group-hover:border-emerald-500/50 transition-colors leading-snug">行业高频高命中竞争拦截</h3>
                        <p className="text-[1.05rem] lg:text-[1.15rem] font-medium text-emerald-300 mb-6 tracking-wide leading-relaxed">山东省邮政管理局、凤凰网、物流指闻、快递查询网、网经社</p>
                        <p className="text-[1.12rem] lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify">
                            <strong className="text-zinc-300 font-medium tracking-wide">核心竞品高命中拦截与公信力构建。</strong>聚焦行业头部竞品（顺丰）命中率 100% 的高频平台，进行高公信力内容定点覆盖，实现精准拦截与心智渗透。
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
