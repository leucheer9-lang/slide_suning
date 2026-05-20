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
                        { label: '成立时间', value: '26年', sub: '' },
                        { label: '自动化生产线', value: '50+', sub: '条' },
                        { label: '终端体验店', value: '2000+', sub: '家' },
                        { label: '现代工业园', value: '7000+', sub: '亩' },
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
                            萨米特瓷砖始创于2000年，是佛山知名的陶瓷大品牌。品牌主打<strong className="text-white">“设计+生活”</strong>理念，在全国拥有超6000家门店，主营岩板、大理石瓷砖等全品类高质量产品，致力于为用户打造个性化的美好家居空间。
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
                            <strong className="text-white text-[1.2rem] lg:text-[1.3rem]">“设计+生活”的国际化潮流品牌。</strong><br /><br />
                            不同于传统老牌陶企强调“经久耐用”的单一属性，萨米特将自己定位为<strong className="text-[#004ce5]">“懂年轻人的设计瓷砖品牌”</strong>。
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

                    <div className="grid grid-cols-2 gap-5 lg:gap-6">
                        {/* 客群一 */}
                        <div className="bg-black/40 border border-white/5 p-5 lg:p-6 rounded-xl relative flex flex-col justify-center">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-zinc-500 rounded-l-xl"></div>
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第一类：年轻装修人群</h4>
                            <p className="text-[1.1rem] lg:text-[1.2rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                聚焦<strong className="text-zinc-200">80后、90后及00后</strong>等新消费主力军，以及对<strong className="text-zinc-200">“高颜值、高质感、高环保”</strong>有强烈需求的高净值人群和改善型住房群体。
                            </p>
                        </div>
                        {/* 客群二 */}
                        <div className="bg-black/40 border border-white/5 p-5 lg:p-6 rounded-xl relative flex flex-col justify-center">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-zinc-500 rounded-l-xl"></div>
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第二类：设计师渠道</h4>
                            <p className="text-[1.1rem] lg:text-[1.2rem] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                萨米特近几年明显在做设计师圈层（例如：广州设计周合作；红棉设计奖；联名设计师产品）。<br />
                                <span className="text-zinc-500 mt-2 inline-block">核心动机：让设计师成为品牌传播节点。在当前瓷砖行业中，设计师的推荐权越来越大。</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
