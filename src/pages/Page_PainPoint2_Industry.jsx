import React from 'react';

export default function Page_PainPoint2_Industry() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4 lg:mb-6 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">02</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        在消费者端，行业认知度极低；竞争非常激烈
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        建陶是典型的<strong className="text-white">“低频高客单价、低关注度”</strong>行业。绝大多数消费者一生只买1-2次，而且只会在买的时候才会开始了解；<br />
                        而且纵观整个行业的竞争格局，不管是马可波罗、东鹏、蒙娜丽莎等老牌，还是新品牌都竞争惨烈，而且差异并不大。
                    </p>
                </div>

                {/* Main Content: 2 Image Slots */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 min-h-0 pb-4 items-stretch">

                    {/* Image Slot 1 */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="flex-1 rounded-xl border border-white/5 bg-black overflow-hidden relative flex items-center justify-center">
                            {/* 真实的图片标签，请将图片保存到 public/Summit 目录下并替换此处的文件名 */}
                            <img src="/Summit/painpoint-img-1.png" alt="行业产量与企业数量双降" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Image Slot 2 */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-4 lg:p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="flex-1 rounded-xl border border-white/5 bg-black overflow-hidden relative flex items-center justify-center">
                            {/* 真实的图片标签，请将图片保存到 public/Summit 目录下并替换此处的文件名 */}
                            <img src="/Summit/painpoint-img-2.png" alt="建筑陶瓷行业处于出清阶段" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>

                {/* Solution Section */}
                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm lg:text-base font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-sm lg:text-[1.1rem] font-bold leading-relaxed text-justify flex-1">
                        利用高质量的专属语料，让 AI 越过传统老牌的声量壁垒，向用户精准输出萨米特的差异化标签（例如：更符合年轻审美的设计、密缝铺贴工艺），先在细分领域取得优势。
                    </p>
                </div>

                {/* Footer Annotation */}
                <div className="w-full text-right shrink-0 mt-2">
                    <p className="text-zinc-500 text-xs tracking-wider">
                        数据来源于《陶瓷瓷砖行业报告-嘉世咨询》
                    </p>
                </div>
            </div>
        </div>
    );
}
