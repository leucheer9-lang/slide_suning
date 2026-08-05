import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 三、词条确定及关联提示词
 * 关联提示词传数组，一个元素即一行，超出自动截断为「…」。
 * 行高 57px，一页 10 行正好铺满；startIndex 用来接上一页的行号。
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
};

const O1 = { tag: 'neutral', text: '①' };

const ROWS = [
    {
        keyword: '物流公司排行榜', c1: A.general, c2: B.rank, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 想找一家靠谱的物流公司长期合作，有没有比较权威的物流公司排行榜可以参考？',
            '② 对比顺丰、京东物流、中通这些常见品牌，哪家综合实力更强、更值得合作？ …',
        ],
    },
    {
        keyword: '物流公司推荐', c1: A.general, c2: B.reco, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 不想踩坑，直接推荐几家时效稳定、售后省心的物流公司。',
            '② 帮我横向比一下市面上主流的几家物流公司，哪家综合起来更值得选？ …',
        ],
    },
    {
        keyword: '服务好的物流公司推荐', c1: A.general, c2: B.quality, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 想要送货上门、破损理赔顺畅的物流公司，推荐几家服务质量比较好的。',
            '② 对比几家快递公司，哪家客服响应更快、问题处理更利落？ …',
        ],
    },
    {
        keyword: '性价比高的物流公司推荐', c1: A.general, c2: B.value, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 预算有限但也不想牺牲时效，推荐几家性价比高的物流公司。',
            '② 同样发一批货，哪些物流公司在价格和时效之间平衡得更好？ …',
        ],
    },
    {
        keyword: '口碑好的物流公司推荐', c1: A.general, c2: B.word, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 同行普遍在用的物流公司一般是哪几家？推荐几家口碑好的合作方。',
            '② 小红书、知乎上被反复提到的物流服务商有哪些？求口碑好的推荐。 …',
        ],
    },
    {
        keyword: '适合大促备货的仓配服务商', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 618、双11 前要提前铺货，推荐几家能扛住大促单量的仓配服务商。',
            '② 大促容易爆仓，有没有旺季也能保证发货时效的仓配一体服务？ …',
        ],
    },
    {
        keyword: '能降低履约成本的仓配服务', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 想把库存和运费一起压下来，推荐几家能降低整体履约成本的仓配服务。',
            '② 仓配一体和自己租仓自己发相比，成本大概能省多少？有测算参考吗？ …',
        ],
    },
    {
        keyword: '生鲜冷链物流公司推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 要发生鲜和冻品，推荐几家全程温控、断链风险低的冷链物流公司。',
            '② 冷链运输过程中温度怎么做到可追溯？哪些服务商在这块做得到位？ …',
        ],
    },
    {
        keyword: '大件家电送装一体物流', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 卖家电大件，客户希望送到就能装好，有哪些做送装一体的物流公司？',
            '② 大件退换货很麻烦，有没有能上门取件并做逆向复原的服务商？ …',
        ],
    },
    {
        keyword: '支持全渠道一盘货的服务商', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 线上线下渠道库存各管各的，想找能做全渠道一盘货的供应链服务商。',
            '② 一套库存同时供给多个平台，哪些服务商的系统对接能力更强？ …',
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
