/**
 * Fetch Awada keyword bitables and write structured JSON for React pages.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'tmp_awada_keywords.json');

const APP_ID = process.env.LARK_APP_ID;
const APP_SECRET = process.env.LARK_APP_SECRET;
const APP_TOKEN = process.env.LARK_APP_TOKEN || 'HrenbmPzOaYU4Us7KEPcEyEWnxe';

if (!APP_ID || !APP_SECRET) {
  console.error('缺少环境变量：LARK_APP_ID / LARK_APP_SECRET。');
  process.exit(1);
}

const TABLES = {
  exhaustClean: {
    name: '穷举及清洗',
    table_id: 'tblCEO8DhksPaow8',
    view_id: 'vewfU12LfF',
  },
  classifyExpand: {
    name: '分类及拓展',
    table_id: 'tbluiIOdxLtnYOp8',
    view_id: 'vew9ZPyxW6',
  },
  confirmPrompt: {
    name: '词条确定',
    table_id: 'tbl15pw1Vq2zWP7z',
    view_id: 'vew57JUnYA',
  },
};

const TYPE_TAG = {
  '0.固定': 'neutral',
  '1.行业-购买动机': 'blue',
  '1.行业-场景画像': 'orange',
  '1.行业-核心卖点': 'cyan',
  '1.行业-核心痛点': 'yellow',
  '2.产品-购买动机': 'teal',
  '2.产品-场景画像': 'red',
  '2.产品-核心卖点': 'purple',
  '2.产品-核心痛点': 'green',
  '3.搜索': 'carmine',
  '3.社媒': 'lime',
};

const FLAG_TAG = {
  重复: 'grass',
  非购买意图: 'slate',
  跟目标产品不符: 'violet',
  产品痛点: 'blue',
  搜索意图低: 'teal',
  品类共性: 'carmine',
  '扩展词(暂时不显示)': 'orange',
};

const C1_TAG = {
  通用: 'neutral',
  场景: 'blue',
  扩展: 'orange',
};

const C2_TAG = {
  品牌排行榜: 'neutral',
  品牌推荐: 'blue',
  质量: 'orange',
  性价比: 'cyan',
  口碑: 'yellow',
  场景画像: 'red',
  购买动机: 'teal',
  卖点: 'purple',
  痛点: 'green',
  产品特点: 'lime',
  通义名称替换: 'lime',
  产品细分: 'cyan',
  销量: 'orange',
};

const ORDER_TAG = {
  '①': 'neutral',
  '②': 'blue',
  '③': 'orange',
};

function textOf(v) {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    return v
      .map((x) => {
        if (typeof x === 'string') return x;
        if (x && typeof x === 'object') return x.text ?? x.name ?? '';
        return '';
      })
      .join('');
  }
  if (typeof v === 'object') return v.text ?? v.name ?? '';
  return String(v);
}

function selectOf(v) {
  if (v == null || v === '') return null;
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return textOf(v) || null;
  if (typeof v === 'object') return v.name ?? v.text ?? null;
  return String(v);
}

function tagged(map, text) {
  if (!text) return null;
  return { tag: map[text] ?? 'neutral', text };
}

async function getTenantToken() {
  const res = await fetch(
    'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app_id: APP_ID, app_secret: APP_SECRET }),
    },
  );
  const data = await res.json();
  if (data.code !== 0) throw new Error(`token failed: ${JSON.stringify(data)}`);
  return data.tenant_access_token;
}

async function listFields(token, tableId) {
  const fields = [];
  let page_token;
  do {
    const url = new URL(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${APP_TOKEN}/tables/${tableId}/fields`,
    );
    url.searchParams.set('page_size', '100');
    if (page_token) url.searchParams.set('page_token', page_token);
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data.code !== 0) throw new Error(`fields failed: ${JSON.stringify(data)}`);
    fields.push(...(data.data?.items ?? []));
    page_token = data.data?.has_more ? data.data.page_token : null;
  } while (page_token);
  return fields;
}

async function searchAll(token, tableId, viewId) {
  const items = [];
  let page_token;
  do {
    const url = new URL(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${APP_TOKEN}/tables/${tableId}/records/search`,
    );
    url.searchParams.set('page_size', '500');
    if (page_token) url.searchParams.set('page_token', page_token);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ view_id: viewId }),
    });
    const data = await res.json();
    if (data.code !== 0) throw new Error(`search failed: ${JSON.stringify(data)}`);
    items.push(...(data.data?.items ?? []));
    page_token = data.data?.has_more ? data.data.page_token : null;
  } while (page_token);
  return items;
}

function mapExhaust(items) {
  return items.map((item) => {
    const f = item.fields || {};
    const typeText = selectOf(f['类别']);
    const flagText = selectOf(f['词条清洗打标']);
    const row = {
      type: tagged(TYPE_TAG, typeText),
      name: textOf(f['名称']),
      desc: textOf(f['名称解释']),
      keyword: textOf(f['词条生成']),
    };
    if (flagText) row.flag = tagged(FLAG_TAG, flagText);
    const note = textOf(f['清洗打标说明']);
    if (note) row.flagNote = note;
    return row;
  });
}

function mapClassify(items) {
  return items.map((item) => {
    const f = item.fields || {};
    return {
      keyword: textOf(f['词条生成']),
      c1: tagged(C1_TAG, selectOf(f['词条分类1'])),
      c2: tagged(C2_TAG, selectOf(f['词条分类2'])),
    };
  });
}

function mapConfirm(items) {
  return items.map((item) => {
    const f = item.fields || {};
    const promptsRaw = textOf(f['关联提示词']);
    const prompts = promptsRaw
      ? promptsRaw
          .split(/\n+/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [];
    const orderText = selectOf(f['词条排序']);
    return {
      keyword: textOf(f['词条生成']),
      c1: tagged(C1_TAG, selectOf(f['词条分类1'])),
      c2: tagged(C2_TAG, selectOf(f['词条分类2'])),
      order: tagged(ORDER_TAG, orderText),
      orderNote: textOf(f['排序说明']),
      prompts,
    };
  });
}

function countBy(arr, keyFn) {
  const m = {};
  for (const x of arr) {
    const k = keyFn(x) || '(empty)';
    m[k] = (m[k] || 0) + 1;
  }
  return m;
}

function detectBrandFields(fieldNames, records) {
  const nameHits = fieldNames.filter((n) => /品牌|brand/i.test(n));
  const dataHits = [];
  for (const r of records) {
    const blob = JSON.stringify(r);
    if (/品牌词|品牌名|Awada|品牌相关/.test(blob)) dataHits.push(r.keyword || r.name);
  }
  // also check keywords containing 品牌
  const keywordBrand = records
    .filter((r) => /品牌/.test(r.keyword || '') || /品牌/.test(r.name || ''))
    .map((r) => r.keyword || r.name);
  return {
    fieldNameHits: nameHits,
    keywordContainsBrand: keywordBrand,
    hasDedicatedBrandField: nameHits.length > 0,
  };
}

async function main() {
  const token = await getTenantToken();
  const result = {
    meta: {
      brand: 'Awada',
      app_token: APP_TOKEN,
      fetchedAt: new Date().toISOString(),
      note: '单套词条（无 ToB/ToC 分表或分列）',
      tobTocSplit: false,
    },
    fieldMaps: {
      exhaustClean: {
        类别: 'type',
        名称: 'name',
        名称解释: 'desc',
        词条生成: 'keyword',
        词条清洗打标: 'flag',
        清洗打标说明: 'flagNote',
      },
      classifyExpand: {
        词条生成: 'keyword',
        词条分类1: 'c1',
        词条分类2: 'c2',
      },
      confirmPrompt: {
        词条生成: 'keyword',
        词条分类1: 'c1',
        词条分类2: 'c2',
        词条排序: 'order',
        排序说明: 'orderNote',
        关联提示词: 'prompts',
      },
    },
  };

  // exhaust
  {
    const t = TABLES.exhaustClean;
    const fields = await listFields(token, t.table_id);
    const raw = await searchAll(token, t.table_id, t.view_id);
    const records = mapExhaust(raw);
    result.exhaustClean = {
      table: t.name,
      table_id: t.table_id,
      view_id: t.view_id,
      total: records.length,
      fieldNames: fields.map((f) => f.field_name),
      fieldDetails: fields.map((f) => ({
        name: f.field_name,
        type: f.type,
        ui_type: f.ui_type,
        options: f.property?.options?.map((o) => o.name) ?? undefined,
      })),
      records,
    };
  }

  // classify
  {
    const t = TABLES.classifyExpand;
    const fields = await listFields(token, t.table_id);
    const raw = await searchAll(token, t.table_id, t.view_id);
    const records = mapClassify(raw);
    result.classifyExpand = {
      table: t.name,
      table_id: t.table_id,
      view_id: t.view_id,
      total: records.length,
      fieldNames: fields.map((f) => f.field_name),
      fieldDetails: fields.map((f) => ({
        name: f.field_name,
        type: f.type,
        ui_type: f.ui_type,
        options: f.property?.options?.map((o) => o.name) ?? undefined,
      })),
      records,
    };
  }

  // confirm
  {
    const t = TABLES.confirmPrompt;
    const fields = await listFields(token, t.table_id);
    const raw = await searchAll(token, t.table_id, t.view_id);
    const records = mapConfirm(raw);
    const finalKeywords = records.map((r) => ({
      keyword: r.keyword,
      c1: r.c1?.text ?? null,
      c2: r.c2?.text ?? null,
      order: r.order?.text ?? null,
      orderNote: r.orderNote || null,
    }));
    result.confirmPrompt = {
      table: t.name,
      table_id: t.table_id,
      view_id: t.view_id,
      total: records.length,
      fieldNames: fields.map((f) => f.field_name),
      fieldDetails: fields.map((f) => ({
        name: f.field_name,
        type: f.type,
        ui_type: f.ui_type,
        options: f.property?.options?.map((o) => o.name) ?? undefined,
      })),
      records,
      finalKeywords,
      categoryStats: {
        c1: countBy(records, (r) => r.c1?.text),
        c2: countBy(records, (r) => r.c2?.text),
        order: countBy(records, (r) => r.order?.text),
        orderNote: countBy(records, (r) => r.orderNote),
      },
    };
  }

  result.brandFieldAnalysis = {
    exhaustClean: detectBrandFields(
      result.exhaustClean.fieldNames,
      result.exhaustClean.records,
    ),
    classifyExpand: detectBrandFields(
      result.classifyExpand.fieldNames,
      result.classifyExpand.records,
    ),
    confirmPrompt: detectBrandFields(
      result.confirmPrompt.fieldNames,
      result.confirmPrompt.records,
    ),
    summary:
      '无独立「品牌词」字段；分类2含「品牌排行榜/品牌推荐」；部分词条文本含「品牌」。无 ToB/ToC 分表分列，单套输出。',
  };

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2), 'utf8');
  console.log(
    JSON.stringify(
      {
        out: OUT,
        totals: {
          exhaustClean: result.exhaustClean.total,
          classifyExpand: result.classifyExpand.total,
          confirmPrompt: result.confirmPrompt.total,
        },
        fields: {
          exhaustClean: result.exhaustClean.fieldNames,
          classifyExpand: result.classifyExpand.fieldNames,
          confirmPrompt: result.confirmPrompt.fieldNames,
        },
        categoryStats: result.confirmPrompt.categoryStats,
        brand: result.brandFieldAnalysis.summary,
        finalKeywordCount: result.confirmPrompt.finalKeywords.length,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
