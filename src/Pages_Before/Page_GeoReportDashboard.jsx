import React, { useEffect, useRef, useState } from 'react';

const IMG_W = 1024;
const IMG_H = 630;

function Page_GeoReportDashboard() {
    const [imgError, setImgError] = useState(false);
    const boxRef = useRef(null);
    const [size, setSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const el = boxRef.current;
        if (!el) return;
        const update = () => {
            const { clientWidth: aw, clientHeight: ah } = el;
            if (aw <= 0 || ah <= 0) return;
            const ar = IMG_W / IMG_H;
            let w = aw;
            let h = aw / ar;
            if (h > ah) {
                h = ah;
                w = ah * ar;
            }
            setSize({ w, h });
        };
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-4 sm:px-6 pt-1 pb-2 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1920px] mx-auto flex flex-col flex-1 min-h-0 relative z-10">
                <div className="text-center shrink-0 mb-1">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-tight">
                        核心指标定义与表现概览
                    </h1>
                </div>

                {/* 放大铺满 + 原图比例 + 白底圆角，绝不拉伸压扁 */}
                <div ref={boxRef} className="flex-1 min-h-0 w-full flex items-center justify-center">
                    {!imgError ? (
                        <div
                            className="rounded-2xl overflow-hidden shrink-0"
                            style={{ width: size.w || undefined, height: size.h || undefined }}
                        >
                            <img
                                src="/geo-report/page-54-dashboard-left.jpg"
                                alt="核心指标表现大图"
                                className="block w-full h-full object-contain"
                                onError={() => setImgError(true)}
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl">
                            <p className="text-zinc-300 font-bold text-lg mb-2">图片加载失败</p>
                            <p className="text-[#004CE5] font-mono text-sm">/public/geo-report/page-54-dashboard-left.jpg</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page_GeoReportDashboard;
