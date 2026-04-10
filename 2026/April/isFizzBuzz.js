/*
PSEUDOCODE:
- Take input array
- Determine the starting number:
  - Loop through array
    - If element is a number:
      - starting number = element - index
      - break loop
- If no number found:
  - return false (cannot determine sequence)

- Loop through array again:
  - expectedNumber = starting number + current index

  - Determine expected value:
    - If divisible by 3 and 5 → "FizzBuzz"
    - Else if divisible by 3 → "Fizz"
    - Else if divisible by 5 → "Buzz"
    - Else → expectedNumber

  - Compare expected value with actual element:
    - If not equal → return false

- If all match → return true
*/

/**
 * Validates whether an array represents a correct FizzBuzz sequence.
 * @param {(number|string)[]} arr - The input array containing numbers and/or FizzBuzz strings.
 * @returns {boolean} True if valid FizzBuzz sequence, otherwise false.
 */
function isFizzBuzz(arr) {
  let start = null;

  // Find starting number
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      start = arr[i] - i;
      break;
    }
  }

  if (start === null) return false;

  for (let i = 0; i < arr.length; i++) {
    const num = start + i;

    let expected;
    if (num % 15 === 0) {
      expected = "FizzBuzz";
    } else if (num % 3 === 0) {
      expected = "Fizz";
    } else if (num % 5 === 0) {
      expected = "Buzz";
    } else {
      expected = num;
    }

    if (arr[i] !== expected) {
      return false;
    }
  }

  return true;
}
