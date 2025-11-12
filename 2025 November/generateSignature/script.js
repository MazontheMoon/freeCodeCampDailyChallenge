/**
 * Generates an email signature string based on a person's name, title, and company.
 *
 * Prefix rules based on the first letter of the name (case-insensitive):
 *  - A–I: ">>"
 *  - J–R: "--"
 *  - S–Z: "::"
 *
 * @param {string} name - The full name of the person.
 * @param {string} title - The person's job title.
 * @param {string} company - The company the person works at.
 * @returns {string} A formatted email signature string.
 *
 * @example
 * generateSignature("Quinn Waverly", "Founder and CEO", "TechCo");
 * // returns "--Quinn Waverly, Founder and CEO at TechCo"
 */
function generateSignature(name, title, company) {
  const firstLetter = name.charAt(0).toUpperCase();
  let prefix;

  if (firstLetter >= 'A' && firstLetter <= 'I') {
    prefix = '>>';
  } else if (firstLetter >= 'J' && firstLetter <= 'R') {
    prefix = '--';
  } else if (firstLetter >= 'S' && firstLetter <= 'Z') {
    prefix = '::';
  } else {
    prefix = ''; // fallback if name doesn't start with a letter
  }

  return `${prefix}${name}, ${title} at ${company}`;
}
