function sumLetters(str) {
  let sum = 0;

  for (const ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      sum += ch.charCodeAt(0) - 96;
    }
  }

  return sum;
}
