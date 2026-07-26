import React from 'react';
import FeishuKeywordsClassifyTable from '../components/FeishuKeywordsClassifyTable';
import { GEO_KEYWORDS_CLASSIFY, CLASSIFY_PAGE_SLICES } from '../data/geoKeywordsClassify';

export default function Page_GeoOptKeywordsClassify4() {
    const [from, to] = CLASSIFY_PAGE_SLICES[1];
    const rows = GEO_KEYWORDS_CLASSIFY.slice(from, to);

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="flex-1 w-full px-4 lg:px-8 pb-8 mt-6 min-h-0 relative z-10 flex flex-col items-center justify-start overflow-hidden">
                <div className="w-full h-full max-w-[1700px] overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col relative group transition-all duration-300 hover:border-white/20">
                    <div className="w-full h-[30px] sm:h-[36px] bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-4 shrink-0 relative z-20">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-white/5 rounded-md border border-white/5" />
                    </div>

                    <div className="w-full flex-1 relative min-h-0 overflow-hidden bg-[#0a0a0a]">
                        <FeishuKeywordsClassifyTable rows={rows} startIndex={from + 1} />
                    </div>
                </div>
            </div>
        </div>
    );
}
