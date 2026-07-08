function triageIssue(milliseconds, message) {
  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  if (milliseconds < sevenDays) {
    return "leave it";
  }

  if (message.toLowerCase().includes("bump")) {
    return "close it";
  }

  return "bump it";
}