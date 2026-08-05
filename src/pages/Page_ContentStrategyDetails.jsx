import React from 'react';

/* ══════════════ 数据：换明细列表时只改这一段 ══════════════ */

const BRAND = '顺峰宝宝';

/** 综合 Top 100（按总引用次数排序） */
const LEFT_ROWS = [
    { cites: 21, category: '其他', platform: '新京报', title: '新京报 m.bjnews.com.cn', hit: true, url: 'https://m.bjnews.com.cn/detail/1776912269129934.html' },
    { cites: 18, category: '测评', platform: '妈妈网', title: '2026儿童敏感肌面霜实测指南:TOP甄选与科学护理全方案_育儿资讯_妈妈网', hit: true, url: 'http://www.mamacn.com/news/baby/45726.html' },
    { cites: 17, category: '排行榜', platform: '新京报', title: '2026儿童面霜实测榜单科学修护儿童敏感肌优选指南', hit: false, url: 'https://www.bjnews.com.cn/detail/1778830628129039.html' },
    { cites: 16, category: '知识科普', platform: '界面新闻', title: '儿童敏感肌护理指南：如何科学选择温和面霜', hit: true, url: 'https://www.jiemian.com/article/example-16.html' },
    { cites: 15, category: '单品介绍', platform: '39健康网', title: '宝宝面霜怎么选？看懂成分表再下手', hit: false, url: 'https://news.39.net/a/example-15.html' },
    { cites: 14, category: '其他', platform: '39健康网', title: '39健康网 news.39.net', hit: true, url: 'https://news.39.net/a/260525/a7wma6e.html' },
    { cites: 13, category: '测评', platform: 'Dermatest', title: '儿童面霜皮肤相容性测试报告解读', hit: false, url: 'https://www.dermatest.de/example-13' },
    { cites: 12, category: '排行榜', platform: '百度知道', title: '2026年宝宝面霜排行榜：口碑与安全性双维度对比', hit: true, url: 'https://zhidao.baidu.com/question/example-12' },
    { cites: 11, category: '知识科普', platform: '妈妈网', title: '敏感肌宝宝冬季护肤：保湿屏障怎么建', hit: true, url: 'http://www.mamacn.com/news/baby/example-11.html' },
    { cites: 10, category: '单品介绍', platform: '新浪新闻', title: '一款专为儿童敏感肌设计的修护面霜体验分享', hit: false, url: 'https://news.sina.com.cn/example-10' },
    { cites: 9, category: '排行榜', platform: '中国发展网', title: '儿童面霜怎么选?2026年2月不黑脸温和品牌推荐,呵护宝宝娇嫩肌', hit: true, url: 'https://m.chinadevelopment.com.cn/example-9' },
    { cites: 9, category: '其他', platform: '京东', title: '儿童面霜热销榜单与用户真实评价汇总', hit: true, url: 'https://item.jd.com/example-9.html' },
];

