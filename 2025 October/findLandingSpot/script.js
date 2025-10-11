/**
 * Finds the safest landing spot (a cell with value 0) in a matrix
 * based on the total danger level of its immediate neighbors.
 *
 * Rules:
 * - Each cell contains a number 0–9.
 * - 0 = potential landing spot.
 * - Any nonzero number = danger level (higher = more dangerous).
 * - A cell’s safety is determined by the **sum of its 4-directional neighbors** (up, down, left, right).
 * - Ignore out-of-bounds neighbors (edges/corners have fewer).
 * - Return the indices `[row, col]` of the safest landing spot.
 * - There will always be exactly one safest spot.
 *
 * @param {number[][]} matrix - A 2D array representing the danger map (0–9 inclusive).
 * @returns {[number, number]} The row and column indices of the safest landing spot.
 *
 * @throws {TypeError} If the input is not a valid non-empty matrix of numbers.
 *
 * @example
 * findLandingSpot([
 *   [1, 0, 3],
 *   [2, 0, 4],
 *   [9, 1, 0]
 * ]);
 * // 0 cells: (0,1), (1,1), (2,2)
 * // (0,1): neighbors 1 + 0 + 0 + 3 = 4
 * // (1,1): neighbors 0 + 1 + 2 + 4 = 7
 * // (2,2): neighbors 4 + 1 = 5
 * // Safest = (0,1) → returns [0, 1]
 */
function findLandingSpot(matrix) {
  // Validate input
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !matrix.every(row => Array.isArray(row) && row.every(num => typeof num === 'number'))
  ) {
    throw new TypeError('Input must be a non-empty 2D array of numbers.');
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Helper to get valid neighbor values (up, down, left, right)
  function getNeighborsSum(r, c) {
    const directions = [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1]   // right
    ];

    return directions.reduce((sum, [dr, dc]) => {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        sum += matrix[nr][nc];
      }
      return sum;
    }, 0);
  }

  let safestSpot = null;
  let lowestDanger = Infinity;

  // Loop through matrix to find 0s and calculate their neighbor danger levels
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        const danger = getNeighborsSum(r, c);
        if (danger < lowestDanger) {
          lowestDanger = danger;
          safestSpot = [r, c];
        }
      }
    }
  }

  return safestSpot;
}