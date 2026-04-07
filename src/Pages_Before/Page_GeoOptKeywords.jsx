import React from 'react';

export default function Page_GeoOptKeywords() {
    const platformData = [
        {
            id: 'baidu',
            name: '百度',
            color: 'from-cyan-500/20',
            borderColor: 'border-cyan-500/20',
            textColor: 'text-cyan-400',
            numColor: 'text-cyan-500/50',
            keywords: ["冰箱品牌排行榜前十名", "冰箱不制冷是什么原因 解决办法", "冰箱冬天调到3-4还是5-6", "冰箱压缩机不工作了是怎么回事", "冰箱温度调到多少合适", "冰箱冷藏调多少度合适", "冰箱结冰箱结冰怎么处理", "冰箱夏天调多少档位最好", "冰箱推荐家用"]
        },
        {
            id: 'baidu_mobile',
            name: '百度移动',
            color: 'from-sky-500/20',
            borderColor: 'border-sky-500/20',
            textColor: 'text-sky-300',
            numColor: 'text-sky-400/50',
            keywords: ["冰箱不制冷是什么原因 解决办法", "冰箱结冰箱结冰怎么处理", "冰箱夏天调多少档位最好", "冰箱英语", "冰箱品牌排行榜前十名", "冰箱一直嗡嗡响不停是怎么回事", "冰箱1-7档哪个最冷", "冰箱买什么牌子的好质量好又省电", "冰箱贴"]
        },
        {
            id: 'sogou',
            name: '搜狗',
            color: 'from-amber-500/20',
            borderColor: 'border-amber-500/20',
            textColor: 'text-amber-400',
            numColor: 'text-amber-500/50',
            keywords: ["上万冰箱半夜爆炸事件", "自家冰箱炸裂报废事件", "冰箱十大排名", "冰箱不制冷是什么问题", "冰箱英语", "冰箱冷藏室结冰是什么原因", "冰箱app", "冰箱一天24小时耗电多少", "冰箱简图", "冰箱"]
        },
        {
            id: 'zhihu',
            name: '知乎',
            color: 'from-blue-500/20',
            borderColor: 'border-blue-500/20',
            textColor: 'text-blue-400',
            numColor: 'text-blue-400/50',
            keywords: ["冰箱平嵌和零嵌有什么区别？", "2026年有哪些值得入手的十字开门冰箱？", "冰箱除味神器真的是智商税吗？", "冰箱怎么选才能不踩坑？", "租房用的小冰箱哪个牌子好？", "冰箱冷藏室结冰怎么破？", "法式多门冰箱实用吗？", "家里有孕妇该买什么除菌冰箱？", "冰箱保鲜技术哪家强？", "冰箱冷藏和微冻室的区别是什么？"]
        },
        {
            id: 'taobao',
            name: '淘宝',
            color: 'from-orange-500/20',
            borderColor: 'border-orange-500/20',
            textColor: 'text-orange-400',
            numColor: 'text-orange-500/50',
            keywords: ["冰箱家用小型", "冰箱家用", "冰箱小型", "冰箱收纳盒", "冰箱防尘盖布", "冰箱除味剂", "冰箱以旧换新补贴", "冰箱双开门大容量", "冰箱2026新款", "冰箱推荐"]
        },
        {
            id: 'jd',
            name: '京东',
            color: 'from-red-500/20',
            borderColor: 'border-red-500/20',
            textColor: 'text-red-400',
            numColor: 'text-red-500/50',
            keywords: ["冰箱双开门", "冰箱小型家用3-4人", "冰箱出租房用", "冰箱一级能效国家补贴", "冰箱小户型", "冰箱风冷无霜一级能效京东自营", "冰箱京东自营国家补贴", "冰箱十字开门", "冰箱零嵌入式", "冰箱冷藏调多少度合适"]
        },
        {
            id: 'xhs',
            name: '小红书',
            color: 'from-rose-500/20',
            borderColor: 'border-rose-500/20',
            textColor: 'text-rose-400',
            numColor: 'text-rose-400/50',
            keywords: ["冰箱冷藏数字0-7", "冰箱档位0-7正确调法", "冰箱除异味", "冰箱怎么挑选攻略", "冰箱结冰严重怎么去除", "冰箱嵌入式推荐", "冰箱餐边柜一体设计", "冰箱密封条发霉怎么清洗", "冰箱异味怎么彻底去除", "冰箱什么品牌最好"]
        },
        {
            id: 'douyin',
            name: '抖音',
            color: 'from-zinc-500/20',
            borderColor: 'border-white/10',
            textColor: 'text-white',
            numColor: 'text-white/40',
            keywords: ["冰箱不制冷", "冰箱维修", "冰箱怎么调节温度", "冰箱结冰的解决方法", "冰箱小型家用", "冰箱小型", "冰箱清洗", "冰箱除异味", "冰箱不制冷一招搞定", "冰箱什么牌子的好质量好又好用"]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">各平台热搜词</h1>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 px-8 lg:px-16 pb-8 mt-4 min-h-0 relative z-10">
                {platformData.map((platform, idx) => (
                    <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                        {/* Header */}
                        <div className={`px-4 py-2.5 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2 shrink-0`}>
                            <img src={`/logo_${platform.id}.png`} alt={platform.name} className="w-5 h-5 object-contain rounded" />
                            <h2 className={`text-[1.05rem] font-bold ${platform.textColor} tracking-widest`}>{platform.name}</h2>
                        </div>
                        {/* List */}
                        <div className="flex flex-col flex-1 justify-around px-3 pt-2 pb-3 gap-0 overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {platform.keywords.map((kw, i) => (
                                <div key={i} className="flex items-center gap-3 py-1 px-2 rounded hover:bg-white/5 transition-colors group">
                                    <span className={`font-mono text-[0.85rem] w-4 text-right shrink-0 ${platform.numColor} group-hover:text-white transition-colors`}>{i + 1}.</span>
                                    <span className="text-white/85 text-[0.8rem] sm:text-[0.85rem] leading-tight truncate">{kw}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>



            <style jsx>{`
                .flex-1::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
