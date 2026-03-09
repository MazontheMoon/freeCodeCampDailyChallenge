function isValidHSL(str) {

  str = str.trim();

  // remove optional semicolon
  if (str.endsWith(";")) {
    str = str.slice(0, -1).trim();
  }

  // must start with hsl(
  if (!str.startsWith("hsl(") || !str.endsWith(")")) {
    return false;
  }

  const inside = str.slice(4, -1).trim();
  const parts = inside.split(",");

  if (parts.length !== 3) return false;

  let [h, s, l] = parts.map(p => p.trim());

  // hue
  const hue = Number(h);
  if (isNaN(hue) || hue < 0 || hue > 360) return false;

  // saturation
  if (!s.endsWith("%")) return false;
  const sat = Number(s.slice(0, -1));
  if (isNaN(sat) || sat < 0 || sat > 100) return false;

  // lightness
  if (!l.endsWith("%")) return false;
  const light = Number(l.slice(0, -1));
  if (isNaN(light) || light < 0 || light > 100) return false;

  return true;
}
