function bucketFill(grid, start, newValue) {
  const [startRow, startCol] = start;
  const oldValue = grid[startRow][startCol];

  // Nothing to do if the value is already the new value
  if (oldValue === newValue) {
    return grid;
  }

  function fill(row, col) {
    // Out of bounds
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length
    ) {
      return;
    }

    // Not the target value
    if (grid[row][col] !== oldValue) {
      return;
    }

    // Fill this cell
    grid[row][col] = newValue;

    // Visit neighbors
    fill(row - 1, col); // up
    fill(row + 1, col); // down
    fill(row, col - 1); // left
    fill(row, col + 1); // right
  }

  fill(startRow, startCol);

  return grid;
}