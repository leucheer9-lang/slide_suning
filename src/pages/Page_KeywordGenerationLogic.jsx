import React from 'react';
import { TAG } from '../components/BitableView';

/* ══════════════ 数据：换词条生成逻辑时只改这一段 ══════════════ */

/* 示例：词条穷举表中「类别」各取 1 条（创维创新谷；本表无搜索/社媒类） */
const ROWS = [
    {
        type: '0.固定',
        tag: TAG.slate,
        name: '品牌排行榜',
        desc: '最基本最常见的核心问法',
        keyword: '适合中介带客的宝安区产业园排行榜',
    },
    {
        type: '1.行业-购买动机',
        tag: TAG.blue,
        name: '找到能带客、能长期合作的园区',
        desc: '中介选盘先看园区是否接受渠道带客、能不能长期放盘，避免做一单就没货、或甲方不认中介。',
        keyword: '适合中介长期合作的宝安区产业园推荐',
    },
    {
        type: '1.行业-场景画像',
        tag: TAG.orange,
        name: '渠道合作与主推选盘',
        desc: '中介要决定重点推哪些园区，关注是否支持招商渠道合作、值不值得纳入主推盘。',
        keyword: '支持招商渠道合作的宝安区产业园推荐',
    },
    {
        type: '1.行业-核心卖点',
        tag: TAG.cyan,
        name: '现成可带看、房源充足',
        desc: '现楼、空置充足，约看就能看、能谈，降低带客扑空。',
        keyword: '有现成房源的宝安区产业园推荐',
    },
    {
        type: '1.行业-核心痛点',
        tag: TAG.yellow,
        name: '佣金低、结算慢、报备复杂',
        desc: '点位低或结佣拖、报备繁琐，中介不愿推。',
        keyword: '中介佣金结算快的宝安区产业园推荐',
    },
    {
        type: '2.产品-购买动机',
        tag: TAG.teal,
        name: '现楼即看即租，带客不扑空',
        desc: '创维创新谷已运营、现楼可看可租，中介带有即时入驻需求的客户时，交付确定性高于在建竞品。',
        keyword: '有现成房源的宝安区产业园推荐',
    },
    {
        type: '2.产品-场景画像',
        tag: TAG.red,
        name: '带企业客户看现成产业园',
        desc: '客户要马上入驻，中介需要现成房源、能约看到场的园区。',
        keyword: '有现成房源的宝安区产业园推荐',
    },
    {
        type: '2.产品-核心卖点',
        tag: TAG.purple,
        name: '现成房源、房源充足',
        desc: '现楼招租，体量约 45 万㎡，仍有可租余量，便于持续带客。',
        keyword: '房源充足的宝安区产业园推荐',
    },
    {
        type: '2.产品-核心痛点',
        tag: TAG.green,
        name: '石岩区位，带看距离和地铁不占优',
        desc: '相对尖岗山竞品，石岩轨道与接南山便利度弱，部分客户嫌远，带看成本更高。',
        keyword: '地铁口好带看的宝安区产业园推荐',
    },
];

const FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", system-ui, sans-serif';

const C = {
    surface: '#141414',
    head: '#1a1a1a',
    line: 'rgba(255,255,255,0.1)',
    text: '#ebebeb',
    muted: '#a0a0a0',
    rowNum: '#6b6b6b',
};

/** 左侧三列：序号+类型 | 名称 | 名称解释 */
const LEFT_COLS = '44px 170px 170px minmax(0, 1fr)';
/** 中间合并列（词条生成箭头）约占整表宽度，右侧为生成词条列 */
const ARROW_W = '24%';
const RIGHT_W = '20%';

function FieldIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f959e" strokeWidth="1.7">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 12h5M8 15h6" strokeLinecap="round" />
        </svg>
    );
}

function TypeBadge({ label, color }) {
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                maxWidth: '100%',
                padding: '3px 8px',
                borderRadius: 6,
                background: color,
                color: C.text,
                fontSize: 12.5,
                fontWeight: 600,
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
            title={label}
        >
            {label}
        </span>
    );
}

