import React from 'react';

// 同一色相的蓝，靠饱和度区分层级：越核心越饱和
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
        layer: '主力盘',
        name: '线下体验与履约词',
        note: '苏宁的差异化在门店和履约，主力词压在这里',
        accent: C.core,
        text: C.coreText,
        chips: ['买大家电想线下看实物用哪个平台', '大家电送装一体用什么平台好', '以旧换新免费上门拆旧用什么平台'],
        goal: '拿下首推位',
        goalNote: '优势场景不让给京东、国美',
    },
    {
        layer: '区域铺垫',
        name: '下沉市场词',
        note: '线上相关的词，按县域与三四线城市做区域性铺垫',
        accent: C.region,
        text: C.regionText,
        chips: ['县城买大家电用什么平台好', '三四线城市买家电用什么平台好', '帮父母买大家电用什么平台'],
        goal: '低线区域全覆盖',
        goalNote: '县域问法逐个铺到，不留空白',
    },
    {
        layer: '攻防罩',
        name: '监测词',
        note: '被拿去和京东、国美横评时的防线',
        accent: C.guard,
        text: C.guardText,
        chips: ['苏宁和京东买家电哪个好', '苏宁国美买家电哪个售后好', '在苏宁买家电靠谱吗'],
        goal: '扬长避短',
        goalNote: '短板不进答案，负面率压在 10% 以内',
    },
];

function Chip({ children, accent }) {
    return (
        <span
            className="inline-flex items-center rounded-lg px-4 py-2 text-[23px] font-semibold text-zinc-100 leading-tight whitespace-nowrap"
            style={{ border: `1.5px solid ${accent}66`, background: `${accent}14` }}
        >
            {children}
        </span>
    );
}

export default function Page_GeoCoreStrategy() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-14 pt-1 pb-3 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1740px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-3">

                <div className="text-center shrink-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        核心优化策略
                    </h1>
                    <p className="text-[20px] text-zinc-400 mt-1 leading-snug">
                        以线下词为主力，线上词按区域铺垫，对比横评上扬长避短
                    </p>
                </div>

                <div className="flex-1 min-h-0 flex items-stretch gap-6">

                    {/* ── 左：三层结构示意 ── */}
                    <div className="w-[34%] shrink-0 relative">
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

                            {/* 攻防罩 */}
                            <path d="M 10 710 A 320 640 0 0 1 650 710 Z" fill="url(#cs-dome)" />
                            <path
                                d="M 10 710 A 320 640 0 0 1 650 710"
                                fill="none"
                                stroke="#8FA9C9"
                                strokeWidth="2.5"
                                strokeDasharray="8 8"
                                opacity="0.75"
                            />

                            {/* 区域铺垫 */}
                            <path d="M 330 190 L 480 450 L 180 450 Z" fill="url(#cs-region)" stroke="#5C8ACC" strokeWidth="2" />

                            {/* 主力盘 */}
                            <path d="M 180 462 L 480 462 L 610 690 L 50 690 Z" fill="url(#cs-core)" stroke="#1E6BFF" strokeWidth="2" />
                        </svg>

                        <div className="absolute inset-0 pointer-events-none">
                            {[
                                { top: '13%', label: '攻防罩', name: '监测词', color: C.guardText, size: 34 },
                                { top: '44%', label: '区域铺垫', name: '下沉市场词', color: '#DCE9FA', size: 31 },
                                { top: '72%', label: '主力盘', name: '线下体验与履约词', color: '#FFFFFF', size: 34 },
                            ].map((it) => (
                                <div
                                    key={it.label}
                                    className="absolute w-full flex flex-col items-center"
                                    style={{ top: it.top }}
                                >
                                    <span className="text-[17px] font-black tracking-[0.3em] text-white/55 leading-none mb-2">
                                        {it.label}
                                    </span>
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

                    {/* ── 右：分层词条表 ── */}
                    <div className="flex-1 min-w-0 flex flex-col">
                        <div className="grid grid-cols-[300px_1fr_300px] gap-x-6 pb-2.5 border-b-2 border-white/25 shrink-0">
                            <span className="text-[19px] font-bold text-zinc-400 tracking-widest">词条分层</span>
                            <span className="text-[19px] font-bold text-zinc-400 tracking-widest">示例词条</span>
                            <span className="text-[19px] font-bold text-zinc-400 tracking-widest">优化目标</span>
                        </div>

                        <div className="flex-1 min-h-0 flex flex-col">
                            {ROWS.map((row, i) => (
                                <div
                                    key={row.name}
                                    className={`flex-1 min-h-0 grid grid-cols-[300px_1fr_300px] gap-x-6 items-center py-5 ${
                                        i < ROWS.length - 1 ? 'border-b border-white/10' : ''
                                    }`}
                                >
                                    <div
                                        className="min-w-0 flex flex-col gap-2 pl-4"
                                        style={{ borderLeft: `5px solid ${row.accent}` }}
                                    >
                                        <span className="text-[16px] font-black tracking-[0.25em]" style={{ color: row.text }}>
                                            {row.layer}
                                        </span>
                                        <span className="text-[30px] font-black text-white leading-tight">{row.name}</span>
                                        <span className="text-[19px] text-zinc-500 leading-snug">{row.note}</span>
                                    </div>

                                    <div className="min-w-0 flex flex-col items-start gap-3">
                                        {row.chips.map((c) => (
                                            <Chip key={c} accent={row.accent}>
                                                {c}
                                            </Chip>
                                        ))}
                                    </div>

                                    <div className="min-w-0">
                                        <div className="text-[32px] font-black leading-tight" style={{ color: row.text }}>
                                            {row.goal}
                                        </div>
                                        <div className="text-[20px] text-zinc-400 leading-snug mt-1.5">{row.goalNote}</div>
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
