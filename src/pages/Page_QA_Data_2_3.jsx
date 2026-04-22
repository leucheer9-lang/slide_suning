import React from 'react';

export default function Page_QA_Data_2_3() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-4 text-[1.1rem] leading-relaxed">（3）任务审计日志</p>
                <p className="mb-2 text-[1.1rem] leading-relaxed text-zinc-400">所有数据操作均全程留痕、可追溯：</p>
                <ul className="mb-8 text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>任务执行人 / 起止时间 / 输入参数 / 影响范围</li>
                    <li>异常告警记录 / 重试记录</li>
                    <li>数据修订记录（任何对历史数据的修改都有审计痕迹，修改人、修改时间、修改前后值清晰可查）</li>
                </ul>

                <p className="mb-4 text-[1.1rem] leading-relaxed">（4）核心承诺：杜绝数据黑箱</p>
                <ul className="text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>指标可下钻：看板上的每一个数字（如提及率 35%），都可点击下钻到具体的提问、答案、截图证据；</li>
                    <li>数据可自助查询：客户可申请只读账号，自助查询任意时段、任意词条、任意平台的原始数据；</li>
                    <li>接受第三方审计：接受甲方指定的第三方审计机构对数据真实性进行抽样核查；</li>
                    <li>复测机制兜底：交付前自动生成「复测用例集」，对识别结果做二次确认（支持「全量重检」「未提及重检」等模式），确保交付数据准确率。</li>
                </ul>
            </div>
        </div>
    );
}
