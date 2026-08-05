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

const ROWS = [
    {
        keyword: '面包品牌排行榜',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌排行榜',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: ['① 想买预包装面包但不知道选哪个牌子，有哪些靠谱的面包品牌排行榜可以参考？'],
    },
    {
        keyword: '面包品牌推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌推荐',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 不想踩雷，直接推荐几款适合家庭常备、口味稳定的预包装面包品牌。',
            '② 帮我对比一下超市里常见的几个面包品牌，哪家综合口碑更好、更值得回购？',
        ],
    },
    {
        keyword: '品质好的面包推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '质量',
        cat2Color: TAG.orange,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 想要口感柔软、麦香明显一点的预包装面包，推荐几款品质比较好的。',
            '② 对比几款预包装吐司，哪家品控更稳、不容易干硬发酸？',
        ],
    },
    {
        keyword: '性价比高的面包推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '性价比',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 预算有限但想天天吃早餐面包，推荐几款性价比高的预包装面包。',
            '② 同样是一袋吐司，哪些牌子分量足、价格合适、性价比更高？',
        ],
    },
    {
        keyword: '口碑好的面包推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '口碑',
        cat2Color: TAG.yellow,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 周围朋友都在买的面包一般是哪些？推荐几款口碑好的预包装面包。',
            '② 小红书、超市里被反复回购的面包有哪些？求口碑好的推荐。',
        ],
    },
    {
        keyword: '适合当上班族早餐的面包推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: ['① 通勤来不及做早饭，推荐几款撕开就能吃、适合上班族早餐的预包装面包。'],
    },
    {
        keyword: '实惠好吃的面包推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.green,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: ['① 想要好吃又不贵的早餐面包，推荐几款实惠好吃、适合反复买的预包装面包。'],
    },
    {
        keyword: '学生课间加餐面包推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 孩子课间垫肚子，推荐几款独立小包装、适合学生课间加餐的面包。',
            '② 宿舍囤货不占地，有哪些撕开即食、适合学生当加餐的面包推荐？',
        ],
    },
    {
        keyword: '适合家庭囤货的面包推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 周末想一次买够一周早餐，推荐几款适合家庭囤货、保存相对方便的面包。',
            '② 三口之家早餐固定配牛奶吐司，有哪些适合家庭常备、反复回购的面包推荐？',
        ],
    },
    {
        keyword: '办公室便携面包推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 办公室茶歇或加班垫肚子，推荐几款独立包装、便携的面包。',
            '② 出差高铁上想吃干净卫生的，有哪些不容易碎、适合办公室携带的面包推荐？',
        ],
    },
    {
        keyword: '超市能买到的面包推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.green,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 不网购，就在沃尔玛永辉这类超市买，推荐几款超市能买到的靠谱面包。',
            '② 楼下便利店也能顺手买到，有哪些常见渠道里比较好买的面包推荐？',
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
