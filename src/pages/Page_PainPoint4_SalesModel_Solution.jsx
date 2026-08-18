import React from 'react';
import { pickDiverseCases } from './painpointNegatives.js';

export default function Page_PainPoint4_SalesModel_Solution() {
    const cards = pickDiverseCases(undefined, 3);

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-zinc-300 text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">02</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-zinc-100 tracking-wider">
                    零星质量与使用争议极易被AI抓取放大
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0 gap-3">
                {/* 对齐原解法截图：整块白底三列 + 竖线分隔 */}
                <div className="flex-1 flex items-center justify-center min-h-0">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full max-w-full max-h-full bg-white rounded-lg overflow-hidden flex">
                            {cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="flex-1 min-w-0 h-full flex flex-col px-5 pt-5 pb-4"
                                    style={{
                                        borderRight: i < cards.length - 1 ? '1px solid #111' : 'none',
                                    }}
                                >
                                    <div className="shrink-0 mb-3">
                                        <div className="text-[18px] xl:text-[20px] font-extrabold text-zinc-900 tracking-wide mb-3">
                                            {card.cardTitle}
                                        </div>
                                        <p className="text-[15px] xl:text-[16px] font-semibold text-zinc-800 leading-relaxed text-justify line-clamp-3">
                                            <span className="text-[#004CE5]">总结：</span>{card.summary}
                                        </p>
                                        {card.why && (
                                            <p className="text-[15px] xl:text-[16px] font-semibold text-zinc-800 leading-relaxed text-justify line-clamp-3 mt-2">
                                                <span className="text-[#004CE5]">原因：</span>{card.why}
                                            </p>
                                        )}
                                    </div>

                                    <div className="shrink-0 text-[14px] xl:text-[15px] font-bold text-[#e08c2e] mb-2">
                                        会话截图：
                                    </div>

                                    <div className="flex-1 min-h-0 w-full overflow-hidden relative bg-zinc-50">
                                        <img
                                            src={card.screenshot}
                                            alt={card.term}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                e.currentTarget.style.opacity = '0';
                                                const ph = e.currentTarget.nextElementSibling;
                                                if (ph) {
                                                    ph.classList.remove('hidden');
                                                    ph.classList.add('flex');
                                                }
                                            }}
                                        />
                                        <div className="hidden absolute inset-0 items-center justify-center text-zinc-400 text-sm">
                                            会话截图加载失败
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-zinc-200 text-lg lg:text-[20px] font-bold leading-relaxed text-justify flex-1">
                        建立园区事实数据库（交通配套 / 房源参数 / 物业与招商口径）+ 争议个案主动纠偏 + 正向入驻语料持续供给 (详见方案第四部分)
                    </p>
                </div>
            </div>
        </div>
    );
}
