function isBalanced(str) {
  const vowels = "aeiouAEIOU";
  const middle = Math.floor(str.length / 2);

  let firstCount = 0;
  let secondCount = 0;

  // Count vowels in the first half
  for (let i = 0; i < middle; i++) {
    if (vowels.includes(str[i])) {
      firstCount++;
    }
  }

  // Count vowels in the second half
  // Starting at middle + 1 naturally skips
  // the centre character for odd-length strings.
  const secondStart = str.length % 2 === 0
    ? middle
    : middle + 1;

  for (let i = secondStart; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      secondCount++;
    }
  }

  return firstCount === secondCount;
}