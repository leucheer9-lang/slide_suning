import React from 'react';
import { parsedConfig } from '../config/parseConfig';

export default function TOCSlide({ bgImage, title, menuText, brandLabel, serviceGuide }) {
  const { chapters } = parsedConfig;
  const debug = false;
  const dbg = debug ? 'bg-red-500/40' : '';

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-black">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Top-right brand line */}
      <div className={`absolute z-10 flex items-center gap-[16px] ${dbg}`} style={{ top: '38px', right: '93px' }}>
        <div className="h-[1px] bg-white/30" style={{ width: '200px' }} />
        <span
          className="text-white font-light"
          style={{ fontSize: '26px', letterSpacing: '0.3em', fontFamily: "'Montserrat', sans-serif" }}
        >
          {brandLabel}
        </span>
      </div>

      {/* Left: title */}
      <div className={`absolute z-10 ${dbg}`} style={{ top: '233px', left: '130px' }}>
        <h1
          className="text-white font-black"
          style={{ fontSize: '78px', letterSpacing: '0.05em', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
        >
          {title}
        </h1>
      </div>

      {/* Left: chapter list（company 组四章在总目录里合并为「关于我们」） */}
      {(() => {
        const tocItems = [];
        let sawCompany = false;
        for (const chapter of chapters) {
          if (chapter.group === 'company') {
            if (!sawCompany) {
              tocItems.push({ title: '关于我们' });
              sawCompany = true;
            }
            continue;
          }
          tocItems.push({ title: chapter.title.replace(/\n/g, '') });
        }
        const n = tocItems.length;
        const rowHeight = 100;
        const topMin = 390;
        const bottomMargin = 60;
        const computedTop = Math.max(topMin, 1080 - bottomMargin - n * rowHeight);
        const fontSize = Math.min(70, Math.floor(rowHeight / 1.45));
        return (
          <div className={`absolute z-10 flex flex-col ${dbg}`} style={{ top: `${computedTop}px`, left: '132px', gap: '0px' }}>
            {tocItems.map((item, i) => (
              <div key={i} className="flex items-baseline" style={{ gap: '43px', lineHeight: '1.4' }}>
                <span
                  className="text-[#004CE5]"
                  style={{ fontSize: `${fontSize}px`, fontFamily: "'MiSans', sans-serif", fontWeight: 200 }}
                >
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span
                  className="text-white"
                  style={{ fontSize: `${fontSize - 2}px`, letterSpacing: '0px', fontFamily: "'MiSans', sans-serif", fontWeight: 200 }}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        );
      })()}

      {/* Right: MENU */}
      <div className={`absolute z-10 flex flex-col items-end ${dbg}`} style={{ right: '114px', top: '76%', transform: 'translateY(-50%)' }}>
        <span
          className="text-white font-black leading-none select-none"
          style={{ fontSize: '261px', letterSpacing: '0', fontFamily: "'Roboto', sans-serif" }}
        >
          {menuText}
        </span>
        <span
          className="text-white font-light"
          style={{ fontSize: '32px', letterSpacing: '0', marginTop: '42px', marginRight: '10px' }}
        >
          {serviceGuide}
        </span>
      </div>
    </div>
  );
}
