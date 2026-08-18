import React from 'react';

export default function Page_BrandInfo() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 lg:pt-5 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">品牌基础信息</h1>
            </div>

            <div className="flex-1 w-full max-w-[1500px] mx-auto px-8 lg:px-12 pb-5 relative z-10 flex flex-col justify-start gap-4 min-h-0">

                <div className="grid grid-cols-4 gap-5 lg:gap-6 w-full shrink-0">
                    {[
                        { label: '一期投用', value: '2016', sub: '年' },
                        { label: '对外开放体量', value: '45', sub: '万㎡' },
                        { label: '入驻企业', value: '270', sub: '家' },
                        { label: '园区产值', value: '500+', sub: '亿元' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111] border border-white/10 border-t-[6px] border-t-zinc-600 rounded-2xl px-5 py-4 shadow-2xl flex flex-col items-center justify-center relative group hover:border-white/30 hover:border-t-[#004CE5] transition-colors text-center"
                        >
                            <span className="text-zinc-400 text-[1rem] tracking-widest mb-1.5 font-bold">{item.label}</span>
                            <div className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
                                {item.value} <span className="text-lg lg:text-xl text-zinc-500 font-normal">{item.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-5 lg:gap-6 w-full shrink-0">
                    <div className="bg-[#111] border border-white/10 border-l-[6px] border-l-zinc-600 rounded-2xl px-6 py-5 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-widest mb-2.5 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            园区基础简介
                        </h3>
                        <p className="text-zinc-300 text-[20px] leading-[1.7] text-justify tracking-wide">
                            创维创新谷位于<strong className="text-white">深圳宝安石岩</strong>（塘头一号路 8 号），由创维集团建设、创维集团科技园管理有限公司运营。石岩科技园自持约 <strong className="text-white">100 万㎡</strong>：一期约 55 万㎡以创维产业自用为主，二期<strong className="text-white">创新谷约 45 万㎡面向市场招租</strong>。它不是单纯写字楼，而是创维彩电全球总部所在地，也是对外开放的产城综合体。
                        </p>
                    </div>

                    <div className="bg-[#111] border border-white/10 border-l-[6px] border-l-[#004CE5] rounded-2xl px-6 py-5 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-widest mb-2.5 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            园区核心定位
                        </h3>
                        <p className="text-zinc-300 text-[20px] leading-[1.7] text-justify tracking-wide">
                            <strong className="text-white text-[22px]">「5G+8K / 新一代电子信息技术」主题产业园</strong>。官方表述为<strong className="text-[#004ce5]">「产业聚融平台、科技创智中心」</strong>。2023 年获评广东省特色产业园，当年深圳唯一上榜。招租逻辑不是「谁来都行」，而是围绕创维产业链做强链、补链。
                        </p>
                    </div>
                </div>

                <div className="flex-1 min-h-0 bg-[#111] border border-white/10 border-t-[3px] border-t-zinc-600 rounded-2xl px-6 py-5 lg:px-8 lg:py-6 shadow-2xl w-full relative hover:border-white/30 transition-colors flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-widest mb-4 flex items-center gap-3 shrink-0">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        目标客群
                    </h3>

                    <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 p-5 lg:p-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第一类：创维产业链配套企业</h4>
                            <p className="text-[20px] lg:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                显示、光学、结构件、智能硬件等上下游，看重<strong className="text-zinc-200">就近供货、缩短交付半径，以及与创维业务协同</strong>。
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 p-5 lg:p-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第二类：研产一体的硬科技企业</h4>
                            <p className="text-[20px] lg:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                电子信息、人工智能、机器人、医疗器械、新能源等，需要<strong className="text-zinc-200">楼上研发、楼下中试 / 轻生产</strong>，纯写字楼做不到。
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 p-5 lg:p-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第三类：外溢的总部与成长型企业</h4>
                            <p className="text-[20px] lg:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                从南山、福田外迁或新设办公，看重<strong className="text-zinc-200">租金性价比、公寓商业配套，以及可申报的园区政策身份</strong>。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
