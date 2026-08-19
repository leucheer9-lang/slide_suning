import React, { useState } from 'react';
import SlideLayout from '../../components/SlideLayout';

/* 每一条「变化」都对应本方案第二部分的实测页面，此处只留结论与我们的动作 */
const PLATFORMS = [
    {
        name: '豆包',
        logo: '/ai-logos/doubao.png',
        change: '改版后大量引用抖音\n读视频只读头和尾',
        action: '视频投放上量\n结论压到片头和片尾',
    },
    {
        name: '千问',
        logo: '/ai-logos/qwen.png',
        change: '上线联网检索 Agent\n问题会自己搜多轮验证',
        action: '不抢单个词\n问题链每轮都铺内容',
    },
    {
        name: '元宝',
        logo: '/ai-logos/yuanbao.png',
        change: 'Hy3 先搜索比较再回答\n内容之间开始互相竞争',
        action: '稿件必须带数据结论\n空话软文直接砍掉',
    },
    {
        name: '百度',
        logo: '/ai-logos/wenxin.png',
        change: '深度搜索成为主打\n搜索能力开放给其他 AI',
        action: 'SEO 和 GEO 一起做\n站内收录加百家号',
    },
    {
        name: 'DeepSeek',
        logo: '/ai-logos/deepseek.png',
        change: 'V4 默认百万上下文\n一次读几十篇互相印证',
        action: '补数据来源和细节\n拼证据密度不拼篇数',
    },
];

function LogoBadge({ src, name }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <span className="w-[44px] h-[44px] shrink-0 rounded-[10px] bg-white/15 flex items-center justify-center text-[18px] font-bold text-white">
                {name.slice(0, 1)}
            </span>
        );
    }

    return (
        <span className="w-[44px] h-[44px] shrink-0 rounded-[10px] bg-white overflow-hidden flex items-center justify-center">
            <img src={src} alt={name} onError={() => setFailed(true)} className="w-full h-full object-contain" />
        </span>
    );
}

export default function Page_QA_Monitor_ModelTracking() {
    return (
        <SlideLayout
            title="数据监测怎么优化和迭代？"
            subtitle="追踪各大主力平台的更新与变动，实时调整优化动作"
        >
            <div className="w-full h-full flex flex-col gap-5 animate-fadeIn font-['MiSans']">
                <div className="flex-1 min-h-0 grid grid-cols-5 gap-4">
                    {PLATFORMS.map((p) => (
                        <div
                            key={p.name}
                            className="min-w-0 h-full rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-5 py-6 flex flex-col"
                        >
                            <div className="shrink-0 flex items-center gap-3">
                                <LogoBadge src={p.logo} name={p.name} />
                                <p className="text-[28px] font-bold text-white leading-none">{p.name}</p>
                            </div>

                            <div className="flex-1 min-h-0 mt-5 flex flex-col justify-center">
                                <p className="shrink-0 text-[18px] font-bold text-white/50 leading-none tracking-wide">
                                    模型更新
                                </p>
                                <p className="mt-3.5 text-[25px] text-white leading-[38px] whitespace-pre-line">{p.change}</p>
                            </div>

                            <div className="shrink-0 my-3 flex justify-center text-[#4C8DFF]/70">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="4" x2="12" y2="20" />
                                    <polyline points="6 14 12 20 18 14" />
                                </svg>
                            </div>

                            <div className="flex-1 min-h-0 rounded-[14px] border border-[#4C8DFF]/30 bg-[#004CE5]/[0.12] px-4 py-4 flex flex-col justify-center">
                                <p className="shrink-0 text-[18px] font-bold text-[#4C8DFF] leading-none tracking-wide">
                                    我们的动作
                                </p>
                                <p className="mt-3.5 text-[25px] text-white leading-[38px] whitespace-pre-line">{p.action}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="shrink-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-5">
                    <p className="text-[26px] font-bold text-white leading-[38px]">
                        模型月月在变，投放动作也就月月在调；每次调整的效果，都会在下一次数据复盘里被验证。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Monitor_ModelTracking.hideHeader = true;
