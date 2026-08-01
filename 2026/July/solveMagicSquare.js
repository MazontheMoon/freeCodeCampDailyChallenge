function solveMagicSquare(grid) {
  let zeroRow = -1;
  let zeroCol = -1;

  // Find the missing cell
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[r][c] === 0) {
        zeroRow = r;
        zeroCol = c;
      }
    }
  }

  let magicSum = null;

  // Complete rows
  for (let r = 0; r < 3 && magicSum === null; r++) {
    if (!grid[r].includes(0)) {
      magicSum = grid[r][0] + grid[r][1] + grid[r][2];
    }
  }

  // Complete columns
  for (let c = 0; c < 3 && magicSum === null; c++) {
    if (grid[0][c] && grid[1][c] && grid[2][c]) {
      magicSum = grid[0][c] + grid[1][c] + grid[2][c];
    }
  }

  // Main diagonal
  if (
    magicSum === null &&
    grid[0][0] &&
    grid[1][1] &&
    grid[2][2]
  ) {
    magicSum = grid[0][0] + grid[1][1] + grid[2][2];
  }

  // Other diagonal
  if (
    magicSum === null &&
    grid[0][2] &&
    grid[1][1] &&
    grid[2][0]
  ) {
    magicSum = grid[0][2] + grid[1][1] + grid[2][0];
  }

  if (magicSum === null) return "impossible";

  let missing;

  // Determine missing value
  if (zeroRow === zeroCol) {
    missing = magicSum - (grid[(zeroRow + 1) % 3][(zeroCol + 1) % 3] +
                          grid[(zeroRow + 2) % 3][(zeroCol + 2) % 3]);
  } else if (zeroRow + zeroCol === 2) {
    const coords = [[0, 2], [1, 1], [2, 0]];
    let sum = 0;
    for (const [r, c] of coords) {
      if (!(r === zeroRow && c === zeroCol)) {
        sum += grid[r][c];
      }
    }
    missing = magicSum - sum;
  } else {
    missing = magicSum - (
      grid[zeroRow][0] +
      grid[zeroRow][1] +
      grid[zeroRow][2]
    );
  }

  grid[zeroRow][zeroCol] = missing;

  // Check rows
  for (let r = 0; r < 3; r++) {
    if (grid[r][0] + grid[r][1] + grid[r][2] !== magicSum) {
      return "impossible";
    }
  }

  // Check columns
  for (let c = 0; c < 3; c++) {
    if (grid[0][c] + grid[1][c] + grid[2][c] !== magicSum) {
      return "impossible";
    }
  }

  // Check diagonals
  if (
    grid[0][0] + grid[1][1] + grid[2][2] !== magicSum ||
    grid[0][2] + grid[1][1] + grid[2][0] !== magicSum
  ) {
    return "impossible";
  }

  return missing;
}