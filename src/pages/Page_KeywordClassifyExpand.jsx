import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 二、词条分类及扩展（京东物流 ToC · 飞书多维表）
 * 30 条按 15/15 拆 2 页。
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
};

const ROWS = [
    { keyword: '快递公司排行榜', c1: A.general, c2: B.rank },
    { keyword: '快递公司推荐', c1: A.general, c2: B.reco },
    { keyword: '服务好的快递推荐', c1: A.general, c2: B.quality },
    { keyword: '口碑好的快递推荐', c1: A.general, c2: B.word },
    { keyword: '速度快的快递排行榜', c1: A.scene, c2: B.selling },
    { keyword: '寄快递哪家快递最快', c1: A.scene, c2: B.motive },
    { keyword: '寄手机电脑安全的快递推荐', c1: A.scene, c2: B.motive },
    { keyword: '加急寄文件时效快的快递推荐', c1: A.scene, c2: B.persona },
    { keyword: '搬家寄行李划算的快递推荐', c1: A.scene, c2: B.persona },
    { keyword: '学生开学寄被子行李箱的快递推荐', c1: A.scene, c2: B.persona },
    { keyword: '网购退货上门取件方便的快递推荐', c1: A.scene, c2: B.persona },
    { keyword: '寄贵重物品不丢件的快递推荐', c1: A.scene, c2: B.pain },
    { keyword: '包装规范不容易摔坏的快递推荐', c1: A.scene, c2: B.pain },
    { keyword: '寄东西丢了好理赔的快递推荐', c1: A.scene, c2: B.pain },
    { keyword: '送货上门不放驿站的快递推荐', c1: A.scene, c2: B.pain },
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
    { keyword: '寄家具家电的快递推荐', c1: A.scene, c2: B.motive },
    { keyword: '寄生鲜水果不怕坏的快递推荐', c1: A.scene, c2: B.motive },
    { keyword: '寄海鲜冷冻食品的快递推荐', c1: A.scene, c2: B.motive },
    { keyword: '当天就能到的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '上门取件快的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '送货前会打电话的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '电话预约上门取件的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '快递员服务态度好的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '服务丰富的一站式快递平台推荐', c1: A.scene, c2: B.selling },
    { keyword: '可以维修安装清洗家电的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '能帮忙搬家的快递推荐', c1: A.scene, c2: B.selling },
    { keyword: '当日达快递推荐', c1: A.expand, c2: B.selling },
    { keyword: '能约家电维修安装清洗的快递推荐', c1: A.expand, c2: B.feature },
    { keyword: '能寄洗衣服被子的快递推荐', c1: A.expand, c2: B.feature },
    { keyword: '寄家电能送装的快递推荐', c1: A.expand, c2: B.feature },
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
                startIndex={16}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

