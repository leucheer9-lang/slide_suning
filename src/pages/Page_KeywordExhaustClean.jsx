import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 一、词条穷举及清洗（创维创新谷 · 飞书多维表）
 * 一页约 17 行铺满；本表 35 条按 18/17 拆 2 页。
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
    prodScene: { tag: 'red', text: '2.产品-场景画像' },
    prodSelling: { tag: 'purple', text: '2.产品-核心卖点' },
    prodPain: { tag: 'green', text: '2.产品-核心痛点' },
    search: { tag: 'carmine', text: '3.搜索' },
    social: { tag: 'lime', text: '3.社媒' },
};

const F = {
    dup: { tag: 'grass', text: '重复' },
    noIntent: { tag: 'slate', text: '非购买意图' },
    offTarget: { tag: 'violet', text: '跟目标产品不符' },
    pain: { tag: 'blue', text: '产品痛点' },
    lowIntent: { tag: 'teal', text: '搜索意图低' },
    common: { tag: 'carmine', text: '品类共性' },
    expand: { tag: 'orange', text: '扩展词(暂时不显示)' },
};

const ROWS = [
    { type: T.fixed, name: '品牌排行榜', desc: '最基本最常见的核心问法', keyword: '适合中介带客的宝安区产业园排行榜' },
    { type: T.fixed, name: '品牌推荐', desc: '最基本最常见的核心问法', keyword: '适合中介带客的宝安区产业园推荐' },
    { type: T.fixed, name: '服务', desc: '最基本最常见的核心问法', keyword: '支持招商渠道合作的宝安区产业园推荐' },
    { type: T.fixed, name: '性价比', desc: '最基本最常见的核心问法', keyword: '中介佣金高的宝安区产业园推荐' },
    { type: T.fixed, name: '口碑', desc: '最基本最常见的核心问法', keyword: '值得中介主推的宝安区产业园推荐' },
    { type: T.indMotive, name: '找到能带客、能长期合作的园区', desc: '中介选盘先看园区是否接受渠道带客、能不能长期放盘，避免做一单就没货、或甲方不认中介。', keyword: '适合中介长期合作的宝安区产业园推荐' },
    { type: T.indMotive, name: '佣金高、结算快', desc: '中介收入看佣金点位和回款速度，倾向选择佣金有竞争力、结佣不拖的园区。', keyword: '中介佣金结算快的宝安区产业园推荐' },
    { type: T.indMotive, name: '佣金高、结算快', desc: '中介收入看佣金点位和回款速度，倾向选择佣金有竞争力、结佣不拖的园区。', keyword: '中介佣金高的宝安区产业园推荐', flag: F.dup, flagNote: '与 0.固定 性价比 语义一致。' },
    { type: T.indMotive, name: '报备简单、成交效率高', desc: '报备流程短、保护规则清楚、带客后成交顺，才能提高单产、减少撞单和扯皮。', keyword: '中介报备流程简单的宝安区产业园推荐' },
    { type: T.indMotive, name: '报备简单、成交效率高', desc: '报备流程短、保护规则清楚、带客后成交顺，才能提高单产、减少撞单和扯皮。', keyword: '渠道带客成交效率高的宝安区产业园推荐' },
    { type: T.indScene, name: '渠道合作与主推选盘', desc: '中介要决定重点推哪些园区，关注是否支持招商渠道合作、值不值得纳入主推盘。', keyword: '支持招商渠道合作的宝安区产业园推荐', flag: F.dup, flagNote: '与 0.固定 服务 语义一致。' },
    { type: T.indScene, name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '房源充足的宝安区产业园推荐' },
    { type: T.indScene, name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '有现成房源的宝安区产业园推荐' },
    { type: T.indScene, name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '有大面积房源的宝安区产业园推荐' },
    { type: T.indScene, name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '有整层房源的宝安区产业园推荐' },
    { type: T.indScene, name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '面积可灵活分割的宝安区产业园推荐' },
    { type: T.indScene, name: '判断客户好不好成交', desc: '带客前会评估园区成交难度，优先推客户更容易落地的盘，减少空看。', keyword: '客户成交容易的宝安区产业园推荐' },
    { type: T.indSelling, name: '现成可带看、房源充足', desc: '现楼、空置充足，约看就能看、能谈，降低带客扑空。', keyword: '有现成房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
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

const ROWS_2 = [
    { type: T.indSelling, name: '现成可带看、房源充足', desc: '现楼、空置充足，约看就能看、能谈，降低带客扑空。', keyword: '房源充足的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indSelling, name: '面积段宽、可整层可分割', desc: '小面积到整层、办公到厂房都能接，一个盘能吃多类客户。', keyword: '有大面积房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indSelling, name: '渠道政策稳定、配合带客', desc: '长期接受中介、政策不朝令夕改，招商配合带看和成交。', keyword: '适合中介长期合作的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indPain, name: '佣金低、结算慢、报备复杂', desc: '点位低或结佣拖、报备繁琐，中介不愿推。', keyword: '中介佣金结算快的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indPain, name: '期房或空置不足，带不了客', desc: '还在建或好房源已满，约看没有可成交货。', keyword: '有现成房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indPain, name: '园区不接受中介或客户难成交', desc: '直租为主、中介勿扰，或准入过严导致带去的客户落不了。', keyword: '适合中介带客的宝安区产业园推荐', flag: F.dup, flagNote: '与 0.固定 品牌推荐 语义一致。' },
    { type: T.prodMotive, name: '现楼即看即租，带客不扑空', desc: '创维创新谷已运营、现楼可看可租，中介带有即时入驻需求的客户时，交付确定性高于在建竞品。', keyword: '有现成房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodMotive, name: '办公和厂房都有，一类客户都能接', desc: '同一园区有写字楼/研发办公和高标准厂房，中介可用一个盘匹配总部办公和大面积生产类客户。', keyword: '有大面积房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodMotive, name: '集团自持，长期放盘好合作', desc: '业主为创维集团自持，单一业权、长期持有，适合中介做长期合作盘，减少散户业主跳单。', keyword: '适合中介长期合作的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodScene, name: '带企业客户看现成产业园', desc: '客户要马上入驻，中介需要现成房源、能约看到场的园区。', keyword: '有现成房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodScene, name: '带要大面积或整层的客户', desc: '客户要整层办公或大面积厂房，需要园区有对应货盘。', keyword: '有整层房源的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodScene, name: '带要灵活分割的成长型客户', desc: '客户现阶段面积不大、后续可能扩租，需要可灵活分割的空间。', keyword: '面积可灵活分割的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodSelling, name: '现成房源、房源充足', desc: '现楼招租，体量约 45 万㎡，仍有可租余量，便于持续带客。', keyword: '房源充足的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodSelling, name: '大面积、整层、可灵活分割', desc: '面积段宽，可整层、可分割，办公与厂房两种业态。', keyword: '面积可灵活分割的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodSelling, name: '可做渠道带客的稳定放盘', desc: '集团自持、长期运营，具备做渠道长期合作的基础。', keyword: '支持招商渠道合作的宝安区产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodPain, name: '石岩区位，带看距离和地铁不占优', desc: '相对尖岗山竞品，石岩轨道与接南山便利度弱，部分客户嫌远，带看成本更高。', keyword: '地铁口好带看的宝安区产业园推荐', flag: F.offTarget, flagNote: '石岩区位相对尖岗山竞品不占优，不宜作为中介带看主词。' },
    { type: T.prodPain, name: '对外主推直租，渠道佣金不是公开优势', desc: '官方招商页强调直租与免佣金服务，中介佣金点位未公开，不宜把「佣金最高」当差异化投放。', keyword: '中介佣金最高的宝安区产业园推荐', flag: F.pain, flagNote: '园区对外主推直租，佣金点位未构成可公开的差异化优势。' },
];

export function Page_KeywordExhaustClean2() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_2}
                startIndex={19}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
