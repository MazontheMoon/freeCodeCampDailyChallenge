// PSEUDOCODE
// function isValidIsbn10(str)
//   remove all hyphens
//
//   if length is not 10 → return false
//
//   for first 9 characters
//     if not digit → return false
//
//   if last character is digit → value = digit
//   else if last character is 'X' → value = 10
//   else → return false
//
//   sum = 0
//
//   for i from 0 to 9
//     digitValue = numeric value of character
//     sum += digitValue * (i + 1)
//
//   if sum % 11 === 0 → return true
//   else → return false

/**
 * Validates an ISBN-10 string
 * @param {string} str - ISBN string (may include hyphens)
 * @returns {boolean} True if valid ISBN-10
 */
function isValidIsbn10(str) {
  const cleaned = str.replace(/-/g, "");

  if (cleaned.length !== 10) return false;

  // First 9 must be digits
  for (let i = 0; i < 9; i++) {
    if (!/\d/.test(cleaned[i])) return false;
  }

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    let value;

    if (i === 9 && cleaned[i] === "X") {
      value = 10;
    } else if (/\d/.test(cleaned[i])) {
      value = parseInt(cleaned[i]);
    } else {
      return false;
    }

    sum += value * (i + 1);
  }

  return sum % 11 === 0;
}
