
/**
 * Remove all HTML tags (including <script> and <style> blocks)
 * and decode basic HTML entities.
 *
 * @param {string} html - A string containing valid HTML.
 * @returns {string} The plain text content.
 *
 * @example
 * stripTags('<p>Hello &amp; welcome!</p>'); // -> 'Hello & welcome!'
 * @example
 * stripTags('<style>p{}</style><p>1 &lt; 2</p>'); // -> '1 < 2'
 */
function stripTags(html) {
  // 1. Remove <script> and <style> blocks
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    // 2. Remove all remaining tags
    .replace(/<[^>]*>/g, '');

  // 3. Decode common HTML entities
  const entities = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' '
  };

  text = text.replace(/&([a-z]+);/gi, (match, entity) => {
    return entities[entity.toLowerCase()] || match;
  });

  // 4. Trim extra whitespace
  return text.trim();
}