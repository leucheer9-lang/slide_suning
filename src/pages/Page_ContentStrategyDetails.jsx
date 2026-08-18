import React from 'react';

/* ══════════════ 数据：换明细列表时只改这一段 ══════════════ */
/* 来源：投放平台量化分析_创维创新谷-ToB① Excel · 引用文章Top100分析 · 2026-08-14 */

const BRAND = '创维创新谷';
const BRAND_FULL = '创维创新谷';

/** 综合 Top 100（按总引用次数排序，取前 9 篇） */
const LEFT_ROWS = [
    { cites: 16, category: '其他', platform: '深圳政府在线', title: '宝安集中推出独栋优质物业并介绍相关租金优惠，满足企业多样化空间诉求', hit: false, site: 'sz.gov.cn' },
    { cites: 11, category: '排行榜', platform: '宝安区政府在线', title: '“宝地兴业”产业空间对接会-知名集团物业专场物业清单(部分)', hit: false, site: 'baoan.gov.cn' },
    { cites: 9, category: '单品介绍', platform: '宝安湾', title: '知名集团物业齐亮相，28家企业携近8万㎡需求宝安寻“宝地”', hit: false, site: 'baoanone.com' },
    { cites: 7, category: '行业资讯', platform: '宝安湾', title: '“宝地兴业”再出手：找空间、寻场景、融资金一站搞定！', hit: false, site: 'baoanone.com' },
    { cites: 7, category: '其他', platform: '宝安区政府在线', title: '宝安这场对接会为企业送上“大礼包”', hit: false, site: 'baoan.gov.cn' },
    { cites: 6, category: '单品介绍', platform: '百度知道', title: '深圳市德运房地产顾问有限公司', hit: false, site: 'baike.baidu.com' },
    { cites: 6, category: '知识科普', platform: '买购网', title: '宝安区十大产业园区 宝安的工业园区集中在哪里 深圳宝安特色产业园有哪些', hit: true, site: 'maigoo.com' },
    { cites: 5, category: '其他', platform: '搜狐网', title: '深圳首个产业空间综合服务平台正式上线', hit: false, site: 'sohu.com' },
    { cites: 5, category: '其他', platform: '宝安湾', title: '从“有空间”到“定制空间”！宝安凭啥让企业扎堆投资加码？', hit: false, site: 'baoanone.com' },
];

/** 提到创维创新谷的引用文章明细（正文提及，按被引用次数排序，共 9 篇） */
const RIGHT_ROWS = [
    { cites: 6, category: '知识科普', platform: '买购网', title: '宝安区十大产业园区 宝安的工业园区集中在哪里 深圳宝安特色产业园有哪些', hit: true, site: 'maigoo.com' },
    { cites: 2, category: '单品介绍', platform: '今日头条', title: '宝安发布“企业安家一件事”！', hit: true, site: 'toutiao.com' },
    { cites: 2, category: '其他', platform: '智联招聘', title: '「深圳宝安区 合伙人/高收益（沙井）招聘」_2025年东莞市伙伴产业服务有限公司招聘', hit: true, site: 'zhaopin.com' },
    { cites: 2, category: '其他', platform: '顺企网（11467）', title: '华丰国际机器人产业园 房东直租 固戍精装修办公室免中介费', hit: true, site: '11467.com' },
    { cites: 2, category: '其他', platform: '顺企网（11467）', title: '深圳市鼎宝宏绿色高新园 物业招商 租赁中心 宝安区厂房仓库出租', hit: true, site: '11467.com' },
    { cites: 1, category: '其他', platform: '360地图', title: '【深圳宝安工业园区】地址，电话，路线，周边设施_360地图', hit: true, site: 'map.360.cn' },
    { cites: 1, category: '其他', platform: '智联招聘', title: '合伙人/高收益（坂田）', hit: true, site: 'zhaopin.com' },
    { cites: 1, category: '排行榜', platform: '深圳政府在线', title: '深圳市商务局关于2023年度新增认定投资推广园区等名单的公告', hit: true, site: 'commerce.sz.gov.cn' },
    { cites: 1, category: '其他', platform: '顺企网（11467）', title: '腾骏科创园 流塘小面积写字楼 宝安写字楼 招商中心', hit: true, site: '11467.com' },
];

