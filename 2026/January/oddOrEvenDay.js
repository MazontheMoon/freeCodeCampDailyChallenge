/*
FUNCTION oddOrEvenDay(timestamp)
    CREATE a Date object from the timestamp
    GET the day of the month using UTC

    IF day is divisible by 2
        RETURN "even"
    ELSE
        RETURN "odd"
END FUNCTION
*/

/**
 * Determines whether the day of the month for a given Unix timestamp
 * is odd or even.
 *
 * The timestamp is given in milliseconds since the Unix epoch
 * (January 1, 1970, 00:00:00 UTC).
 *
 * @param {number} timestamp - Milliseconds since the Unix epoch
 * @returns {string} "odd" if the day is odd, "even" if the day is even
 */
function oddOrEvenDay(timestamp) {
  const date = new Date(timestamp);
  const dayOfMonth = date.getUTCDate();

  return dayOfMonth % 2 === 0 ? "even" : "odd";
}

