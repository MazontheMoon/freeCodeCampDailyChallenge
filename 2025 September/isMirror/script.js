/*
String Mirror
Given two strings, determine if the second string is a mirror of the first.
- A string is considered a mirror if it contains the same letters in reverse order.
- Treat uppercase and lowercase letters as distinct.
- Ignore all non-alphabetical characters.
*/

/**
 * Return the number of whole files the drive can fit.
 *
 * @param {string} str - alphanumeric string to evaluate
 * @param {string} str2 - alphanumeric string to evaluate
 * @return {boolean} Returns true if str2 is a mirror of str1, false otherwise.
 **/

function isMirror(str1, str2) {
  // Keep only letters
  const onlyLetters1 = str1.replace(/[^a-zA-Z]/g, "");
  const onlyLetters2 = str2.replace(/[^a-zA-Z]/g, "");

  // Reverse str1's letters
  const reversed1 = onlyLetters1.split("").reverse().join("");

  // Compare
  return reversed1 === onlyLetters2;
}
