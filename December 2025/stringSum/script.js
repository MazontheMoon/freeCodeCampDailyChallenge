/*
PSEUDOCODE:
- Create a variable to keep track of the total sum
- Create a variable to build the current number as a string
- Loop through each character in the input string
    - If the character is a digit
        - Add it to the current number
    - Else (not a digit)
        - If there is a current number
            - Convert it to a number and add it to the sum
            - Reset the current number
- After the loop ends
    - If there is a current number left
        - Convert it to a number and add it to the sum
- Return the total sum
*/

/**
 * Calculates the sum of all numbers found in a string.
 *
 * Consecutive digits are treated as a single number.
 * Non-digit characters are ignored.
 *
 * @param {string} str - The input string containing digits and other characters
 * @returns {number} The sum of all numbers found in the string
 */

function stringSum(str) {
  let sum = 0;
  let currentNumber = "";

  for (let char of str) {
    if (char >= "0" && char <= "9") {
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        sum += Number(currentNumber);
        currentNumber = "";
      }
    }
  }

  // Handle a number at the end of the string
  if (currentNumber !== "") {
    sum += Number(currentNumber);
  }

  return sum;
}
