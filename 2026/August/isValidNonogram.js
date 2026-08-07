function isValidNonogram(clue, row) {
  const runs = [];
  let count = 0;

  for (const cell of row) {
    if (cell === 1) {
      count++;
    } else if (count > 0) {
      runs.push(count);
      count = 0;
    }
  }

  // Add the final run if the row ends with a 1
  if (count > 0) {
    runs.push(count);
  }

  // Check that the number of runs is the same
  if (runs.length !== clue.length) {
    return false;
  }

  // Check each run against the clue
  for (let i = 0; i < clue.length; i++) {
    if (runs[i] !== clue[i]) {
      return false;
    }
  }

  return true;
}