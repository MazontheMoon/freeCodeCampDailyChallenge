/*
FUNCTION getBestHand(cards):

    EXTRACT ranks and suits

    COUNT occurrences of each rank

    SORT ranks numerically

    CHECK:
        isFlush → all suits same
        isStraight → consecutive ranks (handle A as low too)

    GET frequency values sorted (e.g. [3,2], [2,2,1], etc.)

    IF isStraight AND isFlush:
        IF highest is Ace and includes T:
            RETURN "Royal Flush"
        RETURN "Straight Flush"

    IF frequency includes 4:
        RETURN "Four of a Kind"

    IF frequency is [3,2]:
        RETURN "Full House"

    IF isFlush:
        RETURN "Flush"

    IF isStraight:
        RETURN "Straight"

    IF frequency includes 3:
        RETURN "Three of a Kind"

    IF frequency is [2,2,1]:
        RETURN "Two Pair"

    IF frequency includes 2:
        RETURN "Pair"

    RETURN "High Card"
*/

/**
 * Determines the best poker hand from 5 cards.
 *
 * @param {string[]} cards - Array of 5 card strings (e.g., "Ah", "Ts")
 * @returns {string} Name of the best hand
 */
function getBestHand(cards) {
    const rankMap = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6,
        "7": 7, "8": 8, "9": 9, "T": 10,
        "J": 11, "Q": 12, "K": 13, "A": 14
    };

    const ranks = cards.map(c => rankMap[c[0]]);
    const suits = cards.map(c => c[1]);

    // Count ranks
    const count = {};
    for (const r of ranks) {
        count[r] = (count[r] || 0) + 1;
    }

    const freq = Object.values(count).sort((a, b) => b - a);

    // Check flush
    const isFlush = suits.every(s => s === suits[0]);

    // Check straight
    const sorted = [...new Set(ranks)].sort((a, b) => a - b);

    let isStraight = false;

    if (sorted.length === 5) {
        // normal straight
        isStraight = sorted[4] - sorted[0] === 4;

        // Ace low (A=14 → treat as 1)
        if (!isStraight && sorted.includes(14)) {
            const lowAce = sorted.map(r => r === 14 ? 1 : r).sort((a, b) => a - b);
            isStraight = lowAce[4] - lowAce[0] === 4;
        }
    }

    // Royal Flush
    if (isFlush && isStraight && Math.min(...ranks) === 10) {
        return "Royal Flush";
    }

    if (isFlush && isStraight) return "Straight Flush";
    if (freq[0] === 4) return "Four of a Kind";
    if (freq[0] === 3 && freq[1] === 2) return "Full House";
    if (isFlush) return "Flush";
    if (isStraight) return "Straight";
    if (freq[0] === 3) return "Three of a Kind";
    if (freq[0] === 2 && freq[1] === 2) return "Two Pair";
    if (freq[0] === 2) return "Pair";

    return "High Card";
}
