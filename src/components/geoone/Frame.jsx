import React from 'react';

/**
 * GEO 体检报告页的幻灯片外壳：深色底 + 居中标题 + 白框内容区。
 * aspect 控制白框比例；children 填入 GeoOneApp 或内容卡片。
 */
export default function Frame({ title, aspect = '1586/892.5', padded = true, children, footer }) {
    return (
        <div
            className={`w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 overflow-hidden animate-fade-in ${
                footer || !padded ? 'pb-10' : 'pb-0'
            }`}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                    {title}
                </h1>
            </div>

            <div
                className={`flex-1 w-full relative min-h-0 z-10 flex ${
                    footer ? 'flex-col gap-3 pt-[20px]' : 'items-center justify-center pt-[20px] pb-2'
                }`}
            >
                {footer ? (
                    <>
                        <div className="flex-1 w-full min-h-0 mb-4 flex items-center justify-center overflow-hidden">
                            <div
                                className="h-full max-w-full rounded-2xl border border-[#004CE5]/40 shadow-[0_0_30px_rgba(0,76,229,0.25)] overflow-hidden bg-white select-none"
                                style={{ aspectRatio: aspect }}
                            >
                                {children}
                            </div>
                        </div>
                        {footer}
                    </>
                ) : (
                    <div
                        className="h-full max-w-full rounded-2xl border border-[#004CE5]/40 shadow-[0_0_30px_rgba(0,76,229,0.25)] overflow-hidden bg-white select-none"
                        style={{ aspectRatio: aspect }}
                    >
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
