const fs = require('fs');
const files = ['src/pages/Page_SWOTAnalysis.jsx', 'src/pages/Page_SWOTAnalysisFotile.jsx'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;

    content = content.replace(/text-\[1\.15rem\] lg:text-\[1\.3rem\]/g, 'text-[1.05rem] lg:text-[1.15rem]');
    content = content.replace(/text-\[1\.05rem\] lg:text-\[1\.2rem\]/g, 'text-[0.95rem] lg:text-[1.05rem]');
    content = content.replace(/text-3xl lg:text-\[2rem\]/g, 'text-[1.7rem] lg:text-[1.8rem]');
    content = content.replace(/text-2xl text-white\/90/g, 'text-[1.35rem] text-white/90');
    content = content.replace(/text-2xl text-white\/70/g, 'text-[1.35rem] text-white/70');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes made to ${file}`);
    }
});
console.log('Fonts correctly scaled down to 0.9x');
