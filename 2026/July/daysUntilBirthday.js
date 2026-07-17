function daysUntilBirthday(today, birthday) {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  const [year, month, day] = today.split("-").map(Number);
  const [bMonth, bDay] = birthday.split("/").map(Number);

  function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  }

  function nextBirthdayYear() {
    let y = year;

    // Special handling for Feb 29 birthdays
    if (bMonth === 2 && bDay === 29) {
      while (!isLeapYear(y) || new Date(y, 1, 29) < new Date(year, month - 1, day)) {
        y++;
      }
      return y;
    }

    let birthdayThisYear = new Date(y, bMonth - 1, bDay);

    // If birthday has already passed or is today, use next year
    if (birthdayThisYear <= new Date(year, month - 1, day)) {
      y++;
    }

    return y;
  }

  const targetYear = nextBirthdayYear();
  const todayDate = new Date(year, month - 1, day);
  const birthdayDate = new Date(targetYear, bMonth - 1, bDay);

  return Math.round((birthdayDate - todayDate) / MS_PER_DAY);
}