/**
 * Calculates the Goldilocks zone (habitable zone) around a star.
 *
 * The Goldilocks zone is the region where conditions are "just right"
 * for liquid water to exist.
 *
 * Calculation steps:
 * 1. Luminosity = mass^3.5
 * 2. Start of zone = 0.95 * √luminosity
 * 3. End of zone = 1.37 * √luminosity
 * 4. Round both distances to two decimal places
 *
 * @param {number} mass - Mass of the star in solar masses (must be non-negative).
 * @returns {[number, number]} Array containing [start, end] of the Goldilocks zone in AU.
 *
 * @throws {TypeError} If the input is not a number.
 * @throws {RangeError} If the mass is negative.
 *
 * @example
 * goldilocksZone(1);
 * // Returns: [0.95, 1.37]
 *
 * @example
 * goldilocksZone(2);
 * // Luminosity = 2^3.5 ≈ 11.3137 → start ≈ 3.19, end ≈ 4.61 → Returns: [3.19, 4.61]
 */
function goldilocksZone(mass) {
  if (typeof mass !== 'number' || isNaN(mass)) {
    throw new TypeError('Mass must be a number.');
  }

  if (mass < 0) {
    throw new RangeError('Mass cannot be negative.');
  }

  const luminosity = Math.pow(mass, 3.5);
  const start = 0.95 * Math.sqrt(luminosity);
  const end = 1.37 * Math.sqrt(luminosity);

  // Round to 2 decimal places
  return [parseFloat(start.toFixed(2)), parseFloat(end.toFixed(2))];
}