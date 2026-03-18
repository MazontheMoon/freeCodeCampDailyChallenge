/*
PSEUDOCODE

function getMilestone(years):

    define milestones as ordered list of (years, name)

    set result to "Newlyweds"

    for each milestone in milestones:
        if years >= milestone.years:
            update result to milestone.name
        else:
            break loop

    return result
*/

/**
 * Returns the most recent wedding anniversary milestone.
 *
 * Milestones are awarded at specific year thresholds. The function
 * returns the highest milestone that does not exceed the given years.
 * If no milestones are reached, "Newlyweds" is returned.
 *
 * @param {number} years - Number of years married.
 * @returns {string} The milestone name.
 */
function getMilestone(years) {
  const milestones = [
    [1, "Paper"],
    [5, "Wood"],
    [10, "Tin"],
    [25, "Silver"],
    [40, "Ruby"],
    [50, "Gold"],
    [60, "Diamond"],
    [70, "Platinum"]
  ];

  let result = "Newlyweds";

  for (const [milestoneYears, name] of milestones) {
    if (years >= milestoneYears) {
      result = name;
    } else {
      break;
    }
  }

  return result;
}