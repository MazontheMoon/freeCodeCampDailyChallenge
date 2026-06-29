/*
PSEUDOCODE

1. Create an empty array to store the prime factors.
2. Start with a divisor of 2.
3. While the number is greater than 1:
    a. If the number is divisible by the divisor:
        - Add the divisor to the array.
        - Divide the number by the divisor.
    b. Otherwise:
        - Increase the divisor by 1.
4. Return the array of factors.
*/

/**
 * Returns the prime factorization of a positive integer.
 *
 * The returned array contains the prime factors in ascending order.
 *
 * @param {number} number - An integer greater than 1.
 * @returns {number[]} An array of prime factors.
 */
function primeFactorization(number) {

    const factors = [];
    let divisor = 2;

    while (number > 1) {

        if (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        } else {
            divisor++;
        }

    }

    return factors;
}
