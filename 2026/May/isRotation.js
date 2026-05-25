/*
FUNCTION isRotation(a, b):

    IF a == b:
        RETURN false

    SET maxLength = max(length of a, b)

    PAD a with leading zeros to maxLength
    PAD b with leading zeros to maxLength

    RETURN (b is substring of (a + a))


FUNCTION getOpenIssues(issues, prs):

    CREATE result array

    FOR each issue:
        SET issueStr = string(issue)

        SET isClosed = false

        FOR each pr:
            SET prStr = string(pr)

            IF isRotation(issueStr, prStr):
                isClosed = true
                BREAK

        IF not isClosed:
            ADD issue to result

    RETURN result
*/

/**
 * Returns open issues after matching PRs based on rotational equivalence.
 *
 * Two numbers match if:
 * - One is a rotation of the other (after zero-padding to equal length)
 * - They are not exactly identical
 *
 * @param {number[]} issues
 * @param {number[]} prs
 * @returns {number[]}
 */

function isRotation(a, b) {
    if (a === b) return false;

    const maxLength = Math.max(a.length, b.length);

    const paddedA = a.padStart(maxLength, "0");
    const paddedB = b.padStart(maxLength, "0");

    return (paddedA + paddedA).includes(paddedB);
}

function getOpenIssues(issues, prs) {
    const result = [];

    for (const issue of issues) {
        const issueStr = String(issue);

        let isClosed = false;

        for (const pr of prs) {
            const prStr = String(pr);

            if (isRotation(issueStr, prStr)) {
                isClosed = true;
                break;
            }
        }

        if (!isClosed) {
            result.push(issue);
        }
    }

    return result;
}
