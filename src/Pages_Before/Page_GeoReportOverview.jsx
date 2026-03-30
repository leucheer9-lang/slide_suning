import React from 'react';

function Page_GeoReportOverview() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(/geo-report/page-52-overview.jpg)` }}
            />
        </div>
    );
}

Page_GeoReportOverview.isFullCanvasMode = true;
export default Page_GeoReportOverview;
