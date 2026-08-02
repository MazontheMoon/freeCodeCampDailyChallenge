function isValidNumber(str, base) {
  str = str.toUpperCase();

  for (const char of str) {
    let value;

    if (char >= "0" && char <= "9") {
      value = char.charCodeAt(0) - "0".charCodeAt(0);
    } else if (char >= "A" && char <= "Z") {
      value = char.charCodeAt(0) - "A".charCodeAt(0) + 10;
    } else {
      return false;
    }

    if (value >= base) {
      return false;
    }
  }

  return true;
}