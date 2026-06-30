function connectThree(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [0, 1],   // right
    [1, 0],   // down
    [1, 1],   // diag down-right
    [1, -1]   // diag down-left
  ];

  function inBounds(r, c) {
    return r >= 0 && r < rows && c >= 0 && c < cols;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const player = grid[r][c];
      if (!player) continue;

      for (const [dr, dc] of directions) {
        const r2 = r + dr;
        const c2 = c + dc;
        const r3 = r + dr * 2;
        const c3 = c + dc * 2;

        if (
          inBounds(r2, c2) &&
          inBounds(r3, c3) &&
          grid[r2][c2] === player &&
          grid[r3][c3] === player
        ) {
          return [
            player,
            [r, c],
            [r2, c2],
            [r3, c3]
          ];
        }
      }
    }
  }

  return [];
}
