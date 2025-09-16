/*
Challenge - Matrix Rotate
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2
*/

/**
 * Returns a rotated matrix array.
 *
 * @param {number[][]} matrix - 2d int array.
 * @return {number[][]} rotated 2d int array.
 */

/**
 * Challenge - Matrix Rotate
 *
 * Given a matrix (array of arrays), rotate the matrix 90 degrees clockwise.
 *
 * @param {number[][]} matrix - 2d int array.
 * @return {number[][]} rotated 2d int array.
 */
function rotate(matrix) {
  const n = matrix.length;
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }

  return rotated;
}