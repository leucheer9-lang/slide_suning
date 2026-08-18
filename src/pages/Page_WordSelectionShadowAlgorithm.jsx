import React from 'react';

/**
 * 影子算法：用自建的模拟层，把 AI「前面搜到了什么」还原出来。
 * 左侧三步说明，右侧三层立体模型——
 *   底层 影子算法模拟层（品类词 × 意图修饰词 交叉穷举）
 *   中层 前置搜索检索层（AI 真正读到的信源）
 *   顶层 AI 最终推荐层（客户看到的那句答案）
 */

const STEPS = [
    {
        no: '1',
        title: '穷举与拆解大问题',
        desc: 'AI 会把一个选址问题拆分、补全成若干个具体问法',
        badge: 'bg-zinc-800 text-white',
    },
    {
        no: '2',
        title: '模拟搜索引擎',
        desc: '不同模型调用不同的搜索引擎与索引逻辑，我们逐个复现',
        badge: 'bg-[#004CE5]/30 text-[#7FA6FF] border border-[#004CE5]/60',
    },
    {
        no: '3',
        title: '清洗词条',
        desc: '找出 AI 背后最常拆、最常搜的那批词条，作为优化词候选',
        badge: 'bg-teal-900/60 text-teal-300 border border-teal-700',
    },
];

// 纵轴：意图修饰词；横轴：区域与品类词
const Y_AXIS = ['排行', '推荐', '租金', '政策', '怎么选'];
const X_AXIS = ['产业园', '宝安园区', '高端园区', '工业上楼', '研发办公'];

const LEGEND = [
    { label: 'AI 最终推荐层', color: '#2DD4BF' },
    { label: '前置搜索检索层', color: '#4D7FFF' },
    { label: '影子算法模拟层', color: '#A1A1AA' },
];

export default function Page_WordSelectionShadowAlgorithm() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    影子算法
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col min-h-0">
                <p className="shrink-0 text-[24px] text-zinc-300 leading-snug mb-4">
                    模型推荐谁、引用谁、相信谁，很大程度上取决于它
                    <strong className="text-white font-bold">前面搜到了什么内容</strong>
                    。影子算法就是把这一层还原出来。
                </p>

                <div className="flex-1 min-h-0 flex items-stretch gap-8">
                    {/* 左：三步说明 */}
                    <div className="w-[520px] shrink-0 flex flex-col justify-center gap-5">
                        {STEPS.map((s) => (
                            <div
                                key={s.no}
                                className="bg-zinc-900/40 border border-white/10 rounded-2xl px-6 py-5 flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`w-11 h-11 rounded-full text-[20px] font-bold flex items-center justify-center shrink-0 ${s.badge}`}
                                    >
                                        {s.no}
                                    </span>
                                    <h4 className="text-[24px] font-bold text-white leading-tight">{s.title}</h4>
                                </div>
                                <p className="text-[18px] text-zinc-400 leading-relaxed pl-[60px]">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 右：三层立体模型 */}
                    <div className="flex-1 relative flex items-center justify-center min-w-0">
                        <div
                            className="relative"
                            style={{
                                width: '620px',
                                height: '470px',
                                perspective: '1500px',
                                transformStyle: 'preserve-3d',
                                marginLeft: '-90px',
                                marginTop: '10px',
                            }}
                        >
                            <div
                                className="absolute w-full h-full"
                                style={{
                                    transform: 'rotateX(55deg) rotateZ(-40deg)',
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* 底层：影子算法模拟层 */}
                                <div
                                    className="absolute inset-0 border-2 border-zinc-500 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
                                    style={{
                                        transform: 'translateZ(0px)',
                                        transformStyle: 'preserve-3d',
                                        background: 'rgba(24, 24, 27, 0.85)',
                                        backgroundImage:
                                            'linear-gradient(to right, rgba(255,255,255,0.15) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
                                        backgroundSize: '100px 100px',
                                    }}
                                >
                                    <div
                                        className="absolute bg-zinc-800/90 border-2 border-zinc-400 rounded flex flex-col items-center justify-center shadow-lg"
                                        style={{ left: '200px', top: '200px', width: '100px', height: '100px' }}
                                    >
                                        <span className="text-zinc-100 text-[16px] font-bold text-center leading-tight">
                                            词条交叉
                                            <br />
                                            组合点
                                        </span>
                                    </div>

                                    {Y_AXIS.map((label, i) => (
                                        <div
                                            key={label}
                                            className="absolute -left-24 text-zinc-400 font-bold text-[17px] leading-none whitespace-nowrap"
                                            style={{ top: `${35 + i * 100}px` }}
                                        >
                                            {label}
                                        </div>
                                    ))}

                                    {X_AXIS.map((label, i) => (
                                        <div
                                            key={label}
                                            className="absolute -bottom-10 text-zinc-400 font-bold text-[16px] leading-none whitespace-nowrap"
                                            style={{ left: `${22 + i * 100}px` }}
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>

                                {/* 中层：前置搜索检索层 */}
                                <div
                                    className="absolute inset-0 border-2 rounded-2xl"
                                    style={{
                                        transform: 'translateZ(130px)',
                                        transformStyle: 'preserve-3d',
                                        borderColor: '#4D7FFF',
                                        background: 'rgba(0, 76, 229, 0.25)',
                                        backgroundImage:
                                            'linear-gradient(to right, rgba(77,127,255,0.22) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(77,127,255,0.22) 1.5px, transparent 1.5px)',
                                        backgroundSize: '100px 100px',
                                        boxShadow: '0 20px 50px rgba(0,76,229,0.2)',
                                    }}
                                >
                                    <div
                                        className="absolute rounded flex items-center justify-center shadow-lg"
                                        style={{
                                            left: '200px',
                                            top: '200px',
                                            width: '200px',
                                            height: '100px',
                                            background: 'rgba(3, 14, 46, 0.9)',
                                            border: '2px solid #7FA6FF',
                                        }}
                                    >
                                        <span className="text-[#9CBBFF] text-[18px] font-bold tracking-wider text-center px-3">
                                            AI 搜索引用信源
                                        </span>
                                    </div>
                                </div>

                                {/* 顶层：AI 最终推荐层 */}
                                <div
                                    className="absolute inset-0 border-2 border-teal-400 rounded-2xl shadow-[0_25px_60px_rgba(20,184,166,0.22)]"
                                    style={{
                                        transform: 'translateZ(260px)',
                                        transformStyle: 'preserve-3d',
                                        background: 'rgba(13, 148, 136, 0.6)',
                                        backgroundImage:
                                            'linear-gradient(to right, rgba(20,184,166,0.3) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(20,184,166,0.3) 1.5px, transparent 1.5px)',
                                        backgroundSize: '100px 100px',
                                    }}
                                >
                                    <div
                                        className="absolute bg-teal-950/90 border-2 border-teal-300 rounded flex items-center justify-center shadow-xl"
                                        style={{ left: '100px', top: '100px', width: '200px', height: '100px' }}
                                    >
                                        <span className="text-teal-300 text-[18px] font-bold tracking-wider text-center px-3">
                                            核心推荐结果
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 图层说明（自上而下对应三层） */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-30 select-none">
                            {LEGEND.map((l) => (
                                <div key={l.label} className="flex items-center gap-3">
                                    <span
                                        className="w-4 h-4 rounded-sm shrink-0"
                                        style={{ background: l.color }}
                                    />
                                    <span
                                        className="text-[22px] font-black leading-none whitespace-nowrap"
                                        style={{ color: l.color }}
                                    >
                                        {l.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
