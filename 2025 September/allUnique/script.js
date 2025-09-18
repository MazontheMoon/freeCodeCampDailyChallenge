/*
Challenge - Unique Characters
Given a string, determine if all the characters in the string are unique.
- Uppercase and lowercase letters should be considered different characters.
*/

/**
 * Returns boolean if all characters(case-sensitive) are unique in a string.
 *
 * @param {string} str - a string of upper and lowercase characters.
 * @return {boolean} true if all characters are unique, else false.
 */

function allUnique(str) {
  return new Set(str).size === str.length;
}