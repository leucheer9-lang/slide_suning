import React from 'react';

export default function Page_GeoReport_BasicInfo2() {
    const metrics = [
        {
            title: "执行天数",
            value: "1",
            unit: "天",
            color: "from-blue-500 to-blue-800",
            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
            stroke: "text-blue-400",
            sub: "优化词为主体 · 监测词跟踪舆情"
        },
        {
            title: "监测词条",
            value: "90",
            unit: "个",
            color: "from-indigo-500 to-indigo-800",
            icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
            stroke: "text-indigo-400",
            sub: "优化词: 25+25 | 监测词: 20+20"
        },
        {
            title: "覆盖平台",
            value: "2",
            unit: "个",
            color: "from-purple-500 to-purple-800",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
            stroke: "text-purple-400",
            sub: "DeepSeek / 豆包"
        },
        {
            title: "总查询",
            value: "180",
            unit: "次",
            color: "from-cyan-500 to-cyan-800",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            stroke: "text-cyan-400",
            sub: "优化词: 100 | 监测词: 80"
        },
        {
            title: "引用来源",
            value: "1,527",
            unit: "次",
            color: "from-teal-500 to-teal-800",
            icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z",
            stroke: "text-teal-400",
            sub: "C 端: 718 | B 端: 809"
        },
        {
            title: "识别竞品",
            value: "175",
            unit: "家",
            color: "from-rose-500 to-rose-800",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            stroke: "text-rose-400",
            sub: "B 端口径 · C 端 166 家 · 对标新桥东"
        },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-12 sm:px-16 pt-5 pb-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
            <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none mb-3">监测范围</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    以 50 条优化词（C 端 25 + B 端 25）为分析主体，另设 40 条监测词跟踪品牌舆情
                </p>
            </div>

            <div className="flex-1 w-full pb-16 relative z-10 flex items-center justify-center min-h-0 pt-[20px]">
                <div className="grid grid-cols-3 gap-8 xl:gap-10 w-full">
                    {metrics.map((m, idx) => (
                        <div key={idx} className="bg-[#111] border border-white/10 rounded-3xl p-6 xl:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex flex-col relative overflow-hidden group hover:border-white/30 transition-all duration-500 hover:-translate-y-2">
                            {/* Radial background glow */}
                            <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${m.color} rounded-full blur-[70px] opacity-10 group-hover:opacity-40 transition-opacity duration-500`}></div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-white/10 transition-colors`}>
                                    <svg className={`w-7 h-7 ${m.stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                                    </svg>
                                </div>
                                <span className="text-[1.35rem] font-bold text-zinc-300 tracking-wider group-hover:text-white transition-colors">{m.title}</span>
                            </div>

                            <div className="flex items-baseline gap-3 mt-auto mb-2">
                                <span className="text-6xl xl:text-[4.5rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 group-hover:to-zinc-200 transition-all">{m.value}</span>
                                <span className="text-[1.4rem] font-bold text-zinc-500 mb-2 tracking-widest">{m.unit}</span>
                            </div>

                            <div className="text-zinc-400 text-sm xl:text-base font-medium tracking-wide mt-2 border-t border-white/5 pt-2">
                                {m.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
