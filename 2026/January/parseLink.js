/*
PSEUDOCODE:
- Find the text between the first '[' and the first ']'
- Find the text between the first '(' and the first ')'
- Return the HTML string:
    '<a href="link_url">link_text</a>'
*/

/**
 * Converts a Markdown link to an HTML <a> tag.
 *
 * @param {string} markdown - The Markdown link string
 * @returns {string} The HTML <a> tag string
 */

function parseLink(markdown) {
  const textStart = markdown.indexOf("[") + 1;
  const textEnd = markdown.indexOf("]");
  const linkText = markdown.slice(textStart, textEnd);

  const urlStart = markdown.indexOf("(", textEnd) + 1;
  const urlEnd = markdown.indexOf(")", urlStart);
  const linkUrl = markdown.slice(urlStart, urlEnd);

  return `<a href="${linkUrl}">${linkText}</a>`;
}

