from PIL import Image
import sys

img = Image.open(sys.argv[1])
colors = img.getcolors(maxcolors=100000)
if colors:
    sorted_colors = sorted(colors, key=lambda c: c[0], reverse=True)
    for count, color in sorted_colors[:10]:
        print(f"Color {color}: {count} pixels")
else:
    print("Too many colors")
