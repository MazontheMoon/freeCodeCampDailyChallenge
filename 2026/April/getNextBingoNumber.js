/*
PSEUDOCODE:
- Take input string (e.g. "B10")
- Extract:
  - letter (first character)
  - number (remaining part as integer)

- Define bingo ranges in order: B, I, N, G, O

- Increment number by 1

- If incremented number exceeds current letter's max range:
  - Move to next letter in sequence
  - Set number to that letter's minimum range

- If current letter is "O" and number exceeds 75:
  - Wrap around to "B1"

- Return concatenation of new letter + number
*/

/**
 * Returns the next sequential bingo number.
 * @param {string} input - A bingo number (e.g. "B10").
 * @returns {string} The next bingo number in sequence.
 */
function getNextBingoNumber(input) {
  const letter = input[0];
  let number = parseInt(input.slice(1), 10);

  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
  };

  const order = ["B", "I", "N", "G", "O"];

  number++;

  if (number > ranges[letter][1]) {
    const currentIndex = order.indexOf(letter);

    if (letter === "O") {
      return "B1";
    }

    const nextLetter = order[currentIndex + 1];
    number = ranges[nextLetter][0];
    return nextLetter + number;
  }

  return letter + number;
}
