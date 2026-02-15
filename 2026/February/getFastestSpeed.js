/**
 * Determines the fastest segment speed for a luger.
 *
 * @param {number[]} times - Array of 5 segment times in seconds
 * @returns {string}
 */
function getFastestSpeed(times) {
  const distances = [320, 280, 350, 300, 250];

  let maxSpeed = 0;
  let fastestSegment = 0;

  for (let i = 0; i < times.length; i++) {
    const speed = distances[i] / times[i];

    if (speed > maxSpeed) {
      maxSpeed = speed;
      fastestSegment = i + 1; // 1-based segment number
    }
  }

  return `The luger's fastest speed was ${maxSpeed.toFixed(2)} m/s on segment ${fastestSegment}.`;
}
