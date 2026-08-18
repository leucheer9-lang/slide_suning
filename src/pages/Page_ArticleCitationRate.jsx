import React from 'react';

/**
 * 高质量文章引用率展示：四个已服务客户的实测数据。
 * 用来回答「你们写的内容到底会不会被 AI 引用」——不依赖创新谷自身数据即可背书。
 */

const PROJECTS = [
    {
        brand: '方太',
        total: 158,
        cited: 74,
        citations: 1922,
        breakdown: [
            { model: '豆包', count: 545 },
            { model: 'Kimi', count: 493 },
            { model: '文心', count: 402 },
            { model: '元宝', count: 87 },
            { model: 'DeepSeek', count: 236 },
            { model: '通义', count: 159 },
        ],
        channelNote: '覆盖渠道：今日头条、搜狐、网易、百家号、太平洋家居网、齐家网等。',
        citedNote: '投放到今日头条、太平洋家居网、齐家网等渠道已顺利通过大模型检索。',
    },
    {
        brand: '慕思床垫',
        total: 140,
        cited: 90,
        citations: 2125,
        breakdown: [
            { model: '豆包', count: 345 },
            { model: 'Kimi', count: 354 },
            { model: '文心', count: 750 },
            { model: '元宝', count: 248 },
            { model: 'DeepSeek', count: 157 },
            { model: '通义', count: 271 },
        ],
    },
    {
        brand: '古井贡酒',
        total: 163,
        cited: 83,
        citations: 2491,
        breakdown: [
            { model: '豆包', count: 769 },
            { model: 'Kimi', count: 770 },
            { model: '文心', count: 642 },
            { model: '元宝', count: 23 },
            { model: 'DeepSeek', count: 287 },
        ],
    },
    {
        brand: '菜鸟快递',
        total: 140,
        cited: 46,
        citations: 1498,
        breakdown: [
            { model: '豆包', count: 1265 },
            { model: 'DeepSeek', count: 101 },
            { model: '通义', count: 132 },
        ],
    },
];

const MODEL_DOT_COLORS = {
    豆包: 'bg-blue-500',
    Kimi: 'bg-emerald-500',
    文心: 'bg-purple-500',
    元宝: 'bg-amber-500',
    DeepSeek: 'bg-teal-600',
    通义: 'bg-teal-400',
};

const DEFAULT_CHANNEL_NOTE = '覆盖渠道：今日头条、搜狐、新浪、网易、百家号、什么值得买等。';
const DEFAULT_CITED_NOTE = '投放到网易、什么值得买、新浪等渠道已顺利通过大模型检索。';

function ProjectRow({ project }) {
    const rate = ((project.cited / project.total) * 100).toFixed(1);
    return (
        <div className="flex-1 min-h-0 flex items-stretch bg-zinc-900/40 border border-white/10 rounded-[1.25rem] px-7 shadow-xl overflow-hidden">
            <div className="w-[190px] shrink-0 flex flex-col justify-center pr-5">
                <span className="text-[28px] font-black text-white leading-none flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.6)] shrink-0" />
                    {project.brand}
                </span>
            </div>

            <div className="flex-1 flex flex-col justify-center border-l border-white/10 pl-6">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-3.5 rounded-full bg-[#004CE5]" />
                    <span className="text-[13px] font-extrabold text-zinc-500 uppercase tracking-widest">
                        Total Campaign
                    </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[38px] font-black text-white tracking-tight leading-none">
                        {project.total.toLocaleString()}
                    </span>
                    <span className="text-[18px] font-black text-white">篇</span>
                    <span className="text-[15px] font-bold text-zinc-400 ml-1">全网总投放量</span>
                </div>
                <p className="text-[14px] font-medium text-zinc-500 leading-snug mt-2">
                    {project.channelNote || DEFAULT_CHANNEL_NOTE}
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-center border-l border-white/10 pl-6 ml-6">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-3.5 rounded-full bg-emerald-500" />
                    <span className="text-[13px] font-extrabold text-zinc-500 uppercase tracking-widest">
                        Citation Rate
                    </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[38px] font-black text-emerald-400 tracking-tight leading-none">
                        {rate}%
                    </span>
                    <span className="text-[18px] font-black text-emerald-400">被引率</span>
                </div>
                <span className="text-[14px] font-bold text-emerald-500/90 leading-none mt-2">
                    （{project.cited} / {project.total} 篇投放已被引用）
                </span>
                <p className="text-[14px] font-medium text-zinc-500 leading-snug mt-1.5">
                    {project.citedNote || DEFAULT_CITED_NOTE}
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-center border-l border-white/10 pl-6 ml-6">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-3.5 rounded-full bg-zinc-400" />
                    <span className="text-[13px] font-extrabold text-zinc-500 uppercase tracking-widest">
                        Effective Citations
                    </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[38px] font-black text-white tracking-tight leading-none">
                        {project.citations.toLocaleString()}
                    </span>
                    <span className="text-[18px] font-black text-white">次</span>
                    <span className="text-[15px] font-bold text-zinc-400 ml-1">累计引用频次</span>
                </div>
                <div className="grid grid-cols-3 gap-x-5 gap-y-1 mt-2 max-w-fit">
                    {project.breakdown.map((b) => (
                        <span
                            key={b.model}
                            className="text-[14px] font-medium text-zinc-500 flex items-center gap-1.5 whitespace-nowrap"
                        >
                            <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                    MODEL_DOT_COLORS[b.model] || 'bg-zinc-400'
                                }`}
                            />
                            {b.model}：
                            <strong className="text-zinc-200">{b.count.toLocaleString()}</strong>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Page_ArticleCitationRate() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 flex items-end justify-between gap-8">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    高质量文章引用率展示
                </h1>
                <div className="flex items-center gap-2.5 text-white text-[19px] font-medium shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] animate-pulse shrink-0" />
                    <span className="tracking-wide">
                        客户实测数据，内容的
                        <strong className="text-[22px] font-black text-white">真实引用效果</strong>。
                    </span>
                </div>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 pt-4 relative z-10 flex flex-col gap-4 min-h-0">
                {PROJECTS.map((p) => (
                    <ProjectRow key={p.brand} project={p} />
                ))}
            </div>
        </div>
    );
}
