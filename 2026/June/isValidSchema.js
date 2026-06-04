// PSEUDOCODE:
// function isValidSchema(obj)
//     if obj does not have key "username"
//         return false
//     if type of obj.username is not string
//         return false
//     return true

/**
 * Checks if an object matches the required schema:
 * { username: string }
 * Extra keys are allowed.
 *
 * @param {Object} obj - The object to validate
 * @returns {boolean} True if valid, false otherwise
 */
function isValidSchema(obj) {
    if (!obj || typeof obj !== "object") {
        return false;
    }

    if (!("username" in obj)) {
        return false;
    }

    return typeof obj.username === "string";
}
