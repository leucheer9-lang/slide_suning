import React from 'react';

const scenes = [
    {
        scene: '防刺服 / 防割手套哪个好？',
        ai: '中天锋、安思尔',
        status: '产品已在售并过警标，十大品牌榜里一次没出现',
    },
    {
        scene: '国产纳米材料公司有哪些？',
        ai: '德方纳米',
        status: '官网主打高性能纳米材料，推荐名单里完全没有',
    },
    {
        scene: '机器人防护材料找谁？',
        ai: '恒辉安防',
        status: '恒辉已公告商品化交付，太力还在客户验证阶段',
    },
    {
        scene: '航天材料供应商有哪些？',
        ai: '西部材料',
        status: '独家供应资格在手，却被归进轻工制造捞不出来',
    },
];

const gaps = [
    { title: '航天独家供应资格', desc: '连续 16 年保障载人航天任务，却没有一份航天材料名单提到过它' },
    { title: '纳米粒子自主合成', desc: '公司称单位成本降 90% 以上、打破进口垄断，只有一份券商研报写过' },
    { title: '检测已过警标美标', desc: '防刺通过警标 A 类与美标防刀、防锥测试，官网没有参数页承接' },
    { title: '国际零售供应链在手', desc: '宜家指定材料、三大零售商吸盘唯一供应商，公开内容几乎不提' },
];

export default function Page_PainPoint2_Industry() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full min-h-0 relative z-10">
                <div className="shrink-0 mb-2.5">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-1.5 mb-2">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">03</span>
                    </div>
                    <h1 className="text-[32px] lg:text-[36px] font-black text-white tracking-wide mb-1.5 leading-tight whitespace-nowrap">
                        头部问题占位：四类推荐名单里，太力全部缺席
                    </h1>
                    <p className="text-zinc-400 text-[20px] leading-snug tracking-wide text-justify [text-justify:inter-ideograph]">
                        决定新定位能不能立住的赛场就是这四个问题。太力在其中两项上有别人没有的履历，却一份名单都没进——因为它被行业分类归入轻工制造，任何新材料、航天、机器人的筛选器都捞不到它。
                    </p>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-2 gap-5 pb-2.5">
                    <div className="min-h-0 bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] px-10 py-5 flex flex-col">
                        <div className="text-zinc-200 font-bold text-[20px] mb-2.5 tracking-wider flex items-center gap-2 shrink-0">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                            四类头部问题里的声量格局
                        </div>
                        <div className="flex-1 min-h-0 grid grid-rows-[auto_repeat(4,minmax(0,1fr))] border border-white/5 rounded-xl overflow-hidden bg-black/40">
                            <div className="grid grid-cols-[1.15fr_0.85fr_1.2fr] bg-white/5 border-b border-white/10 text-zinc-400 font-semibold tracking-wide text-[16px]">
                                <div className="py-2 px-4 border-r border-white/5">决策场景</div>
                                <div className="py-2 px-4 text-center border-r border-white/5">AI 默认倾向</div>
                                <div className="py-2 px-4">太力处境</div>
                            </div>
                            {scenes.map((row, idx) => (
                                <div
                                    key={row.scene}
                                    className={`grid grid-cols-[1.15fr_0.85fr_1.2fr] min-h-0 items-center ${
                                        idx < scenes.length - 1 ? 'border-b border-white/5' : ''
                                    } ${idx % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                                >
                                    <div className="px-4 py-2 text-[18px] text-zinc-200 border-r border-white/5 font-semibold leading-snug">
                                        {row.scene}
                                    </div>
                                    <div className="px-4 py-2 text-center border-r border-white/5 text-[#004CE5] font-black text-[20px] tracking-wider leading-snug">
                                        {row.ai}
                                    </div>
                                    <div className="px-4 py-2 text-zinc-400 text-[18px] leading-snug">
                                        {row.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-0 bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] px-10 py-5 flex flex-col">
                        <div className="text-zinc-200 font-bold text-[20px] mb-2.5 tracking-wider flex items-center gap-2 shrink-0">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                            太力真实优势 vs AI 声量缺口
                        </div>
                        <div className="flex-1 min-h-0 grid grid-rows-4 gap-2.5">
                            {gaps.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="min-h-0 bg-black/40 border border-white/10 rounded-xl px-6 flex items-center gap-4"
                                >
                                    <div className="text-[#004CE5] font-black text-[22px] shrink-0 w-8">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-white font-bold text-[20px] tracking-wide leading-tight mb-0.5">
                                            {item.title}
                                        </div>
                                        <div className="text-zinc-400 text-[18px] leading-snug">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl px-6 py-3.5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-[16px] font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-[20px] font-bold leading-snug text-justify [text-justify:inter-ideograph] flex-1">
                        不去硬拼「国产纳米材料龙头」这类总词。先把最有实据的两条打进名单——航天真空封装与防刺割检测，用可核查的参数和认证编号占位，再往机器人防护和新能源材料延伸。
                    </p>
                </div>
            </div>
        </div>
    );
}
