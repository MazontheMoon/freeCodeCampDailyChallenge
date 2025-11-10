/**
 * Returns the file extension from a given filename.
 *
 * The extension is the substring that appears after the last period ('.').
 * If the filename does not contain a period or ends with one, returns "none".
 *
 * @param {string} filename - The name of the file (e.g., "photo.png").
 * @returns {string} The file extension (e.g., "png"), or "none" if not applicable.
 */


function getExtension(filename) {
  // Check if there's no '.' or if the filename ends with '.'
  if (!filename.includes('.') || filename.endsWith('.')) {
    return 'none';
  }

  // Find the last '.' and get the substring after it
  const lastDotIndex = filename.lastIndexOf('.');
  return filename.slice(lastDotIndex + 1);
}
