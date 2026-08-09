function mixPaint(bucket1, bucket2) {
  const totalFullness = bucket1.fullness + bucket2.fullness;
  const mixedColor = [];

  for (let i = 0; i < 3; i++) {
    const weightedColor =
      (bucket1.color[i] * bucket1.fullness +
       bucket2.color[i] * bucket2.fullness) / totalFullness;

    mixedColor.push(Math.round(weightedColor));
  }

  return mixedColor;
}