import React, { useState, useEffect } from 'react';
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

export default function ChapterPage({ chapterIndex, sectionIndex, pageIndex, component: ContentComponent, title }) {
  const [showGuides, setShowGuides] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'g' || e.key === 'G') {
        setShowGuides((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderGuides = () => {
    if (!showGuides) return null;
    return (
      <>
        {/* ── 底部字幕避让区占位说明 (仅在显示辅助线时可见) ── */}
        <div 
          className="absolute z-[99] flex items-center justify-center border-t border-dashed border-red-500/50 bg-red-950/10 pointer-events-none"
          style={{ 
            bottom: 0, 
            left: 0, 
            width: '1920px', 
            height: '40px' 
          }}
        >
          <span className="text-red-400/60 font-bold tracking-wider text-sm">
            [ 避让字幕区域，请勿排版任何文字内容 ]
          </span>
        </div>

        {/* ── 辅助参考线 (Guidelines Overlay) ── */}
        <div className="absolute inset-0 z-[98] pointer-events-none select-none">
          {/* Top Line (Navigation Bar top padding) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ top: '40px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Nav Top (40px)</span>
          </div>

          {/* Content Top Line (Below Navigation Bar) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ top: '160px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Content Top (160px)</span>
          </div>

          {/* Content Bottom Line */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ bottom: '40px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Content Bottom (1040px)</span>
          </div>

          {/* Left Margin Boundary Line (tightly aligned with navigation bar border) */}
          <div className="absolute h-full border-l-2 border-dashed border-blue-500/40" style={{ left: '64px' }}>
            <span className="absolute top-36 left-2 text-[10px] text-blue-400/80 font-mono">Left Margin (64px)</span>
          </div>

          {/* Right Margin Boundary Line (tightly aligned with navigation bar border) */}
          <div className="absolute h-full border-l-2 border-dashed border-blue-500/40" style={{ right: '64px' }}>
            <span className="absolute top-36 -left-28 text-[10px] text-blue-400/80 font-mono">Right Margin (1856px)</span>
          </div>

          {/* Center Vertical Axis */}
          <div className="absolute h-full border-l border-dashed border-zinc-700/30" style={{ left: '50%' }}>
            <span className="absolute top-1/2 left-2 text-[10px] text-zinc-500/60 font-mono">X Center (960px)</span>
          </div>

          {/* Center Horizontal Axis */}
          <div className="absolute w-full border-t border-dashed border-zinc-700/30" style={{ top: '50%' }}>
            <span className="absolute left-1/2 -top-4 text-[10px] text-zinc-500/60 font-mono">Y Center (540px)</span>
          </div>
        </div>
      </>
    );
  };

  if (ContentComponent && ContentComponent.isFullCanvasMode) {
    return (
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
        {renderGuides()}
      </div>
    );
  }

  return (
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

      <ChapterNav
        chapterIndex={chapterIndex}
        sectionIndex={sectionIndex}
        pageIndex={pageIndex}
      />

      <div className="flex-1 relative z-10 w-full flex items-stretch mt-8 pb-8 overflow-hidden">
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <DefaultPlaceholder title={title} />
        )}
      </div>

      {renderGuides()}
    </div>
  );
}
