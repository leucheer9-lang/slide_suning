import React from 'react';

export default function Page_PlatformFilterIntro() {
    const platforms = [
        { name: 'DeepSeek', file: 'platform-deepseek.png' },
        { name: '豆包', file: 'platform-doubao.png' },
        { name: 'Kimi', file: 'platform-kimi.png' },
        { name: '文心一言', file: 'platform-wenxin.png' },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放平台筛选</h1>
                <p className="text-zinc-400 text-[1.1rem] font-medium tracking-wide">
                    通过解构四大主流 AI 平台的信源特征与竞品数据，量化推导三大核心阵地
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center pb-8 z-10 min-h-0">

                {/* Top: Concise Logic row */}
                <div className="w-full flex justify-center gap-10 mb-8 shrink-0">
                    <div className="flex flex-col items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-12 py-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.95rem] tracking-widest font-medium uppercase">维度一：普适性与共性</span>
                        <h3 className="text-2xl font-bold text-white tracking-widest">A 组：共性白名单</h3>
                    </div>
                    <div className="flex flex-col items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-12 py-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.95rem] tracking-widest font-medium uppercase">维度一：差异化特征</span>
                        <h3 className="text-2xl font-bold text-white tracking-widest">B 组：平台特异性</h3>
                    </div>
                    <div className="flex flex-col items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-12 py-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-zinc-500 text-[0.95rem] tracking-widest font-medium uppercase">维度二：行业收录偏好</span>
                        <h3 className="text-2xl font-bold text-white tracking-widest">C 组：高命中高频阵地</h3>
                    </div>
                </div>

                {/* Bottom: 4 Image Placeholders Horizontal */}
                <div className="w-full flex-1 grid grid-cols-4 gap-6 min-h-0">
                    {platforms.map((p, idx) => (
                        <div key={idx} className="relative w-full h-full bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center group hover:bg-white/[0.04] transition-colors shadow-2xl">

                            {/* Image element (falls back to hidden if not found) */}
                            <img
                                src={`/proposal-platforms/${p.file}`}
                                alt={p.name}
                                className="absolute inset-0 w-full h-full object-cover object-top z-20"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />

                            {/* Underlying Placeholder UI */}
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 mb-5 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 transition-all text-white/20">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-zinc-400 text-xl font-bold tracking-widest">{p.name} 图片位</span>
                                <span className="text-zinc-600/60 text-sm mt-3 font-mono">{p.file}</span>
                            </div>

                            {/* Image Overlay Gradient for styling if img loads correctly */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-5 left-6 z-30 text-white/90 font-bold tracking-widest text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                {p.name}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
