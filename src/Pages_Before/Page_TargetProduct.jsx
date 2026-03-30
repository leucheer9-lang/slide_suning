import React from 'react';

export default function Page_TargetProduct() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-stretch mt-4 pb-8 overflow-hidden pointer-events-none">

                <div className="w-[34%] pl-10 sm:pl-16 flex flex-col justify-center pb-20 relative z-20">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-end gap-3">
                            <h1 className="text-4xl sm:text-[3.9rem] font-normal text-white leading-[1.2] tracking-tight font-['AlimamaShuHeiTi'] whitespace-nowrap">
                                方太冰箱 X20.i<br />是什么？
                            </h1>
                            <svg className="w-10 h-10 text-[#004CE5] mb-3 stroke-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content Area (Frosted Blue Rectangle) */}
                <div className="flex-1 relative flex flex-col justify-center pointer-events-auto items-end pr-12 sm:pr-16 py-8">
                    {/* Rectangular Solid Background */}
                    <div className="absolute top-4 bottom-4 left-0 right-12 sm:right-16 bg-[#101010] border border-white/10 rounded-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.2)]">
                    </div>

                    {/* Text Blocks */}
                    <div className="relative z-10 pl-16 sm:pl-20 pr-10 sm:pr-12 w-full flex flex-col justify-center h-full max-w-[95%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-white h-[90%] md:h-[95%] overflow-y-auto pr-4 mt-2 pt-2 custom-scrollbar">
                            {/* Left Column (Block 1 & 2) */}
                            <div className="flex flex-col gap-6">
                                {/* Block 1 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        一、产品名称与品牌定位
                                    </h3>
                                    <div className="pl-6">
                                        <ul className="space-y-2 text-[1.05rem] leading-[1.6] text-white/90">
                                            <li><span className="font-bold text-blue-300">产品名称：</span> 方太 高端平嵌冰箱 X20.i</li>
                                            <li><span className="font-bold text-blue-300">品牌 Slogan：</span> 以原鲜臻作 致敬大美厨房</li>
                                            <li><span className="font-bold text-blue-300">核心定义：</span> 方太联合专家历时3年研发，将远洋科考专用 MAP 储鲜技术应用于家用冰箱。</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10"></div>

                                {/* Block 2 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        二、三大原鲜突破（核心科技）
                                    </h3>
                                    <div className="pl-6">
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <p className="font-bold text-[#004CE5] text-[1.1rem] mb-1.5">1. Air Control 远洋级氮气保鲜科技</p>
                                                <ul className="space-y-1 text-[1rem] leading-[1.6] text-white/80 list-disc pl-4">
                                                    <li><span className="font-semibold text-zinc-300">技术原理：</span>原创制氮系统，精控舱内黄金氮氧比，临界控氧锁鲜。</li>
                                                    <li><span className="font-semibold text-zinc-300">保鲜效果：</span>168小时后，罗马生菜维C保有率达91.2%，樱桃坏果率仅2.8%。</li>
                                                    <li><span className="font-semibold text-zinc-300">三维精控：</span>温、湿、氧三维同步控制。</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#004CE5] text-[1.1rem] mb-1.5">2. Air Refresh 原鲜解冻科技</p>
                                                <ul className="space-y-1 text-[1rem] leading-[1.6] text-white/80 list-disc pl-4">
                                                    <li><span className="font-semibold text-zinc-300">技术原理：</span>原创空气扰动配合金属超导盘，4h无损速解至-3°C微冻。</li>
                                                    <li><span className="font-semibold text-zinc-300">使用体验：</span>均匀解冻无血水，锁鲜密封舱避免交叉污染。</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#004CE5] text-[1.1rem] mb-1.5">3. Air Circle Pro 新风净味科技</p>
                                                <ul className="space-y-1 text-[1rem] leading-[1.6] text-white/80 list-disc pl-4">
                                                    <li><span className="font-semibold text-zinc-300">核心组件：</span>铂金催化净味、高能离子除菌（≥99%）、24h新风系统。</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (Block 3, 4, 5) */}
                            <div className="flex flex-col gap-6 border-l border-white/5 pl-8">
                                {/* Block 3 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        三、全新一代平嵌科技
                                    </h3>
                                    <div className="pl-6">
                                        <ul className="space-y-1.5 text-[1.05rem] leading-[1.6] text-white/90 list-disc pl-2">
                                            <li><span className="font-bold text-blue-200">575mm 纤薄机身：</span> 完美适配准580mm深度橱柜。</li>
                                            <li><span className="font-bold text-blue-200">0mm 无缝贴合：</span> 离心式铰链，两侧平贴亦可113°大开合。</li>
                                            <li><span className="font-bold text-blue-200">800mm 黄金腰线：</span> 下柜高度800mm致敬橱柜视觉连贯。</li>
                                            <li><span className="font-bold text-blue-200">外观配色：</span> 玥影灰（国色），另有云影白、晶曜黑。</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10"></div>

                                {/* Block 4 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        四、尊享交互与智慧体验
                                    </h3>
                                    <div className="pl-6">
                                        <ul className="space-y-1.5 text-[1.05rem] leading-[1.6] text-white/90 list-disc pl-2">
                                            <li><span className="font-bold text-blue-200">iTouch 智慧交互：</span> 内隐式彩屏结构，无把手极简美学。</li>
                                            <li><span className="font-bold text-blue-200">按压自动开门：</span> 轻轻一按即开，3秒无动作自动关。</li>
                                            <li><span className="font-bold text-blue-200">高奢内饰满配：</span> 旗舰手机同级“苹果砂”不锈钢内饰。</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10"></div>

                                {/* Block 5 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        五、核心技术参数
                                    </h3>
                                    <div className="pl-6">
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[1.05rem] leading-[1.5] text-white/80 mt-1">
                                            <div><span className="font-semibold text-blue-300">型号：</span>BCD-508W-X20.i</div>
                                            <div><span className="font-semibold text-blue-300">门结构：</span>法式三门</div>
                                            <div><span className="font-semibold text-blue-300">能效：</span>新国标一级</div>
                                            <div><span className="font-semibold text-blue-300">噪声：</span>36dB(A)</div>
                                            <div className="col-span-2"><span className="font-semibold text-blue-300">总容积：</span>508L（冷藏320L、冷冻170L、变温18L）</div>
                                            <div className="col-span-2"><span className="font-semibold text-blue-300">产品尺寸：</span>894 × 1910 × 575mm</div>
                                            <div className="col-span-2 leading-snug"><span className="font-semibold text-blue-300">特殊舱室：</span>氮气保鲜舱、原鲜解冻舱。</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
