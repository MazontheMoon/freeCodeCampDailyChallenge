// PSEUDOCODE
// function alarmCheck(alarmTime, wakeTime)
//   convert both times to total minutes
//
//   if wake < alarm
//     return "early"
//
//   if wake <= alarm + 10
//     return "on time"
//
//   return "late"

/**
 * Determines if wake-up time is early, on time, or late
 * @param {string} alarmTime - "HH:MM"
 * @param {string} wakeTime - "HH:MM"
 * @returns {string} "early", "on time", or "late"
 */
function alarmCheck(alarmTime, wakeTime) {
  function toMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }

  const alarm = toMinutes(alarmTime);
  const wake = toMinutes(wakeTime);

  if (wake < alarm) return "early";
  if (wake <= alarm + 10) return "on time";
  return "late";
}
