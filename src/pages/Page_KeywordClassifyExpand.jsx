import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 二、词条分类及扩展（创维创新谷 · 飞书多维表）
 * 26 条按 13/13 拆 2 页。
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'keyword', label: '词条生成', width: 396, type: 'text' },
    { key: 'c1', label: '词条分类1', width: 308, type: 'select' },
    { key: 'c2', label: '词条分类2', width: 464, type: 'select' },
];

const A = {
    general: { tag: 'neutral', text: '通用' },
    scene: { tag: 'blue', text: '场景' },
    expand: { tag: 'orange', text: '扩展' },
};

const B = {
    rank: { tag: 'neutral', text: '品牌排行榜' },
    reco: { tag: 'blue', text: '品牌推荐' },
    quality: { tag: 'orange', text: '质量' },
    value: { tag: 'cyan', text: '性价比' },
    word: { tag: 'yellow', text: '口碑' },
    persona: { tag: 'red', text: '场景画像' },
    motive: { tag: 'teal', text: '购买动机' },
    selling: { tag: 'purple', text: '卖点' },
    pain: { tag: 'green', text: '痛点' },
    feature: { tag: 'lime', text: '产品特点' },
    synonym: { tag: 'lime', text: '通义名称替换' },
    segment: { tag: 'cyan', text: '产品细分' },
    sales: { tag: 'orange', text: '销量' },
};

const ROWS = [
    { keyword: '适合中介带客的宝安区产业园排行榜', c1: A.general, c2: B.rank },
    { keyword: '适合中介带客的宝安区产业园推荐', c1: A.general, c2: B.reco },
    { keyword: '支持招商渠道合作的宝安区产业园推荐', c1: A.general, c2: B.quality },
    { keyword: '中介佣金高的宝安区产业园推荐', c1: A.general, c2: B.value },
    { keyword: '值得中介主推的宝安区产业园推荐', c1: A.general, c2: B.word },
    { keyword: '适合中介长期合作的宝安区产业园推荐', c1: A.scene, c2: B.motive },
    { keyword: '中介佣金结算快的宝安区产业园推荐', c1: A.scene, c2: B.motive },
    { keyword: '中介报备流程简单的宝安区产业园推荐', c1: A.scene, c2: B.motive },
    { keyword: '渠道带客成交效率高的宝安区产业园推荐', c1: A.scene, c2: B.motive },
    { keyword: '房源充足的宝安区产业园推荐', c1: A.scene, c2: B.persona },
    { keyword: '有现成房源的宝安区产业园推荐', c1: A.scene, c2: B.persona },
    { keyword: '有大面积房源的宝安区产业园推荐', c1: A.scene, c2: B.persona },
    { keyword: '有整层房源的宝安区产业园推荐', c1: A.scene, c2: B.persona },
];

export default function Page_KeywordClassifyExpand() {
    return (
        <BitableWindow>
            <BitableView
                tableName="二、词条分类及扩展"
                viewName="全部词条"
                notice="你调整了行高"
                columns={COLUMNS}
                rows={ROWS}
                startIndex={1}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

const ROWS_2 = [
    { keyword: '面积可灵活分割的宝安区产业园推荐', c1: A.scene, c2: B.persona },
    { keyword: '客户成交容易的宝安区产业园推荐', c1: A.scene, c2: B.persona },
    { keyword: '适合中介带客的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym },
    { keyword: '支持招商渠道合作的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym },
    { keyword: '中介佣金高的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym },
    { keyword: '有现成房源的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym },
    { keyword: '适合中介带客的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym },
    { keyword: '支持招商渠道合作的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym },
    { keyword: '有大面积房源的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym },
    { keyword: '面积可灵活分割的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym },
    { keyword: '适合中介带客的宝安区写字楼推荐', c1: A.expand, c2: B.synonym },
    { keyword: '中介佣金高的宝安区写字楼推荐', c1: A.expand, c2: B.synonym },
    { keyword: '有整层房源的宝安区写字楼推荐', c1: A.expand, c2: B.synonym },
];

export function Page_KeywordClassifyExpand2() {
    return (
        <BitableWindow>
            <BitableView
                tableName="二、词条分类及扩展"
                viewName="全部词条"
                notice="你调整了行高"
                columns={COLUMNS}
                rows={ROWS_2}
                startIndex={14}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
