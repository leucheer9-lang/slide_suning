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

/* ══════════════ 数据：换打标样例时只改这一段 ══════════════ */

/* 示例：六类打标各 1 条；表内没有的三类按创新谷语境补齐 */
const ROWS = [
    {
        type: '3.搜索',
        typeColor: TAG.carmine,
        name: '产业园和写字楼有什么区别',
        desc: '用户在问业态概念和定义，要的是科普解释，不会据此选园或入驻。',
        keyword: '产业园和写字楼有什么区别',
        tag: '非购买意图',
        tagColor: TAG.slate,
        note: '用户倾向于获取业态科普，而非具体园区入驻决策。',
    },
    {
        type: '2.产品-核心痛点',
        typeColor: TAG.green,
        name: '对标尖岗山时区位与地铁不占优',
        desc: '与雪花科创城、甲岸美生智谷比，石岩轨道与接南山便利度是常见顾虑。',
        keyword: '石岩地铁口的宝安区高端产业园推荐',
        tag: '跟目标产品不符',
        tagColor: TAG.purple,
        note: '石岩轨道成熟度相对尖岗山竞品不占优，不宜作为投放主词。',
    },
    {
        type: '1.行业-核心卖点',
        typeColor: TAG.cyan,
        name: '园区有物业和停车位',
        desc: '宝安正规产业园普遍配备物业、停车和基础配套，这是入园标配，撑不起独家差异。',
        keyword: '有物业停车的宝安区高端产业园推荐',
        tag: '品类共性',
        tagColor: TAG.carmine,
        note: '物业与停车属于产业园标配能力，非创新谷独家差异。',
    },
    {
        type: '2.产品-核心痛点',
        typeColor: TAG.green,
        name: '单纯拼低价租金打不过比价导向',
        desc: '若用户只搜「最便宜厂房/园区」，容易导向更低价或更大体量在建项目，非本品主战场。',
        keyword: '便宜的宝安区高端产业园推荐',
        tag: '产品痛点',
        tagColor: TAG.blue,
        note: '极端低价导向，非创维创新谷相对优势位。',
    },
    {
        type: '2.产品-场景画像',
        typeColor: TAG.red,
        name: '园区好不好看、气派不气派',
        desc: '问法只停留在观感，没有面积、业态或入驻约束，决策指向弱。',
        keyword: '宝安好看的产业园',
        tag: '搜索意图低',
        tagColor: TAG.teal,
        note: '问法过宽，没有入驻、面积或业态指向，购买决策弱。',
    },
    {
        type: '1.行业-购买动机',
        typeColor: TAG.blue,
        name: '降低初期租金与政策成本',
        desc: '选址时关注租金水平、免租期以及高新/产业补贴能否落地，希望园区能协助申报，减轻前几年现金流压力。',
        keyword: '有政策补贴的宝安区高端产业园推荐',
        tag: '重复',
        tagColor: TAG.green,
        note: '与 0.固定 性价比 语义一致。',
    },
];

const LEFT_COLS = '40px 150px 140px minmax(0,1.2fr) minmax(0,1fr)';
const RIGHT_COLS = '140px minmax(0,1fr)';

const CRITERIA = [
    { num: '①', title: '非购买意图', desc: 'AI不会推荐任何品牌，而是以回答“信息”为主', badgeClass: 'bg-[#404040]/90 border-[#606060]/50 text-white' },
    { num: '②', title: '跟目标产品不符', desc: '与品牌定位、客户定位不符', badgeClass: 'bg-[#4F2EAF]/90 border-[#744BE3]/50 text-white' },
    { num: '③', title: '品类共性', desc: '属于行业普遍具备的特点，难以体现品牌差异', badgeClass: 'bg-[#732053]/90 border-[#9E3374]/50 text-white' },
    { num: '④', title: '产品痛点', desc: '涉及产品痛点的问题，若无解决办法，不提缺点', badgeClass: 'bg-[#144A63]/90 border-[#207299]/50 text-white' },
    { num: '⑤', title: '搜索意图低', desc: '用户搜索意图较低，表达意思比较模糊', badgeClass: 'bg-[#174E45]/90 border-[#287569]/50 text-white' },
    { num: '⑥', title: '重复', desc: '与前面的词或搜索意图相同，去掉重复项', badgeClass: 'bg-[#1E521C]/90 border-[#347A31]/50 text-white' },
];

