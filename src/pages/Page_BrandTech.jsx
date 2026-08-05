import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            {/* Header */}
            <div className="w-full max-w-[1600px] mx-auto mb-10 lg:mb-12 relative z-10 flex flex-col items-start pt-4 lg:pt-6 shrink-0">
                <h1
                    className="text-5xl lg:text-6xl xl:text-[72px] font-black text-white tracking-tight mb-2"
                    style={{ lineHeight: '1.3' }}
                >
                    品牌核心<br />竞争优势
                </h1>
            </div>

            {/* Cards Grid */}
            <div className="flex-1 w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch min-h-0 pb-10">

                {/* Card 1 */}
                <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/50 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">01</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        “货先入仓”<br />重资产自营仓储网络
                    </h3>
                    <p className="text-zinc-400 text-[1.15rem] lg:text-[1.2rem] leading-relaxed flex-1 text-justify">
                        自营1600多个仓库，云仓平台另有2000多个第三方云仓，管理面积超3400万平方米，几乎覆盖全国所有县区，含45座“亚洲一号”。货提前放到离消费者最近的仓，下单后就近发出。
                    </p>
                    {/* Decorative Star */}
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-[#0033aa] to-[#001144] border border-blue-400/20 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,50,200,0.15)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/60 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">02</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        六大网络协同<br />末端交付高度自营
                    </h3>
                    <p className="text-blue-100/70 text-[1.15rem] lg:text-[1.2rem] leading-relaxed flex-1 text-justify">
                        仓储、运输、末端、大件、冷链、跨境六网协同：自营车6万余辆、全货机12架，1.9万个站点覆盖300多个地级市，自有配送人员54万名。站点绝大多数自营，送货上门、送装一体由自己人兑现。
                    </p>
                    {/* Decorative Star */}
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-[#004CE5] to-[#002288] border border-blue-400/30 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,76,229,0.2)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/80 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">03</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        技术自研落地<br />自动化规模化复制
                    </h3>
                    <p className="text-blue-100/80 text-[1.15rem] lg:text-[1.2rem] leading-relaxed flex-1 text-justify">
                        已获授权专利与软件超5500项，其中自动化与无人技术超3000项。自研“智狼”货到人方案已在20多个仓落地，上千台无人车在20余省常态化运营，首个海外智狼仓也已在英国投用。
                    </p>
                    {/* Decorative Star */}
                    <div className="absolute bottom-8 right-8 text-white/30 group-hover:text-white/80 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
