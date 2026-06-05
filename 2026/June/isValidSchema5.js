// PSEUDOCODE:
// function isValidSchema(obj)
//     if obj is not an object → false
//
//     validate required fields:
//         username → string
//         posts → number
//         verified → boolean
//         role → string AND in validRoles
//         badges → array AND all elements are strings
//
//     if supporter exists:
//         must be boolean
//
//     return true

/**
 * Validates schema with required fields, enum, optional field,
 * and array of strings.
 *
 * @param {Object} obj
 * @returns {boolean}
 */
function isValidSchema(obj) {
    if (!obj || typeof obj !== "object") {
        return false;
    }

    if (!("username" in obj) || typeof obj.username !== "string") {
        return false;
    }

    if (!("posts" in obj) || typeof obj.posts !== "number") {
        return false;
    }

    if (!("verified" in obj) || typeof obj.verified !== "boolean") {
        return false;
    }

    if (!("role" in obj) || typeof obj.role !== "string") {
        return false;
    }

    const validRoles = ["user", "creator", "moderator", "staff", "admin"];
    if (!validRoles.includes(obj.role)) {
        return false;
    }

    if ("supporter" in obj && typeof obj.supporter !== "boolean") {
        return false;
    }

    if (!("badges" in obj) || !Array.isArray(obj.badges)) {
        return false;
    }

    for (const badge of obj.badges) {
        if (typeof badge !== "string") {
            return false;
        }
    }

    return true;
}