function TaggingTable() {
    return (
        <KeywordLogicFlow
            rows={ROWS}
            arrowLabel="词条打标"
            arrowWidth="16%"
            rightWidth="34%"
            rightMinWidth={320}
            leftCols={LEFT_COLS}
            leftHeader={
                <>
                    <HeadCell />
                    <HeadCell>
                        <FieldIcon />
                        类型
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        名称
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        名称解释
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        词条生成
                    </HeadCell>
                </>
            }
            renderLeftRow={(r, i) => (
                <>
                    <Cell style={{ justifyContent: 'center', color: FLOW_C.rowNum, fontSize: 13 }}>{i + 1}</Cell>
                    <Cell>
                        <Badge label={r.type} color={r.typeColor} />
                    </Cell>
                    <Cell title={r.name} style={{ fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.name}
                    </Cell>
                    <Cell title={r.desc} style={{ color: FLOW_C.muted, fontSize: 12.5 }}>
                        <Clamp lines={2}>{r.desc}</Clamp>
                    </Cell>
                    <Cell title={r.keyword} style={{ fontWeight: 700, fontSize: 13.5, borderRight: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.keyword}
                    </Cell>
                </>
            )}
            rightHeader={
                <div style={{ display: 'grid', gridTemplateColumns: RIGHT_COLS, width: '100%' }}>
                    <HeadCell>
                        <FieldIcon />
                        词条清洗打标
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        清洗打标说明
                    </HeadCell>
                </div>
            }
            renderRightRow={(r) => (
                <div style={{ display: 'grid', gridTemplateColumns: RIGHT_COLS, width: '100%', height: '100%', alignItems: 'center' }}>
                    <Cell>
                        <Badge label={r.tag} color={r.tagColor} />
                    </Cell>
                    <Cell title={r.note} style={{ color: FLOW_C.muted, fontSize: 12.5, borderRight: 'none' }}>
                        <Clamp lines={2}>{r.note}</Clamp>
                    </Cell>
                </div>
            )}
        />
    );
}

export default function Page_KeywordTaggingLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4 min-h-0">
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">词条打标逻辑</h1>

                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 mt-1">
                        <div className="text-[18px] lg:text-[20px] xl:text-[22px] text-zinc-100 font-extrabold mb-4 tracking-wider border-b border-white/10 pb-3 flex items-center gap-2.5">
                            <span className="w-2.5 h-5 bg-[#004CE5] rounded shadow-[0_0_12px_rgba(0,76,229,0.6)]" />
                            打标依据：
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-4">
                            {CRITERIA.map((item) => (
                                <div
                                    key={item.num}
                                    className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.15] rounded-xl p-4 lg:p-5 transition-all duration-300 flex flex-col gap-3 group hover:-translate-y-0.5 shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-zinc-400 font-black text-[18px] lg:text-[20px] xl:text-[22px]">
                                            {item.num}
                                        </span>
                                        <span
                                            className={`px-4 lg:px-4.5 py-1.5 rounded-full text-[15px] lg:text-[16.5px] xl:text-[18px] font-extrabold tracking-wider border shadow-md ${item.badgeClass}`}
                                        >
                                            {item.title}
                                        </span>
                                    </div>
                                    <p className="text-zinc-200 text-[15px] lg:text-[16.5px] xl:text-[18px] leading-relaxed pl-8 font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative flex-1 min-h-0 w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <TaggingTable />
                </div>
            </div>
        </div>
    );
}
