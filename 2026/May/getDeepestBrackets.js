/*
PSEUDOCODE:

function getDeepestBrackets(str):
    stack = empty stack
    maxDepth = 0
    result = ""

    for i from 0 to str.length:
        if opening bracket:
            push index onto stack

            if stack size > maxDepth:
                maxDepth = stack size

        if closing bracket:
            start = pop from stack

            if (stack size + 1) == maxDepth:
                result = substring(start+1, i)

    return result
*/

/**
 * Returns the content inside the deepest nested brackets.
 *
 * @param {string} str
 * @returns {string}
 */
function getDeepestBrackets(str) {
    const stack = [];
    let maxDepth = 0;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if ("([{".includes(char)) {
            stack.push(i);

            if (stack.length > maxDepth) {
                maxDepth = stack.length;
            }
        } 
        else if (")]}".includes(char)) {
            const start = stack.pop();

            if (stack.length + 1 === maxDepth) {
                result = str.slice(start + 1, i);
            }
        }
    }

    return result;
}
