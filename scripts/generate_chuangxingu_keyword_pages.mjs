import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const TYPE_KEY = {
  '0.固定': 'fixed',
  '1.行业-购买动机': 'indMotive',
  '1.行业-场景画像': 'indScene',
  '1.行业-核心卖点': 'indSelling',
  '1.行业-核心痛点': 'indPain',
  '2.产品-购买动机': 'prodMotive',
  '2.产品-场景画像': 'prodScene',
  '2.产品-核心卖点': 'prodSelling',
  '2.产品-核心痛点': 'prodPain',
  '3.搜索': 'search',
  '3.社媒': 'social',
};

const FLAG_KEY = {
  重复: 'dup',
  非购买意图: 'noIntent',
  跟目标产品不符: 'offTarget',
  产品痛点: 'pain',
  搜索意图低: 'lowIntent',
  品类共性: 'common',
  '扩展词(暂时不显示)': 'expand',
};

const A_KEY = { 通用: 'general', 场景: 'scene', 扩展: 'expand' };
const B_KEY = {
  品牌排行榜: 'rank',
  品牌推荐: 'reco',
  质量: 'quality',
  性价比: 'value',
  口碑: 'word',
  场景画像: 'persona',
  购买动机: 'motive',
  卖点: 'selling',
  痛点: 'pain',
  产品特点: 'feature',
  通义名称替换: 'synonym',
  产品细分: 'segment',
  销量: 'sales',
};
const O_KEY = { '①': 'O1', '②': 'O2', '③': 'O3' };

function esc(s) {
  if (s == null) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n');
}

function evenSizes(n, cap) {
  let pages = Math.max(1, Math.round(n / cap));
  if (n / pages > cap + 1) pages += 1;
  const base = Math.floor(n / pages);
  const rem = n % pages;
  return Array.from({ length: pages }, (_, i) => base + (i < rem ? 1 : 0));
}

function chunk(arr, sizes) {
  const out = [];
  let i = 0;
  for (const n of sizes) {
    out.push(arr.slice(i, i + n));
    i += n;
  }
  if (i !== arr.length) throw new Error(`chunk mismatch ${i} vs ${arr.length}`);
  return out;
}

