// PSEUDOCODE:
// function analyzeIdeas(ideas)
//     map each idea to { name, expected }
//     expected = ((o + 4r + p) / 6) * name.length
//     sort by expected ascending
//     return array of names

/**
 * Sorts ideas by expected completion time.
 *
 * @param {Array<[string, number, number, number]>} ideas
 * @returns {string[]}
 */
function analyzeIdeas(ideas) {
    return ideas
        .map(([name, o, r, p]) => {
            const expected = ((o + 4 * r + p) / 6) * name.length;
            return { name, expected };
        })
        .sort((a, b) => a.expected - b.expected)
        .map(item => item.name);
}