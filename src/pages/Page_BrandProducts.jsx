import React from 'react';

const blocks = [
    {
        accent: '#004CE5',
        title: '空间产品',
        summary: '三期合计约 45 万㎡对外开放，覆盖工业上楼、甲级办公与总部型空间。',
        items: [
            { title: '一期研发生产楼', desc: '约 8.8 万㎡，2016 年投用。首层层高 6 米、标准层 4.5 米，可分层或整栋租，适配研发、中试与轻型生产。' },
            { title: '二期商务办公', desc: '约 26.5 万㎡，2017 年启用。甲级写字楼为主体，公开报价约 50–72 元/㎡·月，160㎡ 起租。' },
            { title: '三期产学研办公', desc: '约 10 万㎡，2019 年投用。面向区域总部与较大体量研发办公，定位高于一期生产楼。' },
        ],
    },
    {
        accent: '#3B82F6',
        title: '产城配套',
        summary: '石岩片区少有的「办公 + 居住 + 商业 + 酒店」闭环，用来留人，不只是把房子租出去。',
        items: [
            { title: '创新谷广场', desc: '约 6 万㎡购物中心，含 IMAX 影院与餐饮零售，是石岩片区体量靠前的集中商业。' },
            { title: '智慧公寓', desc: '约 1,500 套精装公寓，单间到三居可选，解决员工就近住宿，降低通勤流失。' },
            { title: '商务酒店', desc: '园区配有亚朵等商务酒店，承接客户接待、培训会议与短期驻场。' },
        ],
    },
    {
        accent: '#10B981',
        title: '产业服务',
        summary: '创维以实业方运营园区，招商和服务都围绕企业生命周期，而不是纯物业收租。',
        items: [
            { title: '链主协同', desc: '创维 13 家产业公司研发生产在此，彩电公司全球总部亦在园区，上下游可就近对接采购与协作。' },
            { title: '政策申报支撑', desc: '叠加省级特色产业园、宝安区科技桃花源等身份，符合条件的企业可申报租金补贴与落户奖励。' },
            { title: '1+4 互动平台', desc: '官方提出搭建企业、政府、机构、创维四方合作平台，把园区从房东做成产业枢纽。' },
        ],
    },
];

export default function Page_BrandProducts() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-2 pb-3 relative z-10">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none">园区产品与业态矩阵</h1>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1680px] mx-auto px-8 pb-4 relative z-10 flex flex-col gap-3">
                {blocks.map((block) => (
                    <div
                        key={block.title}
                        className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: block.accent }} />

                        <div className="w-[28%] min-w-0 pl-6 pr-5 py-4 border-r border-white/10 bg-black/40 flex flex-col justify-center">
                            <h2 className="text-[28px] font-bold text-white tracking-wide leading-tight mb-3">
                                {block.title}
                            </h2>
                            <p className="text-[20px] text-zinc-300 leading-relaxed">
                                {block.summary}
                            </p>
                        </div>

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
                                    <p className="text-[20px] text-zinc-300 leading-[1.65] pl-[22px]">
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
