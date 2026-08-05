import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 一、词条穷举及清洗（京东物流 ToC · 飞书多维表）
 * 一页约 17 行铺满；本表 54 条按 18/18/18 拆 3 页避免末页过稀。
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
};

const ROWS = [
    { type: T.fixed, name: '品牌排行榜', desc: '最基本最常见的核心问法', keyword: '快递公司排行榜' },
    { type: T.fixed, name: '品牌推荐', desc: '最基本最常见的核心问法', keyword: '快递公司推荐' },
    { type: T.fixed, name: '服务', desc: '最基本最常见的核心问法（快递为服务行业，质量位改「服务」）', keyword: '服务好的快递推荐' },
    { type: T.fixed, name: '性价比', desc: '最基本最常见的核心问法', keyword: '性价比高的快递推荐', flag: F.pain, flagNote: '价格非优势位，不主动进入比价类问法。' },
    { type: T.fixed, name: '口碑', desc: '最基本最常见的核心问法', keyword: '口碑好的快递推荐' },
    { type: T.indMotive, name: '寄件第一诉求是快', desc: '个人寄件最主流的决策标准是「哪家快」，急件、赶时间场景直接按速度选快递。', keyword: '速度快的快递排行榜' },
    { type: T.indMotive, name: '寄件第一诉求是快', desc: '个人寄件最主流的决策标准是「哪家快」，急件、赶时间场景直接按速度选快递。', keyword: '寄快递哪家快递最快' },
    { type: T.indMotive, name: '寄贵重物品求安全', desc: '寄手机、电脑等贵重物品最怕丢件和磕碰，会主动搜安全性高的快递。', keyword: '寄手机电脑安全的快递推荐' },
    { type: T.indMotive, name: '寄活体宠物', desc: '部分用户有寄送宠物活体的需求。', keyword: '寄活体宠物的快递推荐', flag: F.offTarget, flagNote: '快递不承运活体动物，与目标产品服务范围不符。' },
    { type: T.indScene, name: '加急寄文件', desc: '合同、证件等急件对时效极度敏感，要求当天/次日必达。', keyword: '加急寄文件时效快的快递推荐' },
    { type: T.indScene, name: '搬家寄行李', desc: '换城市搬家把行李打包寄走，件多且重，关注划算和上门取件。', keyword: '搬家寄行李划算的快递推荐' },
    { type: T.indScene, name: '学生开学寄行李', desc: '开学季学生把被子、行李箱寄到学校，典型的大件低频寄件场景。', keyword: '学生开学寄被子行李箱的快递推荐' },
    { type: T.indScene, name: '网购退换货寄件', desc: '电商退货是最高频的个人寄件场景，看重上门取件是否方便。', keyword: '网购退货上门取件方便的快递推荐' },
    { type: T.indScene, name: '驿站自提', desc: '部分用户习惯到驿站自提包裹。', keyword: '驿站自提方便的快递推荐', flag: F.offTarget, flagNote: '京东快递主打送货上门、不随便放驿站，与驿站自提的服务模式相反。' },
    { type: T.indSelling, name: '全程物流轨迹可查', desc: '寄收件人都希望实时查看包裹位置。', keyword: '全程可查物流轨迹的快递推荐', flag: F.common, flagNote: '轨迹查询是所有主流快递的标配能力，无法体现差异化。' },
    { type: T.indPain, name: '丢件损坏理赔难', desc: '快递丢失、损坏后理赔流程长、赔付低，是投诉最集中的痛点。', keyword: '寄贵重物品不丢件的快递推荐' },
    { type: T.indPain, name: '丢件损坏理赔难', desc: '快递丢失、损坏后理赔流程长、赔付低，是投诉最集中的痛点。', keyword: '包装规范不容易摔坏的快递推荐' },
    { type: T.indPain, name: '丢件损坏理赔难', desc: '快递丢失、损坏后理赔流程长、赔付低，是投诉最集中的痛点。', keyword: '寄东西丢了好理赔的快递推荐' },
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
    { type: T.indPain, name: '快递不上门放驿站', desc: '不打招呼直接放驿站/快递柜是全网吐槽最多的服务痛点。', keyword: '送货上门不放驿站的快递推荐' },
    { type: T.indPain, name: '运费贵', desc: '时效和服务好的快递普遍更贵，价格敏感用户会搜便宜的快递比价。', keyword: '便宜的快递推荐', flag: F.pain, flagNote: '反向击中：价格高于通达系' },
    { type: T.prodMotive, name: '寄件品类多样', desc: '手机电脑、大家居、家电、生鲜都可以寄递。', keyword: '寄家具家电的快递推荐' },
    { type: T.prodMotive, name: '冷链寄递生鲜药品', desc: '冷链寄递覆盖生鲜、药品。', keyword: '寄生鲜水果不怕坏的快递推荐' },
    { type: T.prodMotive, name: '冷链寄递生鲜药品', desc: '冷链寄递覆盖生鲜、药品。', keyword: '寄海鲜冷冻食品的快递推荐' },
    { type: T.prodMotive, name: '冷链寄递生鲜药品', desc: '冷链寄递覆盖生鲜、药品。', keyword: '寄药品的冷链快递推荐', flag: F.lowIntent, flagNote: '个人寄药品场景小众、搜索量低；冷链意图已由生鲜、海鲜两条承接。' },
    { type: T.prodScene, name: '顺手寄', desc: '收货同时顺手寄快递，不用单独约快递员。', keyword: '收快递时能顺手寄件的快递推荐', flag: F.lowIntent, flagNote: '顺手寄是收件时被动发现的功能，用户不会主动以此问法搜索快递。' },
    { type: T.prodSelling, name: '配送快（211限时达）', desc: '大部分地区 11 点下单当天收到，晚上 11 点下单第二天下午 3 点送到。', keyword: '当天就能到的快递推荐' },
    { type: T.prodSelling, name: '配送快（211限时达）', desc: '大部分地区 11 点下单当天收到，晚上 11 点下单第二天下午 3 点送到。', keyword: '晚上下单第二天能到的快递推荐', flag: F.dup, flagNote: '与「当天就能到的快递推荐」同属 211 时效意图。' },
    { type: T.prodSelling, name: '取件快', desc: '下单流程快，小哥半小时内电话预约取件。', keyword: '上门取件快的快递推荐' },
    { type: T.prodSelling, name: '取件快', desc: '下单流程快，小哥半小时内电话预约取件。', keyword: '下单后半小时就来取件的快递推荐', flag: F.dup, flagNote: '与「上门取件快的快递推荐」意思一致。' },
    { type: T.prodSelling, name: '服务好（电话沟通）', desc: '取件送货都会电话沟通、电话预约。', keyword: '送货前会打电话的快递推荐' },
    { type: T.prodSelling, name: '服务好（电话沟通）', desc: '取件送货都会电话沟通、电话预约。', keyword: '电话预约上门取件的快递推荐' },
    { type: T.prodSelling, name: '服务多（一站式）', desc: '大件、搬家、清洗衣物、家电维修安装清洗、冷链寄递等服务一站式搞定。', keyword: '服务丰富的一站式快递平台推荐' },
    { type: T.prodSelling, name: '服务多（一站式）', desc: '大件、搬家、清洗衣物、家电维修安装清洗、冷链寄递等服务一站式搞定。', keyword: '可以维修安装清洗家电的快递推荐' },
    { type: T.prodSelling, name: '服务多（一站式）', desc: '大件、搬家、清洗衣物、家电维修安装清洗、冷链寄递等服务一站式搞定。', keyword: '能帮忙搬家的快递推荐' },
    { type: T.prodSelling, name: '小哥稳定', desc: '快递员与京东物流直接签订劳动合同，工作稳定、更熟悉用户。', keyword: '快递员服务态度好的快递推荐' },
    { type: T.prodSelling, name: '小哥稳定', desc: '快递员与京东物流直接签订劳动合同，工作稳定、更熟悉用户。', keyword: '快递员是正式员工服务稳定的快递推荐', flag: F.lowIntent, flagNote: '用工模式属品牌背书信息，消费者不会以此搜索；服务价值已由「快递员服务态度好」承接。' },
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

const ROWS_3 = [
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '1. 快递单号查询', flag: F.noIntent, flagNote: '用户意图是查询包裹状态，而非选择快递公司。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '2. 快递100', flag: F.noIntent, flagNote: '主词是第三方查件平台，用户意图为查询包裹，非寄件购买决策。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '3. 寄快递哪家便宜', flag: F.pain, flagNote: '价格比价问法；客户要求减少「贵」的评定，不进投放池。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '4. 快递什么时候能到', flag: F.noIntent, flagNote: '用户倾向于查询在途时效状态，而非购买决策。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '5. 寄大件用什么物流便宜', flag: F.pain, flagNote: '大件比价问法，价格非优势位，不进投放池。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '6. 顺丰快递', flag: F.offTarget, flagNote: '主词为竞品品牌「顺丰」，与本轮目标产品无关。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '7. 快递驿站怎么加盟', flag: F.noIntent, flagNote: '用户倾向于获取加盟创业信息，而非寄件购买决策。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '8. 寄快递怎么收费', flag: F.noIntent, flagNote: '用户倾向于了解资费规则，而非快递公司选择决策。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '9. 哪个快递可以寄宠物', flag: F.offTarget, flagNote: '快递不承运活体动物，与目标产品服务范围不符。' },
    { type: T.search, name: '百度搜索 Top10', desc: '来源于百度搜索数据（辅助参考）', keyword: '10. 什么快递最快', flag: F.dup, flagNote: '与保留词「寄快递哪家快递最快」意思一致。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '11. 寄快递省钱攻略', flag: F.noIntent, flagNote: '用户倾向于获取省钱攻略内容，而非快递公司选择决策。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '12. 搬家行李邮寄最划算的方式', flag: F.dup, flagNote: '与「搬家寄行李划算的快递推荐」意图一致。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '13. 快递不送货上门怎么投诉', flag: F.noIntent, flagNote: '用户倾向于获取投诉维权方法，而非购买决策。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '14. 寄电脑怎么打包', flag: F.noIntent, flagNote: '用户倾向于获取打包教程；安全寄递意图已由「寄手机电脑安全的快递推荐」承接。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '15. 大学生开学行李邮寄', flag: F.dup, flagNote: '与「学生开学寄被子行李箱的快递推荐」意图一致。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '16. 生鲜怎么寄快递不会坏', flag: F.dup, flagNote: '与「寄生鲜水果不怕坏的快递推荐」意图一致。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '17. 快递保价怎么赔', flag: F.noIntent, flagNote: '用户倾向于了解保价理赔规则，而非购买决策。' },
    { type: T.social, name: '小红书话题 Top', desc: '来源于小红书搜索数据（辅助参考）', keyword: '18. 送货上门的快递', flag: F.dup, flagNote: '与「送货上门不放驿站的快递推荐」意思一致。' },
];

export function Page_KeywordExhaustClean3() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_3}
                startIndex={37}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

