/*
PSEUDOCODE:
- Assume the array could be ascending and descending
- Loop through the array starting from index 1:
    - If the current value is less than the previous value:
        - It cannot be ascending
    - If the current value is greater than the previous value:
        - It cannot be descending
- After checking all elements:
    - If it is ascending, return "Ascending"
    - Else if it is descending, return "Descending"
    - Else return "Not sorted"
*

/**
 * Determines whether an array of numbers is sorted in ascending order,
 * descending order, or not sorted.
 *
 * @param {number[]} arr - An array of numbers
 * @returns {string} "Ascending", "Descending", or "Not sorted"
 */
function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      isAscending = false;
    }

    if (arr[i] > arr[i - 1]) {
      isDescending = false;
    }
  }

  if (isAscending) {
    return "Ascending";
  }

  if (isDescending) {
    return "Descending";
  }

  return "Not sorted";
}
