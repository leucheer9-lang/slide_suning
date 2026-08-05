"""检测 GEO ONE 截图中的卡片边框矩形与文字行位置，输出 CSS 像素坐标（截图为 DPR 2）。"""
import sys
from PIL import Image

BASE = "public/charts/"
DPR = 2.0


def near(c, t, tol=10):
    return all(abs(int(a) - int(b)) <= tol for a, b in zip(c[:3], t))


def find_lines(im, colors, min_run=40):
    """找出由指定边框色构成的长横线与长竖线。"""
    w, h = im.size
    px = im.load()

    def is_border(x, y):
        c = px[x, y]
        return any(near(c, t, 8) for t in colors)

    hlines = []  # (y, x0, x1)
    for y in range(h):
        x = 0
        while x < w:
            if is_border(x, y):
                x0 = x
                while x < w and is_border(x, y):
                    x += 1
                if x - x0 >= min_run:
                    hlines.append((y, x0, x - 1))
            else:
                x += 1

    vlines = []  # (x, y0, y1)
    for x in range(w):
        y = 0
        while y < h:
            if is_border(x, y):
                y0 = y
                while y < h and is_border(x, y):
                    y += 1
                if y - y0 >= min_run:
                    vlines.append((x, y0, y - 1))
            else:
                y += 1
    return hlines, vlines


def merge(vals, gap=3):
    """把相邻坐标合并成一组，返回每组的代表值与跨度。"""
    if not vals:
        return []
    vals = sorted(vals)
    out = [[vals[0], vals[0]]]
    for v in vals[1:]:
        if v - out[-1][1] <= gap:
            out[-1][1] = v
        else:
            out.append([v, v])
    return out


def css(v):
    return round(v / DPR, 1)


def report(fname, border_colors, min_run=60):
    im = Image.open(BASE + fname).convert("RGB")
    w, h = im.size
    print("=" * 78)
    print(fname, "orig %dx%d" % (w, h), "-> css %.1fx%.1f" % (w / DPR, h / DPR))
    hl, vl = find_lines(im, border_colors, min_run)

    hy = merge([y for y, a, b in hl])
    vx = merge([x for x, a, b in vl])
    print("  horizontal border rows (css y):",
          [(css(a), css(b)) if a != b else css(a) for a, b in hy][:40])
    print("  vertical border cols (css x):",
          [(css(a), css(b)) if a != b else css(a) for a, b in vx][:40])


if __name__ == "__main__":
    slate200 = (226, 232, 240)
    slate100 = (241, 245, 249)
    gray = (229, 231, 235)
    e5 = (238, 238, 238)
    for f in sys.argv[1:]:
        report(f, [slate200, gray, e5, slate100])
