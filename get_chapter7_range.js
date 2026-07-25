import fs from 'fs';

const content = fs.readFileSync('src/config/slideConfig.js', 'utf8');

let count = 0;
let chapter7Start = -1;
let chapter7End = -1;
let inChapter7 = false;

const lines = content.split('\n');
for (let line of lines) {
    let addCount = 0;
    if (line.match(/{\s*type:\s*'chapter'/)) {
        addCount = 1;
        // Since it's Chapter 7
        if (line.includes('篇章7') || line.includes('知乎方案新增')) {
            inChapter7 = true;
            chapter7Start = count + 1; 
        } else if (inChapter7) {
            inChapter7 = false;
            chapter7End = count; 
        }
    }
    else if (line.match(/{\s*type:\s*'section'/)) {
        addCount = 1;
    }
    else if (line.match(/{\s*type:\s*'page'/)) {
        const compMatch = line.match(/components:\s*\[([^\]]+)\]/);
        if (compMatch) {
            const comps = compMatch[1].split(',').map(c => c.trim()).filter(c => c.length > 0);
            addCount = comps.length;
        } else {
            addCount = 1;
        }
    }
    count += addCount;
}

if (inChapter7) {
    chapter7End = count;
}

console.log(`Chapter 7 range: ${chapter7Start}-${chapter7End}`);
