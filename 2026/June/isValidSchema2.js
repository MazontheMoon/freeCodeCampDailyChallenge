// PSEUDOCODE:
// function isValidSchema(obj)
//     if obj is not an object
//         return false
//     if "username" not in obj OR not a string
//         return false
//     if "posts" not in obj OR not a number
//         return false
//     if "verified" not in obj OR not a boolean
//         return false
//     return true

/**
 * Validates that an object matches the schema:
 * {
 *   username: string,
 *   posts: number,
 *   verified: boolean
 * }
 * Extra keys are allowed.
 *
 * @param {Object} obj - Object to validate
 * @returns {boolean} True if valid, false otherwise
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

    return true;
}
