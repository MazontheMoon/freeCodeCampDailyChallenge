/*
PSEUDOCODE:
- Take input string
- Check if string is equal to its reverse
  - If not equal:
    - Return "none"
- If it is a palindrome:
  - Get length of string
  - If length is odd:
    - Find middle index (length // 2)
    - Return character at that index
  - If length is even:
    - Find two middle indices (length/2 - 1 and length/2)
    - Return substring of those two characters
*/

/**
 * Determines if a string is a palindrome and returns its middle character(s).
 * @param {string} str - The input string to evaluate.
 * @returns {string} The middle character (odd length), middle two characters (even length),
 * or "none" if the string is not a palindrome.
 */
function palindromeLocator(str) {
  const reversed = str.split('').reverse().join('');
  
  if (str !== reversed) {
    return "none";
  }

  const len = str.length;

  if (len % 2 === 1) {
    return str[Math.floor(len / 2)];
  } else {
    return str.slice(len / 2 - 1, len / 2 + 1);
  }
}
