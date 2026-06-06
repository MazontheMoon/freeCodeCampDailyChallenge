// PSEUDOCODE:
// function isValidUserProfile(user)
//     validate all UserProfile rules
//
// function isValidSchema(obj)
//     if obj is not object → false
//     if users missing OR not array → false
//     for each user in users:
//         if not valid user profile → false
//     return true

/**
 * Validates a single UserProfile object.
 * @param {Object} user
 * @returns {boolean}
 */
function isValidUserProfile(user) {
    if (!user || typeof user !== "object") return false;

    if (!("username" in user) || typeof user.username !== "string") return false;
    if (!("posts" in user) || typeof user.posts !== "number") return false;
    if (!("verified" in user) || typeof user.verified !== "boolean") return false;
    if (!("role" in user) || typeof user.role !== "string") return false;

    const validRoles = ["user", "creator", "moderator", "staff", "admin"];
    if (!validRoles.includes(user.role)) return false;

    if ("supporter" in user && typeof user.supporter !== "boolean") return false;

    if (!("badges" in user) || !Array.isArray(user.badges)) return false;

    for (const badge of user.badges) {
        if (typeof badge !== "string") return false;
    }

    return true;
}

/**
 * Validates schema:
 * { users: UserProfile[] }
 *
 * @param {Object} obj
 * @returns {boolean}
 */
function isValidSchema(obj) {
    if (!obj || typeof obj !== "object") return false;

    if (!("users" in obj) || !Array.isArray(obj.users)) {
        return false;
    }

    for (const user of obj.users) {
        if (!isValidUserProfile(user)) {
            return false;
        }
    }

    return true;
}