import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { SlideContext } from './SlideContext';
import SlideLayoutNative from './SlideLayoutNative';

/**
 * 公司介绍章直接用创维电视原版 SlideLayout（页面坐标不动）。
 * 其余章节仍用兼容层，把源页面缩进 ChapterNav 下方。
 */

const CANVAS_W = 1840;
const CANVAS_H = 795;
const CANVAS_H_WITH_SUBTITLE = 740;
const MARGIN = 64;
const TITLE_H = 66;
const TITLE_H_WITH_SUBTITLE = 108;

export default function SlideLayout(props) {
  const context = useContext(SlideContext);
  if (context?.nativeHeader) {
    return <SlideLayoutNative {...props} />;
  }
  return <CompatSlideLayout {...props} />;
}

function CompatSlideLayout({
  title,
  subtitle,
  children,
  className = '',
  contentClassName = '',
  fullBleed = false,
}) {
  const hostRef = useRef(null);
  const baseHeight = subtitle ? CANVAS_H_WITH_SUBTITLE : CANVAS_H;
  const [{ scale, canvasHeight }, setFit] = useState({ scale: 1, canvasHeight: baseHeight });

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const measure = () => {
      const { clientWidth: w, clientHeight: h } = host;
      if (!w || !h) return;
      const nextScale = Math.min(w / CANVAS_W, h / baseHeight, 1);
      setFit({ scale: nextScale, canvasHeight: Math.max(baseHeight, h / nextScale) });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    return () => observer.disconnect();
  }, [baseHeight]);

  const hasTitle = !fullBleed && Boolean(title);
  const contentTop = hasTitle ? (subtitle ? TITLE_H_WITH_SUBTITLE : TITLE_H) : 0;

  return (
    <div className={`w-full h-full relative overflow-hidden bg-black text-white font-sans ${className}`}>
      {hasTitle && (
        <div className="absolute z-20" style={{ top: 0, left: MARGIN, right: MARGIN }}>
          <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[22px] text-zinc-300 leading-snug mt-2.5">{subtitle}</p>
          )}
        </div>
      )}

      <div
        ref={hostRef}
        className="absolute z-10 overflow-hidden"
        style={{
          top: contentTop,
          left: fullBleed ? 0 : MARGIN,
          right: fullBleed ? 0 : MARGIN,
          bottom: 0,
        }}
      >
        <div
          className={contentClassName}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: CANVAS_W,
            height: canvasHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
