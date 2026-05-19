import React from 'react';

export default function Page_PainPoint2_Industry() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-6 lg:p-10 xl:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-8 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-6">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">02</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-6 leading-tight">
                        在消费者端，行业认知度极低；竞争非常激烈
                    </h1>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-5xl tracking-wide">
                        建陶是典型的<strong className="text-white">“低频高客单价、低关注度”</strong>行业。绝大多数消费者一生只买1-2次。<br />
                        在AI的训练语料库中，马可波罗、东鹏等老牌头部的数据量远大于萨米特。<strong className="text-[#004CE5]">而且整个行业竞争非常激烈。</strong>
                    </p>
                </div>

                {/* Main Content: 2 Image Slots */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-10 min-h-0 pb-8 items-stretch">

                    {/* Image Slot 1 */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="flex-1 rounded-xl border border-white/5 bg-black overflow-hidden relative flex items-center justify-center">
                            {/* 真实的图片标签，请将图片保存到 public/Summit 目录下并替换此处的文件名 */}
                            <img src="/Summit/painpoint-img-1.png" alt="行业产量与企业数量双降" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Image Slot 2 */}
                    <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="flex-1 rounded-xl border border-white/5 bg-black overflow-hidden relative flex items-center justify-center">
                            {/* 真实的图片标签，请将图片保存到 public/Summit 目录下并替换此处的文件名 */}
                            <img src="/Summit/painpoint-img-2.png" alt="建筑陶瓷行业处于出清阶段" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>

                {/* Footer Annotation */}
                <div className="w-full text-right shrink-0 mt-2">
                    <p className="text-zinc-500 text-sm tracking-wider">
                        数据来源于《陶瓷瓷砖行业报告-嘉世咨询》
                    </p>
                </div>
            </div>
        </div>
    );
}
