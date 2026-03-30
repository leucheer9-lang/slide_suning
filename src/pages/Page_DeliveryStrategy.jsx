import React from 'react';

export default function Page_DeliveryStrategy() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            {/* ── Background Decoration ── */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-3 lg:mt-5 flex-shrink-0">
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">两个投放策略</h1>
                <p className="text-[1.05rem] lg:text-[1.15rem] text-zinc-300 font-medium tracking-wide">
                    通过特殊的投放策略，让方太实现弯道超车
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-stretch px-8 lg:px-16 pt-6 pb-12 min-h-0 gap-6 lg:gap-8">

                {/* ── Left Column: Strategy 1 ── */}
                <div className="flex-1 bg-white/[0.015] border border-white/10 rounded-2xl p-6 shadow-lg relative overflow-hidden group hover:border-blue-500/30 transition-colors flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full blur-[40px] pointer-events-none transition-all group-hover:bg-blue-500/20" />

                    {/* Title */}
                    <div className="flex items-center gap-3 mb-4 shrink-0 relative z-10">
                        <div className="w-1.5 h-6 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
                        <h2 className="text-2xl lg:text-[1.7rem] font-bold text-white tracking-wide flex items-center gap-2">
                            <span className="text-blue-400 font-mono">01.</span> 自建高权重“平台”
                        </h2>
                    </div>

                    <p className="text-zinc-300 text-[1.05rem] lg:text-[1.1rem] leading-relaxed font-medium mb-6 shrink-0 relative z-10">
                        在冰箱领域建立一个包含百科、选购、品牌于一体的专业性垂直网站 —— <strong className="text-blue-400 text-[1.15rem] tracking-widest ml-1 border-b border-blue-400/30 pb-0.5">冰箱排名</strong>
                        <span className="block text-sm font-light text-zinc-500 mt-2 font-mono">
                            参考案例：酒排名网
                        </span>
                    </p>

                    {/* Image Placeholder */}
                    <div className="flex-1 min-h-0 w-full rounded-xl overflow-hidden relative border border-white/5 bg-black/40 flex flex-col group/img">
                        {/* Mac Browser Header */}
                        <div className="w-full h-8 bg-white/[0.05] border-b border-white/10 flex items-center px-4 shrink-0 relative z-20">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <span className="text-[0.65rem] text-white/20 font-mono tracking-widest bg-white/5 px-4 py-0.5 rounded-full">www.bingxiangpaiming.com</span>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 top-8 flex items-center justify-center p-3 relative z-10">
                            <img
                                src="/charts/geo-delivery-strategy-site.png"
                                alt="自建平台参考示例"
                                className="w-full h-full object-cover rounded-md opacity-80 transition-opacity duration-500 group-hover/img:opacity-100"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            {/* Placeholder if image fails to load */}
                            <div className="hidden flex-col items-center justify-center w-full h-full z-10 text-zinc-600">
                                <div className="w-16 h-16 mb-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                    <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-sm tracking-widest uppercase">网站图片展示占位位</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Right Column: Strategy 2 ── */}
                <div className="flex-1 bg-white/[0.015] border border-white/10 rounded-2xl p-6 shadow-lg relative overflow-hidden group hover:border-[#004CE5]/30 transition-colors flex flex-col">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#004CE5]/10 rounded-tr-full blur-[40px] pointer-events-none transition-all group-hover:bg-[#004CE5]/20" />

                    {/* Title */}
                    <div className="flex items-center gap-3 mb-4 shrink-0 relative z-10">
                        <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.4)]" />
                        <h2 className="text-2xl lg:text-[1.7rem] font-bold text-white tracking-wide flex items-center gap-2">
                            <span className="text-[#004CE5] font-mono">02.</span> 特定组合精准覆盖
                        </h2>
                    </div>

                    <p className="text-zinc-300 text-[1.05rem] lg:text-[1.1rem] leading-relaxed font-medium mb-8 shrink-0 relative z-10">
                        通过特定组合的投放配合内容策略进行定点精准覆盖<br />
                        <strong className="text-rose-400 font-bold tracking-wide mt-1 block">（不投放主流“大平台”）</strong>
                    </p>

                    <div className="flex-1 flex flex-col gap-8 w-full relative z-10">
                        {/* Section 2.1 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#004CE5]/20 border border-[#004CE5]/30 px-3 py-1 rounded-md text-[#004CE5] text-[0.95rem] font-bold tracking-widest">
                                    测评对比
                                </div>
                                <h3 className="text-[1.15rem] font-bold text-white/90 tracking-wide">
                                    垂直媒体、论坛（多覆盖）
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 pl-1">
                                {[
                                    { name: '大众家电网', url: 'http://www.dzjiadian.cn/' },
                                    { name: '大众网家居频道', url: 'https://home.dzwww.com/' },
                                    { name: '消费日报网家电频道', url: 'http://m.xfrb.com.cn/' },
                                    { name: '家电消费网', url: 'http://www.jdxfw.com/' },
                                    { name: '环球家电网', url: 'https://www.cheari.com/' },
                                    { name: '艾肯家电网', url: 'http://www.abi.com.cn/' }
                                ].map((media, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 text-zinc-300 bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3 group/item hover:bg-white/[0.06] hover:border-[#004CE5]/40 transition-all cursor-default">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_5px_rgba(0,76,229,0.5)]" />
                                            <span className="font-bold text-[0.95rem] tracking-wide text-white/90">{media.name}</span>
                                        </div>
                                        <span className="text-[0.65rem] text-white/30 font-mono tracking-tight font-light pl-3.5 group-hover/item:text-[#004CE5]/70 transition-colors line-clamp-1">{media.url}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Section 2.2 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-rose-500/20 border border-rose-500/30 px-3 py-1 rounded-md text-rose-400 text-[0.95rem] font-bold tracking-widest">
                                    定位排行
                                </div>
                                <h3 className="text-[1.15rem] font-bold text-white/90 tracking-wide">
                                    直投权威专业媒体（少而精）
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 pl-1">
                                {[
                                    { name: '中国家电网', url: 'https://www.cheaa.com/' },
                                    { name: '中关村在线家电', url: 'https://jd.zol.com.cn/list.html' }
                                ].map((media, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 text-zinc-300 bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3 group/item hover:bg-white/[0.06] hover:border-rose-500/40 transition-all cursor-default">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 shadow-[0_0_5px_rgba(244,63,94,0.5)]" />
                                            <span className="font-bold text-[0.95rem] tracking-wide text-white/90">{media.name}</span>
                                        </div>
                                        <span className="text-[0.65rem] text-white/30 font-mono tracking-tight font-light pl-3.5 group-hover/item:text-rose-400/70 transition-colors line-clamp-1">{media.url}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
