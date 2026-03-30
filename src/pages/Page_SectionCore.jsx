import React from 'react';

export default function Page_SectionCore() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            {/* Centered H1 without blue bar */}
            <div className="relative z-20 w-full pt-10 shrink-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-widest text-center">
                    板块一：核心场景
                </h1>
            </div>

            {/* Main Content Area: Table Form Layout */}
            <div className="flex-1 relative w-full px-12 lg:px-20 pb-16 pt-10 flex items-stretch min-h-0">
                <div className="w-full h-full bg-[#101010] border border-white/10 rounded-2xl px-12 py-6 shadow-2xl flex flex-col overflow-y-auto custom-scrollbar">
                    
                    {/* Row 1: 定义 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            定义
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide">
                            产品核心竞争力与核心消费人群高度集中的词条，也是品牌已经具备一定认知基础的词条。
                        </div>
                    </div>

                    {/* Row 2: 词条 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            词条
                        </div>
                        <div className="flex-1 flex flex-wrap gap-4">
                            {['嵌入式冰箱品牌推荐', '保鲜效果好的冰箱推荐', '2w预算冰箱品牌推荐', '好看的冰箱推荐'].map((tag, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-zinc-100 text-[1.15rem] flex items-center shadow-sm">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3: 时间规划 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            时间规划
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide">
                            最先开始做，贯穿整个时间周期
                        </div>
                    </div>

                    {/* Row 4: 核心策略 */}
                    <div className="flex py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            核心策略
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide text-justify">
                            <span className="font-bold text-blue-400 mb-2 block tracking-wider">“打阵地（占位巩固）”</span>
                            这一板块是方太立足AI搜索生态的基础中的基础。品牌必须将其列为最先启动，策略上无需花哨，必须通过持续、稳定且高质量的内容输出，牢牢占据这些核心痛点场景的推荐位，率先强势突围，巩固品牌在核心人群中的影响力底盘。
                        </div>
                    </div>

                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 4px; }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.4); }
            `}} />
        </div>
    );
}
