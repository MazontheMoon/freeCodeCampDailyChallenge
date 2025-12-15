/*
PSEUDOCODE

FUNCTION parseBold(markdown)
    FIND bold text wrapped in ** or __
        - text must NOT start or end with a space
    REPLACE valid bold markdown with <b>text</b>
    LEAVE invalid markdown unchanged
    RETURN the updated string
END FUNCTION
*/

/**
 * Converts valid Markdown bold syntax into HTML <b> tags.
 *
 * Valid bold text:
 * - Wrapped in **double asterisks** or __double underscores__
 * - No spaces directly inside the opening or closing symbols
 *
 * Invalid examples (left unchanged):
 * - "** not bold**"
 * - "**not bold **"
 *
 * @param {string} markdown - A string that may contain Markdown bold text
 * @returns {string} The string with valid Markdown bold converted to HTML
 */
function parseBold(markdown) {
  // Match **bold** where leading/trailing spaces are NOT allowed
  let result = markdown.replace(
    /\*\*([^\s][^*]*?[^\s])\*\*/g,
    "<b>$1</b>"
  );

  // Match __bold__ where leading/trailing spaces are NOT allowed
  result = result.replace(
    /__([^\s][^_]*?[^\s])__/g,
    "<b>$1</b>"
  );

  return result;
}
