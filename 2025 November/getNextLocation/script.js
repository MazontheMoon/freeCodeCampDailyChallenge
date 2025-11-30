/*
PSEUDOCODE:
1. Find coordinates of value 1 (previous ball position) and 2 (current ball position).
2. Compute movement vector: dx = curr.x - prev.x, dy = curr.y - prev.y.
3. Tentatively compute next position: nextX = curr.x + dx, nextY = curr.y + dy.
4. If next position is outside row bounds:
      reverse dx (horizontal direction).
   If next position is outside column bounds:
      reverse dy (vertical direction).
5. Recalculate nextX and nextY using potentially reversed dx/dy.
6. Return [nextX, nextY].
*/

/**
 * Determine the next location of a moving ball inside a bounded matrix.
 *
 * The matrix contains:
 *   - 2: the current ball location
 *   - 1: the previous ball location
 *
 * Movement direction is the vector from 1 → 2.  
 * Matrix edges act as walls that invert the movement direction:
 *   - Hitting left/right reverses horizontal movement.
 *   - Hitting top/bottom reverses vertical movement.
 *   - Hitting a corner reverses both.
 *
 * @param {number[][]} matrix - A 2D grid containing exactly one 1 and one 2.
 * @returns {[number, number]} - The [row, col] indices of the next ball position.
 */
function getNextLocation(matrix) {
  let prev = null;
  let curr = null;

  // Locate 1 and 2
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1) prev = [r, c];
      if (matrix[r][c] === 2) curr = [r, c];
    }
  }

  const [pr, pc] = prev;
  const [cr, cc] = curr;

  // Movement vector
  let dr = cr - pr;
  let dc = cc - pc;

  // Tentative next
  let nr = cr + dr;
  let nc = cc + dc;

  const maxR = matrix.length - 1;
  const maxC = matrix[0].length - 1;

  // Bounce on vertical walls
  if (nr < 0 || nr > maxR) {
    dr = -dr;
    nr = cr + dr;
  }

  // Bounce on horizontal walls
  if (nc < 0 || nc > maxC) {
    dc = -dc;
    nc = cc + dc;
  }

  return [nr, nc];
}
