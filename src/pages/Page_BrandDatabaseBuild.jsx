import React from 'react';

export default function Page_BrandDatabaseBuild() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-4 px-6 lg:pt-5 lg:pb-5 lg:px-8 xl:pt-5 xl:pb-6 xl:px-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 xl:gap-4.5">

                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[34px] lg:text-[38px] xl:text-[44px] font-black text-white tracking-widest leading-tight">
                        品牌数据库建立
                    </h1>
                    
                    {/* Highly Prominent Core Goal Banner - No Generic Icons */}
                    <div className="bg-gradient-to-r from-[#004CE5]/20 via-[#004CE5]/5 to-black border border-[#004CE5]/40 rounded-2xl py-3 px-5 lg:py-3.5 lg:px-6 shadow-[0_0_35px_rgba(0,76,229,0.3)] relative overflow-hidden flex flex-col md:flex-row md:items-center gap-4 lg:gap-5 mt-1">
                        <div className="absolute top-0 left-0 w-2.5 h-full bg-[#004CE5] shadow-[0_0_20px_rgba(0,76,229,0.9)]"></div>
                        <span className="shrink-0 bg-[#004CE5] text-white px-5 py-2 rounded-xl text-base lg:text-[17px] xl:text-[19px] font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(0,76,229,0.5)]">
                            核心目的
                        </span>
                        <p className="text-zinc-100 text-[17px] lg:text-[19.5px] xl:text-[22px] font-bold flex-1 leading-relaxed">
                            将萨米特的所有碎片化信息，转化为大模型能够高效抓取、理解并调用的<strong className="text-white font-black border-b-2 border-[#004CE5] pb-0.5 ml-1.5">“专属知识数据库”</strong>。
                        </p>
                    </div>
                </div>

                {/* Two Stacked Rows Content Layout */}
                <div className="flex-1 flex flex-col gap-3.5 lg:gap-4.5 min-h-0">
                    
                    {/* Row 1: 存量输入 (Full Width, 2-column content inside) */}
                    <div className="bg-[#080809] border border-white/10 rounded-[1.5rem] py-3.5 px-5 lg:py-4 lg:px-6 flex flex-col gap-3.5 shadow-2xl relative overflow-hidden">
                        {/* Title and Scenario Inline */}
                        <div className="shrink-0 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 pb-2.5">
                            <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-[#004CE5] px-3.5 py-1 rounded text-sm lg:text-[14.5px] xl:text-[16px] font-black tracking-widest uppercase shrink-0">
                                存量输入
                            </span>
                            <span className="text-zinc-100 text-[15px] lg:text-[17.5px] xl:text-[19px] font-bold">
                                <strong className="text-white font-black mr-1.5">解决情景：</strong>消除 AI 认知空白，将企业现有的事实性资产 100% 导入模型底层。
                            </span>
                        </div>

                        {/* Contents: Table + Right Tech Card */}
                        <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-stretch">
                            {/* Table (72% width) */}
                            <div className="flex-[2.5] border border-white/5 rounded-xl bg-black/40 overflow-hidden">
                                <table className="w-full text-left border-collapse text-[15px] lg:text-[17px] xl:text-[19px] leading-relaxed">
                                    <thead>
                                        <tr className="bg-white/5 border-b border-white/10 text-zinc-400 font-bold">
                                            <th className="py-2 px-4 border-r border-white/5 w-[22%] text-[16px] lg:text-[18px] xl:text-[20px] font-extrabold text-zinc-200">资产分类</th>
                                            <th className="py-2 px-4 text-[16px] lg:text-[18px] xl:text-[20px] font-extrabold text-zinc-200">具体导入内容</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 px-4 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                品牌与企业档案
                                            </td>
                                            <td className="py-2 px-4 text-zinc-300">
                                                企业简介、母公司背景（新明珠集团）、发展历程、行业权威奖项、环保认证证书、全国核心线下门店地址库。
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 px-4 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                产品与技术参数
                                            </td>
                                            <td className="py-2 px-4 text-zinc-300">
                                                核心产品物理参数表、密缝铺贴工艺官方手册、不同家装风格的官方搭配指南。
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 px-4 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                内容与营销沉淀
                                            </td>
                                            <td className="py-2 px-4 text-zinc-300">
                                                官方深度公关稿、品牌杂志内容、千万/百万级达人合作的种草脚本、各地门店真实的买家秀实景落地照片。
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 px-4 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                服务与售后政策
                                            </td>
                                            <td className="py-2 px-4 text-zinc-300">
                                                “3624管家式服务”细则、售后响应标准、退换货与质保条款、一线销售高频收集的客户 Q&A 标准答案。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Machine Readable Optimization (28% width) - No generic icon */}
                            <div className="flex-1 bg-blue-950/15 border border-[#004CE5]/20 rounded-xl p-4.5 lg:p-5 flex items-start gap-4 shadow-[inset_0_0_20px_rgba(0,76,229,0.05)]">
                                <span className="w-3 h-3 rounded-full bg-[#004CE5] animate-pulse shadow-[0_0_12px_rgba(0,76,229,0.9)] mt-2.5 shrink-0"></span>
                                <div className="flex-1 flex flex-col gap-2.5">
                                    <h4 className="text-zinc-100 text-[17px] lg:text-[19px] xl:text-[21px] font-black">全量资产的“机器可读性”重构</h4>
                                    <p className="text-zinc-300 text-[14.5px] lg:text-[16px] xl:text-[17.5px] leading-relaxed">
                                        并非简单地堆砌 Word 或 PDF，而是转化为大模型最偏好的结构化语料（如 Q&A 问答、Schema 语义网标签、逻辑清晰的实体关系图），确保 AI 爬虫在抓取时能瞬间提炼出核心，直接提升收录权重。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: 动态调整 (Full Width, 2 dynamic cards side-by-side) */}
                    <div className="bg-[#080809] border border-white/10 rounded-[1.5rem] py-3.5 px-5 lg:py-4 lg:px-6 flex flex-col gap-3.5 shadow-2xl relative overflow-hidden">
                        {/* Title and Scenario Inline */}
                        <div className="shrink-0 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 pb-2.5">
                            <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-3.5 py-1 rounded text-sm lg:text-[14.5px] xl:text-[16px] font-black tracking-widest uppercase shrink-0">
                                动态调整
                            </span>
                            <span className="text-zinc-100 text-[15px] lg:text-[17.5px] xl:text-[19px] font-bold">
                                <strong className="text-white font-black mr-1.5">解决情景：</strong>应对品牌业务迭代，同时防范并修正在监测过程中新发现的负面信息。
                            </span>
                        </div>

                        {/* Contents: 2 full-sized cards side-by-side */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6">
                            {/* Card 1 - No generic icon */}
                            <div className="bg-black/40 border border-white/5 hover:border-purple-500/20 rounded-xl p-4.5 lg:p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                                <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.9)] mt-2 shrink-0"></span>
                                <div className="flex-1">
                                    <h3 className="text-zinc-100 font-black text-[18px] lg:text-[20px] xl:text-[22px] mb-2">业务迭代或更新</h3>
                                    <p className="text-zinc-300 text-[14.5px] lg:text-[16px] xl:text-[17.5px] leading-relaxed">
                                        当萨米特发布新产品线、举办重大品牌营销活动，或有千万级达人发布种草/带货内容时，第一时间将这些增量物料同步存入专属存储桶与数据库，转化为 AI 的最新训练语料。
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - No generic icon */}
                            <div className="bg-black/40 border border-white/5 hover:border-red-500/20 rounded-xl p-4.5 lg:p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.9)] mt-2 shrink-0"></span>
                                <div className="flex-1">
                                    <h3 className="text-zinc-100 font-black text-[18px] lg:text-[20px] xl:text-[22px] mb-2">负面信息纠正</h3>
                                    <p className="text-zinc-300 text-[14.5px] lg:text-[16px] xl:text-[17.5px] leading-relaxed">
                                        设立定期 AI 检索测试点。一旦监测系统发现 AI 突然抓取了错误的竞品信息，或生成了新的品牌负面信息，系统将立即触发警报。数据库将迅速生成针对该特定错误的高权重纠偏语料，并通过高分优化渠道进行精准投喂，对大模型的缓存认知进行清洗和覆盖。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
