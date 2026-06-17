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
                        {/* ROW 1: 渠道价格混乱 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-600 hover:border-blue-600/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-500 tracking-wide text-center">
                                    渠道价格混乱
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    部分经销商或分销自媒体发布不实的促销政策、临期打折价格或违规串货低价，导致价格体系混乱，AI抓取后乱报出厂价或零售价。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    快消渠道极其碎片化，临期特卖与散装折价信息满天飞，很难逐一通过常规途径申诉撤稿。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    价格规范 + 渠道管束 + 信息重置
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 在官方平台及大型分销体系发布标准零售价与招商政策指南。</div>
                                    <div>2. 纠治严重破价的线上商户，建立警告与纠偏机制。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: 产品抗性吐槽 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-500 hover:border-blue-500/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-400 tracking-wide text-center">
                                    产品抗性吐槽
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    网民对短保面包“添加防腐剂（丙酸钙等）”的配料表争议，以及对于保质期短易霉变、风味粗糙等真实关切的吐槽。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    食品安全与健康是大众的核心痛点，强行堵嘴或否认极易引发网络对立，甚至引发二次公关风险。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    配料表科普与安全标准释疑
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    铺设短保发酵工艺科普、严格的烘焙灭菌流程以及防腐剂符合国家食品安全标准的科学说明，稀释消费者疑虑，引导 AI 输出正面健康评价。
                                </p>
                            </div>
                        </div>

                        {/* ROW 3: 竞品拉踩抹黑 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-400 hover:border-blue-400/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-300 tracking-wide text-center">
                                    竞品拉踩抹黑
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    竞品雇佣水军发布的拉踩贴、伪造“面包吃出异物”、“包装破损霉变”等食安偶发事件的片面抹黑言论与视频。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    拉踩内容多发在小红书、抖音高权重个人号，AI 抓取后极易列为避坑贴，且极难追溯发布者的利益关联源头。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    质检公示 + 法务维权 + 权威评测
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 法务协助平台进行侵权申诉撤稿。</div>
                                    <div>2. 联合第三方权威烘焙评测与消协，树立行业标杆。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 4: 过期历史旧闻 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-300 hover:border-blue-300/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-200 tracking-wide text-center">
                                    过期历史旧闻
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    互联网上残留的桃李历史食安抽检风波、已被澄清的陈旧事故旧闻，或已经停产失效的产品促销政策。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    AI 对官方权威媒体信源权重极高，抓取旧数据后会与当前在售阶段混淆，容易被大模型作为“近期食安热点”误导输出。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    源头更替与官方澄清覆盖
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    清理或申诉已解决的陈旧负面历史链接，发布官方近期最新质量标准与企业社会责任报告，快速更新 AI 检索缓存记忆。
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
}
