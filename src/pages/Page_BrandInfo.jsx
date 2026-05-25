import React from 'react';

export default function Page_BrandInfo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 lg:pt-6 pb-2 lg:pb-3 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">品牌基础信息</h1>
            </div>

            <div className="flex-1 w-full max-w-[1500px] mx-auto px-8 lg:px-12 pb-6 relative z-10 flex flex-col justify-start gap-4 lg:gap-6 min-h-0">

                {/* 核心数据 Metrics */}
                <div className="grid grid-cols-4 gap-5 lg:gap-6 w-full">
                    {[
                        { label: '成立时间', value: '30+年', sub: '' },
                        { label: '自动化生产线', value: '50+', sub: '条' },
                        { label: '全国体验店', value: '3000+', sub: '家' },
                        { label: '集约化工业园', value: '7000+', sub: '亩' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-5 lg:p-6 shadow-2xl flex flex-col items-center justify-center relative group hover:border-white/30 transition-colors text-center">
                            <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-zinc-600 group-hover:bg-[#004CE5] transition-colors"></div>
                            <span className="text-zinc-400 text-[1.1rem] lg:text-[1.2rem] tracking-widest mb-2 font-bold">{item.label}</span>
                            <div className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
                                {item.value} <span className="text-xl lg:text-2xl text-zinc-500 font-normal">{item.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 基础信息 & 核心定位 */}
                <div className="grid grid-cols-2 gap-5 lg:gap-6 w-full">
                    {/* 基础信息 */}
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-zinc-600"></div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            品牌基础简介
                        </h3>
                        <p className="text-zinc-300 text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-justify tracking-wide flex-1">
                            冠珠瓷砖始创于1993年，是新明珠集团旗下的民族陶瓷标杆品牌。品牌主打<strong className="text-white">“大美筑家，中国冠珠”</strong>品牌理念，在全国拥有数千家线下门店及体验店，主营岩板、大理石瓷砖等全品类优质墙地砖产品，致力于用东方美学与高定设计为用户打造美好人居空间。
                        </p>
                    </div>

                    {/* 核心定位 */}
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-[#004CE5]"></div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            品牌核心定位
                        </h3>
                        <p className="text-zinc-300 text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-justify tracking-wide flex-1">
                            <strong className="text-white text-[1.2rem] lg:text-[1.3rem]">“国民瓷砖品牌” 叠加 “东方美学与高定空间” 的双轨定位。</strong><br /><br />
                            作为民族陶瓷标杆品牌，冠珠更突出设计审美、国风花色、密缝大板与整装交付体验，近年通过设计师联名、顶流代言等方式强化<strong className="text-[#004ce5]">“品质生活”与“东方美”</strong>的品牌心智。（摘自官网）
                        </p>
                    </div>
                </div>

                {/* 目标客群 */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl w-full relative hover:border-white/30 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-600"></div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-widest mb-5 flex items-center gap-3">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        目标客群
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
                        {/* 客群一 */}
                        <div className="bg-black/40 border border-white/5 p-5 lg:p-6 rounded-xl relative flex flex-col justify-start">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-zinc-500 rounded-l-xl"></div>
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第一类：大众家装消费人群</h4>
                            <p className="text-[1.05rem] lg:text-[1.1rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                聚焦追求<strong className="text-zinc-200">高品质、大空间及高文化认同</strong>的改善型住房群体、中产家庭以及对“新国潮、大美空间”有强烈精神共鸣的主流城市消费主力军。
                            </p>
                        </div>
                        {/* 客群二 */}
                        <div className="bg-black/40 border border-white/5 p-5 lg:p-6 rounded-xl relative flex flex-col justify-start">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-zinc-500 rounded-l-xl"></div>
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第二类：设计师与整装渠道</h4>
                            <p className="text-[1.05rem] lg:text-[1.1rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                冠珠持续布局设计师圈层与整装合作，通过五大空间方案，让设计师成为品牌审美与方案能力的传播节点。在瓷砖行业里，设计师对中高端项目的选材话语权越来越大。
                            </p>
                        </div>
                        {/* 客群三 */}
                        <div className="bg-black/40 border border-white/5 p-5 lg:p-6 rounded-xl relative flex flex-col justify-start">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-zinc-500 rounded-l-xl"></div>
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第三类：工程与工装客户</h4>
                            <p className="text-[1.05rem] lg:text-[1.1rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                面向房地产精装、商业空间、市政及公共建筑等 B 端场景。提供<strong className="text-zinc-200">定制规格、花色与案例参考</strong>，并与数十家知名房企建立战略合作，代表项目涵盖机场、高校、写字楼等公建场景。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
