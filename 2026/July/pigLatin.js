function pigLatin(str) {
  const vowels = "aeiou";

  return str.split(" ").map(word => {
    const isCapitalized = word[0] === word[0].toUpperCase();
    const lowerWord = word.toLowerCase();

    if (vowels.includes(lowerWord[0])) {
      let result = lowerWord + "way";
      if (isCapitalized) {
        result = result[0].toUpperCase() + result.slice(1);
      }
      return result;
    }

    let i = 0;
    while (i < lowerWord.length && !vowels.includes(lowerWord[i])) {
      i++;
    }

    let result = lowerWord.slice(i) + lowerWord.slice(0, i) + "ay";

    if (isCapitalized) {
      result = result[0].toUpperCase() + result.slice(1);
    }

    return result;
  }).join(" ");
}