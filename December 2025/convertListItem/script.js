/*
PSEUDOCODE
1. Receive the input string `markdown`.
2. Try to match the pattern:
   - optional leading spaces,
   - a number (one or more digits),
   - a dot '.',
   - at least one space,
   - then the list item text (one or more characters).
3. If the string doesn't match exactly, return "Invalid format".
4. Parse the captured number; if parsed number < 1, return "Invalid format".
5. Trim leading/trailing whitespace from the captured text (so "1.   item  " -> "item").
6. Escape any HTML special characters in the text to avoid injection.
7. Return the text wrapped in <li>...</li>.
*/

/**
 * Convert a Markdown ordered-list item line into HTML <li> markup.
 *
 * A valid ordered list item must:
 *  - start with zero or more spaces,
 *  - then a number (one or more digits) and a period '.',
 *  - then at least one space,
 *  - then the list item text (non-empty).
 *
 * If the input doesn't match that exact format, returns the string "Invalid format".
 *
 * @param {string} markdown - Single-line string representing a Markdown ordered list item.
 * @returns {string} - Either "<li>...</li>" with the item text inside (HTML-escaped),
 *                     or the string "Invalid format".
 */
function convertListItem(markdown) {
  // Regular expression:
  // ^\s*      -> optional leading spaces at start of string
  // (\d+)     -> capture one or more digits (the list number)
  // \.        -> a literal dot
  // \s+       -> at least one space
  // (.+)      -> capture the rest of the line as the item text (must be at least one char)
  // $         -> end of string
  const match = markdown.match(/^\s*(\d+)\.\s+(.+)$/);

  if (!match) {
    return "Invalid format";
  }

  const numStr = match[1];          // the number as string (e.g. "01" or "3")
  const textRaw = match[2];         // the item text including any extra spaces

  const number = parseInt(numStr, 10);
  if (isNaN(number) || number < 1) {
    return "Invalid format";
  }

  // Normalize text: trim leading/trailing whitespace.
  const text = textRaw.trim();

  if (text.length === 0) {
    // Defensive: if the "text" part ends up empty after trimming, it's invalid.
    return "Invalid format";
  }

  // Escape HTML special characters to avoid producing unsafe/unexpected HTML.
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (ch) {
      switch (ch) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return ch;
      }
    });
  }

  return `<li>${escapeHtml(text)}</li>`;
}
