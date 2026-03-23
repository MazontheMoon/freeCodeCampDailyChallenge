
/*
PSEUDOCODE

function detectRoast(beans):

    total = 0

    for each char in beans:
        if char is "'":
            add 1 to total
        else if char is "-":
            add 2 to total
        else if char is ".":
            add 3 to total

    average = total / length of beans

    if average < 1.75:
        return "Light"
    else if average <= 2.5:
        return "Medium"
    else:
        return "Dark"
*/

/**
 * Determines the roast level of a coffee based on bean types.
 *
 * Bean values:
 * '  = 1 (light)
 * -  = 2 (medium)
 * .  = 3 (dark)
 *
 * The roast is determined by the average value:
 * - < 1.75 → Light
 * - 1.75 to 2.5 → Medium
 * - > 2.5 → Dark
 *
 * @param {string} beans - String representing coffee beans.
 * @returns {string} The roast level ("Light", "Medium", or "Dark").
 */
function detectRoast(beans) {
  const values = {
    "'": 1,
    "-": 2,
    ".": 3
  };

  let total = 0;

  for (const char of beans) {
    total += values[char];
  }

  const average = total / beans.length;

  if (average < 1.75) return "Light";
  if (average <= 2.5) return "Medium";
  return "Dark";
}