/**
 * Extracts attributes from a single valid HTML element string.
 *
 * Given an HTML element string, this function returns an array of strings,
 * where each string contains the attribute name and its corresponding value,
 * separated by a comma (e.g., "id, main").  
 * Attributes are returned in the order they appear in the element.
 * 
 * Examples:
 * ```js
 * extractAttributes('<div id="main" class="container" data-role="content">');
 * // ["id, main", "class, container", "data-role, content"]
 * 
 * extractAttributes('<img src="image.jpg" alt="photo">');
 * // ["src, image.jpg", "alt, photo"]
 * 
 * extractAttributes('<br>');
 * // []
 * ```
 *
 * @param {string} element - A string representing a single valid HTML element.
 * @returns {string[]} An array of attribute name-value pairs as strings.
 */
function extractAttributes(element) {
  const regex = /(\w[\w-]*)="([^"]*)"/g;
  const attributes = [];
  let match;

  while ((match = regex.exec(element)) !== null) {
    const [ , attr, value ] = match;
    attributes.push(`${attr}, ${value}`);
  }

  return attributes;
}