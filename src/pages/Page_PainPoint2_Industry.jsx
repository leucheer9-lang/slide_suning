import React from 'react';

const scenes = [
    {
        scene: '宝安高端产业园推荐哪个？',
        ai: '雪花科创城',
        status: '华润品牌和总部南迁报道更密，石岩被写成工厂区',
    },
    {
        scene: '宝安工业上楼去哪？',
        ai: '雪花科创城',
        status: '新供给招商稿先占住这个词，已投用的研发上楼缺席',
    },
    {
        scene: '宝安哪里适合硬科技总部？',
        ai: '新安 / 尖岗山',
        status: '雪花更近南山；石岩通勤差的旧印象还在',
    },
    {
        scene: '宝安电子信息 / 超高清园区',
        ai: '尚有空位',
        status: '省级特色产业园身份在，但可引用的选址内容仍薄',
    },
];

const gaps = [
    { title: '创维链主在场', desc: '彩电全球总部、同链近 90 家在园。AI 很少把「挨着创维做生意」写成选高端园的理由' },
    { title: '现在就能入驻', desc: '一期 2016 年已投用。雪花电子信息集聚还在形成，甲岸预计 2026 年中才交' },
    { title: '省级园 + 科技桃花源', desc: '2023 年深圳唯一省级特色产业园。高端园推荐和中介页几乎不提这层身份' },
    { title: '办住商酒闭环', desc: '商场 + 1,500 套公寓 + 亚朵，是石岩少有的高端配套；AI 仍按工业区来写' },
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
                        头部园区占位：「宝安高端产业园」推荐被雪花科创城占满
                    </h1>
                    <p className="text-zinc-400 text-[20px] leading-snug tracking-wide text-justify [text-justify:inter-ideograph]">
                        真正抢同一批客的赛场在宝安，不在南山或坂田。问「宝安高端产业园 / 工业上楼」，出镜最多的是雪花科创城。创新谷进不了同区第一轮推荐。
                    </p>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-2 gap-5 pb-2.5">
                    <div className="min-h-0 bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] px-6 py-5 flex flex-col">
                        <div className="text-zinc-200 font-bold text-[20px] mb-2.5 tracking-wider flex items-center gap-2 shrink-0">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                            同区高端园推荐里的声量格局
                        </div>
                        <div className="flex-1 min-h-0 grid grid-rows-[auto_repeat(4,minmax(0,1fr))] border border-white/5 rounded-xl overflow-hidden bg-black/40">
                            <div className="grid grid-cols-[1.15fr_0.85fr_1.2fr] bg-white/5 border-b border-white/10 text-zinc-400 font-semibold tracking-wide text-[16px]">
                                <div className="py-2 px-4 border-r border-white/5">决策场景</div>
                                <div className="py-2 px-4 text-center border-r border-white/5">AI 默认倾向</div>
                                <div className="py-2 px-4">创新谷处境</div>
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

                    <div className="min-h-0 bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] px-6 py-5 flex flex-col">
                        <div className="text-zinc-200 font-bold text-[20px] mb-2.5 tracking-wider flex items-center gap-2 shrink-0">
                            <span className="w-2 h-5 bg-[#004CE5] rounded-full"></span>
                            创新谷差异化优势 vs AI 声量缺口
                        </div>
                        <div className="flex-1 min-h-0 grid grid-rows-4 gap-2.5">
                            {gaps.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="min-h-0 bg-black/40 border border-white/10 rounded-xl px-4 flex items-center gap-4"
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
                    <p className="text-zinc-200 text-[20px] font-bold leading-snug text-justify flex-1">
                        不跟天安云谷抢「深圳产业园」总词，也不跟南山硬拼科技园办公。先把「宝安高端产业园 / 工业上楼 / 研产一体」写成可引用内容：创维总部园、现在就能入驻、省级园身份、公寓商场配套，让问宝安高端园的企业先落到创新谷，而不是只看到雪花。
                    </p>
                </div>
            </div>
        </div>
    );
}
