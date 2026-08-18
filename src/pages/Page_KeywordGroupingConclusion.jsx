import React from 'react';

/* 优化词：GEO ONE 439 创维创新谷-ToC / 479 创维创新谷-ToB */
const keywordsToc = [
    '宝安区高端产业园推荐',
    '宝安区高端产业园排行榜',
    '口碑好的宝安区高端产业园推荐',
    '现成可入驻的宝安区高端产业园推荐',
    '配套齐全的宝安区高端产业园推荐',
    '有人才公寓的宝安区高端产业园推荐',
    '适合总部入驻的宝安区高端产业园推荐',
    '有大厂总部的宝安区高端产业园推荐',
    '能研发又能办公的宝安区高端产业园推荐',
    '有政策补贴的宝安区高端产业园推荐',
    '面积能灵活分割的宝安区高端产业园推荐',
    '宝安区科技产业园推荐',
    '宝安区电子信息产业园推荐',
    '宝安区新型显示产业园推荐',
    '宝安区适合科技企业入驻的产业园有哪些',
    '宝安区适合电子信息企业发展的产业园有哪些',
    '宝安区适合智能硬件企业的产业园有哪些',
    '宝安区研发办公一体化园区推荐',
    '宝安区生产研发一体化园区推荐',
    '产业园里的宝安区写字楼推荐',
    '适合总部办公的宝安区写字楼推荐',
    '宝安区产业园推荐',
    '宝安区产业园排行榜',
    '宝安区产业园有哪些',
    '口碑好的宝安区产业园推荐',
];

const keywordsTob = [
    '适合中介带客的宝安区产业园推荐',
    '支持招商渠道合作的宝安区产业园推荐',
    '适合中介长期合作的宝安区产业园推荐',
    '值得中介主推的宝安区产业园推荐',
    '中介佣金高的宝安区产业园推荐',
    '中介佣金结算快的宝安区产业园推荐',
    '中介报备流程简单的宝安区产业园推荐',
    '渠道带客成交效率高的宝安区产业园推荐',
    '客户成交容易的宝安区产业园推荐',
    '房源充足的宝安区产业园推荐',
    '有现成房源的宝安区产业园推荐',
    '有大面积房源的宝安区产业园推荐',
    '有整层房源的宝安区产业园推荐',
    '面积可灵活分割的宝安区产业园推荐',
    '适合中介带客的宝安区高端产业园推荐',
    '支持招商渠道合作的宝安区高端产业园推荐',
    '中介佣金高的宝安区高端产业园推荐',
    '有现成房源的宝安区高端产业园推荐',
    '适合中介带客的宝安区高端厂房推荐',
    '支持招商渠道合作的宝安区高端厂房推荐',
    '有大面积房源的宝安区高端厂房推荐',
    '面积可灵活分割的宝安区高端厂房推荐',
    '适合中介带客的宝安区写字楼推荐',
    '中介佣金高的宝安区写字楼推荐',
    '有整层房源的宝安区写字楼推荐',
];

/* 监测词：ToC-创维创新谷 / ToB-创维创新谷 */
const brandGroupsToc = [
    {
        name: '品牌认知',
        items: ['创维创新谷怎么样', '创维创新谷口碑怎么样', '创维创新谷适合入驻吗'],
    },
    {
        name: '产品认知',
        items: [
            '创维创新谷适合什么企业',
            '创维创新谷配套怎么样',
            '创维创新谷有公寓酒店吗',
            '创维创新谷是不是现成可入驻',
            '创维创新谷交通方便吗',
        ],
    },
    {
        name: '质量',
        items: ['创维创新谷物业怎么样', '创维创新谷园区运营怎么样', '创维创新谷写字楼质量怎么样'],
    },
    {
        name: '竞品对比',
        items: ['创维创新谷和雪花科创城哪个好', '创维创新谷和甲岸美生智谷哪个好'],
    },
    {
        name: '价格',
        items: [
            '创维创新谷租金贵吗',
            '创维创新谷性价比怎么样',
            '创维创新谷值不值这个价',
            '创维创新谷比雪花科创城便宜吗',
        ],
    },
    {
        name: '渠道及售后',
        items: ['创维创新谷怎么招租', '创维创新谷入驻麻烦吗', '创维创新谷政策补贴好申请吗'],
    },
];

