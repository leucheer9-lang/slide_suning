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
        keyword: '适合中介带客的宝安区产业园排行榜',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌排行榜',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 做产业地产中介的，给一份适合中介带客的宝安区产业园排行榜。',
            '② 宝安接受渠道带客的园区里，现成货和佣金政策通常怎么排？',
        ],
    },
    {
        keyword: '适合中介带客的宝安区产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌推荐',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 推荐适合中介带客的宝安区产业园，要接受渠道、能约看到场。',
            '② 宝安哪些产业园对中介配合度高，不会带去了被甲方截胡？',
        ],
    },
    {
        keyword: '支持招商渠道合作的宝安区产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '质量',
        cat2Color: TAG.orange,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 推荐支持招商渠道合作的宝安区产业园，要能报备、能带看。',
            '② 宝安产业园里，哪些明确做渠道分销，不是只做直租？',
        ],
    },
    {
        keyword: '中介佣金高的宝安区产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '性价比',
        cat2Color: TAG.cyan,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 推荐中介佣金高的宝安区产业园，点位要有竞争力。',
            '② 宝安产业园渠道佣金，哪些盘给得比同行厚？',
        ],
    },
    {
        keyword: '值得中介主推的宝安区产业园推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '口碑',
        cat2Color: TAG.yellow,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 推荐值得中介主推的宝安区产业园，货和成交都要撑得住。',
            '② 宝安哪些产业园值得放进主推盘，而不是偶尔带一带？',
        ],
    },
    {
        keyword: '适合中介长期合作的宝安区产业园推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 推荐适合中介长期合作的宝安区产业园，别做一单就没货。',
            '② 宝安哪些产业园业主稳定、长期放盘，适合签渠道长约？',
        ],
    },
    {
        keyword: '中介佣金结算快的宝安区产业园推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 推荐中介佣金结算快的宝安区产业园，别拖几个月。',
            '② 宝安产业园结佣，哪些盘流程清楚、回款比较快？',
        ],
    },
    {
        keyword: '中介报备流程简单的宝安区产业园推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 推荐中介报备流程简单的宝安区产业园，别填一堆表还没保护。',
            '② 宝安哪些产业园报备规则清楚，撞单怎么处理说得明？',
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
