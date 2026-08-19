import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3-1 招标怎么设门槛
   背景：GEO 供应商众多、能力差异大，低价竞标者交付能力难判断。
   思路：把考察从「纸面承诺」换成「现场课题」，四种能力装不出来。
   版式：上（一句结论）→ 中（四道课题并排）→ 下（评标权重）
   ============================================================ */

const DIMENSIONS = [
    {
        no: '01',
        name: '平台研究能力',
        topic: '现场讲解近 3 个月主流 AI 平台的算法变化与应对，如豆包改版、千问检索 Agent 化',
        watch: '有一手实测数据与自研监测系统，还是只会转述行业文章',
    },
    {
        no: '02',
        name: '医药内容能力',
        topic: '针对指定产品现场给出稿件框架，并完整说明医学审核流程',
        watch: '有医学背景撰写团队与医生审核机制，内容经得起 AI 引用',
    },
    {
        no: '03',
        name: '信源资源真实性',
        topic: '提供药品数据库、医生问答等垂直信源的合作证明与收录案例，接受抽查',
        watch: '资源是自有直连还是层层转包，收录能否当场搜索验证',
    },
    {
        no: '04',
        name: '持续优化能力',
        topic: '出示既有客户连续 6 个月以上的提及率曲线与逐月迭代记录',
        watch: '效果可归因、可复现，还是一次性刷量后无法维持',
    },
];

const WEIGHTS = [
    ['技术能力', '≥ 60%'],
    ['商务方案', '20%'],
    ['价格', '≤ 20%'],
];

export default function Page_QA_Bid_Threshold() {
    return (
        <SlideLayout
            title="招标怎么设门槛"
            subtitle="报价可以压得很低，四种能力装不出来——用现场课题代替纸面承诺"
        >
            <div className="w-full h-full flex flex-col gap-5 animate-fadeIn font-['MiSans']">
                {/* ── 上：一句结论 ── */}
                <div className="shrink-0 h-[136px] rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 flex items-center gap-9 px-10 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />
                    <span className="shrink-0 text-[42px] font-bold text-white leading-[54px] whitespace-nowrap">
                        低价能写进标书，<span className="text-[#2E6DFF]">能力写不进标书</span>。
                    </span>
                    <div className="w-px h-[76px] bg-white/15 shrink-0" />
                    <p className="flex-1 min-w-0 text-[23px] text-white leading-[35px] text-justify">
                        GEO 供应商数量多、能力差异大，极低报价者的交付能力与资源真实性很难从标书判断。
                        解法：把考察从「承诺了什么」换成「当场做什么」——四个维度各设一道现场课题。
                    </p>
                </div>

                {/* ── 中：四道现场课题 ── */}
                <div className="flex-1 min-h-0 flex gap-4">
                    {DIMENSIONS.map((d) => (
                        <div
                            key={d.no}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 pt-7 pb-6 flex flex-col relative overflow-hidden"
                        >
                            <span className="absolute left-0 top-0 w-full h-[4px] bg-[#004CE5]" />

                            <div className="flex items-center gap-4">
                                <span className="text-[52px] font-black text-[#2E6DFF] leading-none font-['Montserrat']">
                                    {d.no}
                                </span>
                                <span className="text-[29px] font-bold text-white leading-none whitespace-nowrap">
                                    {d.name}
                                </span>
                            </div>

                            <div className="w-full h-px bg-white/10 my-5" />

                            <span className="w-fit px-3 py-1.5 rounded-[7px] bg-[#004CE5] text-[18px] font-bold text-white leading-none">
                                现场课题
                            </span>
                            <p className="mt-3 text-[22px] text-white leading-[33px] text-justify">{d.topic}</p>

                            <div className="mt-auto pt-4">
                                <span className="w-fit inline-block px-3 py-1.5 rounded-[7px] bg-white/10 text-[18px] font-bold text-white leading-none">
                                    重点看什么
                                </span>
                                <p className="mt-3 text-[22px] font-bold text-white leading-[33px] text-justify">
                                    {d.watch}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── 下：评标权重建议 ── */}
                <div className="shrink-0 h-[110px] rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/10 flex items-center gap-8 px-10">
                    <span className="shrink-0 text-[26px] font-bold text-white leading-none whitespace-nowrap">
                        评标权重建议
                    </span>
                    <div className="w-px h-[56px] bg-white/15 shrink-0" />
                    <div className="shrink-0 flex items-center gap-10">
                        {WEIGHTS.map(([k, v]) => (
                            <div key={k} className="flex items-center gap-3.5">
                                <span className="text-[40px] font-black text-[#2E6DFF] leading-none font-['Montserrat'] tabular-nums whitespace-nowrap">
                                    {v}
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none whitespace-nowrap">
                                    {k}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-px h-[56px] bg-white/15 shrink-0" />
                    <p className="flex-1 min-w-0 text-[21px] text-white leading-[31px]">
                        设置合理报价区间，明显低于成本线的报价按<span className="font-bold">无效标</span>处理，避免恶意低价扰乱评审。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Bid_Threshold.hideHeader = true;
