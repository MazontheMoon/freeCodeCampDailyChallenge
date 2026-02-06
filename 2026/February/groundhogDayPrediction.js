/**
 * Returns the Groundhog Day weather prediction based on the given value.
 *
 * @param {*} appearance - A value representing whether the groundhog appeared
 * @returns {string} The groundhog's weather prediction
 */

function groundhogDayPrediction(appearance) {
  if (appearance === true) {
    return "Looks like we'll have six more weeks of winter.";
  }

  if (appearance === false) {
    return "It's going to be an early spring.";
  }

  return "No prediction this year.";
}
