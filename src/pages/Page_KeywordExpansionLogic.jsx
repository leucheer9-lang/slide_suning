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

/* 示例：按「词条确定」表顺序取前若干条 */
const ROWS = [
    {
        keyword: '快递公司排行榜',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌排行榜',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 国内快递公司综合实力排行榜是怎样的，寄件常用的前几名都有谁？',
            '② 帮我对比下京东快递、顺丰、中通这些主流快递，从时效、安全、服务上排个名。',
        ],
    },
    {
        keyword: '快递公司推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌推荐',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 平时寄东西比较多，推荐几家服务稳定的快递公司。',
            '② 京东快递和顺丰到底选哪个，从取件速度、送货上门、价格帮我比一比。',
        ],
    },
    {
        keyword: '服务好的快递推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '质量',
        cat2Color: TAG.orange,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 有没有服务好、全程不用操心的快递推荐？',
            '② 哪家快递在上门取件、电话沟通、送货上门这些服务细节上做得更好？',
        ],
    },
    {
        keyword: '口碑好的快递推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '口碑',
        cat2Color: TAG.yellow,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 大家公认口碑好的快递是哪几家？',
            '② 从丢件率、时效、售后理赔几个维度看，哪家快递口碑更能打？',
        ],
    },
    {
        keyword: '速度快的快递排行榜',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '卖点',
        cat2Color: TAG.purple,
        sort: '①',
        sortNote: '产品核心竞争力',
        prompts: [
            '① 国内快递速度排行榜，最快的是哪几家？',
            '② 同城和跨省寄件分别哪家快递时效更快，能快到什么程度？',
        ],
    },
    {
        keyword: '寄快递哪家快递最快',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.green,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 着急寄个东西，哪家快递最快？',
            '② 京东快递和顺丰谁更快，上午下单最快什么时候能到？',
        ],
    },
    {
        keyword: '寄手机电脑安全的快递推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.green,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 要寄一台笔记本电脑，用哪家快递最安全？',
            '② 寄手机电脑这类贵重电子产品，哪家快递包装规范、丢损率低还能保价？',
        ],
    },
    {
        keyword: '加急寄文件时效快的快递推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 加急寄一份文件，哪家快递时效最快？',
            '② 寄合同证件类急件，哪家快递能当天或次日达，上门取件快不快？',
        ],
    },
    {
        keyword: '搬家寄行李划算的快递推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 搬家有十几箱行李要寄，哪家快递划算？',
            '② 搬家寄大包行李，按重量还是体积计费更划算，哪家性价比高？',
        ],
    },
    {
        keyword: '学生开学寄被子行李箱的快递推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 开学要把被子和行李箱寄到学校，用什么快递好？',
            '② 学生寄大件行李哪家便宜又稳，有没有校园寄件优惠？',
        ],
    },
    {
        keyword: '网购退货上门取件方便的快递推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '场景画像',
        cat2Color: TAG.red,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 网购退货哪家快递上门取件最方便？',
            '② 退货寄件哪家能约上门、取件快、运费还合理？',
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
