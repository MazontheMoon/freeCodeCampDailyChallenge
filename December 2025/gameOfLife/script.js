/*
PSEUDOCODE

FUNCTION gameOfLife(grid)
    CREATE a new grid with the same dimensions as grid

    FOR each cell at position (row, col)
        COUNT number of live neighbors
            CHECK all 8 possible directions
            IGNORE neighbors that are out of bounds

        IF cell is alive
            IF live neighbors < 2 OR > 3
                cell becomes dead
            ELSE
                cell stays alive
        ELSE (cell is dead)
            IF live neighbors == 3
                cell becomes alive
            ELSE
                cell stays dead

        STORE result in the new grid
    END FOR

    RETURN the new grid
END FUNCTION
*/

/**
 * Computes the next state of a grid in Conway's Game of Life.
 *
 * Rules:
 * - Live cell with fewer than 2 live neighbors dies
 * - Live cell with 2 or 3 live neighbors lives
 * - Live cell with more than 3 live neighbors dies
 * - Dead cell with exactly 3 live neighbors becomes alive
 *
 * The original grid is not mutated.
 *
 * @param {number[][]} grid - A 2D array of 0s (dead) and 1s (alive)
 * @returns {number[][]} A new 2D array representing the next state
 *
 * @example
 * gameOfLife([
 *   [0, 1, 0],
 *   [0, 1, 1],
 *   [1, 1, 0]
 * ]);
 */
function gameOfLife(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // All 8 possible neighbor directions
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  // Create a new grid filled with 0s
  const nextGrid = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbors = 0;

      // Count live neighbors
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols
        ) {
          liveNeighbors += grid[newRow][newCol];
        }
      }

      // Apply Game of Life rules
      if (grid[row][col] === 1) {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          nextGrid[row][col] = 1;
        }
      } else {
        if (liveNeighbors === 3) {
          nextGrid[row][col] = 1;
        }
      }
    }
  }

  return nextGrid;
}
