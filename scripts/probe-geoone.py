"""按 CSS 坐标探针取色 / 找边界，辅助确定 GEO ONE 界面的设计参数。"""
from PIL import Image

BASE = "public/charts/"
DPR = 2.0


def hexc(p):
    return "#%02x%02x%02x" % p[:3]


def load(f):
    return Image.open(BASE + f).convert("RGB")


def scan_row(im, css_y, x0=0, x1=None, label=""):
    """沿一行扫描，报告颜色变化点（CSS 坐标）。"""
    w, h = im.size
    px = im.load()
    y = min(int(css_y * DPR), h - 1)
    x1 = min(x1 or int(w / DPR), int(w / DPR) - 1)
    prev = None
    out = []
    for cx in range(x0, x1):
        c = px[int(cx * DPR), y]
        if prev is None or any(abs(a - b) > 6 for a, b in zip(c, prev)):
            out.append((cx, hexc(c)))
            prev = c
    print(f"  [row y={css_y}] {label}: {out[:28]}")


def scan_col(im, css_x, y0=0, y1=None, label=""):
    w, h = im.size
    px = im.load()
    x = min(int(css_x * DPR), w - 1)
    y1 = min(y1 or int(h / DPR), int(h / DPR) - 1)
    prev = None
    out = []
    for cy in range(y0, y1):
        c = px[x, int(cy * DPR)]
        if prev is None or any(abs(a - b) > 6 for a, b in zip(c, prev)):
            out.append((cy, hexc(c)))
            prev = c
    print(f"  [col x={css_x}] {label}: {out[:28]}")


print("### geo-dashboard-1.png (总览)")
im = load("geo-dashboard-1.png")
print("  css size", im.size[0] / DPR, im.size[1] / DPR)
scan_row(im, 30, 0, 400, "logo row -> 侧边栏右边界")
scan_row(im, 155, 0, 400, "总览高亮项")
scan_row(im, 230, 280, 1586, "KPI 卡片横向分界")
scan_col(im, 400, 0, 400, "KPI 卡片上下边界")
scan_col(im, 700, 380, 892, "折线卡片上下边界")
scan_row(im, 600, 280, 1586, "两张图表卡片的左右边界")

print("### geo-dashboard-entries-1.png (词条)")
im2 = load("geo-dashboard-entries-1.png")
print("  css size", im2.size[0] / DPR, im2.size[1] / DPR)
scan_row(im2, 150, 280, 1586, "表头分界")
scan_col(im2, 320, 100, 400, "表头/首行上下边界")
scan_row(im2, 275, 280, 1586, "第一行：列分界")

print("### geo-dashboard-sentiment-1.png (正负面)")
im3 = load("geo-dashboard-sentiment-1.png")
print("  css size", im3.size[0] / DPR, im3.size[1] / DPR)
scan_col(im3, 700, 100, 633, "负面回答列表上下边界")
scan_row(im3, 300, 280, 1586, "列分界")

print("### geo-dashboard-sources-1.png (引用源)")
im4 = load("geo-dashboard-sources-1.png")
print("  css size", im4.size[0] / DPR, im4.size[1] / DPR)
scan_row(im4, 200, 0, 1600, "环形图卡片左右边界")
scan_col(im4, 200, 0, 932, "上半区卡片上下边界")

print("### geo-dashboard-sentiment-pre.png (正负面基本情况)")
im5 = load("geo-dashboard-sentiment-pre.png")
print("  css size", im5.size[0] / DPR, im5.size[1] / DPR)
scan_row(im5, 300, 0, 1608, "两张卡片左右边界")
scan_col(im5, 200, 0, 574, "卡片上下边界")

print("### geo-dashboard-competitors-1.png (竞品对比)")
im6 = load("geo-dashboard-competitors-1.png")
print("  css size", im6.size[0] / DPR, im6.size[1] / DPR)
scan_row(im6, 300, 0, 2625, "三栏分隔线")
