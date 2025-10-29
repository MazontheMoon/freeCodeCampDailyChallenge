/**
 * Simulates browser navigation commands and returns the current page.
 *
 * @param {string[]} commands - Array of browser commands executed on Netscape Navigator.
 * Each command can be one of:
 *   - "Visit <PageName>": Visit a new page and clear forward history.
 *   - "Back": Go to the previous page if possible.
 *   - "Forward": Go to the next page if possible.
 *
 * @returns {string} The name of the page you are currently on after executing all commands.
 *
 * @example
 * // Example: Visiting "About Us", going back, then forward returns "About Us".
 * navigate(["Visit About Us", "Back", "Forward"]); // → "About Us"
 */
function navigate(commands) {
  // --- PSEUDOCODE ---
  // 1. Initialize:
  //    - currentPage = "Home"
  //    - backStack = [] to hold pages you can go back to
  //    - forwardStack = [] to hold pages you can go forward to
  //
  // 2. For each command in commands:
  //    - If command starts with "Visit ":
  //        a. Push currentPage onto backStack
  //        b. Update currentPage to the new page name after "Visit "
  //        c. Clear forwardStack (new visit clears forward history)
  //
  //    - Else if command === "Back":
  //        a. If backStack not empty:
  //             i. Push currentPage onto forwardStack
  //            ii. Pop from backStack and set as currentPage
  //
  //    - Else if command === "Forward":
  //        a. If forwardStack not empty:
  //             i. Push currentPage onto backStack
  //            ii. Pop from forwardStack and set as currentPage
  //
  // 3. After processing all commands, return currentPage.

  let currentPage = "Home";
  const backStack = [];
  const forwardStack = [];

  for (const command of commands) {
    if (command.startsWith("Visit ")) {
      backStack.push(currentPage);
      currentPage = command.slice(6); // Extract page name after "Visit "
      forwardStack.length = 0; // Clear forward history
    } else if (command === "Back" && backStack.length > 0) {
      forwardStack.push(currentPage);
      currentPage = backStack.pop();
    } else if (command === "Forward" && forwardStack.length > 0) {
      backStack.push(currentPage);
      currentPage = forwardStack.pop();
    }
  }

  return currentPage;
}
