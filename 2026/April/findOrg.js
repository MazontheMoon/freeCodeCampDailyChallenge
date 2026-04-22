/*
PSEUDOCODE:

function findOrg(acronym):
    organizations = list of org names

    for each org in organizations:
        words = split org into words
        builtAcronym = ""

        for each word:
            add first letter to builtAcronym

        if builtAcronym == acronym:
            return org

    return "Organization not found"
*/

/**
 * Finds the organization name matching the given acronym.
 *
 * @param {string} acronym
 * @returns {string}
 */
function findOrg(acronym) {
    const orgs = [
        "National Avocado Storage Authority",
        "Cats Infiltration Agency",
        "Fluffy Beanbag Inspectors",
        "Department Of Jelly",
        "Wild Honey Organization",
        "Eating Pancakes Administration"
    ];

    for (const org of orgs) {
        const built = org
            .split(" ")
            .map(word => word[0])
            .join("");

        if (built === acronym) {
            return org;
        }
    }

    return "Organization not found";
}
