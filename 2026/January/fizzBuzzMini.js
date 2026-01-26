/*
FUNCTION fizzBuzzMini(number)
    IF number is divisible by 3 AND number is divisible by 5
        RETURN "FizzBuzz"
    ELSE IF number is divisible by 3
        RETURN "Fizz"
    ELSE IF number is divisible by 5
        RETURN "Buzz"
    ELSE
        RETURN number converted to string
END FUNCTION

*/

/**
 * Returns "Fizz" if divisible by 3, "Buzz" if divisible by 5,
 * "FizzBuzz" if divisible by both, or the number as a string otherwise.
 *
 * @param {number} number - The input number to check
 * @returns {string} The corresponding FizzBuzz string
 */
function fizzBuzzMini(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return String(number);
  }
}
