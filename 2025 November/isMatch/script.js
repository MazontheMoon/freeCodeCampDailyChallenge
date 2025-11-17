/**
 * Determines whether two fingerprint strings are considered a match.
 *
 * Two fingerprints match if:
 *  - They are the same length.
 *  - They differ in no more than 10% of their character positions.
 *
 * @param {string} fingerprintA - The first fingerprint (lowercase a-z).
 * @param {string} fingerprintB - The second fingerprint (lowercase a-z).
 * @returns {boolean} True if the fingerprints match, false otherwise.
 */
function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) {
    return false;
  }

  let differences = 0;
  const maxAllowed = Math.floor(fingerprintA.length * 0.1);

  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      differences++;
    }
  }

  return differences <= maxAllowed;
}
