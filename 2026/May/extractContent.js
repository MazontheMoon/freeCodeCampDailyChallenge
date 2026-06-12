/*
PSEUDOCODE:
1. Take the input HTML string
2. Remove all HTML tags using a pattern that matches anything between < and >
3. Replace multiple whitespace characters with a single space
4. Trim leading and trailing whitespace
5. Return the cleaned string
*/

/**
 * Extracts plain text content from an HTML string by removing all tags.
 *
 * @param {string} html - The HTML string to process
 * @returns {string} The plain text content with all HTML tags removed
 */
function extractContent(html) {
  if (!html) return '';

  return html
    .replace(/<[^>]*>/g, '')     // Remove all HTML tags
    .replace(/\s+/g, ' ')        // Normalize whitespace
    .trim();                     // Trim edges
}