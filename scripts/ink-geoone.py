"""量取指定小区域内“墨迹”的包围盒，对照原图与复刻图的字号与位置。"""
import sys
import numpy as np
from PIL import Image

DESIGN_W = 1586
PAIRS = {
    "数据总览": "geo-dashboard-1.png",
    "词条表现": "geo-dashboard-entries-1.png",
    "竞品对比": "geo-dashboard-competitors-1.png",
    "引用源分析": "geo-dashboard-sources-1.png",
    "正负面基本情况": "geo-dashboard-sentiment-pre.png",
    "品牌正负面": "geo-dashboard-sentiment-1.png",
}


def norm(p):
    im = Image.open(p).convert("RGB")
    return np.asarray(
        im.resize((DESIGN_W, round(im.height * DESIGN_W / im.width)), Image.LANCZOS),
        dtype=np.int16,
    )


def ink(a, box, thr=530):
    x0, y0, x1, y1 = box
    sub = a[y0:y1, x0:x1].sum(axis=2)
    m = sub < thr
    if not m.any():
        return None
    ys, xs = np.where(m)
    return (int(xs.min()) + x0, int(ys.min()) + y0, int(xs.max()) + x0, int(ys.max()) + y0)


REGIONS = {
    "数据总览": {
        "页面标题":       (300, 20, 420, 75),
        "chip1 整体":     (300, 78, 500, 120),
        "KPI1 标签":      (312, 175, 420, 215),
        "KPI1 数值":      (312, 225, 480, 285),
        "区块标题":       (300, 300, 400, 355),
        "查看明细文字":    (420, 300, 580, 355),
        "左卡副标题":     (300, 362, 500, 398),
        "卡内小标题":     (320, 415, 520, 452),
        "卡内大数值":     (320, 452, 520, 512),
        "折线末个刻度":    (330, 615, 420, 665),
        "折线日期":       (540, 690, 720, 745),
        "图例文字":       (350, 750, 500, 800),
        "柱状末刻度":     (960, 615, 1060, 665),
        "柱状平台名":     (1060, 700, 1260, 745),
        "侧栏 GEO ONE":  (55, 12, 220, 58),
        "侧栏品牌名":     (60, 60, 285, 92),
        "侧栏品牌副名":    (60, 92, 285, 115),
        "侧栏 数据监控":   (20, 138, 120, 168),
        "侧栏 总览":      (50, 172, 160, 205),
    },
}


def run(name):
    A = norm("public/charts/" + PAIRS[name])
    B = norm("scripts/_shots/" + name + ".png")
    print("=" * 84)
    print(f"{name}    格式: (x0, y0, x1, y1)  宽x高")
    for label, box in REGIONS[name].items():
        ia, ib = ink(A, box), ink(B, box)
        def fmt(t):
            if not t:
                return "无"
            return f"({t[0]},{t[1]},{t[2]},{t[3]}) {t[2]-t[0]+1}x{t[3]-t[1]+1}"
        note = ""
        if ia and ib:
            dh = (ib[3] - ib[1]) - (ia[3] - ia[1])
            dy = ib[1] - ia[1]
            dx = ib[0] - ia[0]
            note = f"   Δx={dx:+d} Δy={dy:+d} Δ高={dh:+d}"
        print(f"  {label:<14} 原={fmt(ia):<26} 复={fmt(ib):<26}{note}")


for n in sys.argv[1:] or ["数据总览"]:
    run(n)
