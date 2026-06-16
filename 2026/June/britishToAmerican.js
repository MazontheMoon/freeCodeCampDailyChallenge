/*
PSEUDOCODE:
1. Create mapping of British → American roots
2. Build a regex that matches any of these roots (case-insensitive)
3. For each match:
   a. Replace the matched root with American equivalent
   b. Preserve casing of first letter
4. Return updated sentence
*/

/**
 * Converts British English spellings to American equivalents.
 *
 * @param {string} sentence
 * @returns {string}
 */
function britishToAmerican(sentence) {
  const map = {
    "colour": "color",
    "flavour": "flavor",
    "honour": "honor",
    "neighbour": "neighbor",
    "labour": "labor",
    "humour": "humor",
    "centre": "center",
    "fibre": "fiber",
    "defence": "defense",
    "offence": "offense",
    "organise": "organize",
    "recognise": "recognize",
    "analyse": "analyze"
  };

  const regex = new RegExp(Object.keys(map).join("|"), "gi");

  return sentence.replace(regex, (match) => {
    const lower = match.toLowerCase();
    let replacement = map[lower];

    // Preserve capitalization
    if (match[0] === match[0].toUpperCase()) {
      replacement =
        replacement[0].toUpperCase() + replacement.slice(1);
    }

    return replacement;
  });
}