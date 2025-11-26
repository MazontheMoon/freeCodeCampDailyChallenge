/* 
PSEUDOCODE:
1. If sequence is empty, return false.
2. For i from 1 to sequence.length:
     a. Determine expected value:
        - If i divisible by 15 → "FizzBuzz"
        - Else if i divisible by 3 → "Fizz"
        - Else if i divisible by 5 → "Buzz"
        - Else → i (integer)
     b. Compare expected value with sequence[i - 1].
        If mismatch, return false.
3. After loop, return true.
*/

/**
 * Determines whether a given array is a correct FizzBuzz sequence
 * from 1 to the array's last element.
 *
 * Rules:
 * - Multiples of 3 → "Fizz"
 * - Multiples of 5 → "Buzz"
 * - Multiples of both 3 and 5 → "FizzBuzz"
 * - All other positions contain their numeric index (1-based)
 * - Sequence must start at 1 and contain no missing or extra items
 *
 * @param {Array<string|number>} sequence - The candidate FizzBuzz sequence.
 * @returns {boolean} True if valid FizzBuzz sequence; otherwise false.
 */
function isFizzBuzz(sequence) {
  if (!Array.isArray(sequence) || sequence.length === 0) return false;

  for (let i = 1; i <= sequence.length; i++) {
    let expected;

    if (i % 15 === 0) expected = "FizzBuzz";
    else if (i % 3 === 0) expected = "Fizz";
    else if (i % 5 === 0) expected = "Buzz";
    else expected = i;

    if (sequence[i - 1] !== expected) return false;
  }

  return true;
}
