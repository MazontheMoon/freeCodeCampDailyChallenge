/**
 * Determines the winner between two teams based on word battles.
 *
 * Each team is represented by a sentence containing the same number of words.
 * Each word’s value is the sum of its letters:
 * - Lowercase letters (a–z) are worth 1–26.
 * - Uppercase letters (A–Z) are worth double their lowercase equivalents (2–52).
 *
 * Rules:
 * - Words battle in order: first vs first, second vs second, etc.
 * - The word with the higher total value wins that round.
 * - The team with more winning words wins overall.
 *
 * @param {string} ourTeam - The sentence representing our team (letters and spaces only).
 * @param {string} opponent - The sentence representing the opposing team.
 * @returns {string} "We win" if our team wins, "We lose" if our team loses, or "Draw" if tied.
 *
 * @example
 * battle("Cat Dog", "bat fog"); // "We lose"
 * @example
 * battle("Ace", "bad"); // "We win"
 */
function battle(ourTeam, opponent) {
  /**
   * Helper function to calculate a word's value.
   * @param {string} word
   * @returns {number}
   */
  function wordValue(word) {
    return [...word].reduce((sum, ch) => {
      const baseValue = ch.toLowerCase().charCodeAt(0) - 96; // a=1, b=2, etc.
      return sum + (ch === ch.toUpperCase() ? baseValue * 2 : baseValue);
    }, 0);
  }

  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");
  let ourWins = 0;
  let theirWins = 0;

  for (let i = 0; i < ourWords.length; i++) {
    const ourValue = wordValue(ourWords[i]);
    const theirValue = wordValue(opponentWords[i]);
    if (ourValue > theirValue) ourWins++;
    else if (theirValue > ourValue) theirWins++;
  }

  if (ourWins > theirWins) return "We win";
  if (theirWins > ourWins) return "We lose";
  return "Draw";
}