/** 提到品牌的引用文章明细（正文提及，按被引用次数排序） */
const RIGHT_ROWS = [
    { cites: 21, category: '其他', platform: '新京报', title: '新京报 m.bjnews.com.cn', hit: true, url: 'https://m.bjnews.com.cn/detail/1776912269129934.html' },
    { cites: 18, category: '测评', platform: '妈妈网', title: '2026儿童敏感肌面霜实测指南:TOP甄选与科学护理全方案_育儿资讯_妈妈网', hit: true, url: 'http://www.mamacn.com/news/baby/45726.html' },
    { cites: 14, category: '其他', platform: '39健康网', title: '39健康网 news.39.net', hit: true, url: 'https://news.39.net/a/260525/a7wma6e.html' },
    { cites: 12, category: '排行榜', platform: '百度知道', title: '2026年宝宝面霜排行榜：口碑与安全性双维度对比', hit: true, url: 'https://zhidao.baidu.com/question/example-12' },
    { cites: 10, category: '单品介绍', platform: '新浪新闻', title: `${BRAND}儿童面霜适合敏感肌吗？成分与用法解析`, hit: true, url: 'https://news.sina.com.cn/example-brand-10' },
    { cites: 9, category: '排行榜', platform: '中国发展网', title: '儿童面霜怎么选?2026年2月不黑脸温和品牌推荐,呵护宝宝娇嫩肌', hit: true, url: 'https://m.chinadevelopment.com.cn/example-9' },
    { cites: 9, category: '其他', platform: '京东', title: `${BRAND}面霜用户评价精选：温和不刺激是关键`, hit: true, url: 'https://item.jd.com/example-brand-9.html' },
    { cites: 8, category: '测评', platform: '妈妈网', title: '敏感肌儿童面霜横评：修护力与致敏风险对比', hit: true, url: 'http://www.mamacn.com/news/baby/example-8.html' },
    { cites: 8, category: '知识科普', platform: '界面新闻', title: '宝宝面霜中的常见成分：哪些该避开、哪些可放心', hit: true, url: 'https://www.jiemian.com/article/example-8.html' },
    { cites: 7, category: '单品介绍', platform: '新京报', title: `${BRAND}新品上市：针对儿童敏感肌的修护方案`, hit: true, url: 'https://www.bjnews.com.cn/detail/example-7.html' },
    { cites: 7, category: '测评', platform: '39健康网', title: '实测记录：连续使用两周后的皮肤状态变化', hit: true, url: 'https://news.39.net/a/example-7.html' },
    { cites: 6, category: '知识科普', platform: '妈妈网', title: '如何给敏感肌宝宝建立正确的护肤步骤', hit: true, url: 'http://www.mamacn.com/news/baby/example-6.html' },
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
            {/* 小节标题条 */}
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

            {/* 表头 */}
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
                {['引用次数', '文章类别', '发布平台', '文章标题', hitLabel, '文章链接'].map((label, i, arr) => (
                    <div
                        key={label}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: i === 3 || i === 5 ? 'flex-start' : 'center',
                            padding: '0 8px',
                            borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.28)' : 'none',
                            boxSizing: 'border-box',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {label}
                    </div>
                ))}
            </div>

            {/* 数据行 */}
            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {rows.map((r, i) => (
                    <div
                        key={i}
                        style={{
                            flex: 1,
                            minHeight: 0,
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            background: i % 2 === 1 ? t.zebra : '#fff',
                            borderBottom: `1px solid ${t.border}`,
                            fontSize: 12,
                        }}
                    >
                        <div style={cellCenter}>{r.cites}</div>
                        <div style={cellCenter}>{r.category}</div>
                        <div style={cellCenter}>{r.platform}</div>
                        <div style={{ ...cellLeft, fontWeight: 700 }} title={r.title}>
                            {r.title}
                        </div>
                        <div style={cellCenter}>
                            {hitAsCheck ? (r.hit ? '✓' : '') : r.hit ? '是' : '否'}
                        </div>
                        <div
                            style={{
                                ...cellLeft,
                                color: i === 0 ? t.link : '#333',
                                textDecoration: i === 0 ? 'underline' : 'none',
                                fontSize: 11,
                            }}
                            title={r.url}
                        >
                            {r.url}
                        </div>
                    </div>
                ))}

                {/* 底部省略：表示列表未显示完 */}
                <div
                    style={{
                        flexShrink: 0,
                        height: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: rows.length % 2 === 1 ? t.zebra : '#fff',
                        borderTop: `1px solid ${t.border}`,
                        color: t.accent,
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: 6,
                        lineHeight: 1,
                    }}
                    aria-label="还有更多未显示"
                >
                    ···
                </div>
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
                    {/* 左：综合 Top 100 */}
                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">综合 Top 100 引用文章明细</h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="blue"
                                title={`综合 Top 100 引用文章明细（按总引用次数排序）`}
                                hitLabel={`是否命中${BRAND}`}
                                rows={LEFT_ROWS}
                            />
                        </div>
                    </div>

                    {/* 右：提到品牌 */}
                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">
                                提到{BRAND}的引用文章 Top 91 明细
                            </h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="brown"
                                title={`提到${BRAND}的引用文章 Top 91 明细（文章正文提及${BRAND}，按被引用次数排序，共涉及 91 篇）`}
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
