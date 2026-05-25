/*
FUNCTION guessNumber(secret, guess):

    IF guess == secret:
        RETURN "you got it!"

    IF guess < secret:
        RETURN "higher"

    ELSE:
        RETURN "lower"
*/

/**
 * Compares a guess against a secret number.
 *
 * Returns:
 * - "higher" if the secret number is greater than the guess
 * - "lower" if the secret number is less than the guess
 * - "you got it!" if the guess is correct
 *
 * @param {number} secret - The secret number.
 * @param {number} guess - The guessed number.
 * @returns {string} Result of the comparison.
 */

function guessNumber(secret, guess) {
    if (guess === secret) return "you got it!";
    if (guess < secret) return "higher";
    return "lower";
}
