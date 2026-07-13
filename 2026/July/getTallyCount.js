function getTallyCount(tallies) {
  let count = 0;

  for (const char of tallies) {
    if (char === "|" || char === "/") {
      count++;
    }
  }

  return count;
}
