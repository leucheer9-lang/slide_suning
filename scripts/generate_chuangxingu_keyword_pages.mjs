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

const { exhaust, classify, confirm } = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'chuangxingu_keyword_data.json'), 'utf8')
);

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
