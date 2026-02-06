/**
 * Determines whether login activity meets digital detox rules.
 *
 * @param {string[]} logs - Array of login timestamps in "YYYY-MM-DD HH:mm:ss" format
 * @returns {boolean} True if detox goals are met, otherwise false
 */
 
 function digitalDetox(logs) {
  // Convert strings to Date objects
  const dates = logs
    .map(log => new Date(log.replace(" ", "T")))
    .sort((a, b) => a - b);

  const FOUR_HOURS = 4 * 60 * 60 * 1000;
  const dailyCounts = {};

  for (let i = 0; i < dates.length; i++) {
    const current = dates[i];

    // ---- Rule 1: 4-hour rule ----
    if (i > 0) {
      const diff = current - dates[i - 1];
      if (diff < FOUR_HOURS) {
        return false;
      }
    }

    // ---- Rule 2: Max 2 logins per day ----
    const dayKey = current.toISOString().split("T")[0];
    dailyCounts[dayKey] = (dailyCounts[dayKey] || 0) + 1;

    if (dailyCounts[dayKey] > 2) {
      return false;
    }
  }

  return true;
}
