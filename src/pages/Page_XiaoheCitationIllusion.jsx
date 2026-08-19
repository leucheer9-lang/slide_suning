import React from 'react';
import SlideLayout from '../components/SlideLayout';

const ACCENT = '#004CE5';

const ALL_CITATIONS = {
  max: 30.21,
  rows: [
    { name: '豆包', value: 30.21, highlight: true },
    { name: '元宝', value: 18.91 },
    { name: '蚂蚁阿福', value: 14.61 },
    { name: 'DeepSeek', value: 11.75 },
    { name: '通义千问', value: 11.58 },
  ],
};

const XIAOHE_CITATIONS = {
  max: 25.68,
  rows: [
    { name: '豆包', value: 25.68, highlight: true },
    { name: '元宝', value: 0 },
    { name: '蚂蚁阿福', value: 0 },
    { name: 'DeepSeek', value: 0 },
    { name: '通义千问', value: 0 },
  ],
};

function BarRow({ row, max }) {
  const empty = row.value === 0;

  return (
    <div className="flex-1 min-h-0 flex items-center gap-6">
      <span className="w-[180px] shrink-0 text-[28px] font-bold text-white leading-none whitespace-nowrap">
        {row.name}
      </span>

      <div className="flex-1 min-w-0 h-[60px] rounded-[12px] bg-white/[0.06] border border-white/[0.08] overflow-hidden">
        {!empty && (
          <div
            className="h-full rounded-[11px]"
            style={{
              width: `${(row.value / max) * 100}%`,
              background: row.highlight
                ? `linear-gradient(90deg, ${ACCENT} 0%, #4C8DFF 100%)`
                : 'rgba(255,255,255,0.16)',
            }}
          />
        )}
      </div>

      <span
        className="w-[128px] shrink-0 text-right text-[38px] font-black text-white leading-none font-['Montserrat'] tracking-tight"
        style={row.highlight ? { color: '#4C8DFF' } : undefined}
      >
        {empty ? '0' : row.value.toFixed(2)}
      </span>
    </div>
  );
}

function Chart({ index, title, data, footer }) {
  return (
    <div className="flex-1 min-w-0 rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-7 flex flex-col">
      <div className="shrink-0 flex items-baseline gap-4">
        <span className="text-[20px] font-bold leading-none font-['Montserrat']" style={{ color: ACCENT }}>
          {index}
        </span>
        <h3 className="text-[32px] font-bold text-white leading-none whitespace-nowrap">{title}</h3>
      </div>

      <div className="flex-1 min-h-0 mt-7 flex flex-col gap-4">
        {data.rows.map((row) => (
          <BarRow key={row.name} row={row} max={data.max} />
        ))}
      </div>

      <div className="shrink-0 mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
        <p className="text-[22px] text-white font-bold leading-[32px] whitespace-nowrap">{footer}</p>
      </div>
    </div>
  );
}

export default function Page_XiaoheCitationIllusion() {
  return (
    <SlideLayout title="小荷健康平台高引用率的假象">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <h2 className="shrink-0 mb-7 text-[36px] font-bold text-white leading-none">
          小荷健康的高引用是<span className="text-[#4C8DFF]">无统计学意义的虚高</span>，且
          <span className="text-[#4C8DFF]">仅对豆包平台自己有用</span>
        </h2>

        <div className="flex-1 min-h-0 flex gap-7">
          <Chart
            index="01"
            title="各AI平台单会话平均引用信源数"
            data={ALL_CITATIONS}
            footer="豆包一次回答就抓 20–30 个信源，引用池是通义千问的 2.6 倍"
          />
          <Chart
            index="02"
            title="各AI平台单会话平均引用小荷健康信源数"
            data={XIAOHE_CITATIONS}
            footer="除豆包外，小荷健康未进入任何平台的 Top3 来源"
          />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_XiaoheCitationIllusion.hideHeader = true;
