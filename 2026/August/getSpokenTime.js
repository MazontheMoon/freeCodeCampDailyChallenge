function getSpokenTime(hourAngle, minuteAngle) {
  const minutes = Math.floor(minuteAngle / 6);

  let hour = Math.floor(hourAngle / 30) % 12;
  if (hour === 0) hour = 12;

  const nextHour = hour === 12 ? 1 : hour + 1;

  if (minutes === 0) return `${hour} o'clock`;
  if (minutes === 15) return `quarter past ${hour}`;
  if (minutes === 30) return `half past ${hour}`;
  if (minutes === 45) return `quarter to ${nextHour}`;

  if (minutes < 30) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} past ${hour}`;
  }

  const remaining = 60 - minutes;
  return `${remaining} minute${remaining === 1 ? "" : "s"} to ${nextHour}`;
}