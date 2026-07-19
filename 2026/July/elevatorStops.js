function elevatorStops(currentFloor, requests) {
  const above = requests
    .filter(f => f > currentFloor)
    .sort((a, b) => a - b);

  const below = requests
    .filter(f => f < currentFloor)
    .sort((a, b) => b - a);

  if (above.length === 0) return below;
  if (below.length === 0) return above;

  const upDist = above[0] - currentFloor;
  const downDist = currentFloor - below[0];

  if (upDist <= downDist) {
    return [...above, ...below];
  } else {
    return [...below, ...above];
  }
}