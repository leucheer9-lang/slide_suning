import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 一、词条穷举及清洗
 * 换数据只改下面的 ROWS 即可。一页放 17 行正好铺满画面，
 * 多了会自动等比缩小（不会截断），所以数据多就复制本文件拆成多页。
 * 标签可选色：neutral / slate / blue / cyan / teal / green /
 *            grass / lime / yellow / orange / red / carmine /
 *            purple / violet
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'type', label: '类型', width: 292, type: 'select' },
    { key: 'name', label: '名称', width: 189, type: 'text' },
    { key: 'desc', label: '名称解释', width: 189, type: 'text' },
    { key: 'keyword', label: '词条生成', width: 189, type: 'text' },
    { key: 'flag', label: '词条清洗打标', width: 143, type: 'select' },
    { key: 'flagNote', label: '清洗打标说明', width: 406, type: 'text' },
];

const T = {
    fixed: { tag: 'neutral', text: '0.固定' },
    indMotive: { tag: 'blue', text: '1.行业-购买动机' },
    indScene: { tag: 'orange', text: '1.行业-场景画像' },
    indSelling: { tag: 'cyan', text: '1.行业-核心卖点' },
    indPain: { tag: 'yellow', text: '1.行业-核心痛点' },
    prodMotive: { tag: 'teal', text: '2.产品-购买动机' },
    prodPain: { tag: 'green', text: '2.产品-核心痛点' },
    search: { tag: 'carmine', text: '3.搜索' },
    social: { tag: 'lime', text: '3.社媒' },
};

const F = {
    dup: { tag: 'grass', text: '重复' },
    noIntent: { tag: 'slate', text: '非购买意图' },
    offTarget: { tag: 'violet', text: '跟目标产品不符' },
};

const ROWS = [
    { type: T.fixed, name: '品牌排行榜', desc: '最基本最常见的核心问法', keyword: '物流公司排行榜' },
    { type: T.fixed, name: '品牌推荐', desc: '最基本最常见的核心问法', keyword: '物流公司推荐' },
    { type: T.fixed, name: '质量', desc: '最基本最常见的核心问法', keyword: '服务好的物流公司推荐' },
    { type: T.fixed, name: '口碑', desc: '最基本最常见的核心问法', keyword: '口碑好的物流公司推荐' },
    { type: T.fixed, name: '性价比', desc: '最基本最常见的核心问法', keyword: '性价比高的物流公司推荐' },
    {
        type: T.indMotive, name: '时效确定性', desc: '企业选型时最先确认的指标，怕的是…',
        keyword: '时效稳定的物流公司推荐', flag: F.dup,
        flagNote: '终版未保留；与 0.固定「服务好的物流公司推荐」语义一致。',
    },
    { type: T.indScene, name: '电商大促备货', desc: '618、双11 前集中压货，仓配同时…', keyword: '适合大促备货的仓配服务商' },
    { type: T.prodMotive, name: '仓配一体降成本', desc: '仓储与配送打通后，库存和运费一起…', keyword: '能降低履约成本的仓配服务' },
    { type: T.indScene, name: '生鲜冷链运输', desc: '全程温控，断链就等于货损，客户最…', keyword: '生鲜冷链物流公司推荐' },
    { type: T.indScene, name: '家电大件送装', desc: '大件商品送到还要装好，普通快递做…', keyword: '大件家电送装一体物流' },
    { type: T.prodMotive, name: '全渠道一盘货', desc: '一套库存同时供给多个销售渠道，避…', keyword: '支持全渠道一盘货的服务商' },
    {
        type: T.indSelling, name: '自营配送网络', desc: '末端由自有配送员交付，而非层层加…',
        keyword: '自营配送的快递公司', flag: F.dup,
        flagNote: '与 0.固定「服务好的物流公司推荐」语义一致。',
    },
    { type: T.indSelling, name: '智能仓自动化', desc: '自动化立体库与分拣线，决定旺季吞…', keyword: '智能仓储自动化物流公司' },
    { type: T.indPain, name: '丢件破损理赔慢', desc: '出问题之后理赔链路长、责任难界定。', keyword: '快递丢件理赔快的公司' },
    {
        type: T.indPain, name: '不送货上门', desc: '直接放驿站、放快递柜，最集中的吐…',
        keyword: '送货上门的快递有哪些', flag: F.dup,
        flagNote: '终版未保留；与「自营配送的快递公司」搜索意图一致。',
    },
    {
        type: T.prodPain, name: '旺季爆仓延误', desc: '大促、春节期间时效滑坡，履约不稳。',
        keyword: '大促期间不爆仓的快递', flag: F.dup,
        flagNote: '与「时效稳定的物流公司推荐」意图重叠。',
    },
    {
        type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（近 90 天…',
        keyword: '1. 寄快递哪家便宜', flag: F.noIntent,
        flagNote: '用户倾向于比价省钱，而非企业级服务商选型决策。',
    },
];

export default function Page_KeywordExhaustClean() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS}
                startIndex={1}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
