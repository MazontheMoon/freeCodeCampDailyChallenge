/*
PSEUDOCODE:
1. Define zoning rules as a map of type -> set of disallowed neighbors
2. Create result array
3. Loop through each cell in grid:
   a. Skip if cell is empty or has no rules
   b. For each of 4 directions (up, down, left, right):
       i. Check if neighbor is within bounds
       ii. If neighbor type is disallowed:
            - Add current cell coordinates to result
            - Stop checking further neighbors
4. Return result
*/

/**
 * Finds coordinates of buildings violating zoning rules.
 *
 * @param {string[][]} grid - 2D array representing city layout
 * @returns {number[][]} Array of [row, col] pairs
 */
function getZoneViolations(grid) {
  const rules = {
    "i": new Set(["R", "I"]),
    "A": new Set(["C"]),
    "R": new Set(["i", "C"]),
    "I": new Set(["i"]),
    "C": new Set(["R", "A"])
  };

  const result = [];
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [[1,0],[-1,0],[0,1],[0,-1]];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const current = grid[r][c];

      if (!current || !rules[current]) continue;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

        if (rules[current].has(grid[nr][nc])) {
          result.push([r, c]);
          break;
        }
      }
    }
  }

  return result;
}
