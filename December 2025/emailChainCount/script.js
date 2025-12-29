// PSEUDOCODE:
// 1. Convert the subject string to lowercase to make matching case-insensitive
// 2. Create a list of markers to look for ("fw:", "fwd:", "re:")
// 3. Create a counter to track total occurrences
// 4. For each marker:
//    - Search through the subject string
//    - Count how many times the marker appears
//    - Add the count to the total
// 5. Return the total count

/**
 * Counts how many times an email has been forwarded or replied to
 * based on markers found in the subject line.
 * Matching is case-insensitive.
 *
 * @param {string} subject - The email subject line
 * @returns {number} The total number of forward/reply markers found
 */

function emailChainCount(subject) {
  const markers = ["fw:", "fwd:", "re:"];
  const lowerSubject = subject.toLowerCase();
  let count = 0;

  for (let i = 0; i < markers.length; i++) {
    let index = lowerSubject.indexOf(markers[i]);

    while (index !== -1) {
      count++;
      index = lowerSubject.indexOf(markers[i], index + markers[i].length);
    }
  }

  return count;
}


