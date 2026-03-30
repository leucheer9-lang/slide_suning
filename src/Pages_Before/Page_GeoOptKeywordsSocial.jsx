import React from 'react';

export default function Page_GeoOptKeywordsSocial() {

    // --- Xiaohongshu Data (Red Theme) ---
    const xhsSearchData = [
        { keyword: "1. 冰箱冷藏数字0-7", type: "功能科普", volume: "345.2w" },
        { keyword: "2. 冰箱怎么挑选攻略", type: "选购指南", volume: "284.1w" },
        { keyword: "3. 冰箱档位0-7正确调法", type: "使用教程", volume: "198.5w" },
        { keyword: "4. 冰箱除异味", type: "痛点求助", volume: "172.3w" },
        { keyword: "5. 冰箱结冰严重怎么去除", type: "售后维修", volume: "156.4w" },
        { keyword: "6. 冰箱嵌入式推荐", type: "颜值挑选", volume: "125.8w" },
        { keyword: "7. 冰箱餐边柜一体设计", type: "装修灵感", volume: "98.6w" },
        { keyword: "8. 冰箱密封条发霉怎么清洗", type: "生活妙招", volume: "85.2w" },
        { keyword: "9. 冰箱异味怎么彻底去除", type: "深层痛点", volume: "64.1w" },
        { keyword: "10. 冰箱什么品牌最好", type: "品牌背书", volume: "45.7w" }
    ];

    const xhsTopicData = [
        { topic: "# 冰箱推荐", trait: "全品类心智，提供多维选购公式", views: "14.5亿" },
        { topic: "# 嵌入式冰箱", trait: "高颜值装修必备，主打无缝嵌入", views: "8.8亿" },
        { topic: "# 冰箱收纳", trait: "收纳强迫症福音，提升日常治愈感", views: "5.2亿" },
        { topic: "# 高端冰箱", trait: "高端生活方式，强调大容量与质感", views: "3.5亿" },
        { topic: "# 法式冰箱", trait: "法式浪漫复古风，多门分区生活", views: "2.1亿" },
        { topic: "# 冰箱好物", trait: "垂直场景延展，提升带货转化率", views: "1.7亿" },
        { topic: "# 租房冰箱", trait: "刚需场景，主打高性价比与小户型", views: "8562.6w" },
        { topic: "# 冰箱清洁", trait: "日常清洁分享，展示主妇精致生活", views: "6543.4w" },
    ];

    // --- Douyin Data (Cyan/Dark Blue Theme) ---
    const douyinSearchData = [
        { keyword: "1. 冰箱不制冷", type: "故障求助", volume: "845.2w" },
        { keyword: "2. 冰箱什么牌子的好...", type: "品牌评测", volume: "756.1w" },
        { keyword: "3. 冰箱怎么调节温度", type: "科普扫盲", volume: "623.5w" },
        { keyword: "4. 冰箱结冰的解决方法", type: "生活妙招", volume: "512.4w" },
        { keyword: "5. 冰箱小型家用", type: "单品选购", volume: "485.6w" },
        { keyword: "6. 冰箱清洗", type: "家政服务", volume: "396.2w" },
        { keyword: "7. 冰箱除异味", type: "痛点测评", volume: "345.8w" },
        { keyword: "8. 冰箱维修", type: "专业拆解", volume: "285.4w" },
        { keyword: "9. 冰箱不制冷一招搞定", type: "硬核干货", volume: "194.2w" },
        { keyword: "10. 冰箱小型", type: "租房好物", volume: "158.5w" }
    ];

    const douyinTopicData = [
        { topic: "# 冰箱", trait: "全网通用大词，覆盖海量泛娱乐流量", views: "189.2亿" },
        { topic: "# 冰箱维修", trait: "硬核维修教学，解决突发刚需故障", views: "54.7亿" },
        { topic: "# 冰箱妙招", trait: "生活科普类，极易引发大众讨论", views: "41.5亿" },
        { topic: "# 智能冰箱", trait: "黑科技展示，吸引年轻极客群体", views: "25.2亿" },
        { topic: "# 冰箱测评", trait: "横向硬核测评，建立消费者选购依据", views: "18.9亿" },
        { topic: "# 厨房冰箱", trait: "大面积应用场景展示，极易打造爆款", views: "15.6亿" },
        { topic: "# 冰箱收纳", trait: "解压治愈类视频，拉长用户停留时长", views: "10.8亿" },
        { topic: "# 定制冰箱", trait: "一体化装修流量池，精准触达新房客群", views: "9.5亿" },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">数据采集（社媒数据）</h1>
            </div>

            {/* ── Main Content Area (Two Columns) ── */}
            <div className="flex-1 relative z-10 w-full flex items-start justify-center px-8 lg:px-10 pb-4 min-h-0 container mx-auto mt-4 gap-6 overflow-hidden">

                {/* Left Column: Xiaohongshu (Red) */}
                <div className="flex-1 h-full flex flex-col gap-4 overflow-hidden">
                    {/* Header */}
                    <div className="w-full flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center overflow-hidden">
                            <img src="/logo_xhs.png" alt="小红书" className="w-6 h-6 object-contain" />
                        </div>
                        <h2 className="text-xl font-bold text-red-300 tracking-wide">小红书数据概览</h2>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500/20 to-transparent ml-2" />
                    </div>

                    {/* XHS Table 1: Search Keywords */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-[-5px_0_20px_rgba(239,68,68,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-red-500/20 bg-red-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-red-200">高频长尾搜索词 (Top 10)</h3>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">搜索词</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">需求分类</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70 text-right">预估热度</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {xhsSearchData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.5fr_1fr_1fr] ${idx !== xhsSearchData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-center shrink-0 border-r border-white/5">
                                        <div className="font-semibold text-white/90 truncate">{item.keyword}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 border-r border-white/5 flex items-center">
                                        <span className="bg-red-500/10 text-red-200/90 px-1.5 py-0.5 rounded text-[0.75rem]">{item.type}</span>
                                    </div>
                                    <div className="py-1 px-3 text-red-300/80 font-mono text-right flex items-center justify-end">
                                        {item.volume}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* XHS Table 2: Topics */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-[-5px_0_20px_rgba(239,68,68,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-red-500/20 bg-red-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-red-200">高点击话题与痛点交叉 (Top 8)</h3>
                        </div>
                        <div className="grid grid-cols-[1.2fr_1.5fr_0.8fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">热门话题标签</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">内容切入策略 (AI语境)</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70 text-right">全网浏览量</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {xhsTopicData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.2fr_1.5fr_0.8fr] ${idx !== xhsTopicData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-start border-r border-white/5">
                                        <div className="font-semibold text-red-100 leading-snug">{item.topic}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 leading-relaxed text-[0.8rem] border-r border-white/5">
                                        {item.trait}
                                    </div>
                                    <div className="py-1 px-3 text-red-300/80 font-mono text-right flex items-start justify-end">
                                        {item.views}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Right Column: Douyin (Cyan/Dark Blue) */}
                <div className="flex-1 h-full flex flex-col gap-4 overflow-hidden">
                    {/* Header */}
                    <div className="w-full flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center overflow-hidden">
                            <img src="/logo_douyin.png" alt="抖音" className="w-6 h-6 object-contain" />
                        </div>
                        <h2 className="text-xl font-bold text-cyan-300 tracking-wide">抖音数据概览</h2>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent ml-2" />
                    </div>

                    {/* Douyin Table 1: Search Keywords */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[5px_0_20px_rgba(6,182,212,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-cyan-500/20 bg-cyan-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-cyan-200">视频下拉高优搜索词 (Top 10)</h3>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">搜索词</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">视频属性分类</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70 text-right">预估热度</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {douyinSearchData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.5fr_1fr_1fr] ${idx !== douyinSearchData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-center shrink-0 border-r border-white/5">
                                        <div className="font-semibold text-white/90 truncate">{item.keyword}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 border-r border-white/5 flex items-center">
                                        <span className="bg-cyan-500/10 text-cyan-200/90 px-1.5 py-0.5 rounded text-[0.75rem]">{item.type}</span>
                                    </div>
                                    <div className="py-1 px-3 text-cyan-300/80 font-mono text-right flex items-center justify-end">
                                        {item.volume}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Douyin Table 2: Topics */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[5px_0_20px_rgba(6,182,212,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-cyan-500/20 bg-cyan-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-cyan-200">爆款话题与种草矩阵 (Top 8)</h3>
                        </div>
                        <div className="grid grid-cols-[1.2fr_1.5fr_0.8fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">热门精选话题</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">短视频算法引流策略</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70 text-right">累计播放量</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {douyinTopicData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.2fr_1.5fr_0.8fr] ${idx !== douyinTopicData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-start border-r border-white/5">
                                        <div className="font-semibold text-cyan-100 leading-snug">{item.topic}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 leading-relaxed text-[0.8rem] border-r border-white/5">
                                        {item.trait}
                                    </div>
                                    <div className="py-1 px-3 text-cyan-300/80 font-mono text-right flex items-start justify-end">
                                        {item.views}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-gradient-to-l from-cyan-500 to-transparent opacity-80 z-20" />

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}} />
        </div>
    );
}
