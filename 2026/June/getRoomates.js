// PSEUDOCODE:
// function getRoommates(people)
//     create map: group → list of names
//     create list to track group order
//
//     for each person in people:
//         if group not in map:
//             add group to map and groupOrder
//         append name to group list
//
//     result = []
//
//     for each group in groupOrder:
//         names = group list
//         for i from 0 to length step 2:
//             if i+1 exists:
//                 add "name[i] and name[i+1]"
//             else:
//                 add "name[i]"
//
//     return result

/**
 * Assigns roommates based on group and order.
 *
 * @param {Array<{name: string, group: string}>} people
 * @returns {string[]}
 */
function getRoommates(people) {
    const groups = {};
    const groupOrder = [];

    for (const person of people) {
        if (!groups[person.group]) {
            groups[person.group] = [];
            groupOrder.push(person.group);
        }
        groups[person.group].push(person.name);
    }

    const result = [];

    for (const group of groupOrder) {
        const names = groups[group];

        for (let i = 0; i < names.length; i += 2) {
            if (i + 1 < names.length) {
                result.push(`${names[i]} and ${names[i + 1]}`);
            } else {
                result.push(names[i]);
            }
        }
    }

    return result;
}