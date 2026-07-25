import React from 'react';

const segments = [
    {
        no: '01',
        title: '线下门店真实体验',
        hook: '眼见为实，一站式配齐',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.15)',
        people: [
            {
                who: '大额套系化买家',
                punch: '几万元全屋套餐，不信纯线上图文',
                detail: '先去超级体验店 / AI 生活体验中心摸真机，再由导购引导 App 下单。',
            },
            {
                who: '高端定制 / 专供偏好者',
                punch: '定制专供 23.4%，智能家电超 50%',
                detail: '海尔、海信、三星等深度绑定，特定高端首发款往往只能在苏宁买到。',
            },
        ],
    },
    {
        no: '02',
        title: '送装收旧一步到位',
        hook: '一次上门：送新 · 拆旧 · 安装',
        accent: '#3B82F6',
        accentSoft: 'rgba(59,130,246,0.15)',
        people: [
            {
                who: '无暇折腾的都市中产',
                punch: '痛点不是买新，是「旧的怎么扔」',
                detail: '纯电商常拆成送新 + 回收两次上门；苏宁强调一次搞定。',
            },
            {
                who: '以旧换新补贴人群',
                punch: '国补全链路优势 + 送新收旧一步式',
                detail: 'App 下单看中的是履约闭环，不是单纯比价。',
            },
        ],
    },
    {
        no: '03',
        title: '送装一体即时服务',
        hook: '绝不等待，即买即用',
        accent: '#10B981',
        accentSoft: 'rgba(16,185,129,0.15)',
        people: [
            {
                who: '急需使用的消费者',
                punch: '大家电半日 / 次日送达并当场调试',
                detail: '京东多为「物流送货 + 品牌售后网点安装」；苏宁凭售后体系做深度送装一体。',
            },
        ],
    },
    {
        no: '04',
        title: '下沉市场熟人经济',
        hook: '本地信任背书 + 售后保障',
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.15)',
        people: [
            {
                who: '县镇中老年及家庭',
                punch: '信任镇上开了十年的苏宁老板',
                detail: '零售云万店下沉；线下社群沟通，再经 App / 小程序下单。',
            },
        ],
    },
];

export default function Page_BrandWhySuning() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-5 pb-3 relative z-10 px-8">
                <h1 className="text-[34px] font-black text-white tracking-widest leading-none mb-2">
                    什么人会上苏宁买家电，而不选京东？
                </h1>
                <p className="text-zinc-400 text-[17px] leading-snug">
                    能摸到真东西 · 送装拖旧一次搞定 · 镇上有店随时找得到人
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-7 pb-4 relative z-10 flex flex-col gap-3">
                {segments.map((seg) => {
                    const dual = seg.people.length > 1;
                    return (
                        <div
                            key={seg.no}
                            className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-2xl flex items-stretch overflow-hidden"
                            style={{ borderLeftWidth: 6, borderLeftColor: seg.accent }}
                        >
                            <div className="w-[32%] shrink-0 flex flex-col justify-center px-7 py-3 border-r border-white/10">
                                <span
                                    className="self-start text-[16px] font-black tracking-widest px-2.5 py-0.5 rounded-md mb-2"
                                    style={{ backgroundColor: seg.accentSoft, color: seg.accent }}
                                >
                                    {seg.no}
                                </span>
                                <h2 className="text-[30px] font-black text-white leading-[1.15] tracking-wide mb-2">
                                    {seg.title}
                                </h2>
                                <p className="text-[20px] font-bold leading-snug" style={{ color: seg.accent }}>
                                    {seg.hook}
                                </p>
                            </div>

                            <div
                                className={`flex-1 min-w-0 grid items-center gap-6 px-7 py-3 ${
                                    dual ? 'grid-cols-2' : 'grid-cols-1'
                                }`}
                            >
                                {seg.people.map((p) => (
                                    <div key={p.who} className="min-w-0">
                                        <div
                                            className="text-[18px] font-black tracking-wider mb-1.5"
                                            style={{ color: seg.accent }}
                                        >
                                            {p.who}
                                        </div>
                                        <div className="text-[24px] font-black text-white leading-snug mb-2">
                                            {p.punch}
                                        </div>
                                        <p className="text-[20px] text-zinc-400 leading-snug">{p.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
