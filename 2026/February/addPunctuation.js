/*
1. Replace every occurrence of:
     space + uppercase letter
   with:
     period + space + uppercase letter

2. If string does not already end with a period:
     add a period at the end

3. Return the result
*/

function addPunctuation(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    if (
      current === " " &&
      next &&
      next >= "A" &&
      next <= "Z"
    ) {
      result += ".";
    }

    result += current;
  }

  if (!result.endsWith(".")) {
    result += ".";
  }

  return result;
}
