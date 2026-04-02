// PSEUDOCODE
// function pascalRow(n)
//   row = [1]
//
//   for i from 1 to n-1
//     newRow = [1]
//
//     for j from 1 to row.length - 1
//       newRow[j] = row[j-1] + row[j]
//
//     append 1 to newRow
//     row = newRow
//
//   return row

/**
 * Returns the nth row of Pascal's Triangle
 * @param {number} n - Row number (1-based)
 * @returns {number[]} The nth row
 */
function pascalRow(n) {
  if (n === 1) return [1];

  let row = [1];

  for (let i = 2; i <= n; i++) {
    const newRow = [1];

    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1);
    row = newRow;
  }

  return row;
}
