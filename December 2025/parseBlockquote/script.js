/**
 * Converts a Markdown blockquote line into an HTML blockquote.
 *
 * @param {string} markdown - A string that may contain a Markdown blockquote.
 * @returns {string} The HTML blockquote string, or the original string if not a blockquote.
 */
function parseBlockquote(markdown) {
  // Step 1: Remove leading spaces from the line
  // Step 2: Check if the line starts with ">"
  // Step 3: Remove the ">" character
  // Step 4: Trim spaces immediately after ">"
  // Step 5: Wrap the remaining text in <blockquote> tags

  const trimmedLine = markdown.trimStart();

  if (trimmedLine.startsWith(">")) {
    // Remove ">" and trim only the left side of the remaining text
    const quoteText = trimmedLine.slice(1).trimStart();

    return `<blockquote>${quoteText}</blockquote>`;
  }

  return markdown;
}