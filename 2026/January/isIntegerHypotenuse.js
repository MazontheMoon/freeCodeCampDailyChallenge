// Calculate a squared plus b squared
// Take the square root of that value
// Check if the result is an integer
// Return true or false

function isIntegerHypotenuse(a, b) {
  const sumOfSquares = a * a + b * b;
  const hypotenuse = Math.sqrt(sumOfSquares);

  return Number.isInteger(hypotenuse);
}
