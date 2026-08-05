import React from 'react';
import Frame from '../components/geoone/Frame';
import {
    C, Card, RankBadge, Tag, GhostButton, Icon,
    IconSite, IconSquareSite,
} from '../components/geoone/ui';
import { DonutChart } from '../components/geoone/charts';

/* ══════════════ 数据：换引用源结果时只改这一段 ══════════════ */
/* 来源：GEO ONE 420 ToB · citations/stats + articles */

const SEGMENTS = [
    { name: '腾讯新闻', pct: 6.9, color: '#12B7F5', icon: <IconSite size={24} color="#12B7F5" /> },
    { name: '百度知道', pct: 5.2, color: '#2932E1', icon: <IconSquareSite size={24} label="知" bg="#2932E1" /> },
    { name: '今日头条', pct: 3.3, color: '#FF2442', icon: <IconSquareSite size={24} label="头" bg="#FF2442" /> },
    { name: 'hangyeob.com', pct: 2.8, color: '#F59E0B', icon: <IconSquareSite size={24} label="行" bg="#F59E0B" /> },
    { name: '新京报', pct: 2.6, color: '#E6162D', icon: <IconSite size={24} color="#E6162D" /> },
    { name: '其他', pct: 79.2, color: '#9ca3af' },
];

const ARTICLES = [
    {
        title: '一件代发快递公司推荐｜申通一站式仓配代发...',
        url: 'https://www.jiemian.com/',
        mentioned: false,
        total: 6,
        avg: '6.0',
    },
    {
        title: '金投网 news.cngold.org',
        url: 'https://news.cngold.org/',
        mentioned: true,
        total: 5,
        avg: '5.0',
    },
    {
        title: '2026国内跨境物流服务商深度评测...',
        url: 'https://www.cet.com.cn/',
        mentioned: false,
        total: 5,
        avg: '5.0',
    },
];

const FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

export default function Page_GeoReport_Sources_ToB() {
    const top5 = SEGMENTS.filter((s) => s.name !== '其他');
    const top = top5[0];

    return (
        <Frame title="引用源分析 · B端" aspect="16/10">
            <div
                data-geoone-root
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '22px 24px 18px',
                    boxSizing: 'border-box',
                    display: 'grid',
                    gridTemplateRows: 'auto 1.35fr 1fr',
                    gap: 16,
                    background: C.white,
                    fontFamily: FONT,
                    color: C.text,
                    WebkitFontSmoothing: 'antialiased',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 24, fontWeight: 800 }}>
                    Top引用数据
                    <Icon.help size={18} style={{ color: C.faint }} />
                </div>

                {/* 上：两栏 */}
                <div style={{ minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {/* 左：环形图 */}
                    <Card
                        style={{
                            minHeight: 0,
                            padding: '18px 22px 14px',
                            display: 'grid',
                            gridTemplateRows: 'auto auto minmax(0, 1fr) auto',
                            rowGap: 12,
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{ fontSize: 18, fontWeight: 700, color: C.muted }}>
                            目标词条引用来源分布
                        </div>
                        <div>
                            <div style={{ fontSize: 15, color: C.muted, marginBottom: 4 }}>引用率最高的平台</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                {top.icon}
                                <span style={{ fontSize: 22, fontWeight: 800 }}>
                                    {top.name}: {top.pct}%
                                </span>
                            </div>
                        </div>

                        <div
                            style={{
                                minHeight: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <DonutChart
                                size={200}
                                thickness={12}
                                gapDeg={10}
                                segments={SEGMENTS}
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                gap: 14,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 6,
                                flexShrink: 0,
                                overflow: 'hidden',
                            }}
                        >
                            {SEGMENTS.map((s) => (
                                <div
                                    key={s.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        fontSize: 13,
                                        color: C.muted,
                                        whiteSpace: 'nowrap',
                                        flexShrink: 1,
                                        minWidth: 0,
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 11,
                                            height: 11,
                                            borderRadius: 2,
                                            background: s.color,
                                            flexShrink: 0,
                                        }}
                                    />
                                    {s.name}
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* 右：平台榜单 */}
                    <Card
                        style={{
                            minHeight: 0,
                            padding: '18px 22px 14px',
                            display: 'grid',
                            gridTemplateRows: 'auto auto 1fr auto',
                            gap: 8,
                        }}
                    >
                        <div style={{ fontSize: 18, fontWeight: 700, color: C.muted }}>
                            目标词条高频引用平台榜单
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '36px 1fr auto',
                                columnGap: 12,
                                fontSize: 15,
                                color: C.muted,
                                paddingBottom: 8,
                                borderBottom: `1px solid ${C.border}`,
                            }}
                        >
                            <span />
                            <span>平台名称</span>
                            <span>引用率</span>
                        </div>

                        <div
                            style={{
                                minHeight: 0,
                                display: 'grid',
                                gridTemplateRows: 'repeat(5, 1fr)',
                            }}
                        >
                            {top5.map((s, i) => (
                                <div
                                    key={s.name}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '36px 1fr auto',
                                        columnGap: 12,
                                        alignItems: 'center',
                                        borderBottom: `1px solid ${C.divider}`,
                                        minHeight: 0,
                                    }}
                                >
                                    <RankBadge n={i + 1} size={28} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                                        <span style={{ display: 'flex', flexShrink: 0 }}>{s.icon}</span>
                                        <span
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 700,
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {s.name}
                                        </span>
                                    </div>
                                    <span style={{ fontSize: 20, fontWeight: 800 }}>{s.pct}%</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
                            <GhostButton height={32} fontSize={15}>展开</GhostButton>
                        </div>
                    </Card>
                </div>

                {/* 下：引用文章表 */}
                <Card
                    style={{
                        minHeight: 0,
                        padding: 0,
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateRows: 'auto auto 1fr',
                    }}
                >
                    <div style={{ padding: '14px 20px 8px', fontSize: 18, fontWeight: 800 }}>
                        引用文章列表
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '48px 1.7fr 130px 100px 100px 70px 80px',
                            gap: 8,
                            padding: '0 20px',
                            height: 36,
                            alignItems: 'center',
                            background: C.headBg,
                            fontSize: 14,
                            color: C.muted,
                            fontWeight: 600,
                        }}
                    >
                        <span />
                        <span>文章标题</span>
                        <span>目标产品是否提及</span>
                        <span>总引用次数</span>
                        <span>平均引用次数</span>
                        <span>来源</span>
                        <span>文章链接</span>
                    </div>
                    <div style={{ minHeight: 0, display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        {ARTICLES.map((a, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '48px 1.7fr 130px 100px 100px 70px 80px',
                                    gap: 8,
                                    padding: '0 20px',
                                    alignItems: 'center',
                                    borderBottom: `1px solid ${C.divider}`,
                                    minHeight: 0,
                                }}
                            >
                                <RankBadge n={i + 1} size={26} />
                                <div style={{ minWidth: 0 }}>
                                    <div
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 700,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {a.title}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 13,
                                            color: C.faint,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {a.url}
                                    </div>
                                </div>
                                <div>
                                    <Tag color={a.mentioned ? 'green' : 'red'}>
                                        {a.mentioned ? '是' : '否'}
                                    </Tag>
                                </div>
                                <div style={{ fontSize: 17, fontWeight: 700 }}>{a.total}</div>
                                <div style={{ fontSize: 17, fontWeight: 700 }}>{a.avg}</div>
                                <div><IconSite size={22} /></div>
                                <GhostButton height={30} fontSize={14}>查看</GhostButton>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </Frame>
    );
}
