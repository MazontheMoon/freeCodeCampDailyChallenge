// PSEUDOCODE:
// function isValidSchema(obj)
//     if obj is not an object
//         return false
//
//     validate required fields:
//         username must be string
//         posts must be number
//         verified must be boolean
//         role must be string AND in validRoles
//
//     if "supporter" exists:
//         if not boolean
//             return false
//
//     return true

/**
 * Validates that an object matches the schema:
 * {
 *   username: string,
 *   posts: number,
 *   verified: boolean,
 *   role: "user" | "creator" | "moderator" | "staff" | "admin",
 *   supporter?: boolean
 * }
 * Extra keys are allowed.
 *
 * @param {Object} obj - Object to validate
 * @returns {boolean} True if valid, false otherwise
 */
function isValidSchema(obj) {a
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

    // Optional field check
    if ("supporter" in obj && typeof obj.supporter !== "boolean") {
        return false;
    }

    return true;
}
