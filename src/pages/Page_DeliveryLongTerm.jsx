import React from 'react';

/**
 * 投放原则：市场常见做法 VS 我们的选平台标准。
 * 这里只讲「怎么判断一个平台值不值得投」，不给预算比例——
 * 预算配比统一由后面的「按权分发」页承担（那页的 70/20/10 来自真实引用数据）。
 */

const COMMON = [
    {
        num: '01',
        title: '自建或免费账号',
        desc: '不花钱——低权重号易被查重过滤，内容留存差',
    },
    {
        num: '02',
        title: '只买有名的高权重信源',
        desc: '价格高，但引用不准确，钱花在「看起来权威」上',
    },
];

const OURS = [
    {
        num: '01',
        title: '只投真实引用的平台',
        desc: '先区分显示引用与真实影响，虚假引用的平台一分钱不投',
    },
    {
        num: '02',
        title: '押被引用后能主导答案的垂直站',
        desc: '当前引用量小，但一旦被引用就决定了答案怎么讲',
    },
    {
        num: '03',
        title: '留一部分试新平台',
        desc: '跟踪模型更新方向，抢在竞品之前占住新起来的权重媒体',
    },
];

function PanelRow({ num, title, desc, accent = false, isLast = false }) {
    return (
        <div
            className={`flex-1 flex items-center gap-7 px-8 min-h-0 ${
                !isLast ? 'border-b border-white/[0.07]' : ''
            }`}
        >
            <div className="w-[110px] shrink-0 flex items-baseline justify-end">
                <span
                    className="font-black leading-none"
                    style={{ fontSize: '54px', color: accent ? '#4D7FFF' : '#FFFFFF' }}
                >
                    {num}
                </span>
            </div>

            <div className="w-px h-[70px] bg-white/[0.1] shrink-0" />

            <div className="flex flex-col gap-2 min-w-0">
                <h3 className="text-[26px] font-black text-white leading-tight">{title}</h3>
                <p className="text-[19px] text-zinc-300 leading-snug">{desc}</p>
            </div>
        </div>
    );
}

export default function Page_DeliveryLongTerm() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    投放原则
                </h1>
                <p className="text-[22px] text-zinc-300 leading-snug mt-2.5">
                    同样一笔预算投在不同平台上，被引用的效果差很远。我们不看平台名气大不小，只看
                    <strong className="text-white font-bold">它的引用是不是真的进了 AI 的答案</strong>。
                </p>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 pt-2 relative z-10 flex flex-col min-h-0">
                <div className="flex-1 min-h-0 flex gap-7">
                    {/* 左：市场常见做法 */}
                    <div className="flex-1 flex flex-col min-w-0">
                        <h2 className="text-[28px] font-black text-zinc-400 mb-3 shrink-0 leading-none">
                            市场常见做法
                        </h2>
                        <div className="flex-1 min-h-0 bg-zinc-900/40 border border-white/10 rounded-[1.5rem] flex flex-col overflow-hidden shadow-xl">
                            {COMMON.map((item, idx) => (
                                <PanelRow
                                    key={item.num}
                                    num={item.num}
                                    title={item.title}
                                    desc={item.desc}
                                    isLast={idx === COMMON.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 中：VS */}
                    <div className="w-[60px] shrink-0 flex items-center justify-center">
                        <span className="text-[34px] font-black text-white tracking-[0.2em] leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                            VS
                        </span>
                    </div>

                    {/* 右：我们的选平台标准 */}
                    <div className="flex-1 flex flex-col min-w-0">
                        <h2 className="text-[28px] font-black text-white mb-3 shrink-0 leading-none">
                            我们怎么选平台
                        </h2>
                        <div className="flex-1 min-h-0 bg-zinc-900/40 border border-[#004CE5]/35 rounded-[1.5rem] flex flex-col overflow-hidden shadow-[0_15px_35px_rgba(0,76,229,0.08)]">
                            {OURS.map((item, idx) => (
                                <PanelRow
                                    key={item.num}
                                    num={item.num}
                                    title={item.title}
                                    desc={item.desc}
                                    accent
                                    isLast={idx === OURS.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="shrink-0 mt-5 rounded-2xl border border-white/10 bg-zinc-900/40 px-8 py-4">
                    <p className="text-[18px] text-zinc-400 leading-snug">
                        <strong className="text-white font-bold">接下来的顺序是：</strong>
                        先用其他项目的实测把这三类信源各自讲清楚，再按这套标准把创新谷现有的引用源逐个筛一遍，最后落到
                        <strong className="text-white">具体投哪些站点、每类占多少预算</strong>
                        ——那组比例不是拍出来的，是从真实引用数据里算出来的。
                    </p>
                </div>
            </div>
        </div>
    );
}
