import React from 'react';

const cols = 'grid-cols-[1.05fr_1fr_1.25fr_1.7fr]';

/** 末尾 2–3 字不单独掉行 */
function keepEnd(text, n = 3) {
    if (!text || text.length <= n) return text;
    return (
        <>
            {text.slice(0, -n)}
            <span className="whitespace-nowrap">{text.slice(-n)}</span>
        </>
    );
}

const rows = [
    {
        no: '01',
        accent: '#004CE5',
        who: ['5G+8K、显示', '智能硬件上下游'],
        tag: '要挨着链主做生意',
        needPunch: '离客户近，同链企业扎堆',
        needDetail: '少跑腿、少运费，技术和订单能就近协同。',
        ours: [
            '创维 13 家产业公司 + 彩电全球总部在园',
            '同链已入驻近 90 家企业',
            '进来就能挨着链主和客户做生意',
        ],
        theirs: [
            { name: '雪花', text: '多家龙头拼成综合总部，圈层散' },
            { name: '甲岸', text: '偏初创和轻量 5G，没有制造巨头带着走' },
            { name: '新桥东', text: '国企共建，招工业母机，没有电子链主' },
            { name: '全至', text: '机器人中小企业扎堆，无链主总部在园' },
            { name: '汇智', text: '专精特新总部，不是供货圈' },
        ],
    },
    {
        no: '02',
        accent: '#3B82F6',
        who: ['要补贴、要政府背书', '的企业与中介'],
        tag: '要政策能落地申报',
        needPunch: '补贴能报，荣誉能拿去交代',
        needDetail: '租金、技改、科研项目能申报；园区资质能帮融资、帮推介。',
        ours: [
            '2023 年深圳唯一省级特色产业园（电子信息）',
            '卡位宝安「超高清视频显示」产业集群',
            '中介推介时，补贴和落户奖励能讲清楚',
        ],
        theirs: [
            { name: '雪花', text: '靠华润品牌招商，没有这层省级园身份' },
            { name: '甲岸', text: '工改工，补贴和落户奖励叠不上' },
            { name: '新桥东', text: '市区专项托租金，不是电子信息省级园' },
            { name: '全至', text: '孵化器补贴，对总部型企业不够用' },
            { name: '汇智', text: '小巨人 / 上市折扣，卡的是认定身份' },
        ],
    },
    {
        no: '03',
        accent: '#10B981',
        who: ['设备重、要真开工的', '制造企业'],
        tag: '要厂房能干活',
        needPunch: '承重、排污、卸货过得去',
        needDetail: '租金别虚高，门槛别卡人，产线能直接落地。',
        ours: [
            '占地约 41 万㎡，建面约 100 万㎡',
            '厂房本来就是给创维自己的电视和电子产线盖的',
            '重车间的承重、排污、货运都能接',
        ],
        theirs: [
            { name: '雪花', text: '也有 M1 厂房，但租金和门槛更高' },
            { name: '甲岸', text: '老厂房改造，接不住大规模重生产' },
            { name: '新桥东', text: '立体工厂强，圈层是工业母机不是电子' },
            { name: '全至', text: '高层厂房有，体量只有 16.8 万㎡' },
            { name: '汇智', text: '纯研发办公，重生产接不住' },
        ],
    },
    {
        no: '04',
        accent: '#F59E0B',
        who: ['人多、要留住员工', '的成熟企业'],
        tag: '要配套能过日子',
        needPunch: '能带孩子、买菜、看电影',
        needDetail: '员工成家了，要的是过日子，不是只有宿舍食堂。',
        ours: [
            '园内有定制幼儿园，解决员工子女入学',
            '6 万㎡购物中心：宝安最大 IMAX、迪卡侬、超市',
            '配套是家庭过日子，不是年轻人逛一圈',
        ],
        theirs: [
            { name: '雪花', text: '约 4.8 万㎡啤酒小镇，偏年轻社交' },
            { name: '甲岸', text: '配套更薄，带孩子过日子差一截' },
            { name: '新桥东', text: '规划 160 万㎡居住商业，整体要到 2031' },
            { name: '全至', text: '公寓食堂商业街，体量小，园内自循环' },
            { name: '汇智', text: '1 栋宿舍 + 裙楼商业，没有家庭级商场' },
        ],
    },
];

