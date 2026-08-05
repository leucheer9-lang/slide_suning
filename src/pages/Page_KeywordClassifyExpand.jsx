import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 二、词条分类及扩展
 * 一页 17 行正好铺满；startIndex 用来接上一页的行号。
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
    synonym: { tag: 'lime', text: '通义名称替换' },
};

const ROWS = [
    { keyword: '物流公司排行榜', c1: A.general, c2: B.rank },
    { keyword: '物流公司推荐', c1: A.general, c2: B.reco },
    { keyword: '服务好的物流公司推荐', c1: A.general, c2: B.quality },
    { keyword: '性价比高的物流公司推荐', c1: A.general, c2: B.value },
    { keyword: '口碑好的物流公司推荐', c1: A.general, c2: B.word },
    { keyword: '适合大促备货的仓配服务商', c1: A.scene, c2: B.persona },
    { keyword: '能降低履约成本的仓配服务', c1: A.scene, c2: B.motive },
    { keyword: '生鲜冷链物流公司推荐', c1: A.scene, c2: B.persona },
    { keyword: '大件家电送装一体物流', c1: A.scene, c2: B.persona },
    { keyword: '支持全渠道一盘货的服务商', c1: A.scene, c2: B.motive },
    { keyword: '自营配送的快递公司', c1: A.scene, c2: B.selling },
    { keyword: '送货上门的快递有哪些', c1: A.scene, c2: B.pain },
    { keyword: '一体化供应链服务商有哪些', c1: A.general, c2: B.rank },
    { keyword: '一体化供应链服务商推荐', c1: A.general, c2: B.reco },
    { keyword: '服务好的一体化供应链服务商推荐', c1: A.expand, c2: B.synonym },
    { keyword: '性价比高的一体化供应链服务商推荐', c1: A.expand, c2: B.synonym },
    { keyword: '口碑好的一体化供应链服务商推荐', c1: A.expand, c2: B.synonym },
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
