import React from 'react';
import {
    KeywordLogicFlow,
    Badge,
    HeadCell,
    Cell,
    FieldIcon,
    Clamp,
    TAG,
    FLOW_C,
} from '../components/KeywordLogicFlow';

/* ══════════════ 数据：换拓展样例时只改这一段 ══════════════ */

/* 示例：按「词条确定」表顺序取前若干条（创维创新谷，无 ToB/ToC 分表） */
const ROWS = [
    {
        keyword: '宝安区高端产业园排行榜',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌排行榜',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 公司要在宝安选产业园，先给一份宝安区高端产业园排行榜，把现成能入驻的排前面。',
            '② 雪花科创城、甲岸美生智谷这些宝安园区，和石岩一带的高端产业园比，排名通常怎么排？',
        ],
    },
    {
        keyword: '宝安区高端产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌推荐',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 公司要在宝安找产业园入驻，推荐几家现成能看、配套比较全的宝安区高端产业园。',
            '② 宝安区高端产业园里，现成入驻和产业匹配这两点，头部园区怎么选？',
        ],
    },
    {
        keyword: '配套齐全的宝安区高端产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '质量',
        cat2Color: TAG.orange,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 推荐配套齐全的宝安区高端产业园，最好园区里就有吃饭、住宿。',
            '② 同样是宝安高端产业园，哪些商业、公寓、酒店配得比较齐？',
        ],
    },
    {
        keyword: '有政策补贴的宝安区高端产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '性价比',
        cat2Color: TAG.cyan,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 想找能协助申报补贴的宝安区高端产业园，有哪些推荐？',
            '② 高新或产业补贴好申请的宝安园区，和只谈租金的盘比有什么差别？',
        ],
    },
    {
        keyword: '口碑好的宝安区高端产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '口碑',
        cat2Color: TAG.yellow,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 求口碑好的宝安区高端产业园推荐，别踩到还在建、带看对不上的。',
            '② 从物业、招商响应、入住企业评价看，宝安哪些高端产业园口碑更稳？',
        ],
    },
    {
        keyword: '现成可入驻的宝安区高端产业园推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 不想等交付，推荐现成可入驻的宝安区高端产业园。',
            '② 同样是宝安现成园区，哪些能马上看、马上谈、尽快装修办公？',
        ],
    },
    {
        keyword: '能研发又能办公的宝安区高端产业园推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 推荐能研发又能办公的宝安区高端产业园，不想办公和生产拆两地。',
            '② 宝安哪些高端产业园既有研发办公、又能做中试或轻生产？',
        ],
    },
    {
        keyword: '宝安区适合科技企业入驻的产业园有哪些',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 宝安区适合科技企业入驻的产业园有哪些，求推荐现成能看的。',
            '② 科技企业进宝安，产业匹配和注册政策这两点，哪些园区更对口？',
        ],
    },
];

const LEFT_COLS = '40px minmax(0,1.2fr) 112px 120px 100px minmax(0,0.85fr)';

function ExpansionTable() {
    return (
        <KeywordLogicFlow
            rows={ROWS}
            arrowLabel="词条拓展"
            arrowWidth="14%"
            rightWidth="36%"
            rightMinWidth={340}
            leftCols={LEFT_COLS}
            leftHeader={
                <>
                    <HeadCell />
                    <HeadCell>
                        <FieldIcon />
                        词条生成
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        词条分类1
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        词条分类2
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        词条排序
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        排序说明
                    </HeadCell>
                </>
            }
            renderLeftRow={(r, i) => (
                <>
                    <Cell style={{ justifyContent: 'center', color: FLOW_C.rowNum, fontSize: 13 }}>{i + 1}</Cell>
                    <Cell title={r.keyword} style={{ fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.keyword}
                    </Cell>
                    <Cell>
                        <Badge label={r.cat1} color={r.cat1Color} />
                    </Cell>
                    <Cell>
                        <Badge label={r.cat2} color={r.cat2Color} />
                    </Cell>
                    <Cell style={{ justifyContent: 'center', fontWeight: 700 }}>{r.sort}</Cell>
                    <Cell title={r.sortNote} style={{ color: FLOW_C.muted, fontSize: 12.5, borderRight: 'none' }}>
                        <Clamp lines={2}>{r.sortNote}</Clamp>
                    </Cell>
                </>
            )}
            rightHeader={
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', width: '100%' }}>
                    <FieldIcon />
                    关联提示词
                </div>
            }
            renderRightRow={(r) => (
                <div
                    title={r.prompts.join('\n')}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2,
                        padding: '0 14px',
                        fontSize: 12.5,
                        color: FLOW_C.muted,
                        lineHeight: 1.35,
                        overflow: 'hidden',
                    }}
                >
                    {r.prompts.map((p, idx) => (
                        <div
                            key={idx}
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {p}
                        </div>
                    ))}
                </div>
            )}
        />
    );
}

export default function Page_KeywordExpansionLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4 min-h-0">
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">词条拓展逻辑</h1>
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 mt-1">
                        <p className="text-zinc-300 text-[16px] lg:text-[17.5px] xl:text-[19px] leading-relaxed">
                            将生成的
                            <strong className="text-white font-bold">
                                专业核心词条、用户搜索意图、搜索引擎推荐、社媒长尾词及大模型预测词
                            </strong>
                            所有核心维度深度结合，拓宽衍生出更符合用户真实检索场景的长尾词与高价值关联词库。
                        </p>
                    </div>
                </div>

                <div className="relative flex-1 min-h-0 w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <ExpansionTable />
                </div>
            </div>
        </div>
    );
}
