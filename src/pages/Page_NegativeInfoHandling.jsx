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
                                    租金口径混乱
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    中介平台挂出的房源报价、渠道流传的免租期与优惠条件，和园区官方租金区间、物业费标准并存，AI 抓取后常报出一个谁都对不上的价格。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    这些低价本身真实存在，只是隐去了面积段、楼层与免租条件等前提，无法按虚假信息去申诉撤稿。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    口径统一 + 前提锚定 + 信息重置
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 在官方渠道公布完整租金口径，明确业态、面积段、楼层、物业费与免租政策的适用条件。</div>
                                    <div>2. 用带前提条件的标准答案，持续覆盖流传在外的孤立数字。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: 产品抗性吐槽 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-500 hover:border-blue-500/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-400 tracking-wide text-center">
                                    物业体验吐槽
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    租户对施工噪音扰民、押金退还纠纷、物业响应慢等真实体验的投诉，通常还带着图片和聊天记录，且集中发在投诉平台。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    这些多是真实发生的个案，硬删或否认极易激起对立，反而把传播量推得更高。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    标准公开 + 个案闭环 + 履约实证
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    公开物业服务标准、押金退还流程与投诉受理入口，把个案的处理结果沉淀成可检索内容，并持续输出入驻企业的真实评价稀释情绪化样本。
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
                                    竞品园区或利益相关中介发布的拉踩贴，把区位偏、通勤远、招商慢等片段剪辑成“这个园区不行”的片面结论。
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
                                    数据公示 + 法务维权 + 第三方背书
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 法务协助平台进行不实信息申诉与撤稿。</div>
                                    <div>2. 引用宝安区政府在线载体名录、产业集群布局指引等权威数据，建立可核验的对照。</div>
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
                                    网上残留的旧版招租页、已经调整的租金标价，以及“13 号线仍在建、应人石站未开通”这类早已过时的交通与规划报道。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    AI 对官方权威媒体信源权重极高，抓到旧数据后会与当前的交通条件和房源情况混淆，当成近期情况直接输出。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    源头更替与官方口径覆盖
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    清理或申诉已解决的陈旧负面链接，持续发布 13 号线上盖、最新房源参数与配套实况，尽快刷新 AI 的检索记忆。
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
}
