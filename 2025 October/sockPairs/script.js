/**
 * Calculates the number of complete pairs of socks remaining after a given number of wash cycles.
 *
 * Rules:
 * - Every 2 wash cycles, you lose a single sock.
 * - Every 3 wash cycles, you find a single missing sock.
 * - Every 5 wash cycles, one sock wears out and must be thrown away.
 * - Every 10 wash cycles, you buy a new pair of socks.
 * - You can never have less than zero total socks.
 * - Rules can overlap. For example, on wash cycle 10, you will lose one sock, throw one away, and buy a pair.
 *
 * @param {number} pairs - The initial number of sock pairs you start with.
 * @param {number} cycles - The total number of wash cycles that have occurred.
 * @returns {number} The number of complete pairs of socks remaining after all wash cycles.
 *
 * @example
 * sockPairs(5, 2);   // → 4 (lost one sock)
 * sockPairs(3, 3);   // → 3 (found one sock)
 * sockPairs(4, 5);   // → 3 (lost one, found one, one worn out)
 * sockPairs(2, 10);  // → 3 (lost one, found one, one worn out, bought one pair)
 */
function sockPairs(pairs, cycles) {
  // Start with total socks (pairs × 2)
  let socks = pairs * 2;

  for (let i = 1; i <= cycles; i++) {
    if (i % 2 === 0) socks -= 1; // lose one sock
    if (i % 3 === 0) socks += 1; // find one sock
    if (i % 5 === 0) socks -= 1; // one sock wears out
    if (i % 10 === 0) socks += 2; // buy a new pair (2 socks)
    socks = Math.max(0, socks); // ensure socks never go below zero
  }

  // Return the number of complete pairs
  return Math.floor(socks / 2);
}