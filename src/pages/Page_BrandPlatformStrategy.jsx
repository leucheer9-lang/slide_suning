import React from 'react';

const platforms = [
    {
        name: '苏宁易购',
        highlight: true,
        accent: '#F59E0B',
        accentSoft: 'rgba(245,158,11,0.12)',
        accentBorder: 'rgba(245,158,11,0.35)',
        punch: '立足阿里生态借力，重注 O2O 体验与 B 端出海',
        detail:
            '线上流量战略性让位，深度嵌入阿里妈妈体系（天猫旗舰店合作持续深化）。核心优势转向线下大店（Suning Max/Pro）智能场景及零售云门店的场景化触达，同时在 2026 年全面开辟「一站式出海平台」全托管招商作为全新蓝海。',
    },
    {
        name: '京东',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.12)',
        accentBorder: 'rgba(0,76,229,0.35)',
        punch: '腾讯生态加持，偏向理性的高净值质感营销',
        detail:
            '站内依托京准通及九数 DMP 深挖 3C 家电高净值人群与 PLUS 会员价值；站外以微信朋友圈、视频号为基本盘，深度绑定电竞（JDG）与顶级体育赛事，牢固控守男性与品质中产阶级的心智城河。',
    },
    {
        name: '天猫 / 淘宝',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.12)',
        accentBorder: 'rgba(0,76,229,0.35)',
        punch: '技术最强资金最厚，全域快种快收营销帝国',
        detail:
            '站内推出「AI 万相」多 Agent 智能体及百灵平台，实现全链路全场景智能化调度；站外通过「红猫计划」彻底打通抖音、小红书、微信等全网买量链路，预算绝对领先，是品牌建设与全场景大爆发的终极阵地。',
    },
    {
        name: '拼多多',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.12)',
        accentBorder: 'rgba(0,76,229,0.35)',
        punch: '百亿补贴锁死低价心智，社交裂变碾压下沉价格战场',
        detail:
            '站内以百亿补贴 + 全站营销 / 多多视频把流量货币化，拼团裂变与多多进宝推手分销牢牢锁死下沉用户；站外依托微信关系链裂变获客，并在抖音、快手、B 站等高频轰炸「拼公子」心智，家电 3C 靠补贴抢量，是价格战与下沉市场的绝对搅局者。',
        wide: true,
    },
    {
        name: '唯品会',
        accent: '#004CE5',
        accentSoft: 'rgba(0,76,229,0.12)',
        accentBorder: 'rgba(0,76,229,0.35)',
        punch: '紧盯下沉女性私域与热播剧，闷声隐形发育',
        detail:
            '站内采取相对封闭的资源排期与去中心化的唯享客 CPS 分销体系，牢牢粘住近千万名高频复购的 SVIP 用户；站外采取极其高频、魔性的热播影视剧 / 综艺「中插口播」软植入，长效收割二三线城市家庭主妇钱包。',
        wide: true,
    },
];

export default function Page_BrandPlatformStrategy() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="flex-1 min-h-0 w-full max-w-[1720px] mx-auto px-6 pb-5 relative z-10 flex flex-col gap-6">
                <div className="shrink-0 text-center pt-2">
                    <h1 className="text-[32px] font-black text-white tracking-widest leading-none">
                        五大平台全景策略心智与一句话总结
                    </h1>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-6 grid-rows-2 gap-4">
                    {platforms.map((p) => (
                        <div
                            key={p.name}
                            className={`min-h-0 border border-white/10 rounded-2xl flex flex-col overflow-hidden relative ${
                                p.wide ? 'col-span-3' : 'col-span-2'
                            }`}
                            style={{
                                borderLeftWidth: 5,
                                borderLeftColor: p.accent,
                                backgroundColor: p.highlight ? 'rgba(245,158,11,0.05)' : '#111',
                            }}
                        >
                            <div className="flex-1 min-h-0 flex flex-col justify-center px-6 py-4 gap-3.5">
                                <h2 className="text-[28px] font-black text-white tracking-wider leading-none">
                                    {p.name}
                                </h2>

                                <div
                                    className="self-start rounded-lg px-4 py-2.5 border"
                                    style={{
                                        backgroundColor: p.accentSoft,
                                        borderColor: p.accentBorder,
                                    }}
                                >
                                    <p
                                        className="text-[24px] font-black leading-snug tracking-wide"
                                        style={{ color: p.accent }}
                                    >
                                        {p.punch}
                                    </p>
                                </div>

                                <p className="text-[20px] text-zinc-300 leading-[1.55]">{p.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
