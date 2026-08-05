"""精确定位 GEO ONE 侧边栏：高亮项胶囊、图标列、文字列、分组标题的 CSS 坐标。"""
from PIL import Image

im = Image.open("public/charts/geo-dashboard-1.png").convert("RGB")
W, H = im.size
px = im.load()
DPR = 2.0


def hexc(p):
    return "#%02x%02x%02x" % p[:3]


def is_soft(c):
    """侧边栏高亮胶囊底色 slate-100 附近。"""
    return abs(c[0] - 241) <= 4 and abs(c[1] - 245) <= 4 and abs(c[2] - 249) <= 4


# 1) 逐行找出高亮胶囊所在的 y 区间与 x 区间
runs = []
for oy in range(0, H):
    xs = [ox for ox in range(0, 600) if is_soft(px[ox, oy])]
    if len(xs) > 80:
        runs.append((oy, min(xs), max(xs)))
if runs:
    print("高亮胶囊 orig y %d..%d  x %d..%d" % (runs[0][0], runs[-1][0], runs[0][1], runs[0][2]))
    print("  -> css y %.1f..%.1f  x %.1f..%.1f  (w=%.1f h=%.1f)" % (
        runs[0][0] / DPR, runs[-1][0] / DPR, runs[0][1] / DPR, runs[0][2] / DPR,
        (runs[0][2] - runs[0][1] + 1) / DPR, (runs[-1][0] - runs[0][0] + 1) / DPR))

# 2) 侧边栏与主区之间的分隔线
for ox in range(500, 640):
    col = [px[ox, oy] for oy in range(200, H - 200, 37)]
    if all(abs(c[0] - 245) <= 6 and abs(c[1] - 245) <= 6 and abs(c[2] - 245) <= 6 for c in col):
        print("侧边栏分隔线 orig x=%d -> css %.1f  color=%s" % (ox, ox / DPR, hexc(px[ox, 400])))
        break

# 3) 深色 logo 方块与品牌头像方块的包围盒
def darkbox(y0, y1, x0=0, x1=600, thr=90):
    xs, ys = [], []
    for oy in range(y0, y1):
        for ox in range(x0, x1):
            c = px[ox, oy]
            if c[0] < thr and c[1] < thr and c[2] < thr + 40:
                xs.append(ox); ys.append(oy)
    if not xs:
        return None
    return (min(xs) / DPR, min(ys) / DPR, max(xs) / DPR, max(ys) / DPR)

print("logo 方块 css bbox:", darkbox(20, 100))
print("品牌头像 css bbox:", darkbox(105, 190))

# 4) 各导航项文字的 y 中心：统计每行深色像素数
print("导航区各行深色像素分布（css y : 计数）：")
prev = 0
for oy in range(180, 640):
    n = sum(1 for ox in range(30, 560) if sum(px[ox, oy][:3]) < 400)
    if (n > 0) != (prev > 0):
        print("   css y=%.1f  %s" % (oy / DPR, "开始" if n > 0 else "结束"))
    prev = n
