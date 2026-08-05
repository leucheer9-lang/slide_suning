"""把复刻截图与原始截图归一化到同宽后上下堆叠，并输出差异热力图。"""
import os
import sys
from PIL import Image, ImageChops

PAIRS = {
    "数据总览": "geo-dashboard-1.png",
    "词条表现": "geo-dashboard-entries-1.png",
    "竞品对比": "geo-dashboard-competitors-1.png",
    "引用源分析": "geo-dashboard-sources-1.png",
    "正负面基本情况": "geo-dashboard-sentiment-pre.png",
    "品牌正负面": "geo-dashboard-sentiment-1.png",
}

SHOTS = "scripts/_shots/"
ORIG = "public/charts/"
OUT = "scripts/_cmp/"
os.makedirs(OUT, exist_ok=True)

W = 1400

names = sys.argv[1:] or list(PAIRS)

for name in names:
    src = PAIRS.get(name)
    shot_p = SHOTS + name + ".png"
    if not src or not os.path.exists(shot_p):
        print("跳过", name)
        continue

    a = Image.open(ORIG + src).convert("RGB")
    b = Image.open(shot_p).convert("RGB")

    ah = round(a.height * W / a.width)
    bh = round(b.height * W / b.width)
    a = a.resize((W, ah), Image.LANCZOS)
    b = b.resize((W, bh), Image.LANCZOS)

    print(f"{name}: 原图 {a.size} 复刻 {b.size}  高度差 {bh - ah}px")

    gap = 16
    canvas = Image.new("RGB", (W, ah + bh + gap), (255, 0, 0))
    canvas.paste(a, (0, 0))
    canvas.paste(b, (0, ah + gap))
    canvas.save(OUT + name + "_stack.png")

    # 差异图：按较小高度对齐后取绝对差
    h = min(ah, bh)
    diff = ImageChops.difference(a.crop((0, 0, W, h)), b.crop((0, 0, W, h)))
    diff = diff.point(lambda v: min(255, v * 4))
    diff.save(OUT + name + "_diff.png")
