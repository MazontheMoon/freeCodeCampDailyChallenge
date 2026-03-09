function countPerfectCubes(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const start = Math.ceil(Math.cbrt(min));
  const end = Math.floor(Math.cbrt(max));

  return Math.max(0, end - start + 1);
}
