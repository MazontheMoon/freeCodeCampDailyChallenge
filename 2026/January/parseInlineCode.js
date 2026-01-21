/*
FUNCTION parseInlineCode(markdown)

  Find all occurrences of text wrapped in single backticks
  Replace each occurrence with the same text wrapped in <code> tags

  RETURN the updated string

END FUNCTION
*/

/**
 * Converts inline Markdown code blocks to HTML code tags.
 *
 * Inline code blocks are defined by text wrapped in single backticks (`).
 *
 * @param {string} markdown - A string containing Markdown inline code blocks.
 * @returns {string} The string with all inline code blocks converted to HTML.
 */

function parseInlineCode(markdown) {
  return markdown.replace(/`([^`]+)`/g, "<code>$1</code>");
}

