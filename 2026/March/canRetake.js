
/*
PSEUDOCODE

function canRetake(finished, current):

    convert both timestamps into date objects

    difference = current time - finished time (in milliseconds)

    convert difference to hours

    if difference >= 48 hours:
        return true
    else:
        return false
*/

/**
 * Determines whether a user can retake an exam based on a 48-hour cooldown.
 *
 * Timestamps are in ISO format: "YYYY-MM-DDTHH:MM:SS".
 *
 * @param {string} finished - Timestamp when exam was completed.
 * @param {string} current - Current timestamp.
 * @returns {boolean} True if at least 48 hours have passed, otherwise false.
 */
function canRetake(finished, current) {
  const finishedDate = new Date(finished);
  const currentDate = new Date(current);

  const diffMs = currentDate - finishedDate;
  const diffHours = diffMs / (1000 * 60 * 60);

  return diffHours >= 48;
}