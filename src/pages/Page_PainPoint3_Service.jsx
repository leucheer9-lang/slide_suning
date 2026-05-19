import React from 'react';

export default function Page_PainPoint3_Service() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-6 lg:p-10 xl:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-10 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-6">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">03</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-6 leading-tight">
                        极度依赖安装水平和售后服务
                    </h1>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-5xl tracking-wide">
                        行业俗称<strong className="text-white">“三分砖，七分贴”</strong>。对于超大岩板和密缝铺贴，如果经销商找的泥瓦工手艺不行，<br />
                        会导致大面积的<strong className="text-[#004CE5]">“空鼓、崩角、缝隙不齐”</strong>。这些消费者的负面吐槽会被AI抓取。
                    </p>
                </div>

                {/* Main Content: 1 Wide Image Slot */}
                <div className="flex-1 flex flex-col min-h-0 pb-8 items-stretch">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col relative overflow-hidden shadow-2xl">
                        {/* 该容器根据父级 flex-1 填满剩余高度，内部使用 object-contain 来适配任何比如 6:1 这种极端比例的图片 */}
                        <div className="flex-1 rounded-xl border border-white/5 bg-black overflow-hidden relative flex items-center justify-center">
                            {/* 真实的图片标签，请将您的长条形截图保存到 public/Summit 目录下并替换此处的文件名 */}
                            <img src="/Summit/painpoint-img-3.png" alt="售后痛点截图" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                {/* Footer Annotation */}
                <div className="w-full text-right shrink-0 mt-2">
                    <p className="text-zinc-500 text-sm tracking-wider">
                        信息来源：中国陶瓷网
                    </p>
                </div>
            </div>
        </div>
    );
}
