import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import { BookOpenCheck, FlaskConical, Workflow, Megaphone, Users } from 'lucide-react';

/**
 * 「不同类型文章展示」：总览 + 五篇成稿示意
 * 与第四部分（兴齐方案）的同名内容相比，这里的页面走 SlideLayout，
 * 以便沿用第三部分的页眉与大标题；截图路径两边共用。
 * 提问与描述保持行业通用，不落到具体产品。
 */

const TYPES = [
  {
    no: '01',
    stage: '事件曝光',
    name: '新药上市类',
    audience: '行业 · 大众媒体',
    desc: '借获批与上市事件抢占时效语料，传播面最广，是事件类提问的第一落点。',
    question: '这个药获批了吗？',
    color: '#0039B8',
    Icon: Megaphone,
  },
  {
    no: '02',
    stage: '权威口径',
    name: '指南共识类',
    audience: '医生 · 专业读者',
    desc: '以指南更新与专家共识确立权威表述，是 AI 给结论时最优先采信的依据。',
    question: '一线治疗怎么选？',
    color: '#004CE5',
    Icon: BookOpenCheck,
  },
  {
    no: '03',
    stage: '证据支撑',
    name: '临床研究类',
    audience: '医生 · 专业读者',
    desc: '把关键研究的有效率与安全性写成可整句摘抄的表述，为疗效结论提供硬证据。',
    question: '临床数据怎么样？',
    color: '#2563EB',
    Icon: FlaskConical,
  },
  {
    no: '04',
    stage: '方案说明',
    name: '方案解读类',
    audience: '医生 · 治疗决策者',
    desc: '讲清用法与对症 / 对因的角色分工，建立差异化记忆点，让 AI 复述时口径一致。',
    question: '这个方案该怎么用？',
    color: '#3B82F6',
    Icon: Workflow,
  },
  {
    no: '05',
    stage: '大众认知',
    name: '知识科普类',
    audience: '患者 · 家属',
    desc: '用通俗语言回答患者侧的真实疑问，覆盖长尾与主观类提问，避免 AI 无据可依。',
    question: '这个病该怎么治？',
    color: '#60A5FA',
    Icon: Users,
  },
];

/* ═══════════════════ 五类文章总览 ═══════════════════ */

