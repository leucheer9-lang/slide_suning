import React from 'react';

function Page_GeoReportEntries() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(/geo-report/page-55-entries.jpg)` }}
            />
        </div>
    );
}

Page_GeoReportEntries.isFullCanvasMode = true;
export default Page_GeoReportEntries;
