import React from 'react';

function Page_GeoReport_Dashboard_2B() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-0 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
            <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                    核心指标定义与表现概览
                </h1>
            </div>

            {/* Main Content Layout */}
            <div className="flex-1 w-full relative min-h-0 pt-[20px] pb-2 flex items-center justify-center z-10">
                <img 
                    src="/charts/geo-dashboard-1.png" 
                    alt="核心指标表现大图" 
                    className="max-w-full max-h-full w-auto h-auto rounded-2xl border border-[#004CE5]/40 shadow-[0_0_30px_rgba(0,76,229,0.25)] object-contain select-none"
                />
            </div>
        </div>
    );
}

export default Page_GeoReport_Dashboard_2B;
