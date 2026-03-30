import React from 'react';

export default function Page_CoreSellingPainPoints() {
    const sellingData = [
        {
            dimension: "全隐美学",
            desc: "首创隐形油烟机 & 0 缝全隐安装",
            performance: "采用航空级折叠结构，不工作时机身光学隐身；330mm 超薄机身适配主流橱柜，实现厨居一体化无界美学。"
        },
        {
            dimension: "智慧控烟",
            desc: "AI 全域净吸科技 & AI 温感监测",
            performance: "“十四五”国家课题成果应用；内置云腾智驱引擎，毫秒级预判油烟量并自动调档，实现油烟源头阻断。"
        },
        {
            dimension: "智感守护",
            desc: "全球首款哨兵灶 & 人感雷达科技",
            performance: "4D 毫米波雷达 360° 监控；人离灶即开启定时看护，长时未归自动关火，全时段筑牢厨房明火安全防线。"
        },
        {
            dimension: "全效净化",
            desc: "24 小时哨兵监控 & 智感净味技术",
            performance: "主动监测并快速净化甲醛、一氧化碳等 9 种有害气体；有效预防老旧社区燃气微泄漏隐患，保障空间持久清新。"
        },
        {
            dimension: "舒适静音",
            desc: "全路径仿生降噪科技",
            performance: "行业首例仿生鹦鹉螺畅吸风道，从源头消减噪音；打造图书馆级静音环境，完美适配开放式厨房的社交互动需求。"
        },
        {
            dimension: "一体智联",
            desc: "烟灶蒸烤一体智联科技",
            performance: "打破设备孤岛，灶具启动烟机自动感应；烹饪结束自动增压排气，防止蒸汽扑面，实现全流程无感智能体验。"
        }
    ];

    const painData = [
        {
            rank: "1",
            pain: "安装环境的高适配性要求",
            challenge: "虽然主打“0缝全隐”和适配多种橱柜，但对于老旧厨房改建，需面临不平整墙面、老旧吊柜规格及烟道改造的复杂性。若施工精度或预留空间不足，可能导致“隐形”效果大打折扣或产生安装溢价。"
        },
        {
            rank: "2",
            pain: "精密航天结构的长期可靠性",
            challenge: "行业首创的“航空级折叠升降结构”虽通过5万次寿命测试，但这种精密机械结构在厨房重油烟环境下，其长期运行的顺畅度及5-10年后的机械维护成本，是高端用户在享受科技便利时的潜在焦虑。"
        },
        {
            rank: "3",
            pain: "高端AI功能的价值感知门槛",
            challenge: "“AI温感监测”和“人感雷达”的价值主要体现在重油烟爆炒或家里有老人等特定高危场景下。对于不常爆炒或饮食极其简单的用户，可能会觉得这些为了“极致安全”和“无感智能”支付的专利溢价过高。"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-6 min-h-0 container mx-auto mt-4 gap-6 overflow-hidden">
                {/* Table 1: 核心卖点 */}
                <div className="w-full max-w-[1500px] flex-[1.4] flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">核心卖点</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             全面打造“隐无界、智无感、净无忧”的全维厨居生态体验。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[1.5fr_2fr] xl:grid-cols-[1.5fr_2fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心卖点描述</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">2026 年实战表现</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {sellingData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.5fr_2fr] xl:grid-cols-[1.5fr_2fr] group ${idx !== sellingData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-2 px-4 sm:px-5 flex items-center text-white/90 font-bold text-[1.1rem]">
                                        {item.desc}
                                    </div>
                                    <div className="py-2 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[1.05rem] pr-6">
                                        {item.performance.split('；').map((segment, i, arr) => (
                                            <React.Fragment key={i}>
                                                {segment}{i < arr.length - 1 ? '；' : ''}
                                                {i === 0 && <br/>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table 2: 核心痛点 */}
                <div className="w-full max-w-[1500px] flex-1 flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-[1]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">核心痛点</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             用户与市场的真实挑战（针对方太高端系列）。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_2.5fr] xl:grid-cols-[1fr_2.5fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-2.5 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心痛点</div>
                        <div className="py-2.5 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">用户与市场的真实挑战</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {painData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1fr_2.5fr] xl:grid-cols-[1fr_2.5fr] group ${idx !== painData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-2 px-4 sm:px-5 flex items-center text-white/90 font-bold text-[1.12rem]">
                                        {item.pain}
                                    </div>
                                    <div className="py-2 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-snug font-medium text-[1.05rem] pr-6">
                                        {item.challenge}
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
