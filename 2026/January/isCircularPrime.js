/*
PSEUDOCODE:
- Convert the number to a string
- Store the length of the string
- For each possible rotation:
    - Convert the current string to a number
    - If it is not prime:
        - Return false
    - Rotate the string by moving the first character to the end
- If all rotations are prime:
    - Return true
*/

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


function isCircularPrime(n) {
  let str = n.toString();
  let length = str.length;

  for (let i = 0; i < length; i++) {
    const num = Number(str);

    if (!isPrime(num)) {
      return false;
    }

    // Rotate digits: move first char to the end
    str = str.slice(1) + str[0];
  }

  return true;
}
