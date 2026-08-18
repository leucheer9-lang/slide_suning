import React from 'react';
import { GitBranch, Search, FileText } from 'lucide-react';

/**
 * 三泳道流程：用户 ↔ AI 模型 ↔ 搜索工具。
 * 讲清一件事——AI 不是拿用户原话去搜，而是先把大问题拆成一串具体问法再联网检索。
 * 所以我们要争的不是那句原话，是被拆出来的那一串词条。
 */

const SPLIT_QUERIES = [
    '宝安产业园推荐',
    '3000 平研发办公出租',
    '可做中试的厂房园区',
    '智能硬件产业园区',
    '宝安工业上楼园区',
];

const STEPS = [
    {
        icon: GitBranch,
        no: '第一步，查询扩展',
        desc: '拆分用户问题，生成多个具体搜索问法',
        arrow: '→',
    },
    {
        icon: Search,
        no: '第二步，初始检索',
        desc: '围绕拆分出的问法检索信息，判断可信度与适用性',
        arrow: '←',
    },
    {
        icon: FileText,
        no: '第三步，综合输出',
        desc: '整理检索到的信息，生成最终答案，推荐具体园区',
        arrow: '',
    },
];

function LaneTitle({ children }) {
    return <span className="text-[20px] font-black text-white tracking-wide">{children}</span>;
}

export default function Page_WordSelectionAiProcess() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    AI 如何处理用户问题
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col min-h-0">
                <p className="shrink-0 text-[24px] text-zinc-300 leading-snug mb-6">
                    AI 不会拿用户原话直接去搜，而是先把一个大问题
                    <strong className="text-white font-bold">拆成一串具体问法</strong>
                    再联网检索。所以要争的不是那句原话，而是
                    <strong className="font-bold" style={{ color: '#004CE5' }}>
                        被拆出来的那一串词条
                    </strong>
                    。
                </p>

                <div className="flex-1 min-h-0 grid grid-cols-[430px_1fr_400px] gap-0">
                    {/* 泳道一：用户 */}
                    <div className="flex flex-col pr-8 min-h-0">
                        <LaneTitle>用户</LaneTitle>
                        <div className="relative flex-1 mt-4 pl-6 flex flex-col min-h-0">
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10" />
                            <div className="absolute left-[-1px] top-0 h-[150px] w-[4px] bg-emerald-500 rounded-full" />
                            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 h-[150px] flex items-center">
                                <p className="text-[18px] text-zinc-200 leading-relaxed font-medium">
                                    我们是 200 人的智能硬件团队，想在宝安找 3000 平左右、能做中试的产业园，有推荐吗？
                                </p>
                            </div>

                            <div className="flex-1" />

                            <div className="absolute left-[-1px] bottom-0 h-[140px] w-[4px] bg-emerald-500 rounded-full" />
                            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 h-[140px] flex flex-col justify-center">
                                <span className="text-[15px] text-zinc-500 mb-1.5">← 返回答案</span>
                                <p className="text-[18px] text-zinc-300 leading-relaxed">
                                    结合您的需求，推荐以下园区：……
                                    <span className="text-zinc-600 font-mono">（具体推荐内容）</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 泳道二：AI 模型 */}
                    <div className="flex flex-col px-8 border-l border-white/10 min-h-0">
                        <LaneTitle>AI 模型（豆包、DeepSeek、元宝…）</LaneTitle>
                        <div className="relative flex-1 mt-4 pl-6 flex flex-col gap-4 min-h-0">
                            <div className="absolute left-[-1px] top-0 bottom-0 w-[4px] bg-violet-500 rounded-full" />

                            {/* 第一步 + 拆解结果 */}
                            <div className="shrink-0">
                                <StepHeader step={STEPS[0]} />
                                <div className="mt-3 rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-4">
                                    <span className="text-[15px] text-zinc-500">拆解出的搜索问法</span>
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2.5">
                                        {SPLIT_QUERIES.map((q) => (
                                            <div key={q} className="flex items-center gap-2.5">
                                                <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                                                <span className="text-[19px] text-zinc-200 font-medium">{q}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 min-h-0 flex flex-col justify-end gap-6">
                                <StepHeader step={STEPS[1]} />
                                <StepHeader step={STEPS[2]} />
                            </div>
                        </div>
                    </div>

                    {/* 泳道三：搜索工具 */}
                    <div className="flex flex-col pl-8 border-l border-white/10 min-h-0">
                        <LaneTitle>搜索工具（百度、Bing…）</LaneTitle>
                        <div className="relative flex-1 mt-4 pl-6 flex flex-col justify-center min-h-0">
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10" />
                            <div className="absolute left-[-1px] top-[150px] h-[170px] w-[4px] bg-sky-500 rounded-full" />
                            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-6">
                                <div className="w-11 h-11 rounded-full bg-sky-950/50 border border-sky-800 flex items-center justify-center mb-3">
                                    <Search size={22} className="text-sky-400" />
                                </div>
                                <h4 className="text-[21px] font-bold text-white">在检索系统中逐条搜索</h4>
                                <p className="text-[18px] text-zinc-400 mt-1.5 leading-snug">
                                    每一条拆出来的问法都会独立检索一次，答案由这些结果拼出来
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StepHeader({ step }) {
    const Icon = step.icon;
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-violet-950/50 border border-violet-800 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-violet-400" />
            </div>
            <div className="min-w-0">
                <h4 className="text-[21px] font-bold text-white">
                    {step.arrow && <span className="text-zinc-500 mr-2">{step.arrow}</span>}
                    {step.no}
                </h4>
                <p className="text-[18px] text-zinc-400 mt-1 leading-snug">{step.desc}</p>
            </div>
        </div>
    );
}
