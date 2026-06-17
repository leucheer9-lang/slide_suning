import React from 'react';

export default function Page_PainPoint3_Service() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">03</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    渠道碎片化与时间折价，AI易判定为价格体系混乱
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-zinc-400 text-sm lg:text-base leading-relaxed tracking-wide mb-4 shrink-0">
                    短保烘焙行业面临极其复杂的“多渠道+临期折价”体系。同一个面包，在早晨便利店、中午即时外卖、下午零食量贩店（赵一鸣/鸣鸣很忙）及晚上的商超清仓区，售价可相差数倍。AI抓取信息时缺乏“时间”和“渠道”维度，极易判定为“随意杀熟、价格体系极度混乱”。
                </p>

                {/* Main Content: Flowchart Diagram */}
                <div className="flex-1 flex items-center justify-center min-h-0 pb-4">
                    <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col lg:flex-row items-stretch justify-between gap-6 relative overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 opacity-20 blur-[80px] rounded-full"></div>

                        {/* Step 1: Network Pricing Chaos */}
                        <div className="flex-1 bg-black/60 border border-red-500/20 p-6 rounded-2xl relative flex flex-col items-center justify-center text-center">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 px-3 py-1 rounded text-xs font-black uppercase tracking-wider whitespace-nowrap">
                                线下多重渠道表现
                            </div>
                            <h4 className="text-lg lg:text-xl font-bold text-red-400 mb-4 mt-2">渠道与时效差价</h4>
                            <div className="flex flex-col gap-2.5 w-full text-xs lg:text-sm xl:text-base text-zinc-400">
                                <p className="bg-red-950/10 border border-red-900/30 p-2.5 rounded text-left">
                                    <strong className="text-white">早间便利店/商超：</strong> 标准定价 ¥9.9/个，白领即买即走。
                                </p>
                                <p className="bg-red-950/10 border border-red-900/30 p-2.5 rounded text-left">
                                    <strong className="text-white">下午量贩零食店：</strong> 直采低价 ¥6.5/个，压低渠道流通成本。
                                </p>
                                <p className="bg-red-950/10 border border-red-900/30 p-2.5 rounded text-left">
                                    <strong className="text-white">晚间商超/前置仓：</strong> 临期出清 ¥4.9/个（或买一送一），避免废报损耗。
                                </p>
                            </div>
                        </div>

                        {/* Connection Arrow 1 */}
                        <div className="flex flex-col items-center justify-center shrink-0 py-2">
                            <svg className="w-8 h-8 text-red-500/80 rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <span className="text-[11px] text-zinc-500 font-bold mt-1.5">爬虫无差别抓取</span>
                        </div>

                        {/* Step 2: AI Processor */}
                        <div className="flex-1 bg-black/80 border border-zinc-700/50 p-6 rounded-2xl relative flex flex-col items-center justify-center text-center shadow-xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-700 px-3 py-1 rounded text-xs font-black uppercase tracking-wider whitespace-nowrap">
                                AI 搜索引擎聚合
                            </div>
                            <h4 className="text-lg lg:text-xl font-bold text-zinc-300 mb-4 mt-2">特征混淆与数据聚合</h4>
                            <p className="text-xs lg:text-sm xl:text-base text-zinc-400 leading-relaxed text-left">
                                AI大模型在被问及价格时，直接抓取到如下杂乱词：<br />
                                <strong className="text-red-400 font-bold">“便利店9.9元”</strong>、<strong className="text-red-400 font-bold">“折扣店6.5元”</strong>、<strong className="text-red-400 font-bold">“清仓4.9元”</strong>。<br /><br />
                                由于缺乏“时间段”与“临期”属性逻辑，AI倾向混淆常态售价与清仓特价，导致情感定位倾斜。
                            </p>
                        </div>

                        {/* Connection Arrow 2 */}
                        <div className="flex flex-col items-center justify-center shrink-0 py-2">
                            <svg className="w-8 h-8 text-red-500/80 rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <span className="text-[11px] text-zinc-500 font-bold mt-1.5">生成最终评判</span>
                        </div>

                        {/* Step 3: Bad Outcome */}
                        <div className="flex-1 bg-gradient-to-b from-[#1c0c0c] to-black border border-red-600/40 p-6 rounded-2xl relative flex flex-col items-center justify-center text-center shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-850 px-3 py-1 rounded text-xs font-black uppercase tracking-wider whitespace-nowrap">
                                负面心智输出
                            </div>
                            <h4 className="text-lg lg:text-xl font-bold text-white mb-4 mt-2">AI 自动生成评定（无干预）</h4>
                            <p className="text-xs lg:text-sm xl:text-base text-red-200/90 leading-relaxed font-semibold text-left">
                                “该品牌短保面包价格体系混乱，在便利店溢价过高，而在零售折扣店和晚间清仓时却又极度低迷。这反映其渠道控制力薄弱，且在白天的常态销售中存在欺骗消费者或高价‘割韭菜’的嫌疑。”
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
