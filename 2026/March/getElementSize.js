function getElementSize(windowSize, vw, vh) {
  const [winW, winH] = windowSize.split(" x ").map(Number);

  const vwPercent = parseFloat(vw);
  const vhPercent = parseFloat(vh);

  const width = winW * vwPercent / 100;
  const height = winH * vhPercent / 100;

  return `${width} x ${height}`;
}
