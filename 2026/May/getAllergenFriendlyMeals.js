/*
PSEUDOCODE:

function getAllergenFriendlyMeals(meals, avoid):
    avoidSet = set of avoid allergens
    result = empty list

    for each [mealName, allergens]:
        if none of allergens are in avoidSet:
            add mealName to result

    return result
*/

/**
 * Returns meals that do not contain any avoided allergens.
 *
 * @param {Array<[string, string[]]>} meals
 * @param {string[]} avoid
 * @returns {string[]}
 */
function getAllergenFriendlyMeals(meals, avoid) {
    const avoidSet = new Set(avoid);
    const result = [];

    for (const [name, allergens] of meals) {
        const hasAllergen = allergens.some(a => avoidSet.has(a));

        if (!hasAllergen) {
            result.push(name);
        }
    }

    return result;
}
