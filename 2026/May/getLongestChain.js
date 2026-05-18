/*
PSEUDOCODE:

function getLongestChain(dominoes):

    bestChain = []

    function dfs(currentEnd, used, currentChain):

        if currentChain longer than best:
            update best

        for each domino not used:
            if it can connect:
                mark used
                recurse
                unmark used

    for each domino:
        try both orientations as starting point

    return bestChain
*/

/**
 * Returns the longest valid domino chain.
 *
 * @param {number[][]} dominoes
 * @returns {number[][]}
 */
function getLongestChain(dominoes) {
    let best = [];

    function dfs(end, used, chain) {
        if (chain.length > best.length) {
            best = chain.map(d => [...d]);
        }

        for (let i = 0; i < dominoes.length; i++) {
            if (used[i]) continue;

            let [a, b] = dominoes[i];

            // try normal
            if (a === end) {
                used[i] = true;
                chain.push([a, b]);

                dfs(b, used, chain);

                chain.pop();
                used[i] = false;
            }

            // try flipped
            if (b === end) {
                used[i] = true;
                chain.push([b, a]);

                dfs(a, used, chain);

                chain.pop();
                used[i] = false;
            }
        }
    }

    for (let i = 0; i < dominoes.length; i++) {
        let used = Array(dominoes.length).fill(false);

        let [a, b] = dominoes[i];

        // start normal
        used[i] = true;
        dfs(b, used, [[a, b]]);
        used[i] = false;

        // start flipped
        used[i] = true;
        dfs(a, used, [[b, a]]);
        used[i] = false;
    }

    return best;
}
