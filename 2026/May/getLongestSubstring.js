/*
PSEUDOCODE:

function getLongestSubstring(s):

    for length from s.length down to 1:
        seen = empty set

        for i from 0 to s.length - length:
            sub = substring(i, length)

            if sub in seen:
                return sub

            add sub to seen

    return ""
*/

/**
 * Returns the longest repeated substring (overlaps allowed).
 *
 * @param {string} s
 * @returns {string}
 */
function getLongestSubstring(s) {
    const n = s.length;

    for (let len = n - 1; len > 0; len--) {
        const seen = new Set();

        for (let i = 0; i <= n - len; i++) {
            const sub = s.slice(i, i + len);

            if (seen.has(sub)) {
                return sub;
            }

            seen.add(sub);
        }
    }

    return "";
}
