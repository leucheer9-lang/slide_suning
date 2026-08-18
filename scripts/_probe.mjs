import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PAGES = path.join(ROOT, 'src', 'pages');
const PUBLIC = path.join(ROOT, 'public');

const COMPANY = [
  'Page_CompanyIntro', 'Page_ServiceClients', 'Page_CaseStudy_Double_Combined',
  'Page_CaseStudy_Double_Combined_2', 'Page_CaseStudy_Double_Combined_3',
  'Page_TeamEndorsement', 'Page_CompanyArchitecture', 'Page_TeamIntro',
  'Page_ServiceIntro', 'Page_Pricing', 'Page_CoreCapabilities',
  'Page_GeoMonitorIntro', 'Page_GeoMonitorModules', 'Page_GeoOneDemo',
  'Page_GeoMonitor', 'Page_GeoMonitorDemo', 'Page_ContentAgentIntro',
  'Page_ContentAgentSteps', 'Page_ContentAgentModules', 'Page_ContentAgentDemo',
  'Page_ContentAgentArticleDemo', 'Page_UserCommentAnalysis', 'Page_UserCommentWhy',
  'Page_UserCommentProblem', 'Page_UserCommentHow', 'Page_UserCommentArchitecture',
  'Page_UserCommentDemo', 'Page_SkyworthResearchConclusions', 'Page_QuantitativeModel',
  'Page_QuantitativeModel_WhatCanDo', 'Page_QuantitativeModel_Why',
  'Page_QuantitativeModelArchitecture', 'Page_QuantitativeModel_Pic1',
  'Page_QuantitativeModel_Pic2', 'Page_QuantitativeModel_Pic3', 'Page_QuantitativeModel_Pic4',
  'Page_QuantitativeModel_Pic5', 'Page_QuantitativeModel_Pic6', 'Page_QuantitativeModel_Pic7',
  'Page_ServiceStandard',
];

const ASSET_RE = /['"`](\/[A-Za-z0-9_\-./%\u4e00-\u9fa5]+\.(?:png|jpg|jpeg|svg|webp|gif|mp4|webm|ttf|otf|woff2?))['"`]/g;
const TEMPLATE_RE = /`(\/[^`]*\$\{[^`]*)`/g;

const missing = [];
const dynamic = [];
let checked = 0;

for (const name of COMPANY) {
  const file = path.join(PAGES, `${name}.jsx`);
  if (!fs.existsSync(file)) { missing.push(`[页面缺失] ${name}.jsx`); continue; }
  const src = fs.readFileSync(file, 'utf8');
  for (const m of src.matchAll(ASSET_RE)) {
    const p = decodeURIComponent(m[1]);
    checked++;
    if (!fs.existsSync(path.join(PUBLIC, p))) missing.push(`${name}: ${p}`);
  }
  for (const m of src.matchAll(TEMPLATE_RE)) dynamic.push(`${name}: ${m[1]}\``);
}

console.log(`静态资源引用检查：共 ${checked} 处`);
console.log(missing.length ? `\n缺失 ${missing.length} 个：\n` + missing.join('\n') : '\n全部存在 ✓');
if (dynamic.length) console.log('\n动态拼接路径（需人工确认）：\n' + [...new Set(dynamic)].join('\n'));
