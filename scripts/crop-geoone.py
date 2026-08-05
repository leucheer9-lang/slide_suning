"""裁切 GEO ONE 截图的局部区域，放大后便于逐像素核对样式。"""
import os
from PIL import Image

BASE = "public/charts/"
OUT = "scripts/_crops/"
os.makedirs(OUT, exist_ok=True)

# name -> (file, left, top, right, bottom, zoom)
CROPS = {
    # 共享框架：侧边栏
    "sidebar_top":      ("geo-dashboard-1.png", 0, 0, 560, 620, 2.0),
    "sidebar_bottom":   ("geo-dashboard-1.png", 0, 1560, 560, 1785, 2.0),
    # 总览页
    "ov_header":        ("geo-dashboard-1.png", 560, 0, 3172, 270, 1.6),
    "ov_kpi":           ("geo-dashboard-1.png", 560, 300, 3172, 610, 1.6),
    "ov_sect_title":    ("geo-dashboard-1.png", 560, 620, 1900, 790, 2.4),
    "ov_line_card":     ("geo-dashboard-1.png", 600, 790, 1860, 1740, 1.5),
    "ov_bar_card":      ("geo-dashboard-1.png", 1880, 790, 3160, 1740, 1.5),
}

for name, (f, l, t, r, b, z) in CROPS.items():
    im = Image.open(BASE + f).convert("RGB")
    r = min(r, im.size[0]); b = min(b, im.size[1])
    c = im.crop((l, t, r, b))
    if z != 1.0:
        c = c.resize((int(c.width * z), int(c.height * z)), Image.LANCZOS)
    # 控制输出尺寸，避免过大
    if c.width > 1500:
        s = 1500 / c.width
        c = c.resize((1500, int(c.height * s)), Image.LANCZOS)
    c.save(OUT + name + ".png")
    print(name, "->", c.size)
