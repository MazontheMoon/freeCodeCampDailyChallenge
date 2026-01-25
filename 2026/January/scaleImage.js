/**
 * Scales an image's dimensions by a given factor.
 *
 * The dimensions are provided as a string in the format "WxH",
 * such as "800x600". Both width and height are multiplied by
 * the given scale value.
 *
 * @param {string} dimensions - The original dimensions in "WxH" format
 * @param {number} scale - The factor to scale the image by
 * @returns {string} The scaled dimensions in "WxH" format
 */
function scaleImage(dimensions, scale) {
  const parts = dimensions.split("x");

  const width = Number(parts[0]);
  const height = Number(parts[1]);

  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  return `${scaledWidth}x${scaledHeight}`;
}
