/**
 * Determines whether a message fits within social media post length limits.
 *
 * Rules:
 * - "short post" if message length ≤ 40 characters
 * - "long post" if 41–80 characters
 * - "invalid post" if more than 80 characters
 *
 * @param {string} message - The text content of the post to evaluate.
 * @returns {string} - A description of the post length category:
 *                    "short post", "long post", or "invalid post".
 */
function canPost(message) {
  const length = message.length;

  if (length <= 40) {
    return "short post";
  } else if (length <= 80) {
    return "long post";
  } else {
    return "invalid post";
  }
}