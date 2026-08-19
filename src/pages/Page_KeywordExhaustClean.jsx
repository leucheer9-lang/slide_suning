import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 一、词条穷举及清洗（创维创新谷 · 飞书多维表）
 * 一页约 17 行铺满；本表 35 条按 18/17 拆 2 页。
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'type', label: '类别', width: 292, type: 'select' },
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
    { type: T.fixed, name: '品牌排行榜', desc: '最基本最常见的核心问法', keyword: '宝安区高端产业园排行榜' },
    { type: T.fixed, name: '品牌推荐', desc: '最基本最常见的核心问法', keyword: '宝安区高端产业园推荐' },
    { type: T.fixed, name: '质量', desc: '最基本最常见的核心问法', keyword: '配套齐全的宝安区高端产业园推荐' },
    { type: T.fixed, name: '性价比', desc: '最基本最常见的核心问法', keyword: '有政策补贴的宝安区高端产业园推荐' },
    { type: T.fixed, name: '口碑', desc: '最基本最常见的核心问法', keyword: '口碑好的宝安区高端产业园推荐' },
    { type: T.indMotive, name: '尽快拿到可办公可生产的现成空间', desc: '企业扩张或搬迁有明确时间表，倾向选择已建成、可快速入驻的园区，降低等交付、二次装修带来的工期风险。', keyword: '现成可入驻的宝安区高端产业园推荐' },
    { type: T.indMotive, name: '降低初期租金与政策成本', desc: '选址时关注租金水平、免租期以及高新/产业补贴能否落地，希望园区能协助申报，减轻前几年现金流压力。', keyword: '有政策补贴的宝安区高端产业园推荐', flag: F.dup, flagNote: '与 0.固定 性价比 语义一致。' },
    { type: T.indMotive, name: '一次解决办公与轻生产需求', desc: '研发型、智能硬件、电子信息企业希望同一园区内既能办公又能中试/轻生产，避免两地分租。', keyword: '能研发又能办公的宝安区高端产业园推荐' },
    { type: T.indScene, name: '科技与电子信息企业落户宝安', desc: '企业明确落子宝安，需要匹配科技、电子信息或智能硬件方向的产业园区，便于产业链协同与人才招聘。', keyword: '宝安区适合科技企业入驻的产业园有哪些' },
    { type: T.indScene, name: '科技与电子信息企业落户宝安', desc: '企业明确落子宝安，需要匹配科技、电子信息或智能硬件方向的产业园区，便于产业链协同与人才招聘。', keyword: '宝安区适合电子信息企业发展的产业园有哪些' },
    { type: T.indScene, name: '科技与电子信息企业落户宝安', desc: '企业明确落子宝安，需要匹配科技、电子信息或智能硬件方向的产业园区，便于产业链协同与人才招聘。', keyword: '宝安区适合智能硬件企业的产业园有哪些' },
    { type: T.indScene, name: '总部或区域总部办公选址', desc: '成长型企业需要形象较好的甲级/园区办公空间，同时希望周边有公寓、商业，方便总部职能落地。', keyword: '适合总部入驻的宝安区高端产业园推荐' },
    { type: T.indScene, name: '研产办一体的园区使用', desc: '团队同时有研发办公和生产中试需求，偏好研发办公一体化或生产研发一体化园区，而不是纯写字楼。', keyword: '宝安区研发办公一体化园区推荐' },
    { type: T.indScene, name: '研产办一体的园区使用', desc: '团队同时有研发办公和生产中试需求，偏好研发办公一体化或生产研发一体化园区，而不是纯写字楼。', keyword: '宝安区生产研发一体化园区推荐' },
    { type: T.indSelling, name: '产业集聚与方向匹配', desc: '园区若形成电子信息、新型显示等产业集群，企业更易获得上下游协同、招工与品牌背书。', keyword: '宝安区科技产业园推荐' },
    { type: T.indSelling, name: '产业集聚与方向匹配', desc: '园区若形成电子信息、新型显示等产业集群，企业更易获得上下游协同、招工与品牌背书。', keyword: '宝安区电子信息产业园推荐' },
    { type: T.indSelling, name: '产业集聚与方向匹配', desc: '园区若形成电子信息、新型显示等产业集群，企业更易获得上下游协同、招工与品牌背书。', keyword: '宝安区新型显示产业园推荐' },
    { type: T.indSelling, name: '生活与人才配套', desc: '人才公寓、酒店、商业配套齐全，有利于留人，降低员工通勤与租房成本。', keyword: '有人才公寓的宝安区高端产业园推荐' },
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
    { type: T.indSelling, name: '空间灵活可分割', desc: '面积可灵活分割、可整层或小面积起步，适配不同阶段企业的扩租缩租需求。', keyword: '面积能灵活分割的宝安区高端产业园推荐' },
    { type: T.indPain, name: '园区还在建、无法按期入驻', desc: '期房或持续建设中的园区存在交付不确定，影响产线搬迁与人员到岗。', keyword: '现成可入驻的宝安区高端产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indPain, name: '只有厂房或只有写字楼，功能割裂', desc: '纯厂房缺形象与配套，纯写字楼又难做中试生产，企业不得不两头租。', keyword: '能研发又能办公的宝安区高端产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.indPain, name: '配套弱、留不住人', desc: '园区偏远或只有宿舍底商，员工不愿住、不愿来，招聘与稳定性受影响。', keyword: '配套齐全的宝安区高端产业园推荐', flag: F.dup, flagNote: '与 0.固定 质量 语义一致。' },
    { type: T.prodMotive, name: '要马上能用的园区，不想赌交付', desc: '企业希望尽快入驻已运营园区，创维创新谷现楼可看可租，降低搬迁时间风险。', keyword: '现成可入驻的宝安区高端产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodMotive, name: '靠近显示 / 电子信息产业链', desc: '从事新型显示、电子信息、智能硬件的企业，希望进入已有集群的园区，便于协作与招工。', keyword: '宝安区电子信息产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodMotive, name: '总部形象 + 员工住行一体解决', desc: '既要园区办公形象，也要公寓酒店商业，减少另觅宿舍和食堂的成本。', keyword: '适合总部入驻的宝安区高端产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodScene, name: '电子信息 / 科技企业宝安选址', desc: '在宝安范围内比较科技、电子信息类产业园，关注产业匹配与能否注册、申报相关政策。', keyword: '宝安区适合电子信息企业发展的产业园有哪些', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodScene, name: '研产办一体使用', desc: '同一园区内安排研发办公与生产研发，减少两园区通勤。', keyword: '宝安区生产研发一体化园区推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodScene, name: '园区内写字楼 / 总部办公', desc: '不租独立 CBD 写字楼，而选择产业园内的甲级或研发办公楼做总部职能。', keyword: '产业园里的宝安区写字楼推荐' },
    { type: T.prodScene, name: '园区内写字楼 / 总部办公', desc: '不租独立 CBD 写字楼，而选择产业园内的甲级或研发办公楼做总部职能。', keyword: '适合总部办公的宝安区写字楼推荐' },
    { type: T.prodSelling, name: '已运营的产城配套', desc: '商业、人才公寓、酒店配套已落地，不是只靠沙盘的配套承诺。', keyword: '有人才公寓的宝安区高端产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodSelling, name: '大厂总部与显示产业链', desc: '创维总部及显示/电子信息相关企业集聚，形成可感知的产业氛围。', keyword: '有大厂总部的宝安区高端产业园推荐' },
    { type: T.prodSelling, name: '大厂总部与显示产业链', desc: '创维总部及显示/电子信息相关企业集聚，形成可感知的产业氛围。', keyword: '宝安区新型显示产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodSelling, name: '空间可研发可办公、面积可灵活分割', desc: '标准层与厂房型空间并存，面积段可组合，适配成长型企业扩租。', keyword: '面积能灵活分割的宝安区高端产业园推荐', flag: F.dup, flagNote: '与其它的词条意思一致。' },
    { type: T.prodPain, name: '对标尖岗山时区位与地铁不占优', desc: '与雪花科创城、甲岸美生智谷比，石岩轨道与接南山便利度是常见顾虑。', keyword: '石岩地铁口的宝安区高端产业园推荐', flag: F.offTarget, flagNote: '石岩轨道成熟度相对尖岗山竞品不占优，不宜作为投放主词。' },
    { type: T.prodPain, name: '单纯拼低价租金打不过比价导向', desc: '若用户只搜「最便宜厂房/园区」，容易导向更低价或更大体量在建项目，非本品主战场。', keyword: '便宜的宝安区高端产业园推荐', flag: F.pain, flagNote: '极端低价导向，非创维创新谷相对优势位。' },
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