const exhaust = [
  { type: '0.固定', name: '品牌排行榜', desc: '最基本最常见的核心问法', keyword: '适合中介带客的宝安区产业园排行榜' },
  { type: '0.固定', name: '品牌推荐', desc: '最基本最常见的核心问法', keyword: '适合中介带客的宝安区产业园推荐' },
  { type: '0.固定', name: '服务', desc: '最基本最常见的核心问法', keyword: '支持招商渠道合作的宝安区产业园推荐' },
  { type: '0.固定', name: '性价比', desc: '最基本最常见的核心问法', keyword: '中介佣金高的宝安区产业园推荐' },
  { type: '0.固定', name: '口碑', desc: '最基本最常见的核心问法', keyword: '值得中介主推的宝安区产业园推荐' },
  { type: '1.行业-购买动机', name: '找到能带客、能长期合作的园区', desc: '中介选盘先看园区是否接受渠道带客、能不能长期放盘，避免做一单就没货、或甲方不认中介。', keyword: '适合中介长期合作的宝安区产业园推荐' },
  { type: '1.行业-购买动机', name: '佣金高、结算快', desc: '中介收入看佣金点位和回款速度，倾向选择佣金有竞争力、结佣不拖的园区。', keyword: '中介佣金结算快的宝安区产业园推荐' },
  { type: '1.行业-购买动机', name: '佣金高、结算快', desc: '中介收入看佣金点位和回款速度，倾向选择佣金有竞争力、结佣不拖的园区。', keyword: '中介佣金高的宝安区产业园推荐', flag: '重复', flagNote: '与 0.固定 性价比 语义一致。' },
  { type: '1.行业-购买动机', name: '报备简单、成交效率高', desc: '报备流程短、保护规则清楚、带客后成交顺，才能提高单产、减少撞单和扯皮。', keyword: '中介报备流程简单的宝安区产业园推荐' },
  { type: '1.行业-购买动机', name: '报备简单、成交效率高', desc: '报备流程短、保护规则清楚、带客后成交顺，才能提高单产、减少撞单和扯皮。', keyword: '渠道带客成交效率高的宝安区产业园推荐' },
  { type: '1.行业-场景画像', name: '渠道合作与主推选盘', desc: '中介要决定重点推哪些园区，关注是否支持招商渠道合作、值不值得纳入主推盘。', keyword: '支持招商渠道合作的宝安区产业园推荐', flag: '重复', flagNote: '与 0.固定 服务 语义一致。' },
  { type: '1.行业-场景画像', name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '房源充足的宝安区产业园推荐' },
  { type: '1.行业-场景画像', name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '有现成房源的宝安区产业园推荐' },
  { type: '1.行业-场景画像', name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '有大面积房源的宝安区产业园推荐' },
  { type: '1.行业-场景画像', name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '有整层房源的宝安区产业园推荐' },
  { type: '1.行业-场景画像', name: '按货盘匹配客户', desc: '手上客户面积、业态不同，需要现成、大面积、整层或可灵活分割的房源来快速匹配。', keyword: '面积可灵活分割的宝安区产业园推荐' },
  { type: '1.行业-场景画像', name: '判断客户好不好成交', desc: '带客前会评估园区成交难度，优先推客户更容易落地的盘，减少空看。', keyword: '客户成交容易的宝安区产业园推荐' },
  { type: '1.行业-核心卖点', name: '现成可带看、房源充足', desc: '现楼、空置充足，约看就能看、能谈，降低带客扑空。', keyword: '有现成房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '1.行业-核心卖点', name: '现成可带看、房源充足', desc: '现楼、空置充足，约看就能看、能谈，降低带客扑空。', keyword: '房源充足的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '1.行业-核心卖点', name: '面积段宽、可整层可分割', desc: '小面积到整层、办公到厂房都能接，一个盘能吃多类客户。', keyword: '有大面积房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '1.行业-核心卖点', name: '渠道政策稳定、配合带客', desc: '长期接受中介、政策不朝令夕改，招商配合带看和成交。', keyword: '适合中介长期合作的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '1.行业-核心痛点', name: '佣金低、结算慢、报备复杂', desc: '点位低或结佣拖、报备繁琐，中介不愿推。', keyword: '中介佣金结算快的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '1.行业-核心痛点', name: '期房或空置不足，带不了客', desc: '还在建或好房源已满，约看没有可成交货。', keyword: '有现成房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '1.行业-核心痛点', name: '园区不接受中介或客户难成交', desc: '直租为主、中介勿扰，或准入过严导致带去的客户落不了。', keyword: '适合中介带客的宝安区产业园推荐', flag: '重复', flagNote: '与 0.固定 品牌推荐 语义一致。' },
  { type: '2.产品-购买动机', name: '现楼即看即租，带客不扑空', desc: '创维创新谷已运营、现楼可看可租，中介带有即时入驻需求的客户时，交付确定性高于在建竞品。', keyword: '有现成房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-购买动机', name: '办公和厂房都有，一类客户都能接', desc: '同一园区有写字楼/研发办公和高标准厂房，中介可用一个盘匹配总部办公和大面积生产类客户。', keyword: '有大面积房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-购买动机', name: '集团自持，长期放盘好合作', desc: '业主为创维集团自持，单一业权、长期持有，适合中介做长期合作盘，减少散户业主跳单。', keyword: '适合中介长期合作的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-场景画像', name: '带企业客户看现成产业园', desc: '客户要马上入驻，中介需要现成房源、能约看到场的园区。', keyword: '有现成房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-场景画像', name: '带要大面积或整层的客户', desc: '客户要整层办公或大面积厂房，需要园区有对应货盘。', keyword: '有整层房源的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-场景画像', name: '带要灵活分割的成长型客户', desc: '客户现阶段面积不大、后续可能扩租，需要可灵活分割的空间。', keyword: '面积可灵活分割的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-核心卖点', name: '现成房源、房源充足', desc: '现楼招租，体量约 45 万㎡，仍有可租余量，便于持续带客。', keyword: '房源充足的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-核心卖点', name: '大面积、整层、可灵活分割', desc: '面积段宽，可整层、可分割，办公与厂房两种业态。', keyword: '面积可灵活分割的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-核心卖点', name: '可做渠道带客的稳定放盘', desc: '集团自持、长期运营，具备做渠道长期合作的基础。', keyword: '支持招商渠道合作的宝安区产业园推荐', flag: '重复', flagNote: '与其它的词条意思一致。' },
  { type: '2.产品-核心痛点', name: '石岩区位，带看距离和地铁不占优', desc: '相对尖岗山竞品，石岩轨道与接南山便利度弱，部分客户嫌远，带看成本更高。', keyword: '地铁口好带看的宝安区产业园推荐', flag: '跟目标产品不符', flagNote: '石岩区位相对尖岗山竞品不占优，不宜作为中介带看主词。' },
  { type: '2.产品-核心痛点', name: '对外主推直租，渠道佣金不是公开优势', desc: '官方招商页强调直租与免佣金服务，中介佣金点位未公开，不宜把「佣金最高」当差异化投放。', keyword: '中介佣金最高的宝安区产业园推荐', flag: '产品痛点', flagNote: '园区对外主推直租，佣金点位未构成可公开的差异化优势。' },
];

