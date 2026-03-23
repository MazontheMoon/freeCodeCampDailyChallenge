
/*
PSEUDOCODE

function decodeQr(matrix):

    convert rows from strings to arrays of numbers

    repeat 4 times:
        if matrix has valid orientation:
            return extracted data

        rotate matrix 90 degrees

function isValid(matrix):
    check 2x2 blocks at:
        top-left
        top-right
        bottom-left

    return true if all are 1s

function extractData(matrix):

    result = ""

    for each cell:
        if cell is NOT inside any of the 3 marker zones:
            append value to result

    return result
*/

/**
 * Decodes a 6x6 QR code matrix and extracts binary data.
 *
 * The matrix may be rotated. A valid orientation contains 2x2 blocks
 * of 1s in the top-left, top-right, and bottom-left corners.
 * These markers are excluded from the output.
 *
 * @param {string[]} matrix - Array of 6 strings representing the QR code.
 * @returns {string} Extracted binary data.
 */
function decodeQr(matrix) {
  let grid = matrix.map(row => row.split("").map(Number));

  for (let i = 0; i < 4; i++) {
    if (isValid(grid)) {
      return extract(grid);
    }
    grid = rotate(grid);
  }
}

function isValid(g) {
  return (
    checkBlock(g, 0, 0) &&     // top-left
    checkBlock(g, 0, 4) &&     // top-right
    checkBlock(g, 4, 0)        // bottom-left
  );
}

function checkBlock(g, r, c) {
  return (
    g[r][c] === 1 &&
    g[r][c + 1] === 1 &&
    g[r + 1][c] === 1 &&
    g[r + 1][c + 1] === 1
  );
}

function extract(g) {
  let result = "";

  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      if (!isMarker(r, c)) {
        result += g[r][c];
      }
    }
  }

  return result;
}

function isMarker(r, c) {
  // top-left
  if (r < 2 && c < 2) return true;
  // top-right
  if (r < 2 && c >= 4) return true;
  // bottom-left
  if (r >= 4 && c < 2) return true;

  return false;
}

function rotate(g) {
  const n = 6;
  const res = Array.from({ length: n }, () => Array(n));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      res[c][n - 1 - r] = g[r][c];
    }
  }

  return res;
}