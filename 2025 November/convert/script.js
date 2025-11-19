/**
 * Converts a Markdown-style heading into an equivalent HTML heading tag.
 *
 * A valid Markdown heading must:
 *  - Start with optional leading spaces
 *  - Contain 1 to 6 '#' characters in a row
 *  - Have at least one space after the hashes
 *  - Follow with heading text
 *
 * Examples:
 *  convert("# Hello") → "<h1>Hello</h1>"
 *  convert("###   Hi there") → "<h3>Hi there</h3>"
 *
 * If the format is invalid, the function returns "Invalid format".
 *
 * @param {string} heading - The Markdown heading string to convert.
 * @returns {string} The converted HTML heading, or "Invalid format".
 */
function convert(heading) {
  // Regex explanation:
  // ^\s*       → optional leading spaces
  // (#{1,6})   → group of 1–6 '#' characters (captures heading level)
  // \s+        → at least one space
  // (.+)$      → the rest is heading text
  const pattern = /^\s*(#{1,6})\s+(.+)$/;

  const match = heading.match(pattern);
  if (!match) {
    return "Invalid format";
  }

  const hashes = match[1];
  const text = match[2];
  const level = hashes.length;

  return `<h${level}>${text}</h${level}>`;
}