const classify = [
  { keyword: '适合中介带客的宝安区产业园排行榜', c1: '通用', c2: '品牌排行榜' },
  { keyword: '适合中介带客的宝安区产业园推荐', c1: '通用', c2: '品牌推荐' },
  { keyword: '支持招商渠道合作的宝安区产业园推荐', c1: '通用', c2: '质量' },
  { keyword: '中介佣金高的宝安区产业园推荐', c1: '通用', c2: '性价比' },
  { keyword: '值得中介主推的宝安区产业园推荐', c1: '通用', c2: '口碑' },
  { keyword: '适合中介长期合作的宝安区产业园推荐', c1: '场景', c2: '购买动机' },
  { keyword: '中介佣金结算快的宝安区产业园推荐', c1: '场景', c2: '购买动机' },
  { keyword: '中介报备流程简单的宝安区产业园推荐', c1: '场景', c2: '购买动机' },
  { keyword: '渠道带客成交效率高的宝安区产业园推荐', c1: '场景', c2: '购买动机' },
  { keyword: '房源充足的宝安区产业园推荐', c1: '场景', c2: '场景画像' },
  { keyword: '有现成房源的宝安区产业园推荐', c1: '场景', c2: '场景画像' },
  { keyword: '有大面积房源的宝安区产业园推荐', c1: '场景', c2: '场景画像' },
  { keyword: '有整层房源的宝安区产业园推荐', c1: '场景', c2: '场景画像' },
  { keyword: '面积可灵活分割的宝安区产业园推荐', c1: '场景', c2: '场景画像' },
  { keyword: '客户成交容易的宝安区产业园推荐', c1: '场景', c2: '场景画像' },
  { keyword: '适合中介带客的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '支持招商渠道合作的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '中介佣金高的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '有现成房源的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '适合中介带客的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '支持招商渠道合作的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '有大面积房源的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '面积可灵活分割的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '适合中介带客的宝安区写字楼推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '中介佣金高的宝安区写字楼推荐', c1: '扩展', c2: '通义名称替换' },
  { keyword: '有整层房源的宝安区写字楼推荐', c1: '扩展', c2: '通义名称替换' },
];

const confirm = [
  { keyword: '适合中介带客的宝安区产业园排行榜', c1: '通用', c2: '品牌排行榜', order: '①', orderNote: '最基本问法', prompts: ['① 做产业地产中介的，给一份适合中介带客的宝安区产业园排行榜。', '② 宝安接受渠道带客的园区里，现成货和佣金政策通常怎么排？', '③ 手上常有电子信息客户，适合中介带客的宝安产业园排名靠前的有哪些？'] },
  { keyword: '适合中介带客的宝安区产业园推荐', c1: '通用', c2: '品牌推荐', order: '①', orderNote: '最基本问法', prompts: ['① 推荐适合中介带客的宝安区产业园，要接受渠道、能约看到场。', '② 宝安哪些产业园对中介配合度高，不会带去了被甲方截胡？', '③ 我做宝安园区分销，有哪些盘适合长期带客？'] },
  { keyword: '支持招商渠道合作的宝安区产业园推荐', c1: '通用', c2: '质量', order: '①', orderNote: '最基本问法', prompts: ['① 推荐支持招商渠道合作的宝安区产业园，要能报备、能带看。', '② 宝安产业园里，哪些明确做渠道分销，不是只做直租？', '③ 想签渠道合作，宝安哪些产业园招商愿意对接中介？'] },
  { keyword: '中介佣金高的宝安区产业园推荐', c1: '通用', c2: '性价比', order: '①', orderNote: '最基本问法', prompts: ['① 推荐中介佣金高的宝安区产业园，点位要有竞争力。', '② 宝安产业园渠道佣金，哪些盘给得比同行厚？', '③ 同样能带客，佣金更高的宝安区产业园有哪些？'] },
  { keyword: '值得中介主推的宝安区产业园推荐', c1: '通用', c2: '口碑', order: '①', orderNote: '最基本问法', prompts: ['① 推荐值得中介主推的宝安区产业园，货和成交都要撑得住。', '② 宝安哪些产业园值得放进主推盘，而不是偶尔带一带？', '③ 我要做重点盘，宝安有哪些产业园适合中介长期主推？'] },
  { keyword: '适合中介长期合作的宝安区产业园推荐', c1: '场景', c2: '购买动机', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐适合中介长期合作的宝安区产业园，别做一单就没货。', '② 宝安哪些产业园业主稳定、长期放盘，适合签渠道长约？', '③ 不想换来换去，有哪些宝安产业园能长期合作带客？'] },
  { keyword: '中介佣金结算快的宝安区产业园推荐', c1: '场景', c2: '购买动机', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐中介佣金结算快的宝安区产业园，别拖几个月。', '② 宝安产业园结佣，哪些盘流程清楚、回款比较快？', '③ 我靠佣金周转，结算快的宝安区产业园有哪些？'] },
  { keyword: '中介报备流程简单的宝安区产业园推荐', c1: '场景', c2: '购买动机', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐中介报备流程简单的宝安区产业园，别填一堆表还没保护。', '② 宝安哪些产业园报备规则清楚，撞单怎么处理说得明？', '③ 带客前要先报备，流程简单的宝安区产业园有哪些？'] },
  { keyword: '渠道带客成交效率高的宝安区产业园推荐', c1: '场景', c2: '购买动机', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐渠道带客成交效率高的宝安区产业园，少空看。', '② 宝安哪些产业园带去就能谈，招商配合签约比较快？', '③ 我时间有限，成交效率高的宝安区产业园优先看哪些？'] },
  { keyword: '房源充足的宝安区产业园推荐', c1: '场景', c2: '场景画像', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐房源充足的宝安区产业园，别约了看没有可租面积。', '② 宝安哪些产业园空置还够，能持续给中介留货？', '③ 手上客户面积段不一样，房源充足的宝安产业园有哪些？'] },
  { keyword: '有现成房源的宝安区产业园推荐', c1: '场景', c2: '场景画像', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐有现成房源的宝安区产业园，客户要马上入驻。', '② 宝安现楼可带看的产业园，和在建盘比哪些更好成交？', '③ 客户下个月就要办公，有现成房源的宝安区产业园有哪些？'] },
  { keyword: '有大面积房源的宝安区产业园推荐', c1: '场景', c2: '场景画像', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐有大面积房源的宝安区产业园，客户要一千平以上。', '② 宝安哪些产业园能接大面积办公或厂房，不是只有小分割？', '③ 客户要扩产，有大面积房源的宝安区产业园有哪些？'] },
  { keyword: '有整层房源的宝安区产业园推荐', c1: '场景', c2: '场景画像', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐有整层房源的宝安区产业园，客户要整层办公。', '② 宝安哪些产业园标准层能整层租，形象也过得去？', '③ 总部要整层，有整层房源的宝安区产业园有哪些？'] },
  { keyword: '面积可灵活分割的宝安区产业园推荐', c1: '场景', c2: '场景画像', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐面积可灵活分割的宝安区产业园，先小后大。', '② 宝安哪些产业园能拆能并，成长型客户比较好谈？', '③ 客户今年只要几百平，面积可灵活分割的宝安产业园有哪些？'] },
  { keyword: '客户成交容易的宝安区产业园推荐', c1: '场景', c2: '场景画像', order: '①', orderNote: '产品核心人群定位', prompts: ['① 推荐客户成交容易的宝安区产业园，少带去谈不拢。', '② 宝安哪些产业园租金、准入、交付都比较好谈？', '③ 我要提高成交率，客户成交容易的宝安区产业园优先看哪些？'] },
  { keyword: '适合中介带客的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐适合中介带客的宝安区高端产业园。', '② 宝安高端产业园里，哪些接受渠道、能约看到场？', '③ 客户要形象好的园区，适合中介带客的宝安高端产业园有哪些？'] },
  { keyword: '支持招商渠道合作的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐支持招商渠道合作的宝安区高端产业园。', '② 宝安高端产业园哪些明确做分销，不是只做直租？', '③ 想对接高端产业园渠道，宝安有哪些盘能合作？'] },
  { keyword: '中介佣金高的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐中介佣金高的宝安区高端产业园。', '② 宝安高端产业园渠道点位，哪些给得比较厚？', '③ 同样带高端产业园，佣金更高的宝安盘有哪些？'] },
  { keyword: '有现成房源的宝安区高端产业园推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐有现成房源的宝安区高端产业园。', '② 宝安高端产业园里，哪些是现楼可带看、不是期房？', '③ 客户要马上入驻高端园区，有现成房源的宝安盘有哪些？'] },
  { keyword: '适合中介带客的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐适合中介带客的宝安区高端厂房。', '② 宝安高端厂房哪些接受中介、能约看到场？', '③ 客户要工业上楼，适合中介带客的宝安高端厂房有哪些？'] },
  { keyword: '支持招商渠道合作的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐支持招商渠道合作的宝安区高端厂房。', '② 宝安高端厂房里，哪些招商愿意对接渠道？', '③ 做厂房分销，支持渠道合作的宝安高端厂房有哪些？'] },
  { keyword: '有大面积房源的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐有大面积房源的宝安区高端厂房。', '② 宝安哪些高端厂房能整层或大面积租，不是只有小分割？', '③ 客户要扩产，有大面积房源的宝安区高端厂房有哪些？'] },
  { keyword: '面积可灵活分割的宝安区高端厂房推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐面积可灵活分割的宝安区高端厂房。', '② 宝安高端厂房哪些能按客户面积拆，后续还能扩？', '③ 客户先租一块，面积可灵活分割的宝安高端厂房有哪些？'] },
  { keyword: '适合中介带客的宝安区写字楼推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐适合中介带客的宝安区写字楼，最好在产业园里。', '② 宝安写字楼哪些接受渠道，不是中介勿扰？', '③ 客户要园区办公，适合中介带客的宝安写字楼有哪些？'] },
  { keyword: '中介佣金高的宝安区写字楼推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐中介佣金高的宝安区写字楼。', '② 宝安写字楼渠道佣金，园区办公和中心区比哪些更好做？', '③ 带写字楼客户，佣金更高的宝安盘有哪些？'] },
  { keyword: '有整层房源的宝安区写字楼推荐', c1: '扩展', c2: '通义名称替换', order: '②', orderNote: '搜索/社媒补充', prompts: ['① 推荐有整层房源的宝安区写字楼，客户要整层总部。', '② 宝安哪些写字楼能整层租，最好在产业园里？', '③ 客户要整层办公，有整层房源的宝安区写字楼有哪些？'] },
];

