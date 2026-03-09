function navigateTrail(map) {
  const rows = map.length;
  const cols = map[0].length;

  const grid = map.map(row => row.split(""));

  let r, c;

  // find start
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "C") {
        r = i;
        c = j;
      }
    }
  }

  const dirs = [
    [0, 1, "R"],
    [1, 0, "D"],
    [0, -1, "L"],
    [-1, 0, "U"]
  ];

  let result = "";
  let prev = null;

  while (grid[r][c] !== "G") {
    for (let [dr, dc, move] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        (grid[nr][nc] === "T" || grid[nr][nc] === "G") &&
        (!prev || nr !== prev[0] || nc !== prev[1])
      ) {
        result += move;
        prev = [r, c];
        r = nr;
        c = nc;
        break;
      }
    }
  }

  return result;
}
