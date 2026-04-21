import React from 'react';

export default function Page_Zhihu_CompanyArchitecture() {
    const groups = [
        {
            title: '产品开发与技术',
            subtitle: 'Tech & Engineering',
            members: [
                { name: '欧阳', role: '算法架构师' },
                { name: '付海青', role: 'Agent开发专家' },
                { name: '王美晓', role: '全栈工程师' },
            ]
        },
        {
            title: '数据与内容策略',
            subtitle: 'Data & Content Strategy',
            members: [
                { name: '沈龙生', role: '内容工程和数据洞察' },
                { name: '覃佳妮', role: '数据归因分析师' },
            ]
        },
        {
            title: '市场与商业化运营',
            subtitle: 'Market & Commercial',
            members: [
                { name: '任玉坤', role: '市场营销' },
                { name: '何玛丽', role: '运营服务' }
            ]
        }
    ];

    return (
        <div className="w-full h-full bg-[#030303] relative overflow-hidden font-sans flex flex-col text-white">

            {/* Background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-700/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

            {/* Header Section */}
            <div className="relative z-20 w-full pt-20 xl:pt-24 shrink-0 flex justify-center">
                <h1 className="text-[38px] font-black text-white tracking-widest leading-tight">
                    公司架构
                </h1>
            </div>

            {/* Main Organization Diagram */}
            <div className="relative z-10 flex-1 w-full px-12 lg:px-20 pb-16 flex items-center justify-center mt-4">

                {/* 3 Columns Layout */}
                <div className="w-full max-w-[1500px] xl:w-[90%] flex items-start justify-center gap-8 xl:gap-14">

                    {groups.map((group, groupIndex) => (
                        <div key={groupIndex} className="flex flex-col items-center w-full max-w-[420px]">

                            {/* Group Header */}
                            <div className="flex flex-col items-center bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl px-6 py-6 w-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                <h2 className="text-[24px] xl:text-[26px] font-bold text-zinc-100 tracking-wider text-center">
                                    {group.title}
                                </h2>
                                <p className="text-[18px] text-zinc-500 uppercase tracking-widest mt-2 font-medium">
                                    {group.subtitle}
                                </p>
                            </div>

                            {/* Connecting Line from Header to first card */}
                            <div className="w-[2px] h-10 bg-zinc-700 relative">
                                <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-zinc-700 to-transparent opacity-50"></div>
                            </div>

                            {/* Members Vertical Stack */}
                            <div className="flex flex-col items-center w-full">
                                {group.members.map((member, memberIndex) => (
                                    <React.Fragment key={memberIndex}>

                                        {/* Card */}
                                        <div className="group relative flex w-full items-center bg-[#111111]/90 backdrop-blur-3xl border-2 border-dashed border-zinc-600/60 rounded-full p-3 pr-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:border-zinc-400 hover:shadow-[0_15px_50px_rgba(255,255,255,0.05)] cursor-default">

                                            {/* Avatar */}
                                            <div className="w-16 h-16 xl:w-[72px] xl:h-[72px] rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center shrink-0 mr-5 relative overflow-hidden group-hover:bg-zinc-700 transition-colors duration-500">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 xl:w-9 xl:h-9 text-zinc-400">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>

                                            {/* Text Details */}
                                            <div className="flex flex-col flex-1 justify-center py-1 overflow-hidden">
                                                <h3 className="text-[22px] xl:text-[24px] font-bold text-zinc-100 tracking-wide truncate">
                                                    {member.name}
                                                </h3>
                                                <p className="text-[18px] text-zinc-400 font-medium mt-1 truncate">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Vertical connector line between cards (except after the last card) */}
                                        {memberIndex < group.members.length - 1 && (
                                            <div className="w-[2px] h-10 bg-zinc-700/70"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
