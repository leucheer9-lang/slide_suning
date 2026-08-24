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
                        { label: '创立时间', value: '2003', sub: '年' },
                        { label: '授权专利', value: '1200+', sub: '项' },
                        { label: '服务网络', value: '160+', sub: '国家和地区' },
                        { label: '参与航天', value: '31', sub: '次' },
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
                    <div className="bg-[#111] border border-white/10 border-l-[6px] border-l-zinc-600 rounded-2xl px-10 py-5 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-widest mb-2.5 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            企业基础简介
                        </h3>
                        <p className="text-zinc-300 text-[20px] leading-[1.7] text-justify [text-justify:inter-ideograph] tracking-wide">
                            广东太力科技集团股份有限公司创立于 <strong className="text-white">2003 年</strong>，总部位于<strong className="text-white">广东中山</strong>，2025 年 5 月在<strong className="text-white">深交所创业板上市（301595）</strong>。以高性能纳米材料为核心、专注安全防护领域创新应用的国家高新技术企业，并获认定为国家级专精特新「小巨人」和国家知识产权示范企业。
                        </p>
                    </div>

                    <div className="bg-[#111] border border-white/10 border-l-[6px] border-l-[#004CE5] rounded-2xl px-10 py-5 shadow-2xl relative hover:border-white/30 transition-colors flex flex-col">
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-widest mb-2.5 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                            企业核心定位
                        </h3>
                        <p className="text-zinc-300 text-[20px] leading-[1.7] text-justify [text-justify:inter-ideograph] tracking-wide">
                            <strong className="text-white text-[22px]">「高性能纳米材料 + 安全防护」平台型企业</strong>。官方路径为
                            <strong className="text-[#004ce5]">「以航天高度塑造品牌壁垒，以特种安防驱动高价值增长，以民用规模化奠定市场根基」</strong>。依托经航天极端环境验证的材料技术，提供防弹、防穿刺、防撞击、防泄漏、耐极端环境的防护方案。
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
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 px-10 py-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第一类：家庭消费者</h4>
                            <p className="text-[20px] lg:text-[21px] text-zinc-400 leading-relaxed text-justify [text-justify:inter-ideograph] tracking-wide">
                                换季收纳、租房搬家、厨房保鲜的日常需求，在天猫、抖音、京东、亚马逊直接下单，最在意<strong className="text-zinc-200">抽完会不会漏气、能不能反复用</strong>。
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 px-10 py-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第二类：全球零售与品牌客户</h4>
                            <p className="text-[20px] lg:text-[21px] text-zinc-400 leading-relaxed text-justify [text-justify:inter-ideograph] tracking-wide">
                                宜家、沃尔玛、京东京造这类渠道客户，看重<strong className="text-zinc-200">材料一致性、批次稳定和认证齐全</strong>，采购的是方案不是单品。
                            </p>
                        </div>
                        <div className="bg-black/40 border border-white/5 border-l-[6px] border-l-zinc-500 px-10 py-6 rounded-xl flex flex-col justify-center">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-widest">第三类：军警与工业防护客户</h4>
                            <p className="text-[20px] lg:text-[21px] text-zinc-400 leading-relaxed text-justify [text-justify:inter-ideograph] tracking-wide">
                                公安、应急救援，以及机器人、新能源厂商，看重<strong className="text-zinc-200">防护等级是否达标、检测认证是否齐全</strong>，决策周期长。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