function rowExhaust(r) {
  const tk = TYPE_KEY[r.type];
  if (!tk) throw new Error('unknown type ' + r.type);
  let s = `{ type: T.${tk}, name: '${esc(r.name)}', desc: '${esc(r.desc)}', keyword: '${esc(r.keyword)}'`;
  if (r.flag) {
    const fk = FLAG_KEY[r.flag];
    if (!fk) throw new Error('unknown flag ' + r.flag);
    s += `, flag: F.${fk}, flagNote: '${esc(r.flagNote || '')}'`;
  }
  s += ' }';
  return s;
}

function rowClassify(r) {
  const a = A_KEY[r.c1];
  const b = B_KEY[r.c2];
  if (!a || !b) throw new Error('classify key ' + r.c1 + ' / ' + r.c2);
  return `{ keyword: '${esc(r.keyword)}', c1: A.${a}, c2: B.${b} }`;
}

function rowConfirm(r) {
  const a = A_KEY[r.c1];
  const b = B_KEY[r.c2];
  const o = O_KEY[r.order];
  if (!a || !b || !o) throw new Error('confirm key fail ' + JSON.stringify(r));
  const prompts = (r.prompts || []).slice(0, 2).map((p, i, arr) => {
    let t = p;
    if (i === arr.length - 1 && (r.prompts || []).length > 2 && !/[…\.]$/.test(p)) t = `${p} …`;
    return `'${esc(t)}'`;
  });
  return `{
        keyword: '${esc(r.keyword)}', c1: A.${a}, c2: B.${b}, order: ${o}, orderNote: '${esc(r.orderNote)}',
        prompts: [
            ${prompts.join(',\n            ')},
        ],
    }`;
}

