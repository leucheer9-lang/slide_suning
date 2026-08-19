import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 各 AI 平台用户量
 * 前五名月活口径一致：QuestMobile《2026 年 AI 应用市场发展半年报》
 *   2026 年 6 月独立 AI 原生 App 月活，剔除手机厂商预装助手
 * 小荷 AI 医生、讯飞晓医未进该榜也未公开月活，只列各自公开过的数字
 */

const MAX_MAU = 38230; // 万，豆包

const APPS = [
  {
    rank: '01',
    name: '豆包',
    vendor: '字节跳动',
    logo: '/ai-logos/doubao.png',
    mau: 38230,
    label: '3.82',
    unit: '亿',
    note: '同比 +172.1%，唯一的第一梯队',
  },
  {
    rank: '02',
    name: '千问',
    vendor: '阿里巴巴',
    logo: '/ai-logos/qwen.png',
    mau: 16718,
    label: '1.67',
    unit: '亿',
    note: '同比 +5792.9%，增速全榜第一',
  },
  {
    rank: '03',
    name: 'DeepSeek',
    vendor: '深度求索',
    logo: '/ai-logos/deepseek.png',
    mau: 12982,
    label: '1.30',
    unit: '亿',
    note: '同比 −20.3%，前三里唯一缩水的',
  },
  {
    rank: '04',
    name: '元宝',
    vendor: '腾讯',
    logo: '/ai-logos/yuanbao.png',
    mau: 4984,
    label: '4984',
    unit: '万',
    note: '与前三差着一个数量级',
  },
  {
    rank: '05',
    name: '蚂蚁阿福',
    vendor: '蚂蚁健康 · 医疗垂类',
    logo: '/geo-platforms/afu.png',
    mau: 2897,
    label: '2897',
    unit: '万',
    note: '累计服务用户超 1.3 亿，单日健康提问超 1000 万',
  },
  {
    rank: '—',
    name: '小荷AI医生',
    vendor: '字节跳动 · 医疗垂类',
    logo: '/ai-logos/xiaohe-aidoctor.png',
    mau: null,
    label: '未公开',
    unit: '',
    note: 'App Store 医疗榜第 3，主入口在抖音小程序',
  },
  {
    rank: '—',
    name: '讯飞晓医',
    vendor: '科大讯飞 · 医疗垂类',
    logo: '/ai-logos/xunfei-xiaoyi.png',
    mau: null,
    label: '未公开',
    unit: '',
    note: '累计下载超 2600 万，累计 AI 咨询 1.6 亿次',
  },
];

function LogoBadge({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span className="w-[46px] h-[46px] shrink-0 rounded-[12px] bg-white/15 flex items-center justify-center text-[18px] font-bold text-white">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <span className="w-[46px] h-[46px] shrink-0 rounded-[12px] bg-white overflow-hidden flex items-center justify-center">
      <img src={src} alt={name} onError={() => setFailed(true)} className="w-full h-full object-contain" />
    </span>
  );
}

function AppRow({ app }) {
  const pct = app.mau ? Math.max((app.mau / MAX_MAU) * 100, 1.5) : 0;

  return (
    <div className="flex-1 min-h-0 rounded-[16px] border border-white/[0.08] bg-[#0B0D19]/45 px-6 flex items-center gap-6">
      <span className="w-[40px] shrink-0 text-[20px] font-bold leading-none font-['Montserrat'] text-white">
        {app.rank}
      </span>

      <div className="w-[300px] shrink-0 flex items-center gap-3.5">
        <LogoBadge src={app.logo} name={app.name} />
        <div className="min-w-0">
          <p className="text-[26px] font-bold text-white leading-none whitespace-nowrap">{app.name}</p>
          <p className="mt-2.5 text-[17px] text-white leading-none whitespace-nowrap">{app.vendor}</p>
        </div>
      </div>

      <div className="flex-1 min-w-0 h-[24px] rounded-full bg-white/[0.06] overflow-hidden">
        {app.mau ? (
          <div className="h-full rounded-full bg-[#004CE5]" style={{ width: `${pct}%` }} />
        ) : (
          <div className="h-full w-full rounded-full border border-dashed border-white/20" />
        )}
      </div>

      <div className="w-[200px] shrink-0 flex items-baseline justify-end gap-2">
        {app.mau ? (
          <>
            <span className="text-[42px] font-bold leading-none font-['Montserrat'] text-white">
              {app.label}
            </span>
            <span className="text-[24px] font-bold leading-none text-white">{app.unit}</span>
          </>
        ) : (
          <span className="text-[24px] leading-none text-white">{app.label}</span>
        )}
      </div>

      <span className="w-[500px] shrink-0 text-[19px] leading-none text-right text-white">{app.note}</span>
    </div>
  );
}

export default function Page_AiPlatformUserScale() {
  return (
    <SlideLayout
      title="各AI平台用户量"
      subtitle="QuestMobile 2026 年 6 月 AI 原生 App 月活榜，剔除手机厂商预装助手"
    >
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">

        <div className="shrink-0 h-[34px] flex items-center gap-4">
          <h3 className="text-[28px] font-bold text-white leading-none whitespace-nowrap">
            月活跃用户规模
          </h3>
          <span className="text-[19px] text-white leading-none whitespace-nowrap">
            统计月份 2026.06
          </span>
          <span className="flex-1 h-px bg-white/[0.08]" />
        </div>

        <div className="flex-1 min-h-0 mt-5 flex flex-col gap-3">
          {APPS.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </div>

        <div className="shrink-0 mt-5 flex items-start gap-8">
          <p className="flex-1 text-[18px] text-white leading-[26px]">
            前五名为 QuestMobile 同一口径的月活；小荷 AI 医生与讯飞晓医没进这份榜单，也从未公开月活，右侧列的是两家各自公开过的数字，与月活不是一回事，不能直接横比。
          </p>
          <p className="w-[520px] shrink-0 text-[18px] text-white leading-[26px]">
            榜单第 6 至 10 名为豆包爱学、即梦 AI、LoveKey、Kimi、快对 AI，均与医疗无关，此处不列。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_AiPlatformUserScale.hideHeader = true;
