// PSEUDOCODE
// function getMovieNightCost(day, showtime, tickets)
//   if day is Tuesday
//     pricePerTicket = 5
//   else
//     if day is Friday, Saturday, Sunday
//       pricePerTicket = 12
//     else
//       pricePerTicket = 10
//
//     parse showtime into hours and minutes and am/pm
//     convert to 24-hour format
//
//     if time is before 17:00 (5pm)
//       subtract 2 from pricePerTicket
//
//   total = pricePerTicket * tickets
//   format total as "$D.CC"
//   return formatted string

/**
 * Calculates the total cost of movie tickets based on day, showtime, and quantity
 * @param {string} day - Day of the week
 * @param {string} showtime - Time in format "H:MMam" or "H:MMpm"
 * @param {number} tickets - Number of tickets
 * @returns {string} Total cost formatted as "$D.CC"
 */
function getMovieNightCost(day, showtime, tickets) {
  let pricePerTicket;

  if (day === "Tuesday") {
    pricePerTicket = 5;
  } else {
    const isWeekend = ["Friday", "Saturday", "Sunday"].includes(day);
    pricePerTicket = isWeekend ? 12 : 10;

    // Parse time
    const match = showtime.match(/(\d+):(\d+)(am|pm)/);
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const period = match[3];

    // Convert to 24-hour time
    if (period === "pm" && hours !== 12) hours += 12;
    if (period === "am" && hours === 12) hours = 0;

    const isMatinee = hours < 17;

    if (isMatinee) {
      pricePerTicket -= 2;
    }
  }

  const total = pricePerTicket * tickets;
  return `$${total.toFixed(2)}`;
}

