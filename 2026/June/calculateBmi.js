/*
PSEUDOCODE

1. Receive weight (lbs) and height (inches).
2. Square the height.
3. Divide weight by (height squared).
4. Multiply the result by 703.
5. Round result to 1 decimal place.
6. Return the final value.
*/

/**
 * Calculates BMI from weight (lbs) and height (inches).
 *
 * @param {number} weight - Weight in pounds.
 * @param {number} height - Height in inches.
 * @returns {number} BMI rounded to one decimal place.
 */
function calculateBmi(weight, height) {

    const bmi = (weight / (height ** 2)) * 703;

    return Math.round(bmi * 10) / 10;
}
