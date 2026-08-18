import React from 'react';

export default function Page_PlatformFilterIntro() {
    const platformData = [
        {
            id: 'deepseek',
            name: 'DeepSeek',
            logo: '/geo-platforms/deepseek.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: '宝安区政府在线', count: 40 },
                { rank: 2, site: '宝安湾', count: 33 },
                { rank: 3, site: '深圳政府在线', count: 22 },
                { rank: 4, site: '百度知道', count: 16 },
                { rank: 5, site: '中原地产', count: 15 },
                { rank: 6, site: '咚咚租', count: 11 },
                { rank: 7, site: '搜狐网', count: 8 },
                { rank: 8, site: '东莞2233厂房网', count: 8 },
                { rank: 9, site: '深圳新闻网', count: 6 },
                { rank: 10, site: '天眼查', count: 6 },
            ],
        },
        {
            id: 'doubao',
            name: '豆包',
            logo: '/geo-platforms/doubao.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: '顺企网（11467）', count: 81 },
                { rank: 2, site: '宝安区政府在线', count: 79 },
                { rank: 3, site: '安居客', count: 47 },
                { rank: 4, site: '抖音', count: 37 },
                { rank: 5, site: '58同城', count: 31 },
                { rank: 6, site: '深圳政府在线', count: 22 },
                { rank: 7, site: '今日头条', count: 20 },
                { rank: 8, site: '1233厂房网', count: 19 },
                { rank: 9, site: '网易', count: 14 },
                { rank: 10, site: '东莞2233厂房网', count: 11 },
            ],
        },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放平台筛选</h1>
                <p className="text-zinc-400 text-[1.1rem] font-medium tracking-wide">
                    拆解 DeepSeek、豆包在宝安产业园区与厂房选址问答中的引用来源 Top10，量化推导三组投放阵地（数据日期 2026-08-14）
                </p>
            </div>

            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-6 lg:px-10 pb-8 z-10 min-h-0">
                <div className="w-full flex justify-center gap-6 mb-6 shrink-0">
                    <div className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.9rem] tracking-widest font-medium uppercase">维度一：普适性与共性</span>
                        <h3 className="text-xl font-bold text-white tracking-widest">A 组：共性白名单</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.9rem] tracking-widest font-medium uppercase">维度一：差异化特征</span>
                        <h3 className="text-xl font-bold text-white tracking-widest">B 组：平台特异性</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.9rem] tracking-widest font-medium uppercase">维度二：行业收录偏好</span>
                        <h3 className="text-xl font-bold text-white tracking-widest">C 组：高命中高频阵地</h3>
                    </div>
                </div>

                <div className="w-full max-w-[1080px] flex-1 grid grid-cols-2 gap-8 min-h-0">
                    {platformData.map((platform, idx) => (
                        <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                            <div className={`px-4 py-2.5 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2.5 shrink-0`}>
                                <img src={platform.logo} alt={platform.name} className="w-7 h-7 object-contain rounded-full" />
                                <h2 className={`text-[1.15rem] font-bold ${platform.textColor} tracking-widest`}>{platform.name}</h2>
                            </div>

                            <div className="flex items-center px-4 py-1.5 border-b border-white/5 bg-white/[0.01] shrink-0">
                                <span className="w-8 text-center text-[0.9rem] text-zinc-500 font-bold shrink-0">#</span>
                                <span className="flex-1 ml-2 text-[0.9rem] text-zinc-500 font-bold">网站名称</span>
                                <span className="text-[0.9rem] text-zinc-500 font-bold text-right w-16 shrink-0">引用</span>
                            </div>

                            <div className="flex flex-col flex-1 justify-around px-3 pt-1 pb-2 overflow-hidden">
                                {platform.data.map((item, i) => (
                                    <div key={i} className="flex items-center py-0.5 px-1 rounded hover:bg-white/5 transition-colors group">
                                        <span className={`font-mono text-[0.95rem] w-8 text-center shrink-0 ${platform.numColor} font-bold`}>{item.rank}</span>
                                        <span className="text-white/85 text-[0.95rem] flex-1 ml-2 truncate leading-tight">{item.site}</span>
                                        <span className="text-white/60 font-mono text-[0.95rem] text-right w-16 shrink-0">{item.count}</span>
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
