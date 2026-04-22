import React from 'react';

export default function Page_QA_Comp_2_4() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-4 text-[1.1rem] leading-relaxed">（4）存储加密与隔离</p>
                <ul className="mb-8 text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>环境物理隔离：通过切换 测试库/预发库/生产库 实例，杜绝污染。</li>
                    <li>多租户隔离：所有业务表均以 project_id 为隔离键，应用层强制注入查询条件，严禁跨户越权。</li>
                    <li>凭据/密钥不入代码库：敏感配置全部纳入 .gitignore，不支持代码库流出；部署环境通过 Vault 脱模下发。</li>
                    <li>磁盘与备份加密：数据库主机磁盘云盘加密；备份文件 AES-256 加密落盘存储于独立 Bucket。</li>
                </ul>

                <p className="mb-4 text-[1.1rem] leading-relaxed">（5）访问控制与最小权限</p>
                <ul className="mb-8 text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>数据库账号最小化：业务账号仅授予 DML，禁用 DROP等高危操作。</li>
                    <li>服务器访问：公网零暴露，仅开放 SSH 密钥登录内网跳转。</li>
                    <li>客户数据访问：遵循"知必所需"，任何原始数据导出走全套工单与双人复核。</li>
                </ul>

                <p className="mb-4 text-[1.1rem] leading-relaxed">（6）数据防泄露（DLP）与防篡改</p>
                <ul className="text-[1.1rem] leading-relaxed list-disc pl-6 space-y-2 text-zinc-400">
                    <li>任务全留痕：每一次流转全写入日志，可追溯可回溯，杜绝黑箱操作。</li>
                    <li>状态机与乐观锁：核心表防重复入库与并发污写。</li>
                    <li>异常实时告警：一切高压预兆即刻通过邮件向总负责人分发。</li>
                </ul>
            </div>
        </div>
    );
}
