function fiveDice(dice) {
  const counts = {};

  for (const die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }

  const freq = Object.values(counts).sort((a, b) => b - a);

  const unique = [...new Set(dice)].sort((a, b) => a - b);
  const str = unique.join(",");

  const largeStraight =
    str === "1,2,3,4,5" || str === "2,3,4,5,6";

  const smallStraight =
    str.includes("1,2,3,4") ||
    str.includes("2,3,4,5") ||
    str.includes("3,4,5,6");

  if (freq[0] === 5) return "five of a kind";
  if (freq[0] === 4) return "four of a kind";
  if (freq[0] === 3 && freq[1] === 2) return "full house";
  if (largeStraight) return "large straight";
  if (smallStraight) return "small straight";
  if (freq[0] === 3) return "three of a kind";
  if (freq[0] === 2 && freq[1] === 2) return "two pair";
  if (freq[0] === 2) return "pair";

  return "no pair";
}
