/*
FUNCTION iBeforeE(text):

    SPLIT text into words using spaces

    FOR EACH word in words:

        REPLACE all occurrences of:
            "ei" NOT preceded by "c" → "ie"

        REPLACE all occurrences of:
            "cie" → "cei"

    JOIN words back into a string with spaces

    RETURN result
*/

/**
 * Corrects words in a sentence to follow the "I before E except after C" rule.
 *
 * Rules:
 * - Replace "ei" with "ie" when NOT preceded by 'c'
 * - Replace "ie" with "ei" when preceded by 'c'
 *
 * @param {string} text - Input word or sentence.
 * @returns {string} Corrected string.
 */

function iBeforeE(text) {
    return text
        .split(" ")
        .map(word =>
            word
                // "ei" not after "c" → "ie"
                .replace(/(?<!c)ei/g, "ie")
                // "ie" after "c" → "ei"
                .replace(/cie/g, "cei")
        )
        .join(" ");
}
