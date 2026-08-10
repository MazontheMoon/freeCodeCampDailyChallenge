function bucketFill(grid, target) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Colours that can actually be useful.
  const colours = new Set([target]);

  for (const row of grid) {
    for (const cell of row) {
      colours.add(cell);
    }
  }

  // Convert grid to a string so it can be used in a Set.
  const serialize = (board) => JSON.stringify(board);

  const start = serialize(grid);

  // BFS queue: [grid, numberOfClicks]
  const queue = [[grid, 0]];
  const visited = new Set([start]);

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  function findRegions(board) {
    const seen = Array.from(
      { length: rows },
      () => Array(cols).fill(false)
    );

    const regions = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (seen[row][col]) {
          continue;
        }

        const colour = board[row][col];
        const region = [];
        const stack = [[row, col]];

        seen[row][col] = true;

        while (stack.length > 0) {
          const [r, c] = stack.pop();

          region.push([r, c]);

          for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
              nr >= 0 &&
              nr < rows &&
              nc >= 0 &&
              nc < cols &&
              !seen[nr][nc] &&
              board[nr][nc] === colour
            ) {
              seen[nr][nc] = true;
              stack.push([nr, nc]);
            }
          }
        }

        regions.push({
          colour,
          cells: region
        });
      }
    }

    return regions;
  }

  function isTarget(board) {
    for (const row of board) {
      for (const cell of row) {
        if (cell !== target) {
          return false;
        }
      }
    }

    return true;
  }

  while (queue.length > 0) {
    const [board, clicks] = queue.shift();

    if (isTarget(board)) {
      return clicks;
    }

    const regions = findRegions(board);

    for (const region of regions) {
      for (const colour of colours) {
        // Changing to the same colour does nothing.
        if (colour === region.colour) {
          continue;
        }

        // Copy the board.
        const newBoard = board.map(row => [...row]);

        // Recolour the entire connected region.
        for (const [row, col] of region.cells) {
          newBoard[row][col] = colour;
        }

        const state = serialize(newBoard);

        if (!visited.has(state)) {
          visited.add(state);
          queue.push([newBoard, clicks + 1]);
        }
      }
    }
  }

  return -1;
}