import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 二、词条分类及扩展（创维创新谷 · 飞书多维表）
 * 25 条按 13/12 拆 2 页。
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
    { keyword: '宝安区高端产业园排行榜', c1: A.general, c2: B.rank },
    { keyword: '宝安区高端产业园推荐', c1: A.general, c2: B.reco },
    { keyword: '配套齐全的宝安区高端产业园推荐', c1: A.general, c2: B.quality },
    { keyword: '有政策补贴的宝安区高端产业园推荐', c1: A.general, c2: B.value },
    { keyword: '口碑好的宝安区高端产业园推荐', c1: A.general, c2: B.word },
    { keyword: '现成可入驻的宝安区高端产业园推荐', c1: A.scene, c2: B.motive },
    { keyword: '能研发又能办公的宝安区高端产业园推荐', c1: A.scene, c2: B.motive },
    { keyword: '宝安区适合科技企业入驻的产业园有哪些', c1: A.scene, c2: B.persona },
    { keyword: '宝安区适合电子信息企业发展的产业园有哪些', c1: A.scene, c2: B.persona },
    { keyword: '宝安区适合智能硬件企业的产业园有哪些', c1: A.scene, c2: B.persona },
    { keyword: '适合总部入驻的宝安区高端产业园推荐', c1: A.scene, c2: B.persona },
    { keyword: '宝安区研发办公一体化园区推荐', c1: A.scene, c2: B.persona },
    { keyword: '宝安区生产研发一体化园区推荐', c1: A.scene, c2: B.persona },
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
    { keyword: '宝安区科技产业园推荐', c1: A.scene, c2: B.segment },
    { keyword: '宝安区电子信息产业园推荐', c1: A.scene, c2: B.segment },
    { keyword: '宝安区新型显示产业园推荐', c1: A.scene, c2: B.segment },
    { keyword: '有人才公寓的宝安区高端产业园推荐', c1: A.scene, c2: B.selling },
    { keyword: '面积能灵活分割的宝安区高端产业园推荐', c1: A.scene, c2: B.selling },
    { keyword: '产业园里的宝安区写字楼推荐', c1: A.scene, c2: B.persona },
    { keyword: '适合总部办公的宝安区写字楼推荐', c1: A.scene, c2: B.persona },
    { keyword: '有大厂总部的宝安区高端产业园推荐', c1: A.scene, c2: B.selling },
    { keyword: '宝安区产业园推荐', c1: A.expand, c2: B.synonym },
    { keyword: '宝安区产业园排行榜', c1: A.expand, c2: B.synonym },
    { keyword: '宝安区产业园有哪些', c1: A.expand, c2: B.synonym },
    { keyword: '口碑好的宝安区产业园推荐', c1: A.expand, c2: B.synonym },
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
