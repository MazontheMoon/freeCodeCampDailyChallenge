/*
Digits vs Letters
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.
 - Digits consist of 0-9.
 - Letters consist of a-z in upper or lower case.
 - Ignore any other characters.
*/

/**
 * Return the number of whole files the drive can fit.
 *
 * @param {string} str - alphanumeric string to evaluate
 * @return {string} Returns "digits", "letters", or "tie"
 **/

function digitsOrLetters(str) {
  let digitCount = 0;
  let letterCount = 0;

  for (let char of str) {
    if (/[0-9]/.test(char)) {
      digitCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      letterCount++;
    }
  }

  if (digitCount > letterCount) {
    return "digits";
  } else if (letterCount > digitCount) {
    return "letters";
  } else {
    return "tie";
  }
}
