function bucketFill(grid, target) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = Array.from(
    { length: rows },
    () => Array(cols).fill(false)
  );

  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  let clicks = 0;

  function floodFill(row, col, color) {
    const stack = [[row, col]];
    visited[row][col] = true;

    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop();

      for (const [rowChange, colChange] of directions) {
        const newRow = currentRow + rowChange;
        const newCol = currentCol + colChange;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !visited[newRow][newCol] &&
          grid[newRow][newCol] === color
        ) {
          visited[newRow][newCol] = true;
          stack.push([newRow, newCol]);
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Target-colour cells need no click
      if (grid[row][col] === target) {
        visited[row][col] = true;
        continue;
      }

      // Already part of a discovered region
      if (visited[row][col]) {
        continue;
      }

      // New non-target region = one click
      clicks++;

      floodFill(row, col, grid[row][col]);
    }
  }

  return clicks;
}