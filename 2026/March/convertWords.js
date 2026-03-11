function convertWords(str) {
  const words = str.split(" ");
  const lengths = words.map(word => word.length);
  return lengths.join(" ");
}