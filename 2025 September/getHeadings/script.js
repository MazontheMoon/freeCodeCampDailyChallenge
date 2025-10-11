/**
 * Extracts and cleans the headings from the first line of a CSV string.
 *
 * The function takes the first line of a CSV-formatted string (e.g. `"name, age, city"`)
 * and returns an array of the headings (e.g. `["name", "age", "city"]`).
 * Each heading will have leading and trailing whitespace removed.
 *
 * @param {string} csv - The first line of a CSV file containing column headings separated by commas.
 * @returns {string[]} An array of cleaned headings.
 *
 * @example
 * getHeadings("name, age, city");
 * // Returns: ["name", "age", "city"]
 *
 * @example
 * getHeadings(" id , first_name , last_name ");
 * // Returns: ["id", "first_name", "last_name"]
 */
function getHeadings(csv) {
  if (typeof csv !== 'string') {
    throw new TypeError('Input must be a string.');
  }

  // Split by comma and trim whitespace from each heading
  return csv.split(',').map(heading => heading.trim());
}
