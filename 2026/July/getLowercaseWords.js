function getLowercaseWords(str) {
  return str
    .split(" ")
    .filter(word => word === word.toLowerCase())
    .join(" ");
}