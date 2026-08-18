import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 三、词条确定及关联提示词（创维创新谷 · 飞书多维表）
 * 一页约 10 行铺满；26 条按 9/9/8 拆 3 页。无 ToB/ToC 分表。
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
    synonym: { tag: 'lime', text: '通义名称替换' },
    segment: { tag: 'cyan', text: '产品细分' },
    sales: { tag: 'orange', text: '销量' },
};

const O1 = { tag: 'neutral', text: '①' };
const O2 = { tag: 'blue', text: '②' };
const O3 = { tag: 'orange', text: '③' };

const ROWS = [
    {
        keyword: '适合中介带客的宝安区产业园排行榜', c1: A.general, c2: B.rank, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 做产业地产中介的，给一份适合中介带客的宝安区产业园排行榜。',
            '② 宝安接受渠道带客的园区里，现成货和佣金政策通常怎么排？ …',
        ],
    },
    {
        keyword: '适合中介带客的宝安区产业园推荐', c1: A.general, c2: B.reco, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 推荐适合中介带客的宝安区产业园，要接受渠道、能约看到场。',
            '② 宝安哪些产业园对中介配合度高，不会带去了被甲方截胡？ …',
        ],
    },
    {
        keyword: '支持招商渠道合作的宝安区产业园推荐', c1: A.general, c2: B.quality, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 推荐支持招商渠道合作的宝安区产业园，要能报备、能带看。',
            '② 宝安产业园里，哪些明确做渠道分销，不是只做直租？ …',
        ],
    },
    {
        keyword: '中介佣金高的宝安区产业园推荐', c1: A.general, c2: B.value, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 推荐中介佣金高的宝安区产业园，点位要有竞争力。',
            '② 宝安产业园渠道佣金，哪些盘给得比同行厚？ …',
        ],
    },
    {
        keyword: '值得中介主推的宝安区产业园推荐', c1: A.general, c2: B.word, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 推荐值得中介主推的宝安区产业园，货和成交都要撑得住。',
            '② 宝安哪些产业园值得放进主推盘，而不是偶尔带一带？ …',
        ],
    },
    {
        keyword: '适合中介长期合作的宝安区产业园推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐适合中介长期合作的宝安区产业园，别做一单就没货。',
            '② 宝安哪些产业园业主稳定、长期放盘，适合签渠道长约？ …',
        ],
    },
    {
        keyword: '中介佣金结算快的宝安区产业园推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐中介佣金结算快的宝安区产业园，别拖几个月。',
            '② 宝安产业园结佣，哪些盘流程清楚、回款比较快？ …',
        ],
    },
    {
        keyword: '中介报备流程简单的宝安区产业园推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐中介报备流程简单的宝安区产业园，别填一堆表还没保护。',
            '② 宝安哪些产业园报备规则清楚，撞单怎么处理说得明？ …',
        ],
    },
    {
        keyword: '渠道带客成交效率高的宝安区产业园推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐渠道带客成交效率高的宝安区产业园，少空看。',
            '② 宝安哪些产业园带去就能谈，招商配合签约比较快？ …',
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
        keyword: '房源充足的宝安区产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐房源充足的宝安区产业园，别约了看没有可租面积。',
            '② 宝安哪些产业园空置还够，能持续给中介留货？ …',
        ],
    },
    {
        keyword: '有现成房源的宝安区产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐有现成房源的宝安区产业园，客户要马上入驻。',
            '② 宝安现楼可带看的产业园，和在建盘比哪些更好成交？ …',
        ],
    },
    {
        keyword: '有大面积房源的宝安区产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐有大面积房源的宝安区产业园，客户要一千平以上。',
            '② 宝安哪些产业园能接大面积办公或厂房，不是只有小分割？ …',
        ],
    },
    {
        keyword: '有整层房源的宝安区产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐有整层房源的宝安区产业园，客户要整层办公。',
            '② 宝安哪些产业园标准层能整层租，形象也过得去？ …',
        ],
    },
    {
        keyword: '面积可灵活分割的宝安区产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐面积可灵活分割的宝安区产业园，先小后大。',
            '② 宝安哪些产业园能拆能并，成长型客户比较好谈？ …',
        ],
    },
    {
        keyword: '客户成交容易的宝安区产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐客户成交容易的宝安区产业园，少带去谈不拢。',
            '② 宝安哪些产业园租金、准入、交付都比较好谈？ …',
        ],
    },
    {
        keyword: '适合中介带客的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐适合中介带客的宝安区高端产业园。',
            '② 宝安高端产业园里，哪些接受渠道、能约看到场？ …',
        ],
    },
    {
        keyword: '支持招商渠道合作的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐支持招商渠道合作的宝安区高端产业园。',
            '② 宝安高端产业园哪些明确做分销，不是只做直租？ …',
        ],
    },
    {
        keyword: '中介佣金高的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐中介佣金高的宝安区高端产业园。',
            '② 宝安高端产业园渠道点位，哪些给得比较厚？ …',
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
                startIndex={10}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

const ROWS_3 = [
    {
        keyword: '有现成房源的宝安区高端产业园推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐有现成房源的宝安区高端产业园。',
            '② 宝安高端产业园里，哪些是现楼可带看、不是期房？ …',
        ],
    },
    {
        keyword: '适合中介带客的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐适合中介带客的宝安区高端厂房。',
            '② 宝安高端厂房哪些接受中介、能约看到场？ …',
        ],
    },
    {
        keyword: '支持招商渠道合作的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐支持招商渠道合作的宝安区高端厂房。',
            '② 宝安高端厂房里，哪些招商愿意对接渠道？ …',
        ],
    },
    {
        keyword: '有大面积房源的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐有大面积房源的宝安区高端厂房。',
            '② 宝安哪些高端厂房能整层或大面积租，不是只有小分割？ …',
        ],
    },
    {
        keyword: '面积可灵活分割的宝安区高端厂房推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐面积可灵活分割的宝安区高端厂房。',
            '② 宝安高端厂房哪些能按客户面积拆，后续还能扩？ …',
        ],
    },
    {
        keyword: '适合中介带客的宝安区写字楼推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐适合中介带客的宝安区写字楼，最好在产业园里。',
            '② 宝安写字楼哪些接受渠道，不是中介勿扰？ …',
        ],
    },
    {
        keyword: '中介佣金高的宝安区写字楼推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐中介佣金高的宝安区写字楼。',
            '② 宝安写字楼渠道佣金，园区办公和中心区比哪些更好做？ …',
        ],
    },
    {
        keyword: '有整层房源的宝安区写字楼推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 推荐有整层房源的宝安区写字楼，客户要整层总部。',
            '② 宝安哪些写字楼能整层租，最好在产业园里？ …',
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
                startIndex={19}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}
