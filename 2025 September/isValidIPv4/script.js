/*
Challenge - IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:
- It is between 0 and 255 inclusive.
- It does not have leading zeros (e.g. 0 is allowed, 01 is not).
- Only numeric characters are allowed.
*/

/**
 * Returns a boolean to say if it is a valid IPv4 address.
 *
 * @param {string} ipv4 - an IPv4 address.
 * @return {boolean} returns true if a valid IPv4 address.
 */

function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  
  if (parts.length !== 4) return false;

  for (const part of parts) {
    // Must be digits only
    if (!/^\d+$/.test(part)) return false;

    // No leading zeros unless single '0'
    if (part.length > 1 && part.startsWith("0")) return false;

    const num = Number(part);

    if (num < 0 || num > 255) return false;
  }

  return true;
}