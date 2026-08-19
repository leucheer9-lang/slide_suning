import React from 'react';

import { SlideContext } from './SlideContext';
import ChapterNav from './ChapterNav';

function DefaultPlaceholder({ title }) {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white/60 mb-6">{title}</h2>
        <p className="text-lg text-zinc-600">内容待添加</p>
      </div>
    </div>
  );
}

export default function ChapterPage({ chapterIndex, sectionIndex, pageIndex, component: ContentComponent, title, nav }) {
  // 'legacy' 页面（苏宁方案本体）自身不含顶部导航，由本组件补上；
  // 其余页面通过 SlideLayout 自带页眉，这里保持为纯容器。
  const isLegacyNav = nav === 'legacy';

  const context = { chapterIndex, sectionIndex, pageIndex };

  if (isLegacyNav && ContentComponent?.isFullCanvasMode) {
    return (
      <SlideContext.Provider value={context}>
        <div className="w-full h-full relative bg-black overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <ContentComponent />
          </div>
          <div className="absolute top-0 left-0 w-full z-10 pointer-events-none [&>*]:pointer-events-auto">
            <ChapterNav
              chapterIndex={chapterIndex}
              sectionIndex={sectionIndex}
              pageIndex={pageIndex}
            />
          </div>
        </div>
      </SlideContext.Provider>
    );
  }

  return (
    <SlideContext.Provider value={context}>
      <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {isLegacyNav && (
          <ChapterNav
            chapterIndex={chapterIndex}
            sectionIndex={sectionIndex}
            pageIndex={pageIndex}
          />
        )}

        {isLegacyNav ? (
          <div className="flex-1 relative z-10 w-full min-h-0 flex flex-col mt-3 pb-5 overflow-hidden">
            {ContentComponent ? (
              <div className="flex-1 min-h-0 w-full flex flex-col">
                <ContentComponent />
              </div>
            ) : (
              <DefaultPlaceholder title={title} />
            )}
          </div>
        ) : (
          <div className="relative z-10 flex items-stretch overflow-hidden w-full h-full">
            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <DefaultPlaceholder title={title} />
            )}
          </div>
        )}
      </div>
    </SlideContext.Provider>
  );
}
