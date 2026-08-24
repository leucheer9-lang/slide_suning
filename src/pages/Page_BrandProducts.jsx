import React from 'react';

const blocks = [
    {
        accent: '#004CE5',
        title: '民用规模化',
        summary: '家居收纳、壁挂置物与生物保鲜，是太力的营收基本盘，也是材料技术的量产验证场。',
        items: [
            { title: '真空收纳', desc: '真空压缩袋覆盖平面、立体、吊挂到压缩箱，天猫真空收纳袋市占率连续多年第一，并牵头制定《真空压缩收纳袋》行业标准。' },
            { title: '壁挂置物', desc: '纳米复合弹性体真空吸盘、功能粘胶与蘑菇搭扣，主打粘贴牢固、移除无痕，宜家指定专用材料即出自这条线。' },
            { title: '生物保鲜', desc: '分子筛仿生气调保鲜膜与果蔬锁鲜袋，联合华南农业大学研制，官方口径保鲜期可达普通保鲜袋的 2 至 3 倍。' },
        ],
    },
    {
        accent: '#3B82F6',
        title: '特种安防',
        summary: '把航天验证过的材料下放到军警与民用防护，是目前增速最快的高价值板块。',
        items: [
            { title: '军警防护', desc: '防刺割服、防刺割手套与防护马甲，防刺防割性能达国标、美标、欧标顶级水平，已与部分省市公安机关展开合作。' },
            { title: '民用防护', desc: '隐匿式防刺割服、360° 防刺割手套、医用防刺割白大褂；适老化免钉免胶安全扶手承重超过 120 公斤。' },
            { title: '户外与应急', desc: '控温升无骨充气帐篷一键充气、快搭快收、防爆防水；应急帐篷同时面向抗震救灾与特种作业场景。' },
        ],
    },
    {
        accent: '#10B981',
        title: '航天与前沿',
        summary: '航天是品牌壁垒的源头，机器人与新能源是正在打开的下一条曲线。',
        items: [
            { title: '航天真空封装', desc: '中国航天专用压缩袋独家供应商，产品已 31 次进入太空，解决微重力环境下废弃物与个人用品的封存处理。' },
            { title: '航天新品', desc: '航天生物培养箱套罩与中科院上海技术物理研究所共同研发，2024 年已应用于在轨任务；排遗采集器已通过用户方技术评审。' },
            { title: '机器人与新能源', desc: '机器人整机防护纺织材料覆盖 −40℃ 至 380℃，另有仿生腱绳、电池包碰撞防护与汽车内饰装配材料。' },
        ],
    },
];

export default function Page_BrandProducts() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-2 pb-3 relative z-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none">产品与业务矩阵</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1680px] mx-auto px-8 pb-4 relative z-10 flex flex-col gap-3">
                {blocks.map((block) => (
                    <div
                        key={block.title}
                        className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: block.accent }} />

                        <div className="w-[28%] min-w-0 pl-10 pr-8 py-4 border-r border-white/10 bg-black/40 flex flex-col justify-center">
                            <h2 className="text-[28px] font-bold text-white tracking-wide leading-tight mb-3">
                                {block.title}
                            </h2>
                            <p className="text-[20px] text-zinc-300 leading-relaxed text-justify [text-justify:inter-ideograph]">
                                {block.summary}
                            </p>
                        </div>

                        <div className="flex-1 min-w-0 px-10 py-4 grid grid-cols-3 gap-6 items-stretch">
                            {block.items.map((item) => (
                                <div key={item.title} className="min-w-0 flex flex-col justify-center">
                                    <h4 className="text-[22px] font-bold text-white mb-3 flex items-start gap-2.5 leading-snug">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full mt-2.5 shrink-0"
                                            style={{ backgroundColor: block.accent }}
                                        />
                                        <span>{item.title}</span>
                                    </h4>
                                    <p className="text-[20px] text-zinc-300 leading-[1.65] pl-[22px] text-justify [text-justify:inter-ideograph]">
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
