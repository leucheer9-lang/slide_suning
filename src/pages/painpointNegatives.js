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

function mapItem(item) {
    const meta = TYPE_META[item.negative_type] || TYPE_META.negative_answer;
    return {
        term: item.entry_name,
        typeKey: item.negative_type,
        type: item.negative_type_label || meta.type,
        color: meta.color,
        cardTitle: meta.cardTitle,
        summary: item.summary,
        screenshot: item.screenshot_url,
    };
}

/** ToC + ToB 负向样例合并 */
export const NEGATIVE_CASES = [
    ...(geoSentiment['419']?.negatives?.list || []),
    ...(geoSentiment['420']?.negatives?.list || []),
].map(mapItem);

/** 优先各类型取 1 条，凑满 n 条；类型不够不强求 */
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
    for (const list of buckets.values()) {
        while (list.length && picked.length < n) picked.push(list.shift());
    }
    return picked;
}
