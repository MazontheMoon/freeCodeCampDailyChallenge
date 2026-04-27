
/*
PSEUDOCODE:

function explodeFizzbuzz(targetZs):

    str = "fizzbuzz"
    steps = 0

    while countZs(str) < targetZs:
        newStr = ""

        for i from 0 to str.length - 1:
            pos = i + 1

            if pos % 15 == 0:
                newStr += "fizzbuzz"
            else if pos % 3 == 0:
                newStr += "fizz"
            else if pos % 5 == 0:
                newStr += "buzz"
            else:
                newStr += str[i]

        str = newStr
        steps++

    return steps
*/

/**
 * Returns number of steps to reach at least target number of 'z'
 *
 * @param {number} target
 * @returns {number}
 */
function explodeFizzbuzz(target) {
    let str = "fizzbuzz";
    let steps = 0;

    const countZs = s => (s.match(/z/g) || []).length;

    while (countZs(str) < target) {
        let next = "";

        for (let i = 0; i < str.length; i++) {
            const pos = i + 1;

            if (pos % 15 === 0) {
                next += "fizzbuzz";
            } else if (pos % 3 === 0) {
                next += "fizz";
            } else if (pos % 5 === 0) {
                next += "buzz";
            } else {
                next += str[i];
            }
        }

        str = next;
        steps++;
    }

    return steps;
}
