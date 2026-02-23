
/*
PSEUDOCODE:

1. Extract the letter portion and Rh factor from donor.
2. Extract the letter portion and Rh factor from recipient.

3. Check LETTER compatibility:
   - If donor letter is "O" → valid for all letters.
   - If donor letter is "A" → recipient must be "A" or "AB".
   - If donor letter is "B" → recipient must be "B" or "AB".
   - If donor letter is "AB" → recipient must be "AB".
   - Otherwise → not compatible.

4. Check RH compatibility:
   - If donor Rh is "-" → valid for both "-" and "+".
   - If donor Rh is "+" → recipient must be "+".
   - Otherwise → not compatible.

5. Return true only if BOTH letter and Rh rules pass.
*/

/**
 * Determines whether a donor blood type can donate to a recipient blood type.
 *
 * Blood types consist of:
 * - A letter type: "A", "B", "AB", or "O"
 * - An Rh factor: "+" or "-"
 *
 * Compatibility Rules:
 * Letter compatibility:
 * - O → can donate to A, B, AB, O
 * - A → can donate to A, AB
 * - B → can donate to B, AB
 * - AB → can donate only to AB
 *
 * Rh compatibility:
 * - Negative (-) → can donate to both - and +
 * - Positive (+) → can donate only to +
 *
 * Both letter and Rh rules must pass.
 *
 * @param {string} donor - Donor blood type (e.g., "A+", "O-")
 * @param {string} recipient - Recipient blood type (e.g., "AB+", "B-")
 * @returns {boolean} True if donor can donate to recipient, otherwise false.
 */
 
 function canDonate(donor, recipient) {
  // Extract letter and Rh factor
  const donorLetter = donor.slice(0, -1);
  const donorRh = donor.slice(-1);

  const recipientLetter = recipient.slice(0, -1);
  const recipientRh = recipient.slice(-1);

  // LETTER RULES
  let letterCompatible = false;

  if (donorLetter === "O") {
    letterCompatible = true;
  } else if (donorLetter === "A") {
    letterCompatible = recipientLetter === "A" || recipientLetter === "AB";
  } else if (donorLetter === "B") {
    letterCompatible = recipientLetter === "B" || recipientLetter === "AB";
  } else if (donorLetter === "AB") {
    letterCompatible = recipientLetter === "AB";
  }

  // RH RULES
  let rhCompatible = false;

  if (donorRh === "-") {
    rhCompatible = true;
  } else if (donorRh === "+") {
    rhCompatible = recipientRh === "+";
  }

  return letterCompatible && rhCompatible;
}