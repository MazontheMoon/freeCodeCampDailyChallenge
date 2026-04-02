// PSEUDOCODE
// function capitalizeFibonacci(str)
//   generate Fibonacci numbers up to str.length
//   store them in a set for fast lookup
//
//   result = ""
//
//   for each index i in string
//     char = str[i]
//
//     if char is a letter
//       if i is in Fibonacci set
//         uppercase char
//       else
//         lowercase char
//     else
//       keep char unchanged
//
//   return result

/**
 * Capitalizes letters at Fibonacci indices
 * @param {string} str
 * @returns {string}
 */
function capitalizeFibonacci(str) {
  // Step 1: generate Fibonacci indices
  const fibSet = new Set([0, 1]);
  let a = 0, b = 1;

  while (b < str.length) {
    const next = a + b;
    fibSet.add(next);
    a = b;
    b = next;
  }

  // Step 2: build result
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-zA-Z]/.test(char)) {
      if (fibSet.has(i)) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    } else {
      result += char;
    }
  }

  return result;
}
