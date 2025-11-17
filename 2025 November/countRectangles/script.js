/**
 * Counts the number of axis-aligned rectangles that can be formed
 * inside a width × height rectangle. Only rectangles with integer
 * dimensions are counted.
 *
 * @param {number} width - The width of the rectangle (positive integer).
 * @param {number} height - The height of the rectangle (positive integer).
 * @returns {number} The total number of distinct rectangles.
 */
function countRectangles(width, height) {
  const horizontal = (width * (width + 1)) / 2;
  const vertical = (height * (height + 1)) / 2;
  return horizontal * vertical;
}