const headers = ['谁会选', '他们要什么', '创新谷为什么对得上', '另外五家对不上'];

export default function Page_BrandWhySuning() {
    return (
        <div className="flex-1 min-h-0 w-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="shrink-0 text-center pt-4 pb-2.5 relative z-10 px-8">
                <h1 className="text-[32px] font-black text-white tracking-widest leading-none mb-2">
                    什么企业会选创维创新谷，而不去另外五家？
                </h1>
                <p className="text-zinc-400 text-[20px] leading-snug">
                    四类客户看的不是谁名气大，是谁能帮他们把产业链、产线、政策和人留下来
                </p>
            </div>

            <div className="flex-1 min-h-0 w-full max-w-[1760px] mx-auto px-6 pb-3 relative z-10 flex flex-col">
                <div className="flex-1 min-h-0 w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                    <div className={`grid ${cols} bg-black/70 border-b border-white/10 shrink-0`}>
                        {headers.map((h, i) => (
                            <div
                                key={h}
                                className={`px-5 py-3 flex items-center ${
                                    i < headers.length - 1 ? 'border-r border-white/10' : ''
                                } ${i === 2 ? 'bg-[#004CE5]/15' : ''}`}
                            >
                                <span
                                    className={`font-black tracking-widest text-[18px] ${
                                        i === 2 ? 'text-[#4B8BFF]' : 'text-zinc-400'
                                    }`}
                                >
                                    {h}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex-1 min-h-0 grid"
                        style={{ gridTemplateRows: `repeat(${rows.length}, minmax(0, 1fr))` }}
                    >
                        {rows.map((row) => (
                            <div
                                key={row.no}
                                className={`grid ${cols} min-h-0 border-b border-white/10 last:border-b-0`}
                            >
                                <div className="px-5 py-3 flex flex-col justify-center gap-1.5 border-r border-white/10 bg-black/40">
                                    <span
                                        className="self-start text-[15px] font-black tracking-widest px-2 py-0.5 rounded-md"
                                        style={{
                                            backgroundColor: `${row.accent}26`,
                                            color: row.accent,
                                        }}
                                    >
                                        {row.no}
                                    </span>
                                    <div className="text-[22px] font-black text-white leading-snug">
                                        {row.who.map((line) => (
                                            <div key={line} className="whitespace-nowrap">
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="text-[16px] font-bold leading-none whitespace-nowrap"
                                        style={{ color: row.accent }}
                                    >
                                        {row.tag}
                                    </div>
                                </div>

                                <div className="px-5 py-3 flex flex-col justify-center gap-1.5 border-r border-white/10">
                                    <div className="text-[22px] font-black text-white leading-snug whitespace-nowrap">
                                        {row.needPunch}
                                    </div>
                                    <p className="text-[18px] text-zinc-400 leading-snug">
                                        {keepEnd(row.needDetail)}
                                    </p>
                                </div>

                                <div className="px-5 py-3 flex flex-col justify-center gap-1.5 border-r border-white/10 bg-[#004CE5]/10">
                                    {row.ours.map((line) => (
                                        <div key={line} className="flex items-start gap-2">
                                            <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-[#4B8BFF] shrink-0" />
                                            <p className="text-[18px] font-semibold text-zinc-100 leading-snug">
                                                {keepEnd(line)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="px-5 py-2.5 flex flex-col justify-center gap-1">
                                    {row.theirs.map((item) => (
                                        <div key={item.name} className="flex items-start gap-2.5">
                                            <span className="shrink-0 w-[52px] text-[16px] font-black text-zinc-300 leading-snug">
                                                {item.name}
                                            </span>
                                            <p className="text-[16px] text-zinc-400 leading-snug">
                                                {keepEnd(item.text)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="shrink-0 pt-2 text-right text-zinc-500 text-[15px] leading-relaxed">
                    依据：创维创新谷公开招商资料、广东省特色产业园名单、华润雪花科创城、甲岸美生智谷、深投控 / 宝安实业、全至科创园、汇智研发中心公开信息
                </p>
            </div>
        </div>
    );
}
