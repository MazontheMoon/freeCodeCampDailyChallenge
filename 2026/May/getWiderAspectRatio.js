/*
FUNCTION getWiderAspectRatio(dim1, dim2):

    PARSE dim1 into w1, h1
    PARSE dim2 into w2, h2

    CALCULATE ratio1 = w1 / h1
    CALCULATE ratio2 = w2 / h2

    IF ratio1 > ratio2:
        chosenWidth = w1
        chosenHeight = h1
    ELSE:
        chosenWidth = w2
        chosenHeight = h2

    FIND gcd of chosenWidth and chosenHeight

    REDUCE:
        width = chosenWidth / gcd
        height = chosenHeight / gcd

    RETURN "width:height"
*/

/**
 * Returns the reduced aspect ratio of the image with the greater width-to-height ratio.
 *
 * @param {string} dim1 - First dimension string (e.g., "1920x1080")
 * @param {string} dim2 - Second dimension string
 * @returns {string} Reduced aspect ratio (e.g., "16:9")
 */

function getWiderAspectRatio(dim1, dim2) {
    const parse = (dim) => dim.split("x").map(Number);

    const [w1, h1] = parse(dim1);
    const [w2, h2] = parse(dim2);

    const ratio1 = w1 / h1;
    const ratio2 = w2 / h2;

    const [w, h] = ratio1 > ratio2 ? [w1, h1] : [w2, h2];

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    const divisor = gcd(w, h);

    return `${w / divisor}:${h / divisor}`;
}
