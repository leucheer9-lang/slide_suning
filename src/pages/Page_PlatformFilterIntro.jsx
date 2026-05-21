import React from 'react';

export default function Page_PlatformFilterIntro() {
    const platformData = [
        {
            id: 'deepseek',
            name: 'DeepSeek',
            file: 'platform-deepseek.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: '太平洋家居', count: 63 },
                { rank: 2, site: '中国陶瓷网', count: 26 },
                { rank: 3, site: '网易', count: 14 },
                { rank: 4, site: '名雕装饰', count: 9 },
                { rank: 5, site: '百度知道', count: 9 },
                { rank: 6, site: '界面新闻', count: 6 },
                { rank: 7, site: '淘宝网', count: 6 },
                { rank: 8, site: '津云', count: 6 },
                { rank: 9, site: '房天下', count: 5 },
                { rank: 10, site: 'sqxww.com', count: 4 }
            ]
        },
        {
            id: 'doubao',
            name: '豆包',
            file: 'platform-doubao.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: '抖音', count: 103 },
                { rank: 2, site: '今日头条', count: 67 },
                { rank: 3, site: '搜狐网', count: 15 },
                { rank: 4, site: '买购网', count: 15 },
                { rank: 5, site: '太平洋家居', count: 15 },
                { rank: 6, site: '网易', count: 14 },
                { rank: 7, site: '土巴兔装修网', count: 13 },
                { rank: 8, site: '新浪新闻', count: 10 },
                { rank: 9, site: '千龙网', count: 8 },
                { rank: 10, site: '佛山市禅城区陶瓷行业协会', count: 6 }
            ]
        },
        {
            id: 'qianwen',
            name: '通义千问',
            file: 'platform-qianwen.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: '网易', count: 62 },
                { rank: 2, site: '界面新闻', count: 41 },
                { rank: 3, site: '千龙网', count: 32 },
                { rank: 4, site: '太平洋家居', count: 25 },
                { rank: 5, site: '大众网', count: 14 },
                { rank: 6, site: '新京报', count: 12 },
                { rank: 7, site: '中国陶瓷网', count: 10 },
                { rank: 8, site: '今日头条', count: 10 },
                { rank: 9, site: '搜狐网', count: 9 },
                { rank: 10, site: '咸宁新闻网', count: 8 }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放平台筛选</h1>
                <p className="text-zinc-400 text-[1.1rem] font-medium tracking-wide">
                    通过解构三大主流 AI 平台的信源特征与竞品数据，量化推导三大核心阵地
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pb-8 z-10 min-h-0">

                {/* Top: Concise Logic row */}
                <div className="w-full flex justify-center gap-10 mb-8 shrink-0">
                    <div className="flex flex-col items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-12 py-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.95rem] tracking-widest font-medium uppercase">维度一：普适性与共性</span>
                        <h3 className="text-2xl font-bold text-white tracking-widest">A 组：共性白名单</h3>
                    </div>
                    <div className="flex flex-col items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-12 py-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.95rem] tracking-widest font-medium uppercase">维度一：差异化特征</span>
                        <h3 className="text-2xl font-bold text-white tracking-widest">B 组：平台特异性</h3>
                    </div>
                    <div className="flex flex-col items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-12 py-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.95rem] tracking-widest font-medium uppercase">维度二：行业收录偏好</span>
                        <h3 className="text-2xl font-bold text-white tracking-widest">C 组：高命中高频阵地</h3>
                    </div>
                </div>

                {/* Bottom: 3 Tables Horizontal */}
                <div className="w-full flex-1 grid grid-cols-3 gap-4 min-h-0">
                    {platformData.map((platform, idx) => (
                        <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                            
                            {/* Header */}
                            <div className={`px-4 py-2.5 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2.5 shrink-0`}>
                                <img src={`/proposal-platforms/${platform.file}`} alt={platform.name} className="w-6 h-6 object-contain rounded" onError={(e) => { e.target.style.display = 'none'; }} />
                                <h2 className={`text-[1.2rem] xl:text-[1.3rem] font-bold ${platform.textColor} tracking-widest`}>{platform.name}</h2>
                            </div>
                            
                            {/* Column Headers */}
                            <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/[0.01] shrink-0">
                                <span className="w-10 text-center text-[1rem] xl:text-[1.1rem] text-zinc-500 font-bold shrink-0">排名</span>
                                <span className="flex-1 ml-2 text-[1rem] xl:text-[1.1rem] text-zinc-500 font-bold">网站名称</span>
                                <span className="text-[1rem] xl:text-[1.1rem] text-zinc-500 font-bold text-right w-24 shrink-0">引用次数</span>
                            </div>

                            {/* List */}
                            <div className="flex flex-col flex-1 justify-around px-3 pt-2 pb-3 gap-0 overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                {platform.data.map((item, i) => (
                                    <div key={i} className="flex items-center py-1 px-1 rounded hover:bg-white/5 transition-colors group">
                                        <span className={`font-mono text-[1.05rem] xl:text-[1.15rem] w-10 text-center shrink-0 ${platform.numColor} font-bold group-hover:text-white transition-colors`}>{item.rank}</span>
                                        <span className="text-white/85 text-[1.05rem] xl:text-[1.15rem] flex-1 ml-2 truncate leading-tight group-hover:text-white transition-colors">{item.site}</span>
                                        <span className="text-white/60 font-mono text-[1.05rem] xl:text-[1.15rem] text-right w-24 shrink-0 leading-tight group-hover:text-white/90">{item.count}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
