/*
FUNCTION mongoIdToDate(mongoId):
    EXTRACT first 8 characters from mongoId → timestampHex

    CONVERT timestampHex from base-16 to integer → timestampSeconds

    CONVERT timestampSeconds to milliseconds → timestampMillis
        (timestampSeconds * 1000)

    CREATE date object using timestampMillis

    RETURN date in ISO 8601 string format
*/
/**
 * Converts a MongoDB ObjectId string into its creation timestamp (ISO 8601 format).
 *
 * A MongoDB ObjectId is a 24-character hexadecimal string where:
 * - The first 8 characters represent a Unix timestamp (in seconds).
 *
 * @param {string} mongoId - A 24-character MongoDB ObjectId string.
 * @returns {string} ISO 8601 formatted date string.
 * @throws {Error} If the input is not a valid 24-character hex string.
 */
function mongoIdToDate(mongoId) {
    if (typeof mongoId !== "string" || mongoId.length !== 24) {
        throw new Error("Invalid MongoDB ID");
    }

    const timestampHex = mongoId.substring(0, 8);
    const timestampSeconds = parseInt(timestampHex, 16);
    const timestampMillis = timestampSeconds * 1000;

    return new Date(timestampMillis).toISOString();
}
