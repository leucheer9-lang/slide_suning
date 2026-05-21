import React from 'react';

export default function Page_PainPoint3_Service() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-4 lg:mb-6 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">03</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        极度依赖安装水平和售后服务
                    </h1>
                    <p className="text-zinc-400 text-[1.05rem] lg:text-[1.15rem] leading-relaxed max-w-[1400px] tracking-wide">
                        建陶行业俗称<strong className="text-white">“三分砖，七分贴”</strong>。尤其是现在的超大岩板和密缝铺贴，对施工工艺要求极高。如果终端门店找的泥瓦工手艺不达标，极易导致“空鼓、崩角、缝隙不齐”等翻车事故。这些因“线下施工”导致的消费者吐槽，会被 AI 爬虫无差别抓取，最终让品牌的“产品质量”无辜背了黑锅。
                    </p>
                </div>

                {/* Main Content: 1 Wide Image Slot */}
                <div className="flex-1 flex flex-col min-h-0 pb-4 items-stretch">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-2 lg:py-4 lg:px-0 flex flex-col relative overflow-hidden shadow-2xl justify-center items-center">
                        <img src="/Summit/painpoint-img-3.png" alt="售后痛点截图" className="w-full h-full object-contain rounded-xl" />
                    </div>
                </div>

            </div>
        </div>
    );
}