const brandGroupsTob = [
    {
        name: '品牌认知',
        items: ['创维创新谷适合中介带客吗', '创维创新谷值得中介主推吗', '创维创新谷接受渠道合作吗'],
    },
    {
        name: '产品认知',
        items: [
            '创维创新谷带客容易成交吗',
            '创维创新谷招商认中介吗',
            '创维创新谷会抢中介客户吗',
            '创维创新谷渠道政策稳吗',
        ],
    },
    {
        name: '质量',
        items: ['创维创新谷招商好不好配合', '创维创新谷房源信息准不准', '创维创新谷报备保护靠谱吗'],
    },
    {
        name: '竞品对比',
        items: [
            '创维创新谷和雪花科创城哪个好带客',
            '创维创新谷和甲岸美生智谷哪个好带客',
            '创维创新谷和雪花科创城哪个好合作',
            '创维创新谷和甲岸美生智谷哪个好合作',
        ],
    },
    {
        name: '价格',
        items: ['创维创新谷中介佣金高吗', '创维创新谷结佣快吗', '创维创新谷会拖佣吗'],
    },
    {
        name: '渠道及售后',
        items: ['创维创新谷报备麻烦吗', '创维创新谷会不会跳单', '创维创新谷直租多还是走中介'],
    },
];

const monitorToc = brandGroupsToc.flatMap((g) => g.items);
const monitorTob = brandGroupsTob.flatMap((g) => g.items);

function SectionLabel({ title, count }) {
    return (
        <div className="flex items-center gap-2 mb-2.5 shrink-0">
            <span className="w-1 h-3.5 bg-[#004CE5] rounded-full shrink-0" />
            <span className="text-[15px] xl:text-[16px] font-extrabold text-white tracking-[0.1em]">
                {title}
            </span>
            <span className="font-mono text-[12px] xl:text-[13px] font-black text-[#004CE5]">{count}</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
        </div>
    );
}

function Word({ text }) {
    return (
        <div className="flex items-start gap-1.5 select-text min-w-0 group/item">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-[7px]" />
            <span className="text-[13px] xl:text-[14px] font-semibold text-zinc-300 group-hover/item:text-white transition-colors leading-[1.45]">
                {text}
            </span>
        </div>
    );
}

function WordColumn({ title, items }) {
    return (
        <div className="flex flex-col min-h-0 overflow-hidden">
            <SectionLabel title={title} count={items.length} />
            <div className="flex flex-col gap-y-[4px]">
                {items.map((kw) => (
                    <Word key={kw} text={kw} />
                ))}
            </div>
        </div>
    );
}

export default function Page_KeywordGroupingConclusion() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-1 pb-1.5 relative z-10 shrink-0 flex items-baseline gap-4">
                <h1 className="text-3xl lg:text-[32px] font-bold text-zinc-100 tracking-widest leading-none">
                    词条分组结论
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 min-h-0">
                <div className="bg-zinc-900/40 border border-white/10 rounded-2xl flex flex-col relative overflow-hidden h-full shadow-2xl min-h-0">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-70" />

                    <div className="px-5 py-2 border-b border-white/5 bg-white/[0.02] flex items-baseline gap-2.5 shrink-0">
                        <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-extrabold text-zinc-100 tracking-wider">
                            创维创新谷
                        </span>
                    </div>

                    <div className="flex-1 grid grid-cols-4 gap-x-5 xl:gap-x-6 px-4 xl:px-5 py-3.5 min-h-0 overflow-hidden">
                        <WordColumn title="优化词 · C端" items={keywordsToc} />
                        <WordColumn title="优化词 · B端" items={keywordsTob} />
                        <WordColumn title="监测词 · C端" items={monitorToc} />
                        <WordColumn title="监测词 · B端" items={monitorTob} />
                    </div>
                </div>
            </div>
        </div>
    );
}
