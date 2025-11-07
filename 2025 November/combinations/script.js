/**
 * Calculates the number of unique combinations of cards
 * that can be picked from a standard 52-card deck.
 *
 * Order does not matter (i.e., picking card A then card B 
 * is the same as picking card B then card A).
 *
 * Uses the mathematical combination formula: n! / (k! * (n - k)!)
 *
 * @param {number} cards - The number of cards to pick (0 ≤ cards ≤ 52)
 * @returns {number} The number of unique combinations possible
 *
 * @example
 * combinations(52); // returns 1
 * combinations(2);  // returns 1326
 */

function combinations(cards) {
  const n = 52;

  // Guard against invalid inputs
  if (cards < 0 || cards > n) return 0;

  // Helper function to calculate factorial
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Use the combinations formula: n! / (k! * (n - k)!)
  return factorial(n) / (factorial(cards) * factorial(n - cards));
}
