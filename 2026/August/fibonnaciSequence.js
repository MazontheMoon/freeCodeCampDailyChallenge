function fibonacciSequence(start, length) {
  if (length === 0) {
    return [];
  }

  if (length === 1) {
    return [start[0]];
  }

  const sequence = [start[0], start[1]];

  while (sequence.length < length) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }

  return sequence;
}