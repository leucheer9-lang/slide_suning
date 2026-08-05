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
                { rank: 1, site: '列表网', count: 29 },
                { rank: 2, site: '快递鸟', count: 24 },
                { rank: 3, site: '百度知道', count: 20 },
                { rank: 4, site: '物流指闻', count: 16 },
                { rank: 5, site: '手机新浪网', count: 9 },
                { rank: 6, site: '网经社', count: 9 },
                { rank: 7, site: '新浪新闻', count: 7 },
                { rank: 8, site: '山东省邮政管理局', count: 7 },
                { rank: 9, site: 'Apple', count: 6 },
                { rank: 10, site: '河北日报', count: 5 },
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
                { rank: 1, site: '博客园', count: 9 },
                { rank: 2, site: '新浪新闻', count: 8 },
                { rank: 3, site: '搜狐网', count: 5 },
                { rank: 4, site: 'Apple', count: 5 },
                { rank: 5, site: '抖音', count: 4 },
                { rank: 6, site: '今日头条', count: 2 },
                { rank: 7, site: '买购网', count: 2 },
                { rank: 8, site: '当天达航空快递', count: 2 },
                { rank: 9, site: '什么值得买社区频道', count: 2 },
                { rank: 10, site: '咸宁新闻网', count: 2 },
            ],
        },
        {
            id: 'yuanbao',
            name: '元宝',
            logo: '/geo-platforms/yuanbao.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: 'QQ News', count: 85 },
                { rank: 2, site: '今日头条', count: 56 },
                { rank: 3, site: '新浪新闻', count: 27 },
                { rank: 4, site: '搜狐网', count: 21 },
                { rank: 5, site: '快递查询网', count: 13 },
                { rank: 6, site: '网易', count: 11 },
                { rank: 7, site: '快递鸟', count: 11 },
                { rank: 8, site: '斑橙云', count: 10 },
                { rank: 9, site: '淘宝网', count: 6 },
                { rank: 10, site: '手机新浪网', count: 6 },
            ],
        },
        {
            id: 'tongyi',
            name: '通义千问',
            logo: '/geo-platforms/qwen.png',
            color: 'from-[#004CE5]/10',
            borderColor: 'border-[#004CE5]/20',
            textColor: 'text-blue-100',
            numColor: 'text-white/30',
            data: [
                { rank: 1, site: '咸宁新闻网', count: 26 },
                { rank: 2, site: '顺丰官网', count: 23 },
                { rank: 3, site: '今日头条', count: 21 },
                { rank: 4, site: '百度知道', count: 19 },
                { rank: 5, site: '界面新闻', count: 13 },
                { rank: 6, site: '山东省邮政管理局', count: 9 },
                { rank: 7, site: '凤凰网', count: 9 },
                { rank: 8, site: '哔哩哔哩', count: 9 },
                { rank: 9, site: '新京报', count: 8 },
                { rank: 10, site: '中国网', count: 7 },
            ],
        },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放平台筛选</h1>
                <p className="text-zinc-400 text-[1.1rem] font-medium tracking-wide">
                    通过解构四大主流 AI 平台的信源特征与竞品数据，量化推导三大核心阵地
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

                <div className="w-full flex-1 grid grid-cols-4 gap-4 min-h-0">
                    {platformData.map((platform, idx) => (
                        <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                            <div className={`px-3 py-2 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2 shrink-0`}>
                                <img src={platform.logo} alt={platform.name} className="w-6 h-6 object-contain rounded-full" />
                                <h2 className={`text-[1.05rem] font-bold ${platform.textColor} tracking-widest`}>{platform.name}</h2>
                            </div>

                            <div className="flex items-center px-3 py-1.5 border-b border-white/5 bg-white/[0.01] shrink-0">
                                <span className="w-8 text-center text-[0.85rem] text-zinc-500 font-bold shrink-0">#</span>
                                <span className="flex-1 ml-1 text-[0.85rem] text-zinc-500 font-bold">网站名称</span>
                                <span className="text-[0.85rem] text-zinc-500 font-bold text-right w-14 shrink-0">引用</span>
                            </div>

                            <div className="flex flex-col flex-1 justify-around px-2 pt-1 pb-2 overflow-hidden">
                                {platform.data.map((item, i) => (
                                    <div key={i} className="flex items-center py-0.5 px-1 rounded hover:bg-white/5 transition-colors group">
                                        <span className={`font-mono text-[0.9rem] w-8 text-center shrink-0 ${platform.numColor} font-bold`}>{item.rank}</span>
                                        <span className="text-white/85 text-[0.9rem] flex-1 ml-1 truncate leading-tight">{item.site}</span>
                                        <span className="text-white/60 font-mono text-[0.9rem] text-right w-14 shrink-0">{item.count}</span>
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
