import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Page_BrandDatabaseBuildDetails() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-2 pb-2 px-3 lg:pt-3 lg:pb-3 lg:px-4 xl:px-5 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1920px] mx-auto flex flex-col h-full relative z-10 min-h-0">
                
                {/* Main Content Area - two giant images fill the frame */}
                <div className="w-full flex-1 flex items-stretch justify-center gap-2 lg:gap-3 xl:gap-4 min-h-0">
                    
                    {/* Left: 品牌信息收集 */}
                    <div className="flex flex-col items-center gap-1.5 lg:gap-2 flex-1 min-w-0 min-h-0">
                        <div className="text-zinc-300 font-black text-2xl lg:text-3xl xl:text-[34px] tracking-widest text-center shrink-0">
                            品牌信息收集
                        </div>
                        <div className="flex-1 min-h-0 w-full bg-zinc-950 border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                            <img 
                                src="/Add_Charts/brand-info-collection.png" 
                                alt="品牌信息收集" 
                                className="h-full w-full object-contain block"
                            />
                        </div>
                    </div>

                    {/* Middle: Connecting Arrow */}
                    <div className="shrink-0 flex items-center justify-center self-center pt-8">
                        <ArrowRight className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-[#004CE5] opacity-90" strokeWidth={2.5} />
                    </div>

                    {/* Right: 输入数据库后台 */}
                    <div className="flex flex-col items-center gap-1.5 lg:gap-2 flex-1 min-w-0 min-h-0">
                        <div className="text-zinc-300 font-black text-2xl lg:text-3xl xl:text-[34px] tracking-widest text-center shrink-0">
                            输入数据库后台
                        </div>
                        <div className="flex-1 min-h-0 w-full bg-zinc-950 border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                            <img 
                                src="/Add_Charts/brand-database-backend.png" 
                                alt="输入数据库后台" 
                                className="h-full w-full object-contain block"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
