import React from 'react';

function Page_DataImportAnalysis() {
    return (
        <div className="w-full h-full relative bg-black overflow-hidden flex items-end justify-center pt-14 pb-1">
            <img
                src="/charts/data-import-analysis.jpg"
                alt="导入数据分析"
                className="h-full w-auto max-w-[98%] object-contain"
                draggable={false}
            />
        </div>
    );
}

Page_DataImportAnalysis.isFullCanvasMode = true;
export default Page_DataImportAnalysis;
