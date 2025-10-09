/**
 * Determine whether a phone number is considered spam based on specific criteria.
 *
 * @param {string} number - The phone number in the format "+A (BBB) CCC-DDDD",
 * where:
 *   - A is the country code (1 or more digits)
 *   - BBB is the 3-digit area code
 *   - CCC-DDDD is the 7-digit local number
 *
 * @returns {boolean} Returns true if the number meets any spam criteria, false otherwise.
 *
 * Spam Criteria:
 * 1. The country code is longer than 2 digits or does not begin with 0.
 * 2. The area code is greater than 900 or less than 200.
 * 3. The sum of the first three digits of the local number (CCC)
 *    appears as a substring within the last four digits (DDDD).
 * 4. The number has the same digit repeated four or more times in a row
 *    (ignoring formatting symbols like +, (, ), space, and -).
 **/

function isSpam(number) {
  // Extract parts using regex
  const match = number.match(/^\+(\d+)\s+\((\d{3})\)\s+(\d{3})-(\d{4})$/);
  if (!match) return false; // Invalid format

  const [, countryCode, areaCode, firstLocal, lastLocal] = match.map(Number.isNaN ? String : String);

  // Convert to numbers where needed
  const cc = parseInt(match[1], 10);
  const area = parseInt(match[2], 10);
  const first3 = match[3];
  const last4 = match[4];

  // 1️⃣ Country code longer than 2 digits OR doesn’t start with 0
  if (match[1].length > 2 || !match[1].startsWith("0")) return true;

  // 2️⃣ Area code > 900 or < 200
  if (area > 900 || area < 200) return true;

  // 3️⃣ Sum of first three digits of local number appears within last four digits
  const sumFirst3 = first3
    .split("")
    .reduce((sum, d) => sum + parseInt(d, 10), 0)
    .toString();

  if (last4.includes(sumFirst3)) return true;

  // 4️⃣ Same digit appears 4+ times in a row (ignore formatting)
  const digitsOnly = number.replace(/\D/g, "");
  if (/(.)\1{3,}/.test(digitsOnly)) return true;

  // If none of the spam criteria matched
  return false;
}

