import React from 'react';
import { Snowflake, Layout, ShieldCheck, Maximize, Zap, Leaf, ShoppingBag, Coffee } from 'lucide-react';

export default function Page_TargetAudience() {
    const motives = [
        { title: "极致保鲜", desc: "解决食材失水风干、口感变差及营养流失痛点；追求精准控温、长效动态保鲜，让绿叶菜和高档食材存放更久。", icon: Snowflake },
        { title: "家居美学", desc: "解决传统冰箱厚重、两侧留缝难看且积灰的痛点；追求超薄平嵌设计，提升厨房整洁感与档次。", icon: Layout },
        { title: "健康除菌", desc: "解决冰箱异味、串味及细菌滋生的担忧；追求主动净味、分区除菌，为母婴或过敏体质家庭提供安全环境。", icon: ShieldCheck },
        { title: "空间管理", desc: "解决囤货需求大但找东西难、冷冻室空间紧促的痛点；追求大容量且科学的分区，提升空间利用率。", icon: Maximize },
        { title: "运行体验", desc: "解决夜晚工作噪音大、耗电高的长期困扰；追求变频压缩机的稳定性、一级能效及低分贝运行，确保生活舒适度。", icon: Zap },
    ];

    const scenarios = [
        { title: "深度日常储鲜", desc: "涵盖每日三餐食材、绿叶蔬菜及剩菜存放。核心驱动力是长效保鲜、不串味及除菌安全。", icon: Leaf },
        { title: "长周期批量囤货", desc: "涵盖周末集中采购、大量冻肉及速冻食品存储。用户极其关心冷冻室的有效容量与冷冻爆发力。", icon: ShoppingBag },
        { title: "生活方式体验", desc: "涵盖冰咖制作、调酒、取用冷饮。用户核心关切在于自动制冰速度、制冰卫生以及取用的便捷性。", icon: Coffee },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-8 min-h-0 container mx-auto mt-2 overflow-hidden">
                {/* Centered Title */}
                <h1 className="text-3xl sm:text-[2.2rem] font-bold text-white tracking-widest text-center mb-5 font-['AlimamaShuHeiTi'] shrink-0">
                    冰箱卖给谁？
                </h1>

                <div className="w-full max-w-[1700px] flex-1 flex items-center justify-between relative mt-8">

                    {/* Left Items (Motives) */}
                    <div className="w-[34%] flex flex-col justify-center gap-6 z-20 h-full pb-16 pt-2 text-right">
                        {motives.map((motive, idx) => {
                            const marginClass = [0, 4].includes(idx) ? 'mr-0' : [1, 3].includes(idx) ? 'mr-12' : 'mr-16';
                            return (
                                <div key={idx} className={`flex flex-col items-end ${marginClass}`}>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h4 className="text-2xl font-bold text-white tracking-wide">{motive.title}</h4>
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center text-zinc-400 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                                            <motive.icon size={28} />
                                        </div>
                                    </div>
                                    <p className="text-lg text-zinc-300 leading-relaxed pr-18 max-w-[34rem]">{motive.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Overlapping Circles */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] flex items-center justify-center pointer-events-none z-10 mt-2">
                        {/* Left Circle */}
                        <div className="absolute left-4 w-60 h-60 rounded-full bg-[#004CE5]/10 border border-[#004CE5]/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,76,229,0.1)] mix-blend-screen -mr-6">
                            <span className="text-3xl font-bold tracking-widest text-blue-100 -ml-12">消费动机</span>
                        </div>
                        {/* Right Circle */}
                        <div className="absolute right-4 w-60 h-60 rounded-full bg-[#004CE5]/10 border border-[#004CE5]/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,76,229,0.1)] mix-blend-screen -ml-6">
                            <span className="text-3xl font-bold tracking-widest text-blue-100 ml-12">场景画像</span>
                        </div>

                        {/* Center intersection styling highlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-[#004CE5]/5 blur-2xl rounded-full mix-blend-plus-lighter"></div>
                    </div>

                    {/* Right Items (Scenarios) */}
                    <div className="w-[34%] flex flex-col justify-center gap-6 z-20 h-full pb-16 pt-2 text-left">
                        {scenarios.map((scenario, idx) => {
                            const marginClass = [0, 2].includes(idx) ? 'ml-0' : 'ml-12';
                            return (
                                <div key={idx} className={`flex flex-col items-start ${marginClass}`}>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center text-zinc-400 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                                            <scenario.icon size={28} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white tracking-wide">{scenario.title}</h4>
                                    </div>
                                    <p className="text-lg text-zinc-300 leading-relaxed pl-18 max-w-[34rem]">{scenario.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>


        </div>
    );
}
