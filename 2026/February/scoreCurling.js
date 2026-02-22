function scoreCurling(house) {
  const red = [];
  const yellow = [];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const cell = house[r][c];

      if (cell === "R" || cell === "Y") {
        // Correct ring calculation
        const distance = Math.max(Math.abs(r - 2), Math.abs(c - 2));

        if (cell === "R") red.push(distance);
        if (cell === "Y") yellow.push(distance);
      }
    }
  }

  if (red.length === 0 && yellow.length === 0)
    return "No points awarded";

  if (red.length === 0)
    return `Y: ${yellow.length}`;

  if (yellow.length === 0)
    return `R: ${red.length}`;

  const redClosest = Math.min(...red);
  const yellowClosest = Math.min(...yellow);

  if (redClosest === yellowClosest)
    return "No points awarded";

  if (redClosest < yellowClosest) {
    const points = red.filter(d => d < yellowClosest).length;
    return `R: ${points}`;
  } else {
    const points = yellow.filter(d => d < redClosest).length;
    return `Y: ${points}`;
  }
}
