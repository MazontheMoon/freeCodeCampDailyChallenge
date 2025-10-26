/**
 * Converts a given number of seconds into a formatted time string.
 * 
 * The format follows these rules:
 * - Seconds are always two digits.
 * - Minutes omit leading zeros unless hours are present.
 * - Hours are only shown if greater than zero.
 * 
 * Examples:
 * - format(5)        → "0:05"
 * - format(65)       → "1:05"
 * - format(3605)     → "1:00:05"
 * 
 * @param {number} seconds - The total number of seconds to format.
 * @returns {string} A formatted time string in "H:MM:SS" or "M:SS" format.
 */

function format(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remaining = seconds % 3600;
  const minutes = Math.floor(remaining / 60);
  const secs = remaining % 60;

  // Always two digits for seconds
  const secondsStr = secs.toString().padStart(2, '0');

  // Minutes formatting logic
  let minutesStr;
  if (hours > 0) {
    minutesStr = minutes.toString().padStart(2, '0');
  } else {
    minutesStr = minutes.toString();
  }

  if (hours > 0) {
    return `${hours}:${minutesStr}:${secondsStr}`;
  } else {
    // Ensure at least "0" minutes for durations under one minute
    return `${minutesStr || '0'}:${secondsStr}`;
  }
}