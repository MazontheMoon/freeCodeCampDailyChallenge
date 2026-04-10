/**
 * Simulates browser navigation history
 * @param {string[]} commands
 * @returns {[string[], number]}
 */
function getBrowserHistory(commands) {
  let history = [];
  let currentIndex = -1;

  for (const cmd of commands) {
    if (cmd === "Back") {
      currentIndex = Math.max(0, currentIndex - 1);

    } else if (cmd === "Forward") {
      currentIndex = Math.min(history.length - 1, currentIndex + 1);

    } else {
      // ✅ Always cut forward history first
      history = history.slice(0, currentIndex + 1);

      history.push(cmd);
      currentIndex++;
    }
  }

  return [history, currentIndex];
}