export default function Page_ContentTypesOverview() {
  return (
    <SlideLayout
      title="同一套逻辑，产出五类文章"
      subtitle="依据高引用文章的溯源结果锁定五类内容，覆盖从医生决策到患者认知的完整提问面"
    >
      <div className="w-full h-full flex flex-col gap-5 select-none font-['MiSans'] animate-fadeIn">
        <div className="grid grid-cols-5 gap-5 items-stretch flex-1 min-h-0">
          {TYPES.map((t) => (
            <div
              key={t.no}
              className="relative flex flex-col h-full rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="h-[5px] w-full shrink-0" style={{ background: t.color, boxShadow: `0 0 18px ${t.color}80` }} />

              <div className="flex flex-col flex-1 px-7 pt-6 pb-6 min-h-0">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-['Montserrat'] text-[30px] font-black leading-none tracking-tighter"
                    style={{ color: `${t.color}66` }}
                  >
                    {t.no}
                  </span>
                  <span className="text-[15px] font-bold tracking-widest text-zinc-400 border border-white/10 bg-white/5 rounded-full px-3 py-1">
                    {t.stage}
                  </span>
                </div>

                <h3 className="text-[34px] font-black text-white tracking-wide leading-tight">{t.name}</h3>
                <span className="text-[18px] font-medium tracking-wide mt-2" style={{ color: t.color }}>
                  {t.audience}
                </span>

                <p className="text-[19px] text-zinc-400 leading-[1.7] font-light mt-5" style={{ textWrap: 'pretty' }}>
                  {t.desc}
                </p>

                <div className="flex-1 flex items-center justify-center min-h-0 py-3">
                  <div
                    className="w-[88px] h-[88px] rounded-full flex items-center justify-center"
                    style={{ border: `1px solid ${t.color}33`, background: `${t.color}0F` }}
                  >
                    <t.Icon size={40} strokeWidth={1.4} style={{ color: t.color, opacity: 0.85 }} />
                  </div>
                </div>

                <div className="shrink-0 rounded-xl bg-black/40 border border-white/5 px-4 py-3">
                  <span className="block text-[14px] font-bold tracking-widest text-zinc-500 mb-1.5">承接提问</span>
                  <span className="block text-[18px] text-zinc-200 leading-snug font-medium whitespace-nowrap">
                    「{t.question}」
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
          <p className="text-[21px] text-zinc-400 font-light tracking-wide text-center shrink-0 whitespace-nowrap">
            五类内容<strong className="text-white font-semibold">分工接力</strong>：上市类抢时效，专业类立结论，科普类补长尾
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
        </div>
      </div>
    </SlideLayout>
  );
}

/* ═══════════════════ 五类拆解 ═══════════════════ */

const DECONSTRUCT = {
  launch: {
    title: '【新药上市类】高引用写法拆解',
    subtitle: '对高引用上市类文章做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '光明网 · 新药上市类',
    image: '/charts/geo-article-analysis-anlotinib.png',
    rules: [
      { no: '01', title: '结论前置', body: '标题直接给获批 / 上市结论，导读首句写清产品定位。' },
      { no: '02', title: '导读一次给齐关键要素', body: '适应症 · 机制或剂型 · 可及性（医保 / 处方），关键信息一次说清。' },
      {
        no: '03',
        title: '五节叙事链',
        steps: [
          { k: '困局', v: '现有治疗还缺什么' },
          { k: '机制', v: '新药解决的是哪一层问题' },
          { k: '证据', v: '关键研究数字' },
          { k: '安全', v: '耐受性与能否长期用' },
          { k: '收口', v: '专家 / 指南口径 + 可及路径' },
        ],
      },
      { no: '04', title: '关键数字做成可摘抄句', body: '起效时间、有效率对照、安全性数字写成整句，便于 AI 直接引用。' },
      { no: '05', title: '专家引言抬权威', body: '用临床专家或指南共识原话收口，把叙事从事件推到治疗选择。' },
    ],
  },
  guide: {
    title: '【指南共识类】高引用写法拆解',
    subtitle: '对高引用指南解读做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '良医汇 · 指南共识类',
    image: '/charts/geo-article-analysis-guide.png',
    rules: [
      { no: '01', title: '会议 / 指南锚点前置', body: '标题写清指南或专家共识名称 + 更新主题，方便 AI 归入“权威解读”。' },
      { no: '02', title: '治疗格局用对照呈现', body: '不同路径并列，各给定位与 1–2 个关键点，避免只推单一品类。' },
      {
        no: '03',
        title: '关键口径可摘抄',
        steps: [
          { k: '分层', v: '按严重度或病因对应治疗阶梯' },
          { k: '一线', v: '指南里谁在什么位置' },
          { k: '定位', v: '本品对应哪一条推荐路径' },
        ],
      },
      { no: '04', title: '收口落个体化选择', body: '明确“按病情适配”，给谨慎结论句，降低绝对化推荐风险。' },
    ],
  },
  clinical: {
    title: '【临床研究类】高引用写法拆解',
    subtitle: '对高引用临床研究解读做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '专业媒体 · 临床研究类',
    image: '/charts/geo-article-analysis-clinical.png',
    rules: [
      { no: '01', title: '研究名即标题关键词', body: 'III 期 / 有效率 / 起效时间——一眼可检索、可引用。' },
      { no: '02', title: '先给研究一句话定位', body: '写清人群、对照、干预，读者和 AI 都能立刻抓住这是哪项研究。' },
      {
        no: '03',
        title: '读数三步法',
        steps: [
          { k: '起效', v: '节奏数字优先可摘抄' },
          { k: '疗效', v: '有效率与对照并列给出' },
          { k: '安全', v: '不良反应 / 依从性与疗效同屏出现' },
        ],
      },
      { no: '04', title: '专家对话抬权威', body: '用临床专家解读收口，把数字落到选药与长期用药语境。' },
    ],
  },
  regimen: {
    title: '【方案解读类】高引用写法拆解',
    subtitle: '对高引用方案解读做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: 'MedSci · 方案解读类',
    image: '/charts/geo-article-analysis-regimen.png',
    rules: [
      { no: '01', title: '方案别称 + 机制钩子', body: '先给一个好记的方案名和机制，建立记忆点。' },
      { no: '02', title: '结构表说清角色', body: '对症与对因分栏对照，各写清承担什么角色。' },
      {
        no: '03',
        title: '五节叙事链',
        steps: [
          { k: '困局', v: '现有方案还缺什么' },
          { k: '机制', v: '这个方案补的是哪一层' },
          { k: '证据', v: '关键研究数字' },
          { k: '安全', v: '能否长期坚持' },
          { k: '收口', v: '适用场景与处方路径' },
        ],
      },
      { no: '04', title: '对比时留边界', body: '突出差异的同时承认其他路径仍有适用场景，避免绝对化。' },
    ],
  },
  edu: {
    title: '【知识科普类】高引用写法拆解',
    subtitle: '对高引用患者科普做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '医脉通 · 知识科普类',
    image: '/charts/geo-article-analysis-edu.png',
    rules: [
      { no: '01', title: '痛点提问式标题', body: '用患者会搜的原话做标题，直接截流搜索意图。' },
      { no: '02', title: '认知 → 诊断 → 治疗闭环', body: '成因与检查先讲清，再落到治疗选择与日常护理。' },
      {
        no: '03',
        title: '对因治疗用白话拆解',
        steps: [
          { k: '为何', v: '问题持续的关键机制是什么' },
          { k: '有哪些', v: '对症 / 对因各有哪些路径' },
          { k: '举例', v: '本品作为其中一条选项出现' },
        ],
      },
      { no: '04', title: '给患者可执行建议', body: '问医生、看说明书、规律用药——写成整段，便于 AI 摘抄。' },
    ],
  },
};

function DeconstructPage({ typeKey }) {
  const meta = DECONSTRUCT[typeKey];

  return (
    <SlideLayout title={meta.title} subtitle={meta.subtitle}>
      <div className="w-full h-full flex items-stretch gap-6 select-none font-['MiSans'] animate-fadeIn">
        <div className="w-[38%] shrink-0 flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-[20px] font-bold text-blue-100 tracking-wide">高引用参考文章</h3>
            <span className="text-[13px] text-zinc-500">{meta.refTag}</span>
          </div>
          <div className="flex-1 min-h-0">
            <ArticleShot src={meta.image} alt={`${meta.title}参考文章`} />
          </div>
        </div>

        <div className="w-[48px] shrink-0 flex items-center justify-center">
          <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>

        <div className="flex-1 flex flex-col h-full min-w-0">
          <div className="flex-1 flex flex-col justify-center relative min-h-0">
            <div className="absolute left-[3px] top-3 bottom-3 w-0.5 bg-white/10" />
            <div className="space-y-5 relative z-10 pl-8">
              {meta.rules.map((rule) => (
                <div key={rule.no} className="relative flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-black" />
                  <div className="text-[#004CE5] font-mono text-[20px] font-bold pt-0.5 shrink-0 w-8">{rule.no}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[24px] font-bold text-white mb-1 tracking-wide">{rule.title}</h3>
                    {rule.steps ? (
                      <div className="text-zinc-300 text-[18px] leading-relaxed flex flex-col gap-0.5">
                        {rule.steps.map((s) => (
                          <div key={s.k} className="flex items-start gap-2">
                            <span className="text-white font-medium shrink-0 w-[2.75rem]">{s.k}</span>
                            <span>{s.v}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-zinc-300 text-[18px] leading-relaxed">{rule.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

export function Page_ContentTypeDeconstruct_Launch() {
  return <DeconstructPage typeKey="launch" />;
}
export function Page_ContentTypeDeconstruct_Guide() {
  return <DeconstructPage typeKey="guide" />;
}
export function Page_ContentTypeDeconstruct_Clinical() {
  return <DeconstructPage typeKey="clinical" />;
}
export function Page_ContentTypeDeconstruct_Regimen() {
  return <DeconstructPage typeKey="regimen" />;
}
export function Page_ContentTypeDeconstruct_Edu() {
  return <DeconstructPage typeKey="edu" />;
}

/* ═══════════════════ 五篇成稿示意 ═══════════════════ */

const DEMOS = {
  launch: {
    title: '【新药上市类】成稿示意',
    subtitle: '结论前置，关键数字写成可摘抄句，抢占获批与上市的时效语料',
    image: '/charts/geo-article-launch-demo.png',
  },
  guide: {
    title: '【指南共识类】成稿示意',
    subtitle: '以指南更新与专家共识确立权威口径，AI 给结论时优先采信',
    image: '/charts/geo-article-demo-guide.png',
  },
  clinical: {
    title: '【临床研究类】成稿示意',
    subtitle: '把有效率与安全性写成可整句引用的表述，为疗效结论提供硬证据',
    image: '/charts/geo-article-demo-clinical.png',
  },
  regimen: {
    title: '【方案解读类】成稿示意',
    subtitle: '讲清用法与对症 / 对因的角色分工，让 AI 复述时口径一致',
    image: '/charts/geo-article-demo-regimen.png',
  },
  edu: {
    title: '【知识科普类】成稿示意',
    subtitle: '用患者语言回答真实疑问，覆盖长尾与主观类提问',
    image: '/charts/geo-article-demo-edu.png',
  },
};

function ArticleShot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
      <div className="w-full h-[36px] bg-black/40 border-b border-white/10 flex items-center px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>
      <div className="flex-1 min-h-0 bg-white relative">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0B0D19]/45 text-zinc-500">
            <span className="text-[22px] font-bold tracking-widest">请放入截图</span>
            <span className="text-[15px] font-mono text-zinc-600">public{src}</span>
          </div>
        ) : (
          <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
        )}
      </div>
    </div>
  );
}

function DemoPage({ typeKey }) {
  const meta = DEMOS[typeKey];

  return (
    <SlideLayout title={meta.title} subtitle={meta.subtitle}>
      <div className="w-full h-full animate-fadeIn">
        <ArticleShot src={meta.image} alt={meta.title} />
      </div>
    </SlideLayout>
  );
}

export function Page_ContentTypeDemo_Launch() {
  return <DemoPage typeKey="launch" />;
}
export function Page_ContentTypeDemo_Guide() {
  return <DemoPage typeKey="guide" />;
}
export function Page_ContentTypeDemo_Clinical() {
  return <DemoPage typeKey="clinical" />;
}
export function Page_ContentTypeDemo_Regimen() {
  return <DemoPage typeKey="regimen" />;
}
export function Page_ContentTypeDemo_Edu() {
  return <DemoPage typeKey="edu" />;
}

Page_ContentTypesOverview.hideHeader = true;
Page_ContentTypeDeconstruct_Launch.hideHeader = true;
Page_ContentTypeDeconstruct_Guide.hideHeader = true;
Page_ContentTypeDeconstruct_Clinical.hideHeader = true;
Page_ContentTypeDeconstruct_Regimen.hideHeader = true;
Page_ContentTypeDeconstruct_Edu.hideHeader = true;
Page_ContentTypeDemo_Launch.hideHeader = true;
Page_ContentTypeDemo_Guide.hideHeader = true;
Page_ContentTypeDemo_Clinical.hideHeader = true;
Page_ContentTypeDemo_Regimen.hideHeader = true;
Page_ContentTypeDemo_Edu.hideHeader = true;
