import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-8 lg:p-12 xl:p-16">
            {/* Header */}
            <div className="w-full max-w-[1600px] mx-auto mb-10 lg:mb-12 relative z-10 flex flex-col items-start pt-4 lg:pt-6 shrink-0">
                <h1
                    className="text-5xl lg:text-6xl xl:text-[72px] font-black text-white tracking-tight mb-2"
                    style={{ lineHeight: '1.3' }}
                >
                    平台核心<br />能力壁垒
                </h1>
            </div>

            {/* Cards Grid */}
            <div className="flex-1 w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch min-h-0 pb-10">

                {/* Card 1 */}
                <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/50 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">01</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        全渠道<br />全场景网络
                    </h3>
                    <p className="text-zinc-400 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        线上 APP / PC + 线下万余门店，构建<strong className="text-white">「线上+线下、城市+农村、自营+加盟」</strong>多触点网络，覆盖从核心城市到县镇市场的全场景零售触达。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-[#0033aa] to-[#001144] border border-blue-400/20 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,50,200,0.15)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/60 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">02</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        供应链 + 即时服务<br />（两翼）
                    </h3>
                    <p className="text-blue-100/70 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        <strong className="text-white">JSAV 专供商品</strong>强化选品与毛利；履约侧以<strong className="text-white">「2 小时即送即装、送新拖旧一体」</strong>与自有物流，形成家电零售差异化服务壁垒。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/20 group-hover:text-white/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-[#004CE5] to-[#002288] border border-blue-400/30 rounded-[2rem] p-8 lg:p-10 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_50px_rgba(0,76,229,0.2)] overflow-hidden">
                    <div className="text-6xl lg:text-7xl text-white/80 tracking-tighter mb-6 lg:mb-8 font-['AlimamaShuHeiTi']">03</div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 tracking-wide leading-snug">
                        AI 技术<br />与数字化
                    </h3>
                    <p className="text-blue-100/80 text-[1.2rem] lg:text-[1.25rem] leading-relaxed flex-1 text-justify">
                        垂域大模型<strong className="text-white">「灵思」</strong>赋能采、管、运、销全流程，驱动门店数字化转型与供应链效率提升，支撑「智慧生活服务商」战略升级。
                    </p>
                    <div className="absolute bottom-8 right-8 text-white/30 group-hover:text-white/80 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