function HeadCell({ children, style }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '0 12px',
                borderRight: `1px solid ${C.line}`,
                boxSizing: 'border-box',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function Cell({ children, style, title }) {
    return (
        <div
            title={title}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                borderRight: `1px solid ${C.line}`,
                boxSizing: 'border-box',
                height: '100%',
                minWidth: 0,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

/** 中间整列合并：大号「词条生成」+ 粗箭头 */
function ArrowColumn() {
    return (
        <div
            style={{
                width: ARROW_W,
                flexShrink: 0,
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 18,
                borderLeft: `1px solid ${C.line}`,
                borderRight: `1px solid ${C.line}`,
                background: C.surface,
                zIndex: 2,
            }}
        >
            <div
                style={{
                    fontSize: 56,
                    fontWeight: 900,
                    letterSpacing: '0.18em',
                    color: '#fff',
                    lineHeight: 1,
                }}
            >
                词条生成
            </div>
            <svg width="160" height="44" viewBox="0 0 160 44" fill="none" aria-hidden>
                <path
                    d="M4 22H128"
                    stroke="#fff"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path d="M118 6L156 22L118 38Z" fill="#fff" />
            </svg>
        </div>
    );
}

function LogicTable() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: C.surface,
                fontFamily: FONT,
                color: C.text,
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* 左：输入逻辑表 */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: LEFT_COLS,
                        background: C.head,
                        borderBottom: `1px solid ${C.line}`,
                        height: 40,
                        flexShrink: 0,
                        fontSize: 13,
                        color: '#c8c8c8',
                        fontWeight: 600,
                    }}
                >
                    <HeadCell />
                    <HeadCell>
                        <FieldIcon />
                        类型
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        名称
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        名称解释
                    </HeadCell>
                </div>

                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    {ROWS.map((r, i) => (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                minHeight: 0,
                                display: 'grid',
                                gridTemplateColumns: LEFT_COLS,
                                borderBottom: i < ROWS.length - 1 ? `1px solid ${C.line}` : 'none',
                                alignItems: 'center',
                            }}
                        >
                            <Cell style={{ justifyContent: 'center', color: C.rowNum, fontSize: 13 }}>
                                {i + 1}
                            </Cell>
                            <Cell>
                                <TypeBadge label={r.type} color={r.tag} />
                            </Cell>
                            <Cell
                                title={r.name}
                                style={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {r.name}
                            </Cell>
                            <Cell title={r.desc} style={{ color: C.muted, fontSize: 13, borderRight: 'none' }}>
                                <span
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        lineHeight: 1.35,
                                    }}
                                >
                                    {r.desc}
                                </span>
                            </Cell>
                        </div>
                    ))}
                </div>
            </div>

            {/* 中：整列合并的「词条生成」箭头 */}
            <ArrowColumn />

            {/* 右：生成词条列 */}
            <div
                style={{
                    width: RIGHT_W,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 220,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '0 14px',
                        background: C.head,
                        borderBottom: `1px solid ${C.line}`,
                        height: 40,
                        flexShrink: 0,
                        fontSize: 13,
                        color: '#c8c8c8',
                        fontWeight: 600,
                    }}
                >
                    <FieldIcon />
                    词条生成
                </div>
                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    {ROWS.map((r, i) => (
                        <div
                            key={i}
                            title={r.keyword}
                            style={{
                                flex: 1,
                                minHeight: 0,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 14px',
                                borderBottom: i < ROWS.length - 1 ? `1px solid ${C.line}` : 'none',
                                fontWeight: 700,
                                fontSize: 14,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {r.keyword}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Page_KeywordGenerationLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4 min-h-0">
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        词条生成逻辑
                    </h1>
                </div>

                <div className="w-full flex flex-col gap-3 lg:gap-4 flex-1 min-h-0">
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 shrink-0">
                        <p className="text-zinc-300 text-[16px] lg:text-[17.5px] xl:text-[19px] leading-relaxed">
                            将产品的
                            <strong className="text-white font-bold">
                                购买动机、场景画像、核心卖点、核心痛点、搜索引擎数据及社媒数据
                            </strong>
                            所有核心信息收集提炼后，对照生成相应的专业词条。
                        </p>
                    </div>

                    <div className="relative flex-1 min-h-0 w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <LogicTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
