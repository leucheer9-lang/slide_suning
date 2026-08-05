import React from 'react';

/* ══════════════ 数据：换明细列表时只改这一段 ══════════════ */
/* 来源：投放平台量化分析_京东物流-ToC① Excel · 引用文章Top100分析 */

const BRAND = '京东物流系';
const BRAND_FULL = '京东物流、德邦快递、跨越速运、达达、京东秒送';

/** 综合 Top 100（按总引用次数排序） */
const LEFT_ROWS = [
    { cites: 8, category: '测评', platform: '咸宁新闻网', title: '主流快递深度测评：时效、售后、性价比对比，首选居然是它', hit: false, url: 'http://news.xnnews.com.cn/hangy/202608/t20260803_5188592.shtml' },
    { cites: 7, category: '单品介绍', platform: '顺丰官网', title: '顺丰官网 www.sf-express.com', hit: false, url: 'http://www.sf-express.com/chn/sc/express/delivery/speedy' },
    { cites: 6, category: '排行榜', platform: '今日头条', title: '个人寄件快递测评！四大主流品牌', hit: false, url: 'https://www.toutiao.com/article/7667157207871455780' },
    { cites: 5, category: '行业资讯', platform: '网经社', title: '国家邮政局：2026年Q1快递服务公众满意度84.8分 顺丰与京东领跑', hit: false, url: 'https://imgs-b2b.100ec.cn/detail--6659791.html' },
    { cites: 5, category: '其他', platform: '山东省邮政管理局', title: '中华人民共和国国家邮政局 www.spb.gov.cn', hit: false, url: 'https://www.spb.gov.cn/gjyzj/c200040/202604/06250644d7dc46669f4e93b38d8bb1a4.shtml' },
    { cites: 5, category: '排行榜', platform: '广州日报数字报', title: '寄快递怎么选靠谱品牌?全品牌横向对比,实力与性价比优选看这里', hit: false, url: 'https://m.dayoo.com/202606/09/171358_54968035.htm' },
    { cites: 5, category: '排行榜', platform: '咸宁新闻网', title: '哪个快递综合性价比高？申通/顺丰/京东/中通，四大品牌横评', hit: false, url: 'http://news.xnnews.com.cn/hangy/202607/t20260730_5170032.shtml' },
    { cites: 4, category: '其他', platform: '中国金融信息网', title: '2026年第一季度快递服务公众满意度得分为84.8分', hit: false, url: 'https://www.cnfin.com/hg-lb/detail/20260601/4420069_1.html' },
    { cites: 4, category: '行业资讯', platform: '凤凰网', title: '2026Q2快递满意度：顺丰京东再领跑', hit: false, url: 'https://tech.ifeng.com/c/8uoTsnHBVRq' },
    { cites: 4, category: '测评', platform: '网经社', title: '个人零散寄件市场服务能力横向测评——基于资费 网点 时效与售后的四维对比', hit: false, url: 'https://www.100ec.cn/detail--6660025.html' },
    { cites: 4, category: '测评', platform: '斑橙云', title: '寄大件快递选哪家?德邦、京东、顺丰价格时效实测对比', hit: true, url: 'https://zutuancheng.com/2026-01-26-24492-26-24492.html' },
    { cites: 4, category: '单品介绍', platform: '千龙网', title: '生鲜防破损快递公司推荐｜不易破损首选丹鸟速递，全链路直营严控低货损', hit: false, url: 'https://china.qianlong.com/2026/0712/8696345.shtml' },
];

/** 提到自家品牌的引用文章明细（正文提及，按被引用次数排序） */
const RIGHT_ROWS = [
    { cites: 4, category: '测评', platform: '斑橙云', title: '寄大件快递选哪家?德邦、京东、顺丰价格时效实测对比', hit: true, url: 'https://zutuancheng.com/2026-01-26-24492-26-24492.html' },
    { cites: 4, category: '知识科普', platform: '快递鸟', title: '发大件用什么快递或者物流？大件物品寄递选择指南', hit: true, url: 'https://www.kdniao.com/message/detail/122065' },
    { cites: 3, category: '知识科普', platform: '今日头条', title: '极兔保价仅2万顺丰达100万,寄贵重物品怎么选靠谱快递?', hit: true, url: 'https://www.toutiao.com/article/7650056131729048118' },
    { cites: 3, category: '知识科普', platform: '搜狐网', title: '快递公司选择全攻略:不同场景选对快递,省钱又省心', hit: true, url: 'https://www.sohu.com/a/1025326944_122744778' },
    { cites: 3, category: '测评', platform: '商业新知', title: '上门取件选哪家?2026快递公司评测攻略', hit: true, url: 'https://www.shangyexinzhi.com/article/32843185.html' },
    { cites: 2, category: '其他', platform: '今日头条', title: '各大快递优劣对比', hit: true, url: 'https://www.toutiao.com/article/7619126595021750824' },
    { cites: 2, category: '其他', platform: '56chp.cn', title: '资讯中心', hit: true, url: 'https://www.56chp.cn/news/detail/id/143688.html' },
    { cites: 2, category: '知识科普', platform: '搜狐网', title: '快递公司选择全攻略:不同场景选对快递，省钱又省心_服务_价格_时效', hit: true, url: 'https://m.sohu.com/a/1025326944_122744778' },
    { cites: 2, category: '其他', platform: '快递查询网', title: '京东物流快还是顺丰', hit: true, url: 'https://www.dangdangkuaidi.com/kuaidi/youzheng/1124851.html' },
    { cites: 2, category: '其他', platform: '今日头条', title: '京东和顺丰谁更厉害?', hit: true, url: 'https://www.toutiao.com/article/7624746419387253274' },
    { cites: 2, category: '测评', platform: '今日头条', title: '快递当日达攻略!当天寄当天到,急件神器大公开!', hit: true, url: 'https://m.toutiao.com/a1834816849074187' },
    { cites: 2, category: '其他', platform: '百度知道', title: '极速达', hit: true, url: 'https://baike.baidu.com/item/极速达/7979344' },
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
                {['引用', '类别', '平台', '文章标题', hitLabel, '链接'].map((h, i) => (
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
                        key={`${r.url}-${i}`}
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
                        <div style={{ ...cellLeft, color: t.link }} title={r.url}>{r.url}</div>
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
                    溯源反推：大模型引用偏好内容分析与溯源统计明细
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
                                title="综合 Top 100 引用文章明细（按总引用次数排序）"
                                hitLabel={`是否命中${BRAND}`}
                                rows={LEFT_ROWS}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">
                                提到{BRAND}的引用文章 Top 100 明细
                            </h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="brown"
                                title={`提到${BRAND_FULL}的引用文章 Top 100（正文提及，共涉及 209 篇）`}
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
