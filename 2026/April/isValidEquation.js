// PSEUDOCODE
// function isValidEquation(str)
//   split into left and right
//
//   parse left into tokens (numbers and operators)
//
//   first pass:
//     handle * and /
//
//   second pass:
//     handle + and -
//
//   compare result with right side
//
//   return true/false

/**
 * Validates a simple math equation string
 * @param {string} str
 * @returns {boolean}
 */
function isValidEquation(str) {
  const [left, right] = str.split("=");
  const target = Number(right.trim());

  const tokens = left.trim().split(" ");

  // Step 1: handle * and /
  let stack = [Number(tokens[0])];

  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const num = Number(tokens[i + 1]);

    if (op === "*") {
      stack[stack.length - 1] *= num;
    } else if (op === "/") {
      stack[stack.length - 1] /= num;
    } else {
      stack.push(op);
      stack.push(num);
    }
  }

  // Step 2: handle + and -
  let result = stack[0];

  for (let i = 1; i < stack.length; i += 2) {
    const op = stack[i];
    const num = stack[i + 1];

    if (op === "+") result += num;
    else result -= num;
  }

  return result === target;
}
