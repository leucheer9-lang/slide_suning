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
                { rank: 1, site: '百度知道', count: 45 },
                { rank: 2, site: '什么值得买社区频道', count: 33 },
                { rank: 3, site: '北京日报', count: 17 },
                { rank: 4, site: 'Apple', count: 16 },
                { rank: 5, site: '网易', count: 15 },
                { rank: 6, site: '泡泡網', count: 14 },
                { rank: 7, site: '京东', count: 13 },
                { rank: 8, site: '搜狐网', count: 12 },
                { rank: 9, site: '东方财富网', count: 12 },
                { rank: 10, site: '黄冈新闻网', count: 12 }
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
                { rank: 1, site: '抖音', count: 173 },
                { rank: 2, site: '今日头条', count: 157 },
                { rank: 3, site: '新浪新闻', count: 121 },
                { rank: 4, site: '什么值得买社区频道', count: 39 },
                { rank: 5, site: '搜狐网', count: 26 },
                { rank: 6, site: 'IT之家', count: 18 },
                { rank: 7, site: '京东', count: 18 },
                { rank: 8, site: '中关村在线', count: 17 },
                { rank: 9, site: '网易', count: 13 },
                { rank: 10, site: '咸宁新闻网', count: 9 }
            ]
        },
        {
            id: 'yuanbao',
            name: '腾讯元宝',
            file: 'platform-yuanbao.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: 'QQ News', count: 138 },
                { rank: 2, site: '今日头条', count: 101 },
                { rank: 3, site: '新浪新闻', count: 65 },
                { rank: 4, site: '手机新浪网', count: 62 },
                { rank: 5, site: '百度知道', count: 59 },
                { rank: 6, site: '搜狐网', count: 23 },
                { rank: 7, site: '华山网', count: 12 },
                { rank: 8, site: '咸宁新闻网', count: 11 },
                { rank: 9, site: 'insight.xiaoduoai.com', count: 9 },
                { rank: 10, site: '太平洋科技', count: 8 }
            ]
        },
        {
            id: 'tongyi',
            name: '通义千问',
            file: 'platform-tongyi.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: 'IT之家', count: 64 },
                { rank: 2, site: '今日头条', count: 64 },
                { rank: 3, site: '舜网', count: 39 },
                { rank: 4, site: '大众网', count: 33 },
                { rank: 5, site: '华山网', count: 24 },
                { rank: 6, site: '咸宁新闻网', count: 21 },
                { rank: 7, site: '中国商报网', count: 18 },
                { rank: 8, site: '百度知道', count: 14 },
                { rank: 9, site: '新浪新闻', count: 13 },
                { rank: 10, site: '廊坊新闻网', count: 12 }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放平台筛选</h1>
                <p className="text-zinc-400 text-[1.1rem] font-medium tracking-wide">
                    通过解构四大主流 AI 平台的信源特征与竞品数据，量化推导核心投放阵地
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

                {/* Bottom: 4 Tables Horizontal */}
                <div className="w-full flex-1 grid grid-cols-4 gap-4 min-h-0">
                    {platformData.map((platform, idx) => (
                        <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                            
                            {/* Header */}
                            <div className={`px-4 py-2.5 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2.5 shrink-0`}>
                                <img src={`/proposal-platforms/${platform.file}`} alt={platform.name} className="w-6 h-6 object-contain rounded" onError={(e) => { e.target.style.display = 'none'; }} />
                                <h2 className={`text-[1.1rem] xl:text-[1.2rem] font-bold ${platform.textColor} tracking-widest`}>{platform.name}</h2>
                            </div>
                            
                            {/* Column Headers */}
                            <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/[0.01] shrink-0">
                                <span className="w-10 text-center text-[0.9rem] xl:text-[1rem] text-zinc-500 font-bold shrink-0">排名</span>
                                <span className="flex-1 ml-2 text-[0.9rem] xl:text-[1rem] text-zinc-500 font-bold">网站名称</span>
                                <span className="text-[0.9rem] xl:text-[1rem] text-zinc-500 font-bold text-right w-20 shrink-0">引用次数</span>
                            </div>

                            {/* List */}
                            <div className="flex flex-col flex-1 justify-around px-3 pt-2 pb-3 gap-0 overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                {platform.data.map((item, i) => (
                                    <div key={i} className="flex items-center py-1 px-1 rounded hover:bg-white/5 transition-colors group">
                                        <span className={`font-mono text-[0.95rem] xl:text-[1.05rem] w-10 text-center shrink-0 ${platform.numColor} font-bold group-hover:text-white transition-colors`}>{item.rank}</span>
                                        <span className="text-white/85 text-[0.95rem] xl:text-[1.05rem] flex-1 ml-2 truncate leading-tight group-hover:text-white transition-colors">{item.site}</span>
                                        <span className="text-white/60 font-mono text-[0.95rem] xl:text-[1.05rem] text-right w-20 shrink-0 leading-tight group-hover:text-white/90">{item.count}</span>
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
