"""同一区域从原图与复刻图各裁一块，上下拼接放大，直观核对字号与间距。"""
import os
import sys
from PIL import Image, ImageDraw

DESIGN_W = 1586
PAIRS = {
    "数据总览": "geo-dashboard-1.png",
    "词条表现": "geo-dashboard-entries-1.png",
    "竞品对比": "geo-dashboard-competitors-1.png",
    "引用源分析": "geo-dashboard-sources-1.png",
    "正负面基本情况": "geo-dashboard-sentiment-pre.png",
    "品牌正负面": "geo-dashboard-sentiment-1.png",
}
OUT = "scripts/_cmp/"
os.makedirs(OUT, exist_ok=True)


def norm(path):
    im = Image.open(path).convert("RGB")
    return im.resize((DESIGN_W, round(im.height * DESIGN_W / im.width)), Image.LANCZOS)


def sbs(name, key, box, zoom=3):
    A = norm("public/charts/" + PAIRS[name])
    B = norm("scripts/_shots/" + name + ".png")
    x0, y0, x1, y1 = box
    a = A.crop((x0, y0, x1, y1))
    b = B.crop((x0, y0, x1, y1))
    w, h = a.size
    z = min(zoom, 1400 / max(w, 1))
    a = a.resize((int(w * z), int(h * z)), Image.LANCZOS)
    b = b.resize((int(w * z), int(h * z)), Image.LANCZOS)
    canvas = Image.new("RGB", (a.width, a.height * 2 + 26), (255, 255, 255))
    canvas.paste(a, (0, 0))
    canvas.paste(b, (0, a.height + 26))
    d = ImageDraw.Draw(canvas)
    d.rectangle([0, a.height + 8, canvas.width, a.height + 10], fill=(255, 0, 0))
    d.text((4, a.height + 12), "上=原图  下=复刻", fill=(200, 0, 0))
    p = f"{OUT}{name}_{key}.png"
    canvas.save(p)
    print("已保存", p, canvas.size)


BOXES = {
    "title": (295, 10, 700, 130),
    "kpi": (295, 150, 940, 300),
    "sect": (295, 300, 800, 400),
    "linecard": (300, 395, 935, 890),
    "barcard": (938, 395, 1575, 890),
    "sidebar": (0, 0, 290, 200),
}

name = sys.argv[1] if len(sys.argv) > 1 else "数据总览"
keys = sys.argv[2:] or list(BOXES)
for k in keys:
    sbs(name, k, BOXES[k])
