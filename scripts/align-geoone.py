"""逐区域求出复刻图相对原图的最佳平移量，给出需要调整的 CSS 像素数。"""
import sys
import numpy as np
from PIL import Image

PAIRS = {
    "数据总览": "geo-dashboard-1.png",
    "词条表现": "geo-dashboard-entries-1.png",
    "竞品对比": "geo-dashboard-competitors-1.png",
    "引用源分析": "geo-dashboard-sources-1.png",
    "正负面基本情况": "geo-dashboard-sentiment-pre.png",
    "品牌正负面": "geo-dashboard-sentiment-1.png",
}

# 每页要考察的区域（CSS 坐标，x0,y0,x1,y1）
REGIONS = {
    "数据总览": {
        "页面标题 总览": (300, 18, 420, 52),
        "筛选条 日期": (300, 78, 420, 120),
        "筛选条 平台": (600, 78, 760, 120),
        "筛选条 目标产品": (1080, 78, 1400, 120),
        "KPI1 标签": (315, 180, 480, 212),
        "KPI1 数值": (315, 230, 500, 275),
        "区块标题 提及率": (300, 300, 440, 340),
        "查看明细": (440, 300, 570, 345),
        "左卡副标题": (300, 364, 520, 396),
        "折线 y轴刻度": (330, 430, 420, 640),
        "折线 x轴日期": (560, 690, 700, 720),
        "图例 桃李面包": (330, 725, 560, 760),
        "柱状 y轴刻度": (960, 430, 1050, 640),
        "柱状 柱体": (1060, 430, 1500, 660),
        "柱状 平台名": (1060, 680, 1520, 730),
        "侧栏 GEO ONE": (10, 10, 200, 55),
        "侧栏 总览项": (10, 165, 270, 212),
        "侧栏 正负面项": (10, 330, 270, 372),
    },
}

DPR_ORIG = 2.0


def to_gray(im):
    return np.asarray(im.convert("L"), dtype=np.float32)


def best_shift(a, b, rng=14):
    """在 ±rng 内搜索使 b 对齐 a 的平移量，返回 (dx, dy)。"""
    best, bxy = None, (0, 0)
    h, w = a.shape
    for dy in range(-rng, rng + 1):
        for dx in range(-rng, rng + 1):
            ax0, ax1 = max(0, dx), min(w, w + dx)
            bx0, bx1 = max(0, -dx), min(w, w - dx)
            ay0, ay1 = max(0, dy), min(h, h + dy)
            by0, by1 = max(0, -dy), min(h, h - dy)
            if ax1 - ax0 < 8 or ay1 - ay0 < 8:
                continue
            d = np.abs(a[ay0:ay1, ax0:ax1] - b[by0:by1, bx0:bx1]).mean()
            if best is None or d < best:
                best, bxy = d, (dx, dy)
    return bxy, best


for name in sys.argv[1:] or list(REGIONS):
    src = PAIRS[name]
    orig = Image.open("public/charts/" + src).convert("RGB")
    shot = Image.open("scripts/_shots/" + name + ".png").convert("RGB")

    # 两图都缩放到同一 CSS 尺度
    css_w = orig.width / DPR_ORIG
    scale = 2.0  # 统一放大到 2 倍 CSS 便于亚像素观察
    tw = int(css_w * scale)
    orig = orig.resize((tw, int(orig.height / DPR_ORIG * scale)), Image.LANCZOS)
    shot = shot.resize((tw, int(shot.height / shot.width * tw)), Image.LANCZOS)

    A, B = to_gray(orig), to_gray(shot)
    print("=" * 72)
    print(f"{name}   （数值单位：CSS px，正数表示复刻件需要往该方向移动才能对齐）")

    for label, (x0, y0, x1, y1) in REGIONS[name].items():
        sx0, sy0, sx1, sy1 = [int(v * scale) for v in (x0, y0, x1, y1)]
        sy1 = min(sy1, A.shape[0], B.shape[0])
        sx1 = min(sx1, A.shape[1], B.shape[1])
        if sy1 - sy0 < 8 or sx1 - sx0 < 8:
            continue
        a = A[sy0:sy1, sx0:sx1]
        b = B[sy0:sy1, sx0:sx1]
        (dx, dy), err = best_shift(a, b)
        flag = "" if abs(dx) <= 1 and abs(dy) <= 1 else "   <<<"
        print(f"  {label:<16} dx={dx / scale:+5.1f}  dy={dy / scale:+5.1f}   残差={err:5.1f}{flag}")
