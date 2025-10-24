/**
 * Simulates a treasure-hunting dive at the given coordinates on a 2D ocean map.
 *
 * @param {string[][]} map - A 2D array representing the ocean floor.
 *   Each cell contains:
 *   - "-" for empty ocean
 *   - "O" for an unrecovered treasure piece
 *   - "X" for a found treasure piece
 * @param {number[]} coordinates - An array [row, column] representing the dive location.
 * @returns {"Empty" | "Found" | "Recovered"} The result of the dive:
 *   - "Empty" if no treasure is at the dive location.
 *   - "Found" if treasure was found but some parts remain unrecovered.
 *   - "Recovered" if the last piece of treasure was found.
 */


function dive(map, coordinates) {
  const [row, col] = coordinates;
  const cell = map[row][col];

  if (cell === '-') return 'Empty';
  if (cell === 'X') return 'Found'; // already found spot

  if (cell === 'O') {
    // Mark this treasure cell as found
    map[row][col] = 'X';

    // Check if any 'O' cells remain
    const unrecoveredExists = map.some(row => row.includes('O'));

    return unrecoveredExists ? 'Found' : 'Recovered';
  }
  
  //fallback
  return 'Empty';
}