const exhaustSizes = evenSizes(exhaust.length, 17);
const classifySizes = evenSizes(classify.length, 17);
const confirmSizes = evenSizes(confirm.length, 10);
const exhaustChunks = chunk(exhaust, exhaustSizes);
const classifyChunks = chunk(classify, classifySizes);
const confirmChunks = chunk(confirm, confirmSizes);

function emitExhaust() {
  const parts = exhaustChunks.map((rows, idx) => {
    const name = idx === 0 ? 'ROWS' : `ROWS_${idx + 1}`;
    const exportName = idx === 0 ? 'Page_KeywordExhaustClean' : `Page_KeywordExhaustClean${idx + 1}`;
    const start = exhaustChunks.slice(0, idx).reduce((s, a) => s + a.length, 0) + 1;
    const fn = idx === 0 ? `export default function ${exportName}()` : `export function ${exportName}()`;
    return { name, start, rowsSrc: rows.map(rowExhaust).join(',\n    '), fn };
  });

  return `import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 一、词条穷举及清洗（创维创新谷 · 飞书多维表）
 * 一页约 17 行铺满；本表 ${exhaust.length} 条按 ${exhaustSizes.join('/')} 拆 ${exhaustChunks.length} 页。
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

${parts.map((p) => `const ${p.name} = [
    ${p.rowsSrc},
];

${p.fn} {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={${p.name}}
                startIndex={${p.start}}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
`).join('\n')}`;
}

function emitClassify() {
  const parts = classifyChunks.map((rows, idx) => {
    const name = idx === 0 ? 'ROWS' : `ROWS_${idx + 1}`;
    const exportName = idx === 0 ? 'Page_KeywordClassifyExpand' : `Page_KeywordClassifyExpand${idx + 1}`;
    const start = classifyChunks.slice(0, idx).reduce((s, a) => s + a.length, 0) + 1;
    const fn = idx === 0 ? `export default function ${exportName}()` : `export function ${exportName}()`;
    return { name, start, rowsSrc: rows.map(rowClassify).join(',\n    '), fn };
  });

  return `import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 二、词条分类及扩展（创维创新谷 · 飞书多维表）
 * ${classify.length} 条按 ${classifySizes.join('/')} 拆 ${classifyChunks.length} 页。
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
    segment: { tag: 'cyan', text: '产品细分' },
    sales: { tag: 'orange', text: '销量' },
};

${parts.map((p) => `const ${p.name} = [
    ${p.rowsSrc},
];

${p.fn} {
    return (
        <BitableWindow>
            <BitableView
                tableName="二、词条分类及扩展"
                viewName="全部词条"
                notice="你调整了行高"
                columns={COLUMNS}
                rows={${p.name}}
                startIndex={${p.start}}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
`).join('\n')}`;
}

function emitConfirm() {
  const parts = confirmChunks.map((rows, idx) => {
    const name = idx === 0 ? 'ROWS' : `ROWS_${idx + 1}`;
    const exportName = idx === 0 ? 'Page_KeywordConfirmPrompt' : `Page_KeywordConfirmPrompt${idx + 1}`;
    const start = confirmChunks.slice(0, idx).reduce((s, a) => s + a.length, 0) + 1;
    const fn = idx === 0 ? `export default function ${exportName}()` : `export function ${exportName}()`;
    return { name, start, rowsSrc: rows.map(rowConfirm).join(',\n    '), fn };
  });

  return `import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 三、词条确定及关联提示词（创维创新谷 · 飞书多维表）
 * 一页约 10 行铺满；${confirm.length} 条按 ${confirmSizes.join('/')} 拆 ${confirmChunks.length} 页。无 ToB/ToC 分表。
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

${parts.map((p) => `const ${p.name} = [
    ${p.rowsSrc},
];

${p.fn} {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={${p.name}}
                startIndex={${p.start}}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}
`).join('\n')}`;
}

fs.writeFileSync(path.join(root, 'src/pages/Page_KeywordExhaustClean.jsx'), emitExhaust(), 'utf8');
fs.writeFileSync(path.join(root, 'src/pages/Page_KeywordClassifyExpand.jsx'), emitClassify(), 'utf8');
fs.writeFileSync(path.join(root, 'src/pages/Page_KeywordConfirmPrompt.jsx'), emitConfirm(), 'utf8');

console.log('OK', {
  exhaust: exhaustSizes,
  classify: classifySizes,
  confirm: confirmSizes,
});
