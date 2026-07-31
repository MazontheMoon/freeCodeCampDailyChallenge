function getContrastRating(ratio, largeText) {
  ratio = Number(ratio);

  if (largeText) {
    if (ratio >= 4.5) return "AAA";
    if (ratio >= 3.0) return "AA";
  } else {
    if (ratio >= 7.0) return "AAA";
    if (ratio >= 4.5) return "AA";
  }

  return "Fail";
}
