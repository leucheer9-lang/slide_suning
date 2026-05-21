import React from 'react';
import { Database, RefreshCw, AlertTriangle, Cpu } from 'lucide-react';

export default function Page_BrandDatabaseBuild() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-5 xl:p-6 pb-2 lg:pb-3 xl:pb-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">

                {/* Header Section */}
                <div className="mb-3 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-1.5 mb-2">
                        <span className="text-zinc-200 text-base lg:text-lg tracking-widest font-bold mr-2">执行</span>
                        <span className="text-[#004CE5] font-black text-lg lg:text-xl">04</span>
                    </div>
                    <h1 className="text-2xl lg:text-3xl font-black text-white tracking-widest mb-2 leading-tight">
                        品牌数据库建立
                    </h1>
                    
                    {/* Core Goal Banner */}
                    <div className="bg-gradient-to-r from-[#004CE5]/10 via-[#004CE5]/5 to-black border border-[#004CE5]/30 rounded-xl p-3 shadow-[0_0_20px_rgba(0,76,229,0.1)] relative overflow-hidden flex items-center gap-3">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#004CE5]"></div>
                        <Database className="w-5 h-5 text-[#004CE5] shrink-0 animate-pulse" />
                        <p className="text-zinc-200 text-xs lg:text-sm font-bold flex-1 leading-relaxed">
                            <strong className="text-white">核心目的：</strong>将萨米特的所有碎片化信息，转化为大模型能够高效抓取、理解并调用的“专属知识数据库”。
                        </p>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 xl:gap-5 min-h-0 pb-1 items-stretch">
                    
                    {/* Stock Input (Left Column - 58%) */}
                    <div className="flex-[1.25] bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] p-4 lg:p-5 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        {/* Title and Scenario */}
                        <div className="shrink-0 mb-2.5">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-[#004CE5] px-2.5 py-0.5 rounded text-xs font-black tracking-widest uppercase">
                                    存量输入
                                </span>
                                <span className="text-zinc-200 font-bold text-sm lg:text-base">消除 AI 认知空白</span>
                            </div>
                            <p className="text-zinc-400 text-[11px] lg:text-xs">
                                将企业现有的事实性资产 100% 导入模型底层。
                            </p>
                        </div>

                        {/* Table */}
                        <div className="w-full border border-white/5 rounded-xl bg-black/40 overflow-hidden mb-2.5 flex-1 flex flex-col justify-center">
                            <table className="w-full h-full text-left border-collapse text-[11px] sm:text-xs xl:text-[12.5px] leading-snug">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10 text-zinc-400 font-semibold">
                                        <th className="py-2 px-3 border-r border-white/5 w-[24%]">资产分类</th>
                                        <th className="py-2 px-3">具体导入内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-1.5 px-3 border-r border-white/5 font-semibold text-zinc-200 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full"></span>
                                            品牌与企业档案
                                        </td>
                                        <td className="py-1.5 px-3 text-zinc-400 leading-normal">
                                            企业简介、母公司背景（新明珠集团）、发展历程、行业权威奖项、环保认证证书、全国核心线下门店地址库。
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                                        <td className="py-1.5 px-3 border-r border-white/5 font-semibold text-zinc-200 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full"></span>
                                            产品与技术参数
                                        </td>
                                        <td className="py-1.5 px-3 text-zinc-400 leading-normal">
                                            核心产品物理参数表、密缝铺贴工艺官方手册、不同家装风格的官方搭配指南。
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-1.5 px-3 border-r border-white/5 font-semibold text-zinc-200 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full"></span>
                                            内容与营销沉淀
                                        </td>
                                        <td className="py-1.5 px-3 text-zinc-400 leading-normal">
                                            官方深度公关稿、品牌杂志内容、千万/百万级达人合作的种草脚本、各地门店真实的买家秀实景落地照片。
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-1.5 px-3 border-r border-white/5 font-semibold text-zinc-200 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full"></span>
                                            服务与售后政策
                                        </td>
                                        <td className="py-1.5 px-3 text-zinc-400 leading-normal">
                                            “3624管家式服务”细则、售后响应标准、退换货与质保条款、一线销售高频收集的客户 Q&A 标准答案。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Machine Readable Optimization */}
                        <div className="shrink-0 bg-blue-950/20 border border-[#004CE5]/20 rounded-xl p-2.5 flex items-start gap-3">
                            <Cpu className="w-4 h-4 text-[#004CE5] mt-0.5 shrink-0" />
                            <div className="flex-1">
                                <h4 className="text-zinc-200 text-xs font-bold mb-0.5">全量资产的“机器可读性”重构</h4>
                                <p className="text-zinc-400 text-[10.5px] xl:text-[11.5px] leading-relaxed">
                                    并非简单地堆砌 Word 或 PDF，而是转化为大模型最偏好的结构化语料（如 Q&A 问答、Schema 语义网标签、逻辑清晰的实体关系图），确保 AI 爬虫在抓取时能瞬间提炼出核心，直接提升收录权重。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Adjustment (Right Column - 42%) */}
                    <div className="flex-[0.9] bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] p-4 lg:p-5 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        {/* Title and Scenario */}
                        <div className="shrink-0 mb-2.5">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-2.5 py-0.5 rounded text-xs font-black tracking-widest uppercase">
                                    动态调整
                                </span>
                                <span className="text-zinc-200 font-bold text-sm lg:text-base">防范与修正偏差</span>
                            </div>
                            <p className="text-zinc-400 text-[11px] lg:text-xs">
                                应对品牌业务迭代，同时防范并修正新发现的负面。
                            </p>
                        </div>

                        {/* Process Card 1 */}
                        <div className="flex-1 bg-black/40 border border-white/5 rounded-xl p-3 flex items-start gap-3 mb-2.5">
                            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 shrink-0">
                                <RefreshCw className="w-4 h-4 animate-[spin_8s_linear_infinite]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-zinc-100 font-bold text-xs lg:text-sm mb-1">业务迭代或更新</h3>
                                <p className="text-zinc-400 text-[10.5px] lg:text-[11px] leading-relaxed">
                                    当萨米特发布新产品线、举办重大品牌营销活动，或有千万级达人发布种草/带货内容时，第一时间将这些增量物料同步存入专属存储桶与数据库，转化为 AI 的最新训练语料。
                                </p>
                            </div>
                        </div>

                        {/* Process Card 2 */}
                        <div className="flex-1 bg-black/40 border border-white/5 rounded-xl p-3 flex items-start gap-3">
                            <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 shrink-0">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-zinc-100 font-bold text-xs lg:text-sm mb-1">负面信息纠正</h3>
                                <p className="text-zinc-400 text-[10.5px] lg:text-[11px] leading-relaxed">
                                    设立定期 AI 检索测试点。一旦监测系统发现 AI 突然抓取了错误的竞品信息，或生成了新的品牌负面信息，系统将立即触发警报。数据库将迅速生成针对该特定错误的高权重纠偏语料，并通过高分优化渠道进行精准投喂，对大模型的缓存认知进行清洗和覆盖。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
