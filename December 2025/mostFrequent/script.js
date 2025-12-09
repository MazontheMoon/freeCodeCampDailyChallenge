/**
 * Finds and returns the element that appears most frequently in an array.
 *
 * @param {Array} arr - The array of elements to analyze.
 * @returns {*} The element that occurs the greatest number of times.
 *
 * @example
 * mostFrequent([1, 2, 2, 3]);   // returns 2
 * mostFrequent(["a", "b", "a"]) // returns "a"
 */
function mostFrequent(arr) {
  // -------------------------------
  // PSEUDOCODE
  // 1. Create a map (object) to count occurrences.
  // 2. Loop through each item in the array.
  //    - If item not in map, set count to 1.
  //    - If item already in map, increase its count.
  // 3. Track the most frequent item and its count.
  // 4. After the loop, return the item with the highest count.
  // -------------------------------

  const countMap = {};   // Step 1: store counts
  let maxCount = 0;      // Step 3: track largest count
  let mostCommon = null; // Step 3: track corresponding value

  // Step 2: count occurrences
  for (const item of arr) {
    countMap[item] = (countMap[item] || 0) + 1;

    // Update if this item becomes the new most frequent
    if (countMap[item] > maxCount) {
      maxCount = countMap[item];
      mostCommon = item;
    }
  }

  return mostCommon; // Step 4
}