import geoSentiment from '../data/geoSentiment.json';

const TYPE_META = {
    price_error: {
        type: '价格错误',
        color: 'blue',
        cardTitle: '产品价格错误',
    },
    product_info_error: {
        type: '信息错误',
        color: 'orange',
        cardTitle: '产品信息错误',
    },
    negative_answer: {
        type: '负面回答',
        color: 'red',
        cardTitle: '品牌负面信息',
    },
};

/** 摘要里以「原…」开头的括注是数据核对备注（如出处更换记录），不对外展示 */
const REVIEW_NOTE = /（原[^）]*）/g;

/** AI 之所以这么答，是引用了哪条源里的什么内容——逐条打开 citations 原链接核对后写定 */
const WHY_BY_CONVERSATION = {
    369505: 'AI 引的就是那条写着「13 号线上盖」的招租页，却只摘了园区内部配套，把地铁写成短板',
    369497: 'AI 引的是质量万里行上的一条公寓投诉，把居住侧的施工噪音与押金纠纷当成园区物业水平',
    369496: 'AI 引的是 zlwlx 转载的同一条公寓投诉帖，结论写成「客诉处理有负面记录」',
    369487: 'AI 引的是招租页，但采信了页面里较早的表述，说应人石站仍在建',
    369472: 'AI 引的是那条公寓投诉，把个案写成「居住和消费体验负面反馈不少」',
    369471: 'AI 引的是招租页，却得出「园区无地铁直达」，与标题里的 13 号线上盖矛盾',
    369470: 'AI 引的是招租页，把 13 号线写成在建，归纳出「位置偏、交通还在完善中」',
    369714: 'AI 引的是公寓投诉帖，把报备保护这类招商问题答成了物业客诉',
    369707: 'AI 引的是招租页，仍按应人石站在建的口径判断，削弱了合作对比里的交通分',
    369706: 'AI 引的是招租页，同样采信了过期的地铁进度，带客对比里交通被记为劣势',
    369703: 'AI 引的是招租页，却直接写「园区没有地铁」，把带客接待优势判给甲岸美生智谷',
    369701: 'AI 引的是招租页，开篇即写「石岩街道，无地铁直达」，合作对比先失一分',
    369700: 'AI 引的是招租页，以周边无地铁站为由，给出「不建议中介主推」的倾向',
};

function mapItem(item) {
    const meta = TYPE_META[item.negative_type] || TYPE_META.negative_answer;
    return {
        term: item.entry_name,
        typeKey: item.negative_type,
        type: item.negative_type_label || meta.type,
        color: meta.color,
        cardTitle: meta.cardTitle,
        summary: (item.summary || '').replace(REVIEW_NOTE, '').trim(),
        screenshot: item.screenshot_url,
        why: WHY_BY_CONVERSATION[item.conversation_id] || '',
    };
}

/** C 端 + B 端监测词负向样例合并（483 的 7 条 + 484 的 6 条） */
export const NEGATIVE_CASES = [
    ...(geoSentiment['483']?.negatives?.list || []),
    ...(geoSentiment['484']?.negatives?.list || []),
].map(mapItem);

/**
 * 优先各类型取 1 条，凑满 n 条；类型不够时从剩余最多的类型补位，
 * 并跳过已出现过的词条，避免三张卡讲同一个词条。
 */
export function pickDiverseCases(items = NEGATIVE_CASES, n = 3) {
    const buckets = new Map();
    for (const it of items) {
        const k = it.typeKey;
        if (!buckets.has(k)) buckets.set(k, []);
        buckets.get(k).push(it);
    }
    const picked = [];
    for (const list of buckets.values()) {
        if (picked.length >= n) break;
        if (list.length) picked.push(list.shift());
    }

    const rest = [...buckets.values()].sort((a, b) => b.length - a.length).flat();
    const usedTerms = new Set(picked.map((it) => it.term));
    for (const it of rest) {
        if (picked.length >= n) break;
        if (usedTerms.has(it.term)) continue;
        picked.push(it);
        usedTerms.add(it.term);
    }
    for (const it of rest) {
        if (picked.length >= n) break;
        if (!picked.includes(it)) picked.push(it);
    }
    return picked;
}
