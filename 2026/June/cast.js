/*
PSEUDOCODE:
1. Create a map of spell → { category, baseScore }
2. Initialize:
   - totalScore = 0
   - multiplier = 1
   - prevCategory = null
3. Loop through each spell in string:
   a. Get its category and baseScore
   b. If category is same as previous:
        - reset multiplier to 1
      Else:
        - increment multiplier
   c. Add (baseScore * multiplier) to totalScore
   d. Update prevCategory
4. Return totalScore
*/

/**
 * Calculates total spell score with combo multipliers.
 *
 * @param {string} spells
 * @returns {number}
 */
function cast(spells) {
  const map = {
    f: { cat: "D", score: 3 },
    l: { cat: "D", score: 3 },
    i: { cat: "C", score: 2 },
    w: { cat: "C", score: 2 },
    h: { cat: "R", score: 1 },
    s: { cat: "R", score: 1 }
  };

  let total = 0;
  let multiplier = 1;
  let prevCat = null;

  for (let i = 0; i < spells.length; i++) {
    const { cat, score } = map[spells[i]];

    if (prevCat === null) {
      multiplier = 1;
    } else if (cat === prevCat) {
      multiplier = 1;
    } else {
      multiplier++;
    }

    total += score * multiplier;
    prevCat = cat;
  }

  return total;
}