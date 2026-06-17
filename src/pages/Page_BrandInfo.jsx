import React from 'react';

export default function Page_BrandInfo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest">品牌基础信息</h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-10 relative z-10 flex flex-col justify-start gap-6 min-h-0">

                {/* 核心数据 Metrics (4 Columns) */}
                <div className="grid grid-cols-4 gap-6 w-full shrink-0">
                    {[
                        { label: '创立时间', value: '1997年' },
                        { label: '现代化工厂', value: '24个' },
                        { label: '核心大盘营收', value: '53.24亿' },
                        { label: '终端经销商', value: '950+个' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-zinc-900/60 border border-white/10 rounded-xl py-7 flex flex-col items-center justify-center shadow-lg hover:border-white/20 transition-all duration-300">
                            <span className="text-zinc-400 text-base xl:text-lg tracking-widest mb-2 font-medium">{item.label}</span>
                            <span className="text-5xl xl:text-6xl font-black text-white tracking-tight">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* 基础信息 & 核心定位 (2 Columns) */}
                <div className="grid grid-cols-2 gap-6 w-full min-h-0 flex-1">
                    {/* 基础信息 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 xl:p-10 shadow-lg relative flex flex-col justify-start hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            品牌基础简介
                        </h3>
                        <p className="text-zinc-300 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed text-justify tracking-wide">
                            桃李面包股份有限公司由退休教师吴志刚于1997年在沈阳创立。作为中国本土传统的烘焙食品制造巨头，公司主营保质期在4~15天左右的“短保”包装面包、糕点，以及月饼、粽子等季节性节日食品。
                        </p>
                    </div>

                    {/* 核心定位 */}
                    <div className="bg-zinc-900/60 border border-white/10 border-l-[4px] border-l-[#004CE5] rounded-xl p-8 xl:p-10 shadow-lg relative flex flex-col justify-start hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            品牌核心定位
                        </h3>
                        <div className="text-zinc-300 text-lg lg:text-[20px] xl:text-[22px] leading-relaxed text-justify tracking-wide flex flex-col gap-4">
                            <strong className="text-white text-xl lg:text-[22px] xl:text-[24px] border-l-4 border-[#004CE5] pl-3.5">
                                “专注大众化、高性价比的‘短保’包装面包全国性领导品牌。”
                            </strong>
                            不同于现烤烘焙与长保工业面包，公司主打“新鲜、高性价比的日常早餐”，通过“中央工厂+批发”规模效应和清晨高频配送占领大众餐桌。
                        </div>
                    </div>
                </div>

                {/* 目标客群 (Full Width wrapping two columns) */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-8 xl:p-10 shadow-lg w-full flex flex-col shrink-0">
                    <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-6 flex items-center gap-2">
                        <svg className="w-7 h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        目标客群
                    </h3>

                    <div className="grid grid-cols-2 gap-12">
                        {/* Column 1 */}
                        <div className="border-l border-white/20 pl-6 flex flex-col justify-start">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-wider">
                                第一类：都市刚需早餐人群
                            </h4>
                            <p className="text-base lg:text-[19px] xl:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                聚焦学生、白领、蓝领等高节奏群体。主要满足他们清晨即拿即走、高效率且营养基础的早餐代餐诉求。
                            </p>
                        </div>
                        {/* Column 2 */}
                        <div className="border-l border-white/20 pl-6 flex flex-col justify-start">
                            <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-wider">
                                第二类：传统家庭消费与囤货客群
                            </h4>
                            <p className="text-base lg:text-[19px] xl:text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                通过大包装切片、手撕面包等经典大单品，覆盖社区、大众商超及下沉市场的日常家庭日常消费。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
