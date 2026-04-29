/*
PSEUDOCODE:

function parseUrlQuery(url):
    if no "?":
        return empty object

    query = substring after "?"
    pairs = split query by "&"

    result = empty object

    for each pair:
        split by "=" into key and value
        store in result

    return result
*/

/**
 * Parses a URL query string into an object.
 *
 * @param {string} url
 * @returns {Object}
 */
function parseUrlQuery(url) {
    const result = {};

    const queryIndex = url.indexOf("?");
    if (queryIndex === -1) return result;

    const query = url.slice(queryIndex + 1);
    const pairs = query.split("&");

    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        result[key] = value;
    }

    return result;
}
