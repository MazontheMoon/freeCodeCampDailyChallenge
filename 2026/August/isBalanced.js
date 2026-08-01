function isBalanced(str) {
  const vowels = "aeiouAEIOU";
  const mid = Math.floor(str.length / 2);

  const firstHalf = str.slice(0, mid);
  const secondHalf = str.length % 2 === 0
    ? str.slice(mid)
    : str.slice(mid + 1);

  let firstCount = 0;
  let secondCount = 0;

  for (const char of firstHalf) {
    if (vowels.includes(char)) {
      firstCount++;
    }
  }

  for (const char of secondHalf) {
    if (vowels.includes(char)) {
      secondCount++;
    }
  }

  return firstCount === secondCount;
}