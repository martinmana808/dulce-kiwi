#!/bin/zsh
# Usage: ./render.sh input.(svg|html) output.png WIDTH HEIGHT
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
IN="$1"; OUT="$2"; W="${3:-800}"; H="${4:-800}"
ABS="file://$(cd "$(dirname "$IN")" && pwd)/$(basename "$IN")"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 \
  --default-background-color=00000000 \
  --screenshot="$OUT" --window-size=${W},${H} "$ABS" >/dev/null 2>&1
echo "rendered $OUT"
