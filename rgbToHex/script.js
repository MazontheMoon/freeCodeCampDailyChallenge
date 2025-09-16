/*
Challenge - RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.
- Make any letters lowercase.
- Return a # followed by six characters. Don't use any shorthand values.
*/

/**
 * Returns a boolean if a sentence is a pangram with the given letters.
 *
 * @param {string} rgb - an rgb colour value.
 * @return {string} the hex equivalent of the rgb value.
 */

function rgbToHex(rgb) {
  // Extract numbers from the rgb string
  const matches = rgb.match(/\d+/g);
  if (!matches || matches.length !== 3) return null; // invalid input

  // Convert each number to 2-digit hex
  const hex = matches
    .map(num => {
      const n = parseInt(num, 10);
      if (n < 0 || n > 255) throw new Error("RGB value out of range");
      return n.toString(16).padStart(2, "0"); // pad single-digit hex
    })
    .join("");

  return `#${hex.toLowerCase()}`;
}