const FONT =
    '"PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

const THEMES = {
    blue: {
        titleBg: '#EAF2F9',
        titleText: '#1E4E7A',
        accent: '#3A7DB2',
        headBg: '#2F6FA8',
        border: '#B7CBE0',
        zebra: '#F3F8FC',
        link: '#1D6FBF',
    },
    brown: {
        titleBg: '#F8EEE6',
        titleText: '#6B2E2E',
        accent: '#8B3A3A',
        headBg: '#8B3A3A',
        border: '#E0C8B8',
        zebra: '#FBF6F2',
        link: '#8B3A3A',
    },
};

const COLS = '0.7fr 0.75fr 0.85fr 2.2fr 0.85fr 1.8fr';

function DetailTable({ themeKey, title, hitLabel, rows, hitAsCheck }) {
    const t = THEMES[themeKey];

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#fff',
                fontFamily: FONT,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                color: '#1a1a1a',
            }}
        >
            <div
                style={{
                    background: t.titleBg,
                    color: t.titleText,
                    fontSize: 13,
                    fontWeight: 700,
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexShrink: 0,
                    borderBottom: `1px solid ${t.border}`,
                    lineHeight: 1.35,
                }}
            >
                <span style={{ width: 3, height: 14, background: t.accent, borderRadius: 1, flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: t.headBg,
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    height: 36,
                    flexShrink: 0,
                }}
            >
                {['引用', '类别', '平台', '文章标题', hitLabel, '来源域名'].map((h, i) => (
                    <div
                        key={h}
                        style={{
                            ...cellCenter,
                            borderRight: i < 5 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                            fontSize: 12,
                        }}
                    >
                        {h}
                    </div>
                ))}
            </div>

            <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                {rows.map((r, i) => (
                    <div
                        key={`${r.site}-${r.title}-${i}`}
                        style={{
                            flex: 1,
                            minHeight: 0,
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            background: i % 2 === 0 ? t.zebra : '#fff',
                            borderBottom: `1px solid ${t.border}`,
                            fontSize: 12.5,
                        }}
                    >
                        <div style={cellCenter}>{r.cites}</div>
                        <div style={cellCenter}>{r.category}</div>
                        <div style={{ ...cellLeft, fontWeight: 600 }} title={r.platform}>{r.platform}</div>
                        <div style={cellLeft} title={r.title}>{r.title}</div>
                        <div style={cellCenter}>
                            {hitAsCheck ? (r.hit ? '✓' : '—') : (r.hit ? '是' : '否')}
                        </div>
                        <div style={{ ...cellLeft, color: t.link }} title={r.site}>{r.site}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const cellCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 6px',
    borderRight: '1px solid #d8e2ec',
    boxSizing: 'border-box',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
};

const cellLeft = {
    ...cellCenter,
    justifyContent: 'flex-start',
};

export default function Page_ContentStrategyDetails() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none" />

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">大模型高频引用文章明细</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    溯源反推：大模型引用偏好内容分析与溯源统计明细（2026-08-14）
                </p>
            </div>

            <div className="flex-1 w-full mx-auto px-4 pb-4 z-10 flex min-h-0">
                <div className="w-full h-full grid grid-cols-2 gap-6 items-stretch min-h-0">
                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">综合 Top 100 引用文章明细</h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="blue"
                                title="综合 Top 100 引用文章明细（按总引用次数排序，节选前 9 篇）"
                                hitLabel={`是否命中${BRAND}`}
                                rows={LEFT_ROWS}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">
                                提到{BRAND}的引用文章明细（全部 9 篇）
                            </h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="brown"
                                title={`提到${BRAND_FULL}的引用文章（正文提及，共 9 篇，最高被引用 6 次）`}
                                hitLabel="正文提及"
                                rows={RIGHT_ROWS}
                                hitAsCheck
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
