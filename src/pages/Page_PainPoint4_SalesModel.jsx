import React from 'react';

const rows = [
    {
        q: '太力科技是什么公司？',
        wrong: '答成北京的太力信息（工业软件）',
        why: '北京有同名主体，榜单挂的仍是旧名',
        harm: '专业客户第一步就查错对象，直接流失',
    },
    {
        q: '太力有多少项专利？',
        wrong: '在 700 到 1200 之间随机取值',
        why: '同一页并存 1200 余项与 900+ 项',
        harm: '数字一被质疑，整套技术叙事跟着掉价',
    },
    {
        q: '太力产品上过几次太空？',
        wrong: '25、28、29、30 都能找到出处',
        why: '官网两页分别写 31 次与 29 次',
        harm: '最硬的一条背书，变成说不清的数字',
    },
    {
        q: '太力做防弹产品吗？',
        wrong: '答「是，已有防弹衣在售」',
        why: '官网称防弹，年报写开发验证阶段',
        harm: '面对军警客户，不实宣称足以推翻信任',
    },
    {
        q: '太力上市了吗？业绩如何？',
        wrong: '答「还在 IPO 排队」或业绩很好',
        why: '过会到上市隔 18 个月，旧稿还在线',
        harm: '投资与合作方拿到过期或片面的结论',
    },
];

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans p-4 lg:p-6 xl:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">
                <div className="mb-4 lg:mb-5 shrink-0">
                    <div className="inline-block border border-white/20 bg-white/5 rounded-full px-5 py-2 mb-3 lg:mb-4">
                        <span className="text-zinc-200 text-lg tracking-widest font-bold mr-2">困境</span>
                        <span className="text-[#004CE5] font-black text-xl lg:text-2xl">02</span>
                    </div>
                    <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest mb-3 lg:mb-4 leading-tight">
                        名称歧义与口径混乱：AI 抓到哪条，就把哪条当事实
                    </h1>
                    <p className="text-zinc-400 text-[20px] lg:text-[21px] leading-relaxed max-w-[1400px] tracking-wide text-justify [text-justify:inter-ideograph]">
                        太力的问题不是曝光少，而是同一个事实有太多版本，且矛盾就出现在官方自己的页面上。官网首页写「1200 余项授权专利」，同一页又写「900+ 项」，年报审计口径是 985 项；上太空次数在官网两页分别是 31 次和 29 次。AI 无法从自相矛盾的信源里提取事实，只会退回最一致的那一簇语料。
                    </p>
                </div>

                <div className="flex-1 flex flex-col min-h-0 pb-3">
                    <div className="w-full h-full overflow-hidden border border-white/10 rounded-2xl bg-[#0a0a0a] shadow-2xl flex flex-col">
                        <table className="w-full h-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-[18px] lg:text-[20px] font-bold text-zinc-200 tracking-wider">
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[22%]">客户典型提问</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[26%]">AI 易给出的错误结论</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[26%]">混乱从哪来</th>
                                    <th className="py-4 px-5 lg:px-6 xl:px-7 w-[26%]">对太力的直接伤害</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[18px] lg:text-[20px]">
                                {rows.map((row) => (
                                    <tr key={row.q} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3 px-5 lg:px-6 xl:px-7 font-bold text-white leading-snug">{row.q}</td>
                                        <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">{row.wrong}</td>
                                        <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">{row.why}</td>
                                        <td className="py-3 px-5 lg:px-6 xl:px-7 text-zinc-300 leading-relaxed">{row.harm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-3 lg:mt-4 shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-[16px] lg:text-[18px] font-black tracking-widest shrink-0 uppercase shadow-[0_0_8px_rgba(0,76,229,0.2)]">
                        解法
                    </div>
                    <p className="text-zinc-200 text-[20px] lg:text-[21px] font-bold leading-relaxed text-justify [text-justify:inter-ideograph] flex-1">
                        先立一套唯一且可溯源的官方口径：专利数、航天次数、检测认证、在售与在研分开写清，双域名和英文站同步更新，并把「太力科技」与北京同名主体做成两个明确实体。让 AI 抓到任何一页，得到的都是同一个答案。
                    </p>
                </div>
            </div>
        </div>
    );
}
