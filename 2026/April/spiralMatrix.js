/*
PSEUDOCODE:
- If matrix is empty → return empty array

- Initialize result array

- Define boundaries:
  - top = 0
  - bottom = last row index
  - left = 0
  - right = last column index

- While top <= bottom AND left <= right:
  
  - Traverse top row (left → right)
    - Add elements to result
  - Increment top

  - Traverse right column (top → bottom)
    - Add elements
  - Decrement right

  - If top <= bottom:
    - Traverse bottom row (right → left)
      - Add elements
    - Decrement bottom

  - If left <= right:
    - Traverse left column (bottom → top)
      - Add elements
    - Increment left

- Return result
*/

/**
 * Returns all elements of a 2D matrix in clockwise spiral order.
 * @param {any[][]} matrix - The input 2D matrix.
 * @returns {any[]} A flat array of elements in spiral order.
 */
function spiralMatrix(matrix) {
  if (!matrix.length) return [];

  const result = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}
