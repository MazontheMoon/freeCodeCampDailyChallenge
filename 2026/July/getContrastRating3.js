function getContrastRating(rgb1, rgb2, largeText) {
  function luminance(rgb) {
    const channels = rgb.map(value => {
      value /= 255;

      if (value <= 0.04045) {
        return value / 12.92;
      }

      return Math.pow((value + 0.055) / 1.055, 2.4);
    });

    return (
      0.2126 * channels[0] +
      0.7152 * channels[1] +
      0.0722 * channels[2]
    );
  }

  const lum1 = luminance(rgb1);
  const lum2 = luminance(rgb2);

  // The first color is guaranteed to be the lighter one,
  // but this also works if it isn't.
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  if (largeText) {
    if (ratio >= 4.5) return "AAA";
    if (ratio >= 3.0) return "AA";
  } else {
    if (ratio >= 7.0) return "AAA";
    if (ratio >= 4.5) return "AA";
  }

  return "Fail";
}
