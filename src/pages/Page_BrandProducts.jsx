import React from 'react';

const blocks = [
    {
        accent: '#004CE5',
        title: '家电 3C 零售',
        summary: '核心基本盘，占营收绝大部分；主推 JSAV 专供 / 定制包销，拉动毛利率。',
        items: [
            { title: '家电全品类零售', desc: '覆盖大家电、小家电、厨电、3C 数码；承接以旧换新与国补，服务家庭消费主力。' },
            { title: 'JSAV 专供 / 定制包销', desc: '与上游品牌商定制专供商品，提升差异化选品与毛利率，构建供应链壁垒。' },
            { title: '送装一体服务', desc: '一站式购买叠加本地化履约，强化「买得到、送得快、装得好」的零售闭环。' },
        ],
    },
    {
        accent: '#3B82F6',
        title: '全渠道门店',
        summary: '线上线下一体、城市与县镇协同，是场景体验与转化的核心触点。',
        items: [
            { title: 'Suning Max / Pro 大店', desc: '一二级市场超级体验店 / 旗舰店，2025 年新开重装 79 家，打造一站式置家体验。' },
            { title: 'Suning Fun / 苏宁易家', desc: '小店与「家电 + 家装」场景店，贴近社区；另有苏宁易购广场 37 家。' },
            { title: '零售云加盟（县镇下沉）', desc: '较 2024 年 10,168 家主动优化；服务县镇就近体验、性价比与售后。' },
        ],
    },
    {
        accent: '#10B981',
        title: '政企与新业务',
        summary: '增长曲线：B2B 数字化采购、即时零售与出海电商。',
        items: [
            { title: '易采云（政企采购）', desc: 'B2B 数字化采购平台，服务政企客户，是增长曲线中的重要增量来源。' },
            { title: '即时零售 / 闪购', desc: '本地即时履约能力延伸，承接家电与生活消费的即时需求。' },
            { title: '出海电商', desc: '拓展跨境零售与品牌出海能力，作为主业之外的补充增长极。' },
        ],
    },
];

export default function Page_BrandProducts() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-2 pb-3 relative z-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none">主要业务矩阵</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1680px] mx-auto px-8 pb-4 relative z-10 flex flex-col gap-3">
                {blocks.map((block) => (
                    <div
                        key={block.title}
                        className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: block.accent }} />

                        {/* Left: title + summary */}
                        <div className="w-[28%] min-w-0 pl-6 pr-5 py-4 border-r border-white/10 bg-black/40 flex flex-col justify-center">
                            <h2 className="text-[28px] font-bold text-white tracking-wide leading-tight mb-3">
                                {block.title}
                            </h2>
                            <p className="text-[20px] text-zinc-300 leading-relaxed">
                                {block.summary}
                            </p>
                        </div>

                        {/* Right: detail items */}
                        <div className="flex-1 min-w-0 px-7 py-4 grid grid-cols-3 gap-5 items-stretch">
                            {block.items.map((item) => (
                                <div key={item.title} className="min-w-0 flex flex-col justify-center">
                                    <h4 className="text-[22px] font-bold text-white mb-3 flex items-start gap-2.5 leading-snug">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full mt-2.5 shrink-0"
                                            style={{ backgroundColor: block.accent }}
                                        />
                                        <span>{item.title}</span>
                                    </h4>
                                    <p className="text-[18px] text-zinc-300 leading-[1.65] pl-[22px]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
