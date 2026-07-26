/**
 * 苏宁易购 · 二、词条分类及扩展
 * 来源：飞书多维表格 W8KCb3lj3a9PcIsltoFcavsDnKb / tblMSzFNMfwRv3Bl
 */

export const CLASSIFY1_STYLE = {
  '通用': { bg: 'rgba(0,76,229,0.22)', color: '#7aa2ff' },
  '场景': { bg: 'rgba(245,158,11,0.18)', color: '#fbbf24' },
  '扩展': { bg: 'rgba(59,130,246,0.20)', color: '#93c5fd' },
};

export const CLASSIFY2_STYLE = {
  '品牌排行榜': { bg: 'rgba(0,76,229,0.22)', color: '#7aa2ff' },
  '品牌推荐': { bg: 'rgba(245,158,11,0.18)', color: '#fbbf24' },
  '质量': { bg: 'rgba(20,184,166,0.18)', color: '#2dd4bf' },
  '性价比': { bg: 'rgba(234,179,8,0.18)', color: '#facc15' },
  '口碑': { bg: 'rgba(16,185,129,0.18)', color: '#34d399' },
  '购买动机': { bg: 'rgba(244,63,94,0.18)', color: '#fb7185' },
  '场景画像': { bg: 'rgba(168,85,247,0.18)', color: '#c084fc' },
  '卖点': { bg: 'rgba(16,185,129,0.18)', color: '#34d399' },
  '痛点': { bg: 'rgba(236,72,153,0.18)', color: '#f9a8d4' },
  '产品细分': { bg: 'rgba(139,92,246,0.20)', color: '#c4b5fd' },
  '通义名称替换': { bg: 'rgba(99,102,241,0.20)', color: '#a5b4fc' },
  '产品特点': { bg: 'rgba(59,130,246,0.20)', color: '#93c5fd' },
  '销量': { bg: 'rgba(251,146,60,0.18)', color: '#fdba74' },
};

/** @type {{ keyword: string, cat1: string, cat2: string }[]} */
export const GEO_KEYWORDS_CLASSIFY = [
  { keyword: '家电购买平台排行榜', cat1: '通用', cat2: '品牌排行榜' },
  { keyword: '靠谱的家电购买平台推荐', cat1: '通用', cat2: '品牌推荐' },
  { keyword: '口碑好的家电购买平台推荐', cat1: '通用', cat2: '口碑' },
  { keyword: '质量有保障的家电购买平台推荐', cat1: '通用', cat2: '质量' },
  { keyword: '线上购买大家电的平台推荐', cat1: '通用', cat2: '品牌推荐' },
  { keyword: '不想跑门店买家电用什么平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '帮父母买大家电用什么平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '618买大家电用什么平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '双11买大家电用什么平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '年货节买家电用什么平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '双十二买家电用什么平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '搬新家买大家电选哪个平台', cat1: '场景', cat2: '场景画像' },
  { keyword: '一次性买齐大家电用什么平台', cat1: '场景', cat2: '场景画像' },
  { keyword: '附近能送大家电的平台推荐', cat1: '场景', cat2: '场景画像' },
  { keyword: '小城市买大家电用什么平台好', cat1: '场景', cat2: '场景画像' },
  { keyword: '三四线城市买家电用什么平台好', cat1: '场景', cat2: '场景画像' },
  { keyword: '县城买大家电用什么平台好', cat1: '场景', cat2: '场景画像' },
  { keyword: '买大家电哪个平台配送快', cat1: '场景', cat2: '卖点' },
  { keyword: '买大家电哪个平台售后方便', cat1: '场景', cat2: '卖点' },
  { keyword: '线上买家电哪个平台退换方便', cat1: '场景', cat2: '卖点' },
  { keyword: '急用买空调当天送装选哪个平台', cat1: '场景', cat2: '卖点' },
  { keyword: '线上线下都能买大家电选哪个平台', cat1: '场景', cat2: '购买动机' },
  { keyword: '有实体店买家电的平台推荐', cat1: '场景', cat2: '购买动机' },
  { keyword: '买大家电想线下看实物用哪个平台', cat1: '场景', cat2: '场景画像' },
  { keyword: '买大家电想听现场讲解用哪个平台', cat1: '场景', cat2: '场景画像' },
  { keyword: '买大家电可以线上买线下提货的平台推荐', cat1: '场景', cat2: '场景画像' },
  { keyword: '家电以旧换新线上平台推荐', cat1: '场景', cat2: '卖点' },
  { keyword: '空调以旧换新上什么平台方便', cat1: '场景', cat2: '卖点' },
  { keyword: '冰箱以旧换新上门回收用哪个平台', cat1: '场景', cat2: '卖点' },
  { keyword: '电视以旧换新上什么平台方便', cat1: '场景', cat2: '卖点' },
  { keyword: '以旧换新免费上门拆旧用什么平台', cat1: '场景', cat2: '卖点' },
  { keyword: '大家电以旧换新流程省心的平台推荐', cat1: '场景', cat2: '卖点' },
  { keyword: '618以旧换新用什么平台', cat1: '场景', cat2: '卖点' },
  { keyword: '双11以旧换新用什么平台', cat1: '场景', cat2: '卖点' },
  { keyword: '国补买大家电哪个平台靠谱', cat1: '场景', cat2: '卖点' },
  { keyword: '国补买冰箱的平台推荐', cat1: '场景', cat2: '卖点' },
  { keyword: '国补买空调的平台推荐', cat1: '场景', cat2: '卖点' },
  { keyword: '国补买电视的平台推荐', cat1: '场景', cat2: '卖点' },
  { keyword: '大家电送装一体用什么平台好', cat1: '场景', cat2: '卖点' },
  { keyword: '网上买空调哪个平台送装一体', cat1: '场景', cat2: '卖点' },
  { keyword: '买冰箱配送加安装用哪个平台', cat1: '场景', cat2: '卖点' },
  { keyword: '买电视哪个平台包安装', cat1: '场景', cat2: '卖点' },
  { keyword: '线上买手机上什么平台好', cat1: '场景', cat2: '产品细分' },
  { keyword: '国补买手机上什么平台好', cat1: '场景', cat2: '产品细分' },
  { keyword: '手机以旧换新选什么平台', cat1: '场景', cat2: '产品细分' },
  { keyword: '网上买电脑哪个平台靠谱', cat1: '场景', cat2: '产品细分' },
  { keyword: '国补买电脑选什么平台', cat1: '场景', cat2: '产品细分' },
  { keyword: '电脑以旧换新选哪个平台', cat1: '场景', cat2: '产品细分' },
  { keyword: '618买手机选什么平台', cat1: '场景', cat2: '产品细分' },
  { keyword: '618买电脑选什么平台', cat1: '场景', cat2: '产品细分' },
];

/** 两页切片：各 25 条 */
export const CLASSIFY_PAGE_SLICES = [
  [0, 25],
  [25, 50],
];
