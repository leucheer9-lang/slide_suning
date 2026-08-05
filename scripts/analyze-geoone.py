"""量取 GEO ONE 截图的尺寸、边界与主要配色，用于代码复刻。"""
import sys
from collections import Counter
from PIL import Image

FILES = [
    "geo-dashboard-1.png",
    "geo-dashboard-entries-1.png",
    "geo-dashboard-competitors-1.png",
    "geo-dashboard-sources-1.png",
    "geo-dashboard-sentiment-pre.png",
    "geo-dashboard-sentiment-1.png",
]

BASE = "public/charts/"


def hexc(p):
    return "#%02x%02x%02x" % p[:3]


def col_profile(im):
    """逐列统计非背景像素数，用于找竖直分界（侧边栏宽度等）。"""
    w, h = im.size
    px = im.load()
    bg = px[w - 3, h - 3][:3]
    prof = []
    for x in range(w):
        n = 0
        for y in range(0, h, 4):
            if px[x, y][:3] != bg:
                n += 1
        prof.append(n)
    return prof, bg


def row_profile(im):
    w, h = im.size
    px = im.load()
    bg = px[w - 3, h - 3][:3]
    prof = []
    for y in range(h):
        n = 0
        for x in range(0, w, 4):
            if px[x, y][:3] != bg:
                n += 1
        prof.append(n)
    return prof


for f in FILES:
    im = Image.open(BASE + f).convert("RGB")
    w, h = im.size
    px = im.load()
    print("=" * 70)
    print(f, w, "x", h, " ratio=%.4f" % (w / h))

    # 四角与几个取样点的颜色
    pts = {
        "TL": (2, 2), "TR": (w - 3, 2), "BL": (2, h - 3), "BR": (w - 3, h - 3),
        "mid": (w // 2, h // 2),
    }
    print("  corners:", {k: hexc(px[v]) for k, v in pts.items()})

    # 主色分布
    cnt = Counter()
    for y in range(0, h, 3):
        for x in range(0, w, 3):
            cnt[px[x, y]] += 1
    print("  top colors:", [(hexc(c), n) for c, n in cnt.most_common(8)])

    # 竖直分界（侧边栏）
    prof, bg = col_profile(im)
    edges = [x for x in range(1, w) if (prof[x] > 6) != (prof[x - 1] > 6)]
    print("  bg:", hexc(bg), " vertical edges (first 20):", edges[:20])

    rprof = row_profile(im)
    redges = [y for y in range(1, h) if (rprof[y] > 6) != (rprof[y - 1] > 6)]
    print("  horizontal edges (first 20):", redges[:20])
