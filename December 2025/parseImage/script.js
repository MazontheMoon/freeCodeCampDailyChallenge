// PSEUDOCODE:
// 1. Find the start and end of the alt text inside the square brackets [ ]
// 2. Extract the alt text from the markdown string
// 3. Find the start and end of the image URL inside the parentheses ( )
// 4. Extract the image URL from the markdown string
// 5. Build and return the HTML img tag string
//    using the extracted src and alt values


/**
 * Converts a Markdown image string into an equivalent HTML img tag.
 *
 * @param {string} markdown - A Markdown image string (e.g. "![alt](url)")
 * @returns {string} An HTML img tag string
 */

function parseImage(markdown) {
  // Extract alt text
  const altStart = markdown.indexOf("[") + 1;
  const altEnd = markdown.indexOf("]");
  const altText = markdown.slice(altStart, altEnd);

  // Extract image URL
  const urlStart = markdown.indexOf("(") + 1;
  const urlEnd = markdown.indexOf(")");
  const imageUrl = markdown.slice(urlStart, urlEnd);

  // Return HTML img tag
  return `<img src="${imageUrl}" alt="${altText}">`;
}
