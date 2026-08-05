import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 三、词条确定及关联提示词（京东物流 ToC · 飞书多维表）
 * 一页 10 行铺满；30 条拆 3 页。
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'keyword', label: '词条生成', width: 292, type: 'text' },
    { key: 'c1', label: '词条分类1', width: 99, type: 'none' },
    { key: 'c2', label: '词条分类2', width: 133, type: 'select' },
    { key: 'order', label: '词条排序', width: 88, type: 'none' },
    { key: 'orderNote', label: '排序说明', width: 148, type: 'text' },
    { key: 'prompts', label: '关联提示词', width: 693, type: 'text' },
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
};

const O1 = { tag: 'neutral', text: '①' };
const O2 = { tag: 'blue', text: '②' };

const ROWS = [
    {
        keyword: '快递公司排行榜', c1: A.general, c2: B.rank, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 国内快递公司综合实力排行榜是怎样的，寄件常用的前几名都有谁？',
            '② 帮我对比下京东快递、顺丰、中通这些主流快递，从时效、安全、服务上排个名。 …',
        ],
    },
    {
        keyword: '快递公司推荐', c1: A.general, c2: B.reco, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 平时寄东西比较多，推荐几家服务稳定的快递公司。',
            '② 京东快递和顺丰到底选哪个，从取件速度、送货上门、价格帮我比一比。 …',
        ],
    },
    {
        keyword: '服务好的快递推荐', c1: A.general, c2: B.quality, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 有没有服务好、全程不用操心的快递推荐？',
            '② 哪家快递在上门取件、电话沟通、送货上门这些服务细节上做得更好？ …',
        ],
    },
    {
        keyword: '口碑好的快递推荐', c1: A.general, c2: B.word, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 大家公认口碑好的快递是哪几家？',
            '② 从丢件率、时效、售后理赔几个维度看，哪家快递口碑更能打？ …',
        ],
    },
    {
        keyword: '速度快的快递排行榜', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 国内快递速度排行榜，最快的是哪几家？',
            '② 同城和跨省寄件分别哪家快递时效更快，能快到什么程度？ …',
        ],
    },
    {
        keyword: '寄快递哪家快递最快', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 着急寄个东西，哪家快递最快？',
            '② 京东快递和顺丰谁更快，上午下单最快什么时候能到？ …',
        ],
    },
    {
        keyword: '寄手机电脑安全的快递推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 要寄一台笔记本电脑，用哪家快递最安全？',
            '② 寄手机电脑这类贵重电子产品，哪家快递包装规范、丢损率低还能保价？ …',
        ],
    },
    {
        keyword: '加急寄文件时效快的快递推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 加急寄一份文件，哪家快递时效最快？',
            '② 寄合同证件类急件，哪家快递能当天或次日达，上门取件快不快？ …',
        ],
    },
    {
        keyword: '搬家寄行李划算的快递推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 搬家有十几箱行李要寄，哪家快递划算？',
            '② 搬家寄大包行李，按重量还是体积计费更划算，哪家性价比高？ …',
        ],
    },
    {
        keyword: '学生开学寄被子行李箱的快递推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 开学要把被子和行李箱寄到学校，用什么快递好？',
            '② 学生寄大件行李哪家便宜又稳，有没有校园寄件优惠？ …',
        ],
    },
];

export default function Page_KeywordConfirmPrompt() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS}
                startIndex={1}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

