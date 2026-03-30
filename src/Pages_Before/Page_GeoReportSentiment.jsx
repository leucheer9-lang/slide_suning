import React from 'react';

function Page_GeoReportSentiment() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(/geo-report/page-64-sentiment.jpg)` }}
            />
        </div>
    );
}

Page_GeoReportSentiment.isFullCanvasMode = true;
export default Page_GeoReportSentiment;
