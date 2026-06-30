function duplicateCharacterCount(str1, str2) {
  const set = new Set(str1);
  let count = 0;

  for (const char of str2) {
    if (set.has(char)) {
      count++;
    }
  }

  return count;
}
