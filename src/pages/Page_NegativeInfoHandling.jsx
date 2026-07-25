import React from 'react';

export default function Page_NegativeInfoHandling() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-3 px-10 lg:pt-4 lg:pb-4 lg:px-12 xl:pt-5 xl:pb-5 xl:px-16 animate-fade-in">
            {/* Background Ambient Glows - Sleek Dark Mode in Pure Blues */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-5%] top-[15%] w-[600px] h-[600px] bg-[#004CE5]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
            <div className="absolute left-[-5%] bottom-[5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 gap-3 lg:gap-4 xl:gap-5">
                
                {/* Header Section - Sized at exactly 32px and positioned high */}
                <div className="shrink-0 pt-1 lg:pt-2">
                    <h1 className="text-[32px] font-black text-white tracking-widest leading-none">
                        处理负面及错误信息
                    </h1>
                </div>

                {/* Table Layout - Sleek container */}
                <div className="flex-1 flex flex-col justify-between min-h-0 border-2 border-white/10 rounded-[28px] overflow-hidden bg-zinc-950/40 p-4 lg:p-5 xl:p-6 shadow-2xl">
                    
                    {/* Header Row */}
                    <div className="grid grid-cols-12 gap-4 items-center border-b-2 border-[#004CE5] pb-3 shrink-0">
                        <div className="col-span-2 text-center">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">负面信息来源</span>
                        </div>
                        <div className="col-span-3 pl-4">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">具体是什么情况？</span>
                        </div>
                        <div className="col-span-3 pl-4">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">处理难点在哪里？</span>
                        </div>
                        <div className="col-span-4 pl-4">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">我们的处理方式</span>
                        </div>
                    </div>

                    {/* Table Body - Stretch rows to fill height evenly and eliminate gaps */}
                    <div className="flex-1 flex flex-col justify-between gap-3 lg:gap-4 xl:gap-5 pt-3 min-h-0">
                        
                        {/* ROW 1: 经销商发布 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-600 hover:border-blue-600/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-500 tracking-wide text-center">
                                    经销商发布
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    各地门店为了引流或清理库存，在网上乱发低价；或者不同区域跨区串货，导致全网价格体系混乱，AI 抓取后疯狂乱报价。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    极难配合。这背后是渠道利益分配机制的弊病，经销商为了自身利益，根本不愿合作去主动删帖修改。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    官方施压 + 特殊手段 + 覆盖
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 品牌方配合我们，利用官方名义向平台合理投诉违规内容。</div>
                                    <div>2. 针对顽固链接，我们动用特殊技术手段删文清帖。</div>
                                    <div>3. 最后铺设官方正确信息进行覆盖。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: 客户投诉 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-500 hover:border-blue-500/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-400 tracking-wide text-center">
                                    客户投诉
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    俗话说“三分砖七分贴”，多为对泥瓦工手艺不行导致的“空鼓、对不齐”，或门店服务态度差的真实吐槽。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    这是消费者的真实物理体验，强行去跟消费者对线或硬性删帖容易引发更大的舆论反弹（二次公关危机）。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    责任切割与正面稀释
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    通过大量覆盖“官方 3624 服务” and “密缝铺贴成功案例”，引导 AI 明白：出问题的是外部不规范施工。用海量正面好评稀释个别吐槽。
                                </p>
                            </div>
                        </div>

                        {/* ROW 3: 竞争对手发布 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-400 hover:border-blue-400/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-300 tracking-wide text-center">
                                    竞争对手发布
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    竞品雇佣水军发布的恶意拉踩文章（如：踩萨米特捧东鹏），或伪造的劣质产品测评。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    内容往往发布在高权重平台（如知乎、百家号），AI 极易抓取，且很难直接联系到背后的真实发布者。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    法务 + 对抗性语料
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 收集证据，协同 brand 法务进行侵权申诉 and 下架。</div>
                                    <div>2. 部署针对性的“防守反击”测评文章，客观展示我们的比较优势，把竞品流量抢回来。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 4: 官方发布 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-300 hover:border-blue-300/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-200 tracking-wide text-center">
                                    官方发布
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    品牌几年前发布的旧新闻稿、已经停产的产品参数，或是早已失效的促销价格。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    AI 认为“官方发的一定是对的”，给予极高权重。导致 AI 拿着旧黄历回答今天的问题。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    源头更替
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    这部分最容易处理，只需品牌配合，将自有账号（官网、公众号）里的旧文章或信息隐藏或修改，并重新发布新信息更新 AI 的记忆。
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
