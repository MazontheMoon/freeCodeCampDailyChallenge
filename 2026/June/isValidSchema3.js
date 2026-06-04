// PSEUDOCODE:
// function isValidSchema(obj)
//     if obj is not an object
//         return false
//     
//     if username missing OR not string
//         return false
//     
//     if posts missing OR not number
//         return false
//     
//     if verified missing OR not boolean
//         return false
//     
//     if role missing OR not string
//         return false
//     
//     validRoles = ["user", "creator", "moderator", "staff", "admin"]
//     if role not in validRoles
//         return false
//     
//     return true

/**
 * Validates that an object matches the schema:
 * {
 *   username: string,
 *   posts: number,
 *   verified: boolean,
 *   role: "user" | "creator" | "moderator" | "staff" | "admin"
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

    if (!("role" in obj) || typeof obj.role !== "string") {
        return false;
    }

    const validRoles = ["user", "creator", "moderator", "staff", "admin"];
    if (!validRoles.includes(obj.role)) {
        return false;
    }

    return true;
}
