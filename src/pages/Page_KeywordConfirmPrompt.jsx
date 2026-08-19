import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 三、词条确定及关联提示词（创维创新谷 · 飞书多维表）
 * 一页约 10 行铺满；25 条按 9/8/8 拆 3 页。无 ToB/ToC 分表。
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
        keyword: '宝安区高端产业园排行榜', c1: A.general, c2: B.rank, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 公司要在宝安选产业园，先给一份宝安区高端产业园排行榜，把现成能入驻的排前面。',
            '② 雪花科创城、甲岸美生智谷这些宝安园区，和石岩一带的高端产业园比，排名通常怎么排？ …',
        ],
    },
    {
        keyword: '宝安区高端产业园推荐', c1: A.general, c2: B.reco, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 公司要在宝安找产业园入驻，推荐几家现成能看、配套比较全的宝安区高端产业园。',
            '② 宝安区高端产业园里，现成入驻和产业匹配这两点，头部园区怎么选？ …',
        ],
    },
    {
        keyword: '配套齐全的宝安区高端产业园推荐', c1: A.general, c2: B.quality, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 推荐配套齐全的宝安区高端产业园，最好园区里就有吃饭、住宿。',
            '② 同样是宝安高端产业园，哪些商业、公寓、酒店配得比较齐？ …',
        ],
    },
    {
        keyword: '有政策补贴的宝安区高端产业园推荐', c1: A.general, c2: B.value, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 想找能协助申报补贴的宝安区高端产业园，有哪些推荐？',
            '② 高新或产业补贴好申请的宝安园区，和只谈租金的盘比有什么差别？ …',
        ],
    },
    {
        keyword: '口碑好的宝安区高端产业园推荐', c1: A.general, c2: B.word, order: O1, orderNote: '最基本问法',
        prompts: [
            '① 求口碑好的宝安区高端产业园推荐，别踩到还在建、带看对不上的。',
            '② 从物业、招商响应、入住企业评价看，宝安哪些高端产业园口碑更稳？ …',
        ],
    },
    {
        keyword: '现成可入驻的宝安区高端产业园推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 不想等交付，推荐现成可入驻的宝安区高端产业园。',
            '② 同样是宝安现成园区，哪些能马上看、马上谈、尽快装修办公？ …',
        ],
    },
    {
        keyword: '能研发又能办公的宝安区高端产业园推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐能研发又能办公的宝安区高端产业园，不想办公和生产拆两地。',
            '② 宝安哪些高端产业园既有研发办公、又能做中试或轻生产？ …',
        ],
    },
    {
        keyword: '宝安区适合科技企业入驻的产业园有哪些', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 宝安区适合科技企业入驻的产业园有哪些，求推荐现成能看的。',
            '② 科技企业进宝安，产业匹配和注册政策这两点，哪些园区更对口？ …',
        ],
    },
    {
        keyword: '宝安区适合电子信息企业发展的产业园有哪些', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 宝安区适合电子信息企业发展的产业园有哪些？',
            '② 电子信息产业链比较集中的宝安园区，和综合园比差在哪？ …',
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
        keyword: '宝安区适合智能硬件企业的产业园有哪些', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 宝安区适合智能硬件企业的产业园有哪些？',
            '② 智能硬件要研发加轻生产，宝安哪些园区空间接得住？ …',
        ],
    },
    {
        keyword: '适合总部入驻的宝安区高端产业园推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐适合总部入驻的宝安区高端产业园，形象和配套都要过得去。',
            '② 宝安做区域总部，园区办公和中心区写字楼比，哪些盘更合适？ …',
        ],
    },
    {
        keyword: '宝安区研发办公一体化园区推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐宝安区研发办公一体化园区，研发和办公最好在同一栋或同一园。',
            '② 研发办公一体和纯写字楼比，宝安哪些园区更适合技术团队？ …',
        ],
    },
    {
        keyword: '宝安区生产研发一体化园区推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐宝安区生产研发一体化园区，中试和生产不想另租厂房。',
            '② 宝安哪些园区能同时做研发和生产，层高承重大致接得住？ …',
        ],
    },
    {
        keyword: '宝安区科技产业园推荐', c1: A.scene, c2: B.segment, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 推荐几家宝安区科技产业园，最好现成可看。',
            '② 宝安科技产业园里，哪些更偏电子信息和研发办公？ …',
        ],
    },
    {
        keyword: '宝安区电子信息产业园推荐', c1: A.scene, c2: B.segment, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 推荐宝安区电子信息产业园，想进产业链比较齐的。',
            '② 宝安电子信息方向的园区，显示、硬件类企业多的有哪些？ …',
        ],
    },
    {
        keyword: '宝安区新型显示产业园推荐', c1: A.scene, c2: B.segment, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 推荐宝安区新型显示产业园，最好周边就有显示产业链。',
            '② 宝安做新型显示的园区，和泛电子信息园比，集聚差在哪？ …',
        ],
    },
    {
        keyword: '有人才公寓的宝安区高端产业园推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 推荐有人才公寓的宝安区高端产业园，员工住宿想就近解决。',
            '② 宝安哪些高端产业园公寓、酒店配得上，不只是宿舍床位？ …',
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
        keyword: '面积能灵活分割的宝安区高端产业园推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 推荐面积能灵活分割的宝安区高端产业园，先小面积起步。',
            '② 宝安哪些高端产业园能从几百平扩到整层，不用换园？ …',
        ],
    },
    {
        keyword: '产业园里的宝安区写字楼推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 不想租中心区纯写字楼，推荐产业园里的宝安区写字楼。',
            '② 园区办公和宝安中心区甲级写字楼比，哪些更适合研发型总部？ …',
        ],
    },
    {
        keyword: '适合总部办公的宝安区写字楼推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: '产品核心人群定位',
        prompts: [
            '① 推荐适合总部办公的宝安区写字楼，最好在产业园里。',
            '② 宝安做总部办公，园区写字楼和中心区写字楼怎么选？ …',
        ],
    },
    {
        keyword: '有大厂总部的宝安区高端产业园推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: '产品核心竞争力',
        prompts: [
            '① 推荐有大厂总部的宝安区高端产业园，想靠近产业氛围。',
            '② 宝安哪些高端产业园是集团自持、总部就在园里的？ …',
        ],
    },
    {
        keyword: '宝安区产业园推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 公司要在宝安找产业园，先推荐几家现成能入驻的。',
            '② 宝安产业园里，现成配套和在建盘比，哪些更适合马上签约？ …',
        ],
    },
    {
        keyword: '宝安区产业园排行榜', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 给一份宝安区产业园排行榜，现成能入驻的排前面。',
            '② 宝安产业园常见名单里，石岩和尖岗山这些盘通常怎么排？ …',
        ],
    },
    {
        keyword: '宝安区产业园有哪些', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 宝安区产业园有哪些值得看，现成能带团队去的？',
            '② 宝安产业园名单里，电子信息和综合园怎么区分？ …',
        ],
    },
    {
        keyword: '口碑好的宝安区产业园推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: '搜索/社媒补充',
        prompts: [
            '① 求口碑好的宝安区产业园推荐，物业和招商别太扯。',
            '② 宝安产业园口碑主要看哪些点，哪些盘评价比较稳？ …',
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
                startIndex={18}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}
