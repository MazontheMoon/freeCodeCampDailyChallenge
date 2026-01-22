/**
 * Returns the letter grade based on the average of exam scores.
 *
 * @param {number[]} scores - Array of exam scores
 * @returns {string} Letter grade
 */
function getAverageGrade(scores) {
  // Calculate total sum
  let total = 0;
  for (let score of scores) {
    total += score;
  }

  // Calculate average
  const average = total / scores.length;

  // Determine letter grade
  if (average >= 97) return "A+";
  if (average >= 93) return "A";
  if (average >= 90) return "A-";
  if (average >= 87) return "B+";
  if (average >= 83) return "B";
  if (average >= 80) return "B-";
  if (average >= 77) return "C+";
  if (average >= 73) return "C";
  if (average >= 70) return "C-";
  if (average >= 67) return "D+";
  if (average >= 63) return "D";
  if (average >= 60) return "D-";
  return "F";
}

	
	
