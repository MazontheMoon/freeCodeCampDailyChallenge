/*
FUNCTION knightMoves(position)

  GET columnLetter from position
  GET rowNumber from position

  CONVERT columnLetter to columnNumber
  CONVERT rowNumber to integer

  DEFINE possibleKnightMoves as a list of (columnChange, rowChange) pairs

  SET count to 0

  FOR EACH (dx, dy) in possibleKnightMoves
    newColumn = columnNumber + dx
    newRow = rowNumber + dy

    IF newColumn is between 1 and 8
       AND newRow is between 1 and 8
      count = count + 1
    END IF
  END FOR

  RETURN count

END FUNCTION
*/

function knightMoves(position) {
  const col = position[0].charCodeAt(0) - "A".charCodeAt(0) + 1;
  const row = Number(position[1]);

  const moves = [
    [ 2,  1], [ 2, -1],
    [-2,  1], [-2, -1],
    [ 1,  2], [ 1, -2],
    [-1,  2], [-1, -2]
  ];

  let count = 0;

  for (let [dx, dy] of moves) {
    const newCol = col + dx;
    const newRow = row + dy;

    if (newCol >= 1 && newCol <= 8 && newRow >= 1 && newRow <= 8) {
      count++;
    }
  }

  return count;
}




