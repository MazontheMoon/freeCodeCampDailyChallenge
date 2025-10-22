/**
 * Rearranges a sentence to sound like wise advice from a teacher.
 * 
 * Rules:
 * - Finds the first occurrence of one of ["have", "must", "are", "will", "can"].
 * - Moves all words before and including that keyword to the end.
 * - Adds a comma before the moved words.
 * - Keeps punctuation at the end.
 * - Capitalizes the new first word and ensures correct spacing.
 * 
 * @param {string} sentence - The sentence to transform. Ends with one punctuation mark.
 * @returns {string} - The transformed "wise" sentence.
 * 
 * @example
 * wiseSpeak("You must speak wisely."); // "Speak wisely, you must."
 */
function wiseSpeak(sentence) {
  const keywords = ["have", "must", "are", "will", "can"];

  // 1. Extract punctuation
  const punctuation = sentence[sentence.length - 1];
  const coreSentence = sentence.slice(0, -1);

  // 2. Split into words
  const words = coreSentence.split(" ");

  // 3. Find first keyword index (case-insensitive)
  const lowerWords = words.map(w => w.toLowerCase());
  const keywordIndex = lowerWords.findIndex(w => keywords.includes(w));

  // If no keyword found, return original sentence
  if (keywordIndex === -1) return sentence;

  // 4. Split parts
  const beforeKeyword = words.slice(0, keywordIndex + 1).map(w => w.toLowerCase());
  const afterKeyword = words.slice(keywordIndex + 1);

  // 5. Construct new sentence
  if (afterKeyword.length === 0) return sentence; // no words after keyword

  const firstWord = afterKeyword[0];
  afterKeyword[0] = firstWord[0].toUpperCase() + firstWord.slice(1);

  const newSentence = `${afterKeyword.join(" ")}, ${beforeKeyword.join(" ")}${punctuation}`;

  return newSentence;
}

//Example tests
console.log(wiseSpeak("You must speak wisely.")); // "Speak wisely, you must."
console.log(wiseSpeak("We can learn much from this.")); // "Learn much from this, we can."
console.log(wiseSpeak("They will understand someday!")); // "Understand someday, they will!"
console.log(wiseSpeak("I have faith.")); // "Faith, I have."