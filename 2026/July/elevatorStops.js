function elevatorStops(currentFloor, requests) {
  const above = requests
    .filter(f => f > currentFloor)
    .sort((a, b) => a - b);

  const below = requests
    .filter(f => f < currentFloor)
    .sort((a, b) => b - a);

  // If only one direction exists
  if (above.length === 0) return below;
  if (below.length === 0) return above;

  const highest = above[above.length - 1];
  const lowest = below[below.length - 1];

  // Total travel if going up first:
  // current -> highest -> lowest
  const upDistance =
    (highest - currentFloor) +
    (highest - lowest);

  // Total travel if going down first:
  // current -> lowest -> highest
  const downDistance =
    (currentFloor - lowest) +
    (highest - lowest);

  if (upDistance <= downDistance) {
    return [...above, ...below];
  } else {
    return [...below, ...above];
  }
}