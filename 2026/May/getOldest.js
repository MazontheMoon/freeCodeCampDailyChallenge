/*
PSEUDOCODE:

function getOldest(people):
    maxAge = -infinity
    result = empty list

    for each person:
        if person.age > maxAge:
            maxAge = person.age
            result = [person.name]
        else if person.age == maxAge:
            add person.name to result

    return result
*/

/**
 * Returns names of the oldest person(s).
 *
 * @param {{name: string, age: number}[]} people
 * @returns {string[]}
 */
function getOldest(people) {
    let maxAge = -Infinity;
    const result = [];

    for (const person of people) {
        if (person.age > maxAge) {
            maxAge = person.age;
            result.length = 0; // reset
            result.push(person.name);
        } else if (person.age === maxAge) {
            result.push(person.name);
        }
    }

    return result;
}
