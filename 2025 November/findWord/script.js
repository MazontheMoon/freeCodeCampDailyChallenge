/**
 * Find the start and end coordinates of a word in a 2D matrix of letters.
 *
 * The word is guaranteed to appear exactly once and in a straight line:
 * left→right, right→left, top→bottom, or bottom→top.
 *
 * @param {string[][]} matrix - 2D array of single lowercase letters.
 * @param {string} word - The word to find (lowercase).
 * @returns {number[][] | null} A pair of coordinates: [[startRow,startCol],[endRow,endCol]] or null if not found.
 */
 
function findWord(matrix, word) {
  if (!Array.isArray(matrix) || matrix.length === 0 || typeof word !== 'string' || word.length === 0) {
    return null;
  }

  const rows = matrix.length;
  // We'll allow non-uniform row lengths and check bounds per-access.
  const L = word.length;

  // Directions: right, left, down, up
  const dirs = [
    [0, 1],  // right
    [0, -1], // left
    [1, 0],  // down
    [-1, 0], // up
  ];

  for (let r = 0; r < rows; r++) {
    if (!Array.isArray(matrix[r])) continue;
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] !== word[0]) continue;

      for (const [dr, dc] of dirs) {
        let matched = true;
        for (let i = 0; i < L; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;
          // check row bounds and that row is an array
          if (nr < 0 || nr >= rows || !Array.isArray(matrix[nr]) || nc < 0 || nc >= matrix[nr].length) {
            matched = false;
            break;
          }
          if (matrix[nr][nc] !== word[i]) {
            matched = false;
            break;
          }
        }
        if (matched) {
          const endR = r + dr * (L - 1);
          const endC = c + dc * (L - 1);
          return [[r, c], [endR, endC]];
        }
      }
    }
  }

  // Defensive: return null if not found (problem statement says it will always exist once)
  return null;
}
