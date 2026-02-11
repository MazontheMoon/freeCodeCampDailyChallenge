/**
 * Converts finish times into times behind the winner.
 *
 * @param {string[]} times - Array of times in "H:MM:SS" format (fastest to slowest)
 * @returns {string[]} Array of relative times
 */
function getRelativeResults(times) {
  // Convert time string to total seconds
  function toSeconds(time) {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  const winnerSeconds = toSeconds(times[0]);

  return times.map((time, index) => {
    if (index === 0) return "0";

    const diff = toSeconds(time) - winnerSeconds;

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    return `+${minutes}:${String(seconds).padStart(2, "0")}`;
  });
}
