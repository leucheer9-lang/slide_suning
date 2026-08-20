import React from 'react';

const C = {
    core: '#004CE5',
    coreText: '#8CB1FF',
    region: '#3E6FB8',
    regionText: '#A8C4E8',
    guard: '#8FA9C9',
    guardText: '#CBDCF0',
};

const ROWS = [
    {
        layer: '锁定主力',
        name: '线下体验与履约',
        punch: '看实物 · 送装一体 · 送新拖旧',
        accent: C.core,
        text: C.coreText,
        chips: ['买大家电想线下看实物用哪个平台', '大家电送装一体用什么平台好', '以旧换新免费上门拆旧用什么平台'],
        goal: '拿下首推',
        goalNote: '不硬拼综合大词',
    },
    {
        layer: '截流铺垫',
        name: '下沉 · 家装 · 套购',
        punch: '对着汇通达、居然之家、三翼鸟先占位',
        accent: C.region,
        text: C.regionText,
        chips: ['县城买大家电用什么平台好', '搬新家买大家电选哪个平台', '一次性买齐大家电用什么平台'],
        goal: '截流点先铺',
        goalNote: '流量被截走之前',
    },
    {
        layer: '扬长避短',
        name: '横评对照',
        punch: '扬履约有店，避速度低价',
        accent: C.guard,
        text: C.guardText,
        chips: ['苏宁和京东买家电哪个好', '有实体店买家电的平台推荐', '线上线下都能买大家电选哪个平台'],
        goal: '短板不进答案',
        goalNote: '负面率 ≤ 10%',
    },
];

function Chip({ children, accent }) {
    return (
        <span
            className="inline-flex items-center rounded-lg px-4 py-2 text-[22px] font-semibold text-zinc-100 leading-tight whitespace-nowrap"
            style={{ border: `1.5px solid ${accent}66`, background: `${accent}14` }}
        >
            {children}
        </span>
    );
}

export default function Page_GeoCoreStrategy() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-14 pt-2 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1740px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">

                <div className="text-center shrink-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-none">
                        核心优化策略
                    </h1>
                    <p className="text-[20px] text-zinc-400 mt-2 leading-none">
                        先锁能赢的主力词，再铺截流点，横评只扬长不露短
                    </p>
                </div>

                <div className="flex-1 min-h-0 flex items-stretch gap-8">

                    <div className="w-[30%] shrink-0 relative">
                        <svg viewBox="0 0 660 760" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id="cs-dome" x1="330" y1="70" x2="330" y2="710" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#8FA9C9" stopOpacity="0.20" />
                                    <stop offset="100%" stopColor="#8FA9C9" stopOpacity="0.02" />
                                </linearGradient>
                                <linearGradient id="cs-region" x1="330" y1="190" x2="330" y2="450" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#3E6FB8" stopOpacity="0.95" />
                                    <stop offset="100%" stopColor="#3E6FB8" stopOpacity="0.45" />
                                </linearGradient>
                                <linearGradient id="cs-core" x1="330" y1="462" x2="330" y2="690" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#004CE5" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#1E6BFF" stopOpacity="0.55" />
                                </linearGradient>
                            </defs>
                            <path d="M 10 710 A 320 640 0 0 1 650 710 Z" fill="url(#cs-dome)" />
                            <path
                                d="M 10 710 A 320 640 0 0 1 650 710"
                                fill="none"
                                stroke="#8FA9C9"
                                strokeWidth="2.5"
                                strokeDasharray="8 8"
                                opacity="0.75"
                            />
                            <path d="M 330 190 L 480 450 L 180 450 Z" fill="url(#cs-region)" stroke="#5C8ACC" strokeWidth="2" />
                            <path d="M 180 462 L 480 462 L 610 690 L 50 690 Z" fill="url(#cs-core)" stroke="#1E6BFF" strokeWidth="2" />
                        </svg>

                        <div className="absolute inset-0 pointer-events-none">
                            {[
                                { top: '22%', name: '扬长避短', color: C.guardText, size: 36 },
                                { top: '46%', name: '截流铺垫', color: '#DCE9FA', size: 36 },
                                { top: '74%', name: '锁定主力', color: '#FFFFFF', size: 36 },
                            ].map((it) => (
                                <div
                                    key={it.name}
                                    className="absolute w-full flex justify-center"
                                    style={{ top: it.top }}
                                >
                                    <span
                                        className="font-black leading-none tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                                        style={{ color: it.color, fontSize: `${it.size}px` }}
                                    >
                                        {it.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col">
                        <div className="grid grid-cols-[1.05fr_1fr_220px] gap-x-6 pb-3 border-b-2 border-white/25 shrink-0">
                            <span className="text-[18px] font-bold text-zinc-400 tracking-widest">策略层</span>
                            <span className="text-[18px] font-bold text-zinc-400 tracking-widest">示例词条</span>
                            <span className="text-[18px] font-bold text-zinc-400 tracking-widest">优化目标</span>
                        </div>

                        <div className="flex-1 min-h-0 flex flex-col">
                            {ROWS.map((row, i) => (
                                <div
                                    key={row.name}
                                    className={`flex-1 min-h-0 grid grid-cols-[1.05fr_1fr_220px] gap-x-6 items-center ${
                                        i < ROWS.length - 1 ? 'border-b border-white/10' : ''
                                    }`}
                                >
                                    <div
                                        className="min-w-0 flex flex-col justify-center gap-2.5 pl-4"
                                        style={{ borderLeft: `5px solid ${row.accent}` }}
                                    >
                                        <span className="text-[16px] font-black tracking-[0.28em]" style={{ color: row.text }}>
                                            {row.layer}
                                        </span>
                                        <span className="text-[30px] font-black text-white leading-none">{row.name}</span>
                                        <span className="text-[20px] text-zinc-400 leading-snug">{row.punch}</span>
                                    </div>

                                    <div className="min-w-0 flex flex-col items-start gap-2.5">
                                        {row.chips.map((c) => (
                                            <Chip key={c} accent={row.accent}>
                                                {c}
                                            </Chip>
                                        ))}
                                    </div>

                                    <div className="min-w-0">
                                        <div className="text-[30px] font-black leading-none" style={{ color: row.text }}>
                                            {row.goal}
                                        </div>
                                        <div className="text-[20px] text-zinc-400 leading-snug mt-2">{row.goalNote}</div>
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
