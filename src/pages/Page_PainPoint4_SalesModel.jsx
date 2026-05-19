import React from 'react';

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-6 lg:p-10 xl:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-10 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-6">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">04</span>
                    </div>
                    <h1 className="text-4xl lg:text-[44px] font-black text-white tracking-widest mb-6 leading-tight">
                        销售模式大多是经销商体系，易造成价格不一、信息错乱
                    </h1>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-5xl tracking-wide">
                        建陶是典型的 <strong className="text-white">F2B2C（工厂-经销商-顾客）</strong> 模式，由于各地门店租金、运营成本和包工包料方式不同，<strong className="text-white">同款瓷砖在网上的报价可能相差一倍。</strong>
                    </p>
                </div>

                {/* Main Content: Clean Typography Layout */}
                <div className="flex-1 flex flex-col min-h-0 pb-16 justify-center">

                    <div className="border-l-4 border-[#004CE5]/60 pl-8 lg:pl-10 max-w-5xl -translate-y-[10px]">
                        <p className="text-zinc-400 text-[1.6rem] lg:text-[2rem] leading-[1.8] tracking-wide font-light">
                            对于生成式 AI 来说，<strong className="text-[#004CE5] font-medium">“幻觉”永远是一个最大的通病。</strong>如果它抓取到 A 网页说 100元，B 网页说 250元，AI 在生成答案时就会陷入混乱，<strong className="text-white font-medium">最终给出一个模糊的甚至错误的答案。</strong>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
