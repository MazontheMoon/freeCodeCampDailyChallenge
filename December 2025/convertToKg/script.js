// FUNCTION convertToKgs(lbs)
//     1. Multiply lbs by 0.453592 to convert pounds to kilograms.
//     2. Round the kilogram value to two decimal places.
//     3. Ensure the kilogram value always shows exactly two decimal places.
//     4. Determine the correct singular/plural word for pounds.
//         - If lbs === 1, use "pound"
//         - Otherwise, use "pounds"
//     5. Determine the correct singular/plural word for kilograms.
//         - If the numeric value of kilograms === 1, use "kilogram"
//         - Otherwise, use "kilograms"
//     6. Build and return the final formatted string:
//         "(lbs) pound(s) equals (kgs) kilogram(s)."

/**
 * Converts a weight in pounds to kilograms and returns a descriptive string.
 *
 * The function:
 * - Converts pounds to kilograms using the formula: kg = lbs * 0.453592.
 * - Rounds the kilogram value to two decimal places.
 * - Always displays exactly two decimal digits.
 * - Uses singular or plural units depending on the value.
 *
 * @param {number} lbs - The weight in pounds.
 * @returns {string} A formatted string in the form:
 * "(lbs) pound(s) equals (kgs) kilogram(s)."
 */

function convertToKgs(lbs) {
  // Convert pounds to kilograms
  const kgs = lbs * 0.453592;

  // Round to 2 decimal places and force two digits
  const kgsFormatted = kgs.toFixed(2);

  // Determine correct unit for pounds
  const poundUnit = lbs === 1 ? "pound" : "pounds";

  // Determine correct unit for kilograms
  const kilogramUnit = Number(kgsFormatted) === 1 ? "kilogram" : "kilograms";

  // Build and return the final message
  return `${lbs} ${poundUnit} equals ${kgsFormatted} ${kilogramUnit}.`;
}