"""把原图与复刻图都归一化到 1586px 设计宽度，量取确定性几何特征并对照。"""
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


def norm(path, width=DESIGN_W):
    im = Image.open(path).convert("RGB")
    h = round(im.height * width / im.width)
    return np.asarray(im.resize((width, h), Image.LANCZOS), dtype=np.int16)


def near(arr, rgb, tol=9):
    return (np.abs(arr - np.array(rgb)) <= tol).all(axis=-1)


def vlines_at(a, y, rgb=(226, 232, 240), tol=12):
    """在指定行上找出边框色的 x 位置。"""
    row = a[y]
    m = (np.abs(row - np.array(rgb)) <= tol).all(axis=-1)
    xs = np.where(m)[0]
    # 合并相邻
    out = []
    for x in xs:
        if out and x - out[-1][-1] <= 2:
            out[-1].append(x)
        else:
            out.append([x])
    return [int(np.mean(g)) for g in out]


def hlines_at(a, x, rgb=(226, 232, 240), tol=12):
    col = a[:, x]
    m = (np.abs(col - np.array(rgb)) <= tol).all(axis=-1)
    ys = np.where(m)[0]
    out = []
    for y in ys:
        if out and y - out[-1][-1] <= 2:
            out[-1].append(y)
        else:
            out.append([y])
    return [int(np.mean(g)) for g in out]


def soft_pill(a, xmax=300):
    """找侧栏高亮胶囊（slate-100 底）的包围盒。"""
    sub = a[:, :xmax]
    m = near(sub, (241, 245, 249), 5)
    ys = np.where(m.sum(axis=1) > 90)[0]
    if not len(ys):
        return None
    y0, y1 = int(ys[0]), int(ys[-1])
    xs = np.where(m[(y0 + y1) // 2])[0]
    return (int(xs[0]), y0, int(xs[-1]), y1)


def dark_rows(a, x0, x1, y0, y1, thr=430):
    """在给定横向范围内，找出含深色像素的行区间（文字行）。"""
    sub = a[y0:y1, x0:x1].sum(axis=2)
    rows = (sub < thr).sum(axis=1)
    out, run = [], None
    for i, n in enumerate(rows):
        if n > 0 and run is None:
            run = i
        elif n == 0 and run is not None:
            out.append((run + y0, i - 1 + y0))
            run = None
    if run is not None:
        out.append((run + y0, len(rows) - 1 + y0))
    return [r for r in out if r[1] - r[0] >= 3]


def report(name):
    src = PAIRS[name]
    A = norm("public/charts/" + src)
    B = norm("scripts/_shots/" + name + ".png")
    print("=" * 74)
    print(f"{name}   原图 {A.shape[1]}x{A.shape[0]}   复刻 {B.shape[1]}x{B.shape[0]}")

    def two(label, fa, fb=None):
        va = fa(A)
        vb = (fb or fa)(B)
        mark = "" if va == vb else "   <<<"
        print(f"  {label:<22} 原图={va}")
        print(f"  {'':<22} 复刻={vb}{mark}")

    two("侧栏高亮胶囊 bbox", soft_pill)
    two("y=230 竖直边框", lambda a: vlines_at(a, 230))
    two("y=600 竖直边框", lambda a: vlines_at(a, 600))
    two("x=400 水平边框", lambda a: hlines_at(a, 400))
    two("x=700 水平边框", lambda a: hlines_at(a, 700))
    print("  侧栏文字行 原图:", dark_rows(A, 30, 270, 0, min(520, A.shape[0])))
    print("  侧栏文字行 复刻:", dark_rows(B, 30, 270, 0, min(520, B.shape[0])))
    print("  主区文字行 原图:", dark_rows(A, 306, 900, 0, min(400, A.shape[0])))
    print("  主区文字行 复刻:", dark_rows(B, 306, 900, 0, min(400, B.shape[0])))


for n in sys.argv[1:] or ["数据总览"]:
    report(n)
