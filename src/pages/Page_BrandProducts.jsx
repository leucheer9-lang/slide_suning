import React from 'react';

export default function Page_BrandProducts() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-3 lg:pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest mb-1 -translate-y-[4px]">品牌主要产品线</h1>
            </div>

            <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 lg:px-8 pb-6 relative z-10 flex flex-col justify-start gap-4 lg:gap-5 min-h-0 -translate-y-[10px]">

                {/* 瓷砖系列 */}
                <div className="bg-[#111] border border-white/10 rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#004CE5]"></div>
                    {/* Left Col */}
                    <div className="w-full lg:w-[24%] p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-widest">瓷砖系列</h2>
                        <p className="text-zinc-400 text-[1.1rem] lg:text-[1.15rem] leading-relaxed text-justify">
                            主打<strong className="text-zinc-200">“触感、微缝与个性色彩”</strong>，多为日常规格（如800×800、600×1200、750×1500mm），满足大众刚需与改善型住房需求。
                        </p>
                    </div>
                    {/* Right Col */}
                    <div className="w-full lg:w-[76%] p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-5">
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>肤感美学系列（主打王牌）</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">以2025年主推“可可西里系列”为代表，采用金丝绒复刻釉或玉质肤感技术，表面无刺眼光泽，触感温润，主攻侘寂风、奶油风。</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>密缝·无间之境 / 大理石系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">以750×1500mm黄金规格为主，主打＜0.5mm微缝精工铺贴，打破传统瓷砖割裂感，大小户型均可实现“无缝感”。</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>纹艺派 / 纹艺砖系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">懂年轻人的系列，主推手工砖、复古小花砖。色彩极度丰富，支持单色厚涂或撞色DIY，满足局部轻改造。</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>自然·原色套系</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">取色于大自然（如秋韵、荷白），主打微水泥风和极简素色，视觉极其放松。</p>
                        </div>
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#004CE5]"></span>超级玩家系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">与台湾设计鬼才邵唯晏联名，采用前卫的几何点线面随机拼贴，艺术感极强。</p>
                        </div>
                    </div>
                </div>

                {/* 岩板系列 */}
                <div className="bg-[#111] border border-white/10 rounded-xl flex flex-col lg:flex-row overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                    {/* Left Col */}
                    <div className="w-full lg:w-[24%] p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-widest">岩板系列</h2>
                        <p className="text-zinc-400 text-[1.1rem] lg:text-[1.15rem] leading-relaxed text-justify">
                            主打<strong className="text-zinc-200">“超大规格、材质跨界、全屋定制”</strong>，尺寸多为1200×2400等大规格，可上墙铺地、用于餐桌/橱柜面板等。
                        </p>
                    </div>
                    {/* Right Col */}
                    <div className="w-full lg:w-[76%] p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-5">
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Master大师高端系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">结合现代科技复刻世界经典艺术质感，专攻大平层和高端圈层，是其冲击顶奢市场的代表作。</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>收藏家系列（皮纹/奢石）</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">行业首创立体精雕模具，高度复刻真皮及名贵奢石纹理，兼具皮质透气视觉与岩板耐磨抗污属性。</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>星钻石系列</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">主推超大规格，采用炫彩结晶干粒釉，主打高奢亮面，迎合需极强光泽度和通透感的大平层客户。</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>哆啦A梦联名款</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">开创性“夜光/涂鸦岩板”，儿童可随意用水彩笔画画，轻松擦拭不留痕，专为亲子家庭定制。</p>
                        </div>
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-bold text-[1.15rem] lg:text-[1.2rem] mb-1.5 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Big Family套系 / 巴里·漫石</h4>
                            <p className="text-zinc-400 text-[1.05rem] lg:text-[1.1rem] leading-relaxed text-justify">主打“一砖多尺，成套设计”，拥有微凹凸天然石板路质感，适配时下多巴胺风/意式度假风全屋通铺。</p>
                        </div>
                    </div>
                </div>

                {/* 备注：主营业务 */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 justify-center mt-2 px-8">
                    <span className="text-zinc-400 font-bold tracking-widest text-[1.15rem] lg:text-[1.2rem] flex items-center gap-2">
                        <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        主营业务备注：
                    </span>
                    <div className="flex flex-col sm:flex-row gap-6 lg:gap-12">
                        <p className="text-zinc-300 text-[1.1rem] lg:text-[1.15rem]">主要盈利产品大类：<strong className="text-white tracking-wide">陶瓷砖</strong> <span className="text-zinc-500 text-[1rem]">(以瓷质有釉砖/大理石瓷砖为主)</span></p>
                        <p className="text-zinc-300 text-[1.1rem] lg:text-[1.15rem]">主推新品产品大类：<strong className="text-white tracking-wide">高端岩板 / 大板系列</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
