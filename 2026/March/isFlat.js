/*
1. Loop through each element in the array.
2. If any element is an array:
      return false.
3. If loop completes:
      return true.
*/

function isFlat(arr) {
  return arr.every(element => !Array.isArray(element));
}
