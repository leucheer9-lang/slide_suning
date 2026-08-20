import React from 'react';

const COLS = 'grid-cols-[150px_minmax(0,2.15fr)_minmax(0,0.82fr)_minmax(0,0.78fr)]';

const CORE_PHASES = [
    {
        title: '一、GEO 诊断',
        items: [
            { k: '品牌现状诊断', v: '监测苏宁易购提及率、渠道推荐位次、与京东/天猫对比、负面信息及引用来源。' },
            { k: '词条策略规划', v: '规划品牌词、渠道场景词、高转化问题词（送装一体 / 国补与以旧换新 / 3C 选购），并做优先级分层。' },
            { k: '覆盖平台策略', v: '针对 DeepSeek、豆包、元宝、通义千问制定差异化优化策略，统一苏宁渠道表达口径。' },
        ],
    },
    {
        title: '二、GEO 优化执行',
        items: [
            { k: '结构化内容工程', v: '优化内容结构以及引用信号，提升 AI 采信概率。' },
            { k: '内容生成与分发', v: '生成渠道对比、服务履约、场景问答、国补以旧换新及负面优化类内容。' },
            { k: '外部平台筛选与发布', v: '筛选资讯门户、短视频与问答等高权重平台，完成合作沟通和内容发布。' },
            { k: '媒体与信号构建', v: '建设可信信息源和多来源引用信号，强化苏宁「全渠道零售 + 送装一体」权威叙事。' },
        ],
    },
    {
        title: '三、GEO 监测与反馈',
        items: [
            { k: '数据监测反馈', v: '持续监测核心指标（提及率、TOP 位次、零提及词条），输出报告并调整优化策略。' },
        ],
    },
];

function PhaseBlock({ title, items }) {
    return (
        <div className="min-w-0">
            <div className="flex items-center gap-2 text-[22px] font-black text-white leading-none mb-1.5">
                <span className="w-2 h-4 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)] shrink-0" />
                {title}
            </div>
            <ul className="pl-4 flex flex-col gap-1">
                {items.map((it, i) => (
                    <li key={it.k} className="text-[20px] text-zinc-300 leading-snug">
                        {i + 1}、<span className="text-white font-semibold">{it.k}：</span>
                        {it.v}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Page_GeoWorkAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-10 sm:px-12 pt-2 pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1740px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-3">

                <div className="text-center shrink-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-none">
                        工作内容与预期效果
                    </h1>
                </div>

                <div className="w-full flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3 xl:px-6 xl:py-3.5 shadow-2xl flex flex-col">

                    <div className={`grid ${COLS} gap-x-5 pb-2.5 border-b-2 border-white/[0.22] shrink-0 text-zinc-200 text-[18px] font-black`}>
                        <div>词组分类</div>
                        <div>工作内容</div>
                        <div>预期效果</div>
                        <div>需要品牌方协助</div>
                    </div>

                    {/* 核心优化词 */}
                    <div className={`flex-[1.65] min-h-0 grid ${COLS} gap-x-5 py-2.5 border-b border-white/[0.22]`}>
                        <div className="min-h-0 flex flex-col justify-center">
                            <span className="text-[28px] text-white font-black leading-none">核心优化词</span>
                            <span className="text-[16px] text-zinc-400 font-bold mt-2 leading-none">渠道 / 场景</span>
                        </div>

                        <div className="min-h-0 min-w-0 h-full grid grid-cols-2 gap-x-5 gap-y-2 items-start">
                            <PhaseBlock title={CORE_PHASES[0].title} items={CORE_PHASES[0].items} />
                            <PhaseBlock title={CORE_PHASES[1].title} items={CORE_PHASES[1].items} />
                            <div className="col-span-2">
                                <PhaseBlock title={CORE_PHASES[2].title} items={CORE_PHASES[2].items} />
                            </div>
                        </div>

                        <div className="min-h-0 min-w-0">
                            <div className="h-full flex flex-col justify-center gap-3 bg-[#004CE5]/6 border border-[#004CE5]/20 rounded-xl px-4 py-3">
                                <p className="text-[20px] text-zinc-100 leading-snug">
                                    提升核心场景词下的
                                    <strong className="text-white font-bold"> AI 渠道推荐曝光和品牌位次</strong>
                                </p>
                                <div>
                                    <div className="text-[16px] text-zinc-500 font-bold">AI 销售贡献</div>
                                    <div className="text-[32px] font-extrabold text-[#6494ff] leading-none mt-1">约 5%</div>
                                </div>
                                <div>
                                    <div className="text-[16px] text-zinc-500 font-bold">线上线下渠道转化</div>
                                    <div className="text-[26px] font-black text-white leading-none mt-1">约 5% – 10%</div>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-0 min-w-0">
                            <div className="h-full flex flex-col justify-center gap-2.5 bg-white/[0.025] border border-white/[0.06] rounded-xl px-4 py-3">
                                <span className="text-[22px] text-white font-extrabold leading-none">共建品牌资料库</span>
                                <p className="text-[20px] text-zinc-300 leading-snug">
                                    需品牌方配合提供官方服务口径、国补与以旧换新政策说明、送装一体流程、门店/零售云规模及核心差异化卖点等权威信息源。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 品牌词 */}
                    <div className={`flex-1 min-h-0 grid ${COLS} gap-x-5 pt-2.5`}>
                        <div className="min-h-0 flex flex-col justify-center">
                            <span className="text-[28px] text-white font-black leading-none">品牌词</span>
                            <span className="text-[16px] text-zinc-400 font-bold mt-2 leading-none">负面及错误</span>
                        </div>

                        <div className="min-h-0 min-w-0 flex flex-col justify-center gap-3">
                            <p className="text-[20px] text-zinc-200 leading-snug">
                                <strong className="text-white font-bold">1、错误信息监测：</strong>
                                建立错误信息监测机制，系统排查苏宁易购在 AI 回答中出现的售后口碑攻击、国补/价格误写、零售云门店规模误写、错误来源及高频触发问题，定位主要问题类型和引用信源，并制定针对性优化策略。
                            </p>
                            <p className="text-[20px] text-zinc-200 leading-snug">
                                <strong className="text-white font-bold">2、纠偏处理执行：</strong>
                                针对不同类型的错误信息进行分类处理，通过删除负面、正确信息补充、权威内容发布、负面内容覆盖、引用信号强化等方式，修正 AI 回答中的异常信息，降低负面及错误内容的出现频率。
                            </p>
                        </div>

                        <div className="min-h-0 min-w-0">
                            <div className="h-full flex flex-col justify-center gap-3 bg-[#004CE5]/6 border border-[#004CE5]/20 rounded-xl px-4 py-3">
                                <p className="text-[20px] text-zinc-100 leading-snug">
                                    降低负面及错误信息出现频率，提升品牌信息
                                    <strong className="text-white font-bold">准确性和信任度</strong>
                                </p>
                                <div>
                                    <div className="text-[16px] text-zinc-500 font-bold">辅助转化提升</div>
                                    <div className="text-[32px] font-extrabold text-[#6494ff] leading-none mt-1">约 20%</div>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-0 min-w-0">
                            <div className="h-full flex flex-col justify-center bg-white/[0.025] border border-white/[0.06] rounded-xl px-4 py-3">
                                <p className="text-[20px] text-zinc-200 leading-snug">
                                    需品牌方提供
                                    <strong className="text-white font-bold">官方口径、正确服务与价格/国补说明、门店规模证明材料</strong>
                                    ，并协助确认负面/错误信息的处理优先级和澄清口径。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page_GeoWorkAcceptance;
