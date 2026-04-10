// PSEUDOCODE
// function getRotation(n)
//   convert n to string
//   length = number of digits
//
//   current = string version
//
//   for i from 0 to length-1
//     num = convert current to number
//
//     if num % length === 0
//       return i
//
//     rotate string (move first char to end)
//
//   return "none"

/**
 * Finds first rotation divisible by digit count
 * @param {number} n
 * @returns {number|string}
 */
function getRotation(n) {
  let str = String(n);
  const len = str.length;

  let current = str;

  for (let i = 0; i < len; i++) {
    const num = Number(current);

    if (num % len === 0) {
      return i;
    }

    // rotate
    current = current.slice(1) + current[0];
  }

  return "none";
}
