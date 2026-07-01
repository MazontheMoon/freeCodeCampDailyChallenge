function getLuckyNumber(name) {
  const [first, last] = name.split(" ");

  function countLetters(word) {
    let vowels = 0;
    let consonants = 0;

    for (const ch of word.toLowerCase()) {
      if ("aeiou".includes(ch)) {
        vowels++;
      } else {
        consonants++;
      }
    }

    return {
      vowels,
      consonants,
      length: word.length
    };
  }

  const a = countLetters(first);
  const b = countLetters(last);

  const smallValue =
    Math.min(a.vowels, b.vowels) *
    Math.min(a.consonants, b.consonants) *
    Math.min(a.length, b.length);

  const largeValue =
    Math.max(a.vowels, b.vowels) *
    Math.max(a.consonants, b.consonants) *
    Math.max(a.length, b.length);

  const lucky = largeValue - smallValue;

  return lucky === 0 ? 13 : lucky;
}