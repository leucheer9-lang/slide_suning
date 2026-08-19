import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_UserCommentProblem() {
  return (
    <SlideLayout title="用户评论分析系统解决什么问题">
      <div className="w-full h-full relative select-none animate-fadeIn">
        <h2
          className="absolute top-0 left-0 text-white font-normal font-['MiSans']"
          style={{ fontSize: '40px', lineHeight: '52px', maxWidth: '1840px' }}
        >
          品牌卖点和用户真实认知错位，投放量再大，GEO数据也做不上去
        </h2>

        {/* Left: chart in a mock browser window */}
        <div
          className="absolute border border-zinc-700 bg-white flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          style={{ left: '0px', top: '74px', bottom: '0px', width: '1210px', height: '721px' }}
        >
          <div className="w-full h-10 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 shrink-0 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-6 bg-white rounded border border-zinc-200 flex items-center justify-center">
              <span className="text-[11px] text-zinc-400 font-mono select-none">geoindexfuture.com</span>
            </div>
          </div>
          <div className="flex-grow w-full bg-white flex items-center justify-center overflow-hidden relative">
            <img
              src="/images/stagnant_marketing_chart.png"
              alt="提及率瓶颈趋势"
              className="w-full h-full object-contain"
            />
            <div
              className="absolute border-[3px] border-amber-500 rounded-lg z-30 pointer-events-none shadow-[0_0_15px_rgba(245,158,11,0.4)]"
              style={{
                left: '56px',
                top: '222px',
                width: '552px',
                height: '445px',
              }}
            />
          </div>
        </div>

        <div
          className="absolute border-r border-zinc-800/80"
          style={{ left: '1240px', top: '160px', bottom: '20px' }}
        />

        {/* Right: bottleneck + baijiu case */}
        <div
          className="absolute flex flex-col justify-start gap-6"
          style={{ left: '1270px', width: '570px', top: '148px', bottom: '20px' }}
        >
          <div className="flex items-baseline justify-between border-b border-zinc-800 pb-3">
            <h3
              className="text-white font-extrabold tracking-wide"
              style={{ fontSize: '44px', lineHeight: '54px', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
            >
              白酒案例
            </h3>
          </div>

          <p
            className="text-white font-normal font-['MiSans']"
            style={{ fontSize: '26px', lineHeight: '42px' }}
          >
            很多 GEO 项目做到一定阶段后会出现明显瓶颈：内容继续加、投放继续加，但
            <span className="text-white font-bold">提及率就是上不去</span>
            。原因往往不是量不够，而是品牌在讲的卖点，与用户真实认知不一致。
          </p>

          <p
            className="text-white font-normal font-['MiSans']"
            style={{ fontSize: '26px', lineHeight: '42px' }}
          >
            品牌一直强调「<span className="text-white font-bold">口感好</span>」，年轻消费者真实反馈却大量是「
            <span className="text-white font-bold">难喝</span>
            」；改成消费者真正认可的「
            <span className="text-white font-bold">聚会小酌</span>
            」后，数据才重新增长。
          </p>

          <div className="relative border-l-4 border-[#4285F4] pl-5">
            <p
              className="text-white font-bold font-['MiSans']"
              style={{ fontSize: '26px', lineHeight: '40px' }}
            >
              不是内容发得不够多，而是讲错了消费者真正认可的卖点。
            </p>
          </div>
        </div>

        <svg className="absolute inset-0 z-20 pointer-events-none" style={{ width: '1840px', height: '795px' }}>
          <path
            d="M 608 519 C 800 519, 1000 365, 1255 365"
            stroke="#F59E0B"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6 4"
            className="opacity-90"
          />
          <circle cx="608" cy="519" r="5" fill="#F59E0B" />
          <circle cx="1255" cy="365" r="5" fill="#F59E0B" />
        </svg>

        {[
          { x: 168, y: 660, v: '22%' },
          { x: 244, y: 588, v: '63%' },
          { x: 313, y: 585, v: '66%' },
          { x: 383, y: 605, v: '54%' },
          { x: 453, y: 609, v: '51%' },
          { x: 522, y: 632, v: '39%' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute z-40 pointer-events-none"
            style={{ left: `${p.x}px`, top: `${p.y}px` }}
          >
            <div
              className="absolute w-[11px] h-[11px] rounded-full bg-[#4285F4] border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
              style={{ left: '-5.5px', top: '-5.5px' }}
            />
            <div className="absolute -translate-x-1/2 whitespace-nowrap" style={{ top: '-36px' }}>
              <span className="text-[14px] font-bold text-[#1a73e8] font-['Montserrat']">{p.v}</span>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

Page_UserCommentProblem.hideHeader = true;
