import React from 'react';

function Page_GeoReportDashboard() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(/geo-report/page-54-dashboard.jpg)` }}
            />
        </div>
    );
}

Page_GeoReportDashboard.isFullCanvasMode = true;
export default Page_GeoReportDashboard;
