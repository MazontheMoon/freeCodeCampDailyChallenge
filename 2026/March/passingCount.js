/*
PSEUDOCODE

function passingCount(scores, passMark):

    count = 0

    for each score in scores:
        if score >= passMark:
            increment count

    return count
*/

/**
 * Counts how many students passed an exam.
 *
 * A student passes if their score is greater than or equal to the pass mark.
 *
 * @param {number[]} scores - Array of student scores.
 * @param {number} passMark - Minimum score required to pass.
 * @returns {number} Number of students who passed.
 */
function passingCount(scores, passMark) {
  let count = 0;

  for (const score of scores) {
    if (score >= passMark) {
      count++;
    }
  }

  return count;
}