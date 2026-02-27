/*
1. Get number of rows and columns.
2. Flatten matrix into a single array.
3. Compute total number of elements.
4. Normalize shift:
     shift = shift % total
     if shift < 0:
         shift += total
5. Rotate array right by shift:
     newArray = last "shift" elements + remaining front elements
6. Rebuild matrix row-by-row using original column count.
7. Return rebuilt matrix.
*/

function shiftMatrix(matrix, shift) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Flatten
  const flat = matrix.flat();
  const total = flat.length;

  // Normalize shift (handles negatives & large shifts)
  shift = ((shift % total) + total) % total;

  // Rotate right
  const rotated = flat.slice(-shift).concat(flat.slice(0, total - shift));

  // Rebuild matrix
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push(rotated.slice(i * cols, (i + 1) * cols));
  }

  return result;
}
