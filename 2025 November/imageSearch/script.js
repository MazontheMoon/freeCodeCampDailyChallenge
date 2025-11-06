/**
 * Performs a simple image search by returning all image names
 * that include the given search term (case-insensitive).
 *
 * @param {string[]} images - An array of image names to search through.
 * @param {string} term - The search term to match against image names.
 * @returns {string[]} An array of image names containing the search term.
 *
 * @example
 * imageSearch(["sunrise.png", "Sunset.jpg", "beach.PNG"], "sun");
 * // returns ["sunrise.png", "Sunset.jpg"]
 *
 * imageSearch(["cat.png", "dog.jpg", "parrot.gif"], "DOG");
 * // returns ["dog.jpg"]
 */
function imageSearch(images, term) {
  const lowerTerm = term.toLowerCase();
  return images.filter(image => image.toLowerCase().includes(lowerTerm));
}
