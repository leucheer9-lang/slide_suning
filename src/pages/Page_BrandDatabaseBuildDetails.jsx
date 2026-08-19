import React from 'react';
import { Database, Network, Search, Lightbulb, Scale, ShoppingCart, ArrowRight } from 'lucide-react';

export default function Page_BrandDatabaseBuildDetails() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-10 sm:px-14 pt-2 pb-3 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 min-h-0 gap-6">

                <div className="text-center shrink-0 mb-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        知识库建设与全链路转化策略
                    </h1>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
                    
                    {/* Left: 知识库建设与图谱 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="w-2 h-6 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                            <h2 className="text-2xl font-bold text-white tracking-wide">知识库与知识图谱搭建</h2>
                        </div>
                        
                        <div className="flex-1 min-h-0 flex flex-col gap-4">
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#004CE5]/20 flex items-center justify-center border border-[#004CE5]/40">
                                        <Database className="w-5 h-5 text-[#8cb1ff]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-100">1. 多维知识源接入</h3>
                                </div>
                                <p className="text-zinc-400 text-base leading-relaxed pl-13">
                                    全面聚合<strong className="text-white">苏宁官网、官方商城、企业宣传资料、家电行业白皮书</strong>等高权威信源，确保输入 AI 引擎的内容具备极高的丰富度与准确性。
                                </p>
                            </div>

                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 flex-1 min-h-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                                        <Network className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-100">2. 结构化知识图谱构建</h3>
                                </div>
                                <div className="flex-1 min-h-0 flex flex-col justify-center">
                                    <div className="grid grid-cols-2 gap-3 pl-13">
                                        <div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex flex-col gap-1.5">
                                            <span className="text-purple-400 font-bold">节点 (Entities)</span>
                                            <span className="text-zinc-400 text-sm leading-snug">苏宁易购、家电品类、促销活动(国补/以旧换新)、服务(送装一体)</span>
                                        </div>
                                        <div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex flex-col gap-1.5">
                                            <span className="text-emerald-400 font-bold">关系 (Relations)</span>
                                            <span className="text-zinc-400 text-sm leading-snug">包含、归属、优惠政策支持、售后保障等映射</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-500 text-sm mt-4 pl-13 italic">
                                        * 通过知识图谱让 AI 引擎深刻理解“苏宁不只是渠道，更是正品低价+极致服务的保障”。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: 四级链路 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="w-2 h-6 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                            <h2 className="text-2xl font-bold text-white tracking-wide">GEO 四级转化链路设计</h2>
                        </div>
                        
                        <div className="flex-1 min-h-0 bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
                            {/* Funnel Steps */}
                            {[
                                { 
                                    icon: Search, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", 
                                    title: "1. 曝光 (Exposure)", 
                                    desc: "拦截品类泛搜大词与资讯词",
                                    action: "在 AI 搜索“买家电去哪”或“国补政策解析”时，高频前置露出苏宁易购平台。" 
                                },
                                { 
                                    icon: Lightbulb, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30", 
                                    title: "2. 决策 (Decision)", 
                                    desc: "挖掘痛点提问，建立专业背书",
                                    action: "针对“网购家电不包安装怎么办”，通过高权重长文与知乎问答，植入苏宁“送装一体”方案。" 
                                },
                                { 
                                    icon: Scale, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", 
                                    title: "3. 对比 (Compare)", 
                                    desc: "竞品对比横评，凸显比较优势",
                                    action: "在“苏宁与JD买家电哪个好”中，通过知识库中预埋的价格/服务/线下店优势数据，引导 AI 输出偏向苏宁的客观对比。" 
                                },
                                { 
                                    icon: ShoppingCart, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", 
                                    title: "4. 转化 (Convert)", 
                                    desc: "精准商品词/活动词承接，引导成交",
                                    action: "结合时效性数据喂料，在 AI 回答末尾带出“双十一苏宁家电会场”或附近门店引导，完成末端收割。" 
                                }
                            ].map((step, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <div className={`flex flex-col p-4 rounded-xl border ${step.bg} ${step.border} backdrop-blur-sm relative group transition-all hover:bg-white/[0.05]`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full bg-black/40 flex items-center justify-center shrink-0 border border-white/5`}>
                                                <step.icon className={`w-6 h-6 ${step.color}`} />
                                            </div>
                                            <div className="flex flex-col min-w-0 flex-1">
                                                <div className="flex items-end gap-3 mb-1">
                                                    <span className={`text-lg font-bold ${step.color}`}>{step.title}</span>
                                                    <span className="text-zinc-300 text-sm pb-0.5">{step.desc}</span>
                                                </div>
                                                <p className="text-zinc-400 text-sm leading-relaxed">
                                                    {step.action}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {idx < arr.length - 1 && (
                                        <div className="flex justify-center -my-2 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                                                <ArrowRight className="w-4 h-4 text-zinc-500 rotate-90" />
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