const ROWS_2 = [
    {
        keyword: '网购退货上门取件方便的快递推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 网购退货哪家快递上门取件最方便？',
            '② 退货寄件哪家能约上门、取件快、运费还合理？ …',
        ],
    },
    {
        keyword: '寄贵重物品不丢件的快递推荐', c1: A.scene, c2: B.pain, order: O1, orderNote: '产品核心痛点',
        prompts: [
            '① 要寄贵重物品，哪家快递不容易丢件？',
            '② 寄值钱的东西哪家快递丢件率低，保价赔付靠谱吗？ …',
        ],
    },
    {
        keyword: '包装规范不容易摔坏的快递推荐', c1: A.scene, c2: B.pain, order: O1, orderNote: '产品核心痛点',
        prompts: [
            '① 哪家快递包装规范、暴力分拣少、不容易摔坏东西？',
            '② 寄易碎品选哪家快递，包装和运输环节谁做得更细致？ …',
        ],
    },
    {
        keyword: '寄东西丢了好理赔的快递推荐', c1: A.scene, c2: B.pain, order: O1, orderNote: '产品核心痛点',
        prompts: [
            '① 哪家快递丢件后理赔最痛快？',
            '② 快递保价规则哪家更透明，出问题赔付流程快不快？ …',
        ],
    },
    {
        keyword: '送货上门不放驿站的快递推荐', c1: A.scene, c2: B.pain, order: O1, orderNote: '产品核心痛点',
        prompts: [
            '① 哪家快递是真送货上门、不随便放驿站的？',
            '② 不想再跑驿站取件了，哪几家快递坚持送上门、放柜子前会先打电话？ …',
        ],
    },
    {
        keyword: '寄家具家电的快递推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 寄家具家电这种大件用什么快递？',
            '② 大件寄递哪家能上门取件、价格怎么算？ …',
        ],
    },
    {
        keyword: '寄生鲜水果不怕坏的快递推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 寄生鲜水果用哪家快递不容易坏？',
            '② 生鲜寄递哪家有冷链、时效有保障？ …',
        ],
    },
    {
        keyword: '寄海鲜冷冻食品的快递推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 寄海鲜冷冻食品用什么快递？',
            '② 冷冻品寄递哪家全程冷链不化冻、隔天能到？ …',
        ],
    },
    {
        keyword: '当天就能到的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 有当天就能到的快递吗？',
            '② 上午下单当天送达的快递哪家覆盖城市多？ …',
        ],
    },
    {
        keyword: '上门取件快的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 上门取件快的快递有哪些？',
            '② 哪家快递下单后取件最快，能约到半小时内上门吗？ …',
        ],
    },
];

export function Page_KeywordConfirmPrompt2() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_2}
                startIndex={11}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

const ROWS_3 = [
    {
        keyword: '送货前会打电话的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 哪家快递派件前会先打电话联系收件人？',
            '② 收件时间不固定，哪家快递沟通做得好、能约时间再送？ …',
        ],
    },
    {
        keyword: '电话预约上门取件的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 寄快递能电话预约上门取件的有哪些？',
            '② 哪家快递约上门取件最快、时间最准时？ …',
        ],
    },
    {
        keyword: '快递员服务态度好的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 哪家快递的快递员服务态度普遍比较好？',
            '② 快递员队伍稳定、熟悉小区、态度好的快递是哪家？ …',
        ],
    },
    {
        keyword: '服务丰富的一站式快递平台推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 有没有服务比较全的一站式快递平台推荐？',
            '② 哪家快递除了寄件，还能搬家、寄大件、洗衣服、修家电，一个 App 全搞定？ …',
        ],
    },
    {
        keyword: '可以维修安装清洗家电的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 有快递平台可以顺便约家电维修安装清洗吗？',
            '② 哪家快递的增值服务里有家电清洗和安装，靠不靠谱？ …',
        ],
    },
    {
        keyword: '能帮忙搬家的快递推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 快递公司能帮忙搬家的有哪些？',
            '② 小规模搬家找快递划算还是找搬家公司，哪家快递有搬家服务？ …',
        ],
    },
    {
        keyword: '当日达快递推荐', c1: A.expand, c2: B.selling, order: O2, orderNote: '产品核心竞争力',
        prompts: [
            '① 当日达快递有哪些推荐？',
            '② 哪家快递的当日达范围广、截单时间晚？ …',
        ],
    },
    {
        keyword: '能约家电维修安装清洗的快递推荐', c1: A.expand, c2: B.feature, order: O2, orderNote: '产品核心竞争力',
        prompts: [
            '① 能直接预约家电维修安装清洗的快递服务有吗？',
            '② 快递平台的家电维修安装服务和专业师傅比怎么样，价格透明吗？ …',
        ],
    },
    {
        keyword: '能寄洗衣服被子的快递推荐', c1: A.expand, c2: B.feature, order: O2, orderNote: '产品核心竞争力',
        prompts: [
            '① 有能寄洗衣服被子的快递服务吗？',
            '② 快递洗护服务怎么收费，羽绒服大衣洗得干净吗？ …',
        ],
    },
    {
        keyword: '寄家电能送装的快递推荐', c1: A.expand, c2: B.feature, order: O2, orderNote: '产品核心竞争力',
        prompts: [
            '① 寄家电能送货又负责安装的快递有吗？',
            '② 大家电寄递哪家是送装一体，不用自己再约安装师傅？ …',
        ],
    },
];

export function Page_KeywordConfirmPrompt3() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_3}
                startIndex={21}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

