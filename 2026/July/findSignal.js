function findSignal(grid) {
  const towers = [];

  // Find the three towers
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] > 0) {
        towers.push({
          row,
          col,
          distance: grid[row][col]
        });
      }
    }
  }

  // Try every cell as the phone location
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

      let matches = true;

      for (const tower of towers) {
        const distance = Math.max(
          Math.abs(row - tower.row),
          Math.abs(col - tower.col)
        );

        if (distance !== tower.distance) {
          matches = false;
          break;
        }
      }

      if (matches) {
        return [row, col];
      }
    }
  }
}
