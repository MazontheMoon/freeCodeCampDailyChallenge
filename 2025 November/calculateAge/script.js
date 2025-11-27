/*
  PSEUDOCODE:
  1. Parse the birthday string into year, month, day.
  2. Set the reference date to 2025-11-27.
  3. Compute age as referenceYear - birthYear.
  4. If the birthday has not occurred yet in 2025
       (birthMonth, birthDay > referenceMonth, referenceDay),
     subtract 1 from age.
  5. Return age.
*/

/**
 * Calculates a person's age as of November 27th, 2025.
 *
 * @param {string} birthday - A date string in the format YYYY-MM-DD.
 * @returns {number} The person's age on 2025-11-27.
 */
function calculateAge(birthday) {
  const [year, month, day] = birthday.split('-').map(Number);

  const refYear = 2025;
  const refMonth = 11;
  const refDay = 27;

  let age = refYear - year;

  const hasHadBirthday =
    month < refMonth || (month === refMonth && day <= refDay);

  if (!hasHadBirthday) {
    age -= 1;
  }

  return age;
}
