import React from 'react';

function Page_GeoReportSources() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(/geo-report/page-61-sources.jpg)` }}
            />
        </div>
    );
}

Page_GeoReportSources.isFullCanvasMode = true;
export default Page_GeoReportSources;
