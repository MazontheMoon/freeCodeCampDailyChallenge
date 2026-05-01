/*
PSEUDOCODE:

function groupAnagrams(words):
    map = empty map

    for each word:
        key = sorted characters of word

        if key not in map:
            map[key] = empty list

        add word to map[key]

    return all values of map
*/

/**
 * Groups words into anagrams.
 *
 * @param {string[]} words
 * @returns {string[][]}
 */
function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}
