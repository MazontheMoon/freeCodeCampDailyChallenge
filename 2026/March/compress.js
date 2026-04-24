/*
PSEUDOCODE:

function compress(str):
    words = split string
    map = empty map
    result = empty list

    for i from 0 to words.length:
        word = words[i]

        if word not in map:
            map[word] = i + 1   // <-- key change
            add word
        else:
            add map[word]

    return joined result
*/

/**
 * Correct version
 */
function compress(str) {
    const words = str.split(" ");
    const map = new Map();
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (!map.has(word)) {
            map.set(word, i + 1); // 🔥 actual position
            result.push(word);
        } else {
            result.push(String(map.get(word)));
        }
    }

    return result.join(" ");
}
