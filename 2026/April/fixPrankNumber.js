// find correct diff
//
// try building from arr[0]
// count mismatches
//
// if mismatch at index 1
//   adjust start using arr[2]
//
// rebuild final array

/**
 * Fixes a sequence where one number breaks an arithmetic pattern
 * @param {number[]} arr
 * @returns {number[]}
 */
function fixPrankNumber(arr) {
  if (arr.length < 3) return arr;

  // Step 1: differences
  const diffs = [];
  for (let i = 1; i < arr.length; i++) {
    diffs.push(arr[i] - arr[i - 1]);
  }

  // Step 2: most common diff
  const freq = {};
  for (const d of diffs) {
    freq[d] = (freq[d] || 0) + 1;
  }

  let correctDiff = Number(Object.keys(freq)[0]);
  let max = 0;

  for (const d in freq) {
    if (freq[d] > max) {
      max = freq[d];
      correctDiff = Number(d);
    }
  }

  // Step 3: determine correct start
  let start = arr[0];

  // If first step is wrong, AND second step matches pattern → first is wrong
  if (arr[1] - arr[0] !== correctDiff && arr[2] - arr[1] === correctDiff) {
    start = arr[1] - correctDiff;
  }

  // If second step is wrong → keep start as is (middle element is wrong)
  // If later element is wrong → also fine

  // Step 4: rebuild
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(start + i * correctDiff);
  }

  return result;
}
