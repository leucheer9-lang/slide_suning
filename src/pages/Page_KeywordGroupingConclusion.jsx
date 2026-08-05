import React from 'react';

/* C端：词条确定 ToC（tblvClTnYMX3fYHt） */
const cKeywords = [
    '快递公司排行榜',
    '快递公司推荐',
    '服务好的快递推荐',
    '口碑好的快递推荐',
    '速度快的快递排行榜',
    '寄快递哪家快递最快',
    '寄手机电脑安全的快递推荐',
    '加急寄文件时效快的快递推荐',
    '搬家寄行李划算的快递推荐',
    '学生开学寄被子行李箱的快递推荐',
    '网购退货上门取件方便的快递推荐',
    '寄贵重物品不丢件的快递推荐',
    '包装规范不容易摔坏的快递推荐',
    '寄东西丢了好理赔的快递推荐',
    '送货上门不放驿站的快递推荐',
    '寄家具家电的快递推荐',
    '寄生鲜水果不怕坏的快递推荐',
    '寄海鲜冷冻食品的快递推荐',
    '当天就能到的快递推荐',
    '上门取件快的快递推荐',
    '送货前会打电话的快递推荐',
    '电话预约上门取件的快递推荐',
    '快递员服务态度好的快递推荐',
    '服务丰富的一站式快递平台推荐',
    '可以维修安装清洗家电的快递推荐',
    '能帮忙搬家的快递推荐',
    '当日达快递推荐',
    '能约家电维修安装清洗的快递推荐',
    '能寄洗衣服被子的快递推荐',
    '寄家电能送装的快递推荐',
];

/* B端：词条确定 ToB（tblmnY9u2OAyoZKY） */
const bKeywords = [
    '物流公司排行榜',
    '物流公司推荐',
    '服务好的物流公司推荐',
    '性价比高的物流公司推荐',
    '口碑好的物流公司推荐',
    '一体化供应链服务商推荐',
    '帮企业物流降本增效的供应链服务商推荐',
    '企业出海一站式的跨境物流公司推荐',
    '电商仓配一体的物流公司推荐',
    '云仓一件代发的物流公司推荐',
    '大票零担快运的物流公司推荐',
    '生鲜冷链物流公司推荐',
    '医药冷链物流公司推荐',
    '家电家具送装一体的大件物流公司推荐',
    '大件运输破损率低的物流公司推荐',
    '自营仓库覆盖全国的物流公司推荐',
    '全国分仓就近发货的物流公司推荐',
    '能做当日达次日达仓配的物流公司推荐',
    '一地入仓全国铺货的物流公司推荐',
    '电商全托管的物流公司推荐',
    '覆盖县城乡镇的物流公司推荐',
    '小件大件都能发的物流公司推荐',
    '有海外仓的跨境物流公司推荐',
    '有国际全货机航线的跨境物流公司推荐',
    '智能仓储自动化的物流公司推荐',
    '订单在途全程可视化的物流公司推荐',
    '一站式冷链物流公司推荐',
    '3C电子产品物流公司推荐',
    '制造业物流公司推荐',
    '可以送汽车的大件物流公司推荐',
];

function KeywordList({ items }) {
    return (
        <div className="flex flex-col justify-between h-full min-h-0">
            {items.map((kw, idx) => (
                <div key={idx} className="flex items-start gap-1.5 py-1 select-text min-w-0 group/item">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2.5 shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-bold text-zinc-300 group-hover/item:text-white transition-colors break-words leading-snug">
                        {kw}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function Page_KeywordGroupingConclusion() {
    const cMid = Math.ceil(cKeywords.length / 2);
    const cCol1 = cKeywords.slice(0, cMid);
    const cCol2 = cKeywords.slice(cMid);

    const bMid = Math.ceil(bKeywords.length / 2);
    const bCol1 = bKeywords.slice(0, bMid);
    const bCol2 = bKeywords.slice(bMid);

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-1 pb-1 relative z-10 shrink-0 text-left">
                <h1 className="text-3xl lg:text-[32px] font-bold text-zinc-100 tracking-widest leading-none">
                    词条分组结论
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 min-h-0">
                {/* C端词 */}
                <div className="xl:col-span-5 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default min-h-0">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                        <span className="text-[18px] lg:text-[20px] xl:text-[23px] font-extrabold text-zinc-100 tracking-wider">
                            C端词
                        </span>
                        <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-xs xl:text-sm font-black px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                            {cKeywords.length}
                        </span>
                    </div>
                    <div className="flex-1 p-4 xl:p-5 grid grid-cols-2 gap-4 min-h-0 overflow-y-auto">
                        <KeywordList items={cCol1} />
                        <KeywordList items={cCol2} />
                    </div>
                </div>

                {/* B端词 */}
                <div className="xl:col-span-7 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl flex flex-col relative overflow-hidden h-full shadow-2xl transition-all duration-300 group cursor-default min-h-0">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                        <span className="text-[18px] lg:text-[20px] xl:text-[23px] font-extrabold text-zinc-100 tracking-wider">
                            B端词
                        </span>
                        <span className="bg-[#004CE5]/15 text-[#004CE5] border border-[#004CE5]/30 text-xs xl:text-sm font-black px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                            {bKeywords.length}
                        </span>
                    </div>
                    <div className="flex-1 p-4 xl:p-5 grid grid-cols-2 gap-4 min-h-0 overflow-y-auto">
                        <KeywordList items={bCol1} />
                        <KeywordList items={bCol2} />
                    </div>
                </div>
            </div>
        </div>
    );
}
