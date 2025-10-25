/**
 * Returns the complementary DNA strand for a given DNA sequence.
 * In DNA, A ↔ T and C ↔ G.
 *
 * @param {string} strand - The DNA sequence consisting of the letters A, C, G, and T.
 * @returns {string} The complementary DNA strand.
 *
 * @example
 * complementaryDNA("ACGT"); // returns "TGCA"
 * @example
 * complementaryDNA("GATTACA"); // returns "CTAATGT"
 */

function complementaryDNA(strand) {
  const mapping = { A: "T", T: "A", C: "G", G: "C" };
  return [...strand].map(base => mapping[base] || "").join("");
}