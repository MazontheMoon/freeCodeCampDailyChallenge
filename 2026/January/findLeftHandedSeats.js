/*
PSEUDOCODE:
- Initialize a counter to 0
- Loop through each row
- Loop through each seat in the row
- If the seat is not "U", skip it
- Determine where "left" is based on the row:
    - Top row: check seat to the right
    - Bottom row: check seat to the left
- If there is no seat to the left OR
  the seat to the left is not "R":
    - Increment the counter
- Return the counter
*/

function findLeftHandedSeats(table) {
  let count = 0;

  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {

      // Only consider unoccupied seats
      if (table[row][col] !== "U") continue;

      let leftSeat;

      if (row === 0) {
        // Top row faces down → left is to the right
        leftSeat = table[row][col + 1];
      } else {
        // Bottom row faces up → left is to the left
        leftSeat = table[row][col - 1];
      }

      // If no left seat or left seat is not "R"
      if (leftSeat !== "R") {
        count++;
      }
    }
  }

  return count;
}
