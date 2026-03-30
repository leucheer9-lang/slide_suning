import React from 'react';

export default function Page_TargetUser() {
    const motiveData = [
        {
            weight: "1",
            motive: "极致原鲜食材的品质坚守",
            subtext: "“我买的高端和牛和有机蔬菜，绝不能因为解冻流血水或氧化而浪费了口感。”",
            trigger: "三大原鲜突破：氮气保鲜、原鲜解冻、新风净味。"
        },
        {
            weight: "2",
            motive: "厨居一体化的审美强迫症",
            subtext: "“我无法忍受冰箱凸出橱柜一截，或者两侧留出难看的‘黑缝’，我要绝对的平齐。”",
            trigger: "全新一代平嵌科技：575mm 纤薄机身、0mm 无缝嵌入、800mm 齐平腰线。"
        },
        {
            weight: "3",
            motive: "家庭成员的健康防护焦虑",
            subtext: "“冰箱里生熟混放太容易滋生细菌和串味，给孩子和老人吃的必须是绝对干净的。”",
            trigger: "Air Circle Pro 新风净味：高能离子除菌、铂金催化净味、24h 新风循环。"
        }
    ];

    const scenarioData = [
        {
            category: "高端烹饪前置",
            description: "精致食客的无损备餐：周五晚准备煎一份顶级和牛，无需提前半天拿出来自然化冻，直接放入原鲜解冻舱，4小时速解至 -3°C 微冻，即切即烹，汁水不流失。",
            touchpoint: "“唤醒本味”：Air Refresh 科技让食材状态无缝衔接烹饪，不减鲜美。"
        },
        {
            category: "新家装修交付",
            description: "开放式厨房的一体全嵌：新房装修选择现代极简风格，冰箱完全“消隐”在 580mm 深度的标准橱柜中，两侧无缝贴合不积灰，腰线与台面连贯统一。",
            touchpoint: "“隐奢美学”：Arman Emami 大师设计，用毫米级工艺解决装修“翻车”痛点。"
        },
        {
            category: "长效囤货周期",
            description: "忙碌家庭的周度驻鲜：周末超市大采购后，将易氧化的绿叶菜和珍稀水果存入氮气保鲜舱，通过高氮低氧抑制呼吸作用，即便到下周五依然翠绿如初。",
            touchpoint: "“定格初见”：Air Control 远洋级技术实现长效锁鲜，168小时维C保有率 >91%。"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-6 min-h-0 container mx-auto mt-4 gap-6 overflow-hidden">
                {/* Table 1: 购买动机 */}
                <div className="w-full max-w-[1500px] h-fit flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-[1]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">购买动机</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             核心洞察：追求前沿科技背书与美学极致体验的叠加融合。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_1.2fr_1.8fr_1fr] xl:grid-cols-[100px_1.2fr_1.8fr_1fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider text-center">权重</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心动机</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">心理潜台词</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">关键触发功能</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full z-0 overflow-hidden">
                        <div className="flex flex-col">
                            {motiveData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[80px_1.2fr_1.8fr_1fr] xl:grid-cols-[100px_1.2fr_1.8fr_1fr] group ${idx !== motiveData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full`}>
                                    <div className="py-4 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-blue-400 text-[1.4rem] leading-snug whitespace-nowrap">{item.weight}</div>
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-white/90 font-bold text-[1.1rem]">
                                        {item.motive}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 text-blue-200/90 leading-relaxed italic text-[1rem]">
                                        {item.subtext}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[1rem]">
                                        {item.trigger}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table 2: 使用场景画像 */}
                <div className="w-full max-w-[1500px] flex-1 flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-[1]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">使用场景画像</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             核心触达：通过构建真实的生活痛点场景，精准传递产品的革新技术红利。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[200px_2fr_1fr] xl:grid-cols-[220px_2fr_1fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider text-center">分类</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">场景画像深度描述</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心触动点</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {scenarioData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[200px_2fr_1fr] xl:grid-cols-[220px_2fr_1fr] group ${idx !== scenarioData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-4 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-blue-300 text-[1.1rem] leading-snug whitespace-nowrap">{item.category}</div>
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[1.05rem]">
                                        {item.description}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-[#004CE5] font-bold leading-relaxed text-[1.05rem]">
                                        {item.touchpoint}